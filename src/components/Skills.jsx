import { motion, useReducedMotion } from 'framer-motion'
import { 
  FaReact, 
  FaAws,
  FaGitAlt,
  FaDocker,
  FaNodeJs
} from 'react-icons/fa'
import { 
  SiTypescript, 
  SiTailwindcss,
  SiNextdotjs,
  SiSpring,
  SiMui,
  SiRedis,
  SiMongodb,
  SiPostgresql,
  SiGithubactions,
  SiKubernetes
} from 'react-icons/si'

const Skills = () => {
  const shouldReduceMotion = useReducedMotion()

  const sectionVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0.45, y: shouldReduceMotion ? 0 : 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.15 : 0.44,
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
        duration: shouldReduceMotion ? 0.15 : 0.34,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const cardsGridVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.07,
      },
    },
  }

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        {
          name: "React",
          icon: <FaReact />,
          color: "#61DAFB"
        },
        {
          name: "TypeScript",
          icon: <SiTypescript />,
          color: "#3178C6"
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs />,
          color: "#000000"
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />,
          color: "#06B6D4"
        },
        {
          name: "Material UI",
          icon: <SiMui />,
          color: "#007FFF"
        }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        {
          name: "Java Spring Boot",
          icon: <SiSpring />,
          color: "#6DB33F"
        },
        {
          name: "Node.js",
          icon: <FaNodeJs />,
          color: "#339933"
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql />,
          color: "#4169E1"
        },
        {
          name: "MongoDB",
          icon: <SiMongodb />,
          color: "#47A248"
        },
        {
          name: "Redis",
          icon: <SiRedis />,
          color: "#DC382D"
        }
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        {
          name: "AWS",
          icon: <FaAws />,
          color: "#FF9900"
        },
        {
          name: "Git",
          icon: <FaGitAlt />,
          color: "#F05032"
        },
        {
          name: "Docker",
          icon: <FaDocker />,
          color: "#2496ED"
        },
        {
          name: "Kubernetes",
          icon: <SiKubernetes />,
          color: "#326CE5"
        },
        {
          name: "CI/CD",
          icon: <SiGithubactions />,
          color: "#2088FF"
        }
      ]
    }
  ]

  return (
    <section className="section-padding pt-1" id="skills">
      <div className="container-width">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.06 }}
        >
          <motion.h2 variants={itemVariants} className="heading text-center">
            Skills & Expertise
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="mb-16 text-center glass-panel rounded-2xl p-6"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <FaAws className="text-[#FF9900] text-2xl" />
              <h3 className="text-xl font-bold">Certification</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center">
                <a
                  href="https://www.credly.com/badges/f68690b3-1e68-46d8-ae56-366bd880c0e5/linked_in_profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-2"
                >
                  <img 
                    src="/portfolio/dvac02.png" 
                    alt="AWS Developer Associate" 
                    className="w-48 h-48 object-contain hover:scale-105 transition-transform"
                  />
                </a>
                <span className="text-slate-600">AWS Certified Developer Associate (DVA-C02)</span>
              </div>
              <div className="flex flex-col items-center">
                <a
                  href="https://www.credly.com/badges/ff21fdcd-97e7-42a1-9e15-ddf052af8c57/linked_in_profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-2"
                >
                  <img 
                    src="/portfolio/clf-c02.png" 
                    alt="AWS Cloud Practitioner" 
                    className="w-48 h-48 object-contain hover:scale-105 transition-transform"
                  />
                </a>
                <span className="text-slate-600">AWS Certified Cloud Practitioner (CLF-C02)</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={cardsGridVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="glass-panel rounded-2xl p-6 hover:border-primary/40 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: shouldReduceMotion ? 1 : 0.65, x: shouldReduceMotion ? 0 : -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: shouldReduceMotion ? 0.15 : 0.34, delay: shouldReduceMotion ? 0 : skillIndex * 0.05 }}
                      viewport={{ once: true, amount: 0.1 }}
                      className="group flex min-h-[88px] w-full items-center gap-3 rounded-xl border border-white/60 bg-white/55 px-4 py-3 shadow-sm backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-white/75 hover:shadow-md"
                    >
                      <span
                        className="text-2xl transition-transform duration-300 group-hover:scale-110"
                        style={{ color: skill.color }}
                      >
                        {skill.icon}
                      </span>
                      <span className="font-medium leading-tight text-slate-800">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 
