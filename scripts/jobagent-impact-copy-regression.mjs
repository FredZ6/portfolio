import { readFileSync } from 'node:fs'
import assert from 'node:assert/strict'

const source = readFileSync(new URL('../src/components/Projects.jsx', import.meta.url), 'utf8')

assert(
  source.includes("impact: 'URL IMPORT | LLM-POWERED ANALYSIS | PDF RESUMES | REVIEWABLE PREFILL'"),
  'Expected JobAgent impact line to preserve LLM-POWERED ANALYSIS.'
)

console.log('JobAgent impact copy regression checks passed.')
