import { Hero } from './components/Hero'
import { Portfolio } from './components/Portfolio'
import { Awards } from './components/Awards'
import { About } from './components/About'
import { Services } from './components/Services'
import { Team } from './components/Team'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { ParticlesBackground } from './components/ParticlesBackground'

export default function App() {
  return (
    <div className="min-h-screen text-foreground relative">
      <ParticlesBackground />
      <main className="relative z-10" role="main">
        <Hero />
        <Portfolio />
        <Awards />
        <About />
        <Services />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}