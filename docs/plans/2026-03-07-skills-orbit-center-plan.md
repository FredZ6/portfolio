# Skills Orbit Centering Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Fix the `Skills` orbit drift so each icon remains centered on its orbital path during continuous animation.

**Architecture:** Keep the existing CSS ring spin and counter-spin animations, but rebuild each orbit item so the animated counter wrapper rotates around the icon's true center. Remove the negative-margin offset and replace it with a fixed-size centered anchor wrapper in `Skills.jsx`.

**Tech Stack:** React, Tailwind CSS, Framer Motion

---

### Task 1: Document the approved fix

**Files:**
- Create: `docs/plans/2026-03-07-skills-orbit-center-design.md`
- Create: `docs/plans/2026-03-07-skills-orbit-center-plan.md`

**Step 1: Capture the root cause**

- Record why the current negative-margin centering causes the counter-rotating icon wrapper to drift visually off the ring.

**Step 2: Capture the approved approach**

- Record the centered-anchor approach and the verification requirements.

### Task 2: Rebuild the orbit item anchor

**Files:**
- Modify: `src/components/Skills.jsx`

**Step 1: Remove the negative-margin icon centering**

- Delete the `-ml-*` and `-mt-*` offsets from the icon card wrapper.

**Step 2: Add a true center anchor**

- Wrap the counter-rotating icon in a fixed-size box.
- Center that box over the orbit point with `-translate-x-1/2 -translate-y-1/2`.

**Step 3: Preserve interactions**

- Keep the same hover scale, tooltip, icon sizing, and animation direction values.

### Task 3: Verify the fix

**Files:**
- Modify: none

**Step 1: Run lint**

Run: `npm run lint`

Expected: PASS

**Step 2: Run production build**

Run: `npm run build`

Expected: PASS with only the existing non-blocking Browserslist notice
