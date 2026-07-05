import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const source = readFileSync(new URL('../src/components/Projects.jsx', import.meta.url), 'utf8')
const css = readFileSync(new URL('../src/index.css', import.meta.url), 'utf8')

const projectData = source.match(/const PROJECTS = \[([\s\S]*?)\n\]/)?.[1] ?? ''
const projectIds = projectData.match(/\n\s+id:\s*\d+,/g) ?? []

assert.match(
  source,
  /import \{[\s\S]*collectVisibleFocusableElements,[\s\S]*getFocusWrapTarget,[\s\S]*lockPageScroll,[\s\S]*\} from '\.\.\/utils\/dialogAccessibility'/,
)

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
  /const restorePageScroll = lockPageScroll\(document\)/,
  /restorePageScroll\(\)/,
  /collectVisibleFocusableElements\(dialogRef\.current\)/,
  /getFocusWrapTarget\(event, focusableElements, document\.activeElement\)/,
  /onClick=\{closeLightbox\}/,
  /onClick=\{showPreviousImage\}/,
  /onClick=\{showNextImage\}/,
  /aria-modal="true"/,
  /role="dialog"/,
  /focus\(\)/,
]) {
  assert.match(source, behavior)
}

assert.match(source, /if \(event\.key === 'ArrowLeft'\) \{\s*event\.preventDefault\(\)/)
assert.match(source, /if \(event\.key === 'ArrowRight'\) \{\s*event\.preventDefault\(\)/)
assert.match(source, /loading="lazy"/)
assert.match(source, /decoding="async"/)
assert.doesNotMatch(source, /width=\{1600\}|height=\{1000\}/)
assert.match(css, /\.project-editorial-preview\s*\{[\s\S]*?aspect-ratio:\s*16 \/ 10;/)
assert.match(css, /\.project-lightbox__stage\s*\{[\s\S]*?aspect-ratio:\s*16 \/ 10;/)
assert.match(source, /isLightboxImageLoading/)
assert.match(source, /setIsLightboxImageLoading\(true\)/)
assert.match(source, /if \(nextIndex === activeImageIndexRef\.current\) return/)
assert.match(source, /showImageAtIndex/)
assert.match(source, /onLoad=\{\(\) => setIsLightboxImageLoading\(false\)\}/)
assert.match(source, /aria-busy=\{isLightboxImageLoading\}/)
assert.match(
  source,
  /\{isLightboxImageLoading && \(\s*<div className="project-lightbox__loading" role="status" aria-live="polite">[\s\S]*?Loading preview[\s\S]*?<\/div>\s*\)\}/,
)
assert.match(
  source,
  /\{hasLightboxImageError && \(\s*<div className="project-image-fallback project-image-fallback--lightbox" role="alert" aria-live="assertive">[\s\S]*?\{activeImage\.caption\}[\s\S]*?Preview unavailable[\s\S]*?<\/div>\s*\)\}/,
)
assert.match(source, /hidden=\{hasLightboxImageError\}/)
assert.match(source, /onError=\{\(\) => \{\s*setIsLightboxImageLoading\(false\)\s*setHasLightboxImageError\(true\)/)
assert.doesNotMatch(source, /<div className="project-image-fallback project-image-fallback--lightbox">/)

for (const caption of [
  'Inventory API Swagger / OpenAPI documentation',
  'Grafana Inventory Service overview dashboard',
  'Grafana multi-service throughput and latency dashboard',
  'Jaeger auth-service trace search results',
  'RabbitMQ management overview',
  'Prometheus service target health',
]) {
  assert(projectData.includes(`caption: '${caption}'`), `Expected verified Cloud Order caption: ${caption}`)
}
assert.doesNotMatch(projectData, /desktopDelivery:|accent:|ctaUrl:/)
assert.doesNotMatch(source, /desktopDelivery: PropTypes|accent: PropTypes|ctaUrl: PropTypes/)

for (const retiredClass of [
  'project-gallery-cta',
  'project-card-link-glow',
  'project-shell-card',
  'project-mobile-console',
  'theme-lightbox-controls',
  'glass-panel-strong',
]) {
  assert(!css.includes(retiredClass), `Expected retired Projects CSS to be removed: ${retiredClass}`)
}

assert.match(css, /\.project-editorial-card:nth-child\(1\)/)
assert.match(css, /\.project-editorial-card:hover/)
assert.match(css, /\.project-editorial-card:focus-within/)

console.log('Projects editorial layout and gallery regression checks passed.')
