import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Award, ChevronDown, ChevronUp } from 'lucide-react'
import {
  FaAws,
  FaDocker,
  FaLinux,
  FaNodeJs,
  FaJava,
  FaReact,
} from 'react-icons/fa'
import {
  SiApachekafka,
  SiGithubactions,
  SiGraphql,
  SiKubernetes,
  SiMongodb,
  SiNextdotjs,
  SiNginx,
  SiPostgresql,
  SiRabbitmq,
  SiRedis,
  SiRedux,
  SiSpring,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
  SiVuedotjs,
} from 'react-icons/si'
import { RiClaudeLine, RiGeminiLine, RiOpenaiLine } from 'react-icons/ri'
import { TbPencilCode } from 'react-icons/tb'
import PropTypes from 'prop-types'

const capabilityClusters = [
  {
    id: 'frontend',
    eyebrow: 'Experience Layer',
    title: 'Frontend Systems',
    summary: 'Interfaces with motion discipline, typed state, and a visual layer that stays intentional under pressure.',
    accent: '#69D6FF',
    skills: [
      { name: 'React', icon: FaReact, color: '#61DAFB' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Vue', icon: SiVuedotjs, color: '#42B883' },
      { name: 'Redux', icon: SiRedux, color: '#7C3AED' },
    ],
  },
  {
    id: 'services',
    eyebrow: 'Application Layer',
    title: 'Platform Services',
    summary: 'Backend flows shaped around clean boundaries, reliable APIs, and systems that stay legible as they scale.',
    accent: '#8CF2A5',
    skills: [
      { name: 'Java', icon: FaJava, color: '#F89820' },
      { name: 'Spring', icon: SiSpring, color: '#6DB33F' },
      { name: 'Node.js', icon: FaNodeJs, color: '#5FA04E' },
      { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
      { name: 'Nginx', icon: SiNginx, color: '#009639' },
    ],
  },
  {
    id: 'data',
    eyebrow: 'State Layer',
    title: 'Data + Messaging',
    summary: 'Storage, cache, and event pipelines tuned for observability, async coordination, and safer retries.',
    accent: '#F4B462',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Redis', icon: SiRedis, color: '#DC382D' },
      { name: 'Kafka', icon: SiApachekafka, color: '#C9D1D9' },
      { name: 'RabbitMQ', icon: SiRabbitmq, color: '#FF6600' },
    ],
  },
  {
    id: 'delivery',
    eyebrow: 'Delivery Layer',
    title: 'Cloud Delivery',
    summary: 'Containers, infrastructure as code, CI, and runtime discipline wired for repeatable releases.',
    accent: '#9AA7FF',
    skills: [
      { name: 'AWS', icon: FaAws, color: '#FF9900' },
      { name: 'Docker', icon: FaDocker, color: '#2496ED' },
      { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
      { name: 'Terraform', icon: SiTerraform, color: '#7B42F6' },
      { name: 'Git Actions', icon: SiGithubactions, color: '#2088FF' },
      { name: 'Linux', icon: FaLinux, color: '#D4D4D8' },
    ],
  },
]

const aiWorkflowTools = [
  {
    name: 'Claude Code',
    icon: RiClaudeLine,
    color: '#D97757',
    glow: 'rgba(217, 119, 87, 0.34)',
    href: 'https://claude.com/product/claude-code',
  },
  {
    name: 'Codex',
    icon: RiOpenaiLine,
    color: '#7ADAA5',
    glow: 'rgba(122, 218, 165, 0.34)',
    href: 'https://openai.com/codex/',
  },
  {
    name: 'Gemini',
    icon: RiGeminiLine,
    color: '#8BA8FF',
    glow: 'rgba(139, 168, 255, 0.34)',
    href: 'https://gemini.google.com/',
  },
  {
    name: 'Pencil',
    icon: TbPencilCode,
    color: '#F4C06A',
    glow: 'rgba(244, 192, 106, 0.32)',
    href: 'https://pencil.dev/',
  },
  {
    name: 'Antigravity',
    image: '/portfolio/antigravity-logo.png',
    color: '#F7A24C',
    glow: 'rgba(105, 168, 255, 0.34)',
    href: 'https://antigravity.google/',
  },
  {
    name: 'Openclaw',
    image: '/portfolio/openclaw-logo.png',
    color: '#FF6A4A',
    glow: 'rgba(255, 106, 74, 0.32)',
    href: 'https://openclaw.ai/',
  },
]

const workflowStages = ['Spec', 'Build', 'Review', 'Verify']

const signalPillars = [
  { label: 'Operating Mode', value: 'Spec-Driven' },
  { label: 'Delivery Surface', value: 'Full-Stack' },
  { label: 'Execution Loop', value: 'AI-Assisted' },
  { label: 'Risk Control', value: 'Human Review' },
]

const MAX_VISIBLE_CERTIFICATIONS = 6

const certifications = [
  {
    issuer: 'AWS',
    title: 'Developer Associate',
    name: 'DVA-C02',
    summary: 'Associate badge validating application delivery across core AWS services.',
    accent: '#FF9F43',
    image: '/portfolio/dvac02.png',
    href: 'https://www.credly.com/badges/f68690b3-1e68-46d8-ae56-366bd880c0e5/linked_in_profile',
  },
  {
    issuer: 'AWS',
    title: 'Cloud Practitioner',
    name: 'CLF-C02',
    summary: 'Foundational certification covering cloud concepts, billing, security, and operations.',
    accent: '#69D6FF',
    image: '/portfolio/clf-c02.png',
    href: 'https://www.credly.com/badges/ff21fdcd-97e7-42a1-9e15-ddf052af8c57/linked_in_profile',
  },
  {
    issuer: 'Skilljar',
    title: 'Introduction to agent skills',
    name: 'Verified Certificate',
    summary: 'Course completion credential focused on agent skills fundamentals and workflow literacy.',
    accent: '#7DB8FF',
    image: '/portfolio/anthropic-icon.svg',
    imageFit: 'contain',
    imageFrameClassName: 'bg-[#F4F7FB] p-3',
    href: 'http://verify.skilljar.com/c/7owbue56fohe',
  },
  {
    issuer: 'Skilljar',
    title: 'Introduction to subagents',
    name: 'Verified Certificate',
    summary: 'Credential covering the structure, delegation model, and practical use of subagents.',
    accent: '#9AE6D1',
    image: '/portfolio/anthropic-icon.svg',
    imageFit: 'contain',
    imageFrameClassName: 'bg-[#F4F7FB] p-3',
    href: 'http://verify.skilljar.com/c/muit9mnrkf6k',
  },
  {
    issuer: 'Skilljar',
    title: 'AI Fluency for students',
    name: 'Verified Certificate',
    summary: 'Course credential highlighting prompt fluency, AI literacy, and student-facing workflows.',
    accent: '#C6C0F4',
    image: '/portfolio/anthropic-icon.svg',
    imageFit: 'contain',
    imageFrameClassName: 'bg-[#F4F7FB] p-3',
    href: 'http://verify.skilljar.com/c/uincy7b9xx7n',
  },
]

const SkillChip = ({ skill }) => {
  const Icon = skill.icon

  return (
    <span className="signal-node-chip">
      <span
        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-slate-950/80 text-[1rem]"
        style={{ color: skill.color, boxShadow: `0 0 22px ${skill.color}22` }}
      >
        <Icon className="h-[1em] w-[1em]" />
      </span>
      <span className="text-[11px] font-semibold tracking-[0.12em] text-slate-50 sm:text-xs">
        {skill.name}
      </span>
    </span>
  )
}

SkillChip.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.elementType,
    image: PropTypes.string,
    color: PropTypes.string.isRequired,
  }).isRequired,
}

const ClusterCard = ({ cluster, index, shouldReduceMotion, className = '' }) => (
  <motion.article
    className={`signal-cluster-card relative overflow-hidden rounded-[1.65rem] p-5 sm:p-6 ${className}`}
    style={{ '--cluster-accent': cluster.accent, borderColor: `${cluster.accent}33` }}
    initial={shouldReduceMotion ? false : { opacity: 0, y: 26 }}
    whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.35 }}
    transition={{ duration: 0.65, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.01 }}
  >
    <div
      className="absolute inset-x-5 top-0 h-px opacity-90"
      style={{ background: `linear-gradient(90deg, transparent, ${cluster.accent}, transparent)` }}
    />
    <div className="relative z-10">
      <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-200/90">
        {cluster.eyebrow}
      </p>
      <h3 className="mt-3 text-xl font-black tracking-[0.02em] text-white sm:text-[1.35rem]">
        {cluster.title}
      </h3>
      <p className="mt-3 max-w-[28rem] text-sm leading-6 text-[#E8F1FF]">
        {cluster.summary}
      </p>
      <div className="mt-5 flex flex-wrap gap-2.5">
        {cluster.skills.map((skill) => (
          <SkillChip key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  </motion.article>
)

ClusterCard.propTypes = {
  cluster: PropTypes.shape({
    id: PropTypes.string.isRequired,
    eyebrow: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    accent: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.elementType.isRequired,
      color: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  shouldReduceMotion: PropTypes.bool.isRequired,
  className: PropTypes.string,
}

const CertificationCard = ({ certification }) => {
  return (
    <a
      href={certification.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-black/20 p-4 shadow-[0_18px_36px_rgba(0,0,0,0.22),inset_0_1px_1px_rgba(255,255,255,0.04)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_24px_44px_rgba(0,0,0,0.28),inset_0_1px_1px_rgba(255,255,255,0.07),0_0_22px_rgba(125,211,252,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{ background: `radial-gradient(circle at top right, ${certification.accent}20 0%, transparent 48%)` }}
      />
      <div className="relative z-10 flex items-start gap-4">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-[1.15rem] border border-white/10 bg-slate-950/70 shadow-[0_0_18px_rgba(15,23,42,0.35)]">
        {certification.image ? (
          <img
            src={certification.image}
            alt={certification.title}
            className={`h-full w-full ${certification.imageFit === 'contain' ? 'object-contain' : 'object-cover'} ${certification.imageFrameClassName || ''}`}
          />
        ) : (
            <div
              className="flex h-full w-full items-center justify-center bg-slate-900 text-sm font-black uppercase tracking-[0.22em] text-white"
              style={{ background: `linear-gradient(145deg, ${certification.accent}66 0%, rgba(15,23,42,0.94) 100%)` }}
            >
              {certification.monogram || <Award className="h-5 w-5" />}
            </div>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-300/80">
                {certification.issuer}
              </p>
              <h3 className="mt-2 text-base font-black leading-tight text-white">
                {certification.title}
              </h3>
            </div>
            <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-slate-300 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
          </div>

          <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#BFDBFE]">
            {certification.name}
          </p>
        </div>
      </div>

      <p className="relative z-10 mt-4 text-sm leading-6 text-[#E8F1FF]">
        {certification.summary}
      </p>
    </a>
  )
}

CertificationCard.propTypes = {
  certification: PropTypes.shape({
    issuer: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    accent: PropTypes.string.isRequired,
    image: PropTypes.string,
    imageFit: PropTypes.oneOf(['cover', 'contain']),
    imageFrameClassName: PropTypes.string,
    monogram: PropTypes.string,
    href: PropTypes.string.isRequired,
  }).isRequired,
}

const Skills = () => {
  const shouldReduceMotion = useReducedMotion()
  const [showAllCertifications, setShowAllCertifications] = useState(false)
  const visibleCertifications = showAllCertifications ? certifications : certifications.slice(0, MAX_VISIBLE_CERTIFICATIONS)

  return (
    <section className="relative mt-8 sm:mt-[8vh] lg:mt-[10vh] min-h-screen w-full overflow-hidden bg-transparent" id="skills">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8rem] top-[18%] h-56 w-56 rounded-full bg-sky-400/12 blur-3xl sm:h-72 sm:w-72" />
        <div className="absolute right-[-6rem] top-[10%] h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl sm:h-80 sm:w-80" />
        <div className="absolute bottom-[12%] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-400/8 blur-[140px]" />
      </div>

      <div className="container-width relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pt-20">
        <div className="w-full max-w-4xl text-center">
          <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary drop-shadow-[0_0_18px_rgba(56,189,248,0.34)] sm:text-6xl">
            TECHNICAL CORE
          </h2>
          <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.42em] text-secondary sm:text-sm">
            SIGNAL MAP
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#E8F1FF] sm:text-base">
            A cleaner view of how I ship: product-facing frontend, reliable backend services, observable data flows, and cloud delivery linked by an AI-native workflow.
          </p>
        </div>

        <div className="mt-10 w-full max-w-6xl">
          <div className="signal-map-shell relative overflow-hidden rounded-[2.2rem] px-4 py-5 sm:px-7 sm:py-7 lg:px-10 lg:py-10">
            <div className="pointer-events-none absolute inset-0 hidden lg:block">
              <div className="absolute left-1/2 top-1/2 h-px w-[32%] -translate-x-1/2 -translate-y-1/2 bg-[linear-gradient(90deg,transparent,rgba(115,212,255,0.22),rgba(255,255,255,0.1),rgba(140,242,165,0.22),transparent)]" />
            </div>

            <div className="relative z-10 border-b border-white/[0.08] pb-4 sm:pb-5">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#93C5FD]">
                    Workflow Toolchain
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#E8F1FF]">
                    AI-native tools that support spec writing, implementation, review, and verification.
                  </p>
                </div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-300/80">
                  {aiWorkflowTools.length} linked tools
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2.5 sm:gap-3">
                {aiWorkflowTools.map((tool) => {
                  const Icon = tool.icon

                  return (
                    <a
                      key={tool.name}
                      href={tool.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${tool.name} website`}
                      className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-black/25 px-3 py-2 backdrop-blur-xl shadow-[0_14px_30px_rgba(0,0,0,0.24),inset_0_1px_1px_rgba(255,255,255,0.06)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:shadow-[0_18px_34px_rgba(0,0,0,0.28),inset_0_1px_1px_rgba(255,255,255,0.08),0_0_18px_rgba(125,211,252,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 xl:gap-1.5 xl:px-2.5 xl:py-1.5"
                    >
                      <span
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-slate-950/80 text-base xl:h-7 xl:w-7 xl:text-[0.92rem]"
                        style={{ color: tool.color, boxShadow: `0 0 18px ${tool.glow}` }}
                      >
                        {tool.image ? (
                          <img
                            src={tool.image}
                            alt=""
                            className="h-[1.12em] w-[1.12em] object-contain"
                          />
                        ) : (
                          <Icon className="h-[1em] w-[1em]" />
                        )}
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-50 xl:text-[9px] xl:tracking-[0.14em]">
                        {tool.name}
                      </span>
                    </a>
                  )
                })}
              </div>
            </div>

            <div className="relative z-10 mt-6 grid gap-4 lg:grid-cols-[1fr_minmax(260px,0.88fr)_1fr] lg:grid-rows-[1fr_1fr]">
              <ClusterCard
                cluster={capabilityClusters[0]}
                index={0}
                shouldReduceMotion={shouldReduceMotion}
                className="order-2 lg:order-none"
              />

              <motion.div
                className="signal-core-panel relative order-1 overflow-hidden rounded-[1.9rem] p-6 sm:p-7 lg:order-none lg:row-span-2 lg:px-8 lg:py-8"
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="signal-core-pulse absolute inset-[18%] rounded-full bg-cyan-300/8 blur-[70px]" />
                <div className="relative z-10 flex h-full flex-col justify-between gap-8">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-cyan-50">
                      Signal Core
                    </p>
                    <h3 className="mt-4 text-3xl font-black leading-[1.02] tracking-tight text-white sm:text-[2.6rem]">
                      Systems that stay elegant through delivery.
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#E8F1FF]">
                      I connect design-minded frontend with backend architecture, delivery guardrails, and AI-assisted execution so the build pipeline feels coherent end to end.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {signalPillars.map((pillar) => (
                      <div
                        key={pillar.label}
                        className="rounded-[1.15rem] border border-white/[0.08] bg-white/[0.04] px-4 py-3 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
                      >
                        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-200/90">
                          {pillar.label}
                        </p>
                        <p className="mt-2 text-sm font-bold uppercase tracking-[0.16em] text-white">
                          {pillar.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <ClusterCard
                cluster={capabilityClusters[1]}
                index={1}
                shouldReduceMotion={shouldReduceMotion}
                className="order-3 lg:order-none"
              />
              <ClusterCard
                cluster={capabilityClusters[2]}
                index={2}
                shouldReduceMotion={shouldReduceMotion}
                className="order-4 lg:order-none"
              />
              <ClusterCard
                cluster={capabilityClusters[3]}
                index={3}
                shouldReduceMotion={shouldReduceMotion}
                className="order-5 lg:order-none"
              />
            </div>

            <motion.div
              className="relative z-10 mt-6 rounded-[1.6rem] border border-white/[0.08] bg-black/20 p-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)] sm:p-5"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#93C5FD]">
                  Workflow Route
                </p>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#93C5FD]">
                  AI-assisted, human-reviewed
                </p>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-4">
                {workflowStages.map((stage, index) => (
                  <div key={stage} className="relative">
                    <div className="rounded-[1.1rem] border border-white/[0.08] bg-white/[0.04] px-4 py-4 text-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#93C5FD]">
                        0{index + 1}
                      </p>
                      <p className="mt-2 text-sm font-bold uppercase tracking-[0.2em] text-[#BFDBFE]">
                        {stage}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative z-10 mt-6 border-t border-white/[0.08] pt-6"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.62, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#93C5FD]">
                    Verified Credentials
                  </p>
                  <h3 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-[2rem]">
                    Verified Certifications
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-[#E8F1FF]">
                    A growing credential layer covering cloud delivery and AI workflow training, structured so new badges can be added without crowding the section.
                  </p>
                </div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-300/80">
                  {certifications.length} tracked credentials
                </p>
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                {visibleCertifications.map((certification) => (
                  <CertificationCard
                    key={`${certification.issuer}-${certification.title}`}
                    certification={certification}
                  />
                ))}
              </div>

              {certifications.length > MAX_VISIBLE_CERTIFICATIONS && (
                <div className="mt-5 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setShowAllCertifications((currentValue) => !currentValue)}
                    className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-slate-950/70 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#BFDBFE] transition-colors duration-300 hover:border-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  >
                    <span>{showAllCertifications ? 'Show fewer' : `Show all ${certifications.length}`}</span>
                    {showAllCertifications ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
