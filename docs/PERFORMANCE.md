# Performance

Targets

- Lighthouse mobile: Performance >= 90, Accessibility >= 95, Best Practices >= 95, SEO >= 95
- No CLS: all images sized and above the fold images use next/image
- No background video

What was done

- Ambient canvas is lazy loaded and client only to reduce initial JS.
- Framer Motion is used for targeted reveal and hero animations only.
- next/image is used for before/after assets with explicit sizes.
- No heavy 3D libraries or video backgrounds.
- Theme and glow effects are CSS driven with minimal JS.

Notes

- The `components/ambient-canvas.tsx` module is the only optional canvas effect.
- Review images if you swap in large assets and keep them optimized.
