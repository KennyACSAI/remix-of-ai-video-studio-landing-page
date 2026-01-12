'use client'

import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export function Hero() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { label: 'Categories', href: '#portfolio' },
    { label: 'How it Works', href: '#about' },
    { label: 'Pricing', href: '#services' },
    { label: 'Research', href: '#awards' },
    { label: 'Mission', href: '#team' },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  const handleNavClick = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const id = href.startsWith('#') ? href.slice(1) : href
    setIsMobileMenuOpen(false)
    scrollToSection(id)
  }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <div className="relative min-h-screen w-full overflow-hidden" style={{ background: 'linear-gradient(135deg, #6D35D3 0%, #7636E4 50%, #8B54E2 100%)' }}>
      
      {/* === GRADIENT MESH ORBS === */}
      <div 
        className="absolute -top-20 -right-20 h-96 w-96 rounded-full blur-3xl animate-pulse"
        style={{ 
          background: 'radial-gradient(circle, rgba(139, 84, 226, 0.6) 0%, transparent 70%)',
          animationDuration: '4s'
        }} 
      />
      
      <motion.div 
        className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full blur-3xl"
        style={{ 
          background: 'radial-gradient(circle, rgba(25, 190, 218, 0.5) 0%, transparent 70%)'
        }}
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute top-1/4 -left-20 h-80 w-80 rounded-full blur-3xl"
        style={{ 
          background: 'radial-gradient(circle, rgba(254, 121, 106, 0.45) 0%, transparent 70%)'
        }}
        animate={{ 
          y: [0, 30, 0],
          x: [0, 20, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute top-1/3 right-10 h-64 w-64 rounded-full blur-3xl"
        style={{ 
          background: 'radial-gradient(circle, rgba(25, 190, 218, 0.4) 0%, transparent 70%)'
        }}
        animate={{ 
          y: [0, -40, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-1/4 h-72 w-72 rounded-full blur-3xl"
        style={{ 
          background: 'radial-gradient(circle, rgba(255, 183, 107, 0.4) 0%, transparent 70%)'
        }}
        animate={{ 
          x: [0, -30, 0],
          y: [0, 20, 0],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{ 
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <motion.div 
        className="absolute top-1/2 left-1/3 h-40 w-40 rounded-full blur-2xl"
        style={{ 
          background: 'radial-gradient(circle, rgba(159, 104, 255, 0.5) 0%, transparent 70%)'
        }}
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />

      <div 
        className="absolute top-0 right-0 h-full w-1/2 opacity-10"
        style={{ 
          background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)'
        }}
      />

      {/* Navbar */}
      <nav className="fixed left-0 right-0 top-0 z-[110] w-full">
        <div
          className={`w-full px-6 py-4 transition-all duration-300 sm:px-8 lg:px-12 ${
            isScrolled ? 'glass-navbar shadow-sm' : 'bg-transparent'
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            {/* Logo */}
            <div
              className="flex cursor-pointer items-center"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <span
                className="text-xl font-bold tracking-tight"
                style={{ color: isScrolled ? '#1B1E27' : '#FFFFFF' }}
              >
                REAL?
              </span>
              <span 
                className="ml-2 rounded-full px-2 py-0.5 text-xs font-semibold text-white"
                style={{ backgroundColor: 'rgba(25, 190, 218, 0.3)', backdropFilter: 'blur(4px)' }}
              >
                BETA
              </span>
            </div>

            {/* Navigation */}
            <div className="hidden items-center space-x-8 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleNavClick(item.href)}
                  className="font-medium gentle-animation hover:opacity-70"
                  style={{ color: isScrolled ? '#1B1E27' : '#FFFFFF' }}
                >
                  {item.label}
                </a>
              ))}
              
              {/* Support Button */}
              <Link
                to="/support"
                className="font-semibold gentle-animation hover:opacity-90 px-5 py-2.5 transition-all duration-300"
                style={{
                  backgroundColor: isScrolled ? '#7636E4' : '#FFFFFF',
                  color: isScrolled ? '#FFFFFF' : '#7636E4',
                  borderRadius: '999px',
                }}
              >
                Support
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className={`rounded-full p-3 gentle-animation md:hidden ${
                isScrolled ? 'bg-secondary' : 'bg-white/20'
              }`}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" style={{ color: isScrolled ? '#1B1E27' : '#FFFFFF' }} />
              ) : (
                <Menu className="h-5 w-5" style={{ color: isScrolled ? '#1B1E27' : '#FFFFFF' }} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-[80] bg-black/50 backdrop-blur-md md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed right-0 top-0 z-[90] h-full w-72 bg-card p-6 md:hidden">
            <div className="mt-16 flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-lg px-4 py-3 text-lg font-medium hover:bg-secondary"
                  style={{ color: '#1B1E27' }}
                  onClick={handleNavClick(item.href)}
                >
                  {item.label}
                </a>
              ))}
              {/* Support Button in Mobile Menu */}
              <Link
                to="/support"
                className="rounded-full px-4 py-3 text-lg font-semibold text-center mt-2"
                style={{ backgroundColor: '#7636E4', color: '#FFFFFF' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Support
              </Link>
            </div>
          </div>
        </>
      )}

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-4xl"
        >
          <h1 className="mb-6 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Guess what&apos;s
            <span className="block bg-gradient-to-r from-white via-white to-teal-200 bg-clip-text text-transparent">REAL vs AI</span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
            See where your judgment fails you. Train your eye to spot the difference between human creativity and AI
            generation.
          </p>

          {/* Challenge text */}
          <div className="mx-auto mt-8 max-w-xl">
            <div 
              className="rounded-2xl p-5 backdrop-blur-md border border-white/20"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(25,190,218,0.1) 100%)' }}
            >
              <p className="text-base font-medium text-white">🎯 Can you tell the difference? Test your perception skills.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}