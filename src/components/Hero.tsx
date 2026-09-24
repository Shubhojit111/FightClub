import { motion } from 'framer-motion'
import heroImg from '../assets/hero-official.webp'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative h-screen min-h-[640px] w-full overflow-hidden bg-black"
    >
      {/* Full-bleed background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Athlete training with kettlebell at Third Space"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/55" />
        <div className="absolute inset-0 bg-black/15" />
      </div>

      {/* Centered title */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-5">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="serif-display text-center text-[42px] leading-none sm:text-[56px] md:text-[68px] lg:text-[78px] xl:text-[86px] text-white font-normal tracking-[-0.02em]"
        >
          <span className="inline-block">Training</span>
          Training for life
        </motion.h1>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/80 hover:text-white transition-colors"
        aria-label="Scroll down"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="flex h-10 w-10 items-center justify-center"
        >
          <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
            <path
              d="M1 1l8 8 8-8"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.span>
      </motion.a>
    </section>
  )
}
