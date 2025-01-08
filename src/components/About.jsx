import { motion } from 'framer-motion'
import { FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa'

const About = () => {
  const experiences = [
    {
      icon: <FaGraduationCap className="text-2xl" />,
      title: "教育经历",
      organization: "你的学校",
      period: "2019 - 2023",
      description: "计算机科学与技术专业，主修软件开发与设计"
    },
    {
      icon: <FaBriefcase className="text-2xl" />,
      title: "工作经历",
      organization: "公司名称",
      period: "2023 - 至今",
      description: "担任前端开发工程师，负责公司核心产品的开发与维护"
    },
    {
      icon: <FaCode className="text-2xl" />,
      title: "个人项目",
      organization: "开源社区",
      period: "2022 - 至今",
      description: "积极参与开源项目，为社区贡献代码"
    }
  ]

  return (
    <section className="section-padding bg-secondary/10" id="关于">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="heading text-center">关于我</h2>
          
          {/* 个人简介 */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-gray-300 leading-relaxed">
              我是一名充满激情的前端开发者，有着扎实的计算机科学基础和丰富的实践经验。
              我热爱创造性的工作，善于解决复杂的技术问题，并且持续关注前端领域的最新发展。
            </p>
          </div>

          {/* 经历时间线 */}
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

          {/* 技能标签 */}
          <div className="mt-16">
            <h3 className="text-xl font-bold text-center mb-8">技术栈</h3>
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