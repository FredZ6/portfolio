import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const source = readFileSync(new URL('../src/components/Projects.jsx', import.meta.url), 'utf8')

const jobAgentBlockMatch = source.match(/id:\s*3,[\s\S]*?accent:\s*'from-emerald-300 to-cyan-500'/)

assert(jobAgentBlockMatch, 'Expected to find the JobAgent project block.')

const jobAgentBlock = jobAgentBlockMatch[0]
const expectedImages = [
  '/portfolio/projects/job-agent/rolecraft-overview-light.png',
  '/portfolio/projects/job-agent/rolecraft-dashboard-light.png',
  '/portfolio/projects/job-agent/rolecraft-workflow-runs-light.png',
  '/portfolio/projects/job-agent/rolecraft-settings-light.png',
  '/portfolio/projects/job-agent/rolecraft-profile-light.png',
  '/portfolio/projects/job-agent/rolecraft-jobs-light.png',
  '/portfolio/projects/job-agent/rolecraft-overview-dark.png',
]

assert(jobAgentBlock.includes("ctaLabel: 'View Gallery'"), 'Expected JobAgent CTA label to be View Gallery.')
assert(!jobAgentBlock.includes('ctaUrl:'), 'Expected JobAgent gallery CTA to avoid a direct external URL.')

for (const imagePath of expectedImages) {
  assert(jobAgentBlock.includes(imagePath), `Expected JobAgent gallery to include ${imagePath}.`)
}

const imagePathMatches = jobAgentBlock.match(/\/portfolio\/projects\/job-agent\/[^']+\.png/g) ?? []
const uniqueImagePaths = [...new Set(imagePathMatches)]

assert.deepEqual(uniqueImagePaths, expectedImages, 'Expected the current seven-screen Rolecraft gallery in order.')

console.log('JobAgent gallery regression checks passed.')
