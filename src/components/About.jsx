import { motion } from 'framer-motion'
import { FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa'

const About = () => {
  const experiences = [
    {
      icon: <FaGraduationCap className="text-2xl" />,
      title: "Education",
      organization: "University of Manitoba",
      period: "2019 - 2024",
      description: "BSc. Computer Science (Minor in Mathematics)"
    },
    {
      icon: <FaBriefcase className="text-2xl" />,
      title: "Work Experience",
      organization: "DataAnnotation Teach",
      period: "2023 - 2024",
      description: "Full-stack developer responsible for developing and maintaining web applications. Key achievements include implementing RESTful APIs, optimizing database performance, and enhancing user interfaces."
    },
    {
      icon: <FaCode className="text-2xl" />,
      title: "Personal Projects",
      organization: "Independent Development",
      period: "2022 - Present",
      description: "Developed an Android password manager, a task management system, and an E-commerce backend administration platform."
    }
  ]

  const workAchievements = [
    "Designed and implemented scalable RESTful APIs using Spring Boot and Java",
    "Optimized database queries and improved application performance by 40%",
    "Developed responsive front-end interfaces using React and TypeScript",
    "Implemented secure authentication and authorization systems",
    "Collaborated with cross-functional teams to deliver high-quality solutions",
    "Maintained and improved existing codebase through regular refactoring"
  ]

  return (
    <section className="section-padding pt-24 md:pt-20 bg-secondary/10" id="about">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="heading text-center">About Me</h2>
          
          {/* Personal Introduction */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-gray-300 leading-relaxed font-mono tracking-wide">
              A <span className="text-primary">Computer Science</span> graduate with a minor in 
              <span className="text-primary"> Mathematics</span> from the 
              <span className="text-primary/90"> University of Manitoba</span>. 
              I combine <span className="text-primary">strong theoretical foundations</span> with 
              <span className="text-primary"> practical development experience</span> to create 
              <span className="text-primary"> efficient</span> and 
              <span className="text-primary"> scalable</span> solutions. 
              My <span className="text-primary">diverse project portfolio</span> demonstrates my ability 
              to handle both <span className="text-primary/90">frontend</span> and 
              <span className="text-primary/90"> backend</span> development challenges.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="grid md:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark p-6 rounded-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg">
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{exp.title}</h3>
                    <p className="text-sm text-gray-400">{exp.period}</p>
                  </div>
                </div>
                <h4 className="font-medium text-primary mb-2">{exp.organization}</h4>
                <p className="text-gray-400 text-sm">{exp.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Work Achievements */}
          <div className="mt-16 bg-dark p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-6 text-center">Key Achievements</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {workAchievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-2"
                >
                  <span className="text-primary">•</span>
                  <span className="text-gray-300">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 