import type { ReactNode } from "react";

export function PageIntro({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-16 md:py-24 lg:px-8">
        <p className="mb-5 font-mono text-xs font-semibold uppercase text-primary-ink">{eyebrow}</p>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.55fr)_minmax(280px,.65fr)] lg:items-end">
          <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[1.05] md:text-7xl">
            {title}
          </h1>
          <div>
            <p className="max-w-xl text-base leading-7 text-muted-foreground md:text-lg">
              {description}
            </p>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export function EmptyCollection({
  index,
  title,
  description,
}: {
  index: string;
  title: string;
  description: string;
}) {
  return (
    <article className="group grid gap-6 border-t border-border py-8 md:grid-cols-[80px_1fr_auto] md:items-center">
      <span className="font-mono text-xs text-muted-foreground">{index}</span>
      <div>
        <h2 className="font-display text-2xl font-normal">{title}</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">{description}</p>
      </div>
      <span className="w-fit rounded-sm bg-secondary px-3 py-1.5 font-mono text-[11px] uppercase text-muted-foreground">
        In development
      </span>
    </article>
  );
}
