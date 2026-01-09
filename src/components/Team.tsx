'use client'

import { motion } from 'framer-motion'

export function Team() {
  const team = [
    { name: 'Alex Chen', role: 'Founder & CEO', emoji: '🧠' },
    { name: 'Sarah Kim', role: 'Head of AI', emoji: '🤖' },
    { name: 'Marcus Johnson', role: 'Lead Developer', emoji: '💻' },
    { name: 'Emma Davis', role: 'Product Design', emoji: '🎨' },
  ]

  return (
    <section id="team" className="relative py-20 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              Our Team
            </span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8 text-foreground">
            Meet the Makers
          </h2>
          
          <p className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Passionate about AI and pushing the boundaries of perception
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-card rounded-3xl p-8 subtle-shadow border border-border text-center gentle-animation"
            >
              <div className="w-24 h-24 bg-secondary rounded-3xl flex items-center justify-center mx-auto mb-6 text-5xl">
                {member.emoji}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
              <p className="text-muted-foreground">{member.role}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="gradient-purple rounded-3xl p-10 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h3 className="text-3xl font-black text-white mb-4">Our Mission</h3>
              <p className="text-white/80 text-xl leading-relaxed max-w-2xl mx-auto">
                As AI becomes indistinguishable from human creation, we believe everyone should develop the skills to tell them apart. We're building the world's best training ground for AI detection.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
