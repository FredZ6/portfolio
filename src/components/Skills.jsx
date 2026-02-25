import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import {
  FaReact,
  FaAws,
  FaGitAlt,
  FaDocker,
  FaNodeJs,
  FaLinux,
  FaJava,
  FaHtml5,
  FaCss3Alt
} from 'react-icons/fa'
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiSpring,
  SiMui,
  SiRedis,
  SiMongodb,
  SiPostgresql,
  SiGithubactions,
  SiKubernetes,
  SiApachekafka,
  SiRabbitmq,
  SiVuedotjs,
  SiRedux,
  SiTerraform,
  SiGraphql,
  SiNginx,
  SiJenkins
} from 'react-icons/si'

const clampNumber = (value, min, max) => Math.min(max, Math.max(min, value))

const parsePct = (value) => Number.parseFloat(String(value).replace('%', '')) / 100

const createFallbackAnchor = (index, total) => {
  const cols = Math.ceil(Math.sqrt(total))
  const row = Math.floor(index / cols)
  const col = index % cols
  const rowStep = 100 / (Math.ceil(total / cols) + 1)
  const colStep = 100 / (cols + 1)
  return {
    left: `${colStep * (col + 1)}%`,
    top: `${rowStep * (row + 1)}%`,
  }
}

const SkillBubbleField = ({ skills, iconAnchors, shouldReduceMotion, nodeIndex }) => {
  const stageRef = useRef(null)
  const bubbleRefs = useRef([])
  const frameRef = useRef(null)
  const [stageSize, setStageSize] = useState({ width: 0, height: 0 })
  const [bubbleMetrics, setBubbleMetrics] = useState({ bubbleDiameter: 64, iconSize: 32 })

  const normalizedAnchors = useMemo(
    () =>
      skills.map((_, index) => {
        const anchor = iconAnchors[index] ?? createFallbackAnchor(index, skills.length)
        return {
          x: parsePct(anchor.left),
          y: parsePct(anchor.top),
        }
      }),
    [iconAnchors, skills]
  )

  useEffect(() => {
    const stageEl = stageRef.current
    if (!stageEl) return undefined

    const updateSize = () => {
      setStageSize({
        width: stageEl.clientWidth,
        height: stageEl.clientHeight,
      })
    }

    updateSize()
    if (typeof ResizeObserver === 'undefined') return undefined

    const observer = new ResizeObserver(updateSize)
    observer.observe(stageEl)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const { width, height } = stageSize
    if (!width || !height) return undefined

    if (frameRef.current) cancelAnimationFrame(frameRef.current)

    const count = skills.length
    const rows = Math.ceil(Math.sqrt(count))
    const cols = Math.ceil(count / rows)
    const spacing = clampNumber(Math.min(width, height) * 0.045, 4, 10)
    const availableWidth = Math.max(width - spacing * 2, 1)
    const availableHeight = Math.max(height - spacing * 2, 1)
    const fitByWidth = (availableWidth - spacing * (cols - 1)) / cols
    const fitByHeight = (availableHeight - spacing * (rows - 1)) / rows
    const desiredBubble = Math.min(width, height) * 0.38
    const bubbleDiameter = clampNumber(Math.min(desiredBubble, fitByWidth, fitByHeight), 42, 90)
    const iconSize = clampNumber(bubbleDiameter * 0.56, 24, 38)
    const radius = bubbleDiameter / 2
    const collisionGap = clampNumber(Math.min(width, height) * 0.015, 2, 5)
    const centerX = width / 2
    const centerY = height / 2
    const boundaryRadius = Math.max(Math.min(width, height) / 2 - radius - collisionGap, 1)

    setBubbleMetrics({ bubbleDiameter, iconSize })

    const confineToCircle = (particle, bounce = false) => {
      const dx = particle.x - centerX
      const dy = particle.y - centerY
      const dist = Math.hypot(dx, dy) || 0.001

      if (dist <= boundaryRadius) return

      const nx = dx / dist
      const ny = dy / dist
      particle.x = centerX + nx * boundaryRadius
      particle.y = centerY + ny * boundaryRadius

      if (bounce) {
        const vn = particle.vx * nx + particle.vy * ny
        if (vn > 0) {
          const bounceFactor = 1.9
          particle.vx -= bounceFactor * vn * nx
          particle.vy -= bounceFactor * vn * ny
        }
      }
    }

    const particles = skills.map((_, index) => {
      const anchor = normalizedAnchors[index]
      const initialX = anchor.x * width
      const initialY = anchor.y * height
      const angle = (((nodeIndex + 1) * 131 + (index + 1) * 59) * Math.PI) / 180
      const speed = shouldReduceMotion ? 0 : clampNumber(bubbleDiameter * 0.18, 10, 18)
      const baseSeed = (nodeIndex + 1) * 97 + (index + 1) * 53
      const particle = {
        x: initialX,
        y: initialY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        r: radius,
        phaseX: ((baseSeed * 37) % 360) * (Math.PI / 180),
        phaseY: ((baseSeed * 53) % 360) * (Math.PI / 180),
        freqX: 0.42 + ((baseSeed % 7) * 0.07),
        freqY: 0.36 + ((baseSeed % 5) * 0.08),
        drive: clampNumber(bubbleDiameter * 0.44, 18, 34),
      }
      confineToCircle(particle, false)
      return particle
    })

    const resolveParticleCollisions = (restitution = 0.9) => {
      for (let i = 0; i < particles.length; i += 1) {
        const a = particles[i]
        for (let j = i + 1; j < particles.length; j += 1) {
          const b = particles[j]
          const dx = b.x - a.x
          const dy = b.y - a.y
          const dist = Math.hypot(dx, dy) || 0.001
          const minDist = a.r + b.r + collisionGap
          if (dist >= minDist) continue

          const nx = dx / dist
          const ny = dy / dist
          const overlap = minDist - dist

          a.x -= nx * (overlap / 2)
          a.y -= ny * (overlap / 2)
          b.x += nx * (overlap / 2)
          b.y += ny * (overlap / 2)

          const rvx = b.vx - a.vx
          const rvy = b.vy - a.vy
          const normalSpeed = rvx * nx + rvy * ny
          if (normalSpeed < 0) {
            const impulse = (-(1 + restitution) * normalSpeed) / 2
            a.vx -= impulse * nx
            a.vy -= impulse * ny
            b.vx += impulse * nx
            b.vy += impulse * ny
          }
        }
      }
    }

    const syncToDom = () => {
      particles.forEach((particle, particleIndex) => {
        const bubbleEl = bubbleRefs.current[particleIndex]
        if (!bubbleEl) return
        bubbleEl.style.transform = `translate3d(${particle.x - particle.r}px, ${particle.y - particle.r}px, 0px)`
      })
    }

    // Initial non-overlap relaxation.
    for (let step = 0; step < 28; step += 1) {
      resolveParticleCollisions(0.8)
      particles.forEach((particle) => {
        confineToCircle(particle, false)
      })
    }

    syncToDom()

    if (shouldReduceMotion) return undefined

    let last = performance.now()
    const tick = (now) => {
      const dt = Math.min((now - last) / 1000, 0.033)
      const time = now / 1000
      last = now

      particles.forEach((particle) => {
        const driftForceX = Math.sin(time * particle.freqX + particle.phaseX) * particle.drive
        const driftForceY = Math.cos(time * particle.freqY + particle.phaseY) * particle.drive

        particle.vx += ((centerX - particle.x) * 0.28 + driftForceX) * dt
        particle.vy += ((centerY - particle.y) * 0.28 + driftForceY) * dt

        const maxSpeed = 26
        const speed = Math.hypot(particle.vx, particle.vy)
        if (speed > maxSpeed) {
          const ratio = maxSpeed / speed
          particle.vx *= ratio
          particle.vy *= ratio
        }

        particle.vx *= 0.996
        particle.vy *= 0.996

        particle.x += particle.vx * dt
        particle.y += particle.vy * dt
        confineToCircle(particle, true)
      })

      resolveParticleCollisions(0.9)

      particles.forEach((particle) => {
        confineToCircle(particle, true)
      })

      syncToDom()
      frameRef.current = requestAnimationFrame(tick)
    }

    frameRef.current = requestAnimationFrame(tick)
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [normalizedAnchors, shouldReduceMotion, skills, stageSize, nodeIndex])

  return (
    <div ref={stageRef} className="relative mt-1.5" style={{ height: '80%' }}>
      {skills.map((skill, skillIndex) => (
        <div
          key={skill.name}
          ref={(element) => {
            bubbleRefs.current[skillIndex] = element
          }}
          className="absolute inline-flex items-center justify-center rounded-full border border-white/90 bg-white/95 shadow-sm"
          style={{
            width: `${bubbleMetrics.bubbleDiameter}px`,
            height: `${bubbleMetrics.bubbleDiameter}px`,
            transform: 'translate3d(-9999px, -9999px, 0px)',
            willChange: 'transform',
          }}
          title={skill.name}
        >
          <span
            style={{
              fontSize: `${bubbleMetrics.iconSize}px`,
              color: skill.color,
              lineHeight: 1,
            }}
          >
            {skill.icon}
          </span>
        </div>
      ))}
    </div>
  )
}

const Skills = () => {
  const shouldReduceMotion = useReducedMotion()
  const [activeNodeIndex, setActiveNodeIndex] = useState(null)
  const smallOrbitRadiusPct = 24

  const getNodeAnchor = (angleDeg) => {
    const rad = (angleDeg * Math.PI) / 180
    return {
      left: `${50 + smallOrbitRadiusPct * Math.cos(rad)}%`,
      top: `${50 + smallOrbitRadiusPct * Math.sin(rad)}%`,
    }
  }

  const getNodeScale = (index) => {
    if (activeNodeIndex === null) return 1
    return activeNodeIndex === index ? 1.08 : 0.9
  }

  const sectionVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0.45, y: shouldReduceMotion ? 0 : 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.15 : 0.44,
        ease: [0.22, 1, 0.36, 1],
        when: 'beforeChildren',
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0.6, y: shouldReduceMotion ? 0 : 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.15 : 0.34,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const orbitNodes = [
    {
      title: 'Backend',
      angleDeg: -90,
      drift: {
        x: [0, 3.2, -1.8, 2.6, -2.9, 0],
        y: [0, -2.7, 3.4, -2.2, 1.7, 0],
        duration: 21.8,
        delay: 0.2,
      },
      iconAnchors: [
        { left: '28%', top: '30%' },
        { left: '50%', top: '23%' },
        { left: '72%', top: '30%' },
        { left: '22%', top: '49%' },
        { left: '50%', top: '45%' },
        { left: '78%', top: '49%' },
        { left: '28%', top: '70%' },
        { left: '50%', top: '78%' },
        { left: '72%', top: '70%' },
      ],
      skills: [
        { name: 'Spring Boot', icon: <SiSpring />, color: '#6DB33F' },
        { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
        { name: 'Redis', icon: <SiRedis />, color: '#DC382D' },
        { name: 'Kafka', icon: <SiApachekafka />, color: '#111827' },
        { name: 'RabbitMQ', icon: <SiRabbitmq />, color: '#FF6600' },
        { name: 'Java', icon: <FaJava />, color: '#F89820' },
        { name: 'GraphQL', icon: <SiGraphql />, color: '#E10098' },
      ],
    },
    {
      title: 'Frontend',
      angleDeg: 150,
      drift: {
        x: [0, -3.0, 1.9, -2.4, 2.7, 0],
        y: [0, 2.5, -3.2, 2.0, -1.5, 0],
        duration: 22.7,
        delay: 0.7,
      },
      iconAnchors: [
        { left: '28%', top: '30%' },
        { left: '50%', top: '23%' },
        { left: '72%', top: '30%' },
        { left: '22%', top: '49%' },
        { left: '50%', top: '45%' },
        { left: '78%', top: '49%' },
        { left: '28%', top: '70%' },
        { left: '50%', top: '78%' },
        { left: '72%', top: '70%' },
      ],
      skills: [
        { name: 'React', icon: <FaReact />, color: '#61DAFB' },
        { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
        { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' },
        { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4' },
        { name: 'Material UI', icon: <SiMui />, color: '#007FFF' },
        { name: 'Vue', icon: <SiVuedotjs />, color: '#42B883' },
        { name: 'Redux', icon: <SiRedux />, color: '#764ABC' },
        { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
        { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
      ],
    },
    {
      title: 'DevOps',
      angleDeg: 30,
      drift: {
        x: [0, 2.8, -2.1, 1.8, -2.5, 0],
        y: [0, 2.2, -3.0, 2.4, -1.7, 0],
        duration: 20.9,
        delay: 0.4,
      },
      iconAnchors: [
        { left: '28%', top: '30%' },
        { left: '50%', top: '23%' },
        { left: '72%', top: '30%' },
        { left: '22%', top: '49%' },
        { left: '50%', top: '45%' },
        { left: '78%', top: '49%' },
        { left: '28%', top: '70%' },
        { left: '50%', top: '78%' },
        { left: '72%', top: '70%' },
      ],
      skills: [
        { name: 'AWS', icon: <FaAws />, color: '#FF9900' },
        { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
        { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
        { name: 'Kubernetes', icon: <SiKubernetes />, color: '#326CE5' },
        { name: 'GitHub Actions', icon: <SiGithubactions />, color: '#2088FF' },
        { name: 'Terraform', icon: <SiTerraform />, color: '#7B42BC' },
        { name: 'Linux', icon: <FaLinux />, color: '#111827' },
        { name: 'Nginx', icon: <SiNginx />, color: '#009639' },
        { name: 'Jenkins', icon: <SiJenkins />, color: '#D24939' },
      ],
    },
  ]

  const certifications = [
    {
      name: 'AWS Certified Developer Associate (DVA-C02)',
      image: '/portfolio/dvac02.png',
      link: 'https://www.credly.com/badges/f68690b3-1e68-46d8-ae56-366bd880c0e5/linked_in_profile',
      alt: 'AWS Certified Developer Associate badge',
    },
    {
      name: 'AWS Certified Cloud Practitioner (CLF-C02)',
      image: '/portfolio/clf-c02.png',
      link: 'https://www.credly.com/badges/ff21fdcd-97e7-42a1-9e15-ddf052af8c57/linked_in_profile',
      alt: 'AWS Certified Cloud Practitioner badge',
    },
  ]

  return (
    <section className="section-padding pt-1" id="skills">
      <div className="container-width">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.06 }}
        >
          <motion.h2 variants={itemVariants} className="heading !mb-6 text-center tracking-tight sm:!mb-7">
            Skills & Expertise
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mx-auto mb-6 max-w-3xl text-center text-slate-600 leading-relaxed font-mono tracking-wide text-sm sm:mb-8 sm:text-base"
          >
            With AI-native development workflows, I can quickly move across backend, frontend, and DevOps tooling while
            keeping delivery quality and speed aligned.
          </motion.p>

          <motion.div variants={itemVariants} className="pt-6 text-center sm:pt-8 mb-8 sm:mb-10">
            <p className="text-lg font-semibold uppercase leading-none tracking-[0.16em] text-primary/90 sm:text-xl">
              AI-native dev workflow
            </p>
            <p className="mt-3 text-xs leading-[1.45] text-slate-600 sm:text-sm">
              Any stack, lower learning cost, faster delivery.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative mx-auto overflow-visible"
            style={{
              width: 'min(96vw, 920px)',
              height: 'min(96vw, 920px)',
              minWidth: 440,
              minHeight: 440,
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-full border border-white/90 bg-gradient-to-br from-primary/26 to-primary/12 shadow-[0_40px_80px_-48px_rgba(15,23,42,0.45)]"
              animate={shouldReduceMotion ? undefined : { scale: [1, 1.01, 1] }}
              transition={shouldReduceMotion ? undefined : { duration: 8.8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-primary to-primary/50 blur-2xl opacity-30"
              animate={shouldReduceMotion ? undefined : { opacity: [0.24, 0.4, 0.24], scale: [0.98, 1.02, 0.98] }}
              transition={shouldReduceMotion ? undefined : { duration: 5.8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="pointer-events-none absolute rounded-full border border-white/75" style={{ inset: '2.2%' }} />
            <div className="pointer-events-none absolute rounded-full border border-white/55" style={{ inset: '5.2%' }} />

            {orbitNodes.map((node, index) => (
              <div
                key={node.title}
                className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                style={getNodeAnchor(node.angleDeg)}
              >
                <motion.div
                  className="will-change-transform"
                  onMouseEnter={() => setActiveNodeIndex(index)}
                  onMouseLeave={() => setActiveNodeIndex((current) => (current === index ? null : current))}
                  animate={{ scale: getNodeScale(index) }}
                  transition={{
                    type: 'spring',
                    stiffness: 280,
                    damping: 24,
                    mass: 0.9,
                  }}
                >
                  <motion.article
                    className="overflow-hidden rounded-full border border-white/85 bg-white/75 p-3 shadow-[0_14px_30px_-18px_rgba(15,23,42,0.45)] backdrop-blur-xl"
                    style={{
                      width: 'clamp(220px, 31vw, 340px)',
                      height: 'clamp(220px, 31vw, 340px)',
                    }}
                    animate={
                      shouldReduceMotion
                        ? { x: 0, y: 0 }
                        : {
                            x: node.drift.x,
                            y: node.drift.y,
                          }
                    }
                    transition={
                      shouldReduceMotion
                        ? undefined
                        : {
                            duration: node.drift.duration,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            repeatType: 'mirror',
                            delay: node.drift.delay + index * 0.12,
                          }
                    }
                  >
                    <h3 className="text-center text-base sm:text-lg font-semibold text-slate-900">
                      {node.title}
                    </h3>

                    <SkillBubbleField
                      skills={node.skills}
                      iconAnchors={node.iconAnchors}
                      shouldReduceMotion={shouldReduceMotion}
                      nodeIndex={index}
                    />
                  </motion.article>
                </motion.div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="mt-14 glass-panel rounded-3xl p-6 sm:p-8">
            <div className="mb-6 flex items-center justify-center gap-3">
              <FaAws className="text-2xl text-[#FF9900]" />
              <h3 className="text-2xl font-bold text-slate-900">Certification</h3>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {certifications.map((certification) => (
                <div key={certification.name} className="flex flex-col items-center text-center">
                  <a
                    href={certification.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex rounded-2xl p-2 transition-transform"
                    aria-label={`Open credential link for ${certification.name}`}
                  >
                    <img
                      src={certification.image}
                      alt={certification.alt}
                      className="h-44 w-44 object-contain transition-transform duration-300 group-hover:scale-105 sm:h-52 sm:w-52"
                    />
                  </a>
                  <p className="mt-3 text-lg text-slate-600">{certification.name}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
