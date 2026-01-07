# JS learning notes

Cursor glow

- File: `lib/cursor-glow.ts`
- Uses requestAnimationFrame to ease pointer coordinates into CSS variables.
- Those variables feed the radial gradient in `.glow-field` for a smooth glow.

Tilt cards

- File: `lib/tilt.ts`
- Uses pointer position to update CSS variables for subtle 3D rotation.
- Disabled automatically on touch devices and when prefers-reduced-motion is on.

Before/after slider

- File: `components/before-after-slider.tsx`
- Pointer drag updates a percent value stored in state.
- Keyboard arrows adjust the slider in 5 percent steps.
- aria attributes make the handle accessible as a slider control.

Ambient canvas

- File: `components/ambient-canvas.tsx`
- Draws a soft, animated gradient wash on a canvas.
- Dynamically imported after first paint to reduce initial JS cost.

Theme persistence and hydration

- Files: `components/theme-provider.tsx`, `components/theme-toggle.tsx`
- next-themes stores the selected theme under the storageKey `showcase-theme`.
- `suppressHydrationWarning` on the html tag prevents mismatch warnings.
- `disableTransitionOnChange` keeps theme swaps smooth with no flash.
