import { readFileSync } from 'node:fs'
import { strict as assert } from 'node:assert'

const app = readFileSync(new URL('../src/App.jsx', import.meta.url), 'utf8')
const navbar = readFileSync(new URL('../src/components/Navbar.jsx', import.meta.url), 'utf8')
const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8')

assert.match(app, /const THEME_STORAGE_KEY = 'portfolio-theme'/)
assert.match(app, /const \[theme, setTheme\] = useState\(/)
assert.match(app, /localStorage\.getItem\(THEME_STORAGE_KEY\)/)
assert.match(app, /document\.documentElement\.dataset\.theme = theme/)
assert.match(app, /meta\[name="theme-color"\]/)
assert.match(app, /setTheme\(\(currentTheme\) => currentTheme === 'dark' \? 'light' : 'dark'\)/)
assert.match(app, /<Navbar theme=\{theme\} onToggleTheme=\{toggleTheme\} \/>/)

assert.match(navbar, /theme/)
assert.match(navbar, /onToggleTheme/)
assert.match(navbar, /data-theme-toggle="true"/)
assert.match(navbar, /Switch to light theme/)
assert.match(navbar, /Switch to dark theme/)

assert.match(html, /portfolio-theme/)

console.log('Theme toggle wiring persists a dark\/light preference and exposes a navbar control for switching themes.')
