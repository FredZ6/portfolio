# Bucks-Inspired Portfolio Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rebuild the portfolio as a responsive white-and-blue editorial experience modeled on the public structure and motion language of buckssauce.com while preserving Fred's real content and links.

**Architecture:** Keep the existing React/Vite single-page application and component boundaries, but replace theme-switching and glassmorphism styling with a fixed light design system. Store reusable portfolio content in a small data module, use Framer Motion for entrances and scroll transforms, and retain the existing resume and project-gallery behaviors behind redesigned controls.

**Tech Stack:** React 18, Vite 6, Tailwind CSS 3, Framer Motion 11, Lucide React, CSS custom properties, Node regression scripts.

---

### Task 1: Lock the new page contract with a failing regression test

**Files:**
- Create: `scripts/editorial-redesign-regression.mjs`
- Modify: `package.json`

**Step 1: Write the failing test**

Create a Node script that reads `src/App.jsx`, `src/components/Navbar.jsx`, `src/components/Hero.jsx`, and `src/index.css`, then asserts:

```js
assert.match(app, /editorial-app-shell/)
assert.doesNotMatch(app, /toggleTheme|THEME_STORAGE_KEY/)
assert.match(navbar, /Work/)
assert.match(navbar, /Resume/)
assert.match(hero, /hero-bird-mark/)
assert.match(hero, /Software that ships/)
assert.match(css, /--ink:\s*#081b33/i)
assert.match(css, /prefers-reduced-motion/)
```

Add `"test:redesign": "node scripts/editorial-redesign-regression.mjs"` to `package.json`.

**Step 2: Run the test to verify it fails**

Run: `npm run test:redesign`

Expected: FAIL because the new shell and hero contract do not exist.

**Step 3: Commit the test contract**

```bash
git add package.json scripts/editorial-redesign-regression.mjs
git commit -m "test: define editorial portfolio contract"
```

### Task 2: Replace the theme shell and navigation

**Files:**
- Modify: `src/App.jsx`
- Modify: `src/components/Navbar.jsx`
- Modify: `src/index.css`
- Modify: `src/App.css`

**Step 1: Implement a fixed-theme application shell**

Remove local-storage theme state and render a stable composition:

```jsx
<div className="editorial-app-shell">
  <Navbar onOpenResume={() => setIsResumeOpen(true)} />
  <main>
    <Hero onOpenResume={() => setIsResumeOpen(true)} />
    <Skills />
    <Projects />
    <About />
  </main>
  <Footer />
</div>
```

Keep resume state in one owner so navbar and hero open the same dialog.

**Step 2: Rebuild navigation**

Use the bird mark at left, desktop anchor links at right, and a bordered mobile menu. Labels must be `Work`, `Stack`, `About`, `Contact`, and `Resume`.

**Step 3: Establish design tokens**

Replace the theme-variable matrix with a fixed set:

```css
:root {
  --paper: #f7fbff;
  --paper-blue: #e8f3ff;
  --ink: #081b33;
  --blue: #1268f3;
  --blue-deep: #0647ad;
  --rule: rgba(8, 27, 51, 0.2);
}
```

Add the condensed display face and a readable body-face fallback stack without using the old glass-panel system.

**Step 4: Run the regression test**

Run: `npm run test:redesign`

Expected: still FAIL only on hero assertions.

**Step 5: Commit**

```bash
git add src/App.jsx src/App.css src/components/Navbar.jsx src/index.css
git commit -m "feat: add fixed editorial shell and navigation"
```

### Task 3: Build the hero and shared resume dialog

**Files:**
- Create: `src/components/ResumeDialog.jsx`
- Modify: `src/components/Hero.jsx`
- Modify: `src/App.jsx`
- Modify: `src/index.css`

**Step 1: Move resume behavior into a shared dialog**

Extract the existing Escape-key, body-lock, PDF object, external-open, and close behavior into `ResumeDialog`. Preserve `/portfolio/resume/FredCV-2025%20codex.pdf` and accessible dialog semantics.

**Step 2: Build the editorial hero**

Use the approved hierarchy:

```jsx
<p className="hero-kicker">Software Engineer · Cloud Architect</p>
<h1>
  <span className="hero-outline">Software that ships</span>
  <span>with confidence</span>
</h1>
<motion.div className="hero-bird-mark" aria-hidden="true" />
```

Add project counter metadata, GitHub/LinkedIn/email links, a resume action, and a large circular next-section control. Use `useScroll`, `useTransform`, and `useReducedMotion` for bird rotation/translation and headline entrance.

**Step 3: Add CSS staging and motion fallbacks**

Implement the oversized two-line headline, outlined first line, central blue bird disk, dotted rules, and a minimum-height desktop stage. Under `prefers-reduced-motion`, disable continuous transforms and use simple opacity reveals.

**Step 4: Run tests**

Run: `npm run test:redesign`

Expected: PASS.

Run: `npm run build`

Expected: Vite production build succeeds.

**Step 5: Commit**

```bash
git add src/App.jsx src/components/Hero.jsx src/components/ResumeDialog.jsx src/index.css
git commit -m "feat: build scroll-led portfolio hero"
```

### Task 4: Recast skills as stacked engineering-principle cards

**Files:**
- Modify: `src/components/Skills.jsx`
- Modify: `src/index.css`
- Create: `scripts/editorial-skills-regression.mjs`

**Step 1: Write the failing section test**

Assert that `Skills.jsx` contains `id="stack"`, exactly three principle-card definitions, and headings for `Reliable by default`, `Cloud with intent`, and `AI, with guardrails`.

