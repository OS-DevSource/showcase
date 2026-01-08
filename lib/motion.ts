import { Variants } from "framer-motion";

export const MOTION_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const MOTION_DURATION = 0.65;
export const MOTION_DURATION_LONG = 0.85;
export const MOTION_STAGGER = 0.12;
export const MOTION_DELAY = 0.08;
export const revealViewport = { once: true, amount: 0.2 };

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: MOTION_DURATION, ease: MOTION_EASE },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: MOTION_STAGGER,
      delayChildren: MOTION_DELAY,
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: MOTION_EASE },
  },
};
