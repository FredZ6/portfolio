# Navbar Theme Toggle Design

## Goal

Keep the existing night mode as the default presentation and add a navbar control that lets visitors switch the portfolio into a light theme without breaking the current visual identity.

## Decision

Use a document-level theme attribute on `html` with dark as the default state and light as an opt-in state. Persist the selection in `localStorage` so returning visitors keep their preference.

## Why This Approach

- The current UI is heavily optimized for dark mode and uses many custom glass and cinematic surface classes.
- A token-based approach lets the app keep that structure while swapping backgrounds, text contrast, panel chrome, overlays, and navbar affordances in one place.
- This avoids duplicating most components or rewriting the site into a `dark:` utility-first architecture.

## UX

- Initial load stays in night mode.
- The fixed bottom navbar gets a theme toggle button alongside the existing section shortcuts.
- The button label and icon reflect the next available action so the control is easy to understand.
- The selected theme persists across reloads.

## Scope

### In scope

- Theme state in `App`
- Document-level theme persistence
- Navbar toggle control
- Global theme variables and themed surface classes
- Light-theme polish for `Hero`, `About`, `Projects`, and shared shells so the page reads coherently in both themes
- Theme-aware browser chrome metadata where practical

### Out of scope

- Rebuilding every Tailwind color utility into semantic tokens
- Changing copy, layout structure, or project content
- Adding system-theme auto-detection

## Visual Direction For Light Theme

- Background shifts from deep-space navy to a layered off-white / pale-sky field.
- Text moves to slate / ink tones for readability.
- Cyan and blue accents remain, but are tempered so they feel premium on white rather than neon-on-paper.
- Glass panels become frosted white surfaces with cooler borders and lighter shadow stacks.
- Modals, tooltips, and terminal-inspired blocks stay atmospheric but no longer rely on black-heavy fills.

## Verification

- Add a regression script that checks for theme state, persistence, and navbar toggle wiring.
- Run the regression script, `npm run build`, and `npm run lint`.
