import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Hero } from './components/Hero'
import { Portfolio } from './components/Portfolio'
import { Awards } from './components/Awards'
import { About } from './components/About'
import { Services } from './components/Services'
import { Team } from './components/Team'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { ParticlesBackground } from './components/ParticlesBackground'
import Support from './pages/Support'

// Home page component containing all landing page sections
function Home() {
  return (
    <>
      <Hero />
      <Portfolio />
      <Awards />
      <About />
      <Services />
      <Team />
      <Contact />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen text-foreground relative">
        <ParticlesBackground />
        <main className="relative z-10" role="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}