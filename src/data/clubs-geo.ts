import mayfairImg from '../assets/mayfair-changing.jpg'
import islingtonImg from '../assets/islington.jpg'
import canaryWharfImg from '../assets/canary-wharf.jpg'
import woodWharfImg from '../assets/wood-wharf.jpg'
import batterseaImg from '../assets/battersea.jpg'
import cityImg from '../assets/city.jpg'
import claphamImg from '../assets/clapham.jpg'
import maryleboneImg from '../assets/marylebone.jpg'
import moorgateImg from '../assets/moorgate.jpg'
import sohoImg from '../assets/soho.jpg'
import towerBridgeImg from '../assets/tower-bridge.jpg'
import wimbledonImg from '../assets/wimbledon.jpg'
import mayfairAlt from '../assets/mayfair.jpg'

export type ClubGeo = {
  id: string
  name: string
  postcode: string
  address: string
  image: string
  lat: number
  lng: number
}

export const clubPins: ClubGeo[] = [
  {
    id: 'mayfair',
    name: 'Mayfair',
    postcode: 'W1J',
    address: '22 Clarges Street, London W1J 5FA',
    image: mayfairImg,
    lat: 51.5076,
    lng: -0.1436,
  },
  {
    id: 'marylebone',
    name: 'Marylebone',
    postcode: 'W1U',
    address: 'Bulstrode Place, Marylebone, London W1U 2HU',
    image: maryleboneImg,
    lat: 51.517,
    lng: -0.1494,
  },
  {
    id: 'soho',
    name: 'Soho',
    postcode: 'W1F',
    address: '67 Brewer Street, Soho, London W1F 9US',
    image: sohoImg,
    lat: 51.5114,
    lng: -0.1345,
  },
  {
    id: 'islington',
    name: 'Islington',
    postcode: 'N1',
    address: '15 Esther Anne Pl, London N1 1UL',
    image: islingtonImg,
    lat: 51.5412,
    lng: -0.1037,
  },
  {
    id: 'moorgate',
    name: 'Moorgate',
    postcode: 'EC2M',
    address: '16 South Place, London EC2M 2AQ',
    image: moorgateImg,
    lat: 51.5195,
    lng: -0.0864,
  },
  {
    id: 'city',
    name: 'City',
    postcode: 'EC3',
    address: '40 Mark Lane, London EC3R 7AT',
    image: cityImg,
    lat: 51.5105,
    lng: -0.0805,
  },
  {
    id: 'tower-bridge',
    name: 'Tower Bridge',
    postcode: 'SE1',
    address: '2b More London Riverside, London SE1 2AP',
    image: towerBridgeImg,
    lat: 51.5045,
    lng: -0.0803,
  },
  {
    id: 'canary-wharf',
    name: 'Canary Wharf',
    postcode: 'E14',
    address: '16-19 Canada Square, London E14 5ER',
    image: canaryWharfImg,
    lat: 51.5049,
    lng: -0.0195,
  },
  {
    id: 'wood-wharf',
    name: 'Wood Wharf',
    postcode: 'E14',
    address: '14 Charter St, London E14 5GZ',
    image: woodWharfImg,
    lat: 51.5028,
    lng: -0.012,
  },
  {
    id: 'battersea',
    name: 'Battersea',
    postcode: 'SW11',
    address: 'Prospect Way, Battersea Power Station SW11 8BH',
    image: batterseaImg,
    lat: 51.4816,
    lng: -0.1445,
  },
  {
    id: 'clapham',
    name: 'Clapham Junction',
    postcode: 'SW11',
    address: 'Lavender Hill, London SW11 1LN',
    image: claphamImg,
    lat: 51.4642,
    lng: -0.1695,
  },
  {
    id: 'wimbledon',
    name: 'Wimbledon',
    postcode: 'SW19',
    address: "4 Queen's Rd, Wimbledon, London SW19 8YE",
    image: wimbledonImg,
    lat: 51.4205,
    lng: -0.2052,
  },
  {
    id: 'richmond',
    name: 'Richmond',
    postcode: 'TW9',
    address: 'Richmond, London TW9',
    image: mayfairAlt,
    lat: 51.4613,
    lng: -0.3037,
  },
]
