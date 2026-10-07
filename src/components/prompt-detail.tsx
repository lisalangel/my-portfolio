import { useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { LibraryItem } from "@/lib/portfolio-data";

export function PromptDetail({ item }: { item: LibraryItem }) {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  if (!item.prompt) return null;

  async function copyPrompt() {
    if (!item.prompt) return;
    try {
      await navigator.clipboard.writeText(item.prompt);
      setCopied(true);
      setCopyError(false);
    } catch {
      setCopyError(true);
      setCopied(false);
    }
  }

  return (
    <Dialog
      onOpenChange={() => {
        setCopied(false);
        setCopyError(false);
      }}
    >
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="mt-6 rounded-sm shadow-none"
          aria-label={`View prompt: ${item.title}`}
        >
          View prompt <ArrowUpRight />
        </Button>
      </DialogTrigger>
      <DialogContent className="flex max-h-[85dvh] w-[calc(100%-2rem)] max-w-2xl flex-col gap-0 overflow-hidden p-0">
        <DialogHeader className="shrink-0 border-b border-border p-6 pr-10 text-left">
          <p className="mb-3 font-mono text-xs uppercase text-primary-ink">
            {item.category} · Microsoft 365 Copilot
          </p>
          <DialogTitle className="font-display text-2xl font-medium leading-tight tracking-normal">
            {item.title}
          </DialogTitle>
          <DialogDescription className="pt-2 leading-6">{item.summary}</DialogDescription>
        </DialogHeader>
        <div className="min-h-0 overflow-y-auto p-6">
          <pre className="whitespace-pre-wrap break-words font-sans text-sm leading-7">
            {item.prompt}
          </pre>
        </div>
        <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-t border-border bg-surface px-6 py-4">
          <p role="status" className="text-sm text-muted-foreground">
            {copyError
              ? "Copy unavailable. Select the prompt text to copy it."
              : copied
                ? "Prompt copied."
                : "Microsoft 365 Copilot"}
          </p>
          <Button onClick={copyPrompt} className="rounded-sm shadow-none">
            {copied ? <Check /> : <Copy />} {copied ? "Copied" : "Copy prompt"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
