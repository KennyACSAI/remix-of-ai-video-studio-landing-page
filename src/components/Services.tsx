'use client'

import { Check, Crown } from 'lucide-react'

export function Services() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for casual players',
      features: [
        '5 rounds per day',
        'Mix mode only',
        'Basic leaderboard',
        'Standard difficulty',
      ],
      popular: false,
    },
    {
      name: 'Pro',
      price: '$3.99',
      period: 'one-time',
      description: 'Unlock everything forever',
      features: [
        'Unlimited rounds',
        'All categories: Text, Articles, Images, Video',
        'Party Mode with friends',
        'Detailed accuracy breakdown',
        'No ads ever',
        'Yours forever',
      ],
      popular: true,
    },
  ]

  return (
    <section id="services" className="relative py-6" style={{ backgroundColor: 'transparent' }}>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-3 mb-3">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-semibold" style={{ color: '#6B7280' }}>
              Pricing
            </span>
            <div className="w-3 h-3 bg-teal rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-3" style={{ color: '#1B1E27' }}>
            Unlock Everything
          </h2>
          
          <p className="text-lg leading-relaxed max-w-3xl mx-auto" style={{ color: '#6B7280' }}>
            One purchase. Yours forever. No subscriptions.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-5 border backdrop-blur-sm ${
                plan.popular ? 'border-primary shadow-lg' : 'border-border subtle-shadow'
              }`}
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)' }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-3 py-0.5 gradient-purple text-white text-xs font-bold rounded-full">
                    <Crown className="w-3 h-3" />
                    Best Value
                  </span>
                </div>
              )}
              
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold mb-1" style={{ color: '#1B1E27' }}>{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-black" style={{ color: '#1B1E27' }}>{plan.price}</span>
                  <span style={{ color: '#6B7280' }}>{plan.period}</span>
                </div>
                <p className="mt-1 text-sm" style={{ color: '#6B7280' }}>{plan.description}</p>
              </div>

              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#4EB57033' }}>
                      <Check className="w-2.5 h-2.5" style={{ color: '#4EB570' }} />
                    </div>
                    <span className="text-sm" style={{ color: '#1B1E27' }}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-4 text-center">
          <p className="text-sm" style={{ color: '#6B7280' }}>
            Your data is private and secure. We only use Apple Sign In for authentication.
          </p>
        </div>
      </div>
    </section>
  )
}