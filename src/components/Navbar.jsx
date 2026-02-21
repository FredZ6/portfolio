import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact']

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80">
      <nav className="container-width flex items-center justify-between h-20">
        {/* Logo */}
        <a 
          href="#home" 
          className="text-2xl font-bold flex items-center gap-2 text-slate-900"
        >
          <img 
            src="/portfolio/avatar.png"
            alt="Avatar" 
            className="w-16 h-16 rounded-full"
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
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900"
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
            className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:bg-slate-100 focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/90 border-t border-slate-200/80">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900"
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
