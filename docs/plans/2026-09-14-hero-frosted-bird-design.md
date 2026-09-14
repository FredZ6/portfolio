# Hero Frosted Bird Design

## Goal

Make the hero's circular bird mark reveal the headline behind it while preserving the blue brand presence and the white bird's legibility.

## Design

- Replace the opaque blue fill with a medium-opacity brand-blue glass surface.
- Apply a 12px backdrop blur and modest saturation boost so the headline remains recognizable without becoming visually dominant inside the circle.
- Keep the existing white outer frame, inner ring, and bird silhouette unchanged.
- Reduce the blue shadow slightly if needed so the lighter glass surface feels integrated with the page rather than floating as a solid disk.
- Provide the unprefixed and WebKit-prefixed backdrop filter declarations for browser coverage.

## Verification

- Add a regression assertion for the frosted-glass declarations.
- Run the editorial redesign regression test and production build.
- Confirm the local development page remains reachable.
