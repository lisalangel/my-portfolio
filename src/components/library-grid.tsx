import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PromptDetail } from "@/components/prompt-detail";
import type { LibraryItem } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export function LibraryGrid({ items, noun }: { items: LibraryItem[]; noun: string }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", ...new Set(items.map((item) => item.category))];
  const filtered = useMemo(
    () =>
      items.filter((item) => {
        const searchable = [
          item.title,
          item.summary,
          item.category,
          item.prompt ?? "",
          ...item.tags,
        ]
          .join(" ")
          .toLowerCase();
        return (
          (category === "All" || item.category === category) &&
          searchable.includes(query.toLowerCase())
        );
      }),
    [category, items, query],
  );

  return (
    <div>
      <div className="sticky top-16 z-20 border-b border-border bg-background/95 py-5 backdrop-blur">
        <div className="flex flex-col gap-4">
          <label className="relative block min-w-0 flex-1">
            <span className="sr-only">Search {noun}</span>
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={`Search ${noun} by name, use, or tag`}
              className="h-11 rounded-sm bg-surface pl-10 shadow-none"
            />
          </label>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
            <SlidersHorizontal className="mr-1 size-4 shrink-0 text-muted-foreground" />
            {categories.map((name) => (
              <Button
                key={name}
                type="button"
                size="sm"
                variant={category === name ? "default" : "outline"}
                aria-pressed={category === name}
                className="shrink-0 rounded-sm shadow-none"
                onClick={() => setCategory(name)}
              >
                {name}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between py-6 text-sm text-muted-foreground">
        <span>
          {filtered.length} {filtered.length === 1 ? noun.replace(/s$/, "") : noun}
        </span>
        <span className="font-mono text-xs uppercase">Curated collection</span>
      </div>
      {filtered.length ? (
        <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
          {filtered.map((item, index) => (
            <article
              key={item.title}
              className="group min-h-64 bg-background p-6 transition-colors hover:bg-surface md:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Badge
                  variant="outline"
                  className={cn(
                    "rounded-sm font-mono text-[10px] uppercase",
                    item.status === "Available" && "border-primary text-primary-ink",
                  )}
                >
                  {item.status}
                </Badge>
              </div>
              <h2 className="mt-10 font-display text-2xl font-normal">{item.title}</h2>
              <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
                {item.summary}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-sm bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <PromptDetail item={item} />
            </article>
          ))}
        </div>
      ) : (
        <div className="border border-dashed border-border py-20 text-center">
          <p className="font-display text-xl font-normal">No matches found</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Try a different search or clear the selected category.
          </p>
          <Button
            className="mt-5 rounded-sm"
            variant="outline"
            onClick={() => {
              setQuery("");
              setCategory("All");
            }}
          >
            Clear filters
          </Button>
        </div>
      )}
    </div>
  );
}
