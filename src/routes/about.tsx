import { createFileRoute } from "@tanstack/react-router";

import portraitUrl from "@/assets/lisa-portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Lisa Langel" },
      {
        name: "description",
        content:
          "Lisa Langel is a Senior Technical Program Manager who makes complicated, messy problems easier to understand and execute.",
      },
      { property: "og:title", content: "About Lisa Langel" },
      {
        property: "og:description",
        content:
          "Senior Technical Program Manager working between strategy and execution — alignment, risk, decisions, and AI-assisted program management.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const interests = [
  "AI platforms and enterprise AI",
  "Technical program leadership",
  "Program operations and operating models",
  "Stakeholder alignment and decision-making",
  "AI-assisted program management",
  "Automation and agentic workflows",
  "Making complex work simpler and more scalable",
];

const audience = [
  {
    label: "The TPM community",
    text: "Operating practice, not theory — what actually makes programs legible.",
  },
  {
    label: "AI practitioners",
    text: "People applying AI to real program work, past the demo stage.",
  },
  {
    label: "Product managers",
    text: "Partners turning ambiguous strategy into work teams can ship.",
  },
  {
    label: "Engineers",
    text: "The people who make plans real, and the systems that support them.",
  },
  {
    label: "Mentors and mentees",
    text: "Two-way learning: structured guidance, honest questions.",
  },
];

function AboutPage() {
  return (
    <>
      <section>
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[.55fr_1.45fr] md:py-24 lg:px-8">
          <div className="md:sticky md:top-28 md:self-start">
            <div className="mx-auto aspect-square w-full max-w-sm">
              <img
                src={portraitUrl}
                alt="Lisa Langel, Senior Technical Program Manager"
                className="h-full w-full rounded-full object-cover object-center"
              />
            </div>
          </div>

          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase text-primary-ink">About me</p>
            <p className="mt-6 font-display text-3xl font-semibold leading-snug md:text-4xl">
              Somewhere between <span className="font-light italic">“wouldn’t it be cool if…”</span>{" "}
              and{" "}
              <span className="mr-1 font-script text-[1.18em] font-semibold leading-none text-primary">
                “it’s live”
              </span>{" "}
              is usually where you’ll find me
            </p>
            <div className="mt-8 space-y-6 leading-7 text-muted-foreground">
              <p>
                I’m a Senior Technical Program Manager who loves solving messy problems, learning
                new things, and turning ideas into experiences people can actually use.
              </p>
              <p>
                I’m also interested in the systems behind good program management: how teams
                communicate, make decisions, track progress, and stay aligned as a program grows. I
                tend to notice where a process isn't working, where information gets lost, or where
                teams are solving the same problem in different ways. Then I look for a better way
                to structure it.
              </p>
              <p className="border-l-2 border-primary pl-6 text-foreground">
                I’ve been spending a lot of time exploring AI and what it can change about the way
                we work. I like experimenting, learning what works, and, ideally, shipping something
                along the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-24 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[1fr_1.6fr]">
            <div>
              <p className="font-mono text-xs uppercase text-primary-ink">Who this is for</p>
              <h2 className="mt-4 font-display text-4xl font-medium leading-tight md:text-5xl">
                Written for people doing the{" "}
                <span className="font-script text-[1.18em] font-semibold text-primary">work</span>.
              </h2>
            </div>
            <div className="grid gap-px self-start border border-border bg-border sm:grid-cols-2">
              {audience.map(({ label, text }, index) => {
                const last = index === audience.length - 1;
                return (
                  <article
                    key={label}
                    className={
                      "bg-background p-6" +
                      (last ? " sm:col-span-2 sm:flex sm:items-baseline sm:gap-10" : "")
                    }
                  >
                    <h3 className="font-display text-lg font-normal">{label}</h3>
                    <p
                      className={
                        "mt-2 text-sm leading-6 text-muted-foreground" +
                        (last ? " sm:mt-0 sm:max-w-xl" : "")
                      }
                    >
                      {text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-24 lg:px-8">
          <p className="font-mono text-xs uppercase text-primary">Areas I’m interested in</p>
          <ul className="mt-10 grid gap-x-10 border-t border-background/15 sm:grid-cols-2 lg:grid-cols-3">
            {interests.map((item, index) => {
              const last = index === interests.length - 1;
              return (
                <li
                  key={item}
                  className={
                    "flex items-baseline gap-4 border-b border-background/15 pr-4 " +
                    (last ? "py-8 sm:col-span-2 lg:col-span-3" : "py-5")
                  }
                >
                  <span className="font-mono text-xs text-background/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={
                      last
                        ? "font-display text-2xl font-normal leading-snug md:text-3xl"
                        : "font-display text-lg font-normal"
                    }
                  >
                    {item}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
