import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
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
import PrivacyPolicy from './pages/Privacypolicy'
import DownloadPage from './pages/Download'

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

function AppContent() {
  const location = useLocation()
  const isDownload = location.pathname === '/download'

  const routes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/download" element={<DownloadPage />} />
      <Route path="/support" element={<Support />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} />
    </Routes>
  )

  if (isDownload) return routes

  return (
    <div className="min-h-screen text-foreground relative">
      <ParticlesBackground />
      <main className="relative z-10" role="main">
        {routes}
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}