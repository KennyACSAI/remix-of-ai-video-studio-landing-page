'use client'

import { motion } from 'framer-motion'
import { Eye, Brain, Gauge, CheckCircle, XCircle } from 'lucide-react'

export function About() {
  const steps = [
    { number: '01', title: 'View Content', description: 'See an image, text, or video', icon: Eye },
    { number: '02', title: 'Make Your Call', description: 'Is it Human or AI generated?', icon: Brain },
    { number: '03', title: 'Get Results', description: 'See if you were right and learn why', icon: Gauge },
  ]

  return (
    <section id="about" className="relative py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              How It Works
            </span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-foreground">
            Simple to Play
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Three steps. Endless fun. How far can you go?
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-card rounded-3xl p-8 subtle-shadow border border-border text-center h-full">
                <div className="w-16 h-16 gradient-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm font-bold text-primary mb-2">{step.number}</div>
                <h3 className="text-2xl font-black text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              {index < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Demo Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card rounded-3xl p-8 subtle-shadow border border-border">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-black text-foreground mb-2">Try a Quick Round</h3>
              <p className="text-muted-foreground">Is this image made by a human or AI?</p>
            </div>
            
            {/* Placeholder image area */}
            <div className="aspect-video bg-secondary rounded-2xl mb-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-muted rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Eye className="w-12 h-12 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground">Sample image would appear here</p>
              </div>
            </div>

            {/* Answer buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-3 bg-accent-emerald text-white font-bold px-8 py-4 rounded-2xl text-lg"
              >
                <CheckCircle className="w-6 h-6" />
                Human Made
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-3 bg-primary text-white font-bold px-8 py-4 rounded-2xl text-lg"
              >
                <XCircle className="w-6 h-6" />
                AI Generated
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
