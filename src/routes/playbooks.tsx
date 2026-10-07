import { createFileRoute } from "@tanstack/react-router";
import { EmptyCollection, PageIntro } from "@/components/page-layout";

export const Route = createFileRoute("/playbooks")({
  head: () => ({
    meta: [
      { title: "Playbooks — Lisa Langel" },
      {
        name: "description",
        content: "Practical playbooks for navigating complex technical programs.",
      },
      { property: "og:title", content: "Program playbooks — Lisa Langel" },
      {
        property: "og:description",
        content: "Practical, reusable approaches to strategy, execution, and alignment.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PlaybooksPage,
});

function PlaybooksPage() {
  return (
    <>
      <PageIntro
        eyebrow="Playbooks"
        title="Repeatable approaches to hard program problems."
        description="Step-by-step guides to the sequence, judgment calls, and artifacts I use to run programs."
      />
      <section>
        <div className="mx-auto max-w-7xl px-5 py-12 md:py-20 lg:px-8">
          <EmptyCollection
            index="01"
            title="From ambiguity to operating plan"
            description="How to turn an open-ended mandate into workstreams, owners, and decisions."
          />
          <EmptyCollection
            index="02"
            title="Executive review preparation"
            description="How to build the narrative, show the tradeoffs, and state the ask."
          />
          <EmptyCollection
            index="03"
            title="Cross-functional risk reset"
            description="How to work out why execution stalled, with the team, and put clear owners back in place."
          />
        </div>
      </section>
    </>
  );
}
