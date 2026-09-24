import { useRef } from 'react'
import { motion } from 'framer-motion'
import { wellnessCards } from '../data/content'

export default function WellnessSection() {
  const scrollerRef = useRef<HTMLDivElement>(null)

  const scrollBy = (dir: -1 | 1) => {
    const el = scrollerRef.current
    if (!el) return
    const amount = Math.min(380, el.clientWidth * 0.75)
    el.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  return (
    <section
      id="wellness"
      className="bg-[#0a0a0a] py-16 md:py-24 lg:py-28 border-t border-white/5"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-8 lg:px-10 xl:px-12">
        <div className="max-w-3xl mb-10 md:mb-14">
          <p className="text-[11px] tracking-[0.2em] uppercase text-white/50 mb-4">
            Wellness
          </p>
          <h2 className="serif-display text-[34px] sm:text-[42px] md:text-[50px] leading-[1.12] text-white">
            Beyond studio walls and the gym floor; all your needs under one roof.
          </h2>
        </div>

        <div className="relative">
          <div
            ref={scrollerRef}
            className="flex gap-4 md:gap-5 overflow-x-auto pb-2 snap-x snap-mandatory scroll-smooth hide-scrollbar lg:grid lg:grid-cols-4 lg:overflow-visible"
          >
            {wellnessCards.map((card, i) => (
              <motion.a
                key={card.name}
                href={card.href}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative shrink-0 w-[280px] sm:w-[320px] lg:w-auto snap-start overflow-hidden rounded-2xl aspect-[3/4] bg-[#111]"
              >
                <img
                  src={card.image}
                  alt={card.name}
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:blur-[2px]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:from-black/90 group-hover:via-black/55" />

                {/* + → × rotate on hover */}
                <span className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white bg-black/20 backdrop-blur-sm transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-white group-hover:text-black group-hover:border-white group-hover:scale-110">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="transition-transform duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-45"
                  >
                    <path
                      d="M6 1.5v9M1.5 6h9"
                      stroke="currentColor"
                      strokeWidth="1.35"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>

                <div className="absolute inset-x-0 bottom-0 z-10 p-5 md:p-6">
                  <div className="transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1">
                    <h3 className="text-[20px] md:text-[22px] text-white font-normal tracking-tight">
                      {card.name}
                    </h3>
                    <p className="mt-0 max-h-0 overflow-hidden text-[13px] text-white/65 leading-relaxed font-light opacity-0 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:mt-2 group-hover:max-h-28 group-hover:opacity-100">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Arrows — useful on smaller screens when cards scroll */}
          <div className="mt-8 flex items-center gap-3 lg:hidden">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Previous wellness"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white hover:text-black hover:scale-105"
            >
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
                <path
                  d="M15 7H2M6 1.5L1 7l5 5.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Next wellness"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white hover:text-black hover:scale-105"
            >
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
                <path
                  d="M1 7h13M10 1.5L15 7l-5 5.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
