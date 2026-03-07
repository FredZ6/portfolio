# About Seam Reduction Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Reduce the visual split between the `Skills` and `About` sections without removing the `About` terminal identity.

**Architecture:** Update only the `About.jsx` shell and panel background classes. Keep the section structure, animations, and content intact while reducing the opacity and blur that currently make the `About` container read like a separate dark glass slab.

**Tech Stack:** React, Tailwind CSS, Framer Motion

---

### Task 1: Lighten the outer terminal shell

**Files:**
- Modify: `src/components/About.jsx`

**Step 1: Replace the heaviest shell treatment**

- Remove the large `glass-panel-strong` treatment from the outer terminal wrapper.
- Add a lighter transparent shell with a softer blur, border, and shadow.

### Task 2: Soften the internal panel fills

**Files:**
- Modify: `src/components/About.jsx`

**Step 1: Reduce left panel darkness**

- Lower the left panel background opacity so it no longer creates a strong block against the page background.

**Step 2: Reduce right panel highlight**

- Soften the right panel gradient so the shell remains cohesive without looking like a second background layer.

### Task 3: Verify the build

**Files:**
- Modify: none

**Step 1: Run lint**

Run: `npm run lint`

Expected: PASS

**Step 2: Run production build**

Run: `npm run build`

Expected: PASS with only the existing non-blocking Browserslist notice
