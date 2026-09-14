# Blue Frosted Surfaces Design

## Goal

Extend the hero bird mark's translucent blue glass material to the fourteen blue emphasis surfaces selected in the portfolio UI.

## Targets

- Three `.principle-card-band` elements.
- One `.editorial-certifications-toggle` button.
- Three `.project-editorial-action--primary` gallery buttons.
- Three `.proof-points-grid dd` metric blocks.
- One `.editorial-contact-submit button`.
- One `.why-fred-bird` mark.
- One `.hero-next` control.
- One `.editorial-nav-links .editorial-resume-link` control.

## Visual Direction

Use one shared blue-glass recipe: a translucent blue base, a soft white radial highlight, a deeper blue lower gradient, 12px background blur with increased saturation, a light inner edge, and a restrained blue shadow. Preserve each component's existing dimensions, typography, layout, and interaction semantics.

Metric values receive compact rounded glass plates and switch to white text for contrast. Interactive surfaces retain distinct hover, focus, and disabled states. Reduced-transparency fallback remains readable because the translucent gradient includes a strong blue base.

## Verification

Add a CSS contract regression for all target selectors and the shared blur recipe. Verify visually at the current 662px viewport and at a desktop viewport, then run the redesign regression, lint, and production build.
