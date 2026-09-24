import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks } from '../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || mobileOpen
            ? 'bg-black/85 backdrop-blur-md border-b border-white/5'
            : 'bg-gradient-to-b from-black/50 to-transparent'
        }`}
      >
        <div className="mx-auto flex h-[68px] md:h-[72px] max-w-[1600px] items-center justify-between px-5 md:px-8 lg:px-12">
          <a href="#top" className="flex items-center shrink-0" aria-label="Fight Club home">
            <span className="serif-display text-[15px] md:text-[17px] tracking-[0.18em] uppercase text-white">
              Fight Club
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-7 xl:gap-9 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() =>
                  setOpenDropdown(link.children ? link.label : null)
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={link.href}
                  className="inline-flex items-center gap-1.5 py-2 text-[11px] font-medium tracking-[0.14em] uppercase text-white/90 hover:text-white transition-colors"
                >
                  {link.label}
                  {link.children && (
                    <svg
                      width="8"
                      height="5"
                      viewBox="0 0 8 5"
                      fill="none"
                      className={`opacity-60 transition-transform duration-200 ${
                        openDropdown === link.label ? 'rotate-180' : ''
                      }`}
                    >
                      <path
                        d="M1 1l3 3 3-3"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </a>

                <AnimatePresence>
                  {link.children && openDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-1/2 top-full pt-3 -translate-x-1/2"
                    >
                      <div className="min-w-[210px] rounded-xl bg-[#161616] border border-white/10 py-2 shadow-2xl">
                        {link.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2.5 text-[12px] text-white/75 hover:text-white hover:bg-white/5 transition-colors tracking-wide"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#membership"
              className="hidden sm:inline-flex items-center justify-center rounded-full bg-white text-black px-5 py-2.5 text-[11px] font-medium tracking-[0.1em] uppercase transition-all duration-300 hover:bg-neutral-200"
            >
              Join Us
            </a>
            <button
              type="button"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-white/20"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <div className="relative h-3.5 w-4">
                <span
                  className={`absolute left-0 h-[1.5px] w-full bg-white transition-all duration-300 ${
                    mobileOpen ? 'top-1.5 rotate-45' : 'top-0'
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 h-[1.5px] w-full bg-white transition-all duration-300 ${
                    mobileOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute left-0 h-[1.5px] w-full bg-white transition-all duration-300 ${
                    mobileOpen ? 'top-1.5 -rotate-45' : 'top-3'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black pt-[72px] lg:hidden overflow-y-auto"
          >
            <nav className="flex flex-col px-6 py-8 gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  {link.children ? (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setMobileExpanded((prev) =>
                            prev === link.label ? null : link.label
                          )
                        }
                        aria-expanded={mobileExpanded === link.label}
                        className="serif-display flex w-full items-center justify-between py-4 text-3xl text-white border-b border-white/10 text-left"
                      >
                        <span>{link.label}</span>
                        <svg
                          width="12"
                          height="8"
                          viewBox="0 0 12 8"
                          fill="none"
                          className={`shrink-0 opacity-60 transition-transform duration-300 ${
                            mobileExpanded === link.label ? 'rotate-180' : ''
                          }`}
                        >
                          <path
                            d="M1 1.5l5 5 5-5"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                      <AnimatePresence initial={false}>
                        {mobileExpanded === link.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col pb-2">
                              {link.children.map((child) => (
                                <a
                                  key={child.label}
                                  href={child.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block py-3 pl-2 text-[15px] text-white/70 hover:text-white transition-colors border-b border-white/5"
                                >
                                  {child.label}
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="serif-display block py-4 text-3xl text-white border-b border-white/10"
                    >
                      {link.label}
                    </a>
                  )}
                </motion.div>
              ))}
              <a
                href="#membership"
                onClick={() => setMobileOpen(false)}
                className="mt-8 inline-flex items-center justify-center rounded-full bg-white text-black w-full py-4 text-[12px] font-medium tracking-[0.1em] uppercase"
              >
                Join Us
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
