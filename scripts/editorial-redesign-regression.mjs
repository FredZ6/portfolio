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
assert.match(css, /rgba\(18,\s*104,\s*243,\s*0\.58\)/)
assert.match(css, /-webkit-backdrop-filter:\s*blur\(12px\) saturate\(135%\)/)
assert.match(css, /(?<!-webkit-)backdrop-filter:\s*blur\(12px\) saturate\(135%\)/)
assert.match(css, /prefers-reduced-motion/)
