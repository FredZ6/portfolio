import { readFileSync } from 'node:fs'
import assert from 'node:assert/strict'

const skillsSource = readFileSync(new URL('../src/components/Skills.jsx', import.meta.url), 'utf8')
const cssSource = readFileSync(new URL('../src/index.css', import.meta.url), 'utf8')

const requiredSkillsTokens = [
  'const principles = [',
  'const technologyGroups = [',
  'className="principle-card"',
  'className="technology-ticker"',
  '<TechnologySet hidden />',
  'aria-hidden={hidden || undefined}',
  'aria-pressed={isTickerPaused}',
]

const removedSkillsTokens = [
  'tabIndex={0}',
  'signal-map-shell',
  'signal-cluster-card',
  'signal-node-chip',
]

const requiredCssTokens = [
  '.principle-card {',
  '.technology-ticker-track {',
  "animation-play-state: paused;",
]

const removedCssTokens = [
  '.signal-map-shell',
  '.signal-core-panel',
  '.signal-core-pulse',
  '.signal-cluster-card',
  '.signal-node-chip',
  '@keyframes signalCorePulse',
  '@keyframes signalGridDrift',
  '.theme-tool-chip',
  '.theme-tool-icon',
  '.theme-chip-icon',
  '.theme-certification-card',
  '.theme-certification-media',
  '.theme-certification-fallback',
  '.theme-credentials-button',
  '.theme-card-arrow',
]

for (const token of requiredSkillsTokens) {
  assert(skillsSource.includes(token), `Expected Skills signal-map token to exist: ${token}`)
}

for (const token of removedSkillsTokens) {
  assert(!skillsSource.includes(token), `Expected stale orbit token to be removed from Skills.jsx: ${token}`)
}

for (const token of requiredCssTokens) {
  assert(cssSource.includes(token), `Expected editorial Skills CSS token to exist: ${token}`)
}

for (const token of removedCssTokens) {
  assert(!cssSource.includes(token), `Expected stale signal-map CSS to be removed: ${token}`)
}

console.log('Skills principles and ticker regression checks passed.')
