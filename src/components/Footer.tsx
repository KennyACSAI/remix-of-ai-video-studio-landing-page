'use client'

import { useNavigate } from 'react-router-dom'

export function Footer() {
  const navigate = useNavigate()

  const handlePrivacyClick = (e: React.MouseEvent) => {
    e.preventDefault()
    navigate('/privacypolicy')
    setTimeout(() => window.scrollTo(0, 0), 0)
  }

  return (
    <footer className="relative py-6 bg-foreground text-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-3">
            <span className="font-bold text-xl text-background">REAL?</span>
            <span className="px-2 py-0.5 text-xs font-semibold rounded-full" style={{ backgroundColor: '#19BEDA', color: '#1B1E27' }}>
              BETA
            </span>
          </div>
          
          <p className="text-white/70 leading-relaxed mb-4 text-sm">
            Train your eye to distinguish between human-created and AI-generated content.
          </p>

          {/* Privacy Policy Link */}
          <div className="mb-4">
            <a
              href="/privacypolicy"
              onClick={handlePrivacyClick}
              className="text-sm text-white/70 hover:text-white transition-colors duration-200 underline underline-offset-2"
            >
              Privacy Policy
            </a>
          </div>

          {/* Copyright */}
          <div className="text-xs text-background/60">
            © 2025 REAL? All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}