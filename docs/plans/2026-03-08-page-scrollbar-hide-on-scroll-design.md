# Page Scrollbar Hide-On-Scroll Design

**Date:** 2026-03-08

## Goal

Redesign the main page scrollbar into a hidden-style treatment that only becomes clearly visible while the user is actively scrolling.

## Constraints

- Scope the behavior to the root page scrollbar only.
- Keep the `Projects` horizontal scroll area unchanged.
- Keep the `About` section's internal scrollbar behavior unchanged.
- Use a transparent track so only the thumb is visible.
- Avoid a loud glow effect that competes with the rest of the portfolio UI.

## Approved Design

- Keep the main scrollbar on the root document instead of introducing a fake overlay indicator.
- Add a small scroll-state controller that marks the root element as `active` while scrolling and returns it to `idle` about 800ms after scrolling stops.
- Make the scrollbar track transparent at all times.
- In the idle state, render the thumb as a very low-opacity thin line that is close to hidden.
- In the active state, raise the thumb opacity to a clean cyan-blue glass gradient with subtle highlight and no heavy neon bloom.
- Do not show the thumb on first load until the user actually scrolls.

## Expected Result

- The page scrollbar feels hidden by default.
- While the page is being scrolled, the thumb becomes visible enough to orient the user.
- After scrolling stops, the thumb fades back to a near-hidden state.
- Local component scroll behaviors remain unchanged.
