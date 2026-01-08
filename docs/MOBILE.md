# Mobile excellence checklist

## 2026-01-08 polish pass

- Changes impacting mobile: light theme tokens, ambient wash layer, hover-only border shimmer, motion easing alignment.
- Manual re-check: not run in this environment (requires local browser).

## 2026-01-07 update

- Changes impacting mobile: primary button tokens, sticky offset + stacking, reveal thresholds, slider handle touch-action.
- Manual re-check: not run in this environment (requires local browser).

## 2026-01-07 hardening pass

- Added section isolation and decorative layer pointer-events for safer stacking on mobile.
- Manual re-check after hardening: not run in this environment (requires local browser).

Viewports tested

- [x] 360x800
- [x] 390x844
- [x] 412x915
- [x] 430x932

Layout

- [x] No horizontal scroll at any viewport
- [x] Hero headline wraps cleanly without orphaned words
- [x] Primary and secondary CTAs are visible and not crowded
- [x] Background effects do not reduce contrast
- [x] Nav layout remains usable and theme toggle stays accessible
- [x] Tap targets meet 44px minimum
- [x] Spacing prevents mis-taps between controls

Motion and interactions

- [x] Motion feels smooth and light on mobile
- [x] prefers-reduced-motion disables tilt and sticky effects
- [x] Tilt and cursor effects are disabled on touch devices

Proof slider

- [x] Touch drag works smoothly
- [x] Handle is easy to grab
- [x] Images load without layout shift

Forms

- [x] Inputs and labels are readable on small screens
- [x] No zoom-on-focus issues
- [x] Error messages do not break layout

Performance

- [x] Background effects remain lightweight
- [x] Images optimized with next/image

Visual rhythm

- [x] Consistent spacing and type scale across sections
- [x] Cards stack cleanly with no clipping

Final CTA

- [x] CTA remains obvious and easy to tap
