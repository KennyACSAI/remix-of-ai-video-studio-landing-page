'use client'

import { Eye, Search, Lightbulb, Heart } from 'lucide-react'

export function Team() {
  const values = [
    { 
      icon: Eye, 
      title: 'See Clearly', 
      description: 'We want to help people see clearly in a world where it\'s getting harder to tell what\'s real. With so much AI-made content around us, it\'s easy to lose the ability to spot what\'s authentic.',
      color: 'bg-primary/10',
      iconColor: 'text-primary'
    },
    { 
      icon: Search, 
      title: 'Look Closer', 
      description: 'Every time you play, you sharpen your instincts. Train your eye to notice the subtle differences that separate human creativity from AI generation.',
      color: 'bg-teal/10',
      iconColor: 'text-teal'
    },
    { 
      icon: Lightbulb, 
      title: 'Think Carefully', 
      description: 'We\'re not here to trick you. We\'re here to help you understand the patterns and develop critical thinking skills for the AI age.',
      color: 'bg-party-yellow/20',
      iconColor: 'text-party-orange'
    },
    { 
      icon: Heart, 
      title: 'Stay Curious', 
      description: 'Our goal isn\'t to make people afraid of AI, but to help you sharpen your understanding of digital content.',
      color: 'bg-success/10',
      iconColor: 'text-success'
    },
  ]

  return (
    <section id="team" className="relative py-6" style={{ backgroundColor: 'transparent' }}>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-3">
            <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
            <span className="text-sm font-semibold" style={{ color: '#6B7280' }}>
              Our Mission
            </span>
            <div className="w-3 h-3 bg-teal rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-4" style={{ color: '#1B1E27' }}>
            The REAL? Philosophy
          </h2>
          
          <p className="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
            Helping you see clearly in a world of AI
          </p>
        </div>

        {/* Mission Banner */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="gradient-purple rounded-3xl p-6 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-white mb-2">Our Mission</h3>
              <p className="text-white/90 text-base leading-relaxed max-w-2xl mx-auto">
                Inspired by the original Turing Test, we encourage everyone to look closer, ask questions, and trust their own judgment.
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-3xl p-6 subtle-shadow border border-border backdrop-blur-sm"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)' }}
            >
              <div className={`w-12 h-12 ${value.color} rounded-2xl flex items-center justify-center mb-4`}>
                <value.icon className={`w-6 h-6 ${value.iconColor}`} />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#1B1E27' }}>{value.title}</h3>
              <p className="leading-relaxed text-sm" style={{ color: '#6B7280' }}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}