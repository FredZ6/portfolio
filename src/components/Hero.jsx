import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import DecryptedText from '../animation/DecryptedText'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-24 md:pt-20" id="home">
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
            <DecryptedText
              text="Fred Zhang"
              animateOn="view"
              speed={150}
              className="text-white"
              sequential={true}
              revealDirection="center"
            />
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-400 mb-4 md:mb-6">
            <DecryptedText
              text="Full Stack Developer"
              animateOn="view"
              speed={40}
              sequential={true}
            />
          </h2>
          <p className="text-sm md:text-base text-gray-300 mb-6 md:mb-8 max-w-lg mx-auto md:mx-0 font-mono leading-relaxed tracking-wide">
            <DecryptedText
              text="A dedicated full-stack developer with a strong passion for building "
              animateOn="view"
              speed={20}
              sequential={true}
            />
            <span className="text-primary">
              <DecryptedText
                text="scalable"
                animateOn="view"
                speed={170}
                sequential={true}
                delay={1.5}
              />
            </span>
            <DecryptedText text=" and " animateOn="view" speed={20} sequential={true} delay={1.8} />
            <span className="text-primary">
              <DecryptedText
                text="efficient"
                animateOn="view"
                speed={170}
                sequential={true}
                delay={2}
              />
            </span>
            <DecryptedText
              text=" applications. Experienced in both frontend and backend technologies, with expertise in "
              animateOn="view"
              speed={20}
              sequential={true}
              delay={2.3}
            />
            <span className="text-primary/90">
              <DecryptedText text="React" animateOn="view" speed={170} sequential={true} delay={3.5} />
            </span>
            <DecryptedText text=", " animateOn="view" speed={20} sequential={true} delay={3.6} />
            <span className="text-primary/90">
              <DecryptedText text="TypeScript" animateOn="view" speed={170} sequential={true} delay={3.7} />
            </span>
            <DecryptedText text=", " animateOn="view" speed={20} sequential={true} delay={3.8} />
            <span className="text-primary/90">
              <DecryptedText text="Java" animateOn="view" speed={170} sequential={true} delay={3.9} />
            </span>
            <DecryptedText text=", " animateOn="view" speed={20} sequential={true} delay={4.0} />
            <span className="text-primary/90">
              <DecryptedText text="Spring Boot" animateOn="view" speed={170} sequential={true} delay={4.1} />
            </span>
            <DecryptedText text=", and " animateOn="view" speed={20} sequential={true} delay={4.2} />
            <span className="text-primary/90">
              <DecryptedText text="PostgreSQL" animateOn="view" speed={170} sequential={true} delay={4.3} />
            </span>
            <DecryptedText text="." animateOn="view" speed={20} sequential={true} delay={4.4} />
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
              href="mailto:zhanghaifeng0626@gmail.com"
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
              <DecryptedText
                text="Contact Me"
                animateOn="view"
                speed={150}
                sequential={true}
              />
            </motion.a>
            <motion.a
              href="#projects"
              className="border border-primary text-primary px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-lg inline-block hover:bg-primary/10 transition-colors text-sm md:text-base w-32 sm:w-auto text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <DecryptedText
                text="View Projects"
                animateOn="view"
                speed={150}
                sequential={true}
              />
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