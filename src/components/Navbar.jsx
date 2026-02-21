import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact']

  return (
    <header className="fixed top-4 left-1/2 z-50 w-[min(96%,1180px)] -translate-x-1/2 rounded-2xl glass-panel-strong">
      <nav className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a 
          href="#home" 
          className="text-2xl font-bold flex items-center gap-2 text-slate-900"
        >
          <img 
            src="/portfolio/avatar.png"
            alt="Avatar" 
            className="w-14 h-14 rounded-full ring-2 ring-white/80 shadow-sm"
          />
          Fred Zhang
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-3 py-2 rounded-xl text-sm font-medium text-slate-700 hover:bg-white/70 hover:text-slate-900 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden mr-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-xl text-slate-700 hover:bg-white/70 focus:outline-none transition-colors"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-white/80">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-2 rounded-xl text-base font-medium text-slate-700 hover:bg-white/70 hover:text-slate-900 transition-colors"
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
