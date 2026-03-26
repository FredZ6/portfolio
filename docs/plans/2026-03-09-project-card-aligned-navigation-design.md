# Project Card Aligned Navigation Design

**Date:** 2026-03-09

## Goal

Make the `Projects` next/previous controls always move to a full card instead of landing between cards on mobile or desktop.

## Constraints

- Keep the existing card visuals and content structure.
- Apply the same navigation logic to both mobile and desktop.
- Preserve swipe/trackpad scrolling.
- Keep the end-cap repo card reachable through the same navigation system.

## Approved Design

- Treat the horizontal scroller as a card-aligned carousel.
- Move snap behavior onto the actual scroll container.
- Make each project card wrapper and the end cap a navigation target.
- Replace fixed-distance `scrollBy` navigation with target-based `scrollTo` navigation.
- Determine the active card by whichever target is closest to the scroll container center.
- Move previous/next to the adjacent snap target and center it in the viewport.

## Expected Result

- Pressing next lands cleanly on the next card.
- Pressing previous lands cleanly on the previous card.
- Swipe/drag interactions still settle onto full cards instead of awkward in-between states.
