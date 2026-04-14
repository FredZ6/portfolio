import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Github, Image as ImageIcon, X, ChevronLeft, ChevronRight } from 'lucide-react'
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

const getIsMobileViewport = () => {
  if (typeof window === 'undefined') return false
  return window.innerWidth < 768
}

const Projects = () => {
  const targetRef = useRef(null)
  const [lightboxData, setLightboxData] = useState(null)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(getIsMobileViewport)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(getIsMobileViewport())
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end center']
  })

  // Cinematic Entry Animations mapped to vertical scroll progress
  const titleX = useTransform(scrollYProgress, [0.08, 0.48], ['-30vw', '0vw'])
  const titleOpacity = useTransform(scrollYProgress, [0.08, 0.3], [0, 1])

  const cardsX = useTransform(scrollYProgress, [0.12, 0.72], ['-50vw', '0vw'])
  const cardsOpacity = useTransform(scrollYProgress, [0.12, 0.44], [0, 1])

  const titleMotionStyle = isMobile ? { x: 0, opacity: 1 } : { x: titleX, opacity: titleOpacity }
  const cardsMotionStyle = isMobile ? { x: 0, opacity: 1 } : { x: cardsX, opacity: cardsOpacity }

  const openLightbox = (projectImages) => {
    if (!projectImages?.length) return

    setLightboxData(projectImages)
    setActiveImageIndex(0)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxData(null)
    document.body.style.overflow = ''
  }

  return (
    <>
      <section ref={targetRef} className="relative z-10 py-24 sm:py-32 overflow-hidden" id="projects">
        <div className="container-width px-4 sm:px-6 lg:px-8">
          <motion.div style={titleMotionStyle} className="mb-16">
            <h2 className="heading inline-block">FEATURED SYSTEMS</h2>
            <p className="project-section-guidance mt-4 max-w-2xl text-sm md:text-base font-medium tracking-wide border-l-2 border-primary pl-4 opacity-80 uppercase shadow-[inset_1px_0_10px_rgba(56,189,248,0.12)]">
              Explore architectural implementations and detailed system galleries.
            </p>
          </motion.div>

          <motion.div style={cardsMotionStyle} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {PROJECTS.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onOpenLightbox={() => openLightbox(project.images)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="theme-modal-overlay fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8"
            onClick={closeLightbox}
          >
            <div className="flex w-full max-w-6xl flex-col items-center gap-6" onClick={(e) => e.stopPropagation()}>
              <div className="relative w-full aspect-[16/10] sm:aspect-video rounded-3xl overflow-hidden glass-panel-strong">
                <div className="absolute top-4 right-4 z-50 flex gap-2">
                  <button onClick={closeLightbox} className="theme-icon-button theme-danger-hover flex h-12 w-12 items-center justify-center rounded-full">
                    <X size={24} />
                  </button>
                </div>

                <img
                  src={lightboxData[activeImageIndex].fullSrc || lightboxData[activeImageIndex].src}
                  alt={lightboxData[activeImageIndex].caption}
                  className="theme-modal-image h-full w-full object-contain"
                />
              </div>

              <div className="theme-lightbox-controls glass-panel z-10 flex items-center gap-6 rounded-full px-6 py-3">
                <button
                  disabled={activeImageIndex === 0}
                  onClick={() => setActiveImageIndex(prev => prev - 1)}
                  className="theme-lightbox-nav disabled:opacity-30"
                >
                  <ChevronLeft size={24} />
                </button>
                <span className="theme-emphasis text-sm font-bold tracking-widest">
                  {activeImageIndex + 1} / {lightboxData.length}
                </span>
                <button
                  disabled={activeImageIndex === lightboxData.length - 1}
                  onClick={() => setActiveImageIndex(prev => prev + 1)}
                  className="theme-lightbox-nav disabled:opacity-30"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

const ProjectCard = ({ project, index, onOpenLightbox }) => {
  const deepWikiUrl = buildDeepWikiUrl(project.githubUrl)
  const previewImage = project.images[0]?.src

  return (
    <div className="group relative isolate flex flex-col overflow-hidden rounded-[2.5rem] glass-panel-strong transition-[transform,box-shadow] duration-300 sm:transform-gpu sm:[-webkit-mask-image:-webkit-radial-gradient(white,black)] sm:hover:-translate-y-2 sm:hover:shadow-[0_20px_40px_rgba(56,189,248,0.15)] sm:focus-within:-translate-y-2 sm:focus-within:shadow-[0_20px_40px_rgba(56,189,248,0.15)]">
      {/* Background Hover Glow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-5 transition-opacity duration-700 pointer-events-none`} />

      {/* Image Preview Header */}
      <div
        className="relative aspect-[16/10] w-full overflow-hidden rounded-t-[2.5rem] cursor-pointer sm:transform-gpu sm:[-webkit-mask-image:-webkit-radial-gradient(white,black)]"
        onClick={onOpenLightbox}
        aria-label={`Open gallery for ${project.title}`}
      >
        {previewImage ? (
          <img
            src={previewImage}
            alt={`${project.title} Preview`}
            className="h-full w-full object-cover transform-gpu transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-black/20 flex items-center justify-center">
            <ImageIcon size={48} className="text-white/20" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
        
        {/* Gallery Indicator & Status */}
        <div className="absolute bottom-4 left-5 right-5 flex justify-between items-end">
          <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#f8fafc] backdrop-blur-md">
            {project.status}
          </span>
          <span className="flex items-center gap-2 rounded-full border border-primary/30 bg-primary/20 pl-3 pr-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#f8fafc] backdrop-blur-md transition-all duration-300 group-hover:bg-primary/80">
            <ImageIcon size={14} className="group-hover:scale-110 transition-transform" />
            Gallery ({project.images.length})
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div>
          <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
            Featured 0{index + 1}
          </div>
          <h3 className="text-2xl font-bold leading-tight theme-surface-title">
            {project.title}
          </h3>
        </div>

        <p className="mt-4 text-sm leading-relaxed theme-surface-copy line-clamp-3">
          {project.description}
        </p>

        {/* Stack Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <span key={tech} className="rounded-full border border-[color:var(--surface-card-border)] bg-[color:var(--surface-card-bg)] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-widest theme-surface-meta">
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="rounded-full border border-[color:var(--surface-card-border)] bg-[color:var(--surface-card-bg)] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-widest theme-surface-meta">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Action Row */}
        <div className="mt-auto pt-8 flex items-center gap-3">
          <a
            href={deepWikiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="theme-nav-button project-gallery-cta project-card-link-glow group flex flex-1 items-center justify-between gap-2 rounded-2xl py-3 px-5 text-[11px] font-black uppercase tracking-[0.15em]"
          >
            <div className="relative z-[1] flex items-center gap-3">
              <span className="project-gallery-cta__icon-shell flex h-8 w-8 items-center justify-center rounded-xl border border-[color:var(--icon-button-border)] bg-[color:var(--icon-button-bg)]">
                <img
                  src="/portfolio/devin.avif"
                  alt="Devin Logo"
                  className="h-4 w-4 rounded-sm object-cover"
                />
              </span>
              <span>DEEP WIKI</span>
            </div>
            <span className="project-card-action-orb relative z-[1] flex h-7 w-7 items-center justify-center rounded-full border border-[color:var(--icon-button-border)] bg-[color:var(--icon-button-bg)] transition-transform duration-300 group-hover:translate-x-0.5">
              <ChevronRight size={14} />
            </span>
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="theme-nav-button project-card-link-glow project-card-link-glow--repo group flex h-[56px] w-[90px] items-center justify-center gap-2 rounded-2xl py-3 px-5 text-[11px] font-bold uppercase tracking-widest transition-all"
          >
            <span className="relative z-[1] flex items-center justify-center">
              <Github size={16} />
            </span>
          </a>
        </div>
      </div>
    </div>
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
  onOpenLightbox: PropTypes.func.isRequired,
}

export default Projects
