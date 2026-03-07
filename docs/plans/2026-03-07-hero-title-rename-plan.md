# Hero Title Rename Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rename the Hero display title to `FRED Z`.

**Architecture:** Update only the title string in `src/components/Hero.jsx`. Keep the Hero structure, motion wrapper, and responsive typography unchanged, then verify the project still lints and builds.

**Tech Stack:** React, Tailwind CSS, Framer Motion

---

### Task 1: Update the Hero title copy

**Files:**
- Modify: `src/components/Hero.jsx`

**Step 1: Replace the title string**

- Change `FRED ZHANG` to `FRED Z`.
- Leave the heading element and classes unchanged.

### Task 2: Verify the project

**Files:**
- Modify: none

**Step 1: Run lint**

Run: `npm run lint`

Expected: PASS

**Step 2: Run production build**

Run: `npm run build`

Expected: PASS with only the existing non-blocking Browserslist notice
