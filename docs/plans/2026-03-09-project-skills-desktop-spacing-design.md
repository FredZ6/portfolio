# Project Skills Desktop Spacing Design

**Date:** 2026-03-09

## Goal

Rebalance the desktop spacing rhythm between `Hero`, `Projects`, and `Skills` so the `Projects` section no longer feels pulled upward into the hero CTA area and no longer leaves an oversized visual gap before `Skills`.

## Root Cause

- The `Projects` sticky content was moved upward by reducing the track top padding on larger breakpoints.
- The `Projects` section keeps a long sticky scroll height, so lifting the cards upward also increases the empty visual runway before the next section appears.
- The issue is primarily desktop-specific; mobile spacing should remain unchanged for now.

## Approved Design

- Keep the `Hero` section unchanged.
- Restore more desktop top breathing room inside the `Projects` sticky track so the cards sit lower in the viewport.
- Slightly shorten the desktop `Projects` section height so `Skills` arrives earlier after the project cards.
- Avoid changing card internals, project data, or mobile spacing behavior.
- Leave `Skills` structure intact unless a small wrapper-level offset is still needed after the `Projects` adjustment.

## Expected Result

- More comfortable distance between `Hero` and the first `Projects` card on desktop.
- Less dead space between `Projects` and `Skills`.
- No changes to the mobile layout in this pass.
