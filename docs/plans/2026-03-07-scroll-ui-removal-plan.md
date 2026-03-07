# Scroll UI Removal Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Remove the top progress bar and hide the page scrollbar while keeping custom internal scrollbars functional.

**Architecture:** Update `src/App.jsx` to remove the progress-bar-only Framer Motion logic and fixed top bar markup. Update `src/index.css` so the root document scrollbar is invisible, then add element-scoped WebKit scrollbar rules back to `.custom-scrollbar` so internal scrolling panes retain a visible scrollbar. Use a one-off Node assertion to verify the desired code structure before and after the change.

**Tech Stack:** React, Vite, Tailwind CSS, Node.js assertions

---

### Task 1: Prove the desired scroll UI structure is not present yet

**Files:**
- Modify: none

**Step 1: Run the one-off failing check**

Run:

```bash
node --input-type=module -e "import { readFileSync } from 'node:fs'; import { strict as assert } from 'node:assert'; const app = readFileSync('src/App.jsx', 'utf8'); const css = readFileSync('src/index.css', 'utf8'); assert.doesNotMatch(app, /useScroll|useSpring|progressScaleX|fixed inset-x-0 top-0 z-\\[60\\]/); assert.match(css, /\\.custom-scrollbar::-webkit-scrollbar/); assert.match(css, /scrollbar-width:\\s*none/);"
```

Expected: FAIL because the progress bar is still in `App.jsx` and the CSS does not yet have the desired root-hidden / custom-visible scrollbar split.

### Task 2: Remove the progress bar and hide the page scrollbar

**Files:**
- Modify: `src/App.jsx`
- Modify: `src/index.css`

**Step 1: Remove the progress-bar-only logic from `App.jsx`**

- Delete the unused Framer Motion scroll-progress hooks.
- Remove the fixed top progress bar markup.

**Step 2: Hide the root document scrollbar in `index.css`**

- Make the page scrollbar invisible for the main document.

**Step 3: Preserve internal custom scrollbars**

- Add `.custom-scrollbar::-webkit-scrollbar` rules so internal panes still render their styled scrollbar.

### Task 3: Verify the change

**Files:**
- Modify: none

**Step 1: Re-run the one-off check**

Run:

```bash
node --input-type=module -e "import { readFileSync } from 'node:fs'; import { strict as assert } from 'node:assert'; const app = readFileSync('src/App.jsx', 'utf8'); const css = readFileSync('src/index.css', 'utf8'); assert.doesNotMatch(app, /useScroll|useSpring|progressScaleX|fixed inset-x-0 top-0 z-\\[60\\]/); assert.match(css, /\\.custom-scrollbar::-webkit-scrollbar/); assert.match(css, /scrollbar-width:\\s*none/);"
```

Expected: PASS

**Step 2: Run lint**

Run: `npm run lint`

Expected: PASS

**Step 3: Run production build**

Run: `npm run build`

Expected: PASS with only the existing Browserslist age notice
