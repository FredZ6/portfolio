import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { 
  FaEnvelope, 
  FaPhone,
  FaGithub, 
  FaLinkedin 
} from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const Contact = () => {
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

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "fredzhang026@gmail.com",
      link: "mailto:fredzhang026@gmail.com"
    },
    {
      icon: <FaPhone />,
      label: "Phone",
      value: "+1 (204) 770-3168",
      link: "tel:+12047703168"
    }
  ]

  const socialLinks = [
    {
      icon: <FaGithub />,
      label: "GitHub",
      link: "https://github.com/FredZ6"
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/haifeng-zhang26/"
    }
  ]

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
    <section className="section-padding" id="contact">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="heading text-center">Contact Me</h2>

          {/* Status Message */}
          {submitStatus.show && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`text-center mb-6 p-4 rounded-lg ${
                submitStatus.type === 'success' ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'
              }`}
            >
              {submitStatus.message}
            </motion.div>
          )}

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
              
              {/* Contact List */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 bg-dark rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <div className="text-primary text-xl">{info.icon}</div>
                    <div>
                      <div className="font-medium">{info.label}</div>
                      <div className="text-sm text-gray-400">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <h3 className="text-xl font-bold mb-4">Social Media</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-2xl text-gray-400 hover:text-primary transition-colors"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
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
                      className="w-full px-4 py-2 bg-dark rounded-lg border border-primary/20 focus:ring-2 focus:ring-primary outline-none"
                    />
                  </div>
                  <div>
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
                      className="w-full px-4 py-2 bg-dark rounded-lg border border-primary/20 focus:ring-2 focus:ring-primary outline-none"
                    />
                  </div>
                </div>
                
                <div>
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
                    className="w-full px-4 py-2 bg-dark rounded-lg border border-primary/20 focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>

                <div>
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
                    className="w-full px-4 py-2 bg-dark rounded-lg border border-primary/20 focus:ring-2 focus:ring-primary outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 