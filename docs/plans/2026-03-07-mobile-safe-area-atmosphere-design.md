# Mobile Safe-Area Atmosphere Bridge Design

**Date:** 2026-03-07

## Goal

Remove the visible top and bottom seam on mobile browsers by making the safe-area background feel like a continuation of the hero atmosphere instead of a separate darker layer.

## Constraints

- Preserve the current desktop look.
- Preserve the current hero, projects, skills, and about section structure.
- Avoid reintroducing the full-page frosted haze that changed the whole site's mood.
- Keep the fix focused on mobile top and bottom browser-edge continuity.

## Root Cause

- `html` and `body` already provide a dark base background.
- The stronger blue glow and frosted atmosphere live in fixed app-level layers and hero-local layers.
- On mobile, the top and bottom safe-area regions read as a different background system from the main content area, which creates a visible seam even when the exposed area is dark instead of white.

## Approved Design

- Keep the existing hero and section internals unchanged.
- Keep the existing global glow layer.
- Remove the full-screen `global-frost-overlay` so the whole page is not uniformly hazed.
- Add two mobile-only fixed atmosphere bridge layers at the app level:
  - a top bridge that softly extends the hero-style blue frosted atmosphere into the top safe-area region
  - a bottom bridge that adds a darker blue continuation behind the bottom browser chrome area
- Strengthen the root height foundation so `html`, `body`, and `#root` consistently cover the viewport on mobile.

## Expected Result

- The top safe-area region blends into the hero instead of looking like a separate strip.
- The bottom browser area feels visually connected to the page instead of cut off by a darker band.
- Desktop layout and section styling remain effectively unchanged.
