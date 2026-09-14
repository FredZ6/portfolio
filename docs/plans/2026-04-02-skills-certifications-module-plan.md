# Skills Certifications Module Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Convert `Skills` certifications into a dedicated, scalable module that supports future credential growth without crowding the top tools row.

**Architecture:** Keep the existing `Skills` shell and capability grid intact, but split certifications away from the top header row. Introduce a richer certification data model plus a standalone responsive certification grid with optional badge imagery, icon fallback content, and a built-in expand/collapse threshold.

**Tech Stack:** React, JSX, Tailwind CSS, Node.js

---

### Task 1: Add a regression guard for the new certifications structure

**Files:**
- Create: `scripts/skills-certifications-module-regression.mjs`
- Test: `scripts/skills-certifications-module-regression.mjs`

**Step 1: Write the failing test**

Write a Node script that reads `src/components/Skills.jsx` and asserts the new certifications architecture is present:
- a `Verified Certifications` section label
- a dedicated certification card component
- a visible certifications slice capped at six items
- a show more control for longer lists

**Step 2: Run test to verify it fails**

Run: `node scripts/skills-certifications-module-regression.mjs`

Expected: FAIL because the current `Skills` component still renders certifications in the compact top row.

**Step 3: Write minimal implementation**

No production implementation in this task. The script exists to protect the intended structure before refactoring.

**Step 4: Run test to verify it still fails for the right reason**

Run: `node scripts/skills-certifications-module-regression.mjs`

Expected: FAIL with a missing token assertion.

### Task 2: Refactor `Skills.jsx` certifications into a scalable module

**Files:**
- Modify: `src/components/Skills.jsx`
- Test: `scripts/skills-certifications-module-regression.mjs`

**Step 1: Use the failing regression script**

Run: `node scripts/skills-certifications-module-regression.mjs`

Expected: FAIL.

**Step 2: Write minimal implementation**

- Add the three new Skilljar certifications to the certifications data set.
- Expand the data model so certifications can render either badge images or icon-based fallback content.
- Remove certifications from the compact top row, leaving only the AI workflow tools there.
- Add a standalone `Verified Certifications` module below the existing skills content using a responsive grid.
- Limit the default view to six items and render an expand/collapse control only when the list exceeds six entries.

**Step 3: Run test to verify it passes**

Run: `node scripts/skills-certifications-module-regression.mjs`

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
