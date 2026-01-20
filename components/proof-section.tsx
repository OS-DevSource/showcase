"use client";

import { useReducedMotion } from "framer-motion";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TiltCard } from "@/components/tilt-card";
import { Reveal, RevealItem } from "@/components/reveal";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";
import { useTouchDevice } from "@/lib/use-touch-device";

export function ProofSection() {
  const reduceMotion = useReducedMotion();
  const isTouch = useTouchDevice();
  const stickyEnabled = !reduceMotion && !isTouch;

  return (
    <section id="proof" className="section-padding">
      <div
        className="section-backdrop pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
          <div className={cn("flex flex-col gap-6", stickyEnabled ? "sticky-shell" : "")}>
            <Badge className="w-fit">Proof</Badge>
            <div>
              <h2 className="text-3xl font-[var(--font-display)] font-semibold md:text-4xl">
                {siteConfig.proof.title}
              </h2>
              <p className="text-muted-foreground mt-3 text-base">{siteConfig.proof.description}</p>
            </div>
            <div className="grid gap-3">
              {siteConfig.proof.metrics.map((metric) => (
                <div
                  key={metric.value}
                  className="border-border/70 bg-card/95 flex items-center justify-between rounded-[var(--radius-sm)] border px-4 py-3 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
                >
                  <span className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                    {metric.label}
                  </span>
                  <span className="text-foreground text-sm font-semibold">{metric.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <BeforeAfterSlider beforeSrc="/before.png" afterSrc="/after.png" />
            <Reveal className="grid gap-4 md:grid-cols-3">
              {siteConfig.caseStudies.map((study) => (
                <RevealItem key={study.title} className="h-full">
                  <TiltCard className="group h-full">
                    <Card className="border-border/70 bg-card/90 relative h-full overflow-hidden rounded-[var(--radius-md)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_24px_70px_rgba(12,14,24,0.22)] before:pointer-events-none before:absolute before:inset-0 before:rounded-[var(--radius-md)] before:bg-[radial-gradient(120%_120%_at_14%_0%,rgb(var(--accent)_/_0.18)_0%,rgb(var(--spot-2)_/_0.12)_45%,transparent_70%)] before:opacity-70 before:transition before:duration-300 group-hover:before:opacity-100 after:pointer-events-none after:absolute after:inset-0 after:rounded-[var(--radius-md)] after:bg-[linear-gradient(140deg,rgb(var(--accent)_/_0.28),rgb(var(--spot-1)_/_0.16),transparent_65%)] after:opacity-0 after:transition after:duration-300 group-hover:after:opacity-100 dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)] dark:group-hover:shadow-[0_24px_70px_rgba(0,0,0,0.55)]">
                      <CardHeader className="relative z-10">
                        <CardTitle>{study.title}</CardTitle>
                        <p className="text-muted-foreground text-sm">Problem: {study.problem}</p>
                      </CardHeader>
                      <CardContent className="text-muted-foreground relative z-10 space-y-3 text-sm">
                        <p>Fix: {study.fix}</p>
                        <p className="text-foreground font-semibold">{study.result}</p>
                      </CardContent>
                    </Card>
                  </TiltCard>
                </RevealItem>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
