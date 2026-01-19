"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MOTION_DELAY, MOTION_DURATION, MOTION_DURATION_LONG, MOTION_EASE } from "@/lib/motion";
import { siteConfig } from "@/lib/site-config";
import { useCursorGlow } from "@/lib/cursor-glow";
import { useTouchDevice } from "@/lib/use-touch-device";

const AmbientCanvas = dynamic(
  () => import("@/components/ambient-canvas").then((mod) => mod.AmbientCanvas),
  {
    ssr: false,
  }
);

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const isTouch = useTouchDevice();
  const [showCanvas, setShowCanvas] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;
    const frame = requestAnimationFrame(() => setShowCanvas(true));
    return () => cancelAnimationFrame(frame);
  }, [reduceMotion]);

  useCursorGlow(!reduceMotion && !isTouch);

  return (
    <section className="relative isolate overflow-hidden">
      <div className="glow-field pointer-events-none absolute inset-0 -z-10">
        <div className="blob blob-one" />
        <div className="blob blob-two" />
        {showCanvas && !reduceMotion && <AmbientCanvas />}
        <div className="noise-layer absolute inset-0" />
        <div className="vignette-layer absolute inset-0 hidden dark:block" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 pt-28 pb-20 md:pt-32 md:pb-24">
        <Badge className="border-foreground/10 text-foreground/70 w-fit">
          {siteConfig.hero.highlight}
        </Badge>
        <div className="flex flex-col gap-6">
          <h1 className="text-foreground text-4xl leading-tight font-[var(--font-display)] font-semibold text-balance md:text-6xl">
            <span className="block overflow-hidden">
              <motion.span
                initial={reduceMotion ? false : { y: 120 }}
                animate={{ y: 0 }}
                transition={{ duration: MOTION_DURATION_LONG, ease: MOTION_EASE }}
                className="inline-block"
              >
                {siteConfig.hero.headlineLines[0]}
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={reduceMotion ? false : { y: 120 }}
                animate={{ y: 0 }}
                transition={{
                  duration: MOTION_DURATION_LONG,
                  ease: MOTION_EASE,
                  delay: MOTION_DELAY,
                }}
                className="relative inline-block"
              >
                {siteConfig.hero.headlineLines[1]}
                <span className="animated-gradient absolute -bottom-2 left-0 h-2 w-full rounded-full opacity-70" />
              </motion.span>
            </span>
          </h1>
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: MOTION_DURATION, ease: MOTION_EASE, delay: 0.18 }}
            className="text-muted-foreground max-w-2xl text-lg md:text-xl"
          >
            {siteConfig.hero.subhead}
          </motion.p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button size="lg" asChild>
            <a href={siteConfig.ctaPrimaryHref} target="_blank" rel="noopener noreferrer">
              {siteConfig.ctaPrimaryLabel}
            </a>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <Link href={siteConfig.ctaSecondaryHref}>{siteConfig.ctaSecondaryLabel}</Link>
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {siteConfig.hero.bullets.map((item) => (
            <div
              key={item}
              className="border-border bg-card text-foreground/80 rounded-[var(--radius-sm)] border px-4 py-3 text-sm font-semibold"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
