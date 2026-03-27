import { useReducedMotion } from 'framer-motion'
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
import { RiClaudeLine, RiGeminiLine, RiOpenaiLine } from 'react-icons/ri'
import { TbPencilCode } from 'react-icons/tb'
// Add PropTypes import
import PropTypes from 'prop-types'

const skillsData = [
  {
    title: 'Frontend',
    radius: 160,
    duration: 35,
    reverse: false,
    color: 'rgba(97, 218, 251, 0.4)',
    skills: [
      { name: 'React', icon: <FaReact />, color: '#61DAFB' },
      { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
      { name: 'Next.js', icon: <SiNextdotjs />, color: '#ffffff' },
      { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4' },
      { name: 'Vue', icon: <SiVuedotjs />, color: '#42B883' },
      { name: 'Redux', icon: <SiRedux />, color: '#3B82F6' },
      { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
      { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
    ],
  },
  {
    title: 'Backend',
    radius: 280,
    duration: 45,
    reverse: true,
    color: 'rgba(109, 179, 63, 0.4)',
    skills: [
      { name: 'Spring Boot', icon: <SiSpring />, color: '#6DB33F' },
      { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
      { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
      { name: 'Redis', icon: <SiRedis />, color: '#DC382D' },
      { name: 'Kafka', icon: <SiApachekafka />, color: '#aaaaaa' },
      { name: 'RabbitMQ', icon: <SiRabbitmq />, color: '#FF6600' },
      { name: 'Java', icon: <FaJava />, color: '#F89820' },
      { name: 'GraphQL', icon: <SiGraphql />, color: '#E10098' },
    ],
  },
  {
    title: 'DevOps',
    radius: 420,
    duration: 55,
    reverse: false,
    color: 'rgba(255, 153, 0, 0.4)',
    skills: [
      { name: 'AWS', icon: <FaAws />, color: '#FF9900' },
      { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
      { name: 'Kubernetes', icon: <SiKubernetes />, color: '#326CE5' },
      { name: 'Git Actions', icon: <SiGithubactions />, color: '#2088FF' },
      { name: 'Terraform', icon: <SiTerraform />, color: '#38BDF8' },
      { name: 'Linux', icon: <FaLinux />, color: '#aaaaaa' },
      { name: 'Nginx', icon: <SiNginx />, color: '#009639' },
      { name: 'Jenkins', icon: <SiJenkins />, color: '#D24939' },
      { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
    ],
  },
]

const AntigravityIcon = ({ className = '' }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 4.5 18 19.5h-2.7l-1.2-3.2h-4.2l-1.2 3.2H6z" />
    <path d="m10.8 13.4 1.2-3.4 1.2 3.4" />
    <path d="M7.7 8.2h8.6" opacity="0.5" />
  </svg>
)

AntigravityIcon.propTypes = {
  className: PropTypes.string,
}

const aiWorkflowTools = [
  {
    name: 'Claude Code',
    icon: RiClaudeLine,
    color: '#D97757',
    glow: 'rgba(217, 119, 87, 0.34)',
  },
  {
    name: 'Codex',
    icon: RiOpenaiLine,
    color: '#7ADAA5',
    glow: 'rgba(122, 218, 165, 0.34)',
  },
  {
    name: 'Gemini',
    icon: RiGeminiLine,
    color: '#8BA8FF',
    glow: 'rgba(139, 168, 255, 0.34)',
  },
  {
    name: 'Pencil',
    icon: TbPencilCode,
    color: '#F4C06A',
    glow: 'rgba(244, 192, 106, 0.32)',
  },
  {
    name: 'Antigravity',
    icon: AntigravityIcon,
    color: '#F472B6',
    glow: 'rgba(244, 114, 182, 0.34)',
  },
]

const workflowStages = ['Spec', 'Build', 'Review', 'Verify']

const OrbitRing = ({ radius, duration, reverse, skills, color }) => {
  const shouldReduceMotion = useReducedMotion()
  const orbitRotationStyle = shouldReduceMotion
    ? { animation: 'none' }
    : {
        '--orbit-duration': `${duration}s`,
        '--orbit-direction': reverse ? 'reverse' : 'normal'
      }
  const iconRotationStyle = shouldReduceMotion
    ? { animation: 'none' }
    : {
        '--orbit-duration': `${duration}s`,
        '--orbit-direction': reverse ? 'normal' : 'reverse'
      }

  return (
    <div
      className="skill-orbit-ring absolute top-1/2 left-1/2 rounded-full border border-dashed border-white/10 pointer-events-none"
      style={{
        width: radius * 2,
        height: radius * 2,
        boxShadow: `0 0 40px ${color} inset`,
        ...orbitRotationStyle
      }}
    >
      {skills.map((skill, index) => {
        const angle = (index / skills.length) * 360
        return (
          <div
            key={skill.name}
            className="absolute top-1/2 left-1/2 pointer-events-auto"
            style={{
              transform: `rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`
            }}
          >
            <div className="relative h-12 w-12 -translate-x-1/2 -translate-y-1/2 md:h-16 md:w-16">
              <div className="skill-orbit-counter flex h-full w-full items-center justify-center" style={iconRotationStyle}>
                <div className="group relative flex h-full w-full items-center justify-center rounded-full glass-panel-strong shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(56,189,248,0.58)] hover:scale-125 transition-all cursor-pointer z-20">
                  <div
                    className="text-xl md:text-2xl drop-shadow-md"
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </div>

                  {/* Tooltip */}
                  <div className="absolute -bottom-8 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 backdrop-blur border border-white/20 text-white text-[10px] sm:text-xs px-2 py-1 rounded whitespace-nowrap z-50 shadow-xl font-bold tracking-widest">
                    {skill.name}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

OrbitRing.propTypes = {
  radius: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  reverse: PropTypes.bool.isRequired,
  skills: PropTypes.array.isRequired,
  color: PropTypes.string.isRequired,
}

const Skills = () => {
  return (
    <section className="relative -mt-14 sm:-mt-[16vh] lg:-mt-[20vh] min-h-screen w-full overflow-hidden bg-transparent flex flex-col items-center justify-center pt-2 sm:pt-0" id="skills">

      {/* Absolute headers so they don't break the orbital centering */}
      <div className="absolute top-1 sm:top-3 left-1/2 -translate-x-1/2 text-center z-10 w-full px-4">
        <h2 className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary drop-shadow-[0_0_15px_rgba(56,189,248,0.42)] mix-blend-plus-lighter mb-4">
          TECHNICAL CORE
        </h2>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-2 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.45em] text-secondary/90 sm:text-xl">
            AI-NATIVE DEV WORKFLOW
          </p>
          <p className="text-sm font-medium tracking-[0.02em] text-slate-300/90 sm:text-lg">
            Any stack, lower learning cost, faster delivery.
          </p>
        </div>

        <div className="mx-auto mt-5 flex max-w-5xl flex-wrap items-center justify-center gap-2.5 sm:mt-6 sm:gap-3">
          {aiWorkflowTools.map((tool) => {
            const Icon = tool.icon

            return (
              <div
                key={tool.name}
                className="group flex items-center gap-2 rounded-full border border-white/[0.08] bg-black/25 px-3 py-2 backdrop-blur-xl shadow-[0_14px_30px_rgba(0,0,0,0.28),inset_0_1px_1px_rgba(255,255,255,0.08)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-slate-950/80 text-base shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] sm:h-9 sm:w-9 sm:text-lg"
                  style={{ color: tool.color, boxShadow: `0 0 18px ${tool.glow}` }}
                >
                  <Icon className="h-[1em] w-[1em]" />
                </span>
                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-100/90 sm:text-[10px]">
                  {tool.name}
                </span>
              </div>
            )
          })}
        </div>

        <div className="mx-auto mt-3 flex max-w-3xl flex-wrap items-center justify-center gap-2 sm:mt-4 sm:gap-2.5">
          {workflowStages.map((stage) => (
            <span
              key={stage}
              className="rounded-full border border-primary/20 bg-primary/[0.08] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-slate-200/90 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),0_8px_18px_rgba(0,0,0,0.18)] sm:px-3.5 sm:text-[10px]"
            >
              {stage}
            </span>
          ))}
        </div>
      </div>

      {/* Orbital Star System */}
      <div className="relative w-full max-w-[1000px] aspect-square flex items-center justify-center mt-36 sm:mt-40 md:mt-44 scale-[0.46] sm:scale-75 md:scale-90 lg:scale-100">

        {/* Core AI/Me Node */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-24 h-24 sm:w-32 sm:h-32 glass-panel-strong rounded-full flex flex-col items-center justify-center shadow-[0_0_50px_rgba(13,244,230,0.5),inset_0_0_20px_rgba(255,255,255,0.5)]">
          <div className="absolute inset-2 border-2 border-primary/50 border-dashed rounded-full animate-[spin_10s_linear_infinite]" />
          <p className="text-white font-black text-sm sm:text-lg tracking-widest relative z-10 text-center uppercase">Dev<br />Core</p>
        </div>

        {/* Orbit Rings */}
        {skillsData.map((orbit) => (
          <OrbitRing key={orbit.title} {...orbit} />
        ))}
      </div>

      {/* Certs Section at the bottom */}
      <div className="absolute bottom-6 sm:bottom-8 w-full z-10 flex flex-col items-center justify-center px-4">
        <div className="flex gap-4 glass-panel-strong rounded-full px-7 py-4 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          <a href="https://www.credly.com/badges/f68690b3-1e68-46d8-ae56-366bd880c0e5/linked_in_profile" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity flex items-center gap-3">
            <img src="/portfolio/dvac02.png" alt="AWS DVA" className="w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-lg" />
            <span className="text-xs sm:text-sm text-white font-bold tracking-widest hidden sm:inline">DVA-C02</span>
          </a>
          <div className="w-px bg-white/20 mx-2"></div>
          <a href="https://www.credly.com/badges/ff21fdcd-97e7-42a1-9e15-ddf052af8c57/linked_in_profile" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity flex items-center gap-3">
            <img src="/portfolio/clf-c02.png" alt="AWS CLF" className="w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-lg" />
            <span className="text-xs sm:text-sm text-white font-bold tracking-widest hidden sm:inline">CLF-C02</span>
          </a>
        </div>
      </div>

    </section>
  )
}

export default Skills
