# Project Card Aligned Navigation Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Make the `Projects` previous/next controls align to full cards instead of scrolling by a fixed pixel distance.

**Architecture:** Keep the change in `src/components/Projects.jsx`. Mark each scroll target, move snap settings onto the actual horizontal scroll container, and replace the fixed `scrollBy` logic with center-aware `scrollTo` behavior that targets the adjacent card element.

**Tech Stack:** React, Framer Motion, Tailwind CSS, Vite, Node.js assertions

---

### Task 1: Write the failing structural regression check

**Files:**
- Modify: none

**Step 1: Run the one-off failing check**

Run:

```bash
node --input-type=module -e "import { readFileSync } from 'node:fs'; import { strict as assert } from 'node:assert'; const projects = readFileSync('src/components/Projects.jsx', 'utf8'); assert.doesNotMatch(projects, /scrollBy\\(\\{ left: -window\\.innerWidth \\* 0\\.6/); assert.doesNotMatch(projects, /scrollBy\\(\\{ left: window\\.innerWidth \\* 0\\.6/); assert.match(projects, /data-scroll-card/); assert.match(projects, /scrollTo\\(/); assert.match(projects, /snap-x snap-mandatory/);"
```

Expected: FAIL because the current navigation still scrolls by a fixed distance and the card targets are not yet explicitly marked.

### Task 2: Mark the snap targets

**Files:**
- Modify: `src/components/Projects.jsx`

**Step 1: Mark card wrappers and end cap**

- Add a data attribute to each project card wrapper.
- Add the same data attribute to the end-cap wrapper.
- Move snap container classes to the actual scrollable element.

### Task 3: Replace fixed-distance navigation

**Files:**
- Modify: `src/components/Projects.jsx`

**Step 1: Implement adjacent-card navigation**

- Read all scroll targets from the scroll container.
- Find the card closest to the scroll viewport center.
- Scroll to the previous or next target by centering it in the container.
- Clamp movement so the first and last targets remain valid.

### Task 4: Verify the change

**Files:**
- Modify: none

**Step 1: Re-run the structural check**

Run:

```bash
node --input-type=module -e "import { readFileSync } from 'node:fs'; import { strict as assert } from 'node:assert'; const projects = readFileSync('src/components/Projects.jsx', 'utf8'); assert.doesNotMatch(projects, /scrollBy\\(\\{ left: -window\\.innerWidth \\* 0\\.6/); assert.doesNotMatch(projects, /scrollBy\\(\\{ left: window\\.innerWidth \\* 0\\.6/); assert.match(projects, /data-scroll-card/); assert.match(projects, /scrollTo\\(/); assert.match(projects, /snap-x snap-mandatory/);"
```

Expected: PASS

**Step 2: Run lint**

Run: `npm run lint`

Expected: PASS

**Step 3: Run production build**

Run: `npm run build`

Expected: PASS
