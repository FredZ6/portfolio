# JobAgent Card Shortform Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Update the first project card to use the approved cold, premium short-form copy.

**Architecture:** Keep the change scoped to the first object in `PROJECTS` inside `src/components/Projects.jsx`. Do not alter layout, animation, or card rendering logic. Verify with lint and a production build.

**Tech Stack:** React, Vite, ESLint

---

### Task 1: Update the first project card copy

**Files:**
- Modify: `src/components/Projects.jsx`

**Step 1: Replace the title**

Change the first project title from `Local-First AI Job Application Copilot` to `Local-First AI Job Copilot`.

**Step 2: Replace the description**

Use:

```txt
Imports roles, scores fit, generates tailored resumes, and runs reviewable browser prefills before a human decides the final submit.
```

**Step 3: Replace the impact line**

Use:

```txt
URL IMPORT | FIT ANALYSIS | PDF RESUMES | REVIEWABLE PREFILL
```

**Step 4: Replace the delivery bullets**

Use:

```txt
End-to-end flow from job import to submission tracking.
Observable automation with screenshots, logs, retries, and run history.
Manual final submit by design.
```

### Task 2: Verify the copy change

**Files:**
- Modify: `src/components/Projects.jsx`

**Step 1: Run lint**

Run: `npm run lint`
Expected: exit code `0`

**Step 2: Run build**

Run: `npm run build`
Expected: exit code `0`
