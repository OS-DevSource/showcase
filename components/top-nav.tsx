import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function TopNav() {
  return (
    <nav className="border-border/60 bg-background/80 sticky top-0 z-50 border-b backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          <Link
            href="#"
            className="focus-ring text-foreground hover:text-foreground/80 text-lg font-semibold transition-colors"
          >
            {siteConfig.brandName}
          </Link>
          <div className="text-muted-foreground flex flex-wrap items-center gap-4 text-sm font-semibold">
            {siteConfig.nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="focus-ring hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <ThemeToggle />
          <Button asChild size="sm">
            <a href={siteConfig.ctaPrimaryHref} target="_blank" rel="noopener noreferrer">
              {siteConfig.nav.ctaLabel}
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
}
