# Project Skills Desktop Rhythm Design

**Date:** 2026-03-09

## Goal

Make the desktop spacing rhythm between `Hero`, `Projects`, and `Skills` clearly more balanced by moving `Projects` away from `Hero` and bringing `Skills` closer to the end of `Projects`.

## Root Cause

- `Projects` is still pulled upward by large desktop negative top margins.
- `Projects` remains a tall sticky section, so it leaves too much empty runway before the next section starts.
- `Skills` is not pulled upward enough to compensate for the oversized tail of the `Projects` section.

## Approved Design

- Keep mobile spacing unchanged.
- Reduce the desktop negative top margin on `Projects` so the project cards sit farther from the hero CTA cluster.
- Increase the desktop top padding inside the `Projects` sticky track so the cards sit lower in the viewport.
- Shorten the desktop `Projects` sticky section more aggressively so the next section arrives sooner.
- Pull `Skills` upward more aggressively on desktop to close the remaining gap.

## Expected Result

- `Hero -> Projects` reads as intentional separation instead of overlap.
- `Projects -> Skills` no longer feels like a long empty scroll.
- The fix remains wrapper-level and does not alter card internals.
