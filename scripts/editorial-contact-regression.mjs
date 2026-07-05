import { readFileSync } from 'node:fs'
import { strict as assert } from 'node:assert'

const about = readFileSync(new URL('../src/components/About.jsx', import.meta.url), 'utf8')
const footer = readFileSync(new URL('../src/components/Footer.jsx', import.meta.url), 'utf8')
const app = readFileSync(new URL('../src/App.jsx', import.meta.url), 'utf8')
const css = readFileSync(new URL('../src/index.css', import.meta.url), 'utf8')

assert.match(about, /<section[^>]*id=["']about["']/, 'About must remain the #about section.')
assert.match(about, /WHY FRED/i, 'About must lead with the Why Fred editorial story.')
assert.match(about, /Software Engineer &amp; Architect|Software Engineer & Architect/, 'About must state the grounded professional identity.')
assert.match(about, /AI-assisted, spec-driven/i, 'About must explain the established delivery workflow.')
assert.match(about, /Discover[\s\S]*Design[\s\S]*Deliver/, 'About must explain the three-step working method.')
assert.match(about, /useScroll\(/, 'The bird character must respond to scroll progress.')
assert.match(about, /useTransform\(/, 'The bird character must derive purposeful scroll transforms.')
assert.match(about, /useReducedMotion\(/, 'About motion must honor reduced-motion preferences.')
assert.match(about, /portfolio\/avatar\.png/, 'About must use the existing bird identity asset.')
assert.match(about, /aria-hidden=["']true["']/, 'The playful bird must remain decorative to assistive technology.')

const proofBlock = about.match(/const proofPoints = \[([\s\S]*?)\]\n/)?.[1] ?? ''
assert(proofBlock, 'About must define explicit, auditable proof points.')
assert.equal((proofBlock.match(/value:/g) ?? []).length, 3, 'About must contain exactly three proof points.')
assert.match(proofBlock, /value:\s*['"]03['"][\s\S]*Featured systems/i)
assert.match(proofBlock, /value:\s*['"]08['"][\s\S]*Verified credentials/i)
assert.match(proofBlock, /value:\s*['"]04['"][\s\S]*Delivery disciplines/i)

assert.match(about, /Status:\s*Online/, 'The visible online status must remain available.')
assert.match(about, /Open to Software Engineer roles/i, 'The existing availability statement must remain visible.')
assert.match(about, /emailjs\.send\(/, 'The working EmailJS contact path must not be removed.')
for (const field of ['name', 'email', 'subject', 'message']) {
  assert.match(about, new RegExp(`name=["']${field}["']`), `Contact form must retain the ${field} field.`)
}
assert.match(about, /aria-live=["']polite["']/, 'Form submission status must be announced.')
assert.match(about, /disabled=\{isSubmitting\}/, 'The submit button must prevent duplicate submissions.')
assert.match(about, /<h2[^>]*>[\s\S]*WHY FRED/i, 'About must use a semantic section heading.')
assert.match(about, /<h3/g, 'Working-method content must have semantic subheadings.')

assert.match(footer, /<footer[^>]*id=["']contact["']/, 'Footer must own the #contact destination.')
assert.match(footer, /LET(?:'|&apos;|’)?S BUILD/i, 'Footer must close with the large build invitation.')
assert.match(footer, /mailto:fredzhang026@gmail\.com/, 'Footer must expose Fred’s direct email address.')
assert.match(footer, /github\.com\/FredZ6/i, 'Footer must link to Fred’s GitHub profile.')
assert.match(footer, /linkedin\.com/i, 'Footer must link to Fred’s LinkedIn profile.')
assert.match(footer, /onClick=\{onOpenResume\}/, 'Footer Resume control must open the resume dialog.')
assert.match(footer, /Footer\.propTypes[\s\S]*onOpenResume:\s*PropTypes\.func\.isRequired/, 'Footer must validate its resume callback.')
assert.match(footer, /target=["']_blank["'][\s\S]*rel=["']noopener noreferrer["']/, 'External links must use safe rel attributes.')
assert.match(app, /<Footer\s+onOpenResume=\{openResume\}\s*\/>/, 'App must wire its resume dialog callback into Footer.')

for (const selector of ['.why-fred-section', '.why-fred-bird', '.proof-points-grid', '.contact-footer', '.contact-footer-title']) {
  assert(css.includes(selector), `Missing editorial contact styling for ${selector}.`)
}
assert.match(css, /@media\s*\(max-width:\s*420px\)/, 'Contact layout must include a narrow-phone breakpoint.')
assert.match(css, /@media\s*\(prefers-reduced-motion:\s*reduce\)/, 'CSS motion must honor reduced-motion preferences.')

console.log('Editorial Why Fred and contact footer regression checks passed.')
