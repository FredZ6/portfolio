import { motion } from 'framer-motion'
import { 
  FaReact, 
  FaVuejs, 
  FaNode, 
  FaGitAlt,
  FaDatabase
} from 'react-icons/fa'
import { 
  SiJavascript, 
  SiTypescript, 
  SiTailwindcss,
  SiWebpack,
  SiDocker
} from 'react-icons/si'

const Skills = () => {
  const skillCategories = [
    {
      title: "前端开发",
      skills: [
        {
          name: "React",
          icon: <FaReact />,
          level: 90,
          color: "#61DAFB"
        },
        {
          name: "Vue.js",
          icon: <FaVuejs />,
          level: 85,
          color: "#4FC08D"
        },
        {
          name: "JavaScript",
          icon: <SiJavascript />,
          level: 95,
          color: "#F7DF1E"
        },
        {
          name: "TypeScript",
          icon: <SiTypescript />,
          level: 85,
          color: "#3178C6"
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />,
          level: 90,
          color: "#06B6D4"
        }
      ]
    },
    {
      title: "后端技术",
      skills: [
        {
          name: "Node.js",
          icon: <FaNode />,
          level: 80,
          color: "#339933"
        },
        {
          name: "数据库",
          icon: <FaDatabase />,
          level: 75,
          color: "#336791"
        }
      ]
    },
    {
      title: "开发工具",
      skills: [
        {
          name: "Git",
          icon: <FaGitAlt />,
          level: 90,
          color: "#F05032"
        },
        {
          name: "Webpack",
          icon: <SiWebpack />,
          level: 80,
          color: "#8DD6F9"
        },
        {
          name: "Docker",
          icon: <SiDocker />,
          level: 70,
          color: "#2496ED"
        }
      ]
    }
  ]

  return (
    <section className="section-padding" id="技能">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="heading text-center">技能专长</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-6">{category.title}</h3>
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

          {/* 补充技能说明 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 text-center text-gray-400"
          >
            <p>
              除了上述技能外，我还具备良好的问题解决能力、团队协作能力和持续学习的热情。
              <br />
              持续关注前端领域的新技术发展，并积极在实际项目中应用新技术。
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 