import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion'
import {
  ArrowUpRight,
  Award,
  Bot,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  CloudCog,
  ShieldCheck,
} from 'lucide-react'
import { FaAws, FaDocker, FaJava, FaReact } from 'react-icons/fa'
import { LuMousePointer2, LuUserCheck } from 'react-icons/lu'
import { RiOpenaiLine } from 'react-icons/ri'
import {
  SiAnthropic,
  SiApachekafka,
  SiGithubactions,
  SiJavascript,
  SiKubernetes,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiSpringboot,
  SiTerraform,
  SiTypescript,
  SiVite,
} from 'react-icons/si'
import { TbActivityHeartbeat, TbGitBranch, TbTestPipe } from 'react-icons/tb'
import PropTypes from 'prop-types'

const principles = [
  {
    id: 'reliability',
    number: '01',
    title: 'Reliable by default',
    kicker: 'Build for the real operating day',
    description: 'Java and Spring Boot services shaped by tests, observable signals, and quality gates before a release reaches production.',
    supports: ['Java / Spring Boot', 'Testing', 'Observability', 'Quality gates'],
    icon: ShieldCheck,
    rotation: -2.2,
    offset: 42,
    tone: 'cobalt',
  },
  {
    id: 'cloud-intent',
    number: '02',
    title: 'Cloud with intent',
    kicker: 'Infrastructure should explain itself',
    description: 'AWS delivery with Terraform, Docker, and CI/CD that stays operable, repeatable, and conscious of ongoing cost.',
    supports: ['AWS', 'Terraform', 'Docker', 'CI/CD'],
    icon: CloudCog,
    rotation: 1.7,
    offset: -34,
    tone: 'azure',
  },
  {
    id: 'ai-guardrails',
    number: '03',
    title: 'AI, with guardrails',
    kicker: 'Speed earns trust through proof',
    description: 'Spec-driven AI workflows stay accountable through human review and automated verification—not inflated claims.',
    supports: ['Spec-driven', 'Human review', 'Automated verification'],
    icon: Bot,
    rotation: -1.3,
    offset: 30,
    tone: 'sky',
  },
]

