'use client'

import { MessageSquare, FileText, Image, Video, Lock } from 'lucide-react'
import { motion } from 'framer-motion'

const ProBadge = () => (
  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-lime text-accent-foreground text-xs font-semibold rounded-full">
    <Lock className="w-3 h-3" />
    PRO
  </span>
)

export function Portfolio() {
  const categories = [
    { icon: MessageSquare, label: 'Text', description: 'Distinguish AI-written text from human authors' },
    { icon: FileText, label: 'Articles', description: 'Spot AI-generated news and blog posts' },
    { icon: Image, label: 'Images', description: 'Identify AI artwork vs real photography' },
    { icon: Video, label: 'Video', description: 'Detect deepfakes and AI-generated videos' },
  ]

  return (
    <section id="portfolio" className="relative py-32 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-purple rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              Game Modes
            </span>
            <div className="w-3 h-3 bg-lime rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8">
            <span className="block mb-2">Choose Your Challenge</span>
          </h2>
          
          <p className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Test your skills across different types of AI-generated content
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="bg-card rounded-3xl p-6 subtle-shadow cursor-pointer border border-border hover:border-primary/30 gentle-animation"
            >
              <div className="flex justify-end mb-4">
                <ProBadge />
              </div>
              <div className="flex flex-col items-start gap-4">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{category.label}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{category.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Mode */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="gradient-purple rounded-3xl p-8 relative overflow-hidden cursor-pointer">
            <div className="absolute top-8 right-8 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-4xl font-black text-white">REAL?</h3>
                  <span className="px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full backdrop-blur-sm">
                    MIX MODE
                  </span>
                </div>
                <p className="text-white/80 text-lg leading-relaxed max-w-md">
                  A little of everything. Fast rounds. Test what is real. One wrong answer ends the run.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl backdrop-blur-sm"
              >
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
