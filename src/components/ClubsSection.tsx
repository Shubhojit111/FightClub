import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { clubs } from '../data/content'

export default function ClubsSection() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return clubs
    return clubs.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.postcode.toLowerCase().includes(q) ||
        c.address.toLowerCase().includes(q)
    )
  }, [query])

  return (
    <section id="all-clubs" className="bg-black py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-[1600px] px-5 md:px-8 lg:px-10 xl:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 md:mb-14">
          <div className="max-w-2xl">
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/50 mb-4">
              Our clubs
            </p>
            <h2 className="serif-display text-[36px] sm:text-[44px] md:text-[52px] leading-[1.1] text-white">
              Find Your Fight Club
            </h2>
            <p className="mt-4 text-[15px] md:text-[16px] leading-relaxed text-white/60 max-w-lg font-light">
              Elite combat and fitness training. Push your limits. Find your strength.
            </p>
          </div>

          <div className="w-full max-w-sm">
            <label htmlFor="club-search" className="sr-only">
              Search clubs
            </label>
            <div className="relative">
              <input
                id="club-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by club or postcode"
                className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/40 transition-colors"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {filtered.map((club, i) => (
            <motion.a
              key={club.name}
              href="#membership"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5%' }}
              transition={{
                duration: 0.55,
                delay: (i % 4) * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-[#111]"
            >
              <img
                src={club.image}
                alt={club.name}
                className="img-zoom absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <p className="text-[11px] tracking-[0.16em] uppercase text-white/55 mb-1">
                  {club.postcode}
                </p>
                <h3 className="text-[22px] md:text-[24px] font-normal text-white tracking-tight">
                  {club.name}
                </h3>
                <p className="mt-2 text-[13px] text-white/55 leading-snug max-w-[90%] font-light line-clamp-2 group-hover:text-white/75 transition-colors">
                  {club.address}
                </p>
              </div>
              <div className="absolute top-4 right-4 h-9 w-9 rounded-full border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 backdrop-blur-sm">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 7h10M8 3l4 4-4 4"
                    stroke="white"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-white/50 py-16">
            No clubs match your search. Try another postcode or area.
          </p>
        )}
      </div>
    </section>
  )
}
