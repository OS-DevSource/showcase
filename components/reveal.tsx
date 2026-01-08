"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, revealViewport, staggerContainer } from "@/lib/motion";

export function Reveal({
  className,
  children,
  noReveal = false,
}: {
  className?: string;
  children: React.ReactNode;
  noReveal?: boolean;
}) {
  const shouldReveal = !noReveal;

  return (
    <motion.div
      className={cn(className)}
      variants={shouldReveal ? staggerContainer : undefined}
      initial={shouldReveal ? "hidden" : false}
      whileInView={shouldReveal ? "show" : undefined}
      viewport={shouldReveal ? revealViewport : undefined}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  className,
  children,
  noReveal = false,
}: {
  className?: string;
  children: React.ReactNode;
  noReveal?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const shouldReveal = !noReveal;

  return (
    <motion.div
      className={cn(className)}
      variants={shouldReveal ? fadeUp : undefined}
      initial={shouldReveal ? "hidden" : false}
      whileInView={shouldReveal ? "show" : undefined}
      viewport={shouldReveal ? revealViewport : undefined}
      transition={reduceMotion ? { duration: 0 } : undefined}
    >
      {children}
    </motion.div>
  );
}
