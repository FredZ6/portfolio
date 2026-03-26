import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const source = readFileSync(new URL('../src/components/Projects.jsx', import.meta.url), 'utf8')

const jobAgentBlockMatch = source.match(/id:\s*3,[\s\S]*?accent:\s*'from-emerald-300 to-cyan-500'/)

assert(jobAgentBlockMatch, 'Expected to find the JobAgent project block.')

const jobAgentBlock = jobAgentBlockMatch[0]
const expectedImages = [
  '/portfolio/projects/job-agent/application-review-automation-sessions-16x9.png',
  '/portfolio/projects/job-agent/job-detail-workflow-runs-16x9.png',
  '/portfolio/projects/job-agent/dashboard-overview-16x9.png',
  '/portfolio/projects/job-agent/resume-review-pdf-preview-16x9.png',
]

assert(jobAgentBlock.includes("ctaLabel: 'View Gallery'"), 'Expected JobAgent CTA label to be View Gallery.')
assert(!jobAgentBlock.includes('ctaUrl:'), 'Expected JobAgent gallery CTA to avoid a direct external URL.')

for (const imagePath of expectedImages) {
  assert(jobAgentBlock.includes(imagePath), `Expected JobAgent gallery to include ${imagePath}.`)
}

const imagePathMatches = jobAgentBlock.match(/\/portfolio\/projects\/job-agent\/[^']+\.png/g) ?? []
const uniqueImagePaths = [...new Set(imagePathMatches)]

assert.deepEqual(uniqueImagePaths, expectedImages, 'Expected exactly the four cropped JobAgent gallery images in order.')

console.log('JobAgent gallery regression checks passed.')
