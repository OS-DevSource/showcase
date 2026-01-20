# AI Context Pack

Purpose

- This folder contains the minimal set of documents that an assistant should read to work effectively in this repo.

Read order

1. 10_REPO_WALKTHROUGH.md
   - What exists in the codebase and where it lives (architecture map).
2. 20_PREMIUM_LANDING_BLUEPRINT.md
   - Design and quality contract (mobile-first, premium polish, conversion-first).
3. 30_KNOWN_ISSUES.md
   - Active bugs and polish items to avoid regressions and guide fixes.
4. 40_DECISIONS_LOG.md
   - Key decisions so we do not re-litigate them.

Rules

- Do not invent files, routes, or patterns. Search the repo and use what exists.
- Preserve the single-page "/" architecture unless explicitly asked otherwise.
- Edit copy and links in lib/site-config.ts first when possible.
- Keep styling token-driven (Tailwind v4 + CSS variables in styles/globals.css).
- Maintain accessibility and reduced-motion behavior.
- Do not refactor, rename, or reorganize unless explicitly requested.

Supporting docs (optional, reference as needed)

- docs/ACCESSIBILITY.md
- docs/PERFORMANCE.md
- docs/MOBILE.md
- docs/POLISH.md
- docs/BUILD_LOG.md
