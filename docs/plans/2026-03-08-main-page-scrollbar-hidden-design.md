# Main Page Scrollbar Hidden Design

**Date:** 2026-03-08

## Goal

Hide the main page scrollbar again while preserving normal page scrolling and leaving local component scrollbar utilities intact.

## Constraints

- Only affect the root page scrollbar.
- Keep wheel, trackpad, keyboard, and touch scrolling behavior unchanged.
- Do not change `.custom-scrollbar`.
- Do not change `.scrollbar-none`.

## Approved Design

- Restore the root `html` scrollbar to a hidden state.
- Use Firefox `scrollbar-width: none` and transparent scrollbar colors on the root.
- Use root-scoped `html::-webkit-scrollbar*` selectors to collapse the visible scrollbar in WebKit browsers.
- Keep local scrollbar utility classes unchanged.

## Expected Result

- The main page scrollbar is no longer visible.
- The page still scrolls normally.
- Local component scroll containers retain their own behavior and styling.
