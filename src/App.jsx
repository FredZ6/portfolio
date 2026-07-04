import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  return (
    <div className="editorial-app-shell relative isolate min-h-[100dvh] overflow-hidden">
      <Navbar />
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
