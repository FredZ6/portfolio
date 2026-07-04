import { useEffect, useRef, useState } from 'react'

const navItems = [
  { label: 'Work', href: '#projects' },
  { label: 'Stack', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const resumeUrl = '/portfolio/resume/FredCV-2025%20codex.pdf'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)

  useEffect(() => {
    if (!isMenuOpen) return undefined

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="editorial-header">
      <nav className="editorial-nav" aria-label="Primary navigation">
        <a className="editorial-brand" href="#home" onClick={closeMenu} aria-label="Fred Zhang — home">
          <span className="editorial-brand-mark" aria-hidden="true" />
          <span className="editorial-brand-name">Fred Zhang</span>
        </a>

        <button
          ref={menuButtonRef}
          className="editorial-menu-button"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation-links"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span className="sr-only">{isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}</span>
          <span className="editorial-menu-icon" aria-hidden="true">
            <span />
            <span />
          </span>
        </button>

        <div
          className="editorial-nav-links"
          id="primary-navigation-links"
          data-open={isMenuOpen ? 'true' : 'false'}
        >
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="editorial-resume-link" href={resumeUrl} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
            Resume
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
