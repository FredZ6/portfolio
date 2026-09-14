import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const [app, navbar, hero, css] = await Promise.all([
  readFile('src/App.jsx', 'utf8'),
  readFile('src/components/Navbar.jsx', 'utf8'),
  readFile('src/components/Hero.jsx', 'utf8'),
  readFile('src/index.css', 'utf8'),
])

assert.match(app, /editorial-app-shell/)
assert.doesNotMatch(app, /toggleTheme|THEME_STORAGE_KEY/)
assert.match(navbar, /Work/)
assert.match(navbar, /Resume/)
assert.match(hero, /hero-bird-mark/)
assert.doesNotMatch(hero, /FZ \/ 26/)
assert.match(hero, /Software that ships/)
assert.match(css, /--ink:\s*#081b33/i)
assert.match(
  css,
  /\.hero-heading\s*\{[\s\S]*?font-size:\s*clamp\(4rem,\s*8\.8vw,\s*8\.8rem\)/,
  'Desktop hero type must stay within the available stage width on compact laptops.',
)
assert.match(css, /rgba\(18,\s*104,\s*243,\s*0\.58\)/)
assert.match(css, /-webkit-backdrop-filter:\s*blur\(12px\) saturate\(135%\)/)
assert.match(css, /(?<!-webkit-)backdrop-filter:\s*blur\(12px\) saturate\(135%\)/)
assert.match(css, /prefers-reduced-motion/)

const frostedSurfaceBlock = css.match(
  /\/\* Shared blue frosted surfaces\. \*\/([\s\S]*?)\/\* End shared blue frosted surfaces\. \*\//,
)?.[1] ?? ''
assert(frostedSurfaceBlock, 'The shared blue frosted surface block must exist.')
for (const selector of [
  '.principle-card-band',
  '.editorial-certifications-toggle',
  '.project-editorial-action--primary',
  '.proof-points-grid dd',
  '.editorial-contact-submit button',
  '.why-fred-bird',
  '.hero-next',
  '.editorial-nav-links .editorial-resume-link',
]) {
  assert(frostedSurfaceBlock.includes(selector), `Missing frosted treatment for ${selector}.`)
}
assert.match(frostedSurfaceBlock, /background:\s*var\(--blue-glass-surface\)/)
assert.match(frostedSurfaceBlock, /-webkit-backdrop-filter:\s*blur\(12px\) saturate\(135%\)/)
assert.match(frostedSurfaceBlock, /(?<!-webkit-)backdrop-filter:\s*blur\(12px\) saturate\(135%\)/)
const frostedShadowValues = [...frostedSurfaceBlock.matchAll(/box-shadow:\s*([^;]+);/g)]
  .map((match) => match[1].trim())
assert(frostedShadowValues.length > 0, 'Shared frosted surfaces must explicitly override inherited shadows.')
assert(
  frostedShadowValues.every((value) => value === 'none'),
  'Shared frosted surfaces must not restore any removed glow or inset highlight.',
)
assert.doesNotMatch(
  frostedSurfaceBlock,
  /radial-gradient\(/,
  'Shared frosted surfaces must not restore the removed upper-left highlight layer.',
)
