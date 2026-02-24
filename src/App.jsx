import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const progressScaleX = useSpring(scrollYProgress, {
    stiffness: shouldReduceMotion ? 500 : 180,
    damping: shouldReduceMotion ? 85 : 34,
    mass: 0.35,
  })

  return (
    <div className="relative isolate min-h-screen overflow-hidden text-slate-900">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-24 top-16 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-[-120px] top-[-20px] h-96 w-96 rounded-full bg-sky-300/25 blur-3xl" />
      </div>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px] bg-white/25 backdrop-blur-sm">
        <motion.div
          style={{ scaleX: progressScaleX }}
          className="h-full origin-left bg-gradient-to-r from-primary via-sky-400 to-primary shadow-[0_0_18px_rgba(14,165,164,0.75)]"
        />
      </div>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
