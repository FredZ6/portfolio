# Hero Frosted Bird Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Turn the hero bird mark's opaque blue disk into a medium-transparency frosted-blue surface that reveals the headline behind it.

**Architecture:** Keep the existing hero markup and layer structure. Change only the `.hero-bird-mark` surface styling, using translucent blue plus prefixed and unprefixed backdrop filters, and lock the behavior with the existing source-level redesign regression test.

**Tech Stack:** React 18, CSS, Vite, Node.js assertion-based regression scripts

---

### Task 1: Frost the hero bird mark

**Files:**
- Modify: `scripts/editorial-redesign-regression.mjs`
- Modify: `src/index.css`

**Step 1: Write the failing test**

Add assertions that require a translucent `rgba` background and both backdrop-filter declarations in the hero mark styles:

```js
assert.match(css, /\.hero-bird-mark[\s\S]*background:\s*rgba\(18,\s*104,\s*243,\s*0\.58\)/)
assert.match(css, /-webkit-backdrop-filter:\s*blur\(12px\) saturate\(135%\)/)
assert.match(css, /backdrop-filter:\s*blur\(12px\) saturate\(135%\)/)
```

**Step 2: Run the test to verify it fails**

Run: `npm run test:redesign`

Expected: FAIL because `.hero-bird-mark` still uses an opaque background.

**Step 3: Implement the minimal CSS change**

In `.hero-bird-mark`, replace the opaque background with:

```css
background: rgba(18, 104, 243, 0.58);
-webkit-backdrop-filter: blur(12px) saturate(135%);
backdrop-filter: blur(12px) saturate(135%);
```

Slightly soften the existing shadow only if its current opacity visually overpowers the translucent surface.

**Step 4: Verify the regression and build**

Run: `npm run test:redesign && npm run build`

Expected: the regression test passes and Vite completes the production build with exit code 0.

**Step 5: Verify the local preview**

Run: `curl -sS -o /dev/null -w '%{http_code}\n' http://localhost:3001/portfolio/`

Expected: `200`.
