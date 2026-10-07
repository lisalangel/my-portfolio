import { createFileRoute } from "@tanstack/react-router";
import { LibraryGrid } from "@/components/library-grid";
import { PageIntro } from "@/components/page-layout";
import { skills } from "@/lib/portfolio-data";

export const Route = createFileRoute("/skills-library")({
  head: () => ({
    meta: [
      { title: "Skills library — Lisa Langel" },
      {
        name: "description",
        content:
          "TPM operating frameworks for strategy, alignment, execution, systems, and leadership.",
      },
      { property: "og:title", content: "TPM skills library — Lisa Langel" },
      {
        property: "og:description",
        content: "Practical operating frameworks for complex technical programs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SkillsLibraryPage,
});

function SkillsLibraryPage() {
  return (
    <>
      <PageIntro
        eyebrow="Skills library"
        title="My toolkit for the messy middle."
        description="Frameworks, methods, and tools I use to make sense of problems, get people aligned, and figure out what to do next."
      />
      <section>
        <div className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
          <LibraryGrid items={skills} noun="skills" />
        </div>
      </section>
    </>
  );
}
