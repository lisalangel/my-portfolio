import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navItems } from "@/lib/portfolio-data";
import logoUrl from "@/assets/lisa-langel-logo-mustard.png";

const LINKEDIN_URL = "https://www.linkedin.com/in/lisalangel/";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" className="group flex items-center" aria-label="Lisa Langel home">
          <img
            src={logoUrl}
            alt="Lisa Langel"
            width={228}
            height={80}
            className="h-11 w-auto mix-blend-multiply transition-transform group-hover:-rotate-2"
          />
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-sm px-3 py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "bg-secondary text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[88%] bg-background">
            <SheetHeader className="border-b border-border pb-5 text-left">
              <SheetTitle className="font-display">Lisa Langel</SheetTitle>
              <SheetDescription>Technical Program Manager</SheetDescription>
            </SheetHeader>
            <nav className="mt-8 flex flex-col" aria-label="Mobile navigation">
              {navItems.map((item, index) => (
                <SheetClose asChild key={item.to}>
                  <Link
                    to={item.to}
                    className="flex items-center justify-between border-b border-border py-4 font-display text-lg"
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                  </Link>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 py-12 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="flex max-w-3xl flex-col font-display leading-[1.3]">
              <span className="text-xl font-semibold md:text-[1.4rem]">
                Be curious, learn new things,
              </span>
              <span className="text-xl font-light italic text-background/80 md:text-[1.4rem]">
                solve messy problems,
              </span>
              <span className="text-xl font-semibold md:text-[1.4rem]">
                make ideas become real things people can actually use.
              </span>
              <span className="font-script text-3xl font-semibold leading-none text-primary md:text-4xl">
                repeat
              </span>
            </p>
          </div>
          <div className="text-sm text-background/60 md:text-right">
            <p>Lisa Langel · Technical Program Manager</p>
          </div>
        </div>
        <nav
          aria-label="Footer"
          className="flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-background/15 py-6"
        >
          <Link
            to="/prompt-library"
            className="text-sm text-background/70 transition-colors hover:text-background"
          >
            Prompt library
          </Link>
          <Link
            to="/contact"
            className="text-sm text-background/70 transition-colors hover:text-background"
          >
            Contact
          </Link>
          <a
            href="https://substack.com/@lisalangel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-background/70 transition-colors hover:text-background"
          >
            Substack
            <ArrowUpRight className="size-3.5" />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-background/70 transition-colors hover:text-background"
          >
            LinkedIn
            <ArrowUpRight className="size-3.5" />
          </a>
        </nav>
      </div>
    </footer>
  );
}

export function ArrowLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
    >
      {children}
      <ArrowUpRight className="size-4" />
    </Link>
  );
}