**Step 2: Run the test to verify it fails**

Run: `node scripts/editorial-skills-regression.mjs`

Expected: FAIL against the existing orbit/grid implementation.

**Step 3: Implement the section**

Render three tilted cards with small icon marks, concise principle copy, and supporting technologies. Use staggered in-view motion with rotations that resolve toward zero. Follow with an editorial technology ticker grouped into Backend, Cloud, Delivery, and AI Workflow.

**Step 4: Run the focused test and build**

Run: `node scripts/editorial-skills-regression.mjs && npm run build`

Expected: both succeed.

**Step 5: Commit**

```bash
git add src/components/Skills.jsx src/index.css scripts/editorial-skills-regression.mjs
git commit -m "feat: redesign engineering principles and stack"
```

### Task 5: Rebuild featured projects as “Choose Your Build”

**Files:**
- Modify: `src/components/Projects.jsx`
- Modify: `src/index.css`
- Modify: `scripts/projects-layout-regression.mjs`
- Modify: `scripts/projects-mobile-layout-regression.mjs`

**Step 1: Update tests for the intentional design contract**

Replace selectors tied to the old glass cards with assertions for:

```js
assert.match(source, /Choose Your/)
assert.match(source, /Build/)
assert.match(source, /project-editorial-card/)
assert.match(source, /aria-label=.*project/i)
```

Keep assertions that protect all three real project records and gallery navigation.

**Step 2: Run the focused tests to verify failure**

Run: `node scripts/projects-layout-regression.mjs && node scripts/projects-mobile-layout-regression.mjs`

Expected: FAIL because the editorial project markup is absent.

**Step 3: Implement the section**

Preserve the current project titles, descriptions, screenshots, repositories, galleries, and deep links. Present them as three oversized colored cards under outlined `BUILD` typography. Cards should overlap slightly on desktop, stack cleanly on mobile, and lift/straighten on hover or focus.

**Step 4: Preserve gallery behavior**

Keep click, keyboard, modal/lightbox, previous/next, close, and body-lock behavior. Restyle controls to the white-blue system and ensure buttons have accessible labels.

**Step 5: Verify**

Run: `node scripts/projects-layout-regression.mjs`

Run: `node scripts/projects-mobile-layout-regression.mjs`

Run: `npm run build`

Expected: all succeed.

**Step 6: Commit**

```bash
git add src/components/Projects.jsx src/index.css scripts/projects-layout-regression.mjs scripts/projects-mobile-layout-regression.mjs
git commit -m "feat: present projects as editorial builds"
```

### Task 6: Rebuild biography, proof points, and contact footer

**Files:**
- Modify: `src/components/About.jsx`
- Modify: `src/components/Certification.jsx`
- Modify: `src/components/Footer.jsx`
- Modify: `src/index.css`
- Create: `scripts/editorial-contact-regression.mjs`

**Step 1: Write the failing test**

Assert the presence of `id="about"`, `id="contact"`, the bird mark, email link, GitHub link, LinkedIn link, and three impact metrics.

**Step 2: Run it to verify failure**

Run: `node scripts/editorial-contact-regression.mjs`

Expected: FAIL until the new structure exists.

**Step 3: Implement “Why Fred”**

Create a large scrolling title, short biography, working-method statements, bird illustration moment, certification strip, and three proof points based only on claims already supported by the current portfolio content.

**Step 4: Implement contact footer**

Use a full-width navy closing panel with a large `LET'S BUILD` call to action, `mailto:` link, social links, resume action, and small copyright line.

**Step 5: Verify**

Run: `node scripts/editorial-contact-regression.mjs && npm run build`

Expected: both succeed.

**Step 6: Commit**

```bash
git add src/components/About.jsx src/components/Certification.jsx src/components/Footer.jsx src/index.css scripts/editorial-contact-regression.mjs
git commit -m "feat: add editorial story impact and contact sections"
```

### Task 7: Responsive polish, accessibility, and final verification

**Files:**
- Modify: `src/index.css`
- Modify: `src/components/Navbar.jsx`
- Modify: `src/components/Hero.jsx`
- Modify: `src/components/Skills.jsx`
- Modify: `src/components/Projects.jsx`
- Modify: `src/components/About.jsx`
- Modify: `src/components/Footer.jsx`
- Modify: relevant files under `scripts/`

**Step 1: Add responsive safeguards**

Verify no horizontal overflow at 390px, 768px, and 1280px. Reduce outlined headline scale, disable card overlap, simplify bird parallax, and make navigation/menu controls at least 44px on mobile.

**Step 2: Add accessibility safeguards**

Ensure keyboard focus styling, modal Escape behavior, semantic section headings, descriptive image alt text, and reduced-motion behavior. Decorative bird marks must be `aria-hidden`.

**Step 3: Run static verification**

Run: `npm run lint`

Expected: no ESLint errors.

Run: `npm run build`

Expected: Vite production build succeeds.

Run: `npm run test:redesign`

Expected: PASS.

Run every repository regression script that remains applicable and update only assertions invalidated by the approved redesign.

**Step 4: Run browser verification**

Start: `npm run dev -- --host 127.0.0.1`

Check in the browser at desktop and mobile widths:

- Loader/hero entrance completes
- Navigation scroll targets work
- Bird parallax is smooth
- Project galleries open and close
- Resume dialog opens from each entry point
- Mobile menu works
- No console errors
- Reduced-motion mode remains usable

**Step 5: Commit final polish**

```bash
git add src scripts package.json
git commit -m "fix: polish responsive editorial experience"
```

