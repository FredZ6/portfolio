# Global Page Scrollbar Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Restore and style the main document scrollbar without affecting component-level scroll containers.

**Architecture:** Keep the change inside `src/index.css`. Replace the current global scrollbar-hiding rules with root-scoped scrollbar styling on `html`, reusing the existing scrollbar design tokens so the page scrollbar matches the site's glassy cyan-blue aesthetic while leaving component classes untouched.

**Tech Stack:** React, Tailwind CSS, Vite, Node.js assertions

---

### Task 1: Write the failing structural regression check

**Files:**
- Modify: none

**Step 1: Run the one-off failing check**

Run:

```bash
node --input-type=module -e "import { readFileSync } from 'node:fs'; import { strict as assert } from 'node:assert'; const css = readFileSync('src/index.css', 'utf8'); const rootHtml = css.match(/html\\s*\\{[^}]*\\}/)?.[0] ?? ''; assert.match(css, /html::\\-webkit\\-scrollbar/); assert.match(rootHtml, /scrollbar-width:\\s*thin;/); assert.doesNotMatch(rootHtml, /scrollbar-width:\\s*none;/); assert.doesNotMatch(css, /(^|\\n)\\s*::\\-webkit\\-scrollbar\\s*\\{/);"
```

Expected: FAIL because the root scrollbar selectors do not exist yet, the root still uses `scrollbar-width: none`, and the file still has a global anonymous WebKit scrollbar override.

### Task 2: Style the root page scrollbar

**Files:**
- Modify: `src/index.css`

**Step 1: Replace the global hide rules**

- Remove the root scrollbar hiding rules from `html`, `body`, and the generic `::-webkit-scrollbar*` selectors.
- Add root-scoped `html::-webkit-scrollbar`, `html::-webkit-scrollbar-track`, `html::-webkit-scrollbar-thumb`, and hover styling.
- Keep the existing scrollbar color tokens and local scrollbar utility classes.

### Task 3: Verify the change

**Files:**
- Modify: none

**Step 1: Re-run the one-off check**

Run:

```bash
node --input-type=module -e "import { readFileSync } from 'node:fs'; import { strict as assert } from 'node:assert'; const css = readFileSync('src/index.css', 'utf8'); const rootHtml = css.match(/html\\s*\\{[^}]*\\}/)?.[0] ?? ''; assert.match(css, /html::\\-webkit\\-scrollbar/); assert.match(css, /html::\\-webkit\\-scrollbar\\-thumb/); assert.match(rootHtml, /scrollbar-width:\\s*thin;/); assert.doesNotMatch(rootHtml, /scrollbar-width:\\s*none;/); assert.doesNotMatch(css, /(^|\\n)\\s*::\\-webkit\\-scrollbar\\s*\\{/);"
```

Expected: PASS

**Step 2: Run lint**

Run: `npm run lint`

Expected: PASS

**Step 3: Run production build**

Run: `npm run build`

Expected: PASS
