import { createFileRoute } from "@tanstack/react-router";
import { LibraryGrid } from "@/components/library-grid";
import { PageIntro } from "@/components/page-layout";
import { prompts } from "@/lib/portfolio-data";

export const Route = createFileRoute("/prompt-library")({
  head: () => ({
    meta: [
      { title: "Prompt library — Lisa Langel" },
      {
        name: "description",
        content:
          "Lisa Langel’s Microsoft 365 Copilot prompts for technical program leadership, career growth, and requirements meetings.",
      },
      { property: "og:title", content: "AI prompt library — Lisa Langel" },
      {
        property: "og:description",
        content: "Reusable AI workflows designed for practical technical program leadership.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PromptLibraryPage,
});

function PromptLibraryPage() {
  return (
    <>
      <PageIntro
        eyebrow="Prompt library"
        title={
          <>
            <span className="block">AI workflows</span>
            <span className="block font-light italic leading-[1.12] text-[0.8em] md:text-[0.82em]">
              built for real world
            </span>
            <span className="block font-script text-[1.18em] font-semibold leading-[1.15] text-primary">
              program work.
            </span>
          </>
        }
        description="Some of my favorite professional superpower prompts for Microsoft 365 Copilot, from weekly impact and leadership growth to the questions that make requirements meetings better."
      />
      <section>
        <div className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
          <LibraryGrid items={prompts} noun="prompts" />
        </div>
      </section>
    </>
  );
}
