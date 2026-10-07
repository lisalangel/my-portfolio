import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/page-layout";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case studies — Lisa Langel" },
      {
        name: "description",
        content: "Case studies in AI platform strategy and complex technical program execution.",
      },
      { property: "og:title", content: "Case studies — Lisa Langel" },
      {
        property: "og:description",
        content: "Detailed accounts of strategy, decisions, execution, and learning.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Case studies"
        title="The decisions behind the delivery."
        description="Each case study will cover the context, constraints, decisions, execution, and what I learned."
      />
      <section>
        <div className="mx-auto max-w-7xl px-5 py-12 md:py-20 lg:px-8">
          <p className="border-t border-border pt-8 font-display text-3xl font-normal md:text-4xl">
            Coming{" "}
            <span className="font-script text-[1.18em] font-semibold text-primary">soon</span>
          </p>
        </div>
      </section>
    </>
  );
}
