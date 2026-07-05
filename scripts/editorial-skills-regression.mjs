import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

const root = process.cwd()
const skillsPath = path.join(root, 'src/components/Skills.jsx')
const navbarPath = path.join(root, 'src/components/Navbar.jsx')
const skillsSource = fs.readFileSync(skillsPath, 'utf8')
const navbarSource = fs.readFileSync(navbarPath, 'utf8')
const failures = []

const check = (condition, message) => {
  if (!condition) failures.push(message)
}

check(
  /<section\b[^>]*\bid=["']stack["'][^>]*>/.test(skillsSource),
  'Skills must render a <section id="stack"> anchor.',
)

const principlesBlock = skillsSource.match(
  /const\s+principles\s*=\s*\[([\s\S]*?)\]\s*\n\s*const\s+technologyGroups\b/,
)

check(
  Boolean(principlesBlock),
  'Skills must declare a principles array immediately before technologyGroups.',
)

if (principlesBlock) {
  const principleCount = (principlesBlock[1].match(/\{\s*\n\s*id:\s*['"][^'"]+['"]/g) || []).length
  check(
    principleCount === 3,
    `Expected exactly 3 structured principle entries, found ${principleCount}.`,
  )

  for (const title of ['Reliable by default', 'Cloud with intent', 'AI, with guardrails']) {
    const escapedTitle = title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    check(
      new RegExp(`title:\\s*['"]${escapedTitle}['"]`).test(principlesBlock[1]),
      `Missing required principle title: ${title}.`,
    )
  }
}

check(
  /className=["'][^"']*principle-card[^"']*["']/.test(skillsSource),
  'Each engineering principle must use the principle-card component class.',
)
check(
  /className=["'][^"']*technology-ticker[^"']*["']/.test(skillsSource),
  'Skills must include the editorial technology-ticker region.',
)
check(
  /const\s+shouldReduceMotion\s*=\s*useReducedMotion\(\)/.test(skillsSource)
    && /initial=\{shouldReduceMotion\s*\?\s*false\s*:/.test(skillsSource)
    && /whileInView=\{shouldReduceMotion\s*\?\s*undefined\s*:/.test(skillsSource),
  'useReducedMotion must directly disable the principle in-view motion props.',
)
check(
  /\{\s*label:\s*['"]Stack['"],\s*href:\s*['"]#stack['"]\s*\}/.test(navbarSource),
  'Navbar Stack link must target #stack.',
)

if (failures.length > 0) {
  console.error('Editorial skills regression failed:')
  for (const failure of failures) console.error(`- ${failure}`)
  process.exit(1)
}

console.log('Editorial skills regression passed.')
