# Hero Title Rename Design

**Date:** 2026-03-07

## Goal

Change the Hero section display name from `FRED ZHANG` to `FRED Z` without changing the current typography, animation, or layout.

## Constraints

- Only the Hero title text should change.
- The existing Hero gradient, sizing, and motion should stay the same.
- No other section or label should be modified.

## Approved Design

- Replace the Hero main heading string with `FRED Z`.
- Keep all surrounding `motion` structure and Tailwind classes intact.

## Verification

- Run `npm run lint`
- Run `npm run build`
- Visually confirm the Hero title now reads `FRED Z`
