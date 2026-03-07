# Global Frost Overlay Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a subtle full-page frosted overlay that carries the hero-style haze across the background without changing section internals.

**Architecture:** Modify only `src/App.jsx` by splitting the existing background stack into a deeper glow layer and a new full-screen frosted overlay layer above it. Use a one-off Node assertion for red/green verification because the change is a top-level visual structure update.

**Tech Stack:** React, Vite, Tailwind CSS, Node.js assertions

---

### Task 1: Prove the global frosted overlay is not present yet

**Files:**
- Modify: none

**Step 1: Run the one-off failing check**

Run:

```bash
node --input-type=module -e "import { readFileSync } from 'node:fs'; import { strict as assert } from 'node:assert'; const app = readFileSync('src/App.jsx', 'utf8'); assert.match(app, /global-frost-overlay/);"
```

Expected: FAIL because the app does not yet render the global frosted overlay.

### Task 2: Add the top-level frosted overlay

**Files:**
- Modify: `src/App.jsx`

**Step 1: Push the existing glow layer deeper**

- Lower the current fixed glow layer behind the new frosted overlay.

**Step 2: Add the full-screen frosted overlay**

- Render a non-interactive fixed layer with a very light translucent gradient and backdrop blur.
- Keep the effect subtle enough that only the background gains haze, not the content.

### Task 3: Verify the change

**Files:**
- Modify: none

**Step 1: Re-run the one-off check**

Run:

```bash
node --input-type=module -e "import { readFileSync } from 'node:fs'; import { strict as assert } from 'node:assert'; const app = readFileSync('src/App.jsx', 'utf8'); assert.match(app, /global-frost-overlay/);"
```

Expected: PASS

**Step 2: Run lint**

Run: `npm run lint`

Expected: PASS

**Step 3: Run production build**

Run: `npm run build`

Expected: PASS with only the existing Browserslist age notice
