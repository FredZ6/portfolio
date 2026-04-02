import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const source = readFileSync(new URL('../src/components/Skills.jsx', import.meta.url), 'utf8')

assert(source.includes('const MAX_VISIBLE_CERTIFICATIONS = 6'), 'Expected a visible certifications cap constant.')
assert(source.includes('const CertificationCard = ({ certification }) => {'), 'Expected a dedicated certification card component.')
assert(source.includes('const [showAllCertifications, setShowAllCertifications] = useState(false)'), 'Expected local state for the certifications expand/collapse control.')
assert(source.includes('const visibleCertifications = showAllCertifications ? certifications : certifications.slice(0, MAX_VISIBLE_CERTIFICATIONS)'), 'Expected a sliced visible certifications list.')
assert(source.includes('Verified Certifications'), 'Expected a dedicated Verified Certifications module heading.')
assert(source.includes('certifications.length > MAX_VISIBLE_CERTIFICATIONS'), 'Expected conditional rendering for the show more control.')

console.log('Skills certifications module regression checks passed.')
