import { readFileSync } from 'node:fs'
import { strict as assert } from 'node:assert'

const projects = readFileSync(new URL('../src/components/Projects.jsx', import.meta.url), 'utf8')

assert.match(
  projects,
  /<section ref=\{targetRef\} className="relative mt-0 bg-transparent pt-\[calc\(env\(safe-area-inset-top\)\+2rem\)\] pb-\[calc\(env\(safe-area-inset-bottom\)\+10rem\)\] sm:-mt-\[8vh\] sm:h-\[138vh\] sm:pt-0 sm:pb-0 lg:-mt-\[10vh\] lg:h-\[134vh\]"/
)
assert.match(
  projects,
  /<div className="relative w-full overflow-visible sm:sticky sm:top-0 sm:flex sm:h-screen sm:items-center sm:overflow-hidden">/
)
assert.match(
  projects,
  /className="relative z-10 mx-auto mb-5 w-\[92vw\] max-w-sm px-1 pointer-events-none sm:absolute sm:top-\[29%\] sm:left-16 sm:mb-0 sm:w-full sm:max-w-sm sm:px-0 md:top-\[29%\] md:left-16 lg:top-\[30%\] lg:left-24"/
)
assert.match(
  projects,
  /className="relative w-full sm:absolute sm:inset-0 sm:h-full sm:pt-20 lg:pt-28"/
)
assert.match(
  projects,
  /className="relative z-20 w-full overflow-x-auto overflow-y-visible custom-scrollbar snap-x snap-mandatory sm:h-full sm:overflow-y-hidden"/
)
assert.match(
  projects,
  /className="flex w-max min-w-full items-start gap-8 sm:h-full sm:items-center sm:gap-16 lg:gap-24 pl-\[calc\(\(100vw-92vw\)\/2\)\]/
)
assert.match(
  projects,
  /<div key=\{project\.id\} data-scroll-card className="snap-center shrink-0 flex items-start sm:h-full sm:items-center">/
)
assert.match(
  projects,
  /className="hidden sm:flex absolute bottom-8 right-8 md:bottom-12 md:right-12 z-50 gap-4"/
)

console.log('Projects mobile layout uses flow mode on phones and preserves sticky behavior from sm and up.')
