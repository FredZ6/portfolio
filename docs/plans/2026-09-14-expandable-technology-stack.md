# Expandable Technology Stack Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add icons to every technology in the ticker and provide an accessible control that expands the complete technology stack as a responsive grouped grid.

**Architecture:** Replace technology strings with icon-bearing data objects and render them through one reusable item component in both ticker and expanded grid. Keep expansion state local to `Skills`, use Framer Motion for the optional reveal, and preserve the independent ticker pause state.

**Tech Stack:** React 18, Framer Motion, Lucide React, React Icons, CSS, Node assertion scripts

---

### Task 1: Define the expanded-stack contract

**Files:**
- Modify: `scripts/editorial-skills-regression.mjs`

1. Add assertions for `isTechnologyIndexOpen`, `aria-expanded`, `aria-controls`, and the expanded panel id.
2. Add assertions proving every technology item has an icon and both ticker copies remain accessible.
3. Add assertions for responsive four/two/one-column expanded-grid styling.
4. Run `npm run test:skills`; expect failure because the feature does not exist.

### Task 2: Add shared icon-bearing technology data

**Files:**
- Modify: `src/components/Skills.jsx`

1. Import the required Simple Icons and Lucide workflow icons.
2. Convert every technology string to `{ name, icon }`.
3. Add a `TechnologyItem` component that renders a decorative icon before its text.
4. Use `TechnologyItem` inside the ticker, including the hidden duplicate set.
5. Run `npm run test:skills`; expect remaining expand-panel assertions to fail.

### Task 3: Add the accessible expanded panel

**Files:**
- Modify: `src/components/Skills.jsx`
- Modify: `src/index.css`

1. Add `isTechnologyIndexOpen` state.
2. Add an `Expand stack` / `Collapse stack` control beside the pause button with `aria-expanded` and `aria-controls`.
3. Render all four groups in `#technology-index-panel` beneath the ticker using `AnimatePresence` and reduced-motion-safe transitions.
4. Add shared icon sizing plus four/two/one-column responsive grid rules.
5. Run `npm run test:skills`; expect pass.

### Task 4: Verify behavior and regressions

**Files:**
- Modify only if verification exposes a defect.

1. Browser-check the collapsed ticker and icon rendering.
2. Expand the stack at the current narrow viewport; verify all groups, icons, labels, and button state.
3. Repeat at desktop width and confirm four columns with no horizontal overflow.
4. Run `npm run test:skills`, `npm run test:redesign`, `npm run lint`, and `npm run build`.
5. Review the final diff while preserving unrelated `.gitignore` changes.
