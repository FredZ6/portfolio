import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: "电商平台",
      description: "基于 React + TypeScript 开发的现代电商平台，包含商品展示、购物车、支付等功能",
      image: "/projects/ecommerce.jpg", // 需要添加项目截图
      tags: ["React", "TypeScript", "Redux", "Tailwind CSS"],
      github: "https://github.com/yourusername/ecommerce",
      demo: "https://demo-ecommerce.com",
      features: [
        "响应式设计，支持多端适配",
        "状态管理使用 Redux Toolkit",
        "支持支付宝/微信支付接口",
        "商品搜索和筛选功能"
      ]
    },
    {
      title: "在线教育平台",
      description: "使用 Vue3 + Vite 构建的在线教育平台，支持视频课程播放、课程管理等功能",
      image: "/projects/education.jpg",
      tags: ["Vue3", "Vite", "Element Plus", "Node.js"],
      github: "https://github.com/yourusername/education",
      demo: "https://demo-education.com",
      features: [
        "自定义视频播放器",
        "课程进度追踪",
        "用户认证和权限管理",
        "课程评价和评论系统"
      ]
    },
    {
      title: "社区论坛",
      description: "全栈项目，前端使用 Next.js，后端使用 Node.js 和 MongoDB",
      image: "/projects/forum.jpg",
      tags: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/yourusername/forum",
      demo: "https://demo-forum.com",
      features: [
        "服务端渲染优化SEO",
        "实时消息通知",
        "富文本编辑器",
        "图片上传和处理"
      ]
    }
  ]

  return (
    <section className="section-padding bg-secondary/10" id="项目">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="heading text-center">项目作品</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark rounded-lg overflow-hidden group"
              >
                {/* 项目图片 */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* 链接悬浮层 */}
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-primary transition-colors"
                    >
                      <FaGithub size={24} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-primary transition-colors"
                    >
                      <FaExternalLinkAlt size={24} />
                    </a>
                  </div>
                </div>

                {/* 项目信息 */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  
                  {/* 技术标签 */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* 主要功能列表 */}
                  <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 更多项目链接 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <span>查看更多项目</span>
              <FaExternalLinkAlt size={14} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 