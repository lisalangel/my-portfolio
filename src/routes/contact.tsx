import { createFileRoute } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";

import { PageIntro } from "@/components/page-layout";

const LINKEDIN_URL = "https://www.linkedin.com/in/lisalangel/";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Lisa Langel" },
      {
        name: "description",
        content:
          "Start a conversation with Lisa Langel about AI platform strategy and technical program leadership.",
      },
      { property: "og:title", content: "Contact Lisa Langel" },
      {
        property: "og:description",
        content:
          "Connect about AI platform strategy, complex programs, and collaborative leadership.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Tell me what you’re working on."
        description="Share what you’re working through, the decision in front of you, or the kind of collaboration you have in mind."
      />
      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-24 lg:px-8">
          <div className="flex flex-col gap-8 border border-border bg-surface p-8 md:flex-row md:items-center md:justify-between md:gap-12 md:p-12">
            <div>
              <h2 className="font-display text-2xl font-normal">Connect</h2>
              <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
                Find me on LinkedIn.
              </p>
            </div>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-3 border border-border bg-background px-4 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
            >
              <Linkedin className="size-5" />
              linkedin.com/in/lisalangel
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
