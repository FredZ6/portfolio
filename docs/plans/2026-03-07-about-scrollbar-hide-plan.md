# About Scrollbar Hide Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Hide the About section left panel's visible scrollbar without removing its internal scrolling behavior.

**Architecture:** Make a scoped class change in `About.jsx` and add a reusable `scrollbar-none` CSS utility in `index.css`. Verify with a one-off Node assertion that the About panel no longer uses `custom-scrollbar` and now uses the new hidden-scrollbar class.

**Tech Stack:** React, Tailwind CSS, Vite, Node.js assertions

---

### Task 1: Write the failing structural regression check

**Files:**
- Modify: none

**Step 1: Run the one-off failing check**

Run:

```bash
node --input-type=module -e "import { readFileSync } from 'node:fs'; import { strict as assert } from 'node:assert'; const about = readFileSync('src/components/About.jsx', 'utf8'); assert.match(about, /scrollbar-none/); assert.doesNotMatch(about, /overflow-y-auto custom-scrollbar/); const css = readFileSync('src/index.css', 'utf8'); assert.match(css, /\\.scrollbar-none/);"
```

Expected: FAIL because the About panel still uses `custom-scrollbar` and the new utility does not exist yet.

### Task 2: Wire the About panel to a hidden-scrollbar class

**Files:**
- Modify: `src/components/About.jsx`

**Step 1: Replace the About panel scrollbar class**

- Keep `overflow-y-auto`.
- Remove `custom-scrollbar`.
- Add `scrollbar-none`.

### Task 3: Add the hidden-scrollbar utility

**Files:**
- Modify: `src/index.css`

**Step 1: Add `scrollbar-none`**

- Hide scrollbars for Firefox, WebKit, and legacy Microsoft behavior.
- Preserve scrolling behavior.

### Task 4: Verify the change

**Files:**
- Modify: none

**Step 1: Re-run the one-off check**

Run:

```bash
node --input-type=module -e "import { readFileSync } from 'node:fs'; import { strict as assert } from 'node:assert'; const about = readFileSync('src/components/About.jsx', 'utf8'); assert.match(about, /scrollbar-none/); assert.doesNotMatch(about, /overflow-y-auto custom-scrollbar/); const css = readFileSync('src/index.css', 'utf8'); assert.match(css, /\\.scrollbar-none/);"
```

Expected: PASS

**Step 2: Run lint**

Run: `npm run lint`

Expected: PASS

**Step 3: Run production build**

Run: `npm run build`

Expected: PASS
