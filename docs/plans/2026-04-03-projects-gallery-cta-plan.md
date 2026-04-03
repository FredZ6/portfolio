# Projects Gallery CTA Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Increase the visibility of the project gallery action by merging the CTA and gallery metadata into one stronger footer control while preserving consistent footer spacing across cards with different content density.

**Architecture:** Keep the existing `ProjectCard` layout and footer placement, but redesign the gallery footer button into a larger information-rich CTA and reserve a stable footer zone with a minimum height plus stronger top padding. Remove the separate gallery metadata block and protect the new structure with a lightweight regression script before running lint and build.

**Tech Stack:** React, JSX, Tailwind CSS, Node.js

---

### Task 1: Add a regression guard for the stronger gallery CTA

**Files:**
- Create: `scripts/projects-gallery-cta-visibility-regression.mjs`
- Test: `scripts/projects-gallery-cta-visibility-regression.mjs`

**Step 1: Write the failing test**

Write a Node script that reads `src/components/Projects.jsx` and asserts:
- the gallery button includes a short helper string like `Tap to open`
- the gallery count is rendered inside the CTA block
- the old standalone `Gallery` label block is no longer present
- the footer uses a minimum-height token to preserve CTA breathing room

**Step 2: Run test to verify it fails**

Run: `node scripts/projects-gallery-cta-visibility-regression.mjs`

Expected: FAIL because the current card still separates the CTA and gallery metadata.

**Step 3: Write minimal implementation**

No production implementation in this task. The script exists to lock the target structure first.

**Step 4: Run test to verify it still fails for the right reason**

Run: `node scripts/projects-gallery-cta-visibility-regression.mjs`

Expected: FAIL with a missing token assertion.

### Task 2: Refactor the gallery CTA in `Projects.jsx`

**Files:**
- Modify: `src/components/Projects.jsx`
- Test: `scripts/projects-gallery-cta-visibility-regression.mjs`

**Step 1: Use the failing regression script**

Run: `node scripts/projects-gallery-cta-visibility-regression.mjs`

Expected: FAIL.

**Step 2: Write minimal implementation**

- Replace the current low-contrast gallery pill with a more prominent two-line CTA block.
- Move the gallery count into that CTA block.
- Remove the standalone gallery metadata block from the footer.
- Reserve a stable footer height and top padding so longer project descriptions do not visually crush the CTA area.
- Keep external-link CTA behavior unchanged for future projects that may use `ctaUrl`.

**Step 3: Run test to verify it passes**

Run: `node scripts/projects-gallery-cta-visibility-regression.mjs`

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
