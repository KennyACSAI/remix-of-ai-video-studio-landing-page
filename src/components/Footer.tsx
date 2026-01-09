'use client'

import { Twitter, Instagram, Youtube } from 'lucide-react'

export function Footer() {
  const links = {
    Product: ['Features', 'Pricing', 'FAQ', 'Updates'],
    Company: ['About', 'Team', 'Careers', 'Press'],
    Legal: ['Privacy', 'Terms', 'Cookies'],
  }

  return (
    <footer className="relative py-16 bg-foreground text-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="col-span-12 md:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-bold text-2xl text-background">REAL?</span>
              <span className="px-2 py-0.5 bg-lime text-accent-foreground text-xs font-semibold rounded-full">
                BETA
              </span>
            </div>
            <p className="text-background/70 leading-relaxed mb-6">
              Train your eye to distinguish between human-created and AI-generated content. Join thousands of players improving their detection skills.
            </p>
            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 gentle-animation">
                <Twitter className="w-5 h-5 text-background" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 gentle-animation">
                <Instagram className="w-5 h-5 text-background" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 gentle-animation">
                <Youtube className="w-5 h-5 text-background" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="col-span-12 md:col-span-8">
            <div className="grid grid-cols-3 gap-8">
              {Object.entries(links).map(([category, items]) => (
                <div key={category}>
                  <h4 className="font-bold text-background mb-4">{category}</h4>
                  <ul className="space-y-3">
                    {items.map((item) => (
                      <li key={item}>
                        <a href="#" className="text-background/60 hover:text-background gentle-animation">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-background/60">
              © 2025 REAL? All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-background/60">
              <a href="#" className="hover:text-background gentle-animation">Privacy Policy</a>
              <a href="#" className="hover:text-background gentle-animation">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
