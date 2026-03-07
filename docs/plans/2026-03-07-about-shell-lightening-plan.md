# About Shell Lightening Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Soften the outer About terminal shell so it stops reading like an extra shallow glass layer over the background.

**Architecture:** Modify only the class list on the outer `motion.div` shell in `src/components/About.jsx`. Use a one-off Node assertion to prove the new lighter class signature is absent before the change and present afterward, then run lint and build.

**Tech Stack:** React, Vite, Tailwind CSS, Node.js assertions

---

### Task 1: Prove the lighter shell is not present yet

**Files:**
- Modify: none

**Step 1: Run the one-off failing check**

Run:

```bash
node --input-type=module -e "import { readFileSync } from 'node:fs'; import { strict as assert } from 'node:assert'; const about = readFileSync('src/components/About.jsx', 'utf8'); assert.match(about, /bg-black\\/6 backdrop-blur-\\[10px\\]/);"
```

Expected: FAIL because the current outer shell still uses the heavier background and blur.

### Task 2: Lighten the outer shell in `About.jsx`

**Files:**
- Modify: `src/components/About.jsx`

**Step 1: Reduce shell fill and blur**

- Lower the outer shell background opacity and blur.

**Step 2: Reduce shell border and shadow**

- Soften the border and shadow so the shell reads as framing, not a second plate.

### Task 3: Verify the change

**Files:**
- Modify: none

**Step 1: Re-run the one-off check**

Run:

```bash
node --input-type=module -e "import { readFileSync } from 'node:fs'; import { strict as assert } from 'node:assert'; const about = readFileSync('src/components/About.jsx', 'utf8'); assert.match(about, /bg-black\\/6 backdrop-blur-\\[10px\\]/);"
```

Expected: PASS

**Step 2: Run lint**

Run: `npm run lint`

Expected: PASS

**Step 3: Run production build**

Run: `npm run build`

Expected: PASS with only the existing Browserslist age notice
