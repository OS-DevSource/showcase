# Repo Walkthrough

Below is a full, detailed walkthrough of the codebase as it exists in this repo. It is organized by architecture, data flow, UI structure, styling, utilities, API, tests, and tooling, with file paths for each area.

## Overview

- This is a Next.js 16 App Router project focused on a single landing page. Entry points live in `app/`. The UI is built from section components in `components/`, with content data in `lib/site-config.ts`. Styling is Tailwind v4 with CSS variables in `styles/globals.css`, and a small set of shadcn-style primitives in `components/ui/`. Tests are in `tests/` using Vitest and React Testing Library.

## Runtime flow (high level)

- The app renders a single page at `/` via `app/page.tsx` that composes sections in a fixed order.
- Theme is controlled by `next-themes` in `components/theme-provider.tsx` and toggled by `components/theme-toggle.tsx`, which sets the `dark` class on `html`.
- Colors, spacing, and component visuals are driven by CSS variables in `styles/globals.css` and mapped to Tailwind tokens in `tailwind.config.ts`.
- The contact form posts to `/api/contact` in `app/api/contact/route.ts`. If no external endpoint is configured, it returns demo mode and the client stores submissions locally.

---

## App Router and entry points

- `app/layout.tsx`
  - Defines metadata for SEO, Open Graph, and Twitter.
  - Loads Google font Manrope and exposes it via `--font-sans`.
  - Wraps the entire app in ThemeProviders so theme class switching happens early.
- `app/page.tsx`
  - Renders the single landing page, in order:
    - TopNav
    - HeroSection
    - ProofSection
    - GallerySection
    - ProcessSection
    - DeliverablesSection
    - FaqSection
    - FinalCtaSection
    - SiteFooter
  - The page container sets `bg-background` and `text-foreground`.
- `app/api/contact/route.ts`
  - POST endpoint for the contact form.
  - Validates payload with `contactSchema` and blocks honeypot spam.
  - If `CONTACT_ENDPOINT` is unset, responds with `{ ok: true, demoMode: true }`.
  - Otherwise forwards the payload as JSON to the external endpoint.

## SEO and metadata routes

- `app/robots.ts` returns an allow-all robots policy and a sitemap URL.
- `app/sitemap.ts` returns a single sitemap entry for the homepage.

---

## Section components and layout composition

All section components are in `components/` and use data from `lib/site-config.ts`.

- `components/top-nav.tsx`
  - Sticky nav with border and backdrop blur.
  - Brand link on the left.
  - Section links from `siteConfig.nav.links`.
  - Theme toggle and primary CTA button on the right.
- `components/hero-section.tsx`
  - Hero headline with optional single accent word, animated with Framer Motion.
  - Subhead and primary/secondary CTA buttons.
  - Trust metrics row uses `siteConfig.hero.trust`.
  - Background uses subtle glow-field with noise and vignette layers.
  - Uses `useReducedMotion` to respect reduced motion.
- `components/proof-section.tsx`
  - Two column layout on desktop: left copy column, right media column.
  - Left column can be sticky via `sticky-shell` when not on touch and not reduced motion.
  - Right column contains a BeforeAfterSlider and case study cards.
- `components/gallery-section.tsx`
  - Grid of six tiles from `siteConfig.gallery.items`.
  - Base description is always visible. Optional detail reveals on hover or tap.
  - Uses internal state to expand tiles on touch.
- `components/process-section.tsx`
  - Steps from `siteConfig.process.steps`, rendered as cards.
- `components/deliverables-section.tsx`
  - Four deliverable cards from `siteConfig.deliverables.items`.
- `components/faq-section.tsx`
  - Accordion-based FAQ list, 6 items, covering pricing, timeline, revisions, ownership, support, and getting started.
- `components/final-cta-section.tsx`
  - Closing CTA with a primary button and microcopy.
  - Includes a ContactForm card and mailto fallback.
- `components/site-footer.tsx`
  - Simple footer with brand and a one line description.

---

## Reusable UI primitives

These are shadcn-style primitives that use CSS variables and Tailwind tokens.

- `components/ui/button.tsx`
  - primary, secondary, and ghost variants.
  - Primary uses `bg-primary` and `text-primary-foreground`.
  - Secondary uses accent outline and subtle hover fill.
  - Rounded-xl, focus ring via `focus-ring`.
- `components/ui/card.tsx`
  - Uses `bg-card`, `text-card-foreground`, `border-border`.
  - Subtle hover lift and focus-within ring.
- `components/ui/badge.tsx`
  - Uppercase label pill.
- `components/ui/input.tsx` and `components/ui/textarea.tsx`
  - `bg-background`, `border-input`, and `text-foreground`.
- `components/ui/accordion.tsx`
  - Radix accordion wrapper with a focus ring on triggers.

---

