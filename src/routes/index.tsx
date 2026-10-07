import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Blocks, BrainCircuit, CircleDotDashed } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ArrowLink } from "@/components/site-shell";

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
          <div className="flex items-center gap-3">
            <span className="size-2.5 shrink-0 rounded-full bg-primary" />
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground md:text-xs">
              AI Program Management · Enterprise AI
            </span>
          </div>

          <h1 className="mt-8 flex flex-col gap-1 md:mt-10 md:gap-2">
            <span className="font-display text-[2.5rem] font-semibold leading-[1] md:text-6xl md:leading-[0.95] lg:text-[5.4rem]">
              Big problems.
            </span>
            <span className="font-display text-[2rem] font-light italic leading-[1.12] md:text-5xl md:leading-[1.1] lg:text-[4.2rem]">
              <span className="whitespace-nowrap">Lots of moving parts.</span>
            </span>
            <span className="font-display text-[2.5rem] font-semibold leading-[1] md:text-6xl md:leading-[0.95] lg:text-[5.4rem]">
              <span className="block sm:inline">I make</span>{" "}
              <span className="whitespace-nowrap">complicated work</span>
            </span>
            <span className="mt-1 font-script text-[2.9rem] font-semibold leading-[1.05] text-primary md:mt-3 md:text-[5rem] md:leading-[0.95] lg:text-[6rem]">
              a little <span className="whitespace-nowrap">less complicated.</span>
            </span>
          </h1>

          <div className="mt-12 h-px w-full bg-border md:mt-16" />

          <div className="mt-12 grid grid-cols-1 md:mt-16 md:grid-cols-12 md:items-end md:gap-8">
            <div className="space-y-6 md:col-span-8 md:space-y-7 lg:col-span-8 xl:col-span-8">
              <p className="max-w-xl font-display text-xl font-normal text-foreground md:text-2xl">
                Hi, I’m Lisa!
              </p>
              <p className="max-w-xl text-lg leading-8 text-muted-foreground">
                I’m a Technical Program Manager. I like figuring out complicated things, connecting
                dots, and making sense of the project and people chaos when there are approximately
                47 people, 12 dependencies, and one very important deadline involved.
              </p>
              <p className="max-w-xl text-lg leading-8 text-muted-foreground">
                I’m curious about AI, how teams actually get things done, and why so many processes
                are harder than they need to be.
              </p>
              <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:gap-8">
                <p className="max-w-md text-lg leading-8 text-muted-foreground">
                  This is where I’m keeping track of what I’m learning, building, and thinking about
                  along the way.
                </p>
                <Button asChild size="lg" className="w-fit shrink-0 rounded-sm shadow-none xl:mb-1">
                  <Link to="/prompt-library">
                    Explore the prompt library <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
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
            <article
              key={label}
              className="border-b border-background/15 p-7 md:min-h-64 md:border-b-0 md:border-r md:p-9 last:border-r-0"
            >
              <Icon className="size-6 text-primary" />
              <span className="mt-12 block font-mono text-xs text-background/50">0{index + 1}</span>
              <h2 className="mt-4 font-display text-xl font-normal">{label}</h2>
              <p className="mt-3 text-sm leading-6 text-background/65">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-24 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs uppercase text-primary-ink">The working library</p>
              <h2 className="mt-4 max-w-2xl font-display text-4xl font-medium md:text-5xl">
                Tools for <span className="font-script text-[1.18em] text-primary">the work</span>{" "}
                behind the work.
              </h2>
            </div>
            <ArrowLink to="/skills-library">Browse all frameworks</ArrowLink>
          </div>
          <div className="grid gap-px border border-border bg-border md:grid-cols-2">
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
          </div>
        </div>
      </section>

      {SHOW_FEATURED_WORK && (
        <section className="bg-surface">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[1fr_1.4fr] md:py-24 lg:px-8">
            <p className="font-mono text-xs uppercase text-primary-ink">Featured work</p>
            <div>
              <h2 className="font-display text-4xl font-medium">
                Case studies and playbooks are in progress.
              </h2>
              <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">COMING SOON!</p>
              <div className="mt-8 flex flex-wrap gap-6">
                <ArrowLink to="/case-studies">View case studies</ArrowLink>
                <ArrowLink to="/playbooks">View playbooks</ArrowLink>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
