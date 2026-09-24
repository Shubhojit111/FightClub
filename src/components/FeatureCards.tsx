import { motion } from 'framer-motion'
import { featureCards } from '../data/content'

function Title({ title }: { title: string }) {
  const parts = title.split(' ')
  if (parts.length > 2) {
    return (
      <>
        {parts.slice(0, -1).join(' ')}
        <br />
        {parts.slice(-1)}
      </>
    )
  }
  return <>{title}</>
}

export default function FeatureCards() {
  return (
    <section className="relative bg-black pb-4 md:pb-6 -mt-2">
      <div className="mx-auto max-w-[1600px] px-5 md:px-8 lg:px-10 xl:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 md:gap-3 lg:gap-3.5">
          {featureCards.map((card, index) => (
            <motion.article
              key={card.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.9,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative isolate overflow-hidden rounded-[16px] md:rounded-[18px] aspect-[3/4] cursor-pointer select-none"
            >
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                style={
                  card.id === 'training'
                    ? { objectPosition: 'center 18%' }
                    : card.id === 'nutrition'
                      ? { objectPosition: 'center 35%' }
                      : card.id === 'classes'
                        ? { objectPosition: 'center 40%' }
                        : { objectPosition: 'center center' }
                }
              />

              {/* Resting gradient */}
              <div
                className="absolute inset-0 transition-opacity duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-0"
                style={{
                  background:
                    'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 42%, rgba(0,0,0,0.05) 100%)',
                }}
              />

              {/* Hover veil */}
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.78) 50%, rgba(0,0,0,0.88) 100%)',
                }}
              />

              {/* Content */}
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-4 md:p-5 lg:p-6">
                {/* Description + CTA — reveal on hover */}
                <div className="mb-auto pt-1 max-h-0 overflow-hidden opacity-0 translate-y-4 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:max-h-[280px] group-hover:opacity-100 group-hover:translate-y-0">
                  <p className="text-[13px] md:text-[14px] lg:text-[15px] leading-[1.55] text-white/90 font-light">
                    {card.description}
                  </p>
                  <a
                    href={card.href}
                    className="mt-5 inline-flex items-center justify-center rounded-full border border-white/55 px-4 py-2 text-[10px] tracking-[0.14em] uppercase text-white transition-all duration-500 hover:bg-white hover:text-black"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {card.cta}
                  </a>
                </div>

                <div className="flex items-end justify-between gap-3">
                  <h3 className="text-[16px] md:text-[17px] lg:text-[18px] font-normal text-white tracking-[-0.01em] leading-snug drop-shadow-sm">
                    <Title title={card.title} />
                  </h3>
                </div>
              </div>

              {/* + button — always visible at bottom right, rotates on hover */}
              <span
                className="absolute bottom-4 right-4 md:bottom-5 md:right-5 lg:bottom-6 lg:right-6 z-20 flex h-8 w-8 md:h-9 md:w-9 shrink-0 items-center justify-center rounded-full border border-white/45 text-white transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-white group-hover:text-black group-hover:border-white group-hover:scale-110"
                aria-hidden
              >
                <svg
                  width="11"
                  height="11"
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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
