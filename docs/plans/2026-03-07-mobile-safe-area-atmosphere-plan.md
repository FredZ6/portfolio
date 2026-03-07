# Mobile Safe-Area Atmosphere Bridge Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Remove the visible mobile top and bottom background seams by replacing the full-page frost with mobile-only safe-area atmosphere bridge layers and stronger root viewport coverage.

**Architecture:** Update the app shell so the main background stack keeps the existing glow but swaps the full-screen haze for two mobile-only fixed overlays at the top and bottom. Reinforce viewport coverage in global CSS so the root layers fill the mobile viewport consistently. Use one-off Node assertions for red/green verification because the change is structural and styling-focused.

**Tech Stack:** React, Vite, Tailwind CSS, Node.js assertions

---

### Task 1: Write the failing structural regression check

**Files:**
- Modify: none

**Step 1: Run the one-off failing check**

Run:

```bash
node --input-type=module -e "import { readFileSync } from 'node:fs'; import { strict as assert } from 'node:assert'; const app = readFileSync('src/App.jsx', 'utf8'); assert.match(app, /mobile-top-atmosphere-bridge/); assert.match(app, /mobile-bottom-atmosphere-bridge/); assert.doesNotMatch(app, /global-frost-overlay/);"
```

Expected: FAIL because the mobile bridge layers do not exist yet and the full-page frost still exists.

### Task 2: Add mobile-only safe-area bridge layers

**Files:**
- Modify: `src/App.jsx`

**Step 1: Remove the full-page frosted overlay**

- Delete the `global-frost-overlay` layer so the whole page is no longer uniformly hazed.

**Step 2: Add the top bridge**

- Render a fixed, non-interactive, mobile-only overlay near the top of the viewport.
- Use a soft blue gradient plus controlled blur so the top safe-area feels like a continuation of the hero atmosphere.

**Step 3: Add the bottom bridge**

- Render a fixed, non-interactive, mobile-only overlay near the bottom of the viewport.
- Keep it darker and subtler than the top layer so it connects with the page base without drawing attention.

### Task 3: Strengthen root viewport coverage

**Files:**
- Modify: `src/index.css`
- Modify: `src/App.jsx`

**Step 1: Update the app shell height**

- Change the app root container to use `min-h-[100dvh]`.

**Step 2: Add root height coverage**

- Ensure `html`, `body`, and `#root` consistently cover the viewport.
- Keep the existing dark root background while avoiding layout shifts on desktop.

### Task 4: Verify the change

**Files:**
- Modify: none

**Step 1: Re-run the one-off check**

Run:

```bash
node --input-type=module -e "import { readFileSync } from 'node:fs'; import { strict as assert } from 'node:assert'; const app = readFileSync('src/App.jsx', 'utf8'); assert.match(app, /mobile-top-atmosphere-bridge/); assert.match(app, /mobile-bottom-atmosphere-bridge/); assert.doesNotMatch(app, /global-frost-overlay/); const css = readFileSync('src/index.css', 'utf8'); assert.match(css, /#root/); assert.match(css, /min-height:\\s*100%/);"
```

Expected: PASS

**Step 2: Run lint**

Run: `npm run lint`

Expected: PASS

**Step 3: Run production build**

Run: `npm run build`

Expected: PASS
