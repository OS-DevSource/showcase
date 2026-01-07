# Customize Showcase

Single source of truth

- Edit `lib/site-config.ts` to update brand name, headline, CTAs, section copy, FAQ, and metrics.

Brand name and metadata

- Update `brandName`, `siteTitle`, and `siteDescription` in `lib/site-config.ts`.
- Update `contactEmail` for the footer and contact section.
- Update `metadataBase` in `app/layout.tsx` when you have a real domain.

Colors and theme accents

- Light and dark theme tokens live in `styles/globals.css` under :root and .dark.
- Accent palette values live in `siteConfig.splashPalette` for quick reference.

Sections

- Reorder sections in `app/page.tsx`.
- Add or remove gallery tiles, process steps, deliverables, and FAQ items in `lib/site-config.ts`.

Images

- Replace `public/before.png` and `public/after.png` with real before/after assets.
- Replace `public/og.png` and `public/favicon.png` with brand assets.

CTA links

- Update `ctaPrimaryHref` in `lib/site-config.ts` with your booking link.
- The secondary CTA uses `ctaSecondaryHref` to jump to the Proof section.
