# About Scrollbar Hide Design

**Date:** 2026-03-07

## Goal

Hide the visible scrollbar in the About section's left timeline panel while preserving the panel's internal scroll behavior.

## Constraints

- Only affect the About left panel.
- Preserve the ability to scroll with trackpad, mouse wheel, and touch.
- Do not change scrollbar behavior in other internal scroll areas that still use `custom-scrollbar`.

## Approved Design

- Remove `custom-scrollbar` from the About left panel.
- Add a dedicated `scrollbar-none` utility in global CSS that hides the scrollbar across Firefox, WebKit, and legacy Edge behavior without disabling scrolling.
- Apply `scrollbar-none` only to the About left panel container.

## Expected Result

- The About left panel still scrolls internally.
- The cyan scrollbar track and thumb are no longer visible in that panel.
- Other components that rely on `custom-scrollbar` remain unchanged.
