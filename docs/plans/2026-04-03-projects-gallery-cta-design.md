# Projects Gallery CTA Design

**Date:** 2026-04-03

## Goal

Make the `View Gallery` action in project cards read more clearly as the primary way to open project imagery.

## Root Cause

- The current gallery action uses the same subdued pill styling as a secondary button.
- The gallery count is separated into a small metadata block on the opposite side of the footer.
- Users have to visually connect two different areas before understanding that the card contains a clickable gallery.
- Cards with denser delivery content leave less visual breathing room above the CTA, so the footer rhythm feels inconsistent from project to project.

## Approved Design

- Keep the footer structure intact and avoid moving the CTA into the image area.
- Convert the gallery action into a larger, two-line CTA block that combines:
  - the primary action label
  - the gallery count
  - a short hint that the gallery opens on click
- Remove the separate `Gallery` metadata block from the right side of the footer.
- Reserve a stable minimum footer height and slightly stronger top spacing so content-heavy cards still preserve the same CTA breathing room as shorter cards.
- Leave the `Status` and project number on the right so the card rhythm stays familiar.

## Expected Result

- `View Gallery` reads as the clear primary action on the card.
- Gallery availability and gallery size are understood at a glance.
- The CTA sits in a footer zone with consistent spacing even when card body content wraps more aggressively.
- The footer feels more intentional without introducing a new interaction pattern.
