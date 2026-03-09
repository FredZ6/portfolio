import { readFileSync } from 'node:fs'
import { strict as assert } from 'node:assert'

const about = readFileSync(new URL('../src/components/About.jsx', import.meta.url), 'utf8')

assert.match(about, /<ShieldCheck size=\{12\} className="text-emerald-400" \/>/)
assert.match(about, /<span className="text-emerald-400">Status: Online<\/span>/)
assert.doesNotMatch(about, /<p className="text-primary text-xs font-mono uppercase tracking-\[0\.2em\] flex items-center gap-1">/)

console.log('About status row uses green icon and green status text.')
