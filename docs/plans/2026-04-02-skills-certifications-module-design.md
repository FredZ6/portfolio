# Skills Certifications Module Design

**Date:** 2026-04-02

## Goal

Restructure the `Skills` section so certifications live in a dedicated, scalable module instead of competing with the AI workflow tools row.

## Root Cause

- The current certifications UI is attached to the compact top utility row inside `Skills`.
- That row works for two AWS badges, but it will become cramped and visually noisy as more credentials are added.
- The certifications content has different weight from the tool chips, so combining them in one line weakens hierarchy and limits future growth.

## Approved Design

- Keep the AI workflow tool pills in the top row by themselves.
- Move certifications into a standalone `Verified Certifications` block lower in the `Skills` shell.
- Represent certifications with a shared data model that supports both image badges and icon-based fallback cards.
- Use a responsive grid so the layout scales naturally as more certifications are added.
- Default to showing the first six certifications and reveal the rest with a `Show more` control once the list grows beyond that threshold.

## Expected Result

- The `Skills` section keeps its current futuristic visual language while gaining cleaner information hierarchy.
- The certifications area remains readable with five items now and scales cleanly as the list grows later.
- New certifications can be added by appending data instead of redesigning layout structure.
