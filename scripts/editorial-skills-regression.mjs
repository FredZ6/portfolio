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
    && /const\s+tickerPaused\s*=\s*!isTickerInView\s*\|\|\s*shouldReduceMotion/.test(skillsSource),
  'Ticker motion must pause off-screen and for reduced-motion users.',
)
check(
  /<div(?=[^>]*className=["']technology-ticker["'])(?=[^>]*ref=\{tickerRef\})[^>]*>/.test(skillsSource),
  'tickerRef must observe the technology-ticker element itself.',
)
check(
  /data-paused=\{tickerPaused\s*\?\s*['"]true['"]\s*:\s*['"]false['"]\}/.test(skillsSource)
    && !/isTickerPaused|Pause stack motion|Resume stack motion/.test(skillsSource),
  'Technology ticker must retain automatic pause behavior without the removed manual pause control.',
)
check(
  /\.technology-ticker-heading button\s*\{[^}]*display:\s*inline-flex;[^}]*align-items:\s*center;[^}]*gap:\s*0\.4rem;[^}]*white-space:\s*nowrap;/s.test(cssSource)
    && /\.technology-ticker-heading button svg\s*\{[^}]*margin:\s*0;[^}]*flex-shrink:\s*0;/s.test(cssSource),
  'Technology index button label and icon must stay centered and aligned on one line.',
)
check(
  /const\s+\[isTechnologyIndexOpen,\s*setIsTechnologyIndexOpen\]\s*=\s*useState\(false\)/.test(skillsSource)
    && /aria-expanded=\{isTechnologyIndexOpen\}/.test(skillsSource)
    && /aria-controls=["']technology-index-panel["']/.test(skillsSource)
    && /id=["']technology-index-panel["']/.test(skillsSource),
  'Technology index must expose an accessible expand/collapse control and controlled panel.',
)
check(
  /Expand stack/.test(skillsSource) && /Collapse stack/.test(skillsSource),
  'Technology index control must clearly label both collapsed and expanded states.',
)
const technologyGroupsBlock = skillsSource.match(
  /const\s+technologyGroups\s*=\s*\[([\s\S]*?)\]\s*\n\s*const\s+certifications\b/,
)
check(Boolean(technologyGroupsBlock), 'Skills must declare structured technology groups.')
if (technologyGroupsBlock) {
  const technologyCount = (technologyGroupsBlock[1].match(/name:\s*['"][^'"]+['"]/g) || []).length
  const technologyIcons = [...technologyGroupsBlock[1].matchAll(/icon:\s*([A-Za-z][A-Za-z0-9]*)/g)]
    .map((match) => match[1])
  const colorCount = (technologyGroupsBlock[1].match(/color:\s*['"]#[0-9A-Fa-f]{6}['"]/g) || []).length
  const iconStyleCount = (technologyGroupsBlock[1].match(/iconStyle:\s*['"](?:detail|solid|outline)['"]/g) || []).length
  const reactIconImports = [...skillsSource.matchAll(
    /import\s*\{([^}]*)\}\s*from\s*['"]react-icons\/[^'"]+['"]/g,
  )].flatMap((match) => match[1].split(',').map((name) => name.trim()).filter(Boolean))
  check(technologyCount === 22, `Expected 22 named technologies, found ${technologyCount}.`)
  check(
    /label:\s*['"]Frontend['"][\s\S]*?name:\s*['"]React['"][\s\S]*?name:\s*['"]Next\.js['"][\s\S]*?name:\s*['"]TypeScript['"][\s\S]*?name:\s*['"]JavaScript['"][\s\S]*?name:\s*['"]Vite['"]/.test(technologyGroupsBlock[1]),
    'Technology groups must restore the approved Frontend section and its five tools.',
  )
  check(technologyIcons.length === technologyCount, 'Every technology must declare a corresponding icon.')
  check(colorCount === technologyCount, 'Every technology must declare a six-digit theme color.')
  check(iconStyleCount === technologyCount, 'Every technology must declare a visual icon style.')
  check(
    technologyIcons.every((icon) => reactIconImports.includes(icon)),
    'Every technology icon must be imported from react-icons.',
  )
}
check(
  /const\s+TechnologyItem\b/.test(skillsSource)
    && /className=["']technology-icon["']/.test(skillsSource)
    && /data-icon-style=\{technology\.iconStyle\}/.test(skillsSource)
    && /['"]--technology-color['"]:\s*technology\.color/.test(skillsSource)
    && /<TechnologyItem[\s\S]*?technology=\{technology\}/.test(skillsSource),
  'Ticker and expanded index must reuse a theme-color-driven TechnologyItem icon wrapper.',
)
check(
  /\.technology-ticker\[data-paused=['"]true['"]\]\s+\.technology-ticker-track\s*\{[^}]*animation-play-state:\s*paused;/s.test(cssSource),
  'Paused technology ticker state must set animation-play-state: paused.',
)
check(
  /\.technology-icon\s*\{[^}]*background:\s*rgba\([^}]*backdrop-filter:\s*blur\(/s.test(cssSource)
    && /\.technology-icon\s+svg\s*\{[^}]*color:\s*var\(--technology-color\)/s.test(cssSource),
  'Technology icons must use their configured theme color on a shared frosted plate.',
)
check(
  !/\.technology-icon\s+svg\s*\{[^}]*stroke-width:/s.test(cssSource)
    && /\.technology-icon\[data-icon-style=['"]solid['"]\]\s+svg\s*\{[^}]*width:\s*0\.82rem/s.test(cssSource)
    && /\.technology-icon\[data-icon-style=['"]detail['"]\]\s+svg\s*\{[^}]*width:\s*1\.08rem/s.test(cssSource)
    && /\.technology-icon\[data-icon-style=['"]outline['"]\]\s+svg\s*\{[^}]*stroke-width:\s*1\.55/s.test(cssSource),
  'Technology icons must normalize solid, detailed, and outline artwork separately.',
)
check(
  /\.technology-index-grid\s*\{[^}]*grid-template-columns:\s*repeat\(5,\s*minmax\(0,\s*1fr\)\)/s.test(cssSource)
    && /@media\s*\(max-width:\s*980px\)[\s\S]*?\.technology-index-grid\s*\{[^}]*grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\)/s.test(cssSource)
    && /@media\s*\(max-width:\s*700px\)[\s\S]*?\.technology-index-grid\s*\{[^}]*grid-template-columns:\s*1fr/s.test(cssSource),
  'Expanded technology index must use responsive 5/2/1-column layouts.',
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
