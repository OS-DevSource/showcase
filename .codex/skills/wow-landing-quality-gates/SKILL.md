---
name: wow-landing-quality-gates
description: Verify Showcase quality gates and acceptance criteria (lint, typecheck, test, build, mobile, a11y, console cleanliness).
---

# wow-landing-quality-gates

## Purpose
Verify Showcase is done and meets the quality gates.

## Commands
- pnpm lint
- pnpm typecheck
- pnpm test
- pnpm build

## Acceptance criteria
- Lint passes with zero warnings.
- Typecheck passes with zero errors.
- Tests pass (at least 6) with no flaky timing hacks.
- Build completes without errors.
- Manual smoke check:
  - Open http://localhost:3000
  - Scroll all sections
  - Toggle theme (Light/Dark/Auto)
  - Drag the before/after slider
  - Submit the contact form
  - Console shows 0 warnings and 0 errors
- Mobile check (DevTools):
  - 360x800, 390x844, 412x915, 430x932
  - No horizontal scroll
  - CTAs visible and tappable
  - Slider handle easy to drag
  - Form usable and readable
- Reduced motion:
  - With prefers-reduced-motion enabled, tilt/parallax/sticky effects are disabled or simplified.

## Notes
- If CONTACT_ENDPOINT is not set, the contact form uses demo mode and stores submissions in localStorage.
