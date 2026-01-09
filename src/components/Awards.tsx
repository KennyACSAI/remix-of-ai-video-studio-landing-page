'use client'

import { motion } from 'framer-motion'
import { Trophy, Target, Zap, Crown, Star, Award } from 'lucide-react'

export function Awards() {
  const achievements = [
    { icon: Trophy, label: 'Perfect Round', description: '10 correct in a row', color: 'text-yellow-500' },
    { icon: Target, label: 'Sharp Eye', description: '90% accuracy rate', color: 'text-accent-emerald' },
    { icon: Zap, label: 'Speed Demon', description: 'Under 2s per answer', color: 'text-accent-blue' },
    { icon: Crown, label: 'AI Detective', description: 'Complete all modes', color: 'text-accent-purple' },
    { icon: Star, label: 'Rising Star', description: 'Top 10% of players', color: 'text-orange-500' },
    { icon: Award, label: 'Legend', description: '1000+ rounds played', color: 'text-pink-500' },
  ]

  return (
    <section id="awards" className="relative py-20 bg-card/50 overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              Achievements
            </span>
            <div className="w-3 h-3 bg-accent-purple rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-foreground">
            Unlock Badges
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Earn achievements as you improve your detection skills
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="bg-card rounded-2xl p-6 subtle-shadow border border-border text-center cursor-pointer gentle-animation"
            >
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
              </div>
              <h3 className="font-bold text-foreground mb-1 text-sm">{achievement.label}</h3>
              <p className="text-muted-foreground text-xs">{achievement.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Leaderboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <div className="bg-card rounded-3xl p-8 subtle-shadow border border-border">
            <h3 className="text-2xl font-black text-foreground mb-6 text-center">Top Players This Week</h3>
            <div className="space-y-4">
              {[
                { rank: 1, name: 'AIHunter99', score: 2450, avatar: '🏆' },
                { rank: 2, name: 'RealOrNot', score: 2380, avatar: '🥈' },
                { rank: 3, name: 'DetectiveBot', score: 2290, avatar: '🥉' },
              ].map((player) => (
                <div key={player.rank} className="flex items-center justify-between p-4 bg-secondary/50 rounded-2xl">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{player.avatar}</span>
                    <div>
                      <div className="font-bold text-foreground">{player.name}</div>
                      <div className="text-sm text-muted-foreground">Rank #{player.rank}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-black text-foreground text-lg">{player.score}</div>
                    <div className="text-xs text-muted-foreground">points</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
