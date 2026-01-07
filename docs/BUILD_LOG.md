# Build log

Project

- Name: Showcase
- Date: 2026-01-06
- Node: 20.x (.nvmrc)
- pnpm: 9.15.1 (packageManager)
- Next.js: 16.1.1

Checklist

- [x] Scaffolded Next.js app with App Router, TypeScript, Tailwind, ESLint
- [x] Installed required dependencies (framer-motion, next-themes, shadcn/ui base, lucide-react, zod)
- [x] Theme system with Light, Dark, Auto and persistence
- [x] Hero, Proof, Gallery, Process, Deliverables, FAQ, Final CTA sections
- [x] Before/after slider with keyboard and pointer support
- [x] Case study cards with example outcomes labeled
- [x] Contact form with client and server validation + honeypot
- [x] Reduced motion support and touch fallbacks
- [x] SEO metadata, OG image, sitemap, robots
- [x] Tests added (6+)
- [x] CI workflow added
- [x] Mobile checklist completed (see docs/MOBILE.md)
- [x] Accessibility checklist completed (see docs/ACCESSIBILITY.md)
- [x] Performance checklist completed (see docs/PERFORMANCE.md)
- [x] Polish passes completed (see docs/POLISH.md)
- [x] Console cleanliness verification documented

Quality gates

- pnpm lint: passed
- pnpm typecheck: passed
- pnpm test: passed (9 tests)
- pnpm build: passed
- Note: next/font/google fetches fonts during build, so network access is required.

Console cleanliness verification

- Action: open http://localhost:3000, scroll all sections, toggle theme, drag slider, submit form
- Result: not run in this environment

## 2026-01-07 UI fixes

Root causes

- Primary tokens were missing, so the primary button relied on foreground/background values instead of primary tokens.
- ThemeToggle computed selection before mount, causing aria-checked to differ between SSR and the first client render.
- Proof sticky layout and background layers lacked consistent stacking boundaries, letting content appear to overlap.
- Reveal observers used an aggressive viewport margin, delaying triggers.

Fix summary

- Added primary and muted-foreground tokens with strong contrast, updated Button to use `bg-primary text-primary-foreground`, and migrated muted text classes to `text-muted-foreground`.
- Gated ThemeToggle theme selection behind the mounted flag to keep the SSR/first client render deterministic.
- Established section-level stacking (relative + z-0), moved hero background layers behind content with pointer-events disabled, and aligned sticky top offset with the header.
- Tuned reveal viewport thresholds and added touch-action disabling on the slider handle; toast animation now respects reduced motion.

Verification

- pnpm lint: passed
- pnpm typecheck: passed
- pnpm test: passed (9 tests)
- pnpm build: passed
- Manual dev verification (hydration warnings, scroll overlap, motion, mobile viewports): not run in this environment

## 2026-01-07 hardening pass

Hardening notes

- Enforced section-level isolation and decorative layer pointer-events to lock the z-index contract.
- Added regression tests for ThemeToggle initial render determinism and proof slider non-sticky structure.
- Hydration sweep: only `suppressHydrationWarning` remains on `<html>` for next-themes class updates.

Verification

- pnpm lint: passed
- pnpm typecheck: passed
- pnpm test: passed (10 tests)
- pnpm build: passed

## 2026-01-07 ring/glow stabilization

Root causes

- Process cards used a gradient border animation that translated the ring itself, which reads as drifting in dark mode.
- The ring lived as a pseudo-element without an explicit card wrapper isolate, so stacking context issues could surface between sections.

Fix summary

- Anchored the ring to each card with an explicit wrapper + absolute ring element and moved the animation to background-position only.
- Tightened reveal viewport thresholds to avoid re-triggers and ensured background effects stay behind content.

Verification

- pnpm lint: passed
- pnpm typecheck: passed
- pnpm test: passed (11 tests)
- pnpm build: passed
- Manual dev verification (ring alignment, no jarring restarts, stacking): not run in this environment
