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
        className="relative z-10 w-full max-w-6xl glass-panel-strong rounded-[2rem] overflow-hidden flex flex-col shadow-[0_30px_60px_rgba(0,0,0,0.8),inset_0_1px_5px_rgba(255,255,255,0.2)]"
      >
        {/* Terminal Header */}
        <div className="h-12 bg-white/5 border-b border-white/10 flex items-center px-6 relative">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.6)]" />
            <div className="w-3 h-3 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.6)]" />
            <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.6)]" />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 text-slate-400 font-mono text-xs tracking-widest uppercase">
            <TerminalIcon size={14} />
            <span>sys.admin@fredz-core:~</span>
          </div>
        </div>

        {/* Terminal Body Split Layout */}
        <div className="flex flex-col lg:flex-row h-full lg:h-[700px]">

          {/* Left Panel: Profile & Timeline */}
          <div className="w-full lg:w-5/12 p-8 sm:p-10 border-b lg:border-b-0 lg:border-r border-white/10 bg-black/20 overflow-y-auto custom-scrollbar relative">

            <div className="flex items-center gap-4 mb-10">
              <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center border border-primary/50 overflow-hidden shadow-[0_0_20px_rgba(99,102,241,0.3)] shrink-0">
                <img src="/portfolio/avatar.png" alt="Avatar" className="w-full h-full object-cover scale-150 mix-blend-screen" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-widest">USER_ID: FRED_ZHANG</h3>
                <p className="text-primary text-xs font-mono uppercase tracking-[0.2em] flex items-center gap-1">
                  <ShieldCheck size={12} /> Status: Online
                </p>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-10 font-mono">
              <span className="text-secondary opacity-70">&gt; EXECUTE profile_summary.sh</span><br /><br />
              A <span className="text-white font-bold">Computer Science</span> graduate (minor in Mathematics) from the University of Manitoba.<br /><br />
              Focus: Building maintainable backend systems, clear API contracts, and deployable cloud infrastructure.<br />
              Workflow: <span className="text-primary">AI-assisted, spec-driven</span> engineering for faster, more predictable delivery.
            </p>

            <div className="space-y-6">
              <span className="text-secondary font-mono text-sm opacity-70">&gt; CAT /var/log/experience_timeline</span>
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative pl-6 border-l border-primary/30 group">
                  <div className="absolute w-3 h-3 rounded-full bg-black border-2 border-primary -left-[6.5px] top-1 group-hover:bg-primary group-hover:shadow-[0_0_10px_rgba(99,102,241,0.8)] transition-all" />
                  <p className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-1">{exp.period}</p>
                  <h4 className="font-bold text-white text-base tracking-wide flex items-center gap-2">
                    {exp.icon} {exp.title}
                  </h4>
                  <p className="text-primary text-xs font-mono mb-2">{exp.org}</p>
                  <p className="text-slate-400 text-xs leading-relaxed">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel: Contact Interface */}
          <div id="contact" className="w-full lg:w-7/12 p-8 sm:p-10 bg-gradient-to-br from-white/[0.02] to-transparent relative flex flex-col justify-center">

            <div className="mb-10">
              <span className="text-secondary font-mono text-sm opacity-70">&gt; INIT direct_transmission_protocol</span>
              <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 tracking-tighter mix-blend-plus-lighter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] mb-2">
                ESTABLISH UPLINK
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm max-w-md">Open to Software Engineer roles in backend, platform, and full-stack teams. Transmit your message below.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="relative group">
                  <div className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-focus-within:scale-x-100 transition-transform origin-left" />
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary/70 mb-1 block">Alias / Name</label>
                  <div className="flex items-center gap-3 bg-black/40 border border-white/10 rounded-xl px-4 py-3">
                    <User size={16} className="text-slate-500" />
                    <input
                      type="text" name="name" required value={formData.name} onChange={handleChange}
                      className="w-full bg-transparent outline-none text-white text-sm placeholder:text-slate-600 font-mono" placeholder="GUEST_USER"
                    />
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-focus-within:scale-x-100 transition-transform origin-left" />
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary/70 mb-1 block">Network / Email</label>
                  <div className="flex items-center gap-3 bg-black/40 border border-white/10 rounded-xl px-4 py-3">
                    <Mail size={16} className="text-slate-500" />
                    <input
                      type="email" name="email" required value={formData.email} onChange={handleChange}
                      className="w-full bg-transparent outline-none text-white text-sm placeholder:text-slate-600 font-mono" placeholder="address@node.net"
                    />
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-secondary scale-x-0 group-focus-within:scale-x-100 transition-transform origin-left" />
                <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-secondary/70 mb-1 block">Header / Subject</label>
                <div className="bg-black/40 border border-white/10 rounded-xl px-4 py-3">
                  <input
                    type="text" name="subject" required value={formData.subject} onChange={handleChange}
                    className="w-full bg-transparent outline-none text-white text-sm placeholder:text-slate-600 font-mono" placeholder="Transmission subject..."
                  />
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-y-0 left-0 w-0.5 bg-accent scale-y-0 group-focus-within:scale-y-100 transition-transform origin-bottom" />
                <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent/70 mb-1 block">Payload / Message</label>
                <div className="bg-black/40 border border-white/10 rounded-xl px-4 py-3">
                  <textarea
                    name="message" required rows={5} value={formData.message} onChange={handleChange}
                    className="w-full bg-transparent outline-none text-white text-sm placeholder:text-slate-600 font-mono resize-none" placeholder="Enter transmission payload here..."
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-4 rounded-xl glass-button flex items-center justify-center gap-3 mt-6 disabled:opacity-50 group hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all"
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
