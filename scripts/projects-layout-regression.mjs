import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const source = readFileSync(new URL('../src/components/Projects.jsx', import.meta.url), 'utf8')
const css = readFileSync(new URL('../src/index.css', import.meta.url), 'utf8')

const projectData = source.match(/const PROJECTS = \[([\s\S]*?)\n\]/)?.[1] ?? ''
const projectIds = projectData.match(/\n\s+id:\s*\d+,/g) ?? []

assert.match(source, /<section\b[^>]*\bid="projects"/)
assert.match(source, /Choose Your/i)
assert.match(source, />\s*Build\s*</i)
assert.match(source, /Selected systems \/ Production-minded builds/)
assert.doesNotMatch(source, /Selected systems \/ 2024—2026/)
assert.equal(projectIds.length, 3, `Expected exactly 3 project data entries, found ${projectIds.length}.`)
assert.match(source, /PROJECTS\.map\(\(project, index\)/)
assert.match(source, /<motion\.article\b[\s\S]*?className="project-editorial-card/)
assert.match(source, /aria-label=\{`Open gallery for \$\{project\.title\}`\}/)
assert.match(source, /<button[\s\S]*?\{project\.ctaLabel\}[\s\S]*?<\/button>/)
assert.match(source, /href=\{project\.githubUrl\}/)
assert.match(source, /href=\{deepWikiUrl\}/)
assert.match(source, /project\.techStack\.map/)
assert.match(source, /project\.impact/)
assert.match(source, /project\.delivery\.map/)
assert.match(source, /\{project\.ctaLabel\}/)
assert.match(source, /useReducedMotion\(\)/)
assert.match(source, /whileInView=/)
assert.match(source, /aria-hidden="true"/)

for (const behavior of [
  /event\.key === 'Escape'/,
  /document\.body\.style\.overflow = 'hidden'/,
  /document\.body\.style\.overflow = previousOverflow/,
  /onClick=\{closeLightbox\}/,
  /setActiveImageIndex\(prev => prev - 1\)/,
  /setActiveImageIndex\(prev => prev \+ 1\)/,
  /aria-modal="true"/,
  /role="dialog"/,
  /focus\(\)/,
]) {
  assert.match(source, behavior)
}

assert.match(css, /\.project-editorial-card:nth-child\(1\)/)
assert.match(css, /\.project-editorial-card:hover/)
assert.match(css, /\.project-editorial-card:focus-within/)

console.log('Projects editorial layout and gallery regression checks passed.')
