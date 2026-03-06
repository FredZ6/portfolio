import { useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { ExternalLink, Github, Image as ImageIcon, X, ChevronRight, ChevronLeft } from 'lucide-react'
import Tilt from 'react-parallax-tilt'
import PropTypes from 'prop-types'

const PROJECTS = [
  {
    id: 1,
    title: 'Event-Driven Order & Inventory Microservices',
    description: 'Cloud-native order platform built on AWS with microservices, Terraform IaC, and CI/CD quality gates. Delivered 6 services across auth, catalog, ordering, inventory, payment, and notifications.',
    impact: '6 microservices | 3 saga workflows | 6 required CI checks',
    techStack: ['Java 17', 'Spring Boot', 'Microservices', 'AWS', 'Terraform'],
    githubUrl: 'https://github.com/FredZ6/cloud-project',
    images: [
      { src: '/portfolio/projects/cloud-order/dashboard_16x10.png', fullSrc: '/portfolio/projects/cloud-order/dashboard_full.png', caption: 'Dashboard' },
      { src: '/portfolio/projects/cloud-order/cloud_01_16x10.png', fullSrc: '/portfolio/projects/cloud-order/cloud_01_full.png', caption: 'System Screen 1' },
      { src: '/portfolio/projects/cloud-order/cloud_02_16x10.png', fullSrc: '/portfolio/projects/cloud-order/cloud_02_full.png', caption: 'System Screen 2' }
    ],
    accent: 'from-sky-400 to-blue-600',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce system (React + Spring Boot + PostgreSQL) covering login, catalog, cart, checkout, and admin order operations.',
    impact: '39 tests | 4 CI/E2E workflows | Docker demo with 6 seeded products',
    techStack: ['React', 'Vite', 'Spring Security', 'JWT', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com/FredZ6/e-commerce',
    images: [
      { src: '/portfolio/projects/ecommerce/home_16x10.png', fullSrc: '/portfolio/projects/ecommerce/home.png', caption: 'Home Page' },
      { src: '/portfolio/projects/ecommerce/product_16x10.png', fullSrc: '/portfolio/projects/ecommerce/product.png', caption: 'Products Page' },
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

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -window.innerWidth * 0.6, behavior: 'smooth' })
    }
  }

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: window.innerWidth * 0.6, behavior: 'smooth' })
    }
  }

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
      <section ref={targetRef} className="relative -mt-[16vh] sm:-mt-[18vh] lg:-mt-[20vh] h-[152vh] bg-transparent" id="projects">
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
              className="h-full w-full overflow-x-auto overflow-y-hidden relative z-20 custom-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <motion.div
                style={{ x: cardsX, opacity: cardsOpacity }}
                className="flex items-center h-full w-max min-w-full gap-8 sm:gap-16 lg:gap-24 px-[10vw] sm:px-[20vw] lg:px-[30vw] snap-x snap-mandatory"
                initial={false}
              >
                {PROJECTS.map((project, index) => (
                  <div key={project.id} className="snap-center shrink-0 flex items-center h-full">
                    <ProjectCard
                      project={project}
                      index={index}
                      onOpenLightbox={() => openLightbox(project.images)}
                    />
                  </div>
                ))}

                {/* End Cap */}
                <div className="snap-center shrink-0 w-[85vw] sm:w-[50vw] lg:w-[30vw] flex items-center justify-center">
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
            <div className="relative w-full max-w-6xl aspect-[16/10] sm:aspect-video rounded-3xl overflow-hidden glass-panel-strong" onClick={(e) => e.stopPropagation()}>
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

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 glass-panel rounded-full px-6 py-3 flex items-center gap-6 z-10">
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
  return (
    <div className="w-[85vw] sm:w-[60vw] lg:w-[45vw] h-[65vh] shrink-0 relative perspective-1000">
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={1500}
        scale={1.02}
        transitionSpeed={2000}
        className="w-full h-full glass-panel-strong rounded-[2.5rem] p-6 sm:p-10 flex flex-col relative overflow-hidden group shadow-[0_30px_60px_rgba(0,0,0,0.8),inset_0_1px_5px_rgba(255,255,255,0.2)]"
      >
        {/* Number Watermark */}
        <div className="absolute -bottom-10 -right-4 text-[15rem] font-black text-white/[0.03] leading-none pointer-events-none select-none z-0">
          0{index + 1}
        </div>

        {/* Hover Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none mix-blend-overlay`} />

        <div className="relative z-10 flex-grow flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-3xl sm:text-4xl font-bold text-white max-w-[80%] leading-tight drop-shadow-md">
              {project.title}
            </h3>
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

          <p className="text-slate-300 text-sm sm:text-base mb-6 leading-relaxed max-w-xl">
            {project.description}
          </p>

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 border-b border-primary/20 pb-4 inline-block self-start">
            {project.impact}
          </p>

          <div className="flex flex-wrap gap-2 mb-auto">
            {project.techStack.map(tech => (
              <span key={tech} className="glass-panel px-3 py-1.5 text-[10px] sm:text-xs rounded-full font-semibold uppercase tracking-wider text-slate-200">
                {tech}
              </span>
            ))}
          </div>

          {/* Action Area */}
          <div className="mt-8 pt-6 flex justify-between items-end">
            <button
              onClick={onOpenLightbox}
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 hover:bg-primary text-white font-bold tracking-widest text-xs uppercase transition-all shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
            >
              <ImageIcon size={16} />
              <span>View Gallery</span>
            </button>
            <span className="text-slate-500 font-mono text-xs hidden sm:block">STATUS: COMPLETED</span>
          </div>
        </div>
      </Tilt>
    </div>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    impact: PropTypes.string.isRequired,
    techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
    githubUrl: PropTypes.string.isRequired,
    accent: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  onOpenLightbox: PropTypes.func.isRequired,
}

export default Projects
