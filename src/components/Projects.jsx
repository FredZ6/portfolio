import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'

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
    <section className="section-padding pt-24 md:pt-20" id="projects">
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
                className="bg-dark rounded-lg overflow-hidden group border-2 border-primary/20 hover:border-primary transition-colors"
              >
                {/* Project Info */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white/90">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">{project.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-primary/10 text-primary text-xs rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Key Features */}
                  <ul className="text-sm text-gray-400 space-y-2 list-disc list-inside marker:text-primary">
                    {project.features.map((feature, i) => (
                      <li key={i} className="leading-relaxed">{feature}</li>
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