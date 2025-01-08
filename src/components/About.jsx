import { motion } from 'framer-motion'
import { FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa'

const About = () => {
  const experiences = [
    {
      icon: <FaGraduationCap className="text-2xl" />,
      title: "Education",
      organization: "Your University",
      period: "2019 - 2023",
      description: "Bachelor's in Computer Science, focused on Software Development"
    },
    {
      icon: <FaBriefcase className="text-2xl" />,
      title: "Work Experience",
      organization: "Company Name",
      period: "2023 - Present",
      description: "Frontend Developer, responsible for core product development"
    },
    {
      icon: <FaCode className="text-2xl" />,
      title: "Personal Projects",
      organization: "Open Source",
      period: "2022 - Present",
      description: "Active contributor to open source projects"
    }
  ]

  return (
    <section className="section-padding bg-secondary/10" id="about">
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
            <p className="text-gray-300 leading-relaxed">
              I am a passionate frontend developer with a strong foundation in computer science
              and extensive practical experience. I love creative work, excel at solving complex
              technical challenges, and stay current with the latest developments in frontend technology.
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

          {/* Skills Tags */}
          <div className="mt-16">
            <h3 className="text-xl font-bold text-center mb-8">Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "JavaScript", "TypeScript", "React", "Vue",
                "Node.js", "Tailwind CSS", "Git", "Webpack"
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 