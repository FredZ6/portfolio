import { readFileSync } from 'node:fs'
import assert from 'node:assert/strict'

const projectsSource = readFileSync(new URL('../src/components/Projects.jsx', import.meta.url), 'utf8')
const skillsSource = readFileSync(new URL('../src/components/Skills.jsx', import.meta.url), 'utf8')
const cssSource = readFileSync(new URL('../src/index.css', import.meta.url), 'utf8')

assert(projectsSource.includes('className="projects-editorial-section"'), 'Expected Projects to use the editorial section shell.')
assert.match(cssSource, /\.projects-editorial-section\s*\{[\s\S]*?padding:\s*clamp\(6rem, 10vw, 10rem\) 0 clamp\(7rem, 12vw, 12rem\)/)
assert.match(cssSource, /\.project-editorial-stack\s*\{[\s\S]*?padding:\s*1\.75rem 0 2rem/)

assert(skillsSource.includes('className="editorial-stack-section"'), 'Expected Projects to hand off to the editorial Stack section.')
assert(!skillsSource.includes('sm:-mt-20 lg:-mt-24 min-h-screen'), 'Expected the retired overlapping Skills spacing to stay removed.')

console.log('Projects desktop section spacing regression checks passed.')
