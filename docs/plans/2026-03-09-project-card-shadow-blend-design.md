# Project Card Shadow Blend Design

**Date:** 2026-03-09

## Goal

Reduce the harsh visual split beneath the project cards by making the bottom shadow transition softer and more atmospheric.

## Root Cause

- The project cards currently use a dense, high-opacity bottom shadow that reads like a dark strip when multiple cards sit on the same baseline.
- The `Projects` section does not provide a mid-tone atmospheric layer beneath the cards, so the shadow falls straight into the page background.
- The result is a hard cutoff instead of a glass-like fade into the environment.

## Approved Design

- Keep the overall glass-card language.
- Soften the primary card shadow by reducing its density and spreading more of the depth into a larger, lower-opacity field.
- Add a localized floor-glow beneath each card wrapper to smooth the immediate edge under the card.
- Add a section-level ambient bottom veil inside `Projects` so the lower area behind the cards has a subtle atmospheric blend.
- Avoid changing project content, card sizing, or section spacing in this pass.

## Expected Result

- The card base blends into the section instead of ending in a harsh strip.
- Depth still reads clearly, but the shadow feels more premium and less clipped.
- The change stays visual-only and does not affect layout behavior.