## Interactive and utility components

- `components/before-after-slider.tsx`
  - Accessible comparison slider with keyboard and pointer control.
  - Uses two Next Image layers; the after image is clipped with clipPath.
  - Slider handle is a `role="slider"` element with ARIA attributes.
- `components/reveal.tsx`
  - Framer Motion wrapper for staggered, fade up reveals.
  - Uses viewport detection for in-view animations.
- `components/tilt-card.tsx`
  - Wraps children and applies tilt via CSS variables when enabled.
  - Disabled on touch or reduced motion.
- `components/ambient-canvas.tsx`
  - Canvas-based gradient animation background.
  - Not currently used in the page but left for optional enhancement.
- `components/theme-provider.tsx`
  - `next-themes` provider that applies the theme class to `html`.
- `components/theme-toggle.tsx`
  - Inline radio group for Light, Dark, Auto.
  - Uses local storage with `storageKey="showcase-theme"`.

---

## Data, configuration, and copy

- `lib/site-config.ts`
  - Central content and copy for the entire landing page.
  - Defines:
    - brandName, siteTitle, siteDescription
    - Primary and secondary CTA labels and URLs
    - Navigation links and CTA label
    - Hero headline, subhead, accent word, trust metrics
    - Proof section title, description, example metrics
    - Gallery items with description and detail
    - Process steps and deliverables
    - Case studies for proof cards
    - FAQ list
    - Final CTA title and description
- `lib/contact-schema.ts`
  - Zod schema for contact form validation:
    - Required: name, email, message
    - Honeypot: website
- `lib/motion.ts`
  - Motion constants and Framer Motion variants.
  - Durations are short to match the design spec.
- `lib/tilt.ts`
  - Hook to compute tilt based on pointer position.
- `lib/use-touch-device.ts`
  - Hook that returns true on coarse pointer devices.
- `lib/utils.ts`
  - cn helper for Tailwind class merging.

---

## Styling system

- `styles/globals.css`
  - Tailwind v4 import via `@import "tailwindcss";`.
  - CSS variables for theme tokens in `:root` and `.dark`:
    - `--background`, `--foreground`, `--card`, `--popover`, `--muted`, `--primary`, `--secondary`, `--accent`, `--border`, `--input`, `--ring`, `--destructive`, `--radius`
  - `@theme inline` maps CSS variables to Tailwind token names.
  - Utility classes for:
    - section padding spacing and separators
    - glow-field ambient background
    - focus-ring for accessible focus outlines
    - tilt-card transform helpers
    - sticky-shell for sticky column behavior
- `styles/noise.css`
  - noise-layer and vignette-layer overlays for subtle texture.

---

## Public assets

- `public/before.png` and `public/after.png` used in the proof slider.
- `public/og.png` and `public/favicon.png` for metadata and favicon.

---

## Testing

Tests are written with Vitest and React Testing Library.

- `tests/smoke.test.tsx`
  - Ensures key sections render on the home page.
- `tests/proof-section.test.tsx`
  - Validates that the slider container is not sticky or fixed.
- `tests/before-after-slider.test.tsx`
  - Checks keyboard and pointer interaction updates slider value.
- `tests/contact-form.test.tsx`
  - Validates required fields.
  - Ensures honeypot detection works on the client.
- `tests/contact-route.test.ts`
  - Validates honeypot rejection and demo mode response.
- `tests/theme-toggle.test.tsx` and `tests/theme-toggle-initial.test.tsx`
  - Theme toggling, persistence, and initial state behavior.

Test setup is in `vitest.setup.ts`, which:
- Mocks matchMedia, ResizeObserver, and requestAnimationFrame.
- Mocks next/image and next/link for DOM testing.
- Provides a stub for IntersectionObserver.

---

## Tooling and configuration

- `package.json`
  - Scripts: dev, build, lint, typecheck, test, format.
  - Dependencies include Next 16, React 19, Framer Motion, Radix, Zod, Tailwind v4, and next-themes.
- `tailwind.config.ts`
  - Maps CSS variables to Tailwind tokens for shadcn compatibility.
  - Uses class-based dark mode.
- `eslint.config.mjs`
  - Next core web vitals and TypeScript configs, plus prettier.
- `tsconfig.json`
  - Strict type checking, Next plugin enabled, alias `@/*`.
- `postcss.config.mjs`
  - Tailwind v4 postcss plugin.
- `next.config.ts`
  - Minimal config, no custom overrides.

---

## Primary data flow and interaction patterns

- Content comes from `lib/site-config.ts` and is passed to sections.
- Theme changes set a `dark` class on the root element, which switches CSS variable values.
- UI primitives and section components consume Tailwind classes tied to these tokens.
- The contact form is fully client controlled, validated with Zod, and posted to the API.
- The API route either forwards to a configured endpoint or returns demo mode.