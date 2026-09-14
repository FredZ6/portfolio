# Blue Frosted Surfaces Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Apply one accessible blue frosted-glass material to all fourteen selected emphasis surfaces.

**Architecture:** Define shared CSS custom properties for the material and apply them through a grouped selector, leaving component markup and behavior unchanged. Add small target-specific rules only for metric sizing and interactive hover feedback.

**Tech Stack:** React 18, CSS, Vite, Node assertion scripts

---

### Task 1: Define the visual regression contract

**Files:**
- Modify: `scripts/editorial-redesign-regression.mjs`

1. Assert that the stylesheet defines the shared frosted-blue custom properties.
2. Assert that all eight selector families are included in the shared material rule.
3. Assert both prefixed and unprefixed 12px backdrop filters.
4. Run `npm run test:redesign` and confirm the new assertion fails before implementation.

### Task 2: Apply the shared material

**Files:**
- Modify: `src/index.css`

1. Add the shared translucent gradient, border, and shadow properties to the editorial theme tokens.
2. Add one grouped selector covering the fourteen rendered targets.
3. Add compact metric-plate sizing and interactive hover feedback.
4. Run `npm run test:redesign` and confirm it passes.

### Task 3: Verify responsive rendering

**Files:**
- Modify: `src/index.css` only if verification exposes a layout issue.

1. Inspect the current 662px local page and one desktop viewport.
2. Confirm text contrast, blur, borders, focus states, and no layout overflow.
3. Run `npm run test:redesign`, `npm run lint`, and `npm run build`.
4. Review the final diff without including the unrelated `.gitignore` change.
