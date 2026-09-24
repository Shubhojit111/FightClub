import { FormEvent, useState } from 'react'
import { motion } from 'framer-motion'

export default function LocationFinder() {
  const [query, setQuery] = useState('')

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Forward the query to the clubs grid so search actually filters
    window.dispatchEvent(
      new CustomEvent('fc:club-search', { detail: query })
    )
    document.getElementById('all-clubs')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="bg-black">
      <div className="mx-auto max-w-[1600px] px-5 md:px-8 lg:px-10 xl:px-12 py-7 md:py-9">
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6"
        >
          <div className="flex-1 max-w-xl relative">
            <label htmlFor="location" className="sr-only">
              Enter postcode or location
            </label>
            <div className="flex items-center gap-3 border-b border-white/20 focus-within:border-white/55 transition-colors pb-3">
              <svg
                width="15"
                height="15"
                viewBox="0 0 16 16"
                fill="none"
                className="opacity-45 shrink-0"
              >
                <circle cx="7" cy="7" r="5" stroke="white" strokeWidth="1.25" />
                <path
                  d="M11 11l3.2 3.2"
                  stroke="white"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                />
              </svg>
              <input
                id="location"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter postcode or location"
                className="flex-1 bg-transparent border-none outline-none text-[14px] text-white placeholder:text-white/40"
              />
              <button
                type="submit"
                aria-label="Search location"
                className="text-white/55 hover:text-white transition-colors p-1"
              >
                <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
                  <path
                    d="M0 6h15.5M11.5 1.5L16.5 6l-5 4.5"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <a
            href="#all-clubs"
            className="inline-flex items-center justify-center rounded-full border border-white/70 text-white px-5 py-2.5 text-[10px] font-medium tracking-[0.12em] uppercase hover:bg-white hover:text-black transition-colors whitespace-nowrap self-start sm:self-auto sm:ml-auto"
          >
            Discover All Clubs
          </a>
        </motion.form>
      </div>
    </section>
  )
}
