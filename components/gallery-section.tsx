"use client";

import { useId, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Reveal, RevealItem } from "@/components/reveal";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { useTouchDevice } from "@/lib/use-touch-device";

function GalleryTile({ title, description }: { title: string; description: string }) {
  const isTouch = useTouchDevice();
  const [open, setOpen] = useState(false);
  const contentId = useId();
  const expanded = open;
  const hint = isTouch ? "Tap for details" : "Hover for details";

  return (
    <button
      type="button"
      aria-expanded={expanded}
      aria-controls={contentId}
      onClick={() => setOpen((value) => !value)}
      className={cn(
        "focus-ring group border-border bg-card relative flex h-44 w-full flex-col justify-between overflow-hidden rounded-[var(--radius-md)] border p-5 text-left transition",
        "hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
      )}
      data-open={expanded}
    >
      <div className="relative z-10">
        <p className="text-foreground text-sm font-semibold">{title}</p>
        <div
          id={contentId}
          className={cn(
            "text-muted-foreground mt-2 text-sm transition-opacity",
            expanded ? "opacity-100" : isTouch ? "opacity-0" : "opacity-0 group-hover:opacity-100"
          )}
        >
          {description}
        </div>
      </div>
      <span className="text-muted-foreground relative z-10 mt-6 text-xs font-semibold tracking-wide uppercase">
        {hint}
      </span>
      <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(74,88,255,0.12)] via-transparent to-[rgba(255,110,72,0.18)]" />
      </div>
    </button>
  );
}

export function GallerySection() {
  return (
    <section className="section-padding" id="gallery">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4">
          <Badge className="w-fit">Gallery</Badge>
          <h2 className="text-3xl font-[var(--font-display)] font-semibold md:text-4xl">
            {siteConfig.gallery.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl">{siteConfig.gallery.description}</p>
        </div>
        <Reveal className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.gallery.items.map((item) => (
            <RevealItem key={item.title}>
              <GalleryTile title={item.title} description={item.description} />
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
