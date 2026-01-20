# Known Issues

Format

- ID: short title
  - Symptom:
  - Where (likely):
  - Acceptance criteria:
  - Status:

- KI-001: Overscroll / extra scroll regions
  - Symptom: page can scroll into blank space or odd extra regions.
  - Where (likely): layout/container CSS in styles/globals.css or section wrappers.
  - Acceptance criteria: no blank scroll area on iPhone and desktop; scroll height matches content.
  - Status: backlog

- KI-002: Dropdown menus unreadable in dark mode
  - Symptom: dropdown background/text contrast fails in dark theme.
  - Where (likely): theme tokens or component classes for popover/menu.
  - Acceptance criteria: AA-level contrast, readable text, consistent hover/focus.
  - Status: backlog

- KI-003: Button text not switching correctly with theme mode selector
  - Symptom: certain button text styles do not update when theme changes.
  - Where (likely): components/ui/button.tsx or token mapping.
  - Acceptance criteria: text colors update immediately on theme change; no mixed theme states.
  - Status: backlog

- KI-004: Gallery card colored effect needs change
  - Symptom: gallery section card effect is not desired.
  - Where (likely): components/gallery-section.tsx and/or components/ui/card.tsx.
  - Acceptance criteria: effect aligns with blueprint (premium, restrained) and works in light/dark.
  - Status: backlog

- KI-005: Light mode hover is too subtle vs dark mode hover
  - Symptom: hover state is hard to notice in light theme.
  - Where (likely): card hover tokens or borders/shadows.
  - Acceptance criteria: hover is clearly visible but still premium (no loud colors).
  - Status: backlog
