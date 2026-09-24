import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.12,
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export default function IntroSection() {
  return (
    <section
      id="intro"
      className="relative flex flex-col bg-black px-5 sm:px-8 md:px-12 pt-20 md:pt-28 pb-10 md:pb-14"
    >
      <div className="mx-auto w-full max-w-[920px] text-center flex flex-col justify-center py-8 md:py-12">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="serif-display text-[26px] leading-[1.3] sm:text-[32px] md:text-[38px] lg:text-[42px] xl:text-[44px] text-white font-normal"
        >
          In our glorious, maddening city, your workout can be the difference
            between a good day and bad.
        </motion.p>

        <motion.p
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="serif-display mt-6 md:mt-8 lg:mt-9 text-[19px] leading-[1.4] sm:text-[23px] md:text-[27px] lg:text-[30px] xl:text-[32px] text-white font-normal"
        >
          Fight Club is London's elite combat and fitness training destination. Individual in style,
          bound by a common philosophy: to be your Fight Club, inspiring you to be your personal best.
        </motion.p>

        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#clubs"
            className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-[11px] text-[11px] font-medium tracking-[0.09em] uppercase transition-all duration-300 hover:bg-neutral-200 min-w-[158px]"
          >
            Find Your Club
          </a>
          <a
            href="#membership"
            className="inline-flex items-center justify-center rounded-full border border-white/70 bg-transparent text-white px-6 py-[11px] text-[11px] font-medium tracking-[0.09em] uppercase transition-all duration-300 hover:bg-white hover:text-black hover:border-white min-w-[158px]"
          >
            Become a Member
          </a>
        </motion.div>
      </div>
    </section>
  )
}
