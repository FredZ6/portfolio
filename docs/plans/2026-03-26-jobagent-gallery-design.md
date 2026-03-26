# JobAgent Gallery Design

**Date:** 2026-03-26

## Goal

Change the JobAgent card CTA from `View Case Study` back to `View Gallery` and show four cropped product screenshots in the existing lightbox.

## Constraints

- Scope the change to the first project entry in `src/components/Projects.jsx`.
- Do not alter layout, motion, card styling, or lightbox behavior.
- Crop the supplied screenshots to `16:9` while keeping the most informative upper-page content visible.

## Approved Direction

- Reuse the existing `images`-driven gallery path already used by the other project cards.
- Remove the JobAgent external `ctaUrl` so the button uses the existing gallery button branch.
- Add four `16:9` cropped screenshots in the order provided by the user.
- Keep the rest of the `Projects` component untouched.

## Expected Result

- The JobAgent card shows `View Gallery`.
- Clicking the button opens the existing lightbox.
- The lightbox shows the cropped JobAgent screenshots instead of the repository preview.
