# Expandable Technology Stack Design

## Goal

Add a discoverable expanded technology index beneath the existing animated ticker, and place a consistent blue icon before every technology name in both presentations.

## Interaction

The technology header keeps its pause/resume control and gains a separate `Expand stack` button. The new control exposes `aria-expanded` and `aria-controls`, changes to `Collapse stack` while open, and reveals a panel below the ticker. The ticker remains visible and continues to follow its independent pause state.

The expanded panel groups the complete stack into Backend, Cloud, Delivery, and AI Workflow. It uses four columns on wide screens, two on tablet widths, and one on narrow phones. Expansion uses a restrained height-and-opacity transition; reduced-motion preferences disable that transition.

## Icons

Each technology becomes a data object containing its display name and icon component. The ticker and expanded panel render the same reusable technology item, preventing label/icon drift. Recognizable products use their corresponding brand silhouette from the installed icon library. Workflow concepts use semantically accurate Lucide icons. Every icon uses the portfolio's blue color treatment and remains decorative because the visible text supplies the accessible name.

## Visual Direction

The expanded panel follows the existing white-and-blue editorial system: thin blue rules, quiet white glass surfaces, compact uppercase category labels, and consistent blue icons. It adds structure without competing with the principle cards or credentials. Controls retain 44px minimum touch targets and clear focus rings.

## Verification

Regression checks cover the expand button wiring, shared icon data, accessible state, expanded group content, and responsive grid rules. Browser checks cover collapsed and expanded states at the current mobile-width viewport and a desktop viewport. Existing redesign, skills, lint, and production build checks must remain green.
