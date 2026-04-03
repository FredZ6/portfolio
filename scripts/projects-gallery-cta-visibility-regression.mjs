import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const source = readFileSync(new URL('../src/components/Projects.jsx', import.meta.url), 'utf8')

assert(source.includes('Tap to open'), 'Expected the gallery CTA to include a tap-to-open helper label.')
assert(source.includes('{project.images.length} {galleryScreenLabel}'), 'Expected the gallery count to be rendered inside the CTA.')
assert(!source.includes(">Gallery</p>"), 'Expected the old standalone Gallery metadata label to be removed.')
assert(source.includes('min-h-[clamp(6rem,5.4rem+1.2vw,7rem)]'), 'Expected the footer to reserve a minimum height for stable CTA breathing room.')

console.log('Projects gallery CTA visibility regression checks passed.')
