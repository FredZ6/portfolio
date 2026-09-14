# Themed Technology Index Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a Frontend technology group and render all 22 technologies with brand-colored, frosted React Icons in the ticker and expandable index.

**Architecture:** Keep `technologyGroups` as the shared data source and extend each item to `{ name, icon, color }`. Reuse `TechnologyItem` for both render paths, with a dedicated icon wrapper driven by a CSS custom property. Preserve the current ticker, expand/collapse behavior, and reduced-motion handling.

**Tech Stack:** React, Vite, Framer Motion, react-icons, CSS, Node regression scripts

---

### Task 1: Lock the approved structure with a failing regression

**Files:**
- Modify: `scripts/editorial-skills-regression.mjs`

**Step 1: Write the failing test**

Add assertions that require:

- a `Frontend` group containing React, Next.js, TypeScript, JavaScript, and Vite;
- exactly 22 `{ name, icon, color }` entries;
- the technology icon imports to come from `react-icons`;
- a shared `.technology-icon` wrapper driven by `--technology-color`;
- a five-column desktop grid plus the existing two- and one-column breakpoints.

**Step 2: Run test to verify it fails**

Run: `npm run test:skills`

Expected: FAIL because the Frontend group, colors, wrapper, and five-column layout do not exist.

### Task 2: Migrate the technology data and icon rendering

**Files:**
- Modify: `src/components/Skills.jsx`

**Step 1: Replace technology-only icon imports**

Import the technology icons from `react-icons/fa`, `react-icons/si`, `react-icons/ri`, `react-icons/lu`, and `react-icons/tb`. Keep Lucide imports only for unrelated page controls and principle illustrations.

**Step 2: Extend the shared data**

Add Frontend first and give every item a `name`, `icon`, and `color` property. Use recognizable brand colors and stable semantic colors for non-product concepts.

**Step 3: Update `TechnologyItem`**

Render:

```jsx
<li className="technology-item">
  <span className="technology-icon" style={{ '--technology-color': technology.color }}>
    <Icon aria-hidden="true" focusable="false" />
  </span>
  <span>{technology.name}</span>
</li>
```

Update PropTypes to require `color`.

**Step 4: Run the focused regression**

Run: `npm run test:skills`

Expected: remaining failure only for CSS styling/layout.

### Task 3: Add themed glass styling and five-column layout

**Files:**
- Modify: `src/index.css`

**Step 1: Style the icon wrapper**

Give `.technology-icon` a fixed compact plate, centered layout, translucent background, subtle border, blur/saturation, and a restrained color-derived glow. Apply `color: var(--technology-color)` to the SVG.

**Step 2: Adapt both render contexts**

Keep ticker icons compact and expanded-index icons slightly larger without duplicating component markup. Preserve readable label spacing and no horizontal overflow.

**Step 3: Update the grid**

Use five columns at the wide layout, two below 980px, and one below 700px.

**Step 4: Run focused checks**

Run: `npm run test:skills && npm run lint && npm run build`

Expected: PASS; only existing Browserslist/avatar build warnings may remain.

### Task 4: Browser QA and full verification

**Files:**
- Verify: `src/components/Skills.jsx`
- Verify: `src/index.css`
- Verify: `scripts/editorial-skills-regression.mjs`

**Step 1: Verify desktop**

At 1280px, expand the panel and confirm five group cards, 22 icons, theme-colored SVGs, glass plates, aligned control, and no horizontal overflow.

**Step 2: Verify phone**

At 662px, confirm one-column expanded layout, readable chips, working collapse/expand behavior, and no horizontal overflow.

**Step 3: Run full verification**

Run:

```bash
git diff --check
npm run test:redesign
npm run test:skills
npm run test:projects
npm run test:contact
npm run test:resume-dialog
npm run test:resume-dialog-behavior
npm run lint
npm run build
```

Expected: all commands exit 0.

**Step 4: Review the working tree**

Confirm `.gitignore` remains untouched and unstaged, and report the feature files separately from pre-existing uncommitted work.
