# Main Page Scrollbar Hidden Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Hide the main page scrollbar again without affecting local scrollbar utilities.

**Architecture:** Keep the change limited to `src/index.css`. Replace the current root scrollbar presentation with hidden root scrollbar rules on `html`, while leaving `.custom-scrollbar` and `.scrollbar-none` as-is.

**Tech Stack:** Tailwind CSS, Vite, Node.js assertions

---

### Task 1: Write the failing structural regression check

**Files:**
- Modify: none

**Step 1: Run the one-off failing check**

Run:

```bash
node --input-type=module -e "import { readFileSync } from 'node:fs'; import { strict as assert } from 'node:assert'; const css = readFileSync('src/index.css', 'utf8'); const rootHtml = css.match(/html\\s*\\{[^}]*\\}/)?.[0] ?? ''; const rootScrollbar = css.match(/html::\\-webkit\\-scrollbar\\s*\\{[^}]*\\}/)?.[0] ?? ''; assert.match(rootHtml, /scrollbar-width:\\s*none;/); assert.match(rootHtml, /scrollbar-color:\\s*transparent\\s+transparent;/); assert.match(rootScrollbar, /width:\\s*0;/); assert.match(rootScrollbar, /height:\\s*0;/);"
```

Expected: FAIL because the root scrollbar is currently visible and styled.

### Task 2: Hide the root scrollbar again

**Files:**
- Modify: `src/index.css`

**Step 1: Restore hidden root scrollbar rules**

- Set the root `html` scrollbar to hidden for Firefox.
- Collapse the root WebKit scrollbar to zero size.
- Make the root track, thumb, and corner transparent.
- Keep local scrollbar utility classes unchanged.

### Task 3: Verify the change

**Files:**
- Modify: none

**Step 1: Re-run the structural check**

Run:

```bash
node --input-type=module -e "import { readFileSync } from 'node:fs'; import { strict as assert } from 'node:assert'; const css = readFileSync('src/index.css', 'utf8'); const rootHtml = css.match(/html\\s*\\{[^}]*\\}/)?.[0] ?? ''; const rootScrollbar = css.match(/html::\\-webkit\\-scrollbar\\s*\\{[^}]*\\}/)?.[0] ?? ''; assert.match(rootHtml, /scrollbar-width:\\s*none;/); assert.match(rootHtml, /scrollbar-color:\\s*transparent\\s+transparent;/); assert.match(rootScrollbar, /width:\\s*0;/); assert.match(rootScrollbar, /height:\\s*0;/);"
```

Expected: PASS

**Step 2: Run lint**

Run: `npm run lint`

Expected: PASS

**Step 3: Run production build**

Run: `npm run build`

Expected: PASS
