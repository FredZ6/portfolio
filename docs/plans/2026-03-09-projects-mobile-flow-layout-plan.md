# Projects Mobile Flow Layout Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Convert the mobile Projects section to a natural flow layout so tall cards are fully visible on phones while preserving the existing sticky desktop carousel.

**Architecture:** Keep the current `sm` and `lg` layout unchanged. On mobile only, remove the fixed-height section stage, make the wrapper/layout containers flow with content height, and add safe top/bottom spacing around the carousel. Lock the intended class signatures with a Node regression script, then run lint and build.

**Tech Stack:** React, Framer Motion, Tailwind CSS, Node.js assertions

---

### Task 1: Write the failing mobile layout regression

**Files:**
- Create: `scripts/projects-mobile-layout-regression.mjs`

**Step 1: Assert the desired mobile-first class signatures**

- Expect a mobile section with top/bottom safe padding instead of fixed height.
- Expect a mobile non-sticky wrapper that only becomes sticky at `sm`.
- Expect mobile overflow visibility in the horizontal scroll area.
- Expect the mobile title block to be in normal flow.
- Expect the manual arrow controls to be hidden on mobile.

**Step 2: Run the regression script**

Run: `node scripts/projects-mobile-layout-regression.mjs`

Expected: FAIL before implementation because `Projects.jsx` still uses the mobile sticky full-screen stage.

### Task 2: Update `Projects.jsx` for mobile flow mode

**Files:**
- Modify: `src/components/Projects.jsx`

**Step 1: Convert the mobile section shell**

- Replace the mobile fixed height with top/bottom safe padding.
- Keep the existing `sm` and `lg` heights and offsets.

**Step 2: Convert the mobile wrapper and scroll containers**

- Make the outer wrapper non-sticky on mobile and sticky from `sm` upward.
- Keep horizontal swipe, but allow vertical overflow on mobile.
- Align cards to the top on mobile instead of vertically centering them inside a screen-height box.

**Step 3: Move decorative mobile elements out of the clipped layer**

- Put the title block into normal flow on mobile.
- Hide the manual previous/next buttons below `sm`.

### Task 3: Verify the change

**Files:**
- Modify: none

**Step 1: Run the regression script**

Run: `node scripts/projects-mobile-layout-regression.mjs`

Expected: PASS

**Step 2: Run the existing Projects layout script**

Run: `node scripts/projects-layout-regression.mjs`

Expected: PASS

**Step 3: Run lint**

Run: `npm run lint`

Expected: PASS

**Step 4: Run production build**

Run: `npm run build`

Expected: PASS with only the existing Browserslist age notice
