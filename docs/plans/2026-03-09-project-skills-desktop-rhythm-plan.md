# Project Skills Desktop Rhythm Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rebalance desktop spacing between hero, projects, and skills with a clearly visible wrapper-level layout correction.

**Architecture:** Update only the desktop-facing section wrappers in `Projects` and `Skills`. Use a small Node regression script to lock the intended spacing tokens before changing the JSX, then verify with lint and a production build.

**Tech Stack:** React, JSX, Tailwind CSS, Node.js

---

### Task 1: Update the desktop spacing regression target

**Files:**
- Modify: `scripts/project-desktop-section-spacing-regression.mjs`
- Test: `scripts/project-desktop-section-spacing-regression.mjs`

**Step 1: Write the failing test**

Change the regression script to assert the new, more aggressive desktop spacing tokens for both `Projects` and `Skills`.

**Step 2: Run test to verify it fails**

Run: `node scripts/project-desktop-section-spacing-regression.mjs`

Expected: FAIL because the code still contains the old spacing tokens.

**Step 3: Write minimal implementation**

No production code in this step. Only update the expected token set in the regression script.

**Step 4: Run test to verify it fails for the right reason**

Run: `node scripts/project-desktop-section-spacing-regression.mjs`

Expected: FAIL with a missing token assertion that points to the new target values.

### Task 2: Rebalance `Projects` and `Skills` desktop wrappers

**Files:**
- Modify: `src/components/Projects.jsx`
- Modify: `src/components/Skills.jsx`
- Test: `scripts/project-desktop-section-spacing-regression.mjs`

**Step 1: Write the failing test**

Use the updated regression script from Task 1 as the failing check.

**Step 2: Run test to verify it fails**

Run: `node scripts/project-desktop-section-spacing-regression.mjs`

Expected: FAIL.

**Step 3: Write minimal implementation**

- Reduce `Projects` desktop negative top margin.
- Increase desktop top padding inside the `Projects` sticky track.
- Shorten `Projects` desktop section height.
- Pull `Skills` upward more on desktop.
- Keep mobile classes unchanged.

**Step 4: Run test to verify it passes**

Run: `node scripts/project-desktop-section-spacing-regression.mjs`

Expected: PASS.

### Task 3: Verify repository health

**Files:**
- Verify only

**Step 1: Run lint**

Run: `npm run lint`

Expected: exit code 0.

**Step 2: Run production build**

Run: `npm run build`

Expected: exit code 0.
