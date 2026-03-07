# Safari Chrome Edge Alignment Design

**Date:** 2026-03-07

## Goal

Reduce the visible seam between iPhone Safari browser chrome and the portfolio page by aligning the browser tint color, root background, and the page's top and bottom edge treatment.

## Constraints

- Keep the current desktop appearance effectively unchanged.
- Do not restructure hero or section content.
- Avoid full-page frost or other broad atmosphere layers that change the whole site's tone.
- Focus on mobile Safari top and bottom edge continuity.

## Root Cause

- The latest mobile screenshot shows the page itself is no longer exposing white.
- The remaining seam is caused by Safari chrome and page edges using different perceived colors.
- Browser chrome tint comes primarily from `theme-color`, while the page edge appearance comes from root backgrounds and the first visible layer inside the app.

## Approved Design

- Change the document `theme-color` to a dark blue-black closer to the intended mobile edge tone.
- Align the root `html` and `body` background color to the same deep blue-black so overscroll and browser-edge regions share the same base.
- Replace the current mobile bridge layers with darker top and bottom edge shrouds:
  - top edge starts from the browser tint color and gradually transitions into the existing hero atmosphere
  - bottom edge starts from the same browser tint color and fades into the page base
- Keep the change mobile-only for the overlay layers and leave desktop visuals unchanged.

## Expected Result

- Safari top and bottom bars feel visually connected to the page instead of looking like separate strips.
- The page transitions into the hero without a hard tonal jump at the top.
- The bottom browser area no longer feels detached from the page background.
