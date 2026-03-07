import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative isolate min-h-[100dvh] overflow-hidden text-slate-900">
      <div className="pointer-events-none fixed inset-0 -z-20">
        <div className="absolute -left-24 top-16 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-[-120px] top-[-20px] h-96 w-96 rounded-full bg-sky-300/25 blur-3xl" />
      </div>
      <div className="mobile-top-edge-shroud pointer-events-none fixed inset-x-0 top-0 -z-10 h-[29svh] sm:hidden bg-[linear-gradient(180deg,rgba(8,17,31,0.98)_0%,rgba(8,17,31,0.9)_24%,rgba(9,21,36,0.74)_46%,rgba(8,17,31,0.18)_72%,rgba(8,17,31,0)_100%),radial-gradient(circle_at_50%_4%,rgba(72,119,158,0.22)_0%,rgba(24,49,76,0.14)_34%,rgba(8,17,31,0)_72%)] backdrop-blur-[8px]" />
      <div className="mobile-bottom-edge-shroud pointer-events-none fixed inset-x-0 bottom-0 -z-10 h-[23svh] sm:hidden bg-[linear-gradient(0deg,rgba(8,17,31,0.98)_0%,rgba(8,17,31,0.92)_28%,rgba(9,21,36,0.72)_50%,rgba(8,17,31,0.2)_76%,rgba(8,17,31,0)_100%),radial-gradient(circle_at_50%_100%,rgba(44,86,122,0.16)_0%,rgba(8,17,31,0)_58%)] backdrop-blur-[8px]" />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App
