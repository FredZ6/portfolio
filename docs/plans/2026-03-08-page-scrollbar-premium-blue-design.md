# Page Scrollbar Premium Blue Design

**Date:** 2026-03-08

## Goal

Refine the main page scrollbar so it keeps a constant deep-blue thumb, loses the right-side gutter feel, and reads as a more premium UI detail.

## Constraints

- Scope the change to the root page scrollbar only.
- Keep the track transparent.
- Remove the visible gutter feel on the right edge.
- Keep the thumb always visible.
- Make the deep-sea blue gradient more legible without turning it into a loud neon accent.

## Approved Design

- Remove the root `scrollbar-gutter: stable` setting so the layout no longer reserves a fixed gutter strip.
- Keep the root scrollbar on `html::-webkit-scrollbar*`.
- Increase the thumb's visual layering with a stronger top-to-bottom blue gradient and a subtle inner highlight.
- Preserve the transparent track so the thumb remains the only visible scrollbar element.
- Keep hover behavior restrained, only slightly brightening the thumb.

## Expected Result

- The right edge no longer shows a dark reserved scrollbar slot.
- The thumb reads as a layered deep-blue gradient instead of a flat blue bar.
- The scrollbar stays visible and feels more integrated with the portfolio UI.
