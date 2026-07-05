import { readFileSync } from 'node:fs'
import assert from 'node:assert/strict'

const css = readFileSync(new URL('../src/index.css', import.meta.url), 'utf8')

assert.match(css, /\.projects-editorial-section\s*\{[\s\S]*?radial-gradient\(circle at 13% 20%[\s\S]*?linear-gradient\(180deg, #eaf4ff/)
assert.match(css, /\.projects-editorial-grid\s*\{[\s\S]*?mask-image:/)
assert.match(css, /\.project-editorial-card\s*\{[\s\S]*?box-shadow:\s*0 2rem 4\.5rem -2\.5rem/)
assert.match(css, /\.project-editorial-card:hover,[\s\S]*?box-shadow:\s*0 2\.7rem 6rem -2\.5rem/)

console.log('Projects editorial shadow and background blend regression checks passed.')
