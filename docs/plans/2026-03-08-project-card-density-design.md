# Project Card Density Design

**Date:** 2026-03-08

## Goal

Keep the large cinematic project cards in the `Projects` section while making their content density feel intentional instead of sparse.

## Constraints

- Preserve the large hero-card presence in the horizontal scroller.
- Avoid solving the problem by simply shrinking the cards.
- Do not rely on adding large preview images inside the card.
- Keep the existing project data narrative focused on delivery, architecture, and gallery actions.

## Approved Design

- Keep the card large, but reorganize it into a fuller vertical rhythm.
- Use a strong header area for title, repo link, and description.
- Keep a compact signal row for the impact statement.
- Add a detail grid in the middle:
  - left column: `What shipped`
  - right column: `Delivery signal` and `Stack focus`
- Turn the bottom of the card into a true footer bar that combines the gallery action with status and project index details.
- Remove the oversized watermark treatment that currently contributes to the feeling of empty space.

## Expected Result

- The card feels filled by meaningful structure rather than filler content.
- The eye has anchor points from top to bottom instead of clustering at the top-left.
- The section keeps its cinematic scale while reading as more deliberate and premium.
