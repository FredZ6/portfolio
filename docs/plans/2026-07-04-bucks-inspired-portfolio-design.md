# Bucks-Inspired Portfolio Redesign

## Objective

Rebuild Fred Zhang's portfolio with the public-facing structure, scale, pacing, and motion language of buckssauce.com while replacing its commercial identity with Fred's own work, bird mark, copy, and white-and-blue visual system.

## Direction

The redesign follows a structure-first replica approach. The reference site's oversized condensed typography, central product silhouette, pinned navigation, stacked cards, irregular rotations, horizontal project moments, and scroll-driven reveals provide the interaction grammar. No Bucks Sauce logos, product photographs, copy, or private code will be reused.

The site will use a fixed light theme:

- Warm white and cool white backgrounds
- Deep navy display text
- Electric and cobalt blue accents
- Fine blue rules and outlined typography
- Occasional pale-blue panels for depth

The existing bird mark becomes the visual protagonist. It takes the role occupied by the bottle on the reference homepage and appears at multiple scales, including a large hero treatment with subtle parallax, rotation, and scroll-linked movement.

## Information Architecture

The single-page navigation becomes:

- Work
- Stack
- About
- Contact
- Resume

The page maps the reference experience to portfolio content as follows:

1. **Hero** — oversized engineering statement, large bird mark, compact status metadata, social links, and project navigation cues.
2. **Engineering principles** — tilted, stacked cards derived from the reference ingredient cards, describing reliability, cloud architecture, and AI-assisted delivery.
3. **Featured work** — a “Choose Your Build” section presenting the three major portfolio projects with oversized outlined type, bold color fields, screenshots, and project links.
4. **Why Fred** — a playful scroll-led biography and working-method section modeled on the reference brand-story sequence.
5. **Stack and certifications** — technologies and certifications presented as editorial product groups rather than a generic icon grid.
6. **Impact** — concise project outcomes and proof points in place of customer reviews.
7. **Contact footer** — a large final call to action with email, GitHub, LinkedIn, and resume access.

## Components and Behavior

The existing React component boundaries remain useful but their markup and styling will be rebuilt. `App` will become a fixed-theme shell. `Navbar`, `Hero`, `Skills`, `Projects`, `About`, and `Footer` will own their respective sections. Shared motion primitives and reduced-motion behavior will be defined centrally to keep animation timing consistent.

Motion will use Framer Motion and CSS transforms:

- Staggered loader and hero entrance
- Scroll-linked bird mark parallax and rotation
- Headline mask reveals
- Tilted cards that settle as they enter the viewport
- Horizontal or layered featured-project transitions
- Magnetic or lifting button hover feedback
- Reduced-motion fallbacks that remove large translation and continuous motion

The existing resume modal, project gallery/lightbox behaviors, GitHub link, LinkedIn link, and email contact path will be retained and visually restyled.

## Responsive Design

Desktop preserves the reference site's dramatic scale and generous vertical pacing. Tablet reduces overlaps and converts horizontal compositions into readable stacked layouts. Mobile uses a compact menu, maintains oversized typography without horizontal overflow, simplifies parallax, and ensures every action remains at least 44px tall.

## Resilience and Accessibility

- Semantic headings and landmarks remain intact.
- Buttons and links retain visible focus states and accessible names.
- Modal focus/escape behavior remains supported.
- Project images use descriptive alternative text.
- Missing project imagery falls back to a branded blue panel rather than collapsing layout.
- `prefers-reduced-motion` disables nonessential scroll transforms and looping animation.
- Content remains legible without JavaScript-driven animation.

## Verification

Implementation will be checked with:

- Existing repository regression scripts updated where the intentional redesign changes old expectations
- New structural regression checks for navigation, fixed theme, hero mark, project count, and accessibility hooks
- `npm run lint`
- `npm run build`
- Browser review at desktop and mobile widths
- Console-error inspection and reduced-motion checks

## Success Criteria

The finished portfolio should be immediately recognizable as inspired by the reference site's public frontend while unmistakably belonging to Fred. It must preserve the existing portfolio's real content and working links, feel intentional in white and blue, remain responsive, and deliver the same sense of oversized editorial movement without copying protected brand assets.
