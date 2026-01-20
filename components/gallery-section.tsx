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
  const lines = description.split("\n").map((line) => line.trim()).filter(Boolean);
  const problemLine = lines.find((line) => line.startsWith("Problem:")) ?? lines[0] ?? "";
  const deliverableLine =
    lines.find((line) => line.startsWith("- ")) ??
    lines.find(
      (line) =>
        !line.startsWith("Problem:") &&
        !line.startsWith("Deliverables") &&
        !line.startsWith("Outcome")
    ) ??
    "";
  const deliverableText = deliverableLine.replace(/^- /, "") || "Conversion focused update";

  return (
    <button
      type="button"
      aria-expanded={expanded}
      aria-controls={contentId}
      onClick={() => setOpen((value) => !value)}
      className={cn(
        "focus-ring group border-border/70 bg-card/95 relative flex h-44 w-full flex-col justify-between overflow-hidden rounded-[var(--radius-md)] border p-5 text-left transition duration-300",
        "shadow-[inset_0_0_0_1px_rgba(255,255,255,0.4)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-[var(--radius-md)] before:bg-[radial-gradient(120%_120%_at_12%_0%,rgb(var(--accent)_/_0.24)_0%,rgb(var(--spot-1)_/_0.16)_38%,transparent_70%)] before:opacity-70 before:transition before:duration-300",
        "hover:border-accent/70 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(12,14,24,0.22)] hover:before:opacity-100",
        "group-focus-visible:before:opacity-100",
        "dark:hover:border-border/80 dark:hover:shadow-[0_26px_80px_rgba(0,0,0,0.6)]"
      )}
      data-open={expanded}
    >
      <div className="relative z-10 flex flex-1 flex-col">
        <p className="text-foreground text-sm font-semibold">{title}</p>
        <div className="relative mt-2 flex-1">
          <div
            className={cn(
              "text-muted-foreground space-y-2 text-sm leading-snug transition-opacity duration-300",
              expanded
                ? "opacity-0"
                : "opacity-100 group-hover:opacity-0 group-focus-visible:opacity-0"
            )}
          >
            <p>{problemLine}</p>
            <div className="text-foreground/70 text-[11px] font-semibold tracking-wide uppercase">
              Deliverables
            </div>
            <p className="text-muted-foreground text-sm">- {deliverableText}</p>
          </div>
          <div
            id={contentId}
            className={cn(
              "text-muted-foreground absolute inset-0 text-sm whitespace-pre-line transition-all duration-300",
              expanded
                ? "opacity-100 translate-y-0"
                : isTouch
                  ? "opacity-0 translate-y-2"
                  : "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0"
            )}
          >
            {description}
          </div>
        </div>
      </div>
      <span className="text-muted-foreground relative z-10 mt-6 text-xs font-semibold tracking-wide uppercase">
        {hint}
      </span>
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgb(var(--accent)_/_0.32),rgb(var(--spot-1)_/_0.2),transparent_60%)]" />
      </div>
    </button>
  );
}

export function GallerySection() {
  return (
    <section className="section-padding" id="gallery">
      <div className="section-backdrop pointer-events-none absolute inset-0 z-0" aria-hidden="true" />
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
              <GalleryTile title={item.title} description={item.description} />
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
