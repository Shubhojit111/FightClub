import { motion } from 'framer-motion'
import pilatesImg from '../assets/pilates-clean.webp'

export default function BecomeMemberCTA() {
  return (
    <section id="membership" className="bg-black py-6 md:py-10 lg:py-12">
      <div className="mx-auto max-w-[1600px] px-5 md:px-8 lg:px-10 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[20px] md:rounded-[28px] aspect-[21/9] min-h-[360px] md:min-h-[480px] lg:min-h-[560px]"
        >
          <img
            src={pilatesImg}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-[center_45%]"
            aria-hidden
          />
          <div className="absolute inset-0 bg-black/20" />

          <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-5 text-center">
            <h2 className="serif-display text-[40px] sm:text-[52px] md:text-[64px] lg:text-[74px] text-white font-normal tracking-[-0.02em] drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)]">
              Become a member
            </h2>
            <a
              href="#clubs"
              className="mt-6 md:mt-8 inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-2.5 text-[11px] font-medium tracking-[0.1em] uppercase hover:bg-neutral-100 transition-colors shadow-md"
            >
              Find Out More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
