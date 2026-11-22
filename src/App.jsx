import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Testimonials from './components/Testimonials.jsx'
import Features from './components/Features.jsx'
import Pricing from './components/Pricing.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-0">
      <div className="site-frame relative mx-auto min-h-screen w-full max-w-[1060px] border-x border-[#37322f]/10">
        <Header />
        <Hero />
        <Services />
        <Testimonials />
        <Features />
        <Pricing />
        <Footer />
      </div>
    </main>
  )
}

export default App
