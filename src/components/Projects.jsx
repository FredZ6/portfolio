import { useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { ExternalLink, Github, Image as ImageIcon, X, ChevronRight, ChevronLeft } from 'lucide-react'
import PropTypes from 'prop-types'

const PROJECTS = [
  {
    id: 1,
    title: 'Event-Driven Order & Inventory Microservices',
    description: 'Cloud-native order platform built on AWS with microservices, Terraform IaC, and CI/CD quality gates. Delivered 6 services across auth, catalog, ordering, inventory, payment, and notifications.',
    impact: '6 microservices | 3 saga workflows | 6 required CI checks',
    delivery: [
      'Delivered auth, catalog, ordering, inventory, payment, and notification services.',
      'Implemented saga orchestration across order, payment, and inventory lifecycles.',
      'Locked releases behind mandatory CI checks and Terraform-driven infrastructure updates.',
    ],
    stats: [
      { value: '6', label: 'Services' },
      { value: '3', label: 'Sagas' },
      { value: '6', label: 'Checks' },
    ],
    status: 'Completed',
    techStack: ['Java 17', 'Spring Boot', 'Microservices', 'AWS', 'Terraform'],
    githubUrl: 'https://github.com/FredZ6/cloud-project',
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
    stats: [
      { value: '39', label: 'Tests' },
      { value: '4', label: 'Flows' },
      { value: '6', label: 'Products' },
    ],
    status: 'Completed',
    techStack: ['React', 'Vite', 'Spring Security', 'JWT', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com/FredZ6/e-commerce',
    images: [
      { src: '/portfolio/projects/ecommerce/home_16x10.png', fullSrc: '/portfolio/projects/ecommerce/home.png', caption: 'Home Page' },
      { src: '/portfolio/projects/ecommerce/product_16x10.png', fullSrc: '/portfolio/projects/ecommerce/product.png', caption: 'Products Page' },
      { src: '/portfolio/projects/ecommerce/product_detail_16x10.png', fullSrc: '/portfolio/projects/ecommerce/product_detail.png', caption: 'Product Detail' },
      { src: '/portfolio/projects/ecommerce/manage_16x10.png', fullSrc: '/portfolio/projects/ecommerce/manage.png', caption: 'Admin Management' },
    ],
    accent: 'from-cyan-400 to-sky-500',
  },
]

const Projects = () => {
  const targetRef = useRef(null)
  const scrollContainerRef = useRef(null)

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

  const scrollToCard = (direction) => {
    const container = scrollContainerRef.current
    if (!container) return

    const targets = getScrollTargets()
    if (!targets.length) return

    const viewportCenter = container.scrollLeft + container.clientWidth / 2
    const currentIndex = targets.reduce((closestIndex, target, index) => {
      const targetCenter = target.offsetLeft + target.offsetWidth / 2
      const closestTarget = targets[closestIndex]
      const closestCenter = closestTarget.offsetLeft + closestTarget.offsetWidth / 2

      return Math.abs(targetCenter - viewportCenter) < Math.abs(closestCenter - viewportCenter)
        ? index
        : closestIndex
    }, 0)

    const nextIndex = Math.min(Math.max(currentIndex + direction, 0), targets.length - 1)
    const nextTarget = targets[nextIndex]
    const nextLeft = nextTarget.offsetLeft - (container.clientWidth - nextTarget.offsetWidth) / 2

    container.scrollTo({
      left: Math.max(0, nextLeft),
      behavior: 'smooth',
    })
  }

  const scrollPrev = () => scrollToCard(-1)

  const scrollNext = () => scrollToCard(1)

  const [lightboxData, setLightboxData] = useState(null)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const openLightbox = (projectImages) => {
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
      <section ref={targetRef} className="relative mt-0 sm:-mt-[18vh] lg:-mt-[20vh] h-[152vh] bg-transparent" id="projects">
        {/* Sticky wrapper */}
        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">

          {/* Background Title (Animated) */}
          <motion.div
            style={{ x: titleX, opacity: titleOpacity }}
            className="absolute top-[28%] left-8 md:top-[29%] md:left-16 lg:top-[30%] lg:left-24 z-10 w-full max-w-sm pointer-events-none"
          >
            <h2 className="text-5xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] mix-blend-plus-lighter">
              FEATURED<br />SYSTEMS
            </h2>
            <p className="mt-4 text-slate-300 font-medium tracking-wide border-l-2 border-primary pl-4 uppercase text-xs sm:text-sm shadow-[inset_1px_0_10px_rgba(56,189,248,0.12)] py-1">
              Swipe or use buttons to explore<br /> architectural implementations.
            </p>
          </motion.div>

          {/* Native Horizontal Scroll Container (Animated Entry) */}
          <motion.div
            className="absolute inset-0 w-full h-full pt-12 sm:pt-16 lg:pt-24"
            initial={false}
          >
            <div
              ref={scrollContainerRef}
              className="h-full w-full overflow-x-auto overflow-y-hidden relative z-20 custom-scrollbar snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <motion.div
                style={{ x: cardsX, opacity: cardsOpacity }}
                className="flex items-center h-full w-max min-w-full gap-8 sm:gap-16 lg:gap-24 px-[10vw] sm:px-[20vw] lg:px-[30vw]"
                initial={false}
              >
                {PROJECTS.map((project, index) => (
                  <div key={project.id} data-scroll-card className="snap-center shrink-0 flex items-center h-full">
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
                    <div className="w-24 h-24 rounded-full glass-panel-strong flex items-center justify-center text-white transition-all group-hover:bg-primary group-hover:scale-110 shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_40px_rgba(56,189,248,0.6)]">
                      <ExternalLink size={32} />
                    </div>
                    <span className="text-white font-bold tracking-widest uppercase text-sm opacity-50 group-hover:opacity-100 transition-opacity">View All Repos</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Manual Navigation Console (Animated Entry) */}
          <motion.div
            style={{ x: buttonsX, opacity: buttonsOpacity }}
            className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-50 flex gap-4"
          >
            <button
              onClick={scrollPrev}
              className="w-14 h-14 rounded-full glass-panel flex items-center justify-center text-white hover:bg-primary transition-all shadow-[0_0_20px_rgba(0,0,0,0.8),inset_0_1px_5px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(56,189,248,0.58)]"
              aria-label="Scroll Previous"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={scrollNext}
              className="w-14 h-14 rounded-full glass-panel flex items-center justify-center text-white hover:bg-primary transition-all shadow-[0_0_20px_rgba(0,0,0,0.8),inset_0_1px_5px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(56,189,248,0.58)]"
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
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            onClick={closeLightbox}
          >
            <div className="flex w-full max-w-6xl flex-col items-center gap-6" onClick={(e) => e.stopPropagation()}>
              <div className="relative w-full aspect-[16/10] sm:aspect-video rounded-3xl overflow-hidden glass-panel-strong">
                <div className="absolute top-4 right-4 z-50 flex gap-2">
                  <button onClick={closeLightbox} className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white hover:bg-rose-500 transition-colors">
                    <X size={24} />
                  </button>
                </div>

                <img
                  src={lightboxData[activeImageIndex].fullSrc || lightboxData[activeImageIndex].src}
                  alt={lightboxData[activeImageIndex].caption}
                  className="w-full h-full object-contain bg-black/50"
                />
              </div>

              <div className="glass-panel rounded-full px-6 py-3 flex items-center gap-6 z-10 shadow-[0_16px_40px_rgba(0,0,0,0.45)]">
                <button
                  disabled={activeImageIndex === 0}
                  onClick={() => setActiveImageIndex(prev => prev - 1)}
                  className="text-white hover:text-primary disabled:opacity-30 disabled:hover:text-white"
                >
                  <ChevronLeft size={24} />
                </button>
                <span className="text-white font-bold text-sm tracking-widest">
                  {activeImageIndex + 1} / {lightboxData.length}
                </span>
                <button
                  disabled={activeImageIndex === lightboxData.length - 1}
                  onClick={() => setActiveImageIndex(prev => prev + 1)}
                  className="text-white hover:text-primary disabled:opacity-30 disabled:hover:text-white"
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
  const mobilePanels = [
    {
      id: 'delivery',
      title: 'What shipped',
      summary: '3 delivery highlights',
      content: (
        <ul className="space-y-3">
          {project.delivery.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-br from-primary via-sky-300 to-secondary shadow-[0_0_12px_rgba(56,189,248,0.4)]" />
              <span className="text-sm leading-relaxed text-slate-300">{item}</span>
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
        <div className="grid grid-cols-3 gap-3">
          {project.stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/[0.08] bg-white/[0.03] px-3 py-3 text-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
              <p className="text-lg font-black leading-none text-white">
                {stat.value}
              </p>
              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400">
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
            <span key={tech} className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-200 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
              {tech}
            </span>
          ))}
        </div>
      ),
    },
  ]

  return (
    <div className="w-[88vw] sm:w-[60vw] lg:w-[45vw] h-auto sm:h-[66vh] lg:h-[65vh] shrink-0 relative">
      <div className="w-full h-full rounded-[2.5rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(2,8,23,0.97),rgba(2,6,23,0.95))] sm:bg-[linear-gradient(180deg,rgba(2,8,23,0.92),rgba(2,6,23,0.84))] p-5 sm:p-10 flex flex-col relative overflow-hidden group isolate transform-gpu transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_34px_70px_rgba(0,0,0,0.84),inset_0_1px_5px_rgba(255,255,255,0.18),0_0_24px_rgba(56,189,248,0.18)] shadow-[0_30px_60px_rgba(0,0,0,0.8),inset_0_1px_5px_rgba(255,255,255,0.16),0_0_20px_rgba(56,189,248,0.08)]">
        {/* Hover Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none mix-blend-overlay`} />
        <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
        <div className="pointer-events-none absolute -right-12 top-20 h-44 w-44 rounded-full bg-primary/10 blur-3xl opacity-60" />

        <div className="relative z-10 flex h-full flex-col">
          <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] pb-5 sm:pb-6">
            <div className="max-w-[82%] sm:max-w-[80%]">
              <div className="mb-3 sm:mb-4 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.26em] text-slate-400">
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-slate-300">
                  Featured Build
                </span>
                <span className="text-primary/80">{projectNumber}</span>
              </div>
              <h3 className="text-[2.45rem] leading-[0.95] sm:text-4xl font-bold text-white drop-shadow-md">
                {project.title}
              </h3>
              <p className="mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-300">
                {project.description}
              </p>
            </div>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors shrink-0"
              aria-label="View Source on GitHub"
            >
              <Github size={20} />
            </a>
          </div>

          <div className="mt-4 sm:mt-5 flex items-start sm:items-center justify-between gap-4">
            <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.24em] sm:tracking-[0.28em] text-primary leading-relaxed">
              {project.impact}
            </p>
            <span className="hidden lg:inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
              {project.images.length} Frames
            </span>
          </div>

          <div className="mt-4 space-y-3 sm:hidden">
            {mobilePanels.map((panel) => {
              const isOpen = activeMobilePanel === panel.id

              return (
                <section key={panel.id} className="rounded-[1.55rem] border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_14px_30px_rgba(0,0,0,0.16)]">
                  <button
                    type="button"
                    onClick={() => setActiveMobilePanel(panel.id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left"
                  >
                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-slate-400">
                        {panel.title}
                      </p>
                      <p className="mt-2 truncate text-[11px] font-medium uppercase tracking-[0.16em] text-primary/80">
                        {panel.summary}
                      </p>
                    </div>
                    <ChevronRight
                      size={18}
                      className={`shrink-0 text-slate-300 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}
                    />
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
                        <div className="border-t border-white/[0.08] px-4 py-4">
                          {panel.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </section>
              )
            })}
          </div>

          <div className="mt-5 hidden sm:grid flex-1 gap-4 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
            <section className="rounded-[1.8rem] border border-white/[0.08] bg-white/[0.03] p-4 sm:p-5 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),0_18px_40px_rgba(0,0,0,0.2)]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-slate-400">
                What shipped
              </p>
              <ul className="mt-4 space-y-4">
                {project.delivery.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-br from-primary via-sky-300 to-secondary shadow-[0_0_12px_rgba(56,189,248,0.4)]" />
                    <span className="text-sm leading-relaxed text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <div className="grid gap-4">
              <section className="rounded-[1.8rem] border border-white/[0.08] bg-black/20 p-4 sm:p-5 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_16px_32px_rgba(0,0,0,0.18)]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-slate-400">
                  Delivery signal
                </p>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {project.stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-white/[0.08] bg-white/[0.03] px-3 py-3 text-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                      <p className="text-lg sm:text-xl font-black leading-none text-white">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[1.8rem] border border-white/[0.08] bg-black/20 p-4 sm:p-5 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_16px_32px_rgba(0,0,0,0.18)]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-slate-400">
                  Stack focus
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-200 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </div>

          <div className="mt-4 sm:mt-5 flex items-end justify-between gap-4 border-t border-white/[0.08] pt-4 sm:pt-5">
            <button
              onClick={onOpenLightbox}
              className="flex items-center gap-3 px-5 sm:px-6 py-3 rounded-full bg-white/10 hover:bg-primary text-white font-bold tracking-[0.18em] text-[11px] sm:text-xs uppercase transition-all shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
            >
              <ImageIcon size={16} />
              <span>View Gallery</span>
            </button>

            <div className="flex items-end gap-4 sm:gap-6 text-right">
              <div className="hidden sm:block">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">Gallery</p>
                <p className="mt-1 text-xs font-semibold text-slate-300">{project.images.length} screens</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">Status</p>
                <p className="mt-1 text-xs font-semibold text-slate-300">{project.status}</p>
              </div>
              <div className="pb-0.5">
                <p className="text-[2rem] sm:text-[2.5rem] font-black leading-none text-white/[0.08]">{projectNumber}</p>
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
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      })
    ).isRequired,
    status: PropTypes.string.isRequired,
    techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
    githubUrl: PropTypes.string.isRequired,
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
