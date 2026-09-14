# Themed Technology Index Design

## Goal

Extend the current technology ticker and expandable index with a Frontend group, brand-colored React Icons, and a reusable frosted icon treatment without replacing the current editorial layout.

## Data model

`technologyGroups` remains the single source of truth for both the ticker and expanded panel. Every technology is represented by `{ name, icon, color }`; every `icon` is imported through `react-icons`.

The five groups are:

- Frontend: React, Next.js, TypeScript, JavaScript, Vite
- Backend: Java, Spring Boot, Node.js, PostgreSQL, Kafka
- Cloud: AWS, Terraform, Docker, Kubernetes
- Delivery: GitHub Actions, CI/CD, Testing, Observability
- AI Workflow: Claude Code, Codex, Cursor, Human review

Colors use recognizable product colors where available and deliberate semantic colors for workflow concepts. The data owns these colors so both views stay consistent.

## Components

`TechnologyItem` continues to serve both views. It wraps the selected React Icon in a dedicated `.technology-icon` element and passes the configured theme color through a CSS custom property. Labels remain real text and icons remain decorative for assistive technology.

No separate card implementation is introduced. Adding a future technology only requires one data object and one React Icon import.

## Visual treatment

Each icon sits on a compact translucent glass plate with a subtle border, `backdrop-filter`, and a restrained glow derived from its theme color. The surrounding label and current white-and-blue page remain unchanged. The treatment is applied in both the moving ticker and expanded panel.

The expanded panel uses five columns on wide screens, two columns at the existing tablet breakpoint, and one column on phones. The ticker retains its continuous flow and automatic off-screen/reduced-motion pause behavior.

## Accessibility and verification

- Technology names remain visible text inside semantic lists.
- Decorative SVGs use `aria-hidden` and cannot receive focus.
- The existing Expand/Collapse control and controlled panel relationship remain unchanged.
- Regression coverage checks the Frontend group, 22 structured items, icon/color completeness, React Icons imports, shared icon wrapper, and 5/2/1 responsive layout.
- Browser QA verifies theme colors, glass styling, item counts, responsive columns, and horizontal overflow.
