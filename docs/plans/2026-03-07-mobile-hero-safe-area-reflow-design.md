# Mobile Hero Safe-Area Reflow Design

**Date:** 2026-03-07

## Goal

Fix the iPhone first-screen composition so hero content no longer starts under the top browser chrome and the projects section no longer intrudes into the initial mobile viewport.

## Constraints

- Preserve the current desktop and tablet composition.
- Keep the existing visual language: blue glow, hologram core, glass cards, floating nav.
- Focus on mobile-only layout changes rather than more background-layer tweaks.

## Root Cause

- The hero section currently uses a mobile `min-h-[100svh]` container with `items-center justify-center`, `overflow-hidden`, and only `pt-4`.
- With `viewport-fit=cover`, mobile Safari allows content to render under the top safe area unless the page adds explicit safe-area spacing.
- The fixed bottom navigation reduces the usable visual height on phones, but the hero section does not reserve space for it.
- The projects section uses a mobile `-mt-[16vh]`, which intentionally pulls the next section upward into the hero viewport.

## Approved Design

- Reflow the hero section on mobile from centered layout to top-start layout.
- Use `min-h-[100dvh]` for the mobile hero container.
- Add explicit mobile-only top padding based on `env(safe-area-inset-top)` plus extra breathing room.
- Add explicit mobile-only bottom padding based on `env(safe-area-inset-bottom)` plus enough space for the floating mobile nav.
- Keep `sm` and above on the current centered layout rhythm.
- Remove the negative top margin from the projects section on mobile while preserving the overlapping presentation on larger breakpoints.

## Expected Result

- The hero title and chip begin below the iPhone top browser chrome instead of being clipped.
- The description card and action pill remain visible without fighting the bottom floating nav.
- The projects section no longer appears in the first mobile viewport unless the user scrolls into it.
