import classesImg from '../assets/classes.webp'
import facilitiesImg from '../assets/facilities.jpg'
import trainingImg from '../assets/training.webp'
import nutritionImg from '../assets/nutrition.jpg'
import islingtonImg from '../assets/islington.jpg'
import canaryWharfImg from '../assets/canary-wharf.jpg'
import woodWharfImg from '../assets/wood-wharf.jpg'
import batterseaImg from '../assets/battersea.jpg'
import cityImg from '../assets/city.jpg'
import claphamImg from '../assets/clapham.jpg'
import maryleboneImg from '../assets/marylebone.jpg'
import mayfairImg from '../assets/mayfair.jpg'
import moorgateImg from '../assets/moorgate.jpg'
import sohoImg from '../assets/soho.jpg'
import towerBridgeImg from '../assets/tower-bridge.jpg'
import wimbledonImg from '../assets/wimbledon.jpg'
import soundBathImg from '../assets/sound-bath.jpg'
import justRideImg from '../assets/just-ride.webp'
import afterburnerImg from '../assets/afterburner.webp'
import liftImg from '../assets/lift.webp'
import sweatxImg from '../assets/sweatx.webp'
import spaImg from '../assets/spa.jpg'
import sportsMedImg from '../assets/sports-med.jpg'
import recoveryImg from '../assets/recovery.jpg'

export const navLinks = [
  { label: 'Clubs', href: '#clubs' },
  { label: 'Membership', href: '#membership' },
  {
    label: 'Classes',
    href: '#classes',
    children: [
      { label: 'All Classes', href: '#classes' },
      { label: 'Timetable', href: '#classes' },
      { label: 'On Demand', href: '#classes' },
    ],
  },
  {
    label: 'Personal Training',
    href: '#training',
    children: [
      { label: 'Find a Trainer', href: '#training' },
      { label: 'Personal Training', href: '#training' },
      { label: 'Performance Lab', href: '#training' },
    ],
  },
  {
    label: 'Wellness',
    href: '#wellness',
    children: [
      { label: 'Nutrition', href: '#wellness' },
      { label: 'Sports Med', href: '#wellness' },
      { label: 'Recovery', href: '#wellness' },
      { label: 'Spa', href: '#wellness' },
    ],
  },
]

export const featureCards = [
  {
    id: 'classes',
    title: 'Exclusive classes',
    image: classesImg,
    description:
      'However you like to train, award-winning classes await. Unlimited access to over 100 classes at each club, every week.',
    cta: 'Classes',
    href: '#classes',
  },
  {
    id: 'facilities',
    title: 'World-class facilities',
    image: facilitiesImg,
    description:
      'Push your performance with HIIT and cycle. Train multi-functional fitness in The Yard. Find balance in yoga and Reformer Pilates studios. Meet your match in Combat zones. Multi-disciplinary facilities for every training need.',
    cta: 'Clubs',
    href: '#clubs',
  },
  {
    id: 'training',
    title: 'Elite personal training',
    image: trainingImg,
    description:
      'Our cutting-edge personal training goes beyond physical fitness to include nutrition, sleep, recovery and mental wellbeing. Reach your goals with tailored, evidence-based coaching.',
    cta: 'Personal Training',
    href: '#training',
  },
  {
    id: 'nutrition',
    title: 'Expert nutrition',
    image: nutritionImg,
    description:
      'Bespoke, expert nutrition guidance to help you achieve your goals.',
    cta: 'Nutrition',
    href: '#wellness',
  },
]

export const clubs = [
  {
    name: 'Islington',
    postcode: 'N1',
    address: '15 Esther Anne Pl, London N1 1UL',
    image: islingtonImg,
  },
  {
    name: 'Canary Wharf',
    postcode: 'E14',
    address: '16-19 Canada Square, London E14 5ER',
    image: canaryWharfImg,
  },
  {
    name: 'Wood Wharf',
    postcode: 'E14',
    address: '14 Charter St, London E14 5GZ',
    image: woodWharfImg,
  },
  {
    name: 'Battersea',
    postcode: 'SW11',
    address: 'Ground Floor, Prospect Way, Battersea Power Station SW11 8BH',
    image: batterseaImg,
  },
  {
    name: 'City',
    postcode: 'EC3',
    address: '40 Mark Lane, London EC3R 7AT',
    image: cityImg,
  },
  {
    name: 'Clapham Junction',
    postcode: 'SW11',
    address: 'Lavender Hill, London SW11 1LN',
    image: claphamImg,
  },
  {
    name: 'Marylebone',
    postcode: 'W1U',
    address: 'Bulstrode Place, Marylebone, London W1U 2HU',
    image: maryleboneImg,
  },
  {
    name: 'Mayfair',
    postcode: 'W1J',
    address: '22 Clarges Street, London W1J 5FA',
    image: mayfairImg,
  },
  {
    name: 'Moorgate',
    postcode: 'EC2M',
    address: '16 South Place, London EC2M 2AQ',
    image: moorgateImg,
  },
  {
    name: 'Soho',
    postcode: 'W1F',
    address: '67 Brewer Street, Soho, London W1F 9US',
    image: sohoImg,
  },
  {
    name: 'Tower Bridge',
    postcode: 'SE1',
    address: '2b More London Riverside, London SE1 2AP',
    image: towerBridgeImg,
  },
  {
    name: 'Wimbledon',
    postcode: 'SW19',
    address: "4 Queen's Rd, Wimbledon, London SW19 8YE",
    image: wimbledonImg,
  },
]

export const classCards = [
  {
    name: 'Sound Bath',
    description:
      'Lose yourself in deep relaxation and meditation. A unique soundscape of gongs, crystal bowls and percussion instruments will leave you feeling calm and rejuvenated.',
    image: soundBathImg,
  },
  {
    name: 'Just Ride',
    description:
      'Switch off. Just Ride. Tempo cardio intervals with climbs and sprints. Lose yourself in the music.',
    image: justRideImg,
  },
  {
    name: 'Lift',
    description:
      'Create a strong, athletic and powerful body using progressively heavier weights under the careful instruction of your trainer.',
    image: liftImg,
  },
  {
    name: 'Afterburner',
    description:
      'A high-intensity class that pushes EPOC so that your body keeps working even after the session has finished.',
    image: afterburnerImg,
  },
  {
    name: 'Sweat X',
    description:
      'Sweat with a purpose as you split the time equally between running and strength. Torch calories, build endurance and unleash your strength.',
    image: sweatxImg,
  },
]

export const wellnessCards = [
  {
    name: 'Nutrition',
    description:
      'Bespoke, expert nutrition guidance to help you achieve your goals.',
    image: nutritionImg,
    href: '#wellness',
  },
  {
    name: 'Recovery Spa',
    description:
      'A state-of-the-art spa designed for recovery, wellness and longevity.',
    image: spaImg,
    href: '#wellness',
  },
  {
    name: 'Sports Med',
    description:
      'Maximise performance and rehabilitate injury. Physiotherapy, sports massage, osteopathy, podiatry and acupuncture.',
    image: sportsMedImg,
    href: '#wellness',
  },
  {
    name: 'Recovery',
    description:
      'Best-in-class tools for recovery, from Normatec compression boots to Red Light Therapy and Cryotherapy.',
    image: recoveryImg,
    href: '#wellness',
  },
]

export const footerColumns = [
  {
    title: 'Clubs',
    links: clubs.slice(0, 8).map((c) => ({ label: c.name, href: '#clubs' })),
  },
  {
    title: 'Explore',
    links: [
      { label: 'Membership', href: '#membership' },
      { label: 'Classes', href: '#classes' },
      { label: 'Personal Training', href: '#training' },
      { label: 'Wellness', href: '#wellness' },
      { label: 'Timetable', href: '#classes' },
      { label: 'Journal', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'FAQs', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Use', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'Modern Slavery', href: '#' },
    ],
  },
]
