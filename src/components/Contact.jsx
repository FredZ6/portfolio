import { motion, useReducedMotion } from 'framer-motion'
import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import Toast from './Toast'

const Contact = () => {
  const shouldReduceMotion = useReducedMotion()

  const sectionVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0.45, y: shouldReduceMotion ? 0 : 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.15 : 0.42,
        ease: [0.22, 1, 0.36, 1],
        when: 'beforeChildren',
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0.6, y: shouldReduceMotion ? 0 : 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.15 : 0.32,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const formFieldsVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  }

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ show: false, type: '', message: '' })

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ show: false, type: '', message: '' })
    
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
      
      // Success
      setSubmitStatus({
        show: true,
        type: 'success',
        message: 'Message sent successfully!'
      })
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch {
      setSubmitStatus({
        show: true,
        type: 'error',
        message: 'Failed to send message. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
      
      // Hide status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ show: false, type: '', message: '' })
      }, 5000)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <section className="section-padding pt-1" id="contact">
      <div className="container-width max-w-xl mx-auto">
        {submitStatus.show && (
          <Toast type={submitStatus.type} message={submitStatus.message} />
        )}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.06 }}
        >
          <motion.h2 variants={itemVariants} className="heading text-center">
            Contact Me
          </motion.h2>
          <motion.p variants={itemVariants} className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Open to Software Engineer roles in backend, platform, and full-stack teams. Reach out for interviews, collaborations, or project discussions.
          </motion.p>

          {/* Contact Form */}
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="space-y-4 glass-panel rounded-2xl p-6 sm:p-8"
          >
            <motion.div variants={formFieldsVariants} className="space-y-4">
              <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-4">
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 glass-input rounded-xl focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 glass-input rounded-xl focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
                  />
                </motion.div>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 glass-input rounded-xl focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 glass-input rounded-xl focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none resize-none"
                />
              </motion.div>

              <motion.button
                variants={itemVariants}
                type="submit"
                disabled={isSubmitting}
                whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.01 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                className="w-full glass-button py-3 rounded-xl font-medium transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 
