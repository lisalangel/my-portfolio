import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageIntro } from "@/components/page-layout";
import { Button } from "@/components/ui/button";

const SUBSTACK_URL = "https://substack.com/@lisalangel";

export const Route = createFileRoute("/substack")({
  head: () => ({
    meta: [
      { title: "Substack — Lisa Langel" },
      {
        name: "description",
        content:
          "Lisa Langel writes on Substack about work, technology, AI, and the occasional process that makes you wonder why it's so complicated.",
      },
      { property: "og:title", content: "Substack — Lisa Langel" },
      {
        property: "og:description",
        content:
          "Ideas, things she's learning, and observations about work, technology, and AI — on Substack.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SubstackPage,
});

function SubstackPage() {
  return (
    <PageIntro
      eyebrow="Substack"
      title={
        <>
          <span className="block">Things I’m</span>
          <span className="block font-script text-[1.18em] font-semibold leading-[1.15] text-primary">
            thinking about.
          </span>
        </>
      }
      description={
        <>
          Ideas, things I’m learning, and observations about work, technology, AI, and the
          occasional process that makes me wonder,{" "}
          <span className="italic">why is this so complicated?</span>
        </>
      }
    >
      <Button asChild size="lg" className="mt-8 w-fit rounded-sm shadow-none">
        <a href={SUBSTACK_URL} target="_blank" rel="noopener noreferrer">
          Read on Substack <ArrowRight />
        </a>
      </Button>
    </PageIntro>
  );
}
