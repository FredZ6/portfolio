# Hero Bird Scale Design

**Date:** 2026-03-07

## Goal

Make the bird glyph inside the Hero hologram more legible on both mobile and desktop without changing the surrounding circular rings, and remove the desktop subtitle clipping/interference around the word "Engineer."

## Constraints

- Only the bird image should change size.
- The surrounding rings and Hero layout must stay unchanged.
- Scale should increase by 20 percent relative to the current size on both mobile and desktop.
- The subtitle fix should preserve the existing layout position and gradient look.

## Approved Design

- Increase only the bird image scale value.
- Preserve the current mobile and desktop breakpoints, but raise each breakpoint's image scale by 20 percent relative to its current value.
- Add a small subtitle rendering safeguard with isolation, line-height, and bottom breathing room so descenders render cleanly on desktop.
- Keep blur, opacity, and drop-shadow behavior unchanged.

## Verification

- Run `npm run lint`
- Run `npm run build`
- Visually confirm the bird reads larger while the rings remain unchanged
- Visually confirm the desktop subtitle no longer loses the lower part of "Engineer"
