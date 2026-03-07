# Mobile Browser Theme Design

**Date:** 2026-03-07

## Goal

Prevent iPhone Safari from showing white browser chrome and safe-area background above and below the dark portfolio page.

## Constraints

- Do not change the page layout or section spacing.
- Keep the visual direction fully dark.
- Fix the issue through document metadata and global root background rules.

## Approved Design

- Add a dark `theme-color` so Safari can tint the top and bottom browser UI to match the site.
- Opt the document into dark color treatment and cover-safe viewport behavior.
- Set explicit dark backgrounds on `html` and `body` so overscroll and safe areas never reveal white behind the app.

## Verification

- Run `npm run build`
- Re-deploy and confirm mobile Safari no longer shows white chrome
