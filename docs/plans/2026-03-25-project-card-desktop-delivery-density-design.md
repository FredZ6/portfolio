# Project Card Desktop Delivery Density Design

**Date:** 2026-03-25

## Goal

Make the `What shipped` column feel less sparse on very large desktop displays without changing the current mobile and smaller-desktop reading density.

## Constraints

- Keep the current short delivery copy on mobile and standard laptop-size screens.
- Avoid changing the card structure or right-column rhythm.
- Limit the richer copy to very large desktop widths only.

## Approved Design

- Add a `desktopDelivery` field to each project entry.
- Keep `delivery` as the default short-form copy.
- In the desktop `What shipped` column, show `delivery` below `2xl` and switch to `desktopDelivery` at `2xl` and up.
- Expand each item by roughly one extra clause so the large-screen card reads fuller without turning into paragraph text.

## Expected Result

- 27-inch displays feel less empty in the `What shipped` column.
- Phones and smaller laptops preserve the tighter current copy.
- The overall card composition stays familiar.
