import { readFileSync } from 'node:fs'
import assert from 'node:assert/strict'

const source = readFileSync(new URL('../src/components/Projects.jsx', import.meta.url), 'utf8')

assert(source.includes('<motion.article'), 'Expected each project to use a semantic editorial article.')
assert(!source.includes('tabIndex={0}'), 'Expected the non-interactive card shell to stay out of the tab order.')
assert(source.includes('className="project-editorial-preview"'), 'Expected the project screenshot itself to remain an explicit gallery button.')
assert.match(source, /<button[^>]*[\s\S]*?\{project\.ctaLabel\}[\s\S]*?<\/button>/, 'Expected a separate keyboard-accessible gallery CTA.')
assert(!source.includes('handleDesktopCardClick'), 'Expected the retired click-to-center card behavior to be removed.')

console.log('Projects editorial card interaction regression checks passed.')
