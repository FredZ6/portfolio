# Projects Mobile Button Navigation Design

**Date:** 2026-03-09

## Goal

Stop accidental horizontal dragging on the mobile Projects card by replacing swipe-driven navigation with explicit buttons.

## Constraints

- Change only mobile behavior in `src/components/Projects.jsx`.
- Keep the current tablet and desktop sticky carousel from `sm` and up.
- Preserve the existing mobile card content and layout as much as possible.
- Ensure the mobile instructional copy matches the actual interaction.

## Approved Design

- Remove the mobile horizontal scroll surface entirely.
- Render only one project card at a time on mobile.
- Add a compact mobile-only navigation control with previous/next buttons and a simple progress label.
- Update the mobile instructional text to say `Use buttons to explore` instead of mentioning swipe.
- Keep the desktop scroll container, snap behavior, and manual controls unchanged.
