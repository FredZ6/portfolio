# Skills Orbit Centering Design

**Date:** 2026-03-07

## Goal

Stop skill icons from visually drifting off their orbital tracks during long-running rotation.

## Constraints

- Keep the current orbit sizes, animation speeds, and hover tooltip behavior.
- Do not redesign the overall `Skills` section layout.
- Limit the fix to the orbit item positioning structure unless verification shows CSS support changes are needed.

## Root Cause

- Orbit items are positioned on the track with `rotate(...) translateX(radius) rotate(-angle)`.
- The icon card is then visually recentered with negative margins.
- The counter-rotation wrapper rotates around its own layout center, not the icon's visual center after those negative margins are applied.
- That mismatch makes icons appear to drift away from the ring over time.

## Approved Design

- Replace the negative-margin centering with a true geometric center anchor.
- Give the counter-rotation wrapper an explicit fixed size that matches the icon card.
- Center the icon wrapper on the orbit point with `translate(-50%, -50%)`.
- Preserve the current animation directions, durations, icon sizes, and tooltip interactions.

## Verification

- Run `npm run lint`
- Run `npm run build`
- Visually confirm icons stay centered on their rings throughout continued rotation
