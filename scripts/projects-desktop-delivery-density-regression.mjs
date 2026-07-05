import { readFileSync } from 'node:fs'
import assert from 'node:assert/strict'

const source = readFileSync(new URL('../src/components/Projects.jsx', import.meta.url), 'utf8')

assert(source.includes('project.delivery.map'), 'Expected the concise delivery copy to be rendered on every editorial card.')
assert(source.includes('project.impact'), 'Expected each project impact line to be rendered on its editorial card.')
assert(source.includes('className="project-editorial-card__body"'), 'Expected delivery copy to remain in the readable editorial body.')
assert(!source.includes('desktopDelivery:'), 'Expected the unrendered desktopDelivery data to be removed.')
assert(!source.includes('desktopDelivery: PropTypes'), 'Expected dead desktopDelivery prop types to be removed.')

console.log('Projects rendered delivery and impact regression checks passed.')
