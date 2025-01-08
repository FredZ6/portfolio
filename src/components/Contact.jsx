import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  FaEnvelope, 
  FaPhone, 
  FaWeixin,
  FaGithub, 
  FaLinkedin 
} from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: "邮箱",
      value: "your.email@example.com",
      link: "mailto:your.email@example.com"
    },
    {
      icon: <FaPhone />,
      label: "电话",
      value: "+86 123 4567 8900",
      link: "tel:+8612345678900"
    },
    {
      icon: <FaWeixin />,
      label: "微信",
      value: "WeChat_ID",
      link: "#"
    }
  ]

  const socialLinks = [
    {
      icon: <FaGithub />,
      label: "GitHub",
      link: "https://github.com/yourusername"
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      link: "https://linkedin.com/in/yourusername"
    }
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // 这里添加发送表单的逻辑
    // 可以使用 EmailJS 或其他服务
    console.log('Form submitted:', formData)
    
    // 模拟发送延迟
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    
    // 重置表单
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <section className="section-padding" id="联系">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="heading text-center">联系我</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* 联系信息 */}
            <div>
              <h3 className="text-xl font-bold mb-6">联系方式</h3>
              
              {/* 联系方式列表 */}
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

              {/* 社交媒体链接 */}
              <h3 className="text-xl font-bold mb-4">社交媒体</h3>
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

            {/* 联系表单 */}
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
                      姓名
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-dark rounded-lg focus:ring-2 focus:ring-primary outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      邮箱
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-dark rounded-lg focus:ring-2 focus:ring-primary outline-none"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    主题
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-dark rounded-lg focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    消息
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 bg-dark rounded-lg focus:ring-2 focus:ring-primary outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? '发送中...' : '发送消息'}
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