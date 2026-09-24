import { useEffect, useMemo, useState } from 'react'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import L from 'leaflet'
import { motion, AnimatePresence } from 'framer-motion'
import { clubPins } from '../data/clubs-geo'
import 'leaflet/dist/leaflet.css'

function makeIcon(active: boolean) {
  const size = active ? 44 : 36
  const bg = active ? '#e8a598' : '#0a0a0a'
  const color = active ? '#0a0a0a' : '#ffffff'
  const html = `
    <div style="
      width:${size}px;height:${size}px;border-radius:9999px;
      background:${bg};color:${color};
      display:flex;align-items:center;justify-content:center;
      font-family:Georgia,'Times New Roman',serif;font-size:13px;letter-spacing:0.02em;
      box-shadow:0 6px 18px rgba(0,0,0,0.28);
      border:2px solid ${active ? '#e8a598' : 'rgba(255,255,255,0.15)'};
      transform: translate(-50%, -50%);
    ">III</div>
  `
  return L.divIcon({
    className: 'ts-club-pin',
    html,
    iconSize: [size, size],
    iconAnchor: [0, 0],
  })
}

function FlyTo({ lat, lng }: { lat: number; lng: number }) {
  const map = useMap()
  useEffect(() => {
    map.flyTo([lat, lng], Math.max(map.getZoom(), 12), { duration: 0.75 })
  }, [lat, lng, map])
  return null
}

export default function MapClubsSection() {
  const [activeId, setActiveId] = useState('mayfair')
  const active = useMemo(
    () => clubPins.find((p) => p.id === activeId) ?? clubPins[0],
    [activeId]
  )

  return (
    <section id="clubs" className="relative scroll-mt-20 bg-black py-6 md:py-10">
      <div className="mx-auto max-w-[1600px] px-5 md:px-8 lg:px-10 xl:px-12">
        {/* Mobile club picker — pins are too small to tap, this fixes selection on touch */}
        <div className="mb-3 flex gap-2 overflow-x-auto pb-2 snap-x snap-proximity hide-scrollbar overscroll-x-contain -mx-5 px-5 md:mx-0 md:px-0 lg:hidden">
          {clubPins.map((pin) => (
            <button
              key={pin.id}
              type="button"
              onClick={() => setActiveId(pin.id)}
              aria-pressed={pin.id === activeId}
              className={`shrink-0 snap-start rounded-full border px-4 py-2 text-[11px] tracking-[0.08em] uppercase transition-all duration-300 ${
                pin.id === activeId
                  ? 'bg-white text-black border-white'
                  : 'border-white/20 text-white/70 hover:border-white/50 hover:text-white'
              }`}
            >
              {pin.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-[20px] md:rounded-[24px] border border-white/10">
          {/* LEFT — club visual + details */}
          <div className="relative flex flex-col bg-[#111]">
            <div className="relative h-[220px] sm:h-[280px] overflow-hidden lg:h-auto lg:flex-1 lg:min-h-[320px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active.id}
                  src={active.image}
                  alt={active.name}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45 }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
            </div>

            <div className="bg-[#111111] px-7 sm:px-10 py-8 sm:py-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id + '-copy'}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="serif-display text-[34px] sm:text-[40px] md:text-[46px] text-white leading-none">
                    {active.name}{' '}
                    <span className="text-[18px] sm:text-[20px] align-middle text-white/70 font-normal tracking-wide">
                      {active.postcode}
                    </span>
                  </h2>
                  <a
                    href="https://maps.app.goo.gl/mUY6iZYSWTDdoy537"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-3 text-[14px] sm:text-[15px] text-white/75 hover:text-white transition-colors font-light"
                  >
                    <span>{active.address}</span>
                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
                      <path
                        d="M0 6h15M11 1.5L16.5 6 11 10.5"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT — real Leaflet map. Fixed height on mobile so it never traps page Y-scroll */}
          <div className="relative h-[320px] sm:h-[360px] lg:h-auto lg:min-h-[min(80vh,820px)] bg-[#eef1f3]">
            <MapContainer
              center={[active.lat, active.lng]}
              zoom={11}
              scrollWheelZoom={false}
              dragging={true}
              tap={false}
              className="absolute inset-0 h-full w-full z-0 fc-map"
              style={{ background: '#eef1f3', touchAction: 'pan-y' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              />
              <FlyTo lat={active.lat} lng={active.lng} />
              {clubPins.map((pin) => (
                <Marker
                  key={pin.id}
                  position={[pin.lat, pin.lng]}
                  icon={makeIcon(pin.id === activeId)}
                  eventHandlers={{
                    click: () => setActiveId(pin.id),
                  }}
                />
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  )
}
