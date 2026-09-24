import { footerColumns } from '../data/content'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 md:px-10 lg:px-12 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-10 md:gap-8">
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-2">
            <a
              href="#top"
              className="serif-display text-[16px] sm:text-[17px] tracking-[0.28em] uppercase text-white inline-block"
            >
              Fight Club
            </a>
            <p className="mt-4 sm:mt-5 text-[13px] sm:text-[14px] leading-relaxed text-white/50 font-light max-w-sm">
              Elite combat and fitness training. Push your limits. Find your strength.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3">
              {['Instagram', 'Facebook', 'YouTube', 'LinkedIn'].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="h-9 w-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                >
                  <SocialIcon name={social} />
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title} className="pt-2 sm:pt-0">
              <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-white/45 mb-3 sm:mb-4">
                {col.title}
              </p>
              <ul className="space-y-2 sm:space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[13px] sm:text-[14px] text-white/65 hover:text-white transition-colors duration-200 font-light block py-0.5"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-[12px] text-white/40">
            © {new Date().getFullYear()} Fight Club. All rights reserved.
          </p>
          <p className="text-[12px] text-white/40 font-light">
            Fight for your limits.
          </p>
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({ name }: { name: string }) {
  const common = {
    width: 14,
    height: 14,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
  }
  if (name === 'Instagram') {
    return (
      <svg {...common}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    )
  }
  if (name === 'Facebook') {
    return (
      <svg {...common}>
        <path d="M14 8h3V5h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z" fill="currentColor" stroke="none" />
      </svg>
    )
  }
  if (name === 'YouTube') {
    return (
      <svg {...common}>
        <rect x="2" y="6" width="20" height="12" rx="3" />
        <path d="M11 10l5 2-5 2v-4z" fill="currentColor" stroke="none" />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <path d="M6 9v12M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM14 21v-6.5a3.5 3.5 0 0 1 7 0V21M14 12v9" />
    </svg>
  )
}
