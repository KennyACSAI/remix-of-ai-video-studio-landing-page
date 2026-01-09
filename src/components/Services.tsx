'use client'

import { motion } from 'framer-motion'
import { Check, Sparkles } from 'lucide-react'

export function Services() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for casual players',
      features: [
        '5 rounds per day',
        'Text detection only',
        'Basic leaderboard',
        'Standard difficulty',
      ],
      cta: 'Start Free',
      popular: false,
    },
    {
      name: 'Pro',
      price: '$9',
      period: '/month',
      description: 'For serious AI detectives',
      features: [
        'Unlimited rounds',
        'All content types',
        'Premium leaderboard',
        'All difficulty levels',
        'Detailed explanations',
        'Achievement badges',
      ],
      cta: 'Go Pro',
      popular: true,
    },
    {
      name: 'Team',
      price: '$29',
      period: '/month',
      description: 'Challenge your friends',
      features: [
        'Everything in Pro',
        'Up to 10 team members',
        'Private leaderboards',
        'Team challenges',
        'Custom content uploads',
        'Priority support',
      ],
      cta: 'Start Team',
      popular: false,
    },
  ]

  return (
    <section id="services" className="relative py-20 bg-card/50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-lime rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              Pricing
            </span>
            <div className="w-3 h-3 bg-accent-purple rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-foreground">
            Choose Your Plan
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Start free, upgrade when you're ready
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative bg-card rounded-3xl p-8 border ${
                plan.popular ? 'border-primary shadow-lg' : 'border-border subtle-shadow'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1 bg-lime text-accent-foreground text-sm font-bold rounded-full">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-black text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground mt-2">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-accent-emerald/20 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-accent-emerald" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-2xl font-bold text-lg ${
                  plan.popular
                    ? 'gradient-purple text-white'
                    : 'bg-secondary text-foreground hover:bg-secondary/80'
                } gentle-animation`}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
