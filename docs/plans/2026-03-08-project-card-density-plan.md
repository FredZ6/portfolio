# Project Card Density Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rework the `Projects` cards so they keep their large presentation while using the internal space more effectively.

**Architecture:** Keep the change in `src/components/Projects.jsx`. Expand the project data model with structured delivery bullets and stats, then refactor `ProjectCard` into a denser layout made of a header, signal row, detail grid, and footer bar. Verify the change with a structural one-off check plus lint and build.

**Tech Stack:** React, Tailwind CSS, Vite, Node.js assertions

---

### Task 1: Write the failing structural regression check

**Files:**
- Modify: none

**Step 1: Run the one-off failing check**

Run:

```bash
node --input-type=module -e "import { readFileSync } from 'node:fs'; import { strict as assert } from 'node:assert'; const projects = readFileSync('src/components/Projects.jsx', 'utf8'); assert.match(projects, /delivery:\\s*\\[/); assert.match(projects, /stats:\\s*\\[/); assert.match(projects, /What shipped/); assert.match(projects, /Delivery signal/); assert.match(projects, /Stack focus/);"
```

Expected: FAIL because the current card still uses the sparse single-column layout and the structured sections are not present yet.

### Task 2: Extend the project data

**Files:**
- Modify: `src/components/Projects.jsx`

**Step 1: Add structured content**

- Add `delivery` bullet arrays for each project.
- Add `stats` arrays for each project.
- Add `status` values for each project.

### Task 3: Refactor the project card layout

**Files:**
- Modify: `src/components/Projects.jsx`

**Step 1: Replace the sparse middle section**

- Keep the strong header.
- Preserve the impact row as a compact signal line.
- Add a middle detail grid with `What shipped`, `Delivery signal`, and `Stack focus`.
- Replace the loose action row with a true footer bar that includes gallery action, status, gallery count, and index.

### Task 4: Verify the change

**Files:**
- Modify: none

**Step 1: Re-run the structural check**

Run:

```bash
node --input-type=module -e "import { readFileSync } from 'node:fs'; import { strict as assert } from 'node:assert'; const projects = readFileSync('src/components/Projects.jsx', 'utf8'); assert.match(projects, /delivery:\\s*\\[/); assert.match(projects, /stats:\\s*\\[/); assert.match(projects, /What shipped/); assert.match(projects, /Delivery signal/); assert.match(projects, /Stack focus/);"
```

Expected: PASS

**Step 2: Run lint**

Run: `npm run lint`

Expected: PASS

**Step 3: Run production build**

Run: `npm run build`

Expected: PASS
