# wow-landing-quality-gates

Purpose
- Verify Showcase is done and meets the quality gates.

Commands
- pnpm lint
- pnpm typecheck
- pnpm test
- pnpm build

Acceptance criteria
- Lint passes with zero warnings.
- Typecheck passes with zero errors.
- Tests pass (at least 6) with no flaky timing hacks.
- Build completes without errors.
- Manual smoke check: open http://localhost:3000, scroll all sections, toggle theme, drag the before/after slider, submit the contact form. Console shows 0 warnings and 0 errors.

Notes
- If CONTACT_ENDPOINT is not set, the contact form uses demo mode and stores submissions in localStorage.
- If prefers-reduced-motion is enabled, sticky and tilt effects should be disabled.
