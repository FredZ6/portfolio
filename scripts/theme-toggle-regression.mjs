import { readFileSync } from 'node:fs'
import { strict as assert } from 'node:assert'

const app = readFileSync(new URL('../src/App.jsx', import.meta.url), 'utf8')
const navbar = readFileSync(new URL('../src/components/Navbar.jsx', import.meta.url), 'utf8')
const css = readFileSync(new URL('../src/index.css', import.meta.url), 'utf8')

assert.doesNotMatch(app, /THEME_STORAGE_KEY|toggleTheme|setTheme|\[theme,\s*setTheme\]/)
assert.doesNotMatch(app, /<Navbar[^>]*(?:theme=|onToggleTheme=)/)
assert.match(app, /document\.documentElement\.dataset\.theme = 'light'/)
assert.match(app, /localStorage\.removeItem\('portfolio-theme'\)/)
assert.match(app, /meta\[name="theme-color"\][\s\S]*?setAttribute\('content', '#f7fbff'\)/)
assert.match(app, /meta\[name="color-scheme"\][\s\S]*?setAttribute\('content', 'light'\)/)

assert.doesNotMatch(navbar, /onToggleTheme|data-theme-toggle|Switch to (?:light|dark) theme/)
assert.doesNotMatch(navbar, /\btheme:\s*PropTypes/)

assert.match(css, /\/\* Fixed white-and-blue editorial foundation\. \*\/[\s\S]*?--paper:\s*#f7fbff;/)
assert.match(css, /--ink:\s*#081b33;/)
assert.match(css, /--blue:\s*#1268f3;/)
assert.match(css, /color-scheme:\s*light;/)

console.log('The portfolio enforces a fixed light white-and-blue theme without a navbar toggle.')
