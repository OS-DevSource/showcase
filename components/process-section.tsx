"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
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
              <Card className="p-4 sm:p-6">
                <p className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                  Step {index + 1}
                </p>
                <h3 className="text-foreground mt-2 text-base font-semibold sm:text-lg">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mt-2 text-sm">{step.description}</p>
              </Card>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
