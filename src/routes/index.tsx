import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Blocks, BrainCircuit, CircleDotDashed } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ArrowLink } from "@/components/site-shell";
import { Reveal } from "@/components/reveal";
import { LookPortrait } from "@/components/look-portrait";

// Set to true to bring back the "Featured work" band on the homepage once
// case studies and playbooks have real content to show.
const SHOW_FEATURED_WORK = false;

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lisa Langel — AI platform strategy and execution" },
      {
        name: "description",
        content:
          "Technical Program Manager bringing structure, clarity, and executive-ready thinking to complex AI platform programs.",
      },
      { property: "og:title", content: "Lisa Langel — AI platform strategy and execution" },
      {
        property: "og:description",
        content: "Technical program leadership for complex AI platform strategy and execution.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return (
    <>
      <section className="overflow-hidden border-b border-border">
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-12 md:pb-24 md:pt-20 lg:px-8">
          <div className="hero-rise flex items-center gap-3">
            <span className="size-2.5 shrink-0 rounded-full bg-primary" />
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground md:text-xs">
              AI Program Management · Enterprise AI
            </span>
          </div>

          <h1 className="mt-8 flex flex-col gap-1 md:mt-10 md:gap-2">
            <span
              className="hero-rise font-display text-[2.1rem] font-semibold leading-[1] md:text-[3.25rem] md:leading-[0.95] lg:text-[4.5rem]"
              style={{ animationDelay: "70ms" }}
            >
              Big ideas,
            </span>
            <span
              className="hero-rise font-display text-[1.7rem] font-light italic leading-[1.12] md:text-[2.7rem] md:leading-[1.1] lg:text-[3.6rem]"
              style={{ animationDelay: "140ms" }}
            >
              <span className="whitespace-nowrap">messy middles,</span>
            </span>
            <span
              className="hero-rise font-display text-[2.1rem] font-semibold leading-[1] md:text-[3.25rem] md:leading-[0.95] lg:text-[4.5rem]"
              style={{ animationDelay: "210ms" }}
            >
              and
            </span>
            <span
              className="hero-rise relative mt-1 w-fit font-script text-[2.4rem] font-semibold leading-[1.05] text-primary md:mt-3 md:text-[4.3rem] md:leading-[0.95] lg:text-[5.1rem]"
              style={{ animationDelay: "280ms" }}
            >
              making things <span className="whitespace-nowrap">happen.</span>
              <svg
                className="absolute -bottom-1 left-0 h-[0.18em] w-full md:-bottom-2"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M3 9 C 40 3, 75 11, 110 6 S 175 4, 197 7"
                  pathLength={1}
                  className="draw-line stroke-primary"
                  strokeWidth={4}
                  strokeLinecap="round"
                  style={{ animationDelay: "900ms" }}
                />
              </svg>
            </span>
          </h1>

          <div
            className="hero-rise mt-12 h-px w-full bg-border md:mt-16"
            style={{ animationDelay: "350ms" }}
          />

          <div className="mt-12 grid grid-cols-1 md:mt-16 md:grid-cols-[1.618fr_1fr] md:items-end md:gap-8">
            <div className="hero-rise space-y-6 md:space-y-7" style={{ animationDelay: "420ms" }}>
              <div className="flex items-center gap-4">
                <p className="font-script text-3xl font-bold text-foreground md:text-4xl">
                  Hi, I’m Lisa!
                </p>
                <LookPortrait />
              </div>
              <p className="max-w-xl text-lg leading-8 text-muted-foreground">
                I’m a Technical Program Manager with 12+ years of experience turning big ideas into
                real results. People, moving pieces, tricky dependencies, and a deadline to keep
                things interesting? That’s my specialty.
              </p>
              <p className="max-w-xl text-lg leading-8 text-muted-foreground">
                I’m especially excited about AI, how it’s changing the way we work, and all the
                possibilities it opens up. I love experimenting with new ideas, challenging the way
                things have always been done, and finding smarter, simpler ways to make things happen.
              </p>
              <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:gap-8">
                <p className="max-w-md text-lg leading-8 text-muted-foreground">
                  I started{" "}
                  <a
                    href="https://lisasd.substack.com/?utm_campaign=profile_chips"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-primary-ink underline underline-offset-4 hover:text-primary"
                  >
                    this Substack
                  </a>{" "}
                  as a place to share what I’m learning, experimenting with, and figuring out along
                  the way. A little curiosity, a few lessons learned, and hopefully some ideas worth
                  sharing.
                </p>
                <Button asChild size="lg" className="w-fit shrink-0 rounded-sm shadow-none xl:mb-1">
                  <Link to="/prompt-library">
                    Explore the prompt library <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="bg-foreground text-background">
        <div className="mx-auto grid max-w-7xl md:grid-cols-3">
          {[
            {
              icon: BrainCircuit,
              label: "AI leverage",
              text: "Reusable prompts that make strategic thinking faster and more consistent.",
            },
            {
              icon: Blocks,
              label: "Operating systems",
              text: "Frameworks for turning ambiguous goals into plans teams can execute.",
            },
            {
              icon: CircleDotDashed,
              label: "Leadership clarity",
              text: "Updates and reviews that make the decision, the tradeoffs, and the ask clear.",
            },
          ].map(({ icon: Icon, label, text }, index) => (
            <Reveal
              key={label}
              delay={index * 140}
              className="border-b border-background/15 p-7 md:min-h-64 md:border-b-0 md:border-r md:p-9 last:border-r-0"
            >
              <Icon className="size-6 text-primary" />
              <span className="mt-12 block font-mono text-xs text-gold">0{index + 1}</span>
              <h2 className="mt-4 font-display text-xl font-normal">{label}</h2>
              <p className="mt-3 text-sm leading-6 text-background/65">{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-24 lg:px-8">
          <Reveal className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs uppercase text-primary-ink">The working library</p>
              <h2 className="mt-4 max-w-2xl font-display text-4xl font-medium md:text-5xl">
                Tools for <span className="font-script text-[1.18em] text-primary">the work</span>{" "}
                behind the work.
              </h2>
            </div>
            <ArrowLink to="/skills-library">Browse all frameworks</ArrowLink>
          </Reveal>
          <Reveal delay={140} className="grid gap-px border border-border bg-border md:grid-cols-2">
            <Link
              to="/prompt-library"
              className="group bg-background p-7 transition-colors hover:bg-surface md:p-10"
            >
              <span className="font-mono text-xs text-muted-foreground">01 / PROMPT LIBRARY</span>
              <h3 className="mt-16 font-display text-3xl font-normal">Reusable AI workflows</h3>
              <p className="mt-3 max-w-md leading-7 text-muted-foreground">
                Structured prompts for synthesis, risk, decisions, and program communication.
              </p>
              <ArrowRight className="mt-10 size-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/skills-library"
              className="group bg-surface p-7 transition-colors hover:bg-highlight md:p-10"
            >
              <span className="font-mono text-xs text-muted-foreground">02 / SKILLS LIBRARY</span>
              <h3 className="mt-16 font-display text-3xl font-normal">TPM operating frameworks</h3>
              <p className="mt-3 max-w-md leading-7 text-muted-foreground">
                Repeatable methods for strategy, alignment, execution, and leadership.
              </p>
              <ArrowRight className="mt-10 size-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {SHOW_FEATURED_WORK && (
        <section className="bg-surface">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[1fr_1.4fr] md:py-24 lg:px-8">
            <p className="font-mono text-xs uppercase text-primary-ink">Featured work</p>
            <div>
              <h2 className="font-display text-4xl font-medium">Playbooks are in progress.</h2>
              <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">COMING SOON!</p>
              <div className="mt-8 flex flex-wrap gap-6">
                <ArrowLink to="/playbooks">View playbooks</ArrowLink>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
