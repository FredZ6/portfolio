# Page Scrollbar Premium Blue Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Remove the right-edge gutter feel and refine the constant deep-blue page scrollbar thumb into a more premium-looking accent.

**Architecture:** Keep the change CSS-only in `src/index.css`. Remove the reserved root scrollbar gutter, strengthen the thumb's gradient layering and highlight treatment, and leave local scrollbar utilities untouched.

**Tech Stack:** Tailwind CSS, Vite, Node.js assertions

---

### Task 1: Write the failing structural regression check

**Files:**
- Modify: none

**Step 1: Run the one-off failing check**

Run:

```bash
node --input-type=module -e "import { readFileSync } from 'node:fs'; import { strict as assert } from 'node:assert'; const css = readFileSync('src/index.css', 'utf8'); assert.doesNotMatch(css, /scrollbar-gutter:\\s*stable;/); assert.match(css, /rgba\\(191, 219, 254, 0\\.94\\)/); assert.match(css, /rgba\\(96, 165, 250, 0\\.9\\)/); assert.match(css, /rgba\\(59, 130, 246, 0\\.84\\)/);"
```

Expected: FAIL because the file still reserves a stable gutter and the thumb gradient is not yet upgraded to the stronger premium-blue layering.

### Task 2: Refine the root scrollbar styling

**Files:**
- Modify: `src/index.css`

**Step 1: Remove the gutter feel and enhance the thumb**

- Remove the root `scrollbar-gutter: stable` rule.
- Keep the track transparent.
- Increase the thumb's layered gradient contrast.
- Add a subtle inner highlight and restrained glow.
- Keep the hover state slightly brighter, not dramatically different.

### Task 3: Verify the change

**Files:**
- Modify: none

**Step 1: Re-run the structural check**

Run:

```bash
node --input-type=module -e "import { readFileSync } from 'node:fs'; import { strict as assert } from 'node:assert'; const css = readFileSync('src/index.css', 'utf8'); assert.doesNotMatch(css, /scrollbar-gutter:\\s*stable;/); assert.match(css, /rgba\\(191, 219, 254, 0\\.94\\)/); assert.match(css, /rgba\\(96, 165, 250, 0\\.9\\)/); assert.match(css, /rgba\\(59, 130, 246, 0\\.84\\)/);"
```

Expected: PASS

**Step 2: Run lint**

Run: `npm run lint`

Expected: PASS

**Step 3: Run production build**

Run: `npm run build`

Expected: PASS
