import { useLayoutEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowDownRight, FileText, Github, Linkedin, Mail } from 'lucide-react'

const Hero = ({ onOpenResume }) => {
  const heroRef = useRef(null)
  const birdRef = useRef(null)
  useLayoutEffect(() => {
    const bird = birdRef.current
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!bird || reduced) return undefined

    // Keep the live hero as the destination; the portal-like copy never affects layout.
    const overlay = bird.cloneNode(true)
    overlay.classList.add('hero-opening')
    overlay.removeAttribute('style')
    overlay.setAttribute('aria-hidden', 'true')
    const diameter = Math.hypot(window.innerWidth, window.innerHeight)
    const start = {
      top: `${(window.innerHeight - diameter) / 2}px`,
      left: `${(window.innerWidth - diameter) / 2}px`,
      width: `${diameter}px`,
      height: `${diameter}px`,
      borderRadius: '50%',
      borderWidth: '0px',
      backgroundColor: 'rgba(18, 104, 243, 0.58)',
    }
    Object.assign(overlay.style, start)
    document.body.appendChild(overlay)
    bird.style.visibility = 'hidden'
    const previousOverflow = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'
    let animation
    let finished = false
    const finish = () => {
      if (finished) return
      finished = true
      animation?.cancel()
      overlay.remove()
      bird.style.visibility = ''
      document.documentElement.style.overflow = previousOverflow
    }
    const timer = window.setTimeout(() => {
      if (finished) return
      const rect = bird.getBoundingClientRect()
      const style = getComputedStyle(bird)
      animation = overlay.animate([
        start,
        { top: `${rect.top}px`, left: `${rect.left}px`, width: `${rect.width}px`, height: `${rect.height}px`, borderRadius: `${rect.width / 2}px`, borderWidth: style.borderTopWidth, backgroundColor: style.backgroundColor },
      ], { duration: 900, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'forwards' })
      // Match the resting shadow before handing back to the live hero.
      overlay.animate(
        [{ boxShadow: 'none' }, { boxShadow: style.boxShadow }],
        { delay: 400, duration: 500, easing: 'cubic-bezier(0.4, 0, 0.2, 1)', fill: 'forwards' },
      )
      overlay.querySelector('.hero-bird-ring').animate(
        [{ opacity: 0 }, { opacity: 1 }],
        { delay: 650, duration: 250, fill: 'forwards' },
      )
      animation.finished.then(finish).catch(() => {})
    }, 1000)
    const onKey = (event) => { if (event.key === 'Escape' || event.key === 'Tab') finish() }
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', finish)
    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', finish)
      finish()
    }
  }, [])
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const birdY = useTransform(scrollYProgress, [0, 1], [0, 110])
  const birdRotate = useTransform(scrollYProgress, [0, 1], [0, 9])
  const birdScale = useTransform(scrollYProgress, [0, 0.65, 1], [1, 0.92, 0.82])
  const reveal = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section ref={heroRef} className="editorial-hero" id="home">
      <motion.div
        className="hero-stage"
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: shouldReduceMotion ? 0 : 0.09, delayChildren: 0.08 }}
      >
        <motion.div className="hero-topline" variants={reveal}>
          <p className="hero-kicker">Software Engineer · Cloud Architect</p>
          <p className="hero-location">Winnipeg, Canada <span aria-hidden="true">↗</span> Available worldwide</p>
        </motion.div>

        <div className="hero-heading-wrap">
          <motion.h1 className="hero-heading" variants={reveal}>
            <span className="hero-heading-outline">Software that ships</span>
            <span className="hero-heading-solid">with confidence</span>
          </motion.h1>
        </div>

        <motion.div
          ref={birdRef}
          className="hero-bird-mark"
          aria-hidden="true"
          variants={reveal}
          style={shouldReduceMotion ? undefined : { y: birdY, rotate: birdRotate, scale: birdScale }}
        >
          <span className="hero-bird-ring" />
          <span className="hero-bird-silhouette" />
        </motion.div>

        <motion.div className="hero-bottomline" variants={reveal}>
          <div className="hero-meta" aria-label="Selected work metadata">
            <span>Selected work</span>
            <strong>01—03</strong>
            <p>Reliable systems, shaped from interface to infrastructure.</p>
          </div>

          <div className="hero-actions" aria-label="Profile and résumé links">
            <a href="https://github.com/FredZ6" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
              <Github aria-hidden="true" size={19} />
            </a>
            <a href="https://www.linkedin.com/in/haifeng-zhang26/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
              <Linkedin aria-hidden="true" size={19} />
            </a>
            <a href="mailto:fredzhang026@gmail.com" aria-label="Email Fred Zhang">
              <Mail aria-hidden="true" size={19} />
            </a>
            <button type="button" className="hero-resume-button" onClick={onOpenResume}>
              <FileText aria-hidden="true" size={18} />
              Résumé
            </button>
          </div>

          <a className="hero-next" href="#stack" aria-label="Continue to stack">
            <span>Next</span>
            <ArrowDownRight aria-hidden="true" size={28} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

Hero.propTypes = {
  onOpenResume: PropTypes.func.isRequired,
}

export default Hero
