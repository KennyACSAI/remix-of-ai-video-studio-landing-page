'use client'

import { FlaskConical, Heart, Image, BookOpen, Sparkles } from 'lucide-react'

export function Awards() {
  const sources = [
    { name: 'Pexels', icon: Image, color: 'bg-success/10', iconColor: 'text-success' },
    { name: 'Pixabay', icon: Image, color: 'bg-teal/10', iconColor: 'text-teal' },
    { name: 'Lumi.ai', icon: Sparkles, color: 'bg-primary/10', iconColor: 'text-primary' },
    { name: 'SFF Stories', icon: BookOpen, color: 'bg-party-orange/10', iconColor: 'text-party-orange' },
  ]

  return (
    <section id="awards" className="relative py-6" style={{ backgroundColor: 'transparent' }}>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-3 mb-3">
            <div className="w-3 h-3 bg-teal rounded-full animate-pulse" />
            <span className="text-sm font-semibold" style={{ color: '#6B7280' }}>
              Our Approach
            </span>
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-3" style={{ color: '#1B1E27' }}>
            Research-Driven
          </h2>
          
          <p className="text-lg leading-relaxed max-w-3xl mx-auto" style={{ color: '#6B7280' }}>
            Understanding human perception in the age of AI
          </p>
        </div>

        {/* Research Card */}
        <div className="max-w-4xl mx-auto mb-6">
          <div className="gradient-teal rounded-3xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
            
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FlaskConical className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4">Built for Learning</h3>
              <p className="text-white/90 text-base leading-relaxed max-w-2xl mx-auto">
                REAL? helps you develop critical thinking skills for the AI age. Learn to notice the subtle differences between human creativity and AI generation.
              </p>
            </div>
          </div>
        </div>

        {/* Open Source Content */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl p-5 subtle-shadow border border-border backdrop-blur-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-success/10 rounded-2xl flex items-center justify-center">
                <Heart className="w-5 h-5 text-success" />
              </div>
              <h3 className="text-lg font-bold" style={{ color: '#1B1E27' }}>Open Source Content</h3>
            </div>
            <p className="text-sm mb-4" style={{ color: '#6B7280' }}>
              We use open-source and creative commons content. Every image, video, and story is ethically sourced.
            </p>
            <div className="flex flex-wrap gap-2">
              {sources.map((source) => (
                <span
                  key={source.name}
                  className={`inline-flex items-center gap-1 px-3 py-1 ${source.color} rounded-full text-xs font-medium`}
                >
                  <source.icon className={`w-3 h-3 ${source.iconColor}`} />
                  {source.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}