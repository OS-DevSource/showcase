"use client";

import { ThemeProvider } from "next-themes";

export function ThemeProviders({ children }: { children: React.ReactNode }) {
  // next-themes injects a tiny script to avoid flicker by setting the class before hydration.
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="showcase-theme"
    >
      {children}
    </ThemeProvider>
  );
}
