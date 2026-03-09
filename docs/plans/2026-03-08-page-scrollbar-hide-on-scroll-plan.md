# Page Scrollbar Hide-On-Scroll Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Make the main page scrollbar appear only while the page is actively scrolling, using a transparent track and a near-hidden idle thumb.

**Architecture:** Add a small root scroll-state effect in `src/App.jsx` that toggles `data-scroll-state` on the document element during active scrolling and resets it after an 800ms pause. Update `src/index.css` so the root scrollbar uses a transparent track and state-driven thumb styling, while leaving local scrollbar utilities untouched.

**Tech Stack:** React, Tailwind CSS, Vite, Node.js assertions

---

### Task 1: Write the failing structural regression check

**Files:**
- Modify: none

**Step 1: Run the one-off failing check**

Run:

```bash
node --input-type=module -e "import { readFileSync } from 'node:fs'; import { strict as assert } from 'node:assert'; const app = readFileSync('src/App.jsx', 'utf8'); const css = readFileSync('src/index.css', 'utf8'); assert.match(app, /data-scroll-state/); assert.match(app, /setTimeout/); assert.match(css, /html\\[data-scroll-state='active'\\]::\\-webkit\\-scrollbar\\-thumb/); assert.match(css, /html::\\-webkit\\-scrollbar\\-track\\s*\\{[\\s\\S]*transparent/);"
```

Expected: FAIL because the app does not yet manage root scroll state and the root scrollbar CSS does not yet define active-state thumb styling with a transparent track.

### Task 2: Add root scroll-state behavior

**Files:**
- Modify: `src/App.jsx`

**Step 1: Write the minimal scroll-state effect**

- Add a `useEffect` that listens to `window` scroll events.
- Set `document.documentElement.dataset.scrollState = 'active'` when scrolling occurs.
- Clear and restart a timeout on each scroll event.
- After 800ms without scrolling, set the state back to `idle`.
- Clean up the listener and timeout on unmount.

### Task 3: Redesign the root scrollbar styling

**Files:**
- Modify: `src/index.css`

**Step 1: Replace the visible root scrollbar with hide-on-scroll styling**

- Keep the root scrollbar scoped to `html::-webkit-scrollbar*`.
- Make the track transparent.
- Make the idle thumb nearly hidden.
- Add an active-state selector for the root thumb that makes it visible only while scrolling.
- Mirror the state distinction for Firefox with root `scrollbar-color`.

### Task 4: Verify the change

**Files:**
- Modify: none

**Step 1: Re-run the structural check**

Run:

```bash
node --input-type=module -e "import { readFileSync } from 'node:fs'; import { strict as assert } from 'node:assert'; const app = readFileSync('src/App.jsx', 'utf8'); const css = readFileSync('src/index.css', 'utf8'); assert.match(app, /data-scroll-state/); assert.match(app, /setTimeout/); assert.match(css, /html\\[data-scroll-state='active'\\]::\\-webkit\\-scrollbar\\-thumb/); assert.match(css, /html::\\-webkit\\-scrollbar\\-track\\s*\\{[\\s\\S]*transparent/);"
```

Expected: PASS

**Step 2: Run lint**

Run: `npm run lint`

Expected: PASS

**Step 3: Run production build**

Run: `npm run build`

Expected: PASS
