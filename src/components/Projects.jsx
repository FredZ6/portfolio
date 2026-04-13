import { useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { ExternalLink, Github, Image as ImageIcon, X, ChevronRight, ChevronLeft } from 'lucide-react'
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
        src: '/portfolio/projects/job-agent/application-review-automation-sessions-16x9.png',
        fullSrc: '/portfolio/projects/job-agent/application-review-automation-sessions-16x9.png',
        caption: 'Application review automation sessions',
      },
      {
        src: '/portfolio/projects/job-agent/job-detail-workflow-runs-16x9.png',
        fullSrc: '/portfolio/projects/job-agent/job-detail-workflow-runs-16x9.png',
        caption: 'Job detail workflow runs',
      },
      {
        src: '/portfolio/projects/job-agent/dashboard-overview-16x9.png',
        fullSrc: '/portfolio/projects/job-agent/dashboard-overview-16x9.png',
        caption: 'Dashboard overview',
      },
      {
        src: '/portfolio/projects/job-agent/resume-review-pdf-preview-16x9.png',
        fullSrc: '/portfolio/projects/job-agent/resume-review-pdf-preview-16x9.png',
        caption: 'Resume review PDF preview',
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
  const targetRef = useRef(null)
  const scrollContainerRef = useRef(null)
  const [activeMobileProjectIndex, setActiveMobileProjectIndex] = useState(0)
  const activeMobileProject = PROJECTS[activeMobileProjectIndex]

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end end']
  })

  // Cinematic Entry Animations mapped to vertical scroll progress
  const titleX = useTransform(scrollYProgress, [0.08, 0.48], ['-30vw', '0vw'])
  const titleOpacity = useTransform(scrollYProgress, [0.08, 0.3], [0, 1])

  const cardsX = useTransform(scrollYProgress, [0.12, 0.72], ['-50vw', '0vw'])
  const cardsOpacity = useTransform(scrollYProgress, [0.12, 0.44], [0, 1])

  const buttonsX = useTransform(scrollYProgress, [0.16, 0.76], ['-30vw', '0vw'])
  const buttonsOpacity = useTransform(scrollYProgress, [0.16, 0.48], [0, 1])

  const getScrollTargets = () => {
    if (!scrollContainerRef.current) return []

    return Array.from(scrollContainerRef.current.querySelectorAll('[data-scroll-card]'))
  }

  const getCenteredCardIndex = () => {
    const container = scrollContainerRef.current
    if (!container) return -1

    const targets = getScrollTargets()
    if (!targets.length) return -1

    const viewportCenter = container.scrollLeft + container.clientWidth / 2

    return targets.reduce((closestIndex, target, index) => {
      const targetCenter = target.offsetLeft + target.offsetWidth / 2
      const closestTarget = targets[closestIndex]
      const closestCenter = closestTarget.offsetLeft + closestTarget.offsetWidth / 2

      return Math.abs(targetCenter - viewportCenter) < Math.abs(closestCenter - viewportCenter)
        ? index
        : closestIndex
    }, 0)
  }

  const centerCardAtIndex = (targetIndex) => {
    const container = scrollContainerRef.current
    if (!container) return

    const targets = getScrollTargets()
    if (!targets.length) return

    const safeIndex = Math.min(Math.max(targetIndex, 0), targets.length - 1)
    const nextTarget = targets[safeIndex]
    const nextLeft = nextTarget.offsetLeft - (container.clientWidth - nextTarget.offsetWidth) / 2

    container.scrollTo({
      left: Math.max(0, nextLeft),
      behavior: 'smooth',
    })
  }

  const scrollToCard = (direction) => {
    const currentIndex = getCenteredCardIndex()
    if (currentIndex === -1) return

    centerCardAtIndex(currentIndex + direction)
  }

  const handleDesktopCardClick = (event, targetIndex) => {
    if (event.target instanceof Element && event.target.closest('a, button')) return

    const currentIndex = getCenteredCardIndex()
    if (currentIndex === targetIndex) return

    centerCardAtIndex(targetIndex)
  }

  const scrollPrev = () => scrollToCard(-1)

  const scrollNext = () => scrollToCard(1)
  const showPreviousMobileProject = () => setActiveMobileProjectIndex((current) => Math.max(current - 1, 0))
  const showNextMobileProject = () => setActiveMobileProjectIndex((current) => Math.min(current + 1, PROJECTS.length - 1))

  const [lightboxData, setLightboxData] = useState(null)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

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
      <section ref={targetRef} className="relative mt-0 bg-transparent pt-[calc(env(safe-area-inset-top)+2rem)] pb-[calc(env(safe-area-inset-bottom)+6.5rem)] sm:-mt-[8vh] sm:h-[124vh] sm:pt-0 sm:pb-0 lg:-mt-[10vh] lg:h-[120vh]" id="projects">
        {/* Sticky wrapper */}
        <div className="relative w-full overflow-visible sm:sticky sm:top-0 sm:flex sm:h-screen sm:items-center sm:overflow-hidden">
          {/* Background Title (Animated) */}
          <motion.div
            style={{ x: titleX, opacity: titleOpacity }}
            className="relative z-10 mx-auto mb-5 w-[92vw] max-w-sm px-1 pointer-events-none sm:absolute sm:top-[29%] sm:left-16 sm:mb-0 sm:w-full sm:max-w-sm sm:px-0 md:top-[29%] md:left-16 lg:top-[30%] lg:left-24"
          >
            <h2 className="theme-section-title text-4xl sm:text-7xl font-black text-transparent bg-clip-text">
              FEATURED<br />SYSTEMS
            </h2>
            <p className="project-section-guidance mt-3 text-[11px] font-medium tracking-wide border-l-2 border-primary pl-4 uppercase sm:mt-4 sm:text-sm shadow-[inset_1px_0_10px_rgba(56,189,248,0.12)] py-1">
              <span className="sm:hidden">Use buttons to explore<br /> architectural implementations.</span>
              <span className="hidden sm:inline">Swipe, click cards, or use buttons to explore<br /> architectural implementations.</span>
            </p>
          </motion.div>

          <div className="w-full sm:hidden">
            <div className="mx-auto w-[92vw]">
              <div className="project-mobile-console mb-4 flex items-center justify-between gap-3 rounded-full px-4 py-3">
                <button
                  type="button"
                  onClick={showPreviousMobileProject}
                  aria-label="Show previous project"
                  disabled={activeMobileProjectIndex === 0}
                  className="theme-utility-orb flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors disabled:cursor-not-allowed disabled:opacity-35"
                >
                  <ChevronLeft size={20} />
                </button>

                <div className="min-w-0 flex-1 text-center">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                    Project {String(activeMobileProjectIndex + 1).padStart(2, '0')} / {String(PROJECTS.length).padStart(2, '0')}
                  </p>
                  <p className="mt-1 truncate text-[10px] font-medium uppercase tracking-[0.14em] text-primary/80">
                    {activeMobileProject.title}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={showNextMobileProject}
                  aria-label="Show next project"
                  disabled={activeMobileProjectIndex === PROJECTS.length - 1}
                  className="theme-utility-orb flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors disabled:cursor-not-allowed disabled:opacity-35"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              <ProjectCard
                project={activeMobileProject}
                index={activeMobileProjectIndex}
                onOpenLightbox={() => openLightbox(activeMobileProject.images)}
              />
            </div>
          </div>

          {/* Native Horizontal Scroll Container (Animated Entry) */}
          <motion.div
            className="hidden sm:block sm:absolute sm:inset-0 sm:h-full sm:pt-24 lg:pt-32"
            initial={false}
          >
            <div
              ref={scrollContainerRef}
              className="relative z-20 w-full overflow-x-auto overflow-y-visible custom-scrollbar snap-x snap-mandatory sm:h-full sm:overflow-y-hidden"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <motion.div
                style={{ x: cardsX, opacity: cardsOpacity }}
                className="flex w-max min-w-full items-start gap-8 sm:h-full sm:items-start sm:gap-16 lg:gap-24 pl-[calc((100vw-92vw)/2)] pr-[calc((100vw-85vw)/2)] sm:pl-[calc((100vw-min(72vw,58rem))/2)] sm:pr-[calc((100vw-50vw)/2)] lg:pl-[calc((100vw-min(54vw,72rem))/2)] lg:pr-[calc((100vw-30vw)/2)]"
                initial={false}
              >
                {PROJECTS.map((project, index) => (
                  <div
                    key={project.id}
                    data-scroll-card
                    onClick={(event) => handleDesktopCardClick(event, index)}
                    className="snap-center shrink-0 flex items-start sm:h-full sm:items-start sm:cursor-pointer"
                  >
                    <ProjectCard
                      project={project}
                      index={index}
                      onOpenLightbox={() => openLightbox(project.images)}
                    />
                  </div>
                ))}

                {/* End Cap */}
                <div data-scroll-card className="snap-center shrink-0 w-[85vw] sm:w-[50vw] lg:w-[30vw] flex items-center justify-center">
                  <a
                    href="https://github.com/FredZ6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-4 group cursor-pointer"
                  >
                    <div className="project-endcap-orb w-24 h-24 rounded-full glass-panel-strong flex items-center justify-center transition-all group-hover:bg-primary group-hover:scale-110 shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_40px_rgba(56,189,248,0.6)]">
                      <ExternalLink size={32} />
                    </div>
                    <span className="project-endcap-label font-bold tracking-widest uppercase text-sm opacity-50 group-hover:opacity-100 transition-opacity">View All Repos</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Manual Navigation Console (Animated Entry) */}
          <motion.div
            style={{ x: buttonsX, opacity: buttonsOpacity }}
            className="hidden sm:flex absolute bottom-8 right-8 md:bottom-12 md:right-12 z-50 gap-4"
          >
            <button
              onClick={scrollPrev}
              className="theme-utility-orb flex h-14 w-14 items-center justify-center rounded-full transition-all"
              aria-label="Scroll Previous"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={scrollNext}
              className="theme-utility-orb flex h-14 w-14 items-center justify-center rounded-full transition-all"
              aria-label="Scroll Next"
            >
              <ChevronRight size={28} />
            </button>
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
  const projectNumber = `0${index + 1}`
  const [activeMobilePanel, setActiveMobilePanel] = useState('delivery')
  const deliverySummary = project.stats.map((stat) => `${stat.value} ${stat.label.toLowerCase()}`).join(' / ')
  const stackSummary = project.techStack.slice(0, 3).join(' / ')
  const deepWikiUrl = buildDeepWikiUrl(project.githubUrl)
  const hasGallery = project.images.length > 0
  const galleryFrameLabel = project.images.length === 1 ? 'Frame' : 'Frames'
  const galleryScreenLabel = project.images.length === 1 ? 'screen' : 'screens'
  const mobilePanels = [
    {
      id: 'delivery',
      title: 'What shipped',
      summary: '3 delivery highlights',
      content: (
        <ul className="space-y-2.5">
          {project.delivery.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-br from-primary via-sky-300 to-secondary shadow-[0_0_12px_rgba(56,189,248,0.4)]" />
              <span className="text-[13px] leading-[1.65] text-slate-300">{item}</span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      id: 'stats',
      title: 'Delivery signal',
      summary: deliverySummary,
      content: (
        <div className="grid grid-cols-3 gap-2.5">
          {project.stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/[0.08] bg-white/[0.03] px-2.5 py-3 text-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
              <p className="text-[1.05rem] font-black leading-none text-white">
                {stat.value}
              </p>
              <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 'stack',
      title: 'Stack focus',
      summary: stackSummary,
      content: (
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-200 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
              {tech}
            </span>
          ))}
        </div>
      ),
    },
  ]

  return (
    <div className="relative h-auto w-[92vw] shrink-0 sm:h-[clamp(40rem,79vh,52rem)] sm:w-[min(72vw,58rem)] lg:h-[clamp(42rem,78vh,54rem)] lg:w-[min(54vw,72rem)]">
      <div className="project-shell-card relative flex h-full w-full flex-col overflow-hidden rounded-[2.5rem] px-4 pb-4 pt-0 sm:translate-y-1 sm:p-[clamp(1.5rem,1rem+0.9vw,2rem)] sm:hover:translate-y-0 lg:p-[clamp(1.75rem,1.05rem+0.9vw,2.35rem)] group isolate transform-gpu transition-[transform,box-shadow,border-color] duration-300 ease-out">
        {/* Hover Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none mix-blend-overlay`} />
        <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
        <div className="pointer-events-none absolute -right-12 top-20 h-44 w-44 rounded-full bg-primary/10 blur-3xl opacity-60" />

        <div className="relative z-10 flex h-full flex-col">
          <div className="-mt-36 flex items-start justify-between gap-2.5 border-b border-white/[0.08] pb-3 sm:mt-0 sm:gap-[clamp(0.875rem,0.7rem+0.15vw,1rem)] sm:pb-[clamp(1rem,0.8rem+0.25vw,1.25rem)]">
            <div className="max-w-[74%] sm:max-w-[80%]">
              <div className="mb-3 flex items-center gap-2.5 text-[0.62rem] font-semibold uppercase tracking-[0.23em] text-slate-400 sm:mb-[clamp(0.75rem,0.65rem+0.15vw,1rem)] sm:gap-3 sm:text-[clamp(0.55rem,0.48rem+0.08vw,0.68rem)] sm:tracking-[0.26em]">
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-slate-300">
                  Featured Build
                </span>
                <span className="text-primary/80">{projectNumber}</span>
              </div>
              <h3 className="text-[2.75rem] font-bold leading-[0.92] text-white drop-shadow-md sm:text-[clamp(2rem,1.3rem+1.45vw,3.4rem)] sm:leading-[0.96]">
                {project.title}
              </h3>
              <p className="mt-2.5 max-w-2xl text-[1rem] leading-[1.58] text-slate-300 sm:mt-[clamp(0.75rem,0.62rem+0.18vw,1rem)] sm:text-[clamp(0.9rem,0.78rem+0.26vw,1.1rem)] sm:leading-[1.75]">
                {project.description}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <a
                href={deepWikiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-action-orb glass-panel flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full text-white transition-colors hover:bg-white hover:text-black sm:h-12 sm:w-12"
                aria-label="Open repo on DeepWiki"
              >
                <img
                  src="/portfolio/devin.avif"
                  alt=""
                  aria-hidden="true"
                  className="relative z-10 h-4.5 w-4.5 rounded-[0.35rem] object-cover sm:h-5 sm:w-5"
                />
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-action-orb glass-panel flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full text-white transition-colors hover:bg-white hover:text-black sm:h-12 sm:w-12"
                aria-label="View Source on GitHub"
              >
                <Github size={18} className="relative z-10 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          <div className="mt-[clamp(0.875rem,0.72rem+0.18vw,1.1rem)] flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-[clamp(0.875rem,0.7rem+0.15vw,1rem)]">
            <p className="text-[clamp(0.66rem,0.58rem+0.16vw,0.86rem)] font-bold uppercase tracking-[0.22em] sm:tracking-[0.24em] lg:tracking-[0.26em] text-primary leading-relaxed">
              {project.impact}
            </p>
            <span className="theme-surface-card inline-flex self-start rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] theme-surface-meta sm:hidden">
              {project.images.length} {galleryFrameLabel}
            </span>
            <span className="hidden lg:inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[clamp(0.55rem,0.5rem+0.08vw,0.68rem)] font-semibold uppercase tracking-[0.2em] text-slate-400">
              {project.images.length} {galleryFrameLabel}
            </span>
          </div>

          <div className="mt-3.5 space-y-2.5 sm:hidden">
            {mobilePanels.map((panel) => {
              const isOpen = activeMobilePanel === panel.id

              return (
                <section key={panel.id} className="theme-surface-card overflow-hidden rounded-[1.45rem]">
                  <button
                    type="button"
                    onClick={() => setActiveMobilePanel(panel.id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left"
                  >
                    <div className="min-w-0">
                      <p className="theme-surface-meta text-[9px] font-semibold uppercase tracking-[0.24em]">
                        {panel.title}
                      </p>
                      <p className="theme-surface-accent mt-1.5 truncate text-[10px] font-medium uppercase tracking-[0.14em]">
                        {panel.summary}
                      </p>
                    </div>
                    <span className="theme-surface-card flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                      <ChevronRight
                        size={18}
                        className={`theme-card-arrow shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}
                      />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-white/[0.08] px-4 pb-4 pt-3">
                          {panel.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </section>
              )
            })}
          </div>

          <div className="mt-[clamp(0.95rem,0.8rem+0.22vw,1.25rem)] hidden min-h-0 sm:grid flex-1 gap-[clamp(0.75rem,0.6rem+0.2vw,0.95rem)] lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
            <section className="rounded-[1.8rem] border border-white/[0.08] bg-white/[0.03] p-[clamp(0.95rem,0.82rem+0.2vw,1.25rem)] backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),0_18px_40px_rgba(0,0,0,0.2)] flex flex-col">
              <p className="text-[clamp(0.55rem,0.49rem+0.09vw,0.68rem)] font-semibold uppercase tracking-[0.24em] sm:tracking-[0.26em] text-slate-400">
                What shipped
              </p>
              <ul className="mt-[clamp(0.8rem,0.68rem+0.18vw,1rem)] flex h-full flex-col justify-between gap-[clamp(0.75rem,0.62rem+0.18vw,0.95rem)]">
                {project.delivery.map((item, itemIndex) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-br from-primary via-sky-300 to-secondary shadow-[0_0_12px_rgba(56,189,248,0.4)]" />
                    <span className="text-[clamp(0.85rem,0.76rem+0.18vw,1rem)] leading-[1.7] text-slate-300">
                      <span className="2xl:hidden">{item}</span>
                      <span className="hidden 2xl:inline">{project.desktopDelivery?.[itemIndex] || item}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <div className="grid gap-[clamp(0.75rem,0.6rem+0.2vw,0.95rem)]">
              <section className="rounded-[1.8rem] border border-white/[0.08] bg-black/20 p-[clamp(0.95rem,0.82rem+0.2vw,1.25rem)] backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_16px_32px_rgba(0,0,0,0.18)]">
                <p className="text-[clamp(0.55rem,0.49rem+0.09vw,0.68rem)] font-semibold uppercase tracking-[0.24em] sm:tracking-[0.26em] text-slate-400">
                  Delivery signal
                </p>
                <div className="mt-[clamp(0.8rem,0.68rem+0.18vw,1rem)] grid grid-cols-3 gap-[clamp(0.55rem,0.46rem+0.14vw,0.75rem)]">
                  {project.stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-white/[0.08] bg-white/[0.03] px-[clamp(0.7rem,0.62rem+0.12vw,0.85rem)] py-[clamp(0.8rem,0.72rem+0.14vw,0.95rem)] text-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                      <p className="text-[clamp(1.05rem,0.92rem+0.28vw,1.35rem)] font-black leading-none text-white">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-[clamp(0.5rem,0.46rem+0.08vw,0.62rem)] font-semibold uppercase tracking-[0.18em] sm:tracking-[0.2em] text-slate-400">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[1.8rem] border border-white/[0.08] bg-black/20 p-[clamp(0.95rem,0.82rem+0.2vw,1.25rem)] backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_16px_32px_rgba(0,0,0,0.18)]">
                <p className="text-[clamp(0.55rem,0.49rem+0.09vw,0.68rem)] font-semibold uppercase tracking-[0.24em] sm:tracking-[0.26em] text-slate-400">
                  Stack focus
                </p>
                <div className="mt-[clamp(0.8rem,0.68rem+0.18vw,1rem)] flex flex-wrap gap-[clamp(0.45rem,0.38rem+0.1vw,0.6rem)]">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/[0.08] bg-white/[0.04] px-[clamp(0.65rem,0.58rem+0.1vw,0.85rem)] py-[clamp(0.35rem,0.3rem+0.08vw,0.5rem)] text-[clamp(0.55rem,0.5rem+0.08vw,0.72rem)] font-semibold uppercase tracking-[0.16em] sm:tracking-[0.18em] text-slate-200 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </div>

          <div className="mt-[clamp(0.95rem,0.78rem+0.22vw,1.25rem)] flex min-h-[clamp(6rem,5.4rem+1.2vw,7rem)] flex-col gap-3 pt-[clamp(1.1rem,0.95rem+0.2vw,1.35rem)] sm:flex-row sm:items-end sm:justify-between sm:gap-[clamp(0.875rem,0.7rem+0.15vw,1rem)]">
            {project.ctaUrl ? (
              <a
                href={project.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center gap-2.5 rounded-full bg-white/10 px-[clamp(1rem,0.9rem+0.16vw,1.25rem)] py-[clamp(0.6rem,0.52rem+0.08vw,0.78rem)] text-[clamp(0.62rem,0.56rem+0.08vw,0.75rem)] font-bold uppercase tracking-[0.16em] text-white transition-all shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:bg-primary sm:w-auto sm:px-[clamp(1.1rem,0.95rem+0.18vw,1.35rem)]"
              >
                <ExternalLink size={16} />
                <span>{project.ctaLabel}</span>
              </a>
            ) : (
              <button
                onClick={onOpenLightbox}
                disabled={!hasGallery}
                className="project-gallery-cta group flex w-full items-center justify-between gap-4 rounded-[1.45rem] border border-primary/20 px-[clamp(1rem,0.9rem+0.16vw,1.25rem)] py-[clamp(0.75rem,0.64rem+0.12vw,0.95rem)] text-white transition-all shadow-[0_14px_28px_rgba(0,0,0,0.28),inset_0_1px_1px_rgba(255,255,255,0.08),0_0_18px_rgba(56,189,248,0.12)] hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_18px_36px_rgba(0,0,0,0.34),inset_0_1px_1px_rgba(255,255,255,0.1),0_0_26px_rgba(56,189,248,0.2)] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:border-primary/20 sm:min-w-[clamp(15rem,14rem+3vw,18rem)] sm:w-auto sm:px-[clamp(1.1rem,0.95rem+0.18vw,1.35rem)]"
              >
                <div className="relative z-10 flex items-center gap-3">
                  <span className="project-gallery-cta__icon-shell flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.07)]">
                    <ImageIcon size={17} className="text-primary" />
                  </span>
                  <span className="text-left">
                    <span className="block text-[clamp(0.68rem,0.6rem+0.08vw,0.8rem)] font-black uppercase tracking-[0.18em] text-white">
                      {project.ctaLabel}
                    </span>
                    <span className="mt-1 block text-[clamp(0.62rem,0.56rem+0.08vw,0.72rem)] font-semibold uppercase tracking-[0.14em] text-sky-100/85">
                      {project.images.length} {galleryScreenLabel} · Tap to open
                    </span>
                  </span>
                </div>
                <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/20 text-slate-100 transition-transform duration-300 group-hover:translate-x-0.5">
                  <ChevronRight size={18} />
                </span>
              </button>
            )}

            <div className="theme-surface-card flex items-center justify-between rounded-[1.35rem] px-4 py-3 sm:hidden">
              <div>
                <p className="theme-surface-meta text-[10px] font-semibold uppercase tracking-[0.22em]">Status</p>
                <p className="theme-surface-title mt-1 text-sm font-semibold">{project.status}</p>
              </div>
              <p className="theme-surface-meta text-[2rem] font-black leading-none opacity-45">{projectNumber}</p>
            </div>

            <div className="hidden h-full items-end gap-4 text-right sm:flex sm:gap-6">
              <div>
                <p className="text-[clamp(0.52rem,0.48rem+0.08vw,0.62rem)] font-semibold uppercase tracking-[0.2em] text-slate-500">Status</p>
                <p className="mt-1 text-[clamp(0.72rem,0.66rem+0.1vw,0.8rem)] font-semibold text-slate-300">{project.status}</p>
              </div>
              <div className="pb-0.5">
                <p className="text-[clamp(1.8rem,1.55rem+0.45vw,2.4rem)] font-black leading-none text-white/[0.08]">{projectNumber}</p>
              </div>
            </div>
          </div>
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
