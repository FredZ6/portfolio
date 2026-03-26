# Project Card Shadow Blend Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Make the bottom transition beneath project cards softer by combining lighter card shadows with atmospheric blend layers.

**Architecture:** Update `Projects.jsx` only. Add a small regression script that asserts the new section-level ambient veil, card-level glow, and softened shadow tokens are present while the previous dense shadow token is removed. Then verify with lint and a production build.

**Tech Stack:** React, JSX, Tailwind CSS, Node.js

---

### Task 1: Add a regression guard for the new shadow blend

**Files:**
- Create: `scripts/projects-shadow-blend-regression.mjs`
- Test: `scripts/projects-shadow-blend-regression.mjs`

**Step 1: Write the failing test**

Create a small Node script that reads `src/components/Projects.jsx` and asserts the new section ambient veil token, card floor-glow token, and softened shadow token exist while the older heavy shadow token does not.

**Step 2: Run test to verify it fails**

Run: `node scripts/projects-shadow-blend-regression.mjs`

Expected: FAIL because the new visual blend tokens are not in the component yet.

**Step 3: Write minimal implementation**

No production code in this step. The script exists to lock the intended visual tokens before editing JSX.

**Step 4: Run test to verify it fails for the right reason**

Run: `node scripts/projects-shadow-blend-regression.mjs`

Expected: FAIL with a missing token assertion.

### Task 2: Add the atmospheric blend layers

**Files:**
- Modify: `src/components/Projects.jsx`
- Test: `scripts/projects-shadow-blend-regression.mjs`

**Step 1: Write the failing test**

Use the regression script from Task 1 as the failing check.

**Step 2: Run test to verify it fails**

Run: `node scripts/projects-shadow-blend-regression.mjs`

Expected: FAIL.

**Step 3: Write minimal implementation**

- Add a section-level ambient bottom veil inside the `Projects` sticky area.
- Add a localized floor glow beneath each project card wrapper.
- Replace the dense card shadow with a softer, wider blend.

**Step 4: Run test to verify it passes**

Run: `node scripts/projects-shadow-blend-regression.mjs`

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
