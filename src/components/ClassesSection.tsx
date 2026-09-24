import { useRef } from 'react'
import { motion } from 'framer-motion'
import { classCards } from '../data/content'

export default function ClassesSection() {
  const scrollerRef = useRef<HTMLDivElement>(null)

  const scrollBy = (dir: -1 | 1) => {
    const el = scrollerRef.current
    if (!el) return
    const amount = Math.min(380, el.clientWidth * 0.75)
    el.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  return (
    <section
      id="classes"
      className="bg-[#0a0a0a] py-16 md:py-24 lg:py-28 border-t border-white/5"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-8 lg:px-10 xl:px-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-10 md:mb-14">
          <div className="lg:col-span-7">
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/50 mb-4">
              Inspiring classes
            </p>
            <h2 className="serif-display text-[34px] sm:text-[42px] md:text-[50px] leading-[1.12] text-white max-w-3xl">
              Intelligent, inspiring and led by the best instructors, a huge
              range of classes that make fitness fun.
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-wrap gap-3 lg:justify-end">
            <a href="#classes" className="btn-primary">
              View all classes
            </a>
            <a href="#classes" className="btn-outline">
              View the timetable
            </a>
          </div>
        </div>

        <div className="relative">
          <div
            ref={scrollerRef}
            className="flex gap-4 md:gap-5 overflow-x-auto pb-2 snap-x snap-mandatory scroll-smooth hide-scrollbar"
          >
            {classCards.map((item, i) => (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative shrink-0 w-[280px] sm:w-[320px] md:w-[360px] snap-start overflow-hidden rounded-2xl aspect-[3/4] bg-[#111] cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:blur-[2px]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:from-black/90 group-hover:via-black/55" />

                {/* Arrow top-right on hover */}
                <span className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white opacity-0 translate-y-1 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:translate-y-0 bg-black/20 backdrop-blur-sm">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2 7h10M8 3l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                <div className="absolute inset-x-0 bottom-0 z-10 p-5 md:p-6">
                  <div className="transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1">
                    <h3 className="text-[22px] md:text-[24px] text-white font-normal tracking-tight">
                      {item.name}
                    </h3>
                    <p className="mt-0 max-h-0 overflow-hidden text-[13px] md:text-[14px] text-white/70 leading-relaxed font-light opacity-0 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:mt-2 group-hover:max-h-28 group-hover:opacity-100">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Prev / Next */}
          <div className="mt-8 flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Previous classes"
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
              aria-label="Next classes"
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
