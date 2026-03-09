import { readFileSync } from 'node:fs'
import assert from 'node:assert/strict'

const source = readFileSync(new URL('../src/components/Projects.jsx', import.meta.url), 'utf8')

const requiredTokens = [
  'pointer-events-none absolute inset-x-0 bottom-[6vh] h-[18vh] bg-[radial-gradient(ellipse_at_center,rgba(12,40,78,0.2)_0%,rgba(8,17,31,0.14)_42%,rgba(8,17,31,0)_78%)] blur-3xl',
  'pointer-events-none absolute inset-x-[8%] bottom-[-4%] h-[16%] rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(9,31,64,0.5)_0%,rgba(8,17,31,0.22)_55%,rgba(8,17,31,0)_100%)] blur-2xl opacity-85',
  'shadow-[0_24px_48px_-20px_rgba(0,0,0,0.72),0_38px_90px_-34px_rgba(2,8,23,0.52),inset_0_1px_5px_rgba(255,255,255,0.16),0_0_20px_rgba(56,189,248,0.08)]',
]

const removedTokens = [
  'shadow-[0_30px_60px_rgba(0,0,0,0.8),inset_0_1px_5px_rgba(255,255,255,0.16),0_0_20px_rgba(56,189,248,0.08)]',
]

for (const token of requiredTokens) {
  assert(source.includes(token), `Expected Projects shadow blend token to exist: ${token}`)
}

for (const token of removedTokens) {
  assert(!source.includes(token), `Expected stale Projects shadow token to be removed: ${token}`)
}

console.log('Projects shadow blend regression checks passed.')
