import { readFileSync } from 'node:fs'
import assert from 'node:assert/strict'

const source = readFileSync(new URL('../src/components/Projects.jsx', import.meta.url), 'utf8')

const requiredTokens = [
  'w-[92vw] sm:w-[min(72vw,58rem)] lg:w-[min(54vw,72rem)]',
  'sm:h-[clamp(40rem,79vh,52rem)] lg:h-[clamp(42rem,78vh,54rem)]',
  'text-[clamp(2rem,1.3rem+1.45vw,3.4rem)] leading-[0.96]',
  'text-[clamp(0.9rem,0.78rem+0.26vw,1.1rem)] leading-[1.75]',
  'text-[clamp(0.85rem,0.76rem+0.18vw,1rem)] leading-[1.7]',
  'pl-[calc((100vw-92vw)/2)] pr-[calc((100vw-85vw)/2)] sm:pl-[calc((100vw-min(72vw,58rem))/2)] sm:pr-[calc((100vw-50vw)/2)] lg:pl-[calc((100vw-min(54vw,72rem))/2)] lg:pr-[calc((100vw-30vw)/2)]',
]

const removedTokens = [
  'w-[92vw] sm:w-[72vw] lg:w-[54vw]',
  'sm:h-[79vh] lg:h-[78vh]',
  'text-[2rem] leading-[0.96] sm:text-[2.3rem] lg:text-[2.4rem]',
  'text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.75]',
  'px-[10vw] sm:px-[20vw] lg:px-[30vw]',
]

for (const token of requiredTokens) {
  assert(source.includes(token), `Expected Projects card layout token to exist: ${token}`)
}

for (const token of removedTokens) {
  assert(!source.includes(token), `Expected stale Projects card layout token to be removed: ${token}`)
}

console.log('Projects card layout regression checks passed.')
