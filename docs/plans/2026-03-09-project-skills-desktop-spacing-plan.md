# Project Skills Desktop Spacing Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rebalance desktop spacing between the hero, projects, and skills sections by adjusting only wrapper-level layout controls.

**Architecture:** Update the desktop-only outer section and sticky-track spacing in `Projects` so the cards sit lower and the section ends earlier. Keep mobile classes unchanged and verify the targeted desktop spacing tokens with a lightweight regression script before running lint and build.

**Tech Stack:** React, JSX, Tailwind CSS, Node.js

---

### Task 1: Add a regression guard for desktop spacing tokens

**Files:**
- Create: `scripts/project-desktop-section-spacing-regression.mjs`
- Test: `scripts/project-desktop-section-spacing-regression.mjs`

**Step 1: Write the failing test**

Write a Node script that reads `src/components/Projects.jsx` and `src/components/Skills.jsx` and asserts the desired desktop spacing tokens are present while stale tokens are absent.

**Step 2: Run test to verify it fails**

Run: `node scripts/project-desktop-section-spacing-regression.mjs`

Expected: FAIL because the desktop spacing classes have not been updated yet.

**Step 3: Write minimal implementation**

No production implementation in this task. The script exists to guard the intended wrapper-level layout changes.

**Step 4: Run test to verify it still fails for the right reason**

Run: `node scripts/project-desktop-section-spacing-regression.mjs`

Expected: FAIL with a missing token assertion, confirming the script is checking the right classes.

### Task 2: Rebalance `Projects` desktop wrapper spacing

**Files:**
- Modify: `src/components/Projects.jsx`
- Test: `scripts/project-desktop-section-spacing-regression.mjs`

**Step 1: Write the failing test**

Use the regression script from Task 1 as the failing check.

**Step 2: Run test to verify it fails**

Run: `node scripts/project-desktop-section-spacing-regression.mjs`

Expected: FAIL.

**Step 3: Write minimal implementation**

- Increase desktop/top-breakpoint sticky-track top padding in `Projects`.
- Reduce desktop `Projects` section height slightly so the next section appears sooner.
- Keep mobile classes untouched.

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
