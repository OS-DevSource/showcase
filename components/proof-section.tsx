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
      <div className="relative mx-auto max-w-6xl px-6">
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
                  className="border-border bg-card flex items-center justify-between rounded-[var(--radius-sm)] border px-4 py-3"
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
                  <TiltCard className="h-full">
                    <Card className="border-border/80 bg-card/90 h-full rounded-[var(--radius-md)]">
                      <CardHeader>
                        <CardTitle>{study.title}</CardTitle>
                        <p className="text-muted-foreground text-sm">Problem: {study.problem}</p>
                      </CardHeader>
                      <CardContent className="text-muted-foreground space-y-3 text-sm">
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
