import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const source = readFileSync(new URL('../src/components/Projects.jsx', import.meta.url), 'utf8')
const css = readFileSync(new URL('../src/index.css', import.meta.url), 'utf8')

assert.match(source, /className="project-editorial-stack"/)
assert.doesNotMatch(source, /overflow-x-(?:auto|scroll)/)
assert.doesNotMatch(source, /activeMobileProjectIndex/)

const mobileRule = css.match(/@media \(max-width:\s*768px\) \{([\s\S]*?)\n\}/)?.[1] ?? ''
assert(mobileRule, 'Expected a <=768px Projects breakpoint.')
assert.match(mobileRule, /\.project-editorial-stack\s*\{[\s\S]*?grid-template-columns:\s*minmax\(0,\s*1fr\)/)
assert.match(mobileRule, /\.project-editorial-card[\s\S]*?transform:\s*none/)
assert.match(mobileRule, /\.project-editorial-card[\s\S]*?margin(?:-inline)?:\s*0/)
assert.match(css, /\.project-editorial-card\s*\{[\s\S]*?min-width:\s*0/)
assert.match(css, /\.project-editorial-action[\s\S]*?min-height:\s*44px/)
assert.match(css, /@media \(max-width:\s*420px\)/)
assert.match(css, /@media \(prefers-reduced-motion:\s*reduce\)[\s\S]*?\.project-editorial-card/)

console.log('Projects mobile layout is a readable, non-scrolling single-column stack.')
