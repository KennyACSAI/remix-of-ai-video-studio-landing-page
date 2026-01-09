'use client'

import { useEffect, useState } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  color: string
  duration: number
  delay: number
  opacity: number
}

export function ParticlesBackground() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const colors = [
      'rgba(118, 54, 228, 0.6)',   // purple
      'rgba(25, 190, 218, 0.6)',    // teal
      'rgba(254, 121, 106, 0.5)',   // coral
      'rgba(255, 183, 107, 0.5)',   // orange
      'rgba(159, 104, 255, 0.5)',   // light purple
      'rgba(255, 255, 255, 0.4)',   // white
    ]

    const generated: Particle[] = []
    
    // Generate 50 particles
    for (let i = 0; i < 50; i++) {
      generated.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 6 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 10,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }
    
    setParticles(generated)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 particles-container" style={{ backgroundColor: '#F7F7FF' }}>
      {/* Gradient Orbs */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full blur-3xl animate-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(118, 54, 228, 0.15) 0%, transparent 70%)',
          top: '10%',
          left: '-10%',
          animationDuration: '8s',
        }}
      />
      <div 
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl animate-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(25, 190, 218, 0.12) 0%, transparent 70%)',
          bottom: '5%',
          right: '-5%',
          animationDuration: '10s',
          animationDelay: '2s',
        }}
      />
      <div 
        className="absolute w-[400px] h-[400px] rounded-full blur-3xl animate-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(254, 121, 106, 0.1) 0%, transparent 70%)',
          top: '50%',
          right: '20%',
          animationDuration: '12s',
          animationDelay: '4s',
        }}
      />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            animation: `float-particle ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      {/* Shooting stars / streaks */}
      <div 
        className="absolute w-32 h-[1px] rounded-full"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
          top: '20%',
          left: '10%',
          animation: 'shooting-star 8s ease-in-out infinite',
          transform: 'rotate(-15deg)',
        }}
      />
      <div 
        className="absolute w-24 h-[1px] rounded-full"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(25, 190, 218, 0.5), transparent)',
          top: '60%',
          right: '15%',
          animation: 'shooting-star 12s ease-in-out infinite',
          animationDelay: '4s',
          transform: 'rotate(-20deg)',
        }}
      />
      <div 
        className="absolute w-20 h-[1px] rounded-full"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(254, 121, 106, 0.5), transparent)',
          top: '80%',
          left: '30%',
          animation: 'shooting-star 10s ease-in-out infinite',
          animationDelay: '6s',
          transform: 'rotate(-10deg)',
        }}
      />

      {/* Glowing dots */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`glow-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${15 + i * 12}%`,
            top: `${20 + (i % 3) * 30}%`,
            width: '4px',
            height: '4px',
            backgroundColor: i % 2 === 0 ? 'rgba(25, 190, 218, 0.8)' : 'rgba(118, 54, 228, 0.8)',
            boxShadow: i % 2 === 0 
              ? '0 0 10px rgba(25, 190, 218, 0.6), 0 0 20px rgba(25, 190, 218, 0.4)' 
              : '0 0 10px rgba(118, 54, 228, 0.6), 0 0 20px rgba(118, 54, 228, 0.4)',
            animation: `glow-pulse ${3 + i * 0.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}
    </div>
  )
}