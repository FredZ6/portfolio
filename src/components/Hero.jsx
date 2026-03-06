import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Github, Linkedin, Mail, X, ExternalLink, FileText } from 'lucide-react'
import Tilt from 'react-parallax-tilt'
import DecryptedText from '../animation/DecryptedText'

const Hero = () => {
  const shouldReduceMotion = useReducedMotion()
  const [isResumeOpen, setIsResumeOpen] = useState(false)
  const resumePdfUrl = '/portfolio/resume/FredCV-2025%20codex.pdf'

  const heroItemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  useEffect(() => {
    if (!isResumeOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const handleKeyDown = (event) => event.key === 'Escape' && setIsResumeOpen(false)
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isResumeOpen])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-10" id="home">

      {/* Background 3D Abstract Element (Replacing standard right-side avatar) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.35, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="relative perspective-1000 mix-blend-screen"
        >
          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            transitionSpeed={3000}
            gyroscope={true}
            className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] relative"
          >
            {/* Outer Orbit */}
            <motion.div
              className="absolute inset-0 rounded-full border border-primary/20 shadow-[0_0_80px_rgba(56,189,248,0.24)]"
              animate={shouldReduceMotion ? undefined : { rotateZ: 360 }}
              transition={shouldReduceMotion ? undefined : { duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            {/* Inner Orbit */}
            <motion.div
              className="absolute inset-10 rounded-full border border-secondary/30 shadow-[0_0_60px_rgba(13,244,230,0.3)]"
              animate={shouldReduceMotion ? undefined : { rotateZ: -360 }}
              transition={shouldReduceMotion ? undefined : { duration: 25, repeat: Infinity, ease: 'linear' }}
            />
            {/* Central Hologram Core */}
            <motion.div
              className="absolute inset-x-20 inset-y-20 rounded-full p-4 flex items-center justify-center"
              animate={shouldReduceMotion ? undefined : { y: [0, -30, 0] }}
              transition={shouldReduceMotion ? undefined : { duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img
                src="/portfolio/avatar.png"
                alt="Profile Avatar Hologram"
                className="w-full h-full object-cover rounded-full mix-blend-lighten blur-[2px] opacity-80"
                style={{ filter: 'drop-shadow(0 0 40px rgba(56,189,248,0.82))' }}
              />
            </motion.div>
          </Tilt>
        </motion.div>
      </div>

      {/* Foreground Text Content */}
      <div className="container-width relative z-10 flex flex-col items-center text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center w-full"
        >
          <motion.div variants={heroItemVariants} className="mb-4">
            <span className="glass-chip px-5 py-2 text-xs sm:text-sm uppercase tracking-[0.3em] font-semibold text-primary">
              <DecryptedText text="System Loaded" speed={100} />
            </span>
          </motion.div>

          <motion.h1
            variants={heroItemVariants}
            className="text-[14vw] sm:text-[11vw] md:text-[9vw] font-black leading-[0.85] tracking-tighter mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-transparent drop-shadow-[0_0_40px_rgba(255,255,255,0.2)] mix-blend-plus-lighter"
          >
            FRED ZHANG
          </motion.h1>

          <motion.h2
            variants={heroItemVariants}
            className="text-xl sm:text-3xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent mb-8"
          >
            <DecryptedText
              text="Software Engineer & Architect"
              animateOn="view"
              speed={80}
              sequential={true}
            />
          </motion.h2>

          <motion.p
            variants={heroItemVariants}
            className="max-w-xl text-sm sm:text-base md:text-lg text-slate-300 font-medium leading-relaxed tracking-wide mb-12 glass-panel p-5 rounded-2xl"
          >
            I build <span className="text-white font-bold">reliable backend systems</span> with Java, Spring Boot, and AWS infrastructure. I use <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-bold">AI-assisted, spec-driven</span> workflows to ship faster while keeping quality gates strict.
          </motion.p>

          {/* Social Links & Action Buttons - Floating Pill */}
          <motion.div
            variants={heroItemVariants}
            className="glass-panel-strong rounded-full p-2 flex flex-wrap items-center justify-center gap-2 sm:gap-3 shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_5px_rgba(56,189,248,0.2)]"
          >
            <motion.a
              href="https://github.com/FredZ6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1, y: -4 }}
            >
              <Github size={22} className="sm:w-6 sm:h-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/haifeng-zhang26/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white/5 text-slate-300 hover:text-secondary hover:bg-secondary/20 transition-colors"
              whileHover={{ scale: 1.1, y: -4 }}
            >
              <Linkedin size={22} className="sm:w-6 sm:h-6" />
            </motion.a>
            <motion.a
              href="mailto:fredzhang026@gmail.com"
              aria-label="Send Email"
              className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white/5 text-slate-300 hover:text-accent hover:bg-accent/20 transition-colors"
              whileHover={{ scale: 1.1, y: -4 }}
            >
              <Mail size={22} className="sm:w-6 sm:h-6" />
            </motion.a>

            <div className="w-px h-8 bg-white/20 mx-2 hidden sm:block"></div>

            <motion.button
              type="button"
              onClick={() => setIsResumeOpen(true)}
              className="flex items-center gap-2 px-6 h-12 sm:h-14 rounded-full bg-primary/20 text-primary font-bold tracking-widest uppercase text-xs sm:text-sm hover:bg-primary hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText size={18} />
              <span>Resume</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Resume Modal */}
      <AnimatePresence>
        {isResumeOpen && (
          <motion.div
            className="fixed inset-0 z-[120] bg-black/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsResumeOpen(false)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              className="relative w-full h-full max-w-6xl glass-panel-strong rounded-2xl overflow-hidden flex flex-col"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95, y: 20 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 20 }}
              onClick={(event) => event.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex-none flex items-center justify-between border-b border-white/10 bg-white/5 px-4 lg:px-6 py-3">
                <p className="text-sm font-bold text-primary tracking-widest uppercase">Fred Zhang Resume</p>
                <div className="flex items-center gap-3">
                  <a
                    href={resumePdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-primary hover:text-white transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsResumeOpen(false)}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-rose-500 hover:text-white transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>
              {/* Modal Body */}
              <div className="flex-grow w-full relative">
                <object data={resumePdfUrl} type="application/pdf" className="absolute inset-0 w-full h-full">
                  <div className="flex h-full items-center justify-center px-6 text-center text-white/90">
                    <p>PDF preview is not supported on this device. <a href={resumePdfUrl} target="_blank" rel="noopener noreferrer" className="text-primary underline">Open in new tab</a>.</p>
                  </div>
                </object>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Hero
