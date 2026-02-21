import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import PropTypes from 'prop-types'

const springConfig = { stiffness: 170, damping: 18, mass: 0.35 }

const ProjectCard = ({ project, shouldReduceMotion, cardVariants }) => {
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const glowX = useMotionValue(50)
  const glowY = useMotionValue(50)

  const smoothRotateX = useSpring(rotateX, springConfig)
  const smoothRotateY = useSpring(rotateY, springConfig)
  const spotlight = useMotionTemplate`radial-gradient(320px circle at ${glowX}% ${glowY}%, rgba(255,255,255,0.58), rgba(255,255,255,0) 62%)`

  const handleMouseMove = (event) => {
    if (shouldReduceMotion) return

    const bounds = event.currentTarget.getBoundingClientRect()
    const pointerX = (event.clientX - bounds.left) / bounds.width
    const pointerY = (event.clientY - bounds.top) / bounds.height
    const tiltRange = 12

    rotateY.set((pointerX - 0.5) * tiltRange)
    rotateX.set((0.5 - pointerY) * tiltRange)
    glowX.set(pointerX * 100)
    glowY.set(pointerY * 100)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
    glowX.set(50)
    glowY.set(50)
  }

  return (
    <motion.div
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={shouldReduceMotion ? undefined : { y: -8 }}
      style={
        shouldReduceMotion
          ? undefined
          : {
              rotateX: smoothRotateX,
              rotateY: smoothRotateY,
              transformPerspective: 1200,
            }
      }
      className="relative glass-panel rounded-2xl overflow-hidden group hover:border-primary/40 hover:shadow-2xl transition-shadow will-change-transform [transform-style:preserve-3d]"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={shouldReduceMotion ? undefined : { backgroundImage: spotlight }}
      />

      <div className="relative z-10 p-8">
        <h3 className="text-2xl font-bold mb-4 text-slate-900">{project.title}</h3>
        <p className="text-slate-600 text-sm mb-6 leading-relaxed">{project.description}</p>
        {project.impact && (
          <p className="text-xs font-medium uppercase tracking-wide text-primary/90 mb-6">
            {project.impact}
          </p>
        )}

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span key={tag} className="glass-chip px-3 py-1.5 text-xs rounded-full font-medium">
              {tag}
            </span>
          ))}
        </div>

        <ul className="text-sm text-slate-600 space-y-2 list-disc list-inside marker:text-primary mb-6">
          {project.features.map((feature, i) => (
            <li key={i} className="leading-relaxed">
              {feature}
            </li>
          ))}
        </ul>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 glass-outline-button rounded-xl transition-colors"
        >
          <FaGithub size={18} />
          <span>View on GitHub</span>
        </a>
      </div>
    </motion.div>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    impact: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    github: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  shouldReduceMotion: PropTypes.bool.isRequired,
  cardVariants: PropTypes.shape({
    hidden: PropTypes.object,
    show: PropTypes.object,
  }).isRequired,
}

const Projects = () => {
  const shouldReduceMotion = useReducedMotion()

  const sectionVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.65,
        ease: [0.22, 1, 0.36, 1],
        when: 'beforeChildren',
        staggerChildren: shouldReduceMotion ? 0 : 0.14,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const cardsGridVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 22, scale: shouldReduceMotion ? 1 : 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const projects = [
    {
      title: "Cloud Order Platform",
      description: "Cloud-native order platform built on AWS with microservices, Terraform IaC, and CI/CD quality gates.",
      impact: "6 microservices | 3 saga workflows | 6 required CI checks",
      image: "/projects/password-manager.jpg",
      tags: ["Java 17", "Spring Boot", "Microservices", "AWS", "Terraform"],
      github: "https://github.com/FredZ6/cloud-project",
      features: [
        "Delivered 6 services across auth, catalog, ordering, inventory, payment, and notifications.",
        "Implemented Saga + Outbox flows for cross-service consistency and compensation handling.",
        "Provisioned AWS (ECS/ECR + Terraform remote state) with GitHub OIDC CI/CD and spec validation checks."
      ]
    },
    {
      title: "Easy Card",
      description: "iOS app for digital membership card management, barcode workflows, and local persistence.",
      image: "/projects/easy-card.jpg",
      tags: ["SwiftUI", "Core Image", "PhotosUI", "iOS"],
      github: "https://github.com/FredZ6/EasyCard-ios",
      features: [
        "Designed card creation and organization flows with customizable styles.",
        "Implemented barcode scanning and generation using Core Image.",
        "Added notes, receipt attachments, and persistent local storage."
      ]
    },
    {
      title: "E-commerce Website Project",
      description: "Full-stack e-commerce platform with account flows, product catalog, cart, and checkout.",
      image: "/projects/ecommerce.jpg",
      tags: ["React", "Spring Boot", "PostgreSQL", "JWT"],
      github: "https://github.com/FredZ6",
      features: [
        "Built secure authentication and authorization using JWT.",
        "Implemented product listing/detail pages and cart lifecycle logic.",
        "Connected checkout and order creation with backend services."
      ]
    }
  ]

  return (
    <section className="section-padding pt-1" id="projects">
      <div className="container-width">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
        >
          <motion.h2 variants={itemVariants} className="heading text-center">
            Projects
          </motion.h2>

          <motion.div variants={cardsGridVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 [perspective:1200px]">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                shouldReduceMotion={shouldReduceMotion}
                cardVariants={cardVariants}
              />
            ))}
          </motion.div>

          {/* More Projects Link */}
          <motion.div
            variants={itemVariants}
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
