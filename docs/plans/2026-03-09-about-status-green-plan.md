# About Status Green Accent Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Make only the About shield icon and `Status: Online` text green without affecting the rest of the About section.

**Architecture:** Update the status row markup in `src/components/About.jsx` so the icon and status text carry their own green class names. Add a tiny Node assertion script that proves those exact green tokens exist and the old blue row class is gone, then run lint and build.

**Tech Stack:** React, Vite, Tailwind CSS, Node.js assertions

---

### Task 1: Prove the green status row is not present yet

**Files:**
- Modify: none

**Step 1: Run the one-off failing check**

Run:

```bash
node --input-type=module -e "import { readFileSync } from 'node:fs'; import { strict as assert } from 'node:assert'; const about = readFileSync('src/components/About.jsx', 'utf8'); assert.match(about, /<ShieldCheck size=\\{12\\} className=\\\"text-emerald-400\\\" \\/>/);"
```

Expected: FAIL because the About status row is still blue.

### Task 2: Scope the green accent to the About status row

**Files:**
- Modify: `src/components/About.jsx`
- Create: `scripts/about-status-green-regression.mjs`

**Step 1: Remove the shared blue class from the status row**

- Keep the row layout classes and drop the shared `text-primary`.

**Step 2: Add green classes to the shield and status text**

- Put `text-emerald-400` on the `ShieldCheck` icon.
- Wrap `Status: Online` in a green span.

**Step 3: Lock the token with a regression script**

- Assert the green icon class exists.
- Assert the green status text span exists.
- Assert the old blue row class signature is absent.

### Task 3: Verify the change

**Files:**
- Modify: none

**Step 1: Run the regression script**

Run: `node scripts/about-status-green-regression.mjs`

Expected: PASS

**Step 2: Run lint**

Run: `npm run lint`

Expected: PASS

**Step 3: Run production build**

Run: `npm run build`

Expected: PASS with only the existing Browserslist age notice
