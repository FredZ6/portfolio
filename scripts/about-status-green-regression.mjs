import { readFileSync } from 'node:fs'
import { strict as assert } from 'node:assert'

const about = readFileSync(new URL('../src/components/About.jsx', import.meta.url), 'utf8')
const css = readFileSync(new URL('../src/index.css', import.meta.url), 'utf8')

const statusRow = about.match(/<p className="why-fred-status">([\s\S]*?)<\/p>/)?.[1] ?? ''

assert(statusRow, 'Expected the current About status row to remain visible in the biography.')
assert.match(statusRow, /<span aria-hidden="true" \/>/)
assert.match(statusRow, /<span className="about-status-online">Status: Online<\/span>/)
assert.match(statusRow, /Winnipeg, Canada · Available worldwide/)
assert.doesNotMatch(statusRow, /className="[^"]*\b(?:hidden|sr-only)\b/)
assert.match(css, /\.about-status-online\s*\{\s*color:\s*#34d399;/)

console.log('About preserves its visible online status semantics and green indicator.')
