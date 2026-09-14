import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, Send } from 'lucide-react'
import emailjs from '@emailjs/browser'
import {
  CONTACT_FORM_LIMITS,
  createContactSubmissionGate,
  normalizeContactForm,
  validateContactForm,
} from '../utils/contactForm.js'

const proofPoints = [
  { value: '03', label: 'Featured systems', note: 'documented in the project archive' },
  { value: '08', label: 'Verified credentials', note: 'linked in the credentials index' },
  { value: '04', label: 'Delivery disciplines', note: 'mapped across the technology ticker' },
]

const workingMethod = [
  {
    number: '01',
    title: 'Discover',
    copy: 'Turn the problem into a shared, testable specification before implementation begins.',
  },
  {
    number: '02',
    title: 'Design',
    copy: 'Shape clear contracts and maintainable Java, Spring Boot, and AWS architecture with human review.',
  },
  {
    number: '03',
    title: 'Deliver',
    copy: 'Use automated verification and explicit quality gates to make each release explainable and repeatable.',
  },
]

const initialFormData = { name: '', email: '', subject: '', message: '' }
const birdAsset = '/portfolio/avatar.png'

const About = () => {
  const sectionRef = useRef(null)
  const isSubmittingRef = useRef(false)
  const mountedRef = useRef(true)
  const submissionGateRef = useRef(null)
  if (!submissionGateRef.current) submissionGateRef.current = createContactSubmissionGate()
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const birdX = useTransform(scrollYProgress, [0, 0.5, 1], ['-12vw', '5vw', '18vw'])
  const birdY = useTransform(scrollYProgress, [0, 0.55, 1], [56, -18, 34])
  const birdRotate = useTransform(scrollYProgress, [0, 0.55, 1], [-12, 8, -5])

  const [formData, setFormData] = useState(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' })

  useEffect(() => {
    mountedRef.current = true
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '')
    return () => {
      mountedRef.current = false
    }
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (isSubmittingRef.current) return

    const submittedDraft = { ...formData }
    const normalizedDraft = normalizeContactForm(submittedDraft)
    const validation = validateContactForm(normalizedDraft)
    if (!validation.isValid) {
      const firstError = Object.values(validation.errors)[0]
      setSubmitStatus({ type: 'error', message: firstError })
      return
    }

    isSubmittingRef.current = true
    setIsSubmitting(true)
    setSubmitStatus({ type: '', message: '' })

    try {
      await submissionGateRef.current.run(() => emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: validation.data.name,
          from_email: validation.data.email,
          subject: validation.data.subject,
          message: validation.data.message,
          to_name: 'Fred Zhang',
        },
      ))
      if (!mountedRef.current) return

      setSubmitStatus({ type: 'success', message: 'Message sent. I will be in touch soon.' })
      setFormData((currentDraft) => (
        Object.keys(initialFormData).every((field) => currentDraft[field] === submittedDraft[field])
          ? initialFormData
          : currentDraft
      ))
    } catch {
      if (mountedRef.current) {
        setSubmitStatus({ type: 'error', message: 'Message could not be sent. Please email me directly.' })
      }
    } finally {
      isSubmittingRef.current = false
      if (mountedRef.current) setIsSubmitting(false)
    }
  }

  const handleChange = ({ target: { name, value } }) => {
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const birdStyle = shouldReduceMotion
    ? { x: 0, y: 0, rotate: 0 }
    : { x: birdX, y: birdY, rotate: birdRotate }

  return (
    <section className="why-fred-section" id="about" ref={sectionRef} aria-labelledby="why-fred-title">
      <div className="why-fred-heading" aria-hidden="true">
        <span>WHY FRED</span>
        <span>WHY FRED</span>
      </div>

      <div className="why-fred-inner">
        <header className="why-fred-intro">
          <div>
            <p className="why-fred-kicker">The case for thoughtful engineering</p>
            <h2 id="why-fred-title">WHY FRED</h2>
          </div>
          <motion.div className="why-fred-bird" style={birdStyle} aria-hidden="true">
            <span style={{ '--bird-mask': `url(${birdAsset})` }} />
          </motion.div>
          <div className="why-fred-biography">
            <p className="why-fred-role">Software Engineer &amp; Architect</p>
            <p>
              I build maintainable backend systems and cloud infrastructure with Java, Spring Boot, and AWS.
              My AI-assisted, spec-driven practice pairs fast exploration with human review and hard quality gates.
            </p>
            <p className="why-fred-availability">Open to Software Engineer roles in backend, platform, and full-stack teams.</p>
            <p className="why-fred-status">
              <span aria-hidden="true" />
              <span className="about-status-online">Status: Online</span>
              <span>Winnipeg, Canada · Available worldwide</span>
            </p>
          </div>
        </header>

        <dl className="proof-points-grid" aria-label="Portfolio proof points">
          {proofPoints.map((proof) => (
            <div key={proof.label}>
              <dt>{proof.label}</dt>
              <dd>{proof.value}</dd>
              <p>{proof.note}</p>
            </div>
          ))}
        </dl>

        <section className="working-method" aria-labelledby="working-method-title">
          <header>
            <p>How I work</p>
            <h3 id="working-method-title">A clear path from question to dependable system.</h3>
          </header>
          <ol>
            {workingMethod.map((step) => (
              <li key={step.title}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="editorial-contact-form" aria-labelledby="message-title">
          <header>
            <p>Direct line</p>
            <h3 id="message-title">Bring the hard problem.</h3>
            <a href="mailto:fredzhang026@gmail.com">
              Or email fredzhang026@gmail.com <ArrowUpRight aria-hidden="true" />
            </a>
          </header>

          <form onSubmit={handleSubmit}>
            <fieldset disabled={isSubmitting}>
              <div className="editorial-contact-fields">
                <label htmlFor="contact-name">
                  Name
                  <input id="contact-name" type="text" name="name" required maxLength={CONTACT_FORM_LIMITS.name} autoComplete="name" value={formData.name} onChange={handleChange} />
                </label>
                <label htmlFor="contact-email">
                  Email
                  <input id="contact-email" type="email" name="email" required maxLength={CONTACT_FORM_LIMITS.email} autoComplete="email" value={formData.email} onChange={handleChange} />
                </label>
                <label className="editorial-contact-subject" htmlFor="contact-subject">
                  Subject
                  <input id="contact-subject" type="text" name="subject" required maxLength={CONTACT_FORM_LIMITS.subject} value={formData.subject} onChange={handleChange} />
                </label>
                <label className="editorial-contact-message" htmlFor="contact-message">
                  Message
                  <textarea id="contact-message" name="message" required maxLength={CONTACT_FORM_LIMITS.message} rows={5} value={formData.message} onChange={handleChange} />
                </label>
              </div>
            </fieldset>
            <div className="editorial-contact-submit">
              <p className={submitStatus.type ? `contact-form-status contact-form-status--${submitStatus.type}` : 'contact-form-status'} role="status" aria-live="polite">
                {submitStatus.message || 'All fields are required.'}
              </p>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              >
                <span>{isSubmitting ? 'Sending…' : 'Send message'}</span>
                <Send aria-hidden="true" />
              </motion.button>
            </div>
          </form>
        </section>
      </div>
    </section>
  )
}

export default About
