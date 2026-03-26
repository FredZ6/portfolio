import { existsSync, readFileSync } from 'node:fs'
import assert from 'node:assert/strict'

const source = readFileSync(new URL('../src/components/Projects.jsx', import.meta.url), 'utf8')
const iconPath = new URL('../public/devin.avif', import.meta.url)

assert(source.includes("const buildDeepWikiUrl = (githubUrl) => {"), 'Expected DeepWiki URL builder helper to exist.')
assert(source.includes("replace('https://github.com/', 'https://deepwiki.com/')"), 'Expected GitHub URLs to be rewritten to DeepWiki URLs.')
assert(source.includes("src=\"/portfolio/devin.avif\""), 'Expected the Devin icon asset to be used in the project header button.')
assert(source.includes('aria-label="Open repo on DeepWiki"'), 'Expected a DeepWiki header button aria label.')
assert(existsSync(iconPath), 'Expected the Devin icon asset to exist at public/devin.avif.')

console.log('Projects DeepWiki button regression checks passed.')
