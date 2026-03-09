# Global Page Scrollbar Design

**Date:** 2026-03-08

## Goal

Add a visible styled scrollbar for the main page scroll only, matching the portfolio's existing glassy cyan-blue UI language.

## Constraints

- Scope the styling to the root page scrollbar only.
- Do not change the `Projects` horizontal scroll area behavior.
- Do not change the `About` panel's internal hidden scrollbar behavior.
- Preserve the site's dark atmospheric background and high-contrast readability.

## Approved Design

- Reuse the existing scrollbar color tokens already defined in `src/index.css`.
- Remove the current global rules that hide all scrollbars.
- Style the root scrollbar with `html::-webkit-scrollbar*` selectors so WebKit browsers only theme the page scrollbar.
- Apply Firefox root scrollbar styling on `html` with `scrollbar-width` and `scrollbar-color`.
- Keep local component scrollbar utilities unchanged.

## Expected Result

- The page shows a visible, polished vertical scrollbar for the main document scroll.
- The scrollbar track and thumb feel consistent with the portfolio's glass-panel and neon-cyan accents.
- Local scroll containers keep their existing behavior and styling.
