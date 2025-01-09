import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-20 md:pt-0" id="home">
      <div className="container-width grid md:grid-cols-2 gap-4 md:gap-8 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <h2 className="text-primary font-medium text-base md:text-lg mb-2">Hello, I&apos;m</h2>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-2 md:mb-4">
            Fred Zhang
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-400 mb-4 md:mb-6">
            Full Stack Developer
          </h2>
          <p className="text-sm md:text-base text-gray-300 mb-6 md:mb-8 max-w-lg mx-auto md:mx-0">
            A dedicated full-stack developer with a strong passion for building scalable and efficient applications. 
            Experienced in both frontend and backend technologies, with expertise in React, TypeScript, Java, 
            Spring Boot, and PostgreSQL.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center md:justify-start space-x-4 mb-6 md:mb-8">
            <a
              href="https://github.com/FredZ6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FaGithub size={20} className="md:w-6 md:h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/haifeng-zhang26/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FaLinkedin size={20} className="md:w-6 md:h-6" />
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FaEnvelope size={20} className="md:w-6 md:h-6" />
            </a>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-row justify-center md:justify-start space-x-4">
            <motion.a
              href="#contact"
              className="bg-primary text-white px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-lg inline-block hover:bg-primary/90 transition-colors text-sm md:text-base w-32 sm:w-auto text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
            <motion.a
              href="#projects"
              className="border border-primary text-primary px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-lg inline-block hover:bg-primary/10 transition-colors text-sm md:text-base w-32 sm:w-auto text-center"
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
          className="relative mt-8 md:mt-0"
        >
          <div className="w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[532px] md:h-[532px] lg:w-[760px] lg:h-[760px] mx-auto relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-primary/50 blur-2xl opacity-30" />
            <img
              src="/portfolio/avatar.png"
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