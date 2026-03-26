import { readFileSync } from 'node:fs'
import assert from 'node:assert/strict'

const projectsSource = readFileSync(new URL('../src/components/Projects.jsx', import.meta.url), 'utf8')
const skillsSource = readFileSync(new URL('../src/components/Skills.jsx', import.meta.url), 'utf8')

const requiredProjectTokens = [
  'sm:-mt-[8vh] sm:h-[138vh] sm:pt-0 sm:pb-0 lg:-mt-[10vh] lg:h-[134vh]',
  'className="hidden sm:block sm:absolute sm:inset-0 sm:h-full sm:pt-20 lg:pt-28"',
]

const removedProjectTokens = [
  'sm:-mt-[18vh] lg:-mt-[20vh] h-[152vh] sm:h-[148vh] lg:h-[144vh]',
  'className="absolute inset-0 w-full h-full pt-10 sm:pt-16 lg:pt-24"',
]

const requiredSkillsToken = 'sm:-mt-[16vh] lg:-mt-[20vh] min-h-screen'
const removedSkillsToken = 'sm:-mt-20 lg:-mt-24 min-h-screen'

for (const token of requiredProjectTokens) {
  assert(projectsSource.includes(token), `Expected Projects desktop spacing token to exist: ${token}`)
}

for (const token of removedProjectTokens) {
  assert(!projectsSource.includes(token), `Expected stale Projects desktop spacing token to be removed: ${token}`)
}

assert(skillsSource.includes(requiredSkillsToken), `Expected Skills desktop spacing token to exist: ${requiredSkillsToken}`)
assert(!skillsSource.includes(removedSkillsToken), `Expected stale Skills desktop spacing token to be removed: ${removedSkillsToken}`)

console.log('Projects desktop section spacing regression checks passed.')
