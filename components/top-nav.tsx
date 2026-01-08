import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function TopNav() {
  return (
    <nav className="border-border/60 bg-background/80 sticky top-0 z-50 border-b backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="#"
          className="focus-ring text-foreground text-lg font-semibold transition-colors hover:text-foreground/80"
        >
          {siteConfig.brandName}
        </Link>
        <div className="flex flex-wrap items-center gap-3">
          <ThemeToggle />
          <Button asChild size="sm">
            <a href={siteConfig.ctaPrimaryHref} target="_blank" rel="noreferrer">
              {siteConfig.nav.ctaLabel}
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
}
