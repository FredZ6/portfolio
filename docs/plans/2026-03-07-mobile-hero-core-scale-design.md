# Mobile Hero Core Scale Design

**Date:** 2026-03-07

## Goal

Make the bird avatar and its two surrounding circular rings read more clearly on phone-sized screens without changing the tablet or desktop Hero layout.

## Constraints

- Only mobile-first Hero sizing should change.
- Keep the existing dark hologram visual language.
- Do not modify the tablet or desktop breakpoint values.

## Approved Design

- Increase the mobile-only size of the Hero center apparatus by restoring a slightly larger base footprint.
- Apply an additional warm mobile-only scale step so the outer ring, inner ring, and bird core all read more clearly in the final phone composition.
- Preserve the existing `sm`, `md`, and `lg` values.
- Let the inner orbit and core grow through the larger base container so the bird icon and both rings scale together.

## Verification

- Run `npm run lint`
- Run `npm run build`
- Visually confirm the Hero center reads larger on mobile
