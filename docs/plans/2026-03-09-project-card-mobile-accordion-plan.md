# Project Card Mobile Accordion Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Make the `Projects` cards mobile-friendly with accordion sections while leaving the desktop card layout unchanged.

**Architecture:** Keep the change inside `src/components/Projects.jsx`. Add a small mobile-only accordion state to `ProjectCard`, render condensed accordion sections below the impact row for small screens, and keep the existing detail grid hidden until `sm`.

**Tech Stack:** React, Framer Motion, Tailwind CSS, Vite, Node.js assertions

---

### Task 1: Write the failing structural regression check

**Files:**
- Modify: none

**Step 1: Run the one-off failing check**

Run:

```bash
node --input-type=module -e "import { readFileSync } from 'node:fs'; import { strict as assert } from 'node:assert'; const projects = readFileSync('src/components/Projects.jsx', 'utf8'); assert.match(projects, /activeMobilePanel/); assert.match(projects, /sm:hidden/); assert.match(projects, /hidden sm:grid/); assert.match(projects, /aria-expanded/);"
```

Expected: FAIL because the card does not yet have a mobile-only accordion layer and the desktop detail grid is not currently gated behind `hidden sm:grid`.

### Task 2: Add mobile accordion behavior

**Files:**
- Modify: `src/components/Projects.jsx`

**Step 1: Add state and summaries**

- Add `activeMobilePanel` state inside `ProjectCard`.
- Default it to the delivery section.
- Add compact summary strings for stats and stack focus.

**Step 2: Render mobile-only accordion**

- Show the accordion only below `sm`.
- Keep one panel open at a time.
- Keep the existing footer visible outside the accordion.

### Task 3: Preserve the desktop layout

**Files:**
- Modify: `src/components/Projects.jsx`

**Step 1: Scope the dense grid to desktop**

- Keep the existing richer detail grid for `sm` and above.
- Do not change desktop information hierarchy.

### Task 4: Verify the change

**Files:**
- Modify: none

**Step 1: Re-run the structural check**

Run:

```bash
node --input-type=module -e "import { readFileSync } from 'node:fs'; import { strict as assert } from 'node:assert'; const projects = readFileSync('src/components/Projects.jsx', 'utf8'); assert.match(projects, /activeMobilePanel/); assert.match(projects, /sm:hidden/); assert.match(projects, /hidden sm:grid/); assert.match(projects, /aria-expanded/);"
```

Expected: PASS

**Step 2: Run lint**

Run: `npm run lint`

Expected: PASS

**Step 3: Run production build**

Run: `npm run build`

Expected: PASS
