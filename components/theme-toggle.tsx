"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const options = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "system", label: "Auto" },
] as const;

export function ThemeToggle({ className }: { className?: string }) {
  // next-themes persists the selected theme in localStorage using the storageKey.
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const current = mounted ? (theme ?? "system") : "system";

  return (
    <div
      role="radiogroup"
      aria-label="Theme"
      aria-hidden={!mounted}
      className={cn(
        "focus-ring border-border bg-card inline-flex h-9 items-center rounded-full border p-0.5 text-[11px] leading-none font-semibold sm:h-10 sm:p-1 sm:text-xs",
        mounted ? "opacity-100" : "pointer-events-none opacity-0",
        className
      )}
    >
      {options.map((option) => {
        const selected = current === option.value;
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={selected}
            aria-label={option.label}
            onClick={() => setTheme(option.value)}
            className={cn(
              "focus-ring h-8 rounded-full px-2.5 transition sm:px-3",
              selected
                ? "bg-foreground text-background shadow-[var(--shadow-soft)]"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
