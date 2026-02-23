import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaGithub, FaTimes } from 'react-icons/fa'

const Projects = () => {
  const shouldReduceMotion = useReducedMotion()

  const [activeProjectIndex, setActiveProjectIndex] = useState(0)
  const [projectDirection, setProjectDirection] = useState(1)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [imageDirection, setImageDirection] = useState(1)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const sectionVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0.45, y: shouldReduceMotion ? 0 : 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.15 : 0.42,
        ease: [0.22, 1, 0.36, 1],
        when: 'beforeChildren',
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0.6, y: shouldReduceMotion ? 0 : 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.15 : 0.32,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const projectSlideVariants = {
    enter: (direction) => ({
      opacity: shouldReduceMotion ? 1 : 0,
      x: shouldReduceMotion ? 0 : direction > 0 ? 54 : -54,
    }),
    center: {
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0.15 : 0.38,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: (direction) => ({
      opacity: shouldReduceMotion ? 1 : 0,
      x: shouldReduceMotion ? 0 : direction > 0 ? -54 : 54,
      transition: {
        duration: shouldReduceMotion ? 0.15 : 0.28,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  const imageSlideVariants = {
    enter: (direction) => ({
      opacity: shouldReduceMotion ? 1 : 0,
      x: shouldReduceMotion ? 0 : direction > 0 ? 26 : -26,
      scale: shouldReduceMotion ? 1 : 0.99,
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.15 : 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: (direction) => ({
      opacity: shouldReduceMotion ? 1 : 0,
      x: shouldReduceMotion ? 0 : direction > 0 ? -26 : 26,
      scale: shouldReduceMotion ? 1 : 0.99,
      transition: {
        duration: shouldReduceMotion ? 0.15 : 0.24,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  const projects = [
    {
      title: 'Event-Driven Order & Inventory Microservices Platform',
      description: 'Cloud-native order platform built on AWS with microservices, Terraform IaC, and CI/CD quality gates.',
      impact: '6 microservices | 3 saga workflows | 6 required CI checks',
      tags: ['Java 17', 'Spring Boot', 'Microservices', 'AWS', 'Terraform'],
      github: 'https://github.com/FredZ6/cloud-project',
      features: [
        'Delivered 6 services across auth, catalog, ordering, inventory, payment, and notifications.',
        'Implemented Saga + Outbox flows for cross-service consistency and compensation handling.',
        'Provisioned AWS (ECS/ECR + Terraform remote state) with GitHub OIDC CI/CD and spec validation checks.',
      ],
      images: [
        {
          src: '/portfolio/projects/cloud-order/dashboard_16x10.png',
          fullSrc: '/portfolio/projects/cloud-order/dashboard_full.png',
          alt: 'Cloud Order platform dashboard',
          caption: 'Dashboard',
        },
        {
          src: '/portfolio/projects/cloud-order/cloud_01_16x10.png',
          fullSrc: '/portfolio/projects/cloud-order/cloud_01_full.png',
          alt: 'Cloud Order platform screen 1',
          caption: 'System Screen 1',
        },
        {
          src: '/portfolio/projects/cloud-order/cloud_02_16x10.png',
          fullSrc: '/portfolio/projects/cloud-order/cloud_02_full.png',
          alt: 'Cloud Order platform screen 2',
          caption: 'System Screen 2',
        },
        {
          src: '/portfolio/projects/cloud-order/cloud_03_16x10.png',
          fullSrc: '/portfolio/projects/cloud-order/cloud_03_full.png',
          alt: 'Cloud Order platform screen 3',
          caption: 'System Screen 3',
        },
        {
          src: '/portfolio/projects/cloud-order/cloud_04_16x10.png',
          fullSrc: '/portfolio/projects/cloud-order/cloud_04_full.png',
          alt: 'Cloud Order platform screen 4',
          caption: 'System Screen 4',
        },
        {
          src: '/portfolio/projects/cloud-order/cloud_05_16x10.png',
          fullSrc: '/portfolio/projects/cloud-order/cloud_05_full.png',
          alt: 'Cloud Order platform screen 5',
          caption: 'System Screen 5',
        },
        {
          src: '/portfolio/projects/cloud-order/cloud_06_16x10.png',
          fullSrc: '/portfolio/projects/cloud-order/cloud_06_full.png',
          alt: 'Cloud Order platform screen 6',
          caption: 'System Screen 6',
        },
      ],
    },
    {
      title: 'E-Commerce Platform',
      description:
        'Full-stack e-commerce system (React + Spring Boot + PostgreSQL) covering login, catalog, cart, checkout, and admin order operations.',
      impact: '39 tests | 4 CI/E2E workflows | Docker demo with 6 seeded products',
      tags: ['React', 'Vite', 'Tailwind', 'Spring Security', 'JWT', 'PostgreSQL', 'Docker', 'Playwright'],
      github: 'https://github.com/FredZ6/e-commerce',
      features: [
        'Implemented end-to-end user flow: auth, product browsing, cart, checkout, and order history.',
        'Built admin controls for product management, order status updates, and protected APIs with JWT + role-based access.',
        'Established quality and operations baseline with unit/frontend/E2E tests, GitHub Actions checks, health endpoints, request-ID tracing, and performance baseline records.',
      ],
      images: [
        {
          src: '/portfolio/projects/ecommerce/home_16x10.png',
          fullSrc: '/portfolio/projects/ecommerce/home.png',
          alt: 'E-Commerce home page with hero and featured collections',
          caption: 'Home Page',
          tone: 'from-violet-100/80 via-fuchsia-100/70 to-rose-100/80',
        },
        {
          src: '/portfolio/projects/ecommerce/product_16x10.png',
          fullSrc: '/portfolio/projects/ecommerce/product.png',
          alt: 'E-Commerce product list page with searchable catalog cards',
          caption: 'Products Page',
          tone: 'from-slate-100/80 via-zinc-100/75 to-stone-100/80',
        },
        {
          src: '/portfolio/projects/ecommerce/product_detail_16x10.png',
          fullSrc: '/portfolio/projects/ecommerce/product_detail.png',
          alt: 'E-Commerce product detail page with add-to-cart section',
          caption: 'Product Detail',
          tone: 'from-amber-100/80 via-orange-100/70 to-yellow-100/80',
        },
        {
          src: '/portfolio/projects/ecommerce/manage_16x10.png',
          fullSrc: '/portfolio/projects/ecommerce/manage.png',
          alt: 'E-Commerce admin product management dashboard',
          caption: 'Admin Management',
          tone: 'from-sky-100/80 via-cyan-100/75 to-teal-100/80',
        },
      ],
    },
  ]

  const currentProject = projects[activeProjectIndex]
  const currentImages = currentProject.images.length
    ? currentProject.images
    : [{
        src: '',
        fullSrc: '',
        alt: 'Project image placeholder',
        caption: 'Preview Placeholder',
        tone: 'from-slate-200/70 to-slate-300/70',
      }]
  const currentImage = currentImages[activeImageIndex]

  const changeProject = (direction) => {
    setProjectDirection(direction)
    setActiveProjectIndex((prev) => (prev + direction + projects.length) % projects.length)
    setActiveImageIndex(0)
    setImageDirection(1)
    setIsLightboxOpen(false)
  }

  const changeImage = (direction) => {
    if (currentImages.length <= 1) return
    setImageDirection(direction)
    setActiveImageIndex((prev) => (prev + direction + currentImages.length) % currentImages.length)
  }

  useEffect(() => {
    if (!isLightboxOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsLightboxOpen(false)
        return
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        changeImage(-1)
        return
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        changeImage(1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isLightboxOpen, activeProjectIndex, currentImages.length])

  return (
    <section className="section-padding pt-1" id="projects">
      <div className="container-width">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.06 }}
        >
          <motion.h2 variants={itemVariants} className="heading text-center">
            Projects
          </motion.h2>

          <motion.div variants={itemVariants} className="relative">
            <button
              type="button"
              onClick={() => changeProject(-1)}
              aria-label="Previous project"
              className="hidden md:inline-flex absolute left-0 top-1/2 z-20 -translate-y-1/2 -translate-x-[130%] h-11 w-11 items-center justify-center rounded-full glass-panel text-slate-700 hover:text-primary hover:border-primary/40 transition-colors"
            >
              <FaChevronLeft size={16} />
            </button>

            <button
              type="button"
              onClick={() => changeProject(1)}
              aria-label="Next project"
              className="hidden md:inline-flex absolute right-0 top-1/2 z-20 -translate-y-1/2 translate-x-[130%] h-11 w-11 items-center justify-center rounded-full glass-panel text-slate-700 hover:text-primary hover:border-primary/40 transition-colors"
            >
              <FaChevronRight size={16} />
            </button>

            <AnimatePresence mode="wait" custom={projectDirection}>
              <motion.article
                key={currentProject.title}
                custom={projectDirection}
                variants={projectSlideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="glass-panel rounded-3xl p-4 sm:p-6 lg:p-8"
              >
                <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
                  <div className="flex flex-col">
                    <div className="mb-3 flex items-center justify-between">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/90">
                        Project {activeProjectIndex + 1} / {projects.length}
                      </p>
                      <div className="md:hidden flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => changeProject(-1)}
                          aria-label="Previous project"
                          className="inline-flex h-9 w-9 items-center justify-center rounded-full glass-panel text-slate-700 hover:text-primary hover:border-primary/40 transition-colors"
                        >
                          <FaChevronLeft size={14} />
                        </button>
                        <button
                          type="button"
                          onClick={() => changeProject(1)}
                          aria-label="Next project"
                          className="inline-flex h-9 w-9 items-center justify-center rounded-full glass-panel text-slate-700 hover:text-primary hover:border-primary/40 transition-colors"
                        >
                          <FaChevronRight size={14} />
                        </button>
                      </div>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-slate-900">{currentProject.title}</h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">{currentProject.description}</p>

                    {currentProject.impact && (
                      <p className="text-xs font-semibold uppercase tracking-[0.13em] text-primary/90 mb-4">
                        {currentProject.impact}
                      </p>
                    )}

                    <div className="flex flex-wrap gap-2 mb-5">
                      {currentProject.tags.map((tag) => (
                        <span key={tag} className="glass-chip px-3 py-1.5 text-xs rounded-full font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <ul className="text-sm text-slate-600 space-y-2 list-disc list-inside marker:text-primary mb-5">
                      {currentProject.features.map((feature, index) => (
                        <li key={index} className="leading-relaxed">
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={currentProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex w-fit items-center gap-2 px-4 py-2 glass-outline-button rounded-xl transition-colors"
                    >
                      <FaGithub size={18} />
                      <span>View on GitHub</span>
                    </a>
                  </div>

                  <div className="flex h-full flex-col justify-center">
                    <div
                      role={currentImage.src ? 'button' : undefined}
                      tabIndex={currentImage.src ? 0 : -1}
                      onClick={() => currentImage.src && setIsLightboxOpen(true)}
                      onKeyDown={(event) => {
                        if (!currentImage.src) return
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault()
                          setIsLightboxOpen(true)
                        }
                      }}
                      className="relative w-full overflow-hidden rounded-2xl border border-white/80 bg-white/45 shadow-sm backdrop-blur-xl aspect-[16/10] cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
                    >
                      <AnimatePresence mode="wait" custom={imageDirection}>
                        <motion.div
                          key={`${currentProject.title}-${activeImageIndex}`}
                          custom={imageDirection}
                          variants={imageSlideVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          className="h-full w-full"
                        >
                          {currentImage.src ? (
                            <img
                              src={currentImage.src}
                              alt={currentImage.alt}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div
                              className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${currentImage.tone}`}
                            >
                              <div className="mx-6 rounded-2xl border border-white/80 bg-white/65 px-6 py-4 text-center shadow-sm backdrop-blur">
                                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500 mb-2">
                                  Preview Placeholder
                                </p>
                                <p className="text-sm sm:text-base font-semibold text-slate-700">
                                  {currentImage.caption}
                                </p>
                              </div>
                            </div>
                          )}
                        </motion.div>
                      </AnimatePresence>

                      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3">
                        <button
                          type="button"
                          onClick={(event) => {
                            event.stopPropagation()
                            changeImage(-1)
                          }}
                          aria-label="Previous image"
                          disabled={currentImages.length <= 1}
                          className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 border border-white/90 text-slate-700 shadow-sm backdrop-blur transition-colors hover:text-primary disabled:opacity-45 disabled:cursor-not-allowed"
                        >
                          <FaChevronLeft size={14} />
                        </button>
                        <button
                          type="button"
                          onClick={(event) => {
                            event.stopPropagation()
                            changeImage(1)
                          }}
                          aria-label="Next image"
                          disabled={currentImages.length <= 1}
                          className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 border border-white/90 text-slate-700 shadow-sm backdrop-blur transition-colors hover:text-primary disabled:opacity-45 disabled:cursor-not-allowed"
                        >
                          <FaChevronRight size={14} />
                        </button>
                      </div>

                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-white/85 bg-white/75 px-3 py-1 text-xs font-medium text-slate-600 backdrop-blur">
                        {activeImageIndex + 1} / {currentImages.length}
                      </div>
                    </div>

                    <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
                      {currentImages.map((image, index) => (
                        <button
                          key={`${image.caption}-${index}`}
                          type="button"
                          onClick={() => {
                            if (index === activeImageIndex) return
                            setImageDirection(index > activeImageIndex ? 1 : -1)
                            setActiveImageIndex(index)
                          }}
                          className={`h-2.5 rounded-full transition-all ${
                            index === activeImageIndex
                              ? 'w-7 bg-primary/90'
                              : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                          }`}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </motion.div>

          <AnimatePresence>
            {isLightboxOpen && (
              <motion.div
                className="fixed inset-0 z-[80] bg-slate-950/85 backdrop-blur-sm p-4 sm:p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsLightboxOpen(false)}
                role="dialog"
                aria-modal="true"
                aria-label={`${currentProject.title} image viewer`}
              >
                <div className="h-full w-full flex items-center justify-center">
                  <motion.div
                    className="relative w-full max-w-6xl"
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.985, y: 8 }}
                    animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
                    exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.985, y: 8 }}
                    transition={{ duration: shouldReduceMotion ? 0.12 : 0.22, ease: [0.22, 1, 0.36, 1] }}
                    onClick={(event) => event.stopPropagation()}
                  >
                    <button
                      type="button"
                      onClick={() => setIsLightboxOpen(false)}
                      aria-label="Close fullscreen preview"
                      className="absolute -top-12 right-0 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20"
                    >
                      <FaTimes size={16} />
                    </button>

                    <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-black/80 shadow-2xl aspect-[16/10]">
                      <AnimatePresence mode="wait" custom={imageDirection}>
                        <motion.div
                          key={`lightbox-${currentProject.title}-${activeImageIndex}`}
                          custom={imageDirection}
                          variants={imageSlideVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          className="h-full w-full"
                        >
                          {currentImage.src ? (
                            <img
                              src={currentImage.fullSrc || currentImage.src}
                              alt={currentImage.alt}
                              className="h-full w-full object-contain"
                            />
                          ) : (
                            <div
                              className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${currentImage.tone}`}
                            >
                              <p className="text-white/90 font-semibold tracking-wide px-6 text-center">
                                {currentImage.caption}
                              </p>
                            </div>
                          )}
                        </motion.div>
                      </AnimatePresence>

                      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
                        <button
                          type="button"
                          onClick={(event) => {
                            event.stopPropagation()
                            changeImage(-1)
                          }}
                          aria-label="Previous image"
                          disabled={currentImages.length <= 1}
                          className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white shadow-sm backdrop-blur transition-colors hover:bg-white/25 disabled:opacity-45 disabled:cursor-not-allowed"
                        >
                          <FaChevronLeft size={16} />
                        </button>
                        <button
                          type="button"
                          onClick={(event) => {
                            event.stopPropagation()
                            changeImage(1)
                          }}
                          aria-label="Next image"
                          disabled={currentImages.length <= 1}
                          className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white shadow-sm backdrop-blur transition-colors hover:bg-white/25 disabled:opacity-45 disabled:cursor-not-allowed"
                        >
                          <FaChevronRight size={16} />
                        </button>
                      </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between gap-3 text-white/90">
                      <p className="text-sm font-medium truncate">{currentImage.caption}</p>
                      <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
                        {activeImageIndex + 1} / {currentImages.length}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div variants={itemVariants} className="text-center mt-10">
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
