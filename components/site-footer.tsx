import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-border/60 border-t py-8">
      <div className="text-muted mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 text-sm md:flex-row md:items-center">
        <p>
          {siteConfig.brandName} {year}. All rights reserved.
        </p>
        <p>Crafted as a proof of concept for premium redesign services.</p>
      </div>
    </footer>
  );
}
