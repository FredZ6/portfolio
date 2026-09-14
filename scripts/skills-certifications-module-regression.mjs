import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const source = readFileSync(new URL('../src/components/Skills.jsx', import.meta.url), 'utf8')
const block = source.match(/const certifications = \[([\s\S]*?)\]\s*\n\s*const TechnologySet/)

assert(block, 'Expected certifications data immediately before TechnologySet.')
const credentialCount = (block[1].match(/issuer:\s*['"]/g) || []).length
assert.equal(credentialCount, 8, `Expected all 8 verified credentials, found ${credentialCount}.`)

for (const credential of ['Developer Associate', 'Cloud Practitioner', 'Model Context Protocol: Advanced Topics']) {
  assert(block[1].includes(`title: '${credential}'`), `Expected preserved credential: ${credential}.`)
}

assert(source.includes('const [isCertificationsOpen, setIsCertificationsOpen] = useState(false)'), 'Expected certification disclosure state.')
assert(/aria-expanded=\{isCertificationsOpen\}/.test(source), 'Expected aria-expanded on certification toggle.')
assert(/aria-controls=["']certification-list["']/.test(source), 'Expected certification toggle to reference its list.')
assert(/id=["']certification-list["']/.test(source), 'Expected a controlled certification-list region.')
assert(/isCertificationsOpen\s*\?\s*certifications\s*:\s*certifications\.slice\(0,\s*visibleLimit\)/.test(source), 'Expected a capped, expandable certification list.')

console.log('Skills certifications module regression checks passed.')
