# Page Scrollbar Deep Blue Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the hide-on-scroll page scrollbar with a stable deep-blue thumb on a transparent track.

**Architecture:** Remove the root scroll-state effect from `src/App.jsx` and keep the scrollbar implementation entirely in `src/index.css`. Update the root scrollbar tokens and selectors so the page thumb is always visible in a deep-sea blue palette while preserving transparent track behavior and leaving local scrollbar utilities unchanged.

**Tech Stack:** React, Tailwind CSS, Vite, Node.js assertions

---

### Task 1: Write the failing structural regression check

**Files:**
- Modify: none

**Step 1: Run the one-off failing check**

Run:

```bash
node --input-type=module -e "import { readFileSync } from 'node:fs'; import { strict as assert } from 'node:assert'; const app = readFileSync('src/App.jsx', 'utf8'); const css = readFileSync('src/index.css', 'utf8'); assert.doesNotMatch(app, /data-scroll-state/); assert.doesNotMatch(app, /setTimeout/); assert.doesNotMatch(css, /html\\[data-scroll-state='active'\\]/); assert.match(css, /rgba\\(59, 130, 246, 0\\.78\\)/); assert.match(css, /scrollbar-color:\\s*rgba\\(59, 130, 246, 0\\.72\\) transparent;/);"
```

Expected: FAIL because the app still contains scroll-state behavior and the CSS still uses the previous dynamic cyan styling.

### Task 2: Remove root scroll-state behavior

**Files:**
- Modify: `src/App.jsx`

**Step 1: Remove the scrollbar visibility effect**

- Remove the `useEffect` import.
- Remove the scroll-state timer constant.
- Remove the effect that writes `data-scroll-state` to the root element.

### Task 3: Restyle the root scrollbar

**Files:**
- Modify: `src/index.css`

**Step 1: Replace the dynamic thumb styling**

- Keep the track transparent.
- Replace the current thumb tokens with the approved deep-sea blue palette.
- Make the root thumb always visible without `active` selectors.
- Keep hover styling minimal and stable.
- Set a constant Firefox `scrollbar-color` for the root scrollbar.

### Task 4: Verify the change

**Files:**
- Modify: none

**Step 1: Re-run the structural check**

Run:

```bash
node --input-type=module -e "import { readFileSync } from 'node:fs'; import { strict as assert } from 'node:assert'; const app = readFileSync('src/App.jsx', 'utf8'); const css = readFileSync('src/index.css', 'utf8'); assert.doesNotMatch(app, /data-scroll-state/); assert.doesNotMatch(app, /setTimeout/); assert.doesNotMatch(css, /html\\[data-scroll-state='active'\\]/); assert.match(css, /rgba\\(59, 130, 246, 0\\.78\\)/); assert.match(css, /scrollbar-color:\\s*rgba\\(59, 130, 246, 0\\.72\\) transparent;/);"
```

Expected: PASS

**Step 2: Run lint**

Run: `npm run lint`

Expected: PASS

**Step 3: Run production build**

Run: `npm run build`

Expected: PASS
