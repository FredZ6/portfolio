import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const source = readFileSync(new URL('../src/components/Projects.jsx', import.meta.url), 'utf8')
const css = readFileSync(new URL('../src/index.css', import.meta.url), 'utf8')

assert(source.includes('Open case gallery'), 'Expected the image CTA to clearly describe opening the gallery.')
assert(source.includes("String(project.images.length).padStart(2, '0')"), 'Expected the gallery frame count to be rendered inside the image CTA.')
assert.match(source, /<button[^>]*[\s\S]*?<span>\{project\.ctaLabel\}<\/span>[\s\S]*?project\.images\.length[\s\S]*?<\/button>/, 'Expected the project-defined gallery CTA and count to stay visible.')
assert.match(css, /\.project-editorial-action\s*\{[\s\S]*?min-height:\s*44px/, 'Expected project CTAs to retain a 44px minimum touch target.')

console.log('Projects gallery CTA visibility regression checks passed.')
