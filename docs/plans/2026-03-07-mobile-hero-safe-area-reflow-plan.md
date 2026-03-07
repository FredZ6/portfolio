# Mobile Hero Safe-Area Reflow Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Make the mobile first screen start below Safari browser chrome, reserve room for the floating bottom nav, and stop the projects section from entering the initial mobile viewport.

**Architecture:** Update only mobile-first Tailwind classes in `Hero.jsx` and `Projects.jsx`. Reflow the hero container from centered to top-start on the base breakpoint, add safe-area-based top and bottom padding, and remove the projects section's mobile negative top margin while preserving the larger-breakpoint overlap behavior.

**Tech Stack:** React, Tailwind CSS, Framer Motion, Vite, Node.js assertions

---

### Task 1: Write the failing structural regression check

**Files:**
- Modify: none

**Step 1: Run the one-off failing check**

Run:

```bash
node --input-type=module -e "import { readFileSync } from 'node:fs'; import { strict as assert } from 'node:assert'; const hero = readFileSync('src/components/Hero.jsx', 'utf8'); assert.match(hero, /min-h-\\[100dvh\\]/); assert.match(hero, /justify-start sm:justify-center/); assert.match(hero, /pt-\\[calc\\(env\\(safe-area-inset-top\\)\\+2rem\\)\\]/); assert.match(hero, /pb-\\[calc\\(env\\(safe-area-inset-bottom\\)\\+8\\.5rem\\)\\]/); const projects = readFileSync('src/components/Projects.jsx', 'utf8'); assert.match(projects, /mt-0 sm:-mt-\\[18vh\\] lg:-mt-\\[20vh\\]/); assert.doesNotMatch(projects, /-mt-\\[16vh\\]/);"
```

Expected: FAIL because the current mobile classes still use centered hero layout and a mobile negative projects margin.

### Task 2: Reflow the mobile hero

**Files:**
- Modify: `src/components/Hero.jsx`

**Step 1: Update the hero section shell**

- Change the base viewport height to `100dvh`.
- Use `justify-start` on the base breakpoint while preserving centered layout at `sm` and above.

**Step 2: Add safe-area and nav-aware spacing**

- Add mobile-only top padding using `env(safe-area-inset-top)` plus extra breathing room.
- Add mobile-only bottom padding using `env(safe-area-inset-bottom)` plus floating-nav clearance.

### Task 3: Remove the projects intrusion on mobile

**Files:**
- Modify: `src/components/Projects.jsx`

**Step 1: Remove the mobile negative top margin**

- Set the base breakpoint to `mt-0`.
- Preserve the current overlapping effect starting at `sm`.

### Task 4: Verify the change

**Files:**
- Modify: none

**Step 1: Re-run the one-off check**

Run:

```bash
node --input-type=module -e "import { readFileSync } from 'node:fs'; import { strict as assert } from 'node:assert'; const hero = readFileSync('src/components/Hero.jsx', 'utf8'); assert.match(hero, /min-h-\\[100dvh\\]/); assert.match(hero, /justify-start sm:justify-center/); assert.match(hero, /pt-\\[calc\\(env\\(safe-area-inset-top\\)\\+2rem\\)\\]/); assert.match(hero, /pb-\\[calc\\(env\\(safe-area-inset-bottom\\)\\+8\\.5rem\\)\\]/); const projects = readFileSync('src/components/Projects.jsx', 'utf8'); assert.match(projects, /mt-0 sm:-mt-\\[18vh\\] lg:-mt-\\[20vh\\]/); assert.doesNotMatch(projects, /-mt-\\[16vh\\]/);"
```

Expected: PASS

**Step 2: Run lint**

Run: `npm run lint`

Expected: PASS

**Step 3: Run production build**

Run: `npm run build`

Expected: PASS
