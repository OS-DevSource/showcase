import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function TopNav() {
  return (
    <nav className="border-border/60 bg-background/80 sticky top-0 z-50 border-b backdrop-blur">
      <div className="mx-auto w-full max-w-6xl px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-3 md:grid md:grid-cols-3 md:items-center md:gap-4">
          {/* Brand (left) */}
          <div className="flex items-center">
            <Link
              href="#"
              className="focus-ring text-foreground hover:text-foreground/80 text-base font-semibold transition-colors sm:text-lg"
            >
              {siteConfig.brandName}
            </Link>
          </div>

          {/* Section links (center, md+ only) */}
          <div className="text-muted-foreground hidden items-center justify-center gap-4 text-sm font-semibold md:flex">
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

          {/* Actions (right) */}
          <div className="flex items-center justify-end gap-2 sm:gap-3">
            <ThemeToggle />
            <Button asChild size="sm" className="h-9 px-3 text-sm sm:h-10 sm:px-4">
              <a
                href={siteConfig.ctaPrimaryHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {siteConfig.nav.ctaLabel}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
