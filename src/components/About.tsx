'use client'

import { Eye, Brain, Gauge } from 'lucide-react'

export function About() {
  const steps = [
    { number: '01', title: 'View Content', description: 'See an image, text, article, or video', icon: Eye },
    { number: '02', title: 'Make Your Call', description: 'Is it made by a Human or AI?', icon: Brain },
    { number: '03', title: 'Get Results', description: 'See if you were right and learn why', icon: Gauge },
  ]

  return (
    <section id="about" className="relative py-6" style={{ backgroundColor: 'transparent' }}>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-3">
            <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
            <span className="text-sm font-semibold" style={{ color: '#6B7280' }}>
              How It Works
            </span>
            <div className="w-3 h-3 bg-teal rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-3" style={{ color: '#1B1E27' }}>
            Simple to Play
          </h2>
          
          <p className="text-lg max-w-3xl mx-auto" style={{ color: '#6B7280' }}>
            Three steps. Endless fun. Train your eye to notice the subtle differences.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative"
            >
              <div 
                className="rounded-3xl p-6 subtle-shadow border border-border text-center h-full backdrop-blur-sm"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)' }}
              >
                <div className="w-14 h-14 gradient-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-sm font-bold text-primary mb-1">{step.number}</div>
                <h3 className="text-xl font-black mb-2" style={{ color: '#1B1E27' }}>{step.title}</h3>
                <p style={{ color: '#6B7280' }}>{step.description}</p>
              </div>
              {index < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}