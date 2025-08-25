import Header from './components/Header'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Specs from './components/Specs'
import Gallery from './components/Gallery'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-full bg-night">
      <Header />
      <main className="space-y-24 sm:space-y-28 lg:space-y-32">
        <Hero />
        <Highlights />
        <Specs />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}