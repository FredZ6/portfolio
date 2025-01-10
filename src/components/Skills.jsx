import { motion } from 'framer-motion'
import { 
  FaReact, 
  FaAws,
  FaGitAlt,
  FaDocker,
  FaNodeJs,
  FaExternalLinkAlt
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
  SiGithubactions
} from 'react-icons/si'

const certifications = [
  {
    title: (
      <a
        href="https://www.credly.com/badges/f68690b3-1e68-46d8-ae56-366bd880c0e5/linked_in_profile"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary transition-colors inline-flex items-start justify-center gap-2"
      >
        <FaExternalLinkAlt className="text-sm flex-shrink-0 mt-1" />
        <span className="text-left">AWS Certified Developer Associate (DVA-C02)</span>
      </a>
    )
  },
  {
    title: (
      <a
        href="https://www.credly.com/badges/ff21fdcd-97e7-42a1-9e15-ddf052af8c57/linked_in_profile"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary transition-colors inline-flex items-start justify-center gap-2"
      >
        <FaExternalLinkAlt className="text-sm flex-shrink-0 mt-1" />
        <span className="text-left">AWS Certified Cloud Practitioner (CLF-C02)</span>
      </a>
    )
  }
];

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        {
          name: "React",
          icon: <FaReact />,
          level: 90,
          color: "#61DAFB"
        },
        {
          name: "TypeScript",
          icon: <SiTypescript />,
          level: 90,
          color: "#3178C6"
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs />,
          level: 70,
          color: "#000000"
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />,
          level: 80,
          color: "#06B6D4"
        },
        {
          name: "Material UI",
          icon: <SiMui />,
          level: 60,
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
          level: 90,
          color: "#6DB33F"
        },
        {
          name: "Node.js",
          icon: <FaNodeJs />,
          level: 75,
          color: "#339933"
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql />,
          level: 85,
          color: "#4169E1"
        },
        {
          name: "MongoDB",
          icon: <SiMongodb />,
          level: 85,
          color: "#47A248"
        },
        {
          name: "Redis",
          icon: <SiRedis />,
          level: 85,
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
          level: 90,
          color: "#FF9900"
        },
        {
          name: "Git",
          icon: <FaGitAlt />,
          level: 90,
          color: "#F05032"
        },
        {
          name: "Docker",
          icon: <FaDocker />,
          level: 85,
          color: "#2496ED"
        },
        {
          name: "CI/CD",
          icon: <SiGithubactions />,
          level: 70,
          color: "#2088FF"
        }
      ]
    }
  ]

  return (
    <section className="section-padding pt-24 md:pt-20" id="skills">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="heading text-center">Skills & Expertise</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark p-6 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl" style={{ color: skill.color }}>
                          {skill.icon}
                        </span>
                        <span className="font-medium">{skill.name}</span>
                        <span className="ml-auto text-sm text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: skill.color }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* AWS Certification */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 text-center bg-dark p-6 rounded-lg"
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
                <span className="text-gray-300">AWS Certified Developer Associate (DVA-C02)</span>
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
                <span className="text-gray-300">AWS Certified Cloud Practitioner (CLF-C02)</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 