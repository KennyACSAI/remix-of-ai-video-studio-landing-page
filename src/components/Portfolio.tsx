'use client'

import { MessageSquare, FileText, Image, Video, Users, RefreshCw } from 'lucide-react'

export function Portfolio() {
  const categories = [
    { icon: MessageSquare, label: 'Text', description: 'Distinguish AI-written text from human authors', color: 'bg-purple-100/80' },
    { icon: FileText, label: 'Articles', description: 'Spot AI-generated news and blog posts', color: 'bg-teal/10' },
    { icon: Image, label: 'Images', description: 'Identify AI artwork vs real photography', color: 'bg-party-coral/10' },
    { icon: Video, label: 'Video', description: 'Detect deepfakes and AI-generated videos', color: 'bg-party-yellow/10' },
  ]

  return (
    <section id="portfolio" className="relative py-6" style={{ backgroundColor: 'transparent' }}>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-3 mb-3">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-semibold" style={{ color: '#6B7280' }}>
              Choose Your Challenge
            </span>
            <div className="w-3 h-3 bg-teal rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-3" style={{ color: '#1B1E27' }}>
            Pick a Category
          </h2>
          
          <p className="text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
            Focus your training on specific content types. Master one before tackling another.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {categories.map((category) => (
            <div
              key={category.label}
              className="rounded-3xl p-5 subtle-shadow border border-border backdrop-blur-sm"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)' }}
            >
              <div className="flex flex-col items-start gap-3">
                <div className={`w-12 h-12 ${category.color} rounded-2xl flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1" style={{ color: '#1B1E27' }}>{category.label}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{category.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Party Mode Banner */}
        <div className="mt-5 max-w-4xl mx-auto">
          <div className="gradient-party rounded-3xl p-5 relative overflow-hidden">
            <div className="absolute top-8 right-8 w-40 h-40 bg-white/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <span className="text-xl">🎉</span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-black text-white">Party Mode</h3>
                  <span className="px-2 py-0.5 bg-foreground text-white text-xs font-bold rounded-full">
                    NEW
                  </span>
                </div>
                <p className="text-white/90 text-sm leading-relaxed max-w-md">
                  Spin the wheel with friends! Wrong answers mean the group picks a punishment.
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-white/20 rounded-full text-white text-xs font-medium backdrop-blur-sm">
                    <Users className="w-3 h-3" />
                    2-10 Players
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-white/20 rounded-full text-white text-xs font-medium backdrop-blur-sm">
                    <RefreshCw className="w-3 h-3" />
                    Spin to Select
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mix Mode Info */}
        <div className="mt-4 max-w-4xl mx-auto">
          <div className="gradient-purple rounded-3xl p-5 relative overflow-hidden">
            <div className="absolute top-8 right-8 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-2xl font-black text-white">Mix Mode</h3>
                <span className="px-2 py-0.5 bg-white/20 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                  CLASSIC
                </span>
              </div>
              <p className="text-white/80 text-sm leading-relaxed max-w-md">
                Random mix of all content types. A little of everything. Fast rounds. One wrong answer ends the run.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}