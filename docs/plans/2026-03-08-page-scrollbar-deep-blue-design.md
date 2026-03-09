# Page Scrollbar Deep Blue Design

**Date:** 2026-03-08

## Goal

Redesign the main page scrollbar into a stable, always-visible thumb using a deep-sea tech blue palette.

## Constraints

- Scope the styling to the root page scrollbar only.
- Keep the scrollbar track transparent.
- Keep the `Projects` horizontal scroll area unchanged.
- Keep the `About` section's internal scrollbar behavior unchanged.
- Remove the hide-on-scroll behavior and any JS used only for scrollbar visibility changes.

## Approved Design

- Keep the root scrollbar scoped to `html::-webkit-scrollbar*`.
- Remove the `data-scroll-state` behavior from the app shell.
- Render the thumb as a constant deep-sea blue gradient with rounded edges and a subtle glass highlight.
- Keep the track fully transparent so only the thumb is visible.
- Use a very light hover lift only, without changing the scrollbar's presence model.
- Mirror the stable visible thumb in Firefox with a constant `scrollbar-color`.

## Expected Result

- The main page scrollbar thumb stays visible at all times.
- The thumb reads as a deep blue UI accent rather than a cyan glow effect.
- The track remains invisible.
- Local component scrollbars keep their existing behavior.
