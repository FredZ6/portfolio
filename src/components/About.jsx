import { motion, useReducedMotion } from 'framer-motion'
import { FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa'

const About = () => {
  const shouldReduceMotion = useReducedMotion()

  const sectionVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.6,
        ease: [0.22, 1, 0.36, 1],
        when: 'beforeChildren',
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.46,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const listVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  }

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
      description: "Built and maintained web application features, APIs, and internal tooling with focus on reliability and code quality."
    },
    {
      icon: <FaCode className="text-2xl" />,
      title: "Personal Projects",
      organization: "Independent Development",
      period: "2022 - Present",
      description: "Delivered portfolio projects spanning mobile apps, cloud-native microservices, and full-stack commerce systems."
    }
  ]

  const workAchievements = [
    "Designed service boundaries and REST APIs using Java and Spring Boot.",
    "Implemented event-driven workflows with RabbitMQ and outbox-based patterns.",
    "Applied AI-assisted, spec-driven implementation to speed delivery while preserving review quality.",
    "Automated CI/CD quality gates with linting, OpenAPI checks, and integration tests.",
    "Provisioned AWS infrastructure using Terraform, ECS, ECR, and remote state.",
    "Improved security and observability with JWT/RBAC, health probes, and structured logs."
  ]

  return (
    <section className="section-padding pt-12" id="about">
      <div className="container-width">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 variants={itemVariants} className="heading text-center">
            About Me
          </motion.h2>
          
          {/* Personal Introduction */}
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-slate-600 leading-relaxed font-mono tracking-wide">
              <span className="text-primary">Computer Science</span> graduate (minor in
              <span className="text-primary"> Mathematics</span>) from the
              <span className="text-primary/90"> University of Manitoba</span>.
              I focus on building maintainable backend systems, clear API contracts, and deployable cloud infrastructure.
              I work with <span className="text-primary">AI-assisted</span>, <span className="text-primary">spec-driven</span> engineering workflows for faster and more predictable delivery.
              My recent work combines <span className="text-primary">microservices</span>, <span className="text-primary">AWS</span>, and
              <span className="text-primary/90"> full-stack delivery</span>.
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div variants={listVariants} className="grid md:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-panel rounded-2xl p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg">
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{exp.title}</h3>
                    <p className="text-sm text-slate-500">{exp.period}</p>
                  </div>
                </div>
                <h4 className="font-medium text-primary mb-2">{exp.organization}</h4>
                <p className="text-slate-600 text-sm">{exp.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Work Achievements */}
          <motion.div variants={itemVariants} className="mt-16 glass-panel rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-6 text-center">Key Achievements</h3>
            <motion.div variants={listVariants} className="grid md:grid-cols-2 gap-4">
              {workAchievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-2"
                >
                  <span className="text-primary">•</span>
                  <span className="text-slate-600">{achievement}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 
