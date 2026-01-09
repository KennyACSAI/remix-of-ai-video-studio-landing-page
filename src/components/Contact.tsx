'use client'

import { motion } from 'framer-motion'
import { Mail, MessageCircle, Play } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="relative py-32 bg-card/50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-lime rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              Get Started
            </span>
            <div className="w-3 h-3 bg-accent-purple rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8">
            <span className="block mb-2">Ready to Test</span>
            <span className="block">Your Perception?</span>
          </h2>
          
          <p className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Join thousands of players already sharpening their AI detection skills
          </p>
        </div>

        {/* CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            className="bg-card rounded-3xl p-8 subtle-shadow border border-border text-center"
          >
            <div className="w-16 h-16 gradient-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Play className="w-8 h-8 text-white fill-white" />
            </div>
            <h3 className="text-2xl font-black text-foreground mb-3">Start Playing</h3>
            <p className="text-muted-foreground mb-6">
              Jump right in and test your skills. No account required for free mode.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-lime text-accent-foreground font-bold py-4 rounded-2xl text-lg"
            >
              Play Free Now
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="bg-card rounded-3xl p-8 subtle-shadow border border-border text-center"
          >
            <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-black text-foreground mb-3">Have Questions?</h3>
            <p className="text-muted-foreground mb-6">
              Reach out to our team. We'd love to hear your feedback and ideas.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-secondary text-foreground font-bold py-4 rounded-2xl text-lg hover:bg-secondary/80 gentle-animation"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <div className="bg-card rounded-3xl p-8 subtle-shadow border border-border text-center">
            <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">Get notified about new features and game modes</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-secondary rounded-2xl text-foreground placeholder:text-muted-foreground border-0 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="gradient-purple text-white font-bold px-8 py-4 rounded-2xl"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
