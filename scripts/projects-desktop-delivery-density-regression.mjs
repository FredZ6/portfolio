import { readFileSync } from 'node:fs'
import assert from 'node:assert/strict'

const source = readFileSync(new URL('../src/components/Projects.jsx', import.meta.url), 'utf8')

assert(source.includes('desktopDelivery:'), 'Expected project data to include desktopDelivery copy.')
assert(source.includes('className="2xl:hidden"'), 'Expected default delivery copy to hide on very large desktops.')
assert(source.includes('className="hidden 2xl:inline"'), 'Expected richer desktop delivery copy to appear on very large desktops.')
assert(source.includes('desktopDelivery: PropTypes.arrayOf(PropTypes.string)'), 'Expected project prop types to include desktopDelivery.')

console.log('Projects desktop delivery density regression checks passed.')
