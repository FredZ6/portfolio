import { motion, useReducedMotion } from 'framer-motion'
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

const OrbitRing = ({ radius, duration, reverse, skills, color }) => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className="absolute top-1/2 left-1/2 rounded-full border border-dashed border-white/10 pointer-events-none"
      style={{
        width: radius * 2,
        height: radius * 2,
        x: '-50%',
        y: '-50%',
        boxShadow: `0 0 40px ${color} inset`
      }}
      animate={shouldReduceMotion ? undefined : { rotate: reverse ? -360 : 360 }}
      transition={shouldReduceMotion ? undefined : { duration, repeat: Infinity, ease: 'linear' }}
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
            <motion.div
              animate={shouldReduceMotion ? undefined : { rotate: reverse ? 360 : -360 }}
              transition={shouldReduceMotion ? undefined : { duration, repeat: Infinity, ease: 'linear' }}
              className="group relative flex items-center justify-center w-12 h-12 md:w-16 md:h-16 -ml-6 -mt-6 md:-ml-8 md:-mt-8 rounded-full glass-panel-strong shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(56,189,248,0.58)] hover:scale-125 transition-all cursor-pointer z-20"
            >
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
            </motion.div>
          </div>
        )
      })}
    </motion.div>
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
    <section className="relative -mt-14 sm:-mt-20 lg:-mt-24 min-h-screen w-full overflow-hidden bg-transparent flex flex-col items-center justify-center pt-2 sm:pt-0" id="skills">

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
      </div>

      {/* Orbital Star System */}
      <div className="relative w-full max-w-[1000px] aspect-square flex items-center justify-center mt-20 sm:mt-24 scale-[0.6] sm:scale-75 md:scale-90 lg:scale-100">

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
