import AnimatedHeroDubai from './components/AnimatedHeroDubai'
import FeaturesAnimated from './components/FeaturesAnimated'
import BestSellers from './components/BestSellers'
import NightCourt from './components/NightCourt'
import TestimonialsCarousel from './components/TestimonialsCarousel'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <AnimatedHeroDubai />
      <FeaturesAnimated />
      <BestSellers />
      <NightCourt />
      <TestimonialsCarousel />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default App
