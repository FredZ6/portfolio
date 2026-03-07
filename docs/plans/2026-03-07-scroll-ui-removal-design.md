# Scroll UI Removal Design

**Date:** 2026-03-07

## Goal

Remove the top page progress bar and make the page-level right scrollbar invisible while preserving internal custom scrollable areas.

## Constraints

- Remove only the top progress bar in `src/App.jsx`.
- Hide the document scrollbar without breaking scroll behavior.
- Keep `.custom-scrollbar` regions available for internal scrolling contexts.

## Approved Design

- Delete the fixed top progress bar and the Framer Motion scroll progress plumbing that exists only to drive it.
- Hide the root document scrollbar via global scrollbar rules.
- Reintroduce visible WebKit scrollbar styling only for `.custom-scrollbar`, so internal panes can still expose a scrollbar when needed.
