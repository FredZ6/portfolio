import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import { Home, Briefcase, Code2, User, Mail, MoonStar, SunMedium } from 'lucide-react'

const Navbar = ({ theme, onToggleTheme }) => {
  const navItems = [
    { name: 'Home', icon: Home, href: '#home' },
    { name: 'Skills', icon: Code2, href: '#skills' },
    { name: 'Projects', icon: Briefcase, href: '#projects' },
    { name: 'About', icon: User, href: '#about' },
    { name: 'Contact', icon: Mail, href: '#contact' },
  ]

  const getScrollOffset = (targetId) => {
    const isDesktop = window.innerWidth >= 1024

    switch (targetId) {
      case 'projects':
        return Math.round(window.innerHeight * (isDesktop ? 0.18 : 0.14))
      case 'skills':
        return isDesktop ? -72 : -24
      case 'contact':
        return isDesktop ? 0 : 24
      default:
        return 0
    }
  }

  const handleNavClick = (event, item) => {
    event.preventDefault()

    const target = document.getElementById(item.href.slice(1))
    if (!target) return

    const targetTop = target.getBoundingClientRect().top + window.scrollY
    const nextScrollTop = Math.max(0, targetTop + getScrollOffset(target.id))

    window.history.replaceState(null, '', item.href)
    window.scrollTo({ top: nextScrollTop, behavior: 'smooth' })
  }

  const isDarkTheme = theme === 'dark'
  const ThemeIcon = isDarkTheme ? SunMedium : MoonStar
  const themeTooltip = isDarkTheme ? 'Light Mode' : 'Night Mode'
  const themeAriaLabel = isDarkTheme ? 'Switch to light theme' : 'Switch to dark theme'

  return (
    <div className="fixed bottom-6 sm:bottom-10 left-1/2 z-[100] -translate-x-1/2 pointer-events-none">
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 20, stiffness: 100, delay: 0.5 }}
        className="glass-panel-strong theme-nav-shell pointer-events-auto flex items-center gap-3 sm:gap-5 rounded-full px-5 py-4 border-t border-primary/30"
      >
        {navItems.map((item) => (
          <motion.a
            key={item.name}
            href={item.href}
            onClick={(event) => handleNavClick(event, item)}
            aria-label={item.name}
            whileHover={{ scale: 1.4, y: -12 }}
            whileTap={{ scale: 0.9 }}
            className="theme-nav-button group relative flex h-12 w-12 items-center justify-center rounded-full sm:h-14 sm:w-14"
          >
            <item.icon size={22} className="sm:w-6 sm:h-6 drop-shadow-md" />

            <span className="theme-tooltip absolute -top-12 left-1/2 -translate-x-1/2 origin-bottom scale-50 rounded-lg px-3 py-1.5 text-xs font-semibold tracking-widest opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100 pointer-events-none">
              {item.name}
            </span>
          </motion.a>
        ))}

        <div className="theme-nav-divider h-7 w-px shrink-0 sm:h-8" aria-hidden="true" />

        <motion.button
          type="button"
          onClick={onToggleTheme}
          aria-label={themeAriaLabel}
          data-theme-toggle="true"
          whileHover={{ scale: 1.4, y: -12 }}
          whileTap={{ scale: 0.9 }}
          className="theme-nav-button group relative flex h-12 w-12 items-center justify-center rounded-full sm:h-14 sm:w-14"
        >
          <ThemeIcon size={22} className="sm:h-6 sm:w-6 drop-shadow-md" />

          <span className="theme-tooltip absolute -top-12 left-1/2 -translate-x-1/2 origin-bottom scale-50 rounded-lg px-3 py-1.5 text-xs font-semibold tracking-widest opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100 pointer-events-none">
            {themeTooltip}
          </span>
        </motion.button>
      </motion.nav>
    </div>
  )
}

Navbar.propTypes = {
  theme: PropTypes.oneOf(['dark', 'light']).isRequired,
  onToggleTheme: PropTypes.func.isRequired,
}

export default Navbar
