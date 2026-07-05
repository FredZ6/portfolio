import { readFileSync } from 'node:fs'
import { strict as assert } from 'node:assert'

const about = readFileSync(new URL('../src/components/About.jsx', import.meta.url), 'utf8')
const css = readFileSync(new URL('../src/index.css', import.meta.url), 'utf8')

const statusRow = about.match(/<p className="text-xs font-mono uppercase tracking-\[0\.2em\] flex items-center gap-1">([\s\S]*?)<\/p>/)?.[1] ?? ''

assert(statusRow, 'Expected the current About status row to remain visible in the profile header.')
assert.match(statusRow, /<ShieldCheck size=\{12\} className="text-emerald-400" \/>/)
assert.match(statusRow, /<span className="about-status-online">Status: Online<\/span>/)
assert.doesNotMatch(statusRow, /\b(?:hidden|sr-only)\b/)
assert.match(css, /\.about-status-online\s*\{\s*color:\s*#34d399;/)

console.log('About preserves its visible online status semantics and green indicator.')
