import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding" id="home">
      <div className="container-width grid md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-primary font-medium text-lg mb-2">Hello, I&apos;m</h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Fred Zhang
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-400 mb-6">
            Full Stack Developer
          </h2>
          <p className="text-gray-300 mb-8 max-w-lg">
            A dedicated full-stack developer with a strong passion for building scalable and efficient applications. 
            Experienced in both frontend and backend technologies, with expertise in React, TypeScript, Java, 
            Spring Boot, and PostgreSQL.
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/FredZ6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/haifeng-zhang26/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
          
          {/* CTA Buttons */}
          <div className="mt-8 space-x-4">
            <motion.a
              href="#contact"
              className="bg-primary text-white px-6 py-3 rounded-lg inline-block hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
            <motion.a
              href="#projects"
              className="border border-primary text-primary px-6 py-3 rounded-lg inline-block hover:bg-primary/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] mx-auto relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-primary/50 blur-2xl opacity-30" />
            <img
              src="/avatar.jpg"
              alt="Profile Picture"
              className="rounded-full w-full h-full object-cover relative z-10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 