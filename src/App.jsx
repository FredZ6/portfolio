import { useCallback, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'
import ResumeDialog from './components/ResumeDialog'

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false)
  const openResume = useCallback(() => setIsResumeOpen(true), [])
  const closeResume = useCallback(() => setIsResumeOpen(false), [])

  useEffect(() => {
    document.documentElement.dataset.theme = 'light'

    try {
      localStorage.removeItem('portfolio-theme')
    } catch {
      // The fixed light theme still applies when storage is unavailable.
    }

    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#f7fbff')
    document.querySelector('meta[name="color-scheme"]')?.setAttribute('content', 'light')
  }, [])

  return (
    <div className="editorial-app-shell relative isolate min-h-[100dvh] overflow-hidden">
      <Navbar onOpenResume={openResume} />
      <main>
        <Hero onOpenResume={openResume} />
        <Skills />
        <Projects />
        <About />
      </main>
      <Footer onOpenResume={openResume} />
      <ResumeDialog isOpen={isResumeOpen} onClose={closeResume} />
    </div>
  )
}

export default App
