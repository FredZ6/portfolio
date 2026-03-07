# Safari Chrome Edge Alignment Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Reduce the mobile Safari top and bottom seam by aligning `theme-color`, root background color, and mobile page-edge shrouds.

**Architecture:** Update `index.html` and global CSS so Safari chrome and overscroll regions use the same deep blue-black base, then retune the app-level mobile overlays from bright frosted bridges into darker edge shrouds that fade into the existing page atmosphere. Verification will use one-off Node assertions plus lint and production build.

**Tech Stack:** React, Vite, Tailwind CSS, Node.js assertions

---

### Task 1: Write the failing structural regression check

**Files:**
- Modify: none

**Step 1: Run the one-off failing check**

Run:

```bash
node --input-type=module -e "import { readFileSync } from 'node:fs'; import { strict as assert } from 'node:assert'; const html = readFileSync('index.html', 'utf8'); assert.match(html, /theme-color\" content=\"#08111f\"/); const app = readFileSync('src/App.jsx', 'utf8'); assert.match(app, /mobile-top-edge-shroud/); assert.match(app, /mobile-bottom-edge-shroud/); assert.doesNotMatch(app, /mobile-top-atmosphere-bridge/); const css = readFileSync('src/index.css', 'utf8'); assert.match(css, /background-color:\\s*#08111f/);"
```

Expected: FAIL because the current theme color and overlay class names do not match the new design.

### Task 2: Align browser chrome color

**Files:**
- Modify: `index.html`
- Modify: `src/index.css`

**Step 1: Update `theme-color`**

- Set the mobile browser tint to the deep blue-black edge color.

**Step 2: Align root backgrounds**

- Use the same deep blue-black on the root document background so non-content regions read as the same layer.

### Task 3: Replace the bridge overlays with edge shrouds

**Files:**
- Modify: `src/App.jsx`

**Step 1: Replace the top bridge**

- Rename and restyle the top mobile-only overlay so it starts dark and fades into the hero instead of brightening the page edge.

**Step 2: Replace the bottom bridge**

- Rename and restyle the bottom mobile-only overlay so it starts dark and blends into the page base above the bottom browser chrome.

### Task 4: Verify the change

**Files:**
- Modify: none

**Step 1: Re-run the one-off check**

Run:

```bash
node --input-type=module -e "import { readFileSync } from 'node:fs'; import { strict as assert } from 'node:assert'; const html = readFileSync('index.html', 'utf8'); assert.match(html, /theme-color\" content=\"#08111f\"/); const app = readFileSync('src/App.jsx', 'utf8'); assert.match(app, /mobile-top-edge-shroud/); assert.match(app, /mobile-bottom-edge-shroud/); assert.doesNotMatch(app, /mobile-top-atmosphere-bridge/); const css = readFileSync('src/index.css', 'utf8'); assert.match(css, /background-color:\\s*#08111f/);"
```

Expected: PASS

**Step 2: Run lint**

Run: `npm run lint`

Expected: PASS

**Step 3: Run production build**

Run: `npm run build`

Expected: PASS
