import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaTimes, FaExternalLinkAlt } from 'react-icons/fa'
import DecryptedText from '../animation/DecryptedText'

const Hero = () => {
  const shouldReduceMotion = useReducedMotion()
  const [isResumeOpen, setIsResumeOpen] = useState(false)
  const resumePdfUrl = '/portfolio/resume/FredCV-2025%20codex.pdf'

  const heroTextVariants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -44 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.7,
        ease: [0.22, 1, 0.36, 1],
        when: 'beforeChildren',
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  }

  const heroItemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.45,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  useEffect(() => {
    if (!isResumeOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsResumeOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isResumeOpen])

  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-28 md:pt-24" id="home">
      <div className="container-width grid md:grid-cols-2 gap-4 md:gap-8 items-center">
        {/* Text Content */}
        <motion.div
          variants={heroTextVariants}
          initial="hidden"
          animate="show"
          className="w-full glass-panel rounded-3xl p-6 sm:p-8 text-center md:text-left"
        >
          <motion.h2 variants={heroItemVariants} className="text-primary font-medium text-base md:text-lg mb-2">
            Hello, I&apos;m
          </motion.h2>
          <motion.h1 variants={heroItemVariants} className="text-3xl md:text-4xl lg:text-6xl font-bold mb-2 md:mb-4">
            <DecryptedText
              text="Fred Zhang"
              animateOn="view"
              speed={150}
              className="text-slate-900"
              sequential={true}
              revealDirection="center"
            />
          </motion.h1>
          <motion.h2 variants={heroItemVariants} className="text-xl md:text-2xl lg:text-3xl text-slate-500 mb-4 md:mb-6">
            <DecryptedText
              text="Backend & Cloud Engineer"
              animateOn="view"
              speed={80}
              sequential={true}
            />
          </motion.h2>
          <motion.p
            variants={heroItemVariants}
            className="text-sm md:text-base text-slate-600 mb-6 md:mb-8 max-w-lg mx-auto md:mx-0 font-mono leading-relaxed tracking-wide"
          >
            <DecryptedText
              text="I build reliable backend systems with Java, Spring Boot, event-driven workflows, and AWS infrastructure. I use AI-assisted, spec-driven workflows to ship faster while keeping CI/CD quality gates strict."
              animateOn="view"
              speed={5}
              sequential={true}
              highlightWords={[
                "Java",
                "Spring Boot",
                "AI-assisted",
                "spec-driven",
                "AWS",
                "CI/CD"
              ]}
              highlightClass="text-primary"
            />
          </motion.p>
          <motion.p variants={heroItemVariants} className="text-xs sm:text-sm text-slate-500 mb-6 md:mb-8">
            Open to Software Engineer opportunities (Backend / Platform / Full-Stack).
          </motion.p>
          
          {/* Social Links */}
          <motion.div variants={heroItemVariants} className="flex justify-center md:justify-start space-x-4 mb-6 md:mb-8">
            <motion.a
              href="https://github.com/FredZ6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Fred Zhang's GitHub profile"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl glass-panel text-slate-500 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white/70"
              whileHover={{ y: shouldReduceMotion ? 0 : -2, scale: shouldReduceMotion ? 1 : 1.04 }}
            >
              <FaGithub size={20} className="md:w-6 md:h-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/haifeng-zhang26/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Fred Zhang's LinkedIn profile"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl glass-panel text-slate-500 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white/70"
              whileHover={{ y: shouldReduceMotion ? 0 : -2, scale: shouldReduceMotion ? 1 : 1.04 }}
            >
              <FaLinkedin size={20} className="md:w-6 md:h-6" />
            </motion.a>
            <motion.a
              href="mailto:fredzhang026@gmail.com"
              aria-label="Send email to Fred Zhang"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl glass-panel text-slate-500 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white/70"
              whileHover={{ y: shouldReduceMotion ? 0 : -2, scale: shouldReduceMotion ? 1 : 1.04 }}
            >
              <FaEnvelope size={20} className="md:w-6 md:h-6" />
            </motion.a>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div variants={heroItemVariants} className="flex flex-wrap justify-center md:justify-start gap-3">
            <motion.a
              href="#contact"
              className="glass-button inline-block w-32 rounded-xl px-3 py-2 text-center text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white/70 sm:w-auto sm:px-4 md:px-6 md:py-3 md:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <DecryptedText
                text="Contact Me"
                animateOn="view"
                speed={150}
                sequential={true}
              />
            </motion.a>
            <motion.button
              type="button"
              onClick={() => setIsResumeOpen(true)}
              aria-label="Open resume fullscreen preview"
              className="glass-outline-button inline-block w-36 rounded-xl px-3 py-2 text-center text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white/70 sm:w-auto sm:px-4 md:px-6 md:py-3 md:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <DecryptedText
                text="Request Resume"
                animateOn="view"
                speed={150}
                sequential={true}
              />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.2 : 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-8 md:mt-0 flex justify-center md:justify-end"
        >
          <motion.div
            className="w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] lg:w-[520px] lg:h-[520px] xl:w-[560px] xl:h-[560px] mx-auto md:mx-0 relative glass-panel rounded-full p-3 will-change-transform"
            animate={
              shouldReduceMotion
                ? undefined
                : { y: [0, -12, 0], rotate: [0, 0.7, 0, -0.7, 0], scale: [1, 1.01, 1] }
            }
            transition={shouldReduceMotion ? undefined : { duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-primary/50 blur-2xl opacity-30"
              animate={shouldReduceMotion ? undefined : { opacity: [0.24, 0.4, 0.24], scale: [0.98, 1.02, 0.98] }}
              transition={shouldReduceMotion ? undefined : { duration: 5.8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <img
              src="/portfolio/avatar.png"
              alt="Profile Picture"
              className="rounded-full w-full h-full object-cover relative z-10 ring-2 ring-white/75"
            />
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isResumeOpen && (
          <motion.div
            className="fixed inset-0 z-[90] bg-slate-950/80 backdrop-blur-sm p-3 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsResumeOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Resume fullscreen preview"
          >
            <motion.div
              className="relative mx-auto h-full w-full max-w-6xl rounded-2xl border border-white/25 bg-slate-900/45 shadow-2xl"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.985, y: 8 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.985, y: 8 }}
              transition={{ duration: shouldReduceMotion ? 0.12 : 0.22, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between border-b border-white/20 bg-slate-950/45 px-3 py-2.5 backdrop-blur sm:px-4">
                <p className="text-sm font-medium text-white/90">Fred Zhang Resume</p>
                <div className="flex items-center gap-2">
                  <a
                    href={resumePdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition-colors hover:bg-white/20"
                    aria-label="Open resume in new tab"
                  >
                    <FaExternalLinkAlt size={14} />
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsResumeOpen(false)}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition-colors hover:bg-white/20"
                    aria-label="Close resume preview"
                  >
                    <FaTimes size={16} />
                  </button>
                </div>
              </div>

              <div className="h-full w-full pt-14">
                <object data={resumePdfUrl} type="application/pdf" className="h-full w-full rounded-b-2xl">
                  <div className="flex h-full items-center justify-center px-6 text-center text-white/90">
                    <p className="text-sm sm:text-base">
                      PDF preview is not supported on this device.
                      {' '}
                      <a
                        href={resumePdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-primary underline underline-offset-4"
                      >
                        Open resume in a new tab
                      </a>
                      .
                    </p>
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
