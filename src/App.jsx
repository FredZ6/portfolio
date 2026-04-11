import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'

const THEME_STORAGE_KEY = 'portfolio-theme'

const THEME_META = {
  dark: {
    themeColor: '#08111f',
    colorScheme: 'dark',
  },
  light: {
    themeColor: '#f7f6f3',
    colorScheme: 'light',
  },
}

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'light'

  try {
    return localStorage.getItem(THEME_STORAGE_KEY) === 'dark' ? 'dark' : 'light'
  } catch {
    return 'light'
  }
}

function App() {
  const [theme, setTheme] = useState(() => getInitialTheme())

  useEffect(() => {
    document.documentElement.dataset.theme = theme

    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme)
    } catch {
      // Ignore persistence failures and keep the in-memory theme.
    }

    const { themeColor, colorScheme } = THEME_META[theme]
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', themeColor)
    document.querySelector('meta[name="color-scheme"]')?.setAttribute('content', colorScheme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="theme-app-shell relative isolate min-h-[100dvh] overflow-hidden">
      <div className="theme-page-atmosphere pointer-events-none fixed inset-0 -z-20">
        <div className="theme-page-orb theme-page-orb--primary" />
        <div className="theme-page-orb theme-page-orb--secondary" />
      </div>
      <div className="mobile-top-edge-shroud pointer-events-none fixed inset-x-0 top-0 -z-10 h-[29svh] sm:hidden" />
      <div className="mobile-bottom-edge-shroud pointer-events-none fixed inset-x-0 bottom-0 -z-10 h-[23svh] sm:hidden" />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App
