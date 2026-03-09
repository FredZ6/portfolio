# Projects Mobile Button Navigation Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace mobile swipe-driven project navigation with button-driven single-card navigation so vertical page scrolling no longer gets hijacked on phones.

**Architecture:** Keep the current desktop carousel intact from `sm` upward. On mobile, render a separate single-card presentation with local project index state and explicit previous/next controls, then update the regression script to lock in the absence of the mobile horizontal scroll surface.

**Tech Stack:** React, Framer Motion, Tailwind CSS, Node.js assertions

---

### Task 1: Write the failing mobile navigation regression

**Files:**
- Modify: `scripts/projects-mobile-layout-regression.mjs`

**Step 1: Assert the desired mobile navigation structure**

- Expect a mobile project index state in `Projects`.
- Expect mobile-only controls with previous/next buttons and a progress label.
- Expect the desktop horizontal scroll surface to be hidden below `sm`.
- Expect the mobile instructional copy to reference buttons only.

**Step 2: Run the regression script**

Run: `node scripts/projects-mobile-layout-regression.mjs`

Expected: FAIL before implementation because mobile still uses the horizontal scroll surface.

### Task 2: Implement mobile button navigation in `Projects.jsx`

**Files:**
- Modify: `src/components/Projects.jsx`

**Step 1: Add mobile project index state and handlers**

- Track the current mobile project.
- Add bounded previous/next actions.

**Step 2: Split mobile and desktop project presentation**

- Render a mobile-only single-card wrapper with explicit controls.
- Hide the desktop horizontal scroll surface on mobile and keep it visible from `sm` upward.

**Step 3: Align mobile copy with the interaction**

- Update the helper text to mention buttons on mobile.

### Task 3: Verify the change

**Files:**
- Modify: none

**Step 1: Run the mobile regression script**

Run: `node scripts/projects-mobile-layout-regression.mjs`

Expected: PASS

**Step 2: Run the existing Projects layout regression**

Run: `node scripts/projects-layout-regression.mjs`

Expected: PASS

**Step 3: Run lint**

Run: `npm run lint`

Expected: PASS

**Step 4: Run production build**

Run: `npm run build`

Expected: PASS with only the existing Browserslist age notice
