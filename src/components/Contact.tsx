'use client'

import { Sparkles } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="relative py-6" style={{ backgroundColor: 'transparent' }}>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-3 mb-3">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-semibold" style={{ color: '#6B7280' }}>
              The Challenge
            </span>
            <div className="w-3 h-3 bg-teal rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-4" style={{ color: '#1B1E27' }}>
            <span className="block mb-1">Ready to Test</span>
            <span className="block">Your Perception?</span>
          </h2>
          
          <p className="text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
            95% of people can&apos;t make it until 10. How far can you go?
          </p>
        </div>

        {/* Coming Soon Card */}
        <div className="max-w-md mx-auto">
          <div className="rounded-3xl p-6 subtle-shadow border border-border text-center backdrop-blur-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)' }}>
            <div className="w-14 h-14 gradient-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-black mb-2" style={{ color: '#1B1E27' }}>Coming Soon</h3>
            <p className="text-sm" style={{ color: '#6B7280' }}>
              REAL? is currently in beta. Stay tuned for the full release.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}