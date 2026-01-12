'use client'

import { motion } from 'framer-motion'
import { Send, Mail, MessageSquare, HelpCircle, RefreshCw, AlertCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz_MV_tnBsCOr04J4_oge0QRCO5t4hz4orimZrabflDRex6qb9blpw_YoHerLZUOBQ9/exec'

export default function Support() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(false)
    
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      })
      
      // With no-cors mode, we can't read the response, but if no error was thrown, assume success
      setSubmitSuccess(true)
      setFormData({ email: '', subject: '', message: '' })
      
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSendAnother = () => {
    setSubmitSuccess(false)
    setSubmitError(false)
    setFormData({ email: '', subject: '', message: '' })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Teal Gradient */}
      <div className="relative w-full overflow-hidden" style={{ background: 'linear-gradient(135deg, #0D9488 0%, #19BEDA 50%, #5EEAD4 100%)' }}>
        
        {/* === GRADIENT MESH ORBS === */}
        <div 
          className="absolute -top-20 -right-20 h-96 w-96 rounded-full blur-3xl animate-pulse"
          style={{ 
            background: 'radial-gradient(circle, rgba(94, 234, 212, 0.6) 0%, transparent 70%)',
            animationDuration: '4s'
          }} 
        />
        
        <motion.div 
          className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full blur-3xl"
          style={{ 
            background: 'radial-gradient(circle, rgba(118, 54, 228, 0.4) 0%, transparent 70%)'
          }}
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute top-1/4 -left-20 h-80 w-80 rounded-full blur-3xl"
          style={{ 
            background: 'radial-gradient(circle, rgba(255, 183, 107, 0.45) 0%, transparent 70%)'
          }}
          animate={{ 
            y: [0, 30, 0],
            x: [0, 20, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute top-1/3 right-10 h-64 w-64 rounded-full blur-3xl"
          style={{ 
            background: 'radial-gradient(circle, rgba(13, 148, 136, 0.5) 0%, transparent 70%)'
          }}
          animate={{ 
            y: [0, -40, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <motion.div 
          className="absolute bottom-20 right-1/4 h-72 w-72 rounded-full blur-3xl"
          style={{ 
            background: 'radial-gradient(circle, rgba(254, 121, 106, 0.35) 0%, transparent 70%)'
          }}
          animate={{ 
            x: [0, -30, 0],
            y: [0, 20, 0],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ 
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        <div 
          className="absolute top-0 right-0 h-full w-1/2 opacity-10"
          style={{ 
            background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)'
          }}
        />

        {/* Simplified Navbar - Only Logo */}
        <nav className="fixed left-0 right-0 top-0 z-[110] w-full">
          <div
            className={`w-full px-6 py-4 transition-all duration-300 sm:px-8 lg:px-12 ${
              isScrolled ? 'glass-navbar shadow-sm' : 'bg-transparent'
            }`}
          >
            <div className="mx-auto flex max-w-7xl items-center justify-between">
              {/* Logo - Links back to main page */}
              <Link
                to="/"
                className="flex cursor-pointer items-center"
              >
                <span
                  className="text-xl font-bold tracking-tight"
                  style={{ color: isScrolled ? '#1B1E27' : '#FFFFFF' }}
                >
                  REAL?
                </span>
                <span 
                  className="ml-2 rounded-full px-2 py-0.5 text-xs font-semibold text-white"
                  style={{ backgroundColor: 'rgba(13, 148, 136, 0.4)', backdropFilter: 'blur(4px)' }}
                >
                  BETA
                </span>
              </Link>

              {/* Back to Home Button */}
              <Link
                to="/"
                className="font-semibold gentle-animation hover:opacity-90 px-5 py-2.5 transition-all duration-300"
                style={{
                  backgroundColor: isScrolled ? '#0D9488' : '#FFFFFF',
                  color: isScrolled ? '#FFFFFF' : '#0D9488',
                  borderRadius: '999px',
                }}
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Content - Reduced bottom padding */}
        <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center pt-28 pb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-4xl"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(10px)' }}>
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
            
            <h1 className="mb-4 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
              Need Help?
              <span className="block bg-gradient-to-r from-white via-white to-emerald-200 bg-clip-text text-transparent">We&apos;re Here for You</span>
            </h1>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              Have questions, feedback, or running into issues? Our team is ready to help you get the most out of REAL?
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Form Section - Reduced top padding */}
      <section className="relative py-8 md:py-12" style={{ backgroundColor: 'transparent' }}>
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl mx-auto">
            {/* Section Header - Tighter spacing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-6"
            >
              <div className="inline-flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: '#0D9488' }} />
                <span className="text-sm font-semibold" style={{ color: '#6B7280' }}>
                  Get in Touch
                </span>
                <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: '#19BEDA' }} />
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-black leading-tight mb-2" style={{ color: '#1B1E27' }}>
                Send Us a Message
              </h2>
              
              <p className="text-sm lg:text-base max-w-xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
                Fill out the form below and we&apos;ll get back to you as soon as possible. We typically respond within 24 hours.
              </p>
            </motion.div>

            {/* Form Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-3xl p-6 md:p-8 subtle-shadow border border-border backdrop-blur-sm"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)' }}
            >
              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#10B981' }}>
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#1B1E27' }}>Message Sent!</h3>
                  <p className="mb-6" style={{ color: '#6B7280' }}>Thank you for reaching out. We&apos;ll get back to you soon.</p>
                  
                  {/* Send Another Request Button */}
                  <button
                    onClick={handleSendAnother}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:opacity-90"
                    style={{ 
                      background: 'linear-gradient(135deg, #0D9488 0%, #19BEDA 50%, #5EEAD4 100%)',
                      color: '#FFFFFF'
                    }}
                  >
                    <RefreshCw className="w-5 h-5" />
                    Send Another Request
                  </button>
                </motion.div>
              ) : submitError ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#EF4444' }}>
                    <AlertCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#1B1E27' }}>Something Went Wrong</h3>
                  <p className="mb-6" style={{ color: '#6B7280' }}>We couldn&apos;t send your message. Please try again.</p>
                  
                  {/* Try Again Button */}
                  <button
                    onClick={handleSendAnother}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:opacity-90"
                    style={{ 
                      background: 'linear-gradient(135deg, #0D9488 0%, #19BEDA 50%, #5EEAD4 100%)',
                      color: '#FFFFFF'
                    }}
                  >
                    <RefreshCw className="w-5 h-5" />
                    Try Again
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{ color: '#1B1E27' }}>
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#6B7280' }} />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your@email.com"
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:border-teal-500 transition-all"
                        style={{ fontSize: '16px', '--tw-ring-color': 'rgba(25, 190, 218, 0.3)' } as React.CSSProperties}
                      />
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold mb-2" style={{ color: '#1B1E27' }}>
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3.5 rounded-xl border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:border-teal-500 transition-all appearance-none cursor-pointer"
                      style={{ fontSize: '16px', '--tw-ring-color': 'rgba(25, 190, 218, 0.3)' } as React.CSSProperties}
                    >
                      <option value="">Select a topic...</option>
                      <option value="General Question">General Question</option>
                      <option value="Report a Bug">Report a Bug</option>
                      <option value="Feature Request">Feature Request</option>
                      <option value="Billing & Payments">Billing & Payments</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2" style={{ color: '#1B1E27' }}>
                      Message
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 w-5 h-5" style={{ color: '#6B7280' }} />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        placeholder="Tell us more about your question or issue..."
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:border-teal-500 transition-all resize-none"
                        style={{ fontSize: '16px', '--tw-ring-color': 'rgba(25, 190, 218, 0.3)' } as React.CSSProperties}
                      />
                    </div>
                  </div>

                  {/* Submit Button - Teal gradient */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-bold text-white transition-all duration-300 hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    style={{ 
                      background: 'linear-gradient(135deg, #0D9488 0%, #19BEDA 50%, #5EEAD4 100%)',
                      fontSize: '16px'
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-6 text-center"
            >
              <p className="text-sm" style={{ color: '#6B7280' }}>
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}