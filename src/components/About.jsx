import { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { GraduationCap, Briefcase, Code2, Terminal as TerminalIcon, Send, Mail, User, ShieldCheck } from 'lucide-react'
import emailjs from '@emailjs/browser'
import Toast from './Toast'

const About = () => {
  const shouldReduceMotion = useReducedMotion()

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ show: false, type: '', message: '' })
  const hideStatus = () => setSubmitStatus({ show: false, type: '', message: '' })

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '')
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    hideStatus()
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Fred Zhang',
        }
      )
      setSubmitStatus({ show: true, type: 'success', message: 'Transmission successful.' })
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch {
      setSubmitStatus({ show: true, type: 'error', message: 'Transmission failed.' })
    } finally {
      setIsSubmitting(false)
      setTimeout(hideStatus, 5000)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const experiences = [
    {
      icon: <GraduationCap size={20} strokeWidth={1.5} />,
      title: "Education",
      org: "University of Manitoba",
      period: "2019 - 2024",
      desc: "BSc. Computer Science (Minor in Mathematics)"
    },
    {
      icon: <Briefcase size={20} strokeWidth={1.5} />,
      title: "Work Experience",
      org: "DataAnnotation Teach",
      period: "2023 - 2024",
      desc: "Built and maintained web application features, APIs, and internal tooling."
    },
    {
      icon: <Code2 size={20} strokeWidth={1.5} />,
      title: "Personal Projects",
      org: "Independent Dev",
      period: "2022 - Present",
      desc: "Delivered cloud-native microservices and commerce systems."
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden bg-transparent" id="about">
      {submitStatus.show && (
        <Toast type={submitStatus.type} message={submitStatus.message} onClose={hideStatus} />
      )}

      {/* Abstract Background for Terminal */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] h-full max-h-[800px] pointer-events-none z-0">
        <div className="absolute top-10 right-10 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="about-terminal-shell relative z-10 flex w-full max-w-6xl flex-col overflow-hidden rounded-[2rem]"
      >
        {/* Terminal Header */}
        <div className="about-terminal-header relative flex h-12 items-center px-6">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.6)]" />
            <div className="w-3 h-3 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.6)]" />
            <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.6)]" />
          </div>
          <div className="about-window-title absolute left-1/2 -translate-x-1/2 flex items-center gap-2 font-mono text-xs tracking-widest uppercase">
            <TerminalIcon size={14} />
            <span>sys.admin@fredz-core:~</span>
          </div>
        </div>

        {/* Terminal Body Split Layout */}
        <div className="flex flex-col lg:flex-row h-full lg:h-[700px]">

          {/* Left Panel: Profile & Timeline */}
          <div className="about-terminal-sidebar relative w-full overflow-y-auto border-b p-8 scrollbar-none sm:p-10 lg:w-5/12 lg:border-b-0 lg:border-r">

            <div className="flex items-center gap-4 mb-10">
              <div className="about-avatar-shell glass-panel flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full border border-primary/50">
                <img src="/portfolio/avatar.png" alt="Avatar" className="w-full h-full object-cover scale-150 mix-blend-screen" />
              </div>
              <div>
                <h3 className="about-identity-title text-xl font-bold tracking-widest">USER_ID: FRED_ZHANG</h3>
                <p className="text-xs font-mono uppercase tracking-[0.2em] flex items-center gap-1">
                  <ShieldCheck size={12} className="text-emerald-400" />
                  <span className="about-status-online">Status: Online</span>
                </p>
              </div>
            </div>

            <p className="about-body-copy mb-10 text-sm leading-relaxed font-mono">
              <span className="about-command">&gt; EXECUTE profile_summary.sh</span><br /><br />
              A <span className="theme-emphasis font-bold">Computer Science</span> graduate (minor in Mathematics) from the University of Manitoba.<br /><br />
              Focus: Building maintainable backend systems, clear API contracts, and deployable cloud infrastructure.<br />
              Workflow: <span className="text-primary">AI-assisted, spec-driven</span> engineering for faster, more predictable delivery.
            </p>

            <div className="space-y-6">
              <span className="about-command font-mono text-sm">&gt; CAT /var/log/experience_timeline</span>
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative pl-6 border-l border-primary/30 group">
                  <div className="about-timeline-node absolute -left-[6.5px] top-1 h-3 w-3 rounded-full border-2 border-primary transition-all group-hover:bg-primary group-hover:shadow-[0_0_10px_rgba(56,189,248,0.82)]" />
                  <p className="about-timeline-period mb-1 text-xs font-bold tracking-widest uppercase">{exp.period}</p>
                  <h4 className="about-heading-emphasis flex items-center gap-2 text-base font-bold tracking-wide">
                    {exp.icon} {exp.title}
                  </h4>
                  <p className="text-primary text-xs font-mono mb-2">{exp.org}</p>
                  <p className="about-body-muted text-xs leading-relaxed">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel: Contact Interface */}
          <div id="contact" className="about-terminal-main relative flex w-full flex-col justify-center p-8 sm:p-10 lg:w-7/12">

            <div className="mb-10">
              <span className="about-command font-mono text-sm">&gt; INIT direct_transmission_protocol</span>
              <h2 className="about-uplink-title mt-4 mb-2 text-3xl font-black tracking-tighter sm:text-5xl">
                ESTABLISH UPLINK
              </h2>
              <p className="about-body-muted max-w-md text-xs sm:text-sm">Open to Software Engineer roles in backend, platform, and full-stack teams. Transmit your message below.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="relative group">
                  <div className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-focus-within:scale-x-100 transition-transform origin-left" />
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary/70 mb-1 block">Alias / Name</label>
                  <div className="about-input-shell flex items-center gap-3 rounded-xl px-4 py-3">
                    <User size={16} className="about-input-icon" />
                    <input
                      type="text" name="name" required value={formData.name} onChange={handleChange}
                      className="about-input-control w-full bg-transparent text-sm font-mono outline-none" placeholder="GUEST_USER"
                    />
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-focus-within:scale-x-100 transition-transform origin-left" />
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary/70 mb-1 block">Network / Email</label>
                  <div className="about-input-shell flex items-center gap-3 rounded-xl px-4 py-3">
                    <Mail size={16} className="about-input-icon" />
                    <input
                      type="email" name="email" required value={formData.email} onChange={handleChange}
                      className="about-input-control w-full bg-transparent text-sm font-mono outline-none" placeholder="address@node.net"
                    />
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-secondary scale-x-0 group-focus-within:scale-x-100 transition-transform origin-left" />
                <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-secondary/70 mb-1 block">Header / Subject</label>
                <div className="about-input-shell rounded-xl px-4 py-3">
                  <input
                    type="text" name="subject" required value={formData.subject} onChange={handleChange}
                    className="about-input-control w-full bg-transparent text-sm font-mono outline-none" placeholder="Transmission subject..."
                  />
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-y-0 left-0 w-0.5 bg-accent scale-y-0 group-focus-within:scale-y-100 transition-transform origin-bottom" />
                <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent/70 mb-1 block">Payload / Message</label>
                <div className="about-input-shell rounded-xl px-4 py-3">
                  <textarea
                    name="message" required rows={5} value={formData.message} onChange={handleChange}
                    className="about-input-control w-full resize-none bg-transparent text-sm font-mono outline-none" placeholder="Enter transmission payload here..."
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-4 rounded-xl glass-button flex items-center justify-center gap-3 mt-6 disabled:opacity-50 group hover:shadow-[0_0_20px_rgba(56,189,248,0.42)] transition-all"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              >
                <Send size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                <span className="font-bold tracking-widest uppercase text-sm">
                  {isSubmitting ? 'Transmitting...' : 'Send Uplink'}
                </span>
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
