import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

const root = process.cwd()
const skillsPath = path.join(root, 'src/components/Skills.jsx')
const navbarPath = path.join(root, 'src/components/Navbar.jsx')
const heroPath = path.join(root, 'src/components/Hero.jsx')
const cssPath = path.join(root, 'src/index.css')
const skillsSource = fs.readFileSync(skillsPath, 'utf8')
const navbarSource = fs.readFileSync(navbarPath, 'utf8')
const heroSource = fs.readFileSync(heroPath, 'utf8')
const cssSource = fs.readFileSync(cssPath, 'utf8')
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
check(
  /className=["']hero-next["'][^>]*href=["']#stack["']/.test(heroSource)
    && !heroSource.includes('#skills'),
  'Hero next link must target #stack and must not retain the retired #skills anchor.',
)
check(
  /const\s+tickerRef\s*=\s*useRef\(null\)/.test(skillsSource)
    && /useInView\(tickerRef,\s*\{\s*amount:\s*0\.1\s*\}\)/.test(skillsSource)
    && /const\s+tickerPaused\s*=\s*isTickerPaused\s*\|\|\s*!isTickerInView\s*\|\|\s*shouldReduceMotion/.test(skillsSource),
  'Ticker motion must pause for user preference, off-screen state, and reduced motion.',
)
check(
  /<div(?=[^>]*className=["']technology-ticker["'])(?=[^>]*ref=\{tickerRef\})[^>]*>/.test(skillsSource),
  'tickerRef must observe the technology-ticker element itself.',
)
check(
  /data-paused=\{tickerPaused\s*\?\s*['"]true['"]\s*:\s*['"]false['"]\}/.test(skillsSource)
    && /aria-pressed=\{isTickerPaused\}/.test(skillsSource)
    && /Pause stack motion/.test(skillsSource)
    && /Resume stack motion/.test(skillsSource),
  'Technology ticker must expose an accessible pause/resume control and paused data state.',
)
check(
  /!shouldReduceMotion\s*&&\s*\(\s*<button[\s\S]*?Pause stack motion[\s\S]*?<\/button>\s*\)/.test(skillsSource),
  'Reduced-motion users must not be shown a misleading ticker motion control.',
)
check(
  /\.technology-ticker\[data-paused=['"]true['"]\]\s+\.technology-ticker-track\s*\{[^}]*animation-play-state:\s*paused;/s.test(cssSource),
  'Paused technology ticker state must set animation-play-state: paused.',
)
check(
  /aria-expanded=\{isCertificationsOpen\}/.test(skillsSource)
    && /aria-controls=["']certification-list["']/.test(skillsSource)
    && /id=["']certification-list["']/.test(skillsSource),
  'Certification toggle must expose aria-expanded and control certification-list.',
)

if (failures.length > 0) {
  console.error('Editorial skills regression failed:')
  for (const failure of failures) console.error(`- ${failure}`)
  process.exit(1)
}

console.log('Editorial skills regression passed.')
