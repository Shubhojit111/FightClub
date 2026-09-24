import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import IntroSection from '../components/IntroSection'
import FeatureCards from '../components/FeatureCards'
import LocationFinder from '../components/LocationFinder'
import MapClubsSection from '../components/MapClubsSection'
import ClubsSection from '../components/ClubsSection'
import ClassesSection from '../components/ClassesSection'
import WellnessSection from '../components/WellnessSection'
import BecomeMemberCTA from '../components/BecomeMemberCTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <IntroSection />
        <FeatureCards />
        <LocationFinder />
        <MapClubsSection />
        <ClubsSection />
        <ClassesSection />
        <WellnessSection />
        <BecomeMemberCTA />
      </main>
      <Footer />
    </div>
  )
}
