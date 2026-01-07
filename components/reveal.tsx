"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Reveal({ className, children }: { className?: string; children: React.ReactNode }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      variants={reduceMotion ? undefined : staggerContainer}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      variants={reduceMotion ? undefined : fadeUp}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
    >
      {children}
    </motion.div>
  );
}
