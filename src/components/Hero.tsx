'use client'

import { motion } from 'framer-motion'
import { Menu, X, Play } from 'lucide-react'
import { useState, useEffect } from 'react'

export function Hero() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isMobileMenuOpen])

  return (
    <div className="relative min-h-screen w-full overflow-hidden gradient-purple">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-lime/20 rounded-full blur-2xl" />

      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="fixed top-0 left-0 right-0 w-full z-[110]"
      >
        <div className={`w-full px-6 sm:px-8 lg:px-12 py-4 transition-all duration-300 ${
          isScrolled ? 'glass-navbar shadow-sm' : 'bg-transparent'
        }`}>
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <span className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-foreground' : 'text-white'}`}>
                REAL?
              </span>
              <span className="ml-2 px-2 py-0.5 bg-lime text-accent-foreground text-xs font-semibold rounded-full">
                BETA
              </span>
            </motion.div>

            {/* Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['Features', 'How it Works', 'Pricing', 'Team'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className={`font-medium gentle-animation hover:opacity-70 ${isScrolled ? 'text-foreground' : 'text-white'}`}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden sm:flex items-center gap-2 bg-lime text-accent-foreground font-semibold px-6 py-3 rounded-full hover:bg-lime/90 gentle-animation"
              >
                <Play className="w-4 h-4 fill-current" />
                Play Now
              </motion.button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden p-3 rounded-full gentle-animation ${isScrolled ? 'bg-secondary' : 'bg-white/20'}`}
              >
                {isMobileMenuOpen ? (
                  <X className={`w-5 h-5 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
                ) : (
                  <Menu className={`w-5 h-5 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-md z-[80]"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="md:hidden fixed top-0 right-0 h-full w-72 bg-card z-[90] p-6"
          >
            <div className="flex flex-col space-y-4 mt-16">
              {['Features', 'How it Works', 'Pricing', 'Team'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="px-4 py-3 text-foreground hover:bg-secondary rounded-lg font-medium text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="mt-4 bg-lime text-accent-foreground font-semibold px-6 py-3 rounded-full">
                Play Now
              </button>
            </div>
          </motion.div>
        </>
      )}

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-lime rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">New: Video detection now live</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
            Can You Tell What's
            <span className="block">Human vs AI?</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Test your perception. Challenge your assumptions. See where your judgment fails you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-lime text-accent-foreground font-bold px-8 py-4 rounded-full text-lg"
            >
              <Play className="w-5 h-5 fill-current" />
              Start Playing Free
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-full text-lg border border-white/30"
            >
              Watch Demo
            </motion.button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            {[
              { value: '50K+', label: 'Players' },
              { value: '2M+', label: 'Rounds Played' },
              { value: '67%', label: 'Avg Accuracy' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-black text-white">{stat.value}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
