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
        "focus-ring border-border bg-card font-[var(--font-button)] inline-flex h-10 items-center rounded-full border p-1 text-xs font-semibold",
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
              "focus-ring h-8 rounded-full px-3 transition",
              selected
                ? "bg-foreground text-background shadow-[var(--shadow-soft)]"
                : "text-muted-foreground hover:bg-muted/60 hover:text-foreground dark:hover:bg-muted/30"
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
