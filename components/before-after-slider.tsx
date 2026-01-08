"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  className?: string;
};

export function BeforeAfterSlider({ beforeSrc, afterSrc, className }: BeforeAfterSliderProps) {
  // Slider state is stored as a percent so it is easy to map pointer and keyboard input.
  const [percent, setPercent] = useState(50);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const draggingRef = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const next = ((clientX - rect.left) / rect.width) * 100;
    const clamped = Math.min(95, Math.max(5, next));
    setPercent(clamped);
  }, []);

  const onPointerDown = (event: React.PointerEvent<HTMLButtonElement>) => {
    draggingRef.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    updatePosition(event.clientX);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (!draggingRef.current) return;
    updatePosition(event.clientX);
  };

  const onPointerUp = (event: React.PointerEvent<HTMLElement>) => {
    draggingRef.current = false;
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setPercent((value) => Math.max(5, value - 5));
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      setPercent((value) => Math.min(95, value + 5));
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "border-border bg-card relative aspect-[16/9] w-full overflow-hidden rounded-[var(--radius-md)] border",
        className
      )}
    >
      <Image
        src={beforeSrc}
        alt="Before redesign"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
        priority
      />
      <Image
        src={afterSrc}
        alt="After redesign"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
        style={{ clipPath: `inset(0 ${100 - percent}% 0 0)` }}
      />
      <div
        className="pointer-events-none absolute inset-0 flex items-center"
        style={{ left: `${percent}%` }}
      >
        <div className="bg-foreground/50 h-full w-px" />
      </div>
      <button
        type="button"
        aria-label="Compare before and after"
        aria-valuemin={5}
        aria-valuemax={95}
        aria-valuenow={Math.round(percent)}
        aria-valuetext={`${Math.round(percent)} percent`}
        role="slider"
        tabIndex={0}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onKeyDown={onKeyDown}
        className="focus-ring border-border bg-card absolute top-1/2 flex h-12 w-12 -translate-y-1/2 touch-none items-center justify-center rounded-full border shadow-[var(--shadow-soft)]"
        style={{ left: `calc(${percent}% - 24px)` }}
      >
        <span className="sr-only">Drag handle</span>
        <div className="bg-foreground text-background flex h-6 w-6 items-center justify-center rounded-full">
          <span className="text-xs font-semibold">|||</span>
        </div>
      </button>
      <div className="bg-foreground/70 text-background absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase">
        Before
      </div>
      <div className="bg-foreground/70 text-background absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase">
        After
      </div>
    </div>
  );
}
