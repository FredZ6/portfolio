# About Shell Lightening Design

**Date:** 2026-03-07

## Goal

Reduce the feeling that the About terminal is wrapped in an extra shallow glass sheet by lightening only the outer shell treatment.

## Constraints

- Change only the outer terminal shell in `src/components/About.jsx`.
- Keep the header bar, split layout, and inner left/right panel styling intact.
- Preserve the terminal identity while reducing the visible extra overlay around it.

## Approved Design

- Replace the heaviest parts of the outer shell treatment with a lighter transparent shell.
- Lower the outer shell background opacity, blur, border intensity, and shadow so it no longer reads like a separate glass plate on top of the page.
- Keep the rest of the About internals unchanged so the effect isolates to the extra outer layer the user called out.
