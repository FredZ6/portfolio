# Project Card Click-To-Center Design

**Date:** 2026-03-25

## Goal

Let desktop users center the next visible `Projects` card by clicking that card directly instead of relying only on the previous/next buttons.

## Constraints

- Keep mobile behavior button-driven and unchanged.
- Preserve existing card content, buttons, and links.
- Do not hijack clicks on interactive controls inside a card.

## Approved Design

- Apply the new behavior only on `sm` and up, where the horizontal carousel is visible.
- Reuse the same center-alignment scroll logic that powers the previous/next buttons.
- Add a desktop card click handler on each project-card wrapper.
- Ignore clicks that originate inside `a` or `button` elements so CTA links, gallery buttons, GitHub, and DeepWiki still behave normally.
- Update the desktop helper copy to mention that cards themselves are clickable.

## Expected Result

- Clicking a partially visible neighboring project card slides it into the centered position.
- Existing CTA interactions still work without accidental recentering.
- Mobile navigation remains unchanged.
