# Mobile Hero And Skills Responsive Design

**Date:** 2026-03-06

## Goal

Improve the phone-sized presentation of the `Hero` and `Skills` sections without changing the established tablet and desktop layouts.

## Constraints

- Only mobile-first classes should change.
- `sm` and above should preserve the current layout rhythm unless a class already has an explicit mobile override.
- The visual language stays the same: dark glass panels, neon gradients, orbital composition.

## Approved Design

### Hero

- Reduce the perceived top whitespace on phones by tightening the mobile section spacing and using a stable mobile viewport height.
- Add explicit horizontal breathing room around the foreground content so the glass description card no longer presses against the screen edges.
- Improve the center hologram balance on phones by slightly enlarging the avatar treatment relative to its circular core while leaving larger breakpoints untouched.

### Skills

- Reduce the mobile-only orbital system scale so the outer ring and skill nodes fit more comfortably inside the viewport.
- Keep the desktop and tablet scales unchanged.

## Verification

- Run `npm run lint`
- Run `npm run build`
- Manually inspect the mobile visual hierarchy in follow-up review
