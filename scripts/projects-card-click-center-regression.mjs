import { readFileSync } from 'node:fs'
import assert from 'node:assert/strict'

const source = readFileSync(new URL('../src/components/Projects.jsx', import.meta.url), 'utf8')

assert(source.includes('const centerCardAtIndex = (targetIndex) => {'), 'Expected a target-index centering helper for project cards.')
assert(source.includes('const handleDesktopCardClick = (event, targetIndex) => {'), 'Expected a desktop card click handler.')
assert(source.includes("closest('a, button')"), 'Expected desktop card clicks to ignore nested interactive controls.')
assert(source.includes('onClick={(event) => handleDesktopCardClick(event, index)}'), 'Expected desktop project card wrappers to center on click.')
assert(source.includes('Swipe, click cards, or use buttons to explore'), 'Expected desktop helper copy to mention clickable cards.')

console.log('Projects desktop click-to-center regression checks passed.')
