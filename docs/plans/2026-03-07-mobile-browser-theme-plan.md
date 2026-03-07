# Mobile Browser Theme Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Make the mobile browser chrome and safe-area background match the portfolio's dark theme.

**Architecture:** Update `index.html` with dark mobile browser metadata and reinforce the root background color in `src/index.css`. This is a configuration-level fix, so verification will rely on a successful production build and a mobile browser visual check after deployment.

**Tech Stack:** Vite, React, Tailwind CSS

---

### Task 1: Add dark browser metadata

**Files:**
- Modify: `index.html`

**Step 1: Update the viewport meta**

- Add `viewport-fit=cover` so the dark document background can extend into iPhone safe areas.

**Step 2: Add browser theme metadata**

- Add a dark `theme-color`.
- Add dark color-scheme metadata.
- Add Apple status bar metadata for mobile web app behavior.

### Task 2: Reinforce the root background

**Files:**
- Modify: `src/index.css`

**Step 1: Set explicit dark root backgrounds**

- Apply the dark background color to `html` and `body`.
- Keep existing overflow and typography settings intact.

### Task 3: Verify the build

**Files:**
- Modify: none

**Step 1: Run production build**

Run: `npm run build`

Expected: PASS with only the existing non-blocking Browserslist notice
