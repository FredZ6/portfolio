import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden text-slate-900">
      <div className="pointer-events-none fixed inset-0 -z-20">
        <div className="absolute -left-24 top-16 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-[-120px] top-[-20px] h-96 w-96 rounded-full bg-sky-300/25 blur-3xl" />
      </div>
      <div className="global-frost-overlay pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.018)_22%,rgba(255,255,255,0.008)_52%,rgba(2,6,23,0.10)_100%)] backdrop-blur-[14px]" />
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
