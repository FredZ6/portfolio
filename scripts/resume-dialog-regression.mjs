import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const [dialog, app, navbar, hero] = await Promise.all([
  readFile('src/components/ResumeDialog.jsx', 'utf8'),
  readFile('src/App.jsx', 'utf8'),
  readFile('src/components/Navbar.jsx', 'utf8'),
  readFile('src/components/Hero.jsx', 'utf8'),
])

assert.match(dialog, /role=["']dialog["']/)
assert.match(dialog, /aria-modal=["']true["']/)
assert.match(dialog, /aria-labelledby/)
assert.match(dialog, /Escape/)
assert.match(dialog, /lockPageScroll\(document\)/)
assert.match(dialog, /FredCV-2025%20codex\.pdf/)
assert.match(dialog, /onClose/)
assert.match(dialog, /<object/)
assert.match(dialog, /document\.activeElement/)
assert.match(dialog, /event\.key === 'Tab'/)
assert.match(dialog, /collectVisibleFocusableElements/)
assert.match(dialog, /previouslyFocusedElement/)

assert.match(app, /useState\(false\)/)
assert.match(app, /isResumeOpen/)
assert.match(app, /<Navbar[\s\S]*onOpenResume/)
assert.match(app, /<Hero[\s\S]*onOpenResume/)
assert.match(app, /<ResumeDialog[\s\S]*isOpen={isResumeOpen}[\s\S]*onClose/)

assert.match(navbar, /onOpenResume/)
assert.match(navbar, /onClick={[\s\S]*onOpenResume/)
assert.match(navbar, /if \(isMenuOpen\) menuButtonRef\.current\?\.focus\(\)[\s\S]*closeMenu\(\)[\s\S]*onOpenResume\(\)/)
assert.match(hero, /onOpenResume/)
assert.match(hero, /onClick={onOpenResume}/)
