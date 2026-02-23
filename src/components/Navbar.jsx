import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = ['Home', 'Projects', 'Skills', 'About', 'Contact']
  const navLinkClassName =
    'rounded-xl px-3 py-2 font-medium text-slate-700 transition-colors hover:bg-white/70 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white/70'

  return (
    <header className="fixed top-4 left-1/2 z-50 w-[min(96%,1180px)] -translate-x-1/2 rounded-2xl glass-panel-strong">
      <nav className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a 
          href="#home" 
          className="text-2xl font-bold flex items-center gap-2 text-slate-900"
        >
          <span className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-primary/12 to-sky-200/30 ring-2 ring-primary/30 shadow-sm">
            <img
              src="/portfolio/avatar.png"
              alt="Avatar"
              className="h-full w-full scale-[1.4] opacity-85 [filter:brightness(0)_saturate(100%)]"
            />
          </span>
          Fred Zhang
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`${navLinkClassName} text-sm`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden mr-4">
          <button
            type="button"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation-menu"
            onClick={() => setIsOpen((prevOpen) => !prevOpen)}
            className="inline-flex items-center justify-center rounded-xl p-2 text-slate-700 transition-colors hover:bg-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white/70"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div id="mobile-navigation-menu" className="md:hidden border-t border-white/80">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`${navLinkClassName} block text-base`}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar 
