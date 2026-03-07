# Hero Bird Scale Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Enlarge the Hero bird glyph by 20 percent on both mobile and desktop without changing the ring geometry, and stabilize the desktop subtitle rendering.

**Architecture:** Update the image scale classes in `src/components/Hero.jsx` and add a small subtitle class adjustment on the Hero subtitle. Leave the hologram container, ring insets, and motion settings untouched so the visual change remains isolated to the bird glyph while the subtitle fix only affects rendering stability.

**Tech Stack:** React, Tailwind CSS, Framer Motion

---

### Task 1: Increase the Hero bird image scale

**Files:**
- Modify: `src/components/Hero.jsx`

**Step 1: Raise the mobile image scale**

- Increase the base image scale from its current value by 20 percent.

**Step 2: Raise the desktop image scale**

- Increase the `sm` and above image scale from its current value by 20 percent.
- Do not alter the surrounding hologram structure.

### Task 2: Fix the desktop subtitle rendering

**Files:**
- Modify: `src/components/Hero.jsx`

**Step 1: Add subtitle rendering safeguards**

- Add isolation so the subtitle is less affected by background blending.
- Add a slightly safer line-height and bottom breathing room so descenders render cleanly.

### Task 3: Verify the build

**Files:**
- Modify: none

**Step 1: Run lint**

Run: `npm run lint`

Expected: PASS

**Step 2: Run production build**

Run: `npm run build`

Expected: PASS with only the existing non-blocking Browserslist notice
