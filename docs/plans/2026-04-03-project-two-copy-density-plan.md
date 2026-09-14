# Project Two Copy Density Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Shorten the second project card copy so the footer CTA has breathing room consistent with the other project cards.

**Architecture:** Keep the shared `ProjectCard` layout intact and change only the project data for the second card inside `src/components/Projects.jsx`. Protect the change with a lightweight regression script that asserts the new concise strings are present and the longer variants are gone.

**Tech Stack:** React, JSX, Tailwind CSS, Node.js

---

### Task 1: Add a regression guard for project two copy density

**Files:**
- Create: `scripts/project-two-copy-density-regression.mjs`
- Test: `scripts/project-two-copy-density-regression.mjs`

**Step 1: Write the failing test**

Write a Node script that reads `src/components/Projects.jsx` and asserts the new shorter project-two strings are present while the longer strings are absent.

**Step 2: Run test to verify it fails**

Run: `node scripts/project-two-copy-density-regression.mjs`

Expected: FAIL because the long strings still exist.

**Step 3: Write minimal implementation**

No production implementation in this task. The script exists to anchor the approved content changes.

**Step 4: Run test to verify it still fails for the right reason**

Run: `node scripts/project-two-copy-density-regression.mjs`

Expected: FAIL with a missing concise-string assertion.

### Task 2: Shorten project two copy in `Projects.jsx`

**Files:**
- Modify: `src/components/Projects.jsx`
- Test: `scripts/project-two-copy-density-regression.mjs`

**Step 1: Use the failing regression script**

Run: `node scripts/project-two-copy-density-regression.mjs`

Expected: FAIL.

**Step 2: Write minimal implementation**

- Replace the second project's description with a shorter summary.
- Shorten the three `delivery` bullets.
- Shorten the three `desktopDelivery` bullets without changing the project meaning.

**Step 3: Run test to verify it passes**

Run: `node scripts/project-two-copy-density-regression.mjs`

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
