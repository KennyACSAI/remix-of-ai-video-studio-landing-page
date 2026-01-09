'use client'

export function Footer() {
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

          {/* Copyright */}
          <div className="text-xs text-background/60">
            © 2025 REAL? All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}