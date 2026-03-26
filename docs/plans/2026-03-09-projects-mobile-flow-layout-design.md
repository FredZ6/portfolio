# Projects Mobile Flow Layout Design

**Date:** 2026-03-09

## Goal

Stop the mobile `Projects` card from being clipped at the top and bottom without changing the desktop layout.

## Constraints

- Only change mobile behavior in `src/components/Projects.jsx`.
- Keep the current desktop and tablet sticky carousel behavior from `sm` and up.
- Preserve horizontal swipe behavior on mobile.
- Avoid introducing nested scrolling inside the card.

## Approved Design

- Remove the mobile `Projects` section from the fixed `sticky + h-screen + overflow-hidden` stage and let it flow naturally in the page.
- Add mobile-only top and bottom safe padding so the card clears the fixed top shroud and bottom dock.
- Keep the carousel horizontal on mobile, but allow vertical overflow to remain visible instead of clipping it.
- Move the decorative `FEATURED SYSTEMS` title block into normal flow on mobile so it no longer depends on a full-screen wrapper.
- Hide the manual previous/next buttons on mobile because swipe already covers navigation and the buttons overlap the card footer.
