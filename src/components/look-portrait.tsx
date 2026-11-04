import { useEffect, useRef, useState } from "react";

import front from "@/assets/portrait/front.webp";
import left from "@/assets/portrait/left.webp";
import right from "@/assets/portrait/right.webp";
import up from "@/assets/portrait/up.webp";
import down from "@/assets/portrait/down.webp";
import wink from "@/assets/portrait/wink.webp";

type Pose = "front" | "left" | "right" | "up" | "down";
type Frame = Pose | "wink";
const FRAMES: Record<Frame, string> = { front, left, right, up, down, wink };
const POSES = Object.keys(FRAMES) as Frame[];

const SETTLE_MS = 120;
const REACTION_MS = 900;
const DIAGONAL_BAND = 0.18; // |dx|/|dy| ratio margin where the previous direction is kept

/** Pure direction picker, exported for tests. */
export function pickPose(dx: number, dy: number, size: number, prev: Pose): Pose {
  const dist = Math.hypot(dx, dy);
  if (dist < size * 0.3 || dist > size * 4) return "front";
  const ax = Math.abs(dx);
  const ay = Math.abs(dy);
  const horizontal: Pose = dx < 0 ? "left" : "right";
  const vertical: Pose = dy < 0 ? "up" : "down";
  if (Math.abs(ax - ay) < Math.max(ax, ay) * DIAGONAL_BAND && (prev === horizontal || prev === vertical)) {
    return prev;
  }
  return ax > ay ? horizontal : vertical;
}

export function LookPortrait({ className = "" }: { className?: string }) {
  const boxRef = useRef<HTMLButtonElement>(null);
  const [pose, setPose] = useState<Pose>("front");
  const [loaded, setLoaded] = useState<Set<Frame>>(() => new Set());
  const [reacting, setReacting] = useState(false);
  const poseRef = useRef<Pose>("front");
  const reactTimer = useRef<number | undefined>(undefined);

  // Preload every frame; a pose is only shown once its image has decoded.
  useEffect(() => {
    let alive = true;
    POSES.forEach((p) => {
      const img = new Image();
      img.src = FRAMES[p];
      img
        .decode()
        .catch(() => undefined)
        .then(() => {
          if (alive && img.complete && img.naturalWidth > 0) setLoaded((s) => new Set(s).add(p));
        });
    });
    return () => {
      alive = false;
    };
  }, []);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarse = window.matchMedia("(hover: none), (pointer: coarse)");
    let settle: number | undefined;
    let visible = true;

    const reset = () => {
      window.clearTimeout(settle);
      poseRef.current = "front";
      setPose("front");
    };
    const onMove = (e: PointerEvent) => {
      if (reduced.matches || coarse.matches || e.pointerType === "touch" || !visible) return;
      const r = box.getBoundingClientRect();
      const next = pickPose(
        e.clientX - (r.left + r.width / 2),
        e.clientY - (r.top + r.height * 0.4),
        r.width,
        poseRef.current,
      );
      window.clearTimeout(settle);
      if (next === poseRef.current) return;
      settle = window.setTimeout(() => {
        poseRef.current = next;
        setPose(next);
      }, SETTLE_MS);
    };
    const onVisibility = () => document.hidden && reset();
    const io = new IntersectionObserver(([entry]) => {
      visible = !!entry?.isIntersecting;
      if (!visible) reset();
    });
    io.observe(box);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", reset);
    document.addEventListener("visibilitychange", onVisibility);
    reduced.addEventListener("change", reset);
    return () => {
      window.clearTimeout(settle);
      window.clearTimeout(reactTimer.current);
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", reset);
      document.removeEventListener("visibilitychange", onVisibility);
      reduced.removeEventListener("change", reset);
    };
  }, []);

  const react = () => {
    window.clearTimeout(reactTimer.current);
    setReacting(true);
    reactTimer.current = window.setTimeout(() => setReacting(false), REACTION_MS);
  };

  const wanted: Frame = reacting ? "wink" : pose;
  const shown: Frame = loaded.has(wanted) ? wanted : loaded.has(pose) ? pose : "front";

  return (
    <button
      ref={boxRef}
      type="button"
      onClick={react}
      aria-label="Portrait of Lisa Langel. Activate to say hi."
      className={`relative block aspect-[4/3] w-44 shrink-0 cursor-pointer rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:w-56 ${className}`}
    >
      <span className={`absolute inset-0 block `}>
        {POSES.map((p) => (
          <img
            key={p}
            src={FRAMES[p]}
            alt=""
            width={480}
            height={360}
            decoding="async"
            loading="eager"
            draggable={false}
            className="absolute inset-0 h-full w-full select-none object-contain"
            style={{ opacity: p === shown ? 1 : 0 }}
          />
        ))}
      </span>
    </button>
  );
}
