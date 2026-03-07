import { motion } from 'framer-motion'
import { Home, Briefcase, Code2, User, Mail } from 'lucide-react'

const Navbar = () => {
  const navItems = [
    { name: 'Home', icon: Home, href: '#home' },
    { name: 'Projects', icon: Briefcase, href: '#projects' },
    { name: 'Skills', icon: Code2, href: '#skills' },
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

  return (
    <div className="fixed bottom-6 sm:bottom-10 left-1/2 z-[100] -translate-x-1/2 pointer-events-none">
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 20, stiffness: 100, delay: 0.5 }}
        className="glass-panel-strong pointer-events-auto flex items-center gap-3 sm:gap-5 rounded-full px-5 py-4 border-t border-primary/30 shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_5px_rgba(255,255,255,0.1),0_0_20px_rgba(56,189,248,0.24)]"
      >
        {navItems.map((item) => (
          <motion.a
            key={item.name}
            href={item.href}
            onClick={(event) => handleNavClick(event, item)}
            aria-label={item.name}
            whileHover={{ scale: 1.4, y: -12 }}
            whileTap={{ scale: 0.9 }}
            className="group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-300 transition-colors hover:bg-primary/20 hover:border-primary/50 hover:text-primary hover:shadow-[0_0_15px_rgba(56,189,248,0.52)]"
          >
            <item.icon size={22} className="sm:w-6 sm:h-6 drop-shadow-md" />

            {/* Tooltip */}
            <span className="absolute -top-12 left-1/2 -translate-x-1/2 origin-bottom scale-50 rounded-lg bg-black/80 border border-primary/30 px-3 py-1.5 text-xs font-semibold text-white tracking-widest opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100 pointer-events-none shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
              {item.name}
            </span>
          </motion.a>
        ))}
      </motion.nav>
    </div>
  )
}

export default Navbar
