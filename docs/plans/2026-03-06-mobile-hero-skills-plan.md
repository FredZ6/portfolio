# Mobile Hero And Skills Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Improve phone-sized Hero and Skills layout balance without changing the existing desktop composition.

**Architecture:** Keep the current component structure and only adjust mobile-first Tailwind classes in `Hero.jsx` and `Skills.jsx`. Preserve existing `sm`, `md`, and `lg` breakpoints so the desktop and tablet experience stays intact while the mobile layout gets tighter spacing and smaller orbital geometry.

**Tech Stack:** React, Tailwind CSS, Framer Motion, Vite

---

### Task 1: Tighten Hero mobile spacing

**Files:**
- Modify: `src/components/Hero.jsx`

**Step 1: Adjust the mobile section container**

- Change the base `min-h-screen` usage to a mobile-stable viewport height.
- Reduce the mobile top spacing while preserving `sm`, `md`, and `lg` values.

**Step 2: Add mobile-safe horizontal breathing room**

- Update the foreground container to use mobile-only horizontal padding.
- Keep the glass description panel full-width within that padded container.

**Step 3: Rebalance the mobile hologram**

- Slightly reduce the background orb footprint for the base breakpoint.
- Increase the avatar prominence on mobile without affecting larger screens.

### Task 2: Shrink the Skills orbit on phones

**Files:**
- Modify: `src/components/Skills.jsx`

**Step 1: Reduce the base orbital scale**

- Lower the base `scale-[...]` value for the orbital system.
- Leave `sm`, `md`, and `lg` scales unchanged.

**Step 2: Keep title and orbit alignment intact**

- Preserve the current heading placement.
- Avoid desktop or tablet spacing regressions.

### Task 3: Verify the layout build

**Files:**
- Modify: none

**Step 1: Run lint**

Run: `npm run lint`

Expected: PASS

**Step 2: Run production build**

Run: `npm run build`

Expected: PASS with the existing non-blocking Browserslist notice only
