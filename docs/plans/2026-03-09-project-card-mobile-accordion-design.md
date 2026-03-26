# Project Card Mobile Accordion Design

**Date:** 2026-03-09

## Goal

Optimize the `Projects` cards for small mobile viewports without changing the desktop card layout.

## Constraints

- Keep the current desktop layout unchanged at `sm` and above.
- Preserve the same project data and card narrative.
- Reduce vertical overflow on mobile.
- Keep the gallery action and status visible without requiring extra scrolling inside the card.

## Approved Design

- Use a mobile-only accordion for the dense middle content blocks.
- Keep the mobile header, title, description, and impact row visible.
- Show three accordion panels on mobile:
  - `What shipped`
  - `Delivery signal`
  - `Stack focus`
- Default to `What shipped` expanded.
- Use single-open accordion behavior so only one panel is expanded at a time.
- Keep the desktop detail grid unchanged by rendering it only from `sm` upward.

## Expected Result

- Mobile cards become shorter and easier to scan.
- Desktop cards keep the current richer presentation.
- Users can still access all project details on mobile, but progressively.
