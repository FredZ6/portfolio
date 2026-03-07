# Mobile Hero Core Scale Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Slightly enlarge the mobile Hero center orb, inner ring, and bird avatar while preserving larger breakpoints.

**Architecture:** Adjust only the base Tailwind size classes in `Hero.jsx` for the background orb container and let the existing nested orbit structure scale from that larger footprint. Keep all `sm`, `md`, and `lg` classes unchanged so desktop and tablet layouts remain exactly as they are.

**Tech Stack:** React, Tailwind CSS, Framer Motion

---

### Task 1: Enlarge the mobile Hero center apparatus

**Files:**
- Modify: `src/components/Hero.jsx`

**Step 1: Increase the base orb container size**

- Raise the mobile-only width and height of the `Tilt` wrapper.
- Keep the `sm`, `md`, and `lg` dimensions unchanged.

**Step 2: Preserve inner balance**

- Loosen the mobile-only inner ring and core insets so the larger outer footprint scales the whole center apparatus together.
- Keep each size increase incremental to avoid crowding the Hero headline and description card.
- Maintain the current hover, motion, and blend behavior.

### Task 2: Verify the build

**Files:**
- Modify: none

**Step 1: Run lint**

Run: `npm run lint`

Expected: PASS

**Step 2: Run production build**

Run: `npm run build`

Expected: PASS with only the existing non-blocking Browserslist notice
