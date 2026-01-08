"use client";

import { Badge } from "@/components/ui/badge";
import { Reveal, RevealItem } from "@/components/reveal";
import { siteConfig } from "@/lib/site-config";

export function ProcessSection() {
  return (
    <section className="section-padding" id="process">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4">
          <Badge className="w-fit">Process</Badge>
          <h2 className="text-3xl font-[var(--font-display)] font-semibold md:text-4xl">
            {siteConfig.process.title}
          </h2>
        </div>
        <Reveal className="mt-10 grid gap-4 md:grid-cols-2">
          {siteConfig.process.steps.map((step, index) => (
            <RevealItem key={step.title}>
              <div className="relative isolate h-full overflow-hidden rounded-[var(--radius-md)]">
                <div
                  aria-hidden="true"
                  className="gradient-border pointer-events-none absolute inset-0 rounded-[var(--radius-md)]"
                />
                <div className="bg-card relative z-10 m-px h-full rounded-[var(--radius-md)] p-6">
                  <p className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                    Step {index + 1}
                  </p>
                  <h3 className="text-foreground mt-2 text-lg font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm">{step.description}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
