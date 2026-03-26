# Project Card Click-To-Center Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add desktop click-to-center behavior to the `Projects` carousel while keeping mobile navigation unchanged.

**Architecture:** Keep the change scoped to `src/components/Projects.jsx`. Introduce a target-index centering helper for the desktop scroller, wire previous/next through that helper, and add a card-wrapper click handler that ignores nested interactive controls. Lock the behavior with a small structural regression script and verify with lint and build.

**Tech Stack:** React, Framer Motion, Tailwind CSS, Vite, Node.js assertions

---

### Task 1: Write the failing structural regression check

**Files:**
- Create: `scripts/projects-card-click-center-regression.mjs`

**Step 1: Assert the intended structure**

Check for:

- a target-index centering helper
- a desktop card click handler
- an interactive-element guard using `closest('a, button')`
- a click handler on project-card wrappers
- updated desktop helper copy mentioning card clicks

**Step 2: Run the check**

Run: `node scripts/projects-card-click-center-regression.mjs`

Expected: FAIL before implementation.

### Task 2: Add desktop click-to-center behavior

**Files:**
- Modify: `src/components/Projects.jsx`

**Step 1: Add shared center helper**

- Extract the “scroll a target to the middle” behavior into an index-based helper.
- Keep previous/next navigation powered by the same helper.

**Step 2: Add wrapper click handling**

- Add a desktop card click handler that centers the clicked card.
- Ignore clicks inside `a` and `button` descendants.

**Step 3: Update helper copy**

- Update only the desktop helper line so it mentions clicking cards.

### Task 3: Verify the change

**Files:**
- Modify: none

**Step 1: Re-run regression**

Run: `node scripts/projects-card-click-center-regression.mjs`

Expected: PASS

**Step 2: Run lint**

Run: `npm run lint`

Expected: PASS

**Step 3: Run build**

Run: `npm run build`

Expected: PASS
