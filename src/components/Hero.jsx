import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding" id="首页">
      <div className="container-width grid md:grid-cols-2 gap-8 items-center">
        {/* 左侧文字部分 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-primary font-medium text-lg mb-2">你好，我是</h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            你的名字
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-400 mb-6">
            前端开发工程师
          </h2>
          <p className="text-gray-300 mb-8 max-w-lg">
            热爱编程和设计的开发者，专注于创建优秀的用户体验和交互设计。
            擅长 React、TypeScript 和现代前端技术栈。
          </p>
          
          {/* 社交媒体链接 */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/你的用户名"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/你的用户名"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:你的邮箱"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
          
          {/* CTA 按钮 */}
          <div className="mt-8 space-x-4">
            <motion.a
              href="#联系"
              className="bg-primary text-white px-6 py-3 rounded-lg inline-block hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              联系我
            </motion.a>
            <motion.a
              href="#项目"
              className="border border-primary text-primary px-6 py-3 rounded-lg inline-block hover:bg-primary/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              查看作品
            </motion.a>
          </div>
        </motion.div>

        {/* 右侧头像部分 */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] mx-auto relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-primary/50 blur-2xl opacity-30" />
            <img
              src="/你的头像.jpg" // 记得替换成你的头像图片
              alt="个人头像"
              className="rounded-full w-full h-full object-cover relative z-10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 