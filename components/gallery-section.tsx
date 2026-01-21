"use client";

import { useId, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Reveal, RevealItem } from "@/components/reveal";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { useTouchDevice } from "@/lib/use-touch-device";

function GalleryTile({
  title,
  description,
  detail,
}: {
  title: string;
  description: string;
  detail?: string;
}) {
  const isTouch = useTouchDevice();
  const [open, setOpen] = useState(false);
  const contentId = useId();
  const expanded = open;
  const hint = isTouch ? "Tap for more detail" : "Hover for more detail";

  return (
    <button
      type="button"
      aria-expanded={expanded}
      aria-controls={contentId}
      onClick={() => setOpen((value) => !value)}
      className={cn(
        "focus-ring group border-border bg-card relative flex h-auto w-full flex-col justify-start overflow-hidden rounded-[var(--radius-md)] border p-4 text-left transition sm:h-44 sm:p-5",
        "hover:border-primary/40 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]",
        "dark:hover:border-primary/60"
      )}
      data-open={expanded}
    >
      <div className="relative z-10">
        <p className="text-foreground text-sm font-semibold">{title}</p>
        <div id={contentId} className="text-muted-foreground mt-2 text-sm">
          {description}
        </div>
        {detail && (
          <div
            className={cn(
              "text-muted-foreground mt-2 text-xs transition-opacity",
              expanded ? "opacity-100" : isTouch ? "opacity-0" : "opacity-0 group-hover:opacity-100"
            )}
          >
            {detail}
          </div>
        )}
      </div>
      <span className="text-muted-foreground relative z-10 mt-3 hidden text-xs font-semibold tracking-wide uppercase sm:mt-6 sm:inline">
        {hint}
      </span>
      <div
        className={cn(
          "absolute inset-0 opacity-0 transition",
          expanded ? "opacity-100" : "group-hover:opacity-100"
        )}
      >
        <div className="bg-primary/10 absolute inset-0" />
      </div>
    </button>
  );
}

export function GallerySection() {
  return (
    <section className="section-padding" id="gallery">
      <div className="bg-background pointer-events-none absolute inset-0 z-0" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
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
              <GalleryTile title={item.title} description={item.description} detail={item.detail} />
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
