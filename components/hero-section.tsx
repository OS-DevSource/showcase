"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MOTION_DELAY, MOTION_DURATION, MOTION_DURATION_LONG, MOTION_EASE } from "@/lib/motion";
import { siteConfig } from "@/lib/site-config";

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const accentWord = siteConfig.hero.accentWord;
  const lineTwo = siteConfig.hero.headlineLines[1];
  const accentParts = useMemo(() => {
    if (!accentWord || !lineTwo.includes(accentWord)) return null;
    const [before, after] = lineTwo.split(accentWord);
    return { before, after };
  }, [accentWord, lineTwo]);

  return (
    <section className="relative isolate overflow-hidden">
      <div className="glow-field pointer-events-none absolute inset-0 -z-10">
        <div className="noise-layer absolute inset-0" />
        <div className="vignette-layer absolute inset-0 hidden dark:block" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24">
        <Badge className="border-foreground/10 text-foreground/70 w-fit">
          {siteConfig.hero.highlight}
        </Badge>
        <div className="flex flex-col gap-5">
          <h1 className="text-foreground font-[var(--font-display)] font-semibold text-balance text-3xl leading-[1.12] sm:text-4xl md:text-6xl">
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
                {accentParts ? (
                  <>
                    {accentParts.before}
                    <span className="text-primary">{accentWord}</span>
                    {accentParts.after}
                  </>
                ) : (
                  siteConfig.hero.headlineLines[1]
                )}
                <span className="bg-primary/70 absolute -bottom-2 left-0 h-1.5 w-full rounded-full opacity-70" />
              </motion.span>
            </span>
          </h1>
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: MOTION_DURATION, ease: MOTION_EASE, delay: 0.18 }}
            className="text-muted-foreground max-w-2xl text-base sm:text-lg md:text-xl"
          >
            {siteConfig.hero.subhead}
          </motion.p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button size="lg" className="h-11 px-5 text-sm sm:h-12 sm:px-6 sm:text-base" asChild>
            <a href={siteConfig.ctaPrimaryHref} target="_blank" rel="noopener noreferrer">
              {siteConfig.ctaPrimaryLabel}
            </a>
          </Button>
          <Button variant="secondary" size="lg" className="h-11 px-5 text-sm sm:h-12 sm:px-6 sm:text-base" asChild>
            <Link href={siteConfig.ctaSecondaryHref}>{siteConfig.ctaSecondaryLabel}</Link>
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {siteConfig.hero.trust.map((item) => (
            <div
              key={item.value}
              className="border-border bg-card rounded-[var(--radius-sm)] border px-3 py-2.5 sm:px-4 sm:py-3"
            >
              <p className="text-foreground text-sm font-semibold sm:text-base">{item.value}</p>
              <p className="text-muted-foreground text-[11px] font-semibold tracking-wide uppercase sm:text-xs">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
