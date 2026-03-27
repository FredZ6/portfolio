import { readFileSync } from 'node:fs'
import assert from 'node:assert/strict'

const skillsSource = readFileSync(new URL('../src/components/Skills.jsx', import.meta.url), 'utf8')
const cssSource = readFileSync(new URL('../src/index.css', import.meta.url), 'utf8')

const requiredSkillsTokens = [
  'const capabilityClusters = [',
  'const signalPillars = [',
  'className="signal-map-shell',
  'className="signal-cluster-card',
  'className="signal-node-chip',
]

const removedSkillsTokens = [
  'const skillsData = [',
  'const OrbitRing = ({ radius, duration, reverse, skills, color }) => {',
  'skill-orbit-ring',
  'skill-orbit-counter',
]

const requiredCssTokens = [
  '.signal-map-shell {',
  '.signal-cluster-card {',
  '.signal-node-chip {',
]

for (const token of requiredSkillsTokens) {
  assert(skillsSource.includes(token), `Expected Skills signal-map token to exist: ${token}`)
}

for (const token of removedSkillsTokens) {
  assert(!skillsSource.includes(token), `Expected stale orbit token to be removed from Skills.jsx: ${token}`)
}

for (const token of requiredCssTokens) {
  assert(cssSource.includes(token), `Expected Skills signal-map CSS token to exist: ${token}`)
}

console.log('Skills signal map regression checks passed.')
