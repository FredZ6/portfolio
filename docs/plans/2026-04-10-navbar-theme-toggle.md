# Navbar Theme Toggle Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a navbar theme toggle that keeps dark mode as the default and lets visitors switch to a persistent light theme.

**Architecture:** Store the selected theme in `App`, mirror it onto `document.documentElement.dataset.theme`, and persist it with `localStorage`. Use `src/index.css` theme tokens plus targeted semantic classes so existing cinematic components can adapt without a full rewrite.

**Tech Stack:** React 18, Vite, Tailwind utilities, custom CSS tokens, Node assert regression scripts

---

### Task 1: Lock in regression coverage

**Files:**
- Create: `scripts/theme-toggle-regression.mjs`

**Step 1: Write the failing test**

Write assertions for:
- theme storage key usage in `src/App.jsx`
- persisted theme reads and writes
- `data-theme` synchronization on `html`
- navbar toggle button wiring in `src/components/Navbar.jsx`

**Step 2: Run test to verify it fails**

Run: `node scripts/theme-toggle-regression.mjs`
Expected: FAIL because the theme state and toggle do not exist yet.

**Step 3: Write minimal implementation**

No production implementation in this task.

**Step 4: Run test to verify it still fails**

Run: `node scripts/theme-toggle-regression.mjs`
Expected: FAIL until the app wiring is added.

### Task 2: Add document-level theme state

**Files:**
- Modify: `src/App.jsx`
- Modify: `index.html`

**Step 1: Write the failing test**

Use the regression script from Task 1 as the red test.

**Step 2: Run test to verify it fails**

Run: `node scripts/theme-toggle-regression.mjs`
Expected: FAIL on missing storage key / missing theme syncing.

**Step 3: Write minimal implementation**

- Add a `THEME_STORAGE_KEY`
- Initialize theme state from `localStorage` with dark fallback
- Sync `html[data-theme]`
- Update `meta[name="theme-color"]` and `meta[name="color-scheme"]`
- Add a small `index.html` bootstrap script to avoid light-theme flash on reload

**Step 4: Run test to verify it passes**

Run: `node scripts/theme-toggle-regression.mjs`
Expected: PASS for app-level theme wiring.

### Task 3: Add navbar toggle UI

**Files:**
- Modify: `src/components/Navbar.jsx`

**Step 1: Write the failing test**

Extend the regression script expectations for:
- `theme` and `onToggleTheme` props
- toggle button aria-label
- dedicated theme toggle hook / marker

**Step 2: Run test to verify it fails**

Run: `node scripts/theme-toggle-regression.mjs`
Expected: FAIL on missing navbar toggle button.

**Step 3: Write minimal implementation**

- Add the toggle button to the navbar action row
- Use a moon/sun icon pair
- Keep hover and tooltip behavior aligned with the current nav style

**Step 4: Run test to verify it passes**

Run: `node scripts/theme-toggle-regression.mjs`
Expected: PASS.

### Task 4: Theme the shared visual system

**Files:**
- Modify: `src/index.css`
- Modify: `src/App.jsx`
- Modify: `src/components/Hero.jsx`
- Modify: `src/components/About.jsx`
- Modify: `src/components/Projects.jsx`
- Modify: `src/components/Footer.jsx`

**Step 1: Write the failing test**

Use build/lint as structural verification for the broader CSS and component refactor.

**Step 2: Run test to verify it fails or is not yet green**

Run: `npm run build`
Expected: Use this as a guard after the refactor begins.

**Step 3: Write minimal implementation**

- Define dark and light tokens in `src/index.css`
- Theme shared glass classes and project / signal custom classes
- Replace the most visible hard-coded dark surfaces with semantic classes in hero, about, and modal shells
- Keep dark mode visually unchanged while making light mode cohesive

**Step 4: Run test to verify it passes**

Run:
- `node scripts/theme-toggle-regression.mjs`
- `npm run build`
- `npm run lint`

Expected: All pass.
