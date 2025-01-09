import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: "Password Manager Android Application",
      description: "Secure Android app for generating, evaluating, and managing user passwords.",
      image: "/projects/password-manager.jpg",
      tags: ["Android Studio", "SQL", "JUnit", "GitHub"],
      github: "https://github.com/FredZ6",
      features: [
        "Password generation and evaluation system",
        "Secure data storage and retrieval using SQL",
        "Version control and team collaboration via GitHub",
        "Comprehensive testing process including unit tests and automated UI tests",
        "User-friendly interface design"
      ]
    },
    {
      title: "Mobile Life Health Web Project",
      description: "User-friendly mobile web application for health and wellness, featuring calorie tracking, recipe recommendations, and fitness goal management.",
      image: "/projects/health-app.jpg",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/FredZ6",
      features: [
        "Designed and implemented an intuitive mobile interface",
        "Calorie tracking functionality",
        "Recipe recommendation system",
        "Fitness goal management tools",
        "Enhanced user engagement through interactive navigation"
      ]
    },
    {
      title: "E-commerce Website Project",
      description: "Full-stack e-commerce website showcasing user registration, product display, shopping cart, and order processing.",
      image: "/projects/ecommerce.jpg",
      tags: ["React", "Spring Boot", "PostgreSQL", "JWT"],
      github: "https://github.com/FredZ6",
      features: [
        "User registration and JWT-based login",
        "Product listings and detailed views",
        "Shopping cart management",
        "Order creation and checkout"
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
                <div className="relative overflow-hidden h-48 bg-gray-800">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-600 text-sm">Image Coming Soon</span>
                  </div>
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
              href="https://github.com/FredZ6"
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