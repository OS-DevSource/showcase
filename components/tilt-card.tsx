"use client";

import { useReducedMotion } from "framer-motion";
import { useTilt } from "@/lib/tilt";
import { useTouchDevice } from "@/lib/use-touch-device";
import { cn } from "@/lib/utils";

export function TiltCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const reduceMotion = useReducedMotion();
  const isTouch = useTouchDevice();
  const enabled = !reduceMotion && !isTouch;
  const ref = useTilt(enabled);

  return (
    <div
      ref={ref}
      className={cn("tilt-card", className)}
      data-tilt-disabled={enabled ? "false" : "true"}
    >
      {children}
    </div>
  );
}
