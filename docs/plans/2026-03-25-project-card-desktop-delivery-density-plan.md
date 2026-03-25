# Project Card Desktop Delivery Density Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add richer `What shipped` copy only for very large desktop project cards.

**Architecture:** Keep the change in `src/components/Projects.jsx` and add one structural regression script in `scripts/`. Extend each project with a `desktopDelivery` array, then render the short or expanded copy with responsive visibility classes so only `2xl` and up uses the richer variant.

**Tech Stack:** React, Tailwind CSS, Vite, Node.js assertions

---

### Task 1: Write the failing structural regression check

**Files:**
- Create: `scripts/projects-desktop-delivery-density-regression.mjs`

**Step 1: Assert the intended structure**

- Expect a `desktopDelivery` field in the project data.
- Expect responsive desktop-copy toggles with `2xl:hidden` and `hidden 2xl:inline`.
- Expect `desktopDelivery` to be reflected in the prop types.

**Step 2: Run the regression check**

Run: `node scripts/projects-desktop-delivery-density-regression.mjs`

Expected: FAIL before implementation.

### Task 2: Add richer large-screen delivery copy

**Files:**
- Modify: `src/components/Projects.jsx`

**Step 1: Extend project data**

- Add `desktopDelivery` arrays for all current project entries.

**Step 2: Render responsive delivery text**

- Keep the current `delivery` text visible up to `xl`.
- Show the expanded `desktopDelivery` copy only at `2xl` and up in the desktop `What shipped` column.

### Task 3: Verify the change

**Files:**
- Modify: none

**Step 1: Re-run regression**

Run: `node scripts/projects-desktop-delivery-density-regression.mjs`

Expected: PASS

**Step 2: Run lint**

Run: `npm run lint`

Expected: PASS

**Step 3: Run build**

Run: `npm run build`

Expected: PASS
