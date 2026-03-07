# About Seam Reduction Design

**Date:** 2026-03-07

## Goal

Reduce the visual seam between the `Skills` and `About` sections while preserving the terminal-inspired look of the `About` section.

## Constraints

- Keep the terminal shell, header, and split layout.
- Do not change section order or overall layout.
- Reduce the heavy glass separation by lightening the outer shell and internal panel backgrounds only.

## Approved Design

- Replace the `About` section's heaviest outer glass treatment with a lighter transparent shell.
- Preserve the rounded terminal frame, border, and shadow, but lower the opacity and blur so the background reads through more continuously.
- Soften the left and right internal panel backgrounds to avoid creating a second visible seam after the shell is lightened.

## Verification

- Run `npm run lint`
- Run `npm run build`
- Visually confirm the background transition from `Skills` into `About` feels more continuous
