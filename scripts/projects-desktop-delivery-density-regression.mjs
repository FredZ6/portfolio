import { readFileSync } from 'node:fs'
import assert from 'node:assert/strict'

const source = readFileSync(new URL('../src/components/Projects.jsx', import.meta.url), 'utf8')

assert(source.includes('desktopDelivery:'), 'Expected project data to include desktopDelivery copy.')
assert(source.includes('project.delivery.map'), 'Expected the concise delivery copy to be rendered on every editorial card.')
assert(source.includes('className="project-editorial-card__body"'), 'Expected delivery copy to remain in the readable editorial body.')
assert(source.includes('desktopDelivery: PropTypes.arrayOf(PropTypes.string)'), 'Expected project prop types to include desktopDelivery.')

console.log('Projects desktop delivery density regression checks passed.')
