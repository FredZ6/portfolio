import { readFileSync } from 'node:fs'
import { strict as assert } from 'node:assert'

const projects = readFileSync(new URL('../src/components/Projects.jsx', import.meta.url), 'utf8')

assert.match(
  projects,
  /const \[activeMobileProjectIndex, setActiveMobileProjectIndex\] = useState\(0\)/
)
assert.match(
  projects,
  /const activeMobileProject = PROJECTS\[activeMobileProjectIndex\]/
)
assert.match(
  projects,
  /Use buttons to explore/
)
assert.match(
  projects,
  /className="w-full sm:hidden"/
)
assert.match(
  projects,
  /className="mb-4 flex items-center justify-between gap-3 rounded-full border border-white\/\[0\.08\] bg-white\/\[0\.04\] px-4 py-3 shadow-\[0_14px_30px_rgba\(0,0,0,0\.18\)\]"/
)
assert.match(
  projects,
  /aria-label="Show previous project"/
)
assert.match(
  projects,
  /aria-label="Show next project"/
)
assert.match(
  projects,
  /className="hidden sm:block"/
)

console.log('Projects mobile interaction uses button-driven single-card navigation on phones and preserves the desktop carousel from sm and up.')