const technologyGroups = [
  {
    label: 'Frontend',
    items: [
      { name: 'React', icon: FaReact, color: '#61DAFB', iconStyle: 'detail' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#111827', iconStyle: 'solid' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', iconStyle: 'solid' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', iconStyle: 'solid' },
      { name: 'Vite', icon: SiVite, color: '#646CFF', iconStyle: 'solid' },
    ],
  },
  {
    label: 'Backend',
    items: [
      { name: 'Java', icon: FaJava, color: '#ED8B00', iconStyle: 'detail' },
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F', iconStyle: 'detail' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933', iconStyle: 'detail' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', iconStyle: 'detail' },
      { name: 'Kafka', icon: SiApachekafka, color: '#231F20', iconStyle: 'detail' },
    ],
  },
  {
    label: 'Cloud',
    items: [
      { name: 'AWS', icon: FaAws, color: '#FF9900', iconStyle: 'detail' },
      { name: 'Terraform', icon: SiTerraform, color: '#844FBA', iconStyle: 'solid' },
      { name: 'Docker', icon: FaDocker, color: '#2496ED', iconStyle: 'detail' },
      { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5', iconStyle: 'detail' },
    ],
  },
  {
    label: 'Delivery',
    items: [
      { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF', iconStyle: 'detail' },
      { name: 'CI/CD', icon: TbGitBranch, color: '#8B5CF6', iconStyle: 'outline' },
      { name: 'Testing', icon: TbTestPipe, color: '#F43F5E', iconStyle: 'outline' },
      { name: 'Observability', icon: TbActivityHeartbeat, color: '#14B8A6', iconStyle: 'outline' },
    ],
  },
  {
    label: 'AI Workflow',
    items: [
      { name: 'Claude Code', icon: SiAnthropic, color: '#D97757', iconStyle: 'solid' },
      { name: 'Codex', icon: RiOpenaiLine, color: '#10A37F', iconStyle: 'solid' },
      { name: 'Cursor', icon: LuMousePointer2, color: '#7C3AED', iconStyle: 'outline' },
      { name: 'Human review', icon: LuUserCheck, color: '#F59E0B', iconStyle: 'outline' },
    ],
  },
]

const certifications = [
  {
    issuer: 'AWS', title: 'Developer Associate', name: 'DVA-C02',
    summary: 'Associate badge validating application delivery across core AWS services.',
    image: '/portfolio/dvac02.png',
    href: 'https://www.credly.com/badges/f68690b3-1e68-46d8-ae56-366bd880c0e5/linked_in_profile',
  },
  {
    issuer: 'AWS', title: 'Cloud Practitioner', name: 'CLF-C02',
    summary: 'Foundational certification covering cloud concepts, billing, security, and operations.',
    image: '/portfolio/clf-c02.png',
    href: 'https://www.credly.com/badges/ff21fdcd-97e7-42a1-9e15-ddf052af8c57/linked_in_profile',
  },
  {
    issuer: 'Skilljar', title: 'Introduction to agent skills', name: 'Verified Certificate',
    summary: 'Course completion credential focused on agent skills fundamentals and workflow literacy.',
    image: '/portfolio/anthropic-icon.svg',
    href: 'http://verify.skilljar.com/c/7owbue56fohe',
  },
  {
    issuer: 'Skilljar', title: 'Introduction to subagents', name: 'Verified Certificate',
    summary: 'Credential covering the structure, delegation model, and practical use of subagents.',
    image: '/portfolio/anthropic-icon.svg',
    href: 'http://verify.skilljar.com/c/muit9mnrkf6k',
  },
  {
    issuer: 'Skilljar', title: 'AI Fluency for students', name: 'Verified Certificate',
    summary: 'Course credential highlighting prompt fluency, AI literacy, and student-facing workflows.',
    image: '/portfolio/anthropic-icon.svg',
    href: 'http://verify.skilljar.com/c/uincy7b9xx7n',
  },
  {
    issuer: 'Skilljar', title: 'AI Fluency: Framework & Foundations', name: 'Verified Certificate',
    summary: 'Credential focused on core AI fluency concepts and responsible practical foundations.',
    image: '/portfolio/anthropic-icon.svg',
    href: 'http://verify.skilljar.com/c/dhsm37rahfvo',
  },
  {
    issuer: 'Skilljar', title: 'Introduction to Model Context Protocol', name: 'Verified Certificate',
    summary: 'Credential covering MCP fundamentals, interoperability, and practical integration patterns.',
    image: '/portfolio/anthropic-icon.svg',
    href: 'http://verify.skilljar.com/c/bug9uruh9bov',
  },
  {
    issuer: 'Skilljar', title: 'Model Context Protocol: Advanced Topics', name: 'Verified Certificate',
    summary: 'Advanced credential covering deeper MCP patterns and higher-confidence integrations.',
    image: '/portfolio/anthropic-icon.svg',
    href: 'https://verify.skilljar.com/c/a3h5owxvhpzu',
  },
]

const TechnologyItem = ({ technology }) => {
  const Icon = technology.icon
  return (
    <li className="technology-item">
      <span
        className="technology-icon"
        data-icon-style={technology.iconStyle}
        style={{ '--technology-color': technology.color }}
        aria-hidden="true"
      >
        <Icon focusable="false" />
      </span>
      <span>{technology.name}</span>
    </li>
  )
}

TechnologyItem.propTypes = {
  technology: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    color: PropTypes.string.isRequired,
    iconStyle: PropTypes.oneOf(['detail', 'solid', 'outline']).isRequired,
  }).isRequired,
}

const TechnologySet = ({ hidden = false }) => (
  <div className="technology-ticker-set" aria-hidden={hidden || undefined}>
    {technologyGroups.map((group) => (
      <div className="technology-ticker-group" key={group.label}>
        <span className="technology-ticker-label">{group.label}</span>
        <ul aria-label={`${group.label} technologies`}>
          {group.items.map((technology) => (
            <TechnologyItem technology={technology} key={technology.name} />
          ))}
        </ul>
      </div>
    ))}
  </div>
)

TechnologySet.propTypes = {
  hidden: PropTypes.bool,
}

const CertificationCard = ({ certification }) => (
  <a
    className="editorial-certification-card"
    href={certification.href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className="editorial-certification-media">
      {certification.image ? <img src={certification.image} alt="" /> : <Award aria-hidden="true" />}
    </span>
    <span className="editorial-certification-copy">
      <span className="editorial-certification-issuer">{certification.issuer} · {certification.name}</span>
      <strong>{certification.title}</strong>
      <span>{certification.summary}</span>
    </span>
    <ArrowUpRight className="editorial-certification-arrow" aria-hidden="true" />
  </a>
)

CertificationCard.propTypes = {
  certification: PropTypes.shape({
    issuer: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    image: PropTypes.string,
    href: PropTypes.string.isRequired,
  }).isRequired,
}

const Skills = () => {
  const shouldReduceMotion = useReducedMotion()
  const tickerRef = useRef(null)
  const isTickerInView = useInView(tickerRef, { amount: 0.1 })
  const [isTechnologyIndexOpen, setIsTechnologyIndexOpen] = useState(false)
  const [isCertificationsOpen, setIsCertificationsOpen] = useState(false)
  const [isMobileViewport, setIsMobileViewport] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 639px)')
    const syncViewport = () => setIsMobileViewport(mediaQuery.matches)
    syncViewport()
    mediaQuery.addEventListener?.('change', syncViewport)
    return () => mediaQuery.removeEventListener?.('change', syncViewport)
  }, [])

  const visibleLimit = isMobileViewport ? 3 : 6
  const visibleCertifications = isCertificationsOpen
    ? certifications
    : certifications.slice(0, visibleLimit)
  const tickerPaused = !isTickerInView || shouldReduceMotion

  return (
    <section className="editorial-stack-section" id="stack">
      <div className="editorial-stack-grid" aria-hidden="true" />
      <div className="editorial-stack-inner">
        <header className="editorial-stack-heading">
          <p>How I shape dependable software</p>
          <h2>
            <span>ENGINEERING</span>
            <strong>PRINCIPLES</strong>
          </h2>
        </header>

        <div className="principle-stack">
          {principles.map((principle, index) => {
            const Icon = principle.icon
            return (
              <motion.article
                className="principle-card"
                data-tone={principle.tone}
                key={principle.id}
                initial={shouldReduceMotion ? false : {
                  opacity: 0,
                  rotate: principle.rotation * 2.4,
                  x: principle.offset,
                  y: 54,
                }}
                whileInView={shouldReduceMotion ? undefined : {
                  opacity: 1,
                  rotate: principle.rotation,
                  x: 0,
                  y: 0,
                }}
                viewport={{ once: true, amount: 0.32 }}
                transition={{ duration: 0.72, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={shouldReduceMotion ? undefined : { y: -9, scale: 1.008 }}
              >
                <div className="principle-card-band">
                  <span>{principle.number}</span>
                  <span>{principle.kicker}</span>
                </div>
                <div className="principle-card-body">
                  <div className="principle-card-icon" aria-hidden="true"><Icon /></div>
                  <div className="principle-card-copy">
                    <h3>{principle.title}</h3>
                    <p>{principle.description}</p>
                    <ul aria-label={`${principle.title} supporting technologies`}>
                      {principle.supports.map((support) => (
                        <li key={support}><CheckCircle2 aria-hidden="true" />{support}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        <div
          className="technology-ticker"
          ref={tickerRef}
          aria-label="Technology stack"
          data-paused={tickerPaused ? 'true' : 'false'}
        >
          <div className="technology-ticker-heading">
            <span>Technology index</span>
            <div className="technology-ticker-controls">
              <span>Backend → cloud → verified delivery</span>
              <div className="technology-ticker-actions">
                <button
                  type="button"
                  aria-expanded={isTechnologyIndexOpen}
                  aria-controls="technology-index-panel"
                  onClick={() => setIsTechnologyIndexOpen((current) => !current)}
                >
                  {isTechnologyIndexOpen ? 'Collapse stack' : 'Expand stack'}
                  {isTechnologyIndexOpen
                    ? <ChevronUp aria-hidden="true" />
                    : <ChevronDown aria-hidden="true" />}
                </button>
              </div>
            </div>
          </div>
          <div className="technology-ticker-viewport">
            <div className="technology-ticker-track">
              <TechnologySet />
              <TechnologySet hidden />
            </div>
          </div>
          <AnimatePresence initial={false}>
            {isTechnologyIndexOpen && (
              <motion.div
                className="technology-index-panel"
                id="technology-index-panel"
                initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.42, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="technology-index-grid">
                  {technologyGroups.map((group) => (
                    <section className="technology-index-group" key={group.label}>
                      <h3>{group.label}</h3>
                      <ul aria-label={`${group.label} technology index`}>
                        {group.items.map((technology) => (
                          <TechnologyItem technology={technology} key={technology.name} />
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <section className="editorial-certifications" aria-labelledby="certifications-title">
          <header>
            <div>
              <p>Verified credentials</p>
              <h3 id="certifications-title">Proof behind the practice.</h3>
            </div>
            <span>{certifications.length.toString().padStart(2, '0')} credentials</span>
          </header>
          <div className="editorial-certifications-grid" id="certification-list">
            {visibleCertifications.map((certification) => (
              <CertificationCard
                certification={certification}
                key={`${certification.issuer}-${certification.title}`}
              />
            ))}
          </div>
          {certifications.length > visibleLimit && (
            <button
              className="editorial-certifications-toggle"
              type="button"
              aria-expanded={isCertificationsOpen}
              aria-controls="certification-list"
              onClick={() => setIsCertificationsOpen((current) => !current)}
            >
              {isCertificationsOpen ? 'Show fewer' : `Show all ${certifications.length}`}
              {isCertificationsOpen ? <ChevronUp aria-hidden="true" /> : <ChevronDown aria-hidden="true" />}
            </button>
          )}
        </section>
      </div>
    </section>
  )
}

export default Skills
