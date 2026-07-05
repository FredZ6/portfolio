import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, ChevronLeft, ChevronRight, Github, Image as ImageIcon, X } from 'lucide-react'
import PropTypes from 'prop-types'

const PROJECTS = [
  {
    id: 3,
    title: 'Local-First AI Job Copilot',
    description: 'Imports roles, scores fit, generates tailored resumes, and runs reviewable browser prefills before a human decides the final submit.',
    impact: 'URL IMPORT | LLM-POWERED ANALYSIS | PDF RESUMES | REVIEWABLE PREFILL',
    delivery: [
      'End-to-end flow from job import to submission tracking.',
      'Observable automation with screenshots, logs, retries, and run history.',
      'Manual final submit by design.',
    ],
    desktopDelivery: [
      'End-to-end flow from profile setup and job import through analysis, resume review, and submission tracking.',
      'Observable automation with field results, screenshots, worker logs, retries, cancellations, and run history.',
      'Manual final submit by design, keeping review checkpoints visible instead of hiding risk behind one-click apply.',
    ],
    stats: [
      { value: '2', label: 'Providers' },
      { value: '2', label: 'PDF Templates' },
      { value: '1', label: 'Approval Gate' },
    ],
    status: 'Completed',
    techStack: ['Next.js', 'NestJS', 'PostgreSQL', 'Prisma', 'Playwright', 'Docker', 'Redis', 'Temporal'],
    githubUrl: 'https://github.com/FredZ6/JobAgent',
    ctaLabel: 'View Gallery',
    images: [
      {
        src: '/portfolio/projects/job-agent/rolecraft-overview-light.png',
        fullSrc: '/portfolio/projects/job-agent/rolecraft-overview-light.png',
        caption: 'Rolecraft overview workspace',
      },
      {
        src: '/portfolio/projects/job-agent/rolecraft-dashboard-light.png',
        fullSrc: '/portfolio/projects/job-agent/rolecraft-dashboard-light.png',
        caption: 'Executive dashboard',
      },
      {
        src: '/portfolio/projects/job-agent/rolecraft-workflow-runs-light.png',
        fullSrc: '/portfolio/projects/job-agent/rolecraft-workflow-runs-light.png',
        caption: 'Workflow runs filters',
      },
      {
        src: '/portfolio/projects/job-agent/rolecraft-settings-light.png',
        fullSrc: '/portfolio/projects/job-agent/rolecraft-settings-light.png',
        caption: 'Settings control room',
      },
      {
        src: '/portfolio/projects/job-agent/rolecraft-profile-light.png',
        fullSrc: '/portfolio/projects/job-agent/rolecraft-profile-light.png',
        caption: 'Candidate profile',
      },
      {
        src: '/portfolio/projects/job-agent/rolecraft-jobs-light.png',
        fullSrc: '/portfolio/projects/job-agent/rolecraft-jobs-light.png',
        caption: 'Role intake queue',
      },
      {
        src: '/portfolio/projects/job-agent/rolecraft-overview-dark.png',
        fullSrc: '/portfolio/projects/job-agent/rolecraft-overview-dark.png',
        caption: 'Overview dark mode',
      },
    ],
    accent: 'from-emerald-300 to-cyan-500',
  },
  {
    id: 1,
    title: 'Event-Driven Order & Inventory Microservices',
    description: 'AWS order platform with 6 event-driven services, Terraform IaC, and CI/CD release gates.',
    impact: '6 microservices | 3 saga workflows | 6 required CI checks',
    delivery: [
      'Delivered auth, catalog, orders, inventory, payment, and notifications.',
      'Coordinated order, payment, and inventory flows with saga orchestration.',
      'Protected releases with required CI checks and Terraform updates.',
    ],
    desktopDelivery: [
      'Delivered auth, catalog, orders, inventory, payment, and notification services in one event-driven platform.',
      'Used saga orchestration to coordinate order, payment, and inventory state changes.',
      'Protected releases with required CI checks, Terraform updates, and safer deployment discipline.',
    ],
    stats: [
      { value: '6', label: 'Services' },
      { value: '3', label: 'Sagas' },
      { value: '6', label: 'Checks' },
    ],
    status: 'Completed',
    techStack: ['Java 17', 'Spring Boot', 'Microservices', 'AWS', 'Terraform'],
    githubUrl: 'https://github.com/FredZ6/cloud-project',
    ctaLabel: 'View Gallery',
    images: [
      { src: '/portfolio/projects/cloud-order/dashboard_16x10.png', fullSrc: '/portfolio/projects/cloud-order/dashboard_full.png', caption: 'Dashboard' },
      { src: '/portfolio/projects/cloud-order/cloud_01_16x10.png', fullSrc: '/portfolio/projects/cloud-order/cloud_01_full.png', caption: 'System Screen 1' },
      { src: '/portfolio/projects/cloud-order/cloud_02_16x10.png', fullSrc: '/portfolio/projects/cloud-order/cloud_02_full.png', caption: 'System Screen 2' },
      { src: '/portfolio/projects/cloud-order/cloud_03_16x10.png', fullSrc: '/portfolio/projects/cloud-order/cloud_03_full.png', caption: 'System Screen 3' },
      { src: '/portfolio/projects/cloud-order/cloud_04_16x10.png', fullSrc: '/portfolio/projects/cloud-order/cloud_04_full.png', caption: 'System Screen 4' },
      { src: '/portfolio/projects/cloud-order/cloud_05_16x10.png', fullSrc: '/portfolio/projects/cloud-order/cloud_05_full.png', caption: 'System Screen 5' },
      { src: '/portfolio/projects/cloud-order/cloud_06_16x10.png', fullSrc: '/portfolio/projects/cloud-order/cloud_06_full.png', caption: 'System Screen 6' }
    ],
    accent: 'from-sky-400 to-blue-600',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce system (React + Spring Boot + PostgreSQL) covering login, catalog, cart, checkout, and admin order operations.',
    impact: '39 tests | 4 CI/E2E workflows | Docker demo with 6 seeded products',
    delivery: [
      'Shipped customer flows for auth, browsing, cart, checkout, and order management.',
      'Built admin tooling for product maintenance and operational order handling.',
      'Backed the demo with seeded catalog data, Docker orchestration, and CI/E2E automation.',
    ],
    desktopDelivery: [
      'Shipped customer flows for auth, browsing, cart, checkout, and order management across the full storefront path.',
      'Built admin tooling for product maintenance, inventory-facing updates, and operational order handling.',
      'Backed the demo with seeded catalog data, Docker orchestration, and CI/E2E automation for repeatable setup.',
    ],
    stats: [
      { value: '39', label: 'Tests' },
      { value: '4', label: 'Flows' },
      { value: '6', label: 'Products' },
    ],
    status: 'Completed',
    techStack: ['React', 'Vite', 'Spring Security', 'JWT', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com/FredZ6/e-commerce',
    ctaLabel: 'View Gallery',
    images: [
      { src: '/portfolio/projects/ecommerce/home_16x10.png', fullSrc: '/portfolio/projects/ecommerce/home.png', caption: 'Home Page' },
      { src: '/portfolio/projects/ecommerce/product_16x10.png', fullSrc: '/portfolio/projects/ecommerce/product.png', caption: 'Products Page' },
      { src: '/portfolio/projects/ecommerce/product_detail_16x10.png', fullSrc: '/portfolio/projects/ecommerce/product_detail.png', caption: 'Product Detail' },
      { src: '/portfolio/projects/ecommerce/manage_16x10.png', fullSrc: '/portfolio/projects/ecommerce/manage.png', caption: 'Admin Management' },
    ],
    accent: 'from-cyan-400 to-sky-500',
  },
]

const buildDeepWikiUrl = (githubUrl) => {
  if (!githubUrl) return '#'
  return githubUrl.replace('https://github.com/', 'https://deepwiki.com/')
}

const Projects = () => {
  const shouldReduceMotion = useReducedMotion()
  const [lightboxData, setLightboxData] = useState(null)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const dialogRef = useRef(null)
  const closeButtonRef = useRef(null)
  const triggerRef = useRef(null)
  const previousOverflowRef = useRef('')

  const openLightbox = (project, event) => {
    if (!project.images?.length) return

    triggerRef.current = event.currentTarget
    previousOverflowRef.current = document.body.style.overflow
    setLightboxData({ images: project.images, title: project.title })
    setActiveImageIndex(0)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = useCallback(() => {
    const previousOverflow = previousOverflowRef.current
    setLightboxData(null)
    document.body.style.overflow = previousOverflow
    window.requestAnimationFrame(() => triggerRef.current?.focus())
  }, [])

  useEffect(() => {
    if (!lightboxData) return undefined

    closeButtonRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeLightbox()
      if (event.key === 'ArrowLeft') {
        setActiveImageIndex((previous) => Math.max(0, previous - 1))
      }
      if (event.key === 'ArrowRight') {
        setActiveImageIndex((previous) => Math.min(lightboxData.images.length - 1, previous + 1))
      }
      if (event.key !== 'Tab') return

      const focusable = dialogRef.current?.querySelectorAll('button:not(:disabled)')
      if (!focusable?.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [closeLightbox, lightboxData])

  useEffect(() => () => {
    document.body.style.overflow = previousOverflowRef.current
  }, [])

  const activeImage = lightboxData?.images[activeImageIndex]
  const headingMotion = shouldReduceMotion
    ? {}
    : { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 } }
  const stackVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.13 } },
  }
  const cardVariants = shouldReduceMotion
    ? { hidden: {}, visible: {} }
    : { hidden: { opacity: 0 }, visible: { opacity: 1 } }

  return (
    <>
      <section className="projects-editorial-section" id="projects">
        <div className="projects-editorial-grid" aria-hidden="true" />
        <div className="projects-editorial-orb projects-editorial-orb--one" aria-hidden="true" />
        <div className="projects-editorial-orb projects-editorial-orb--two" aria-hidden="true" />

        <div className="projects-editorial-inner">
          <motion.header
            className="projects-editorial-heading"
            {...headingMotion}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="projects-editorial-kicker">Selected systems / Production-minded builds</p>
            <h2>
              <span>Choose Your</span>
              <span className="projects-editorial-outline">Build</span>
            </h2>
            <p className="projects-editorial-intro">
              Three production-minded builds. Pick a system, inspect the decisions, then open the full gallery.
            </p>
          </motion.header>

          <motion.div
            className="project-editorial-stack"
            variants={stackVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
          >
            {PROJECTS.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                animationVariants={cardVariants}
                onOpenLightbox={(event) => openLightbox(project, event)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxData && (
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="project-lightbox theme-modal-overlay"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={`${lightboxData.title} gallery`}
          >
            <motion.div
              ref={dialogRef}
              className="project-lightbox__dialog"
              onClick={(event) => event.stopPropagation()}
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 }}
            >
              <div className="project-lightbox__topline">
                <div>
                  <span>{lightboxData.title}</span>
                  <strong>{activeImage.caption}</strong>
                </div>
                <button ref={closeButtonRef} onClick={closeLightbox} className="project-lightbox__icon" aria-label="Close gallery">
                  <X size={24} aria-hidden="true" />
                </button>
              </div>
              <div className="project-lightbox__stage">
                <div className="project-image-fallback project-image-fallback--lightbox">
                  <ImageIcon size={42} aria-hidden="true" />
                  <span>Preview unavailable</span>
                </div>
                <img
                  key={activeImage.fullSrc || activeImage.src}
                  src={activeImage.fullSrc || activeImage.src}
                  alt={activeImage.caption}
                  className="project-lightbox__image"
                  onError={(event) => { event.currentTarget.hidden = true }}
                />
              </div>
              <div className="project-lightbox__controls">
                <button
                  disabled={activeImageIndex === 0}
                  onClick={() => setActiveImageIndex(prev => prev - 1)}
                  className="project-lightbox__icon"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} aria-hidden="true" />
                </button>
                <span aria-live="polite">
                  {String(activeImageIndex + 1).padStart(2, '0')} / {String(lightboxData.images.length).padStart(2, '0')}
                </span>
                <button
                  disabled={activeImageIndex === lightboxData.images.length - 1}
                  onClick={() => setActiveImageIndex(prev => prev + 1)}
                  className="project-lightbox__icon"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} aria-hidden="true" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

const ProjectCard = ({ project, index, animationVariants, onOpenLightbox }) => {
  const deepWikiUrl = buildDeepWikiUrl(project.githubUrl)
  const previewImage = project.images[0]?.src

  return (
    <motion.article
      className="project-editorial-card"
      data-project={String(index + 1).padStart(2, '0')}
      variants={animationVariants}
      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="project-editorial-card__rule" aria-hidden="true" />
      <header className="project-editorial-card__header">
        <span className="project-editorial-card__number">{String(index + 1).padStart(2, '0')}</span>
        <span className="project-editorial-card__status">{project.status} / Build</span>
      </header>

      <h3>{project.title}</h3>
      <p className="project-editorial-card__description">{project.description}</p>
      <p className="project-editorial-card__impact">{project.impact}</p>

      <button
        type="button"
        className="project-editorial-preview"
        onClick={onOpenLightbox}
        aria-label={`Open gallery for ${project.title}`}
      >
        <div className="project-image-fallback">
          <ImageIcon size={42} aria-hidden="true" />
          <span>Preview unavailable</span>
        </div>
        {previewImage ? (
          <img
            src={previewImage}
            alt={`${project.title} preview`}
            onError={(event) => { event.currentTarget.hidden = true }}
          />
        ) : (
          <span className="project-editorial-preview__empty">No preview supplied</span>
        )}
        <span className="project-editorial-preview__label">
          <span>Open case gallery</span>
          <span>{String(project.images.length).padStart(2, '0')} frames</span>
        </span>
      </button>

      <div className="project-editorial-card__body">
        <section aria-label={`${project.title} delivery`}>
          <span className="project-editorial-card__eyebrow">What shipped</span>
          <ul>
            {project.delivery.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <div className="project-editorial-stats" aria-label={`${project.title} project statistics`}>
          {project.stats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="project-editorial-tech" aria-label="Technologies used">
          {project.techStack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>

      <footer className="project-editorial-actions">
        <button type="button" onClick={onOpenLightbox} className="project-editorial-action project-editorial-action--primary">
          <ImageIcon size={18} aria-hidden="true" />
          <span>{project.ctaLabel}</span>
          <small>{project.images.length}</small>
        </button>
        <a
          href={deepWikiUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-editorial-action"
          aria-label={`Explore ${project.title} on DeepWiki`}
        >
          <img src="/portfolio/devin.avif" alt="" />
          <span>DeepWiki</span>
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-editorial-action project-editorial-action--icon"
          aria-label={`View ${project.title} source on GitHub`}
        >
          <Github size={19} aria-hidden="true" />
        </a>
      </footer>
      <div className="project-editorial-card__stamp" aria-hidden="true">
        <span>FZ</span>
        <span>ENGINEERED</span>
      </div>
    </motion.article>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    impact: PropTypes.string.isRequired,
    delivery: PropTypes.arrayOf(PropTypes.string).isRequired,
    desktopDelivery: PropTypes.arrayOf(PropTypes.string),
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      })
    ).isRequired,
    status: PropTypes.string.isRequired,
    techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
    githubUrl: PropTypes.string.isRequired,
    ctaLabel: PropTypes.string.isRequired,
    ctaUrl: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        fullSrc: PropTypes.string,
        caption: PropTypes.string.isRequired,
      })
    ).isRequired,
    accent: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  animationVariants: PropTypes.object.isRequired,
  onOpenLightbox: PropTypes.func.isRequired,
}

export default Projects
