import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Modern e-commerce platform built with React + TypeScript, featuring product showcase, shopping cart, and payment integration",
      image: "/projects/ecommerce.jpg",
      tags: ["React", "TypeScript", "Redux", "Tailwind CSS"],
      github: "https://github.com/yourusername/ecommerce",
      demo: "https://demo-ecommerce.com",
      features: [
        "Responsive design for all devices",
        "State management with Redux Toolkit",
        "Payment gateway integration",
        "Product search and filtering"
      ]
    },
    {
      title: "Online Learning Platform",
      description: "Educational platform built with Vue3 + Vite, supporting video courses and course management",
      image: "/projects/education.jpg",
      tags: ["Vue3", "Vite", "Element Plus", "Node.js"],
      github: "https://github.com/yourusername/education",
      demo: "https://demo-education.com",
      features: [
        "Custom video player",
        "Course progress tracking",
        "User authentication",
        "Course rating system"
      ]
    },
    {
      title: "Community Forum",
      description: "Full-stack project using Next.js for frontend and Node.js with MongoDB for backend",
      image: "/projects/forum.jpg",
      tags: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/yourusername/forum",
      demo: "https://demo-forum.com",
      features: [
        "Server-side rendering",
        "Real-time notifications",
        "Rich text editor",
        "Image upload system"
      ]
    }
  ]

  return (
    <section className="section-padding bg-secondary/10" id="projects">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="heading text-center">Projects</h2>

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
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Link Overlay */}
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

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  
                  {/* Tech Stack */}
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

                  {/* Key Features */}
                  <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* More Projects Link */}
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
              <span>View More Projects</span>
              <FaExternalLinkAlt size={14} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 