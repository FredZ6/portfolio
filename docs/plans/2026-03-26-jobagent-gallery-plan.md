# JobAgent Gallery Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the JobAgent case-study CTA with an in-card gallery backed by four `16:9` cropped screenshots.

**Architecture:** Keep the `Projects` rendering logic unchanged and update only the first project data object plus new static assets under `public/projects/job-agent`. Add a narrow regression script that checks the JobAgent card uses gallery mode and references the cropped image paths.

**Tech Stack:** React, Vite, Node.js, Pillow

---

### Task 1: Add a regression check for JobAgent gallery mode

**Files:**
- Create: `scripts/jobagent-gallery-regression.mjs`

**Step 1: Write the failing test**

Assert that the JobAgent project block in `src/components/Projects.jsx`:
- uses `ctaLabel: 'View Gallery'`
- does not define `ctaUrl`
- references four `-16x9.png` gallery images under `/portfolio/projects/job-agent/`

**Step 2: Run test to verify it fails**

Run: `node scripts/jobagent-gallery-regression.mjs`
Expected: FAIL while the card still uses `View Case Study`

### Task 2: Add cropped screenshot assets and update JobAgent data

**Files:**
- Modify: `src/components/Projects.jsx`
- Create: `public/projects/job-agent/application-review-automation-sessions-16x9.png`
- Create: `public/projects/job-agent/job-detail-workflow-runs-16x9.png`
- Create: `public/projects/job-agent/dashboard-overview-16x9.png`
- Create: `public/projects/job-agent/resume-review-pdf-preview-16x9.png`

**Step 1: Crop the supplied screenshots to `16:9`**

Use top-focused crops so each image preserves the page heading and the highest-signal content blocks.

**Step 2: Update the first `PROJECTS` entry**

- Change the CTA label to `View Gallery`
- Remove `ctaUrl`
- Replace the single repository preview with the four cropped local images

### Task 3: Verify the scoped change

**Files:**
- Modify: `src/components/Projects.jsx`
- Create: `scripts/jobagent-gallery-regression.mjs`

**Step 1: Run the regression check**

Run: `node scripts/jobagent-gallery-regression.mjs`
Expected: PASS

**Step 2: Run lint**

Run: `npm run lint`
Expected: exit code `0`

**Step 3: Run build**

Run: `npm run build`
Expected: exit code `0`
