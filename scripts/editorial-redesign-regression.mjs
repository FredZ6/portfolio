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
assert.match(hero, /Software that ships/)
assert.match(css, /--ink:\s*#081b33/i)
assert.match(css, /prefers-reduced-motion/)
