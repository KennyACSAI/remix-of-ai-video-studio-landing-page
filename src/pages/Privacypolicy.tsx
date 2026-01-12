'use client'

import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function PrivacyPolicy() {
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleBackToHome = (e: React.MouseEvent) => {
    e.preventDefault()
    navigate('/')
    setTimeout(() => window.scrollTo(0, 0), 0)
  }

  const handleSupportClick = (e: React.MouseEvent) => {
    e.preventDefault()
    navigate('/support')
    setTimeout(() => window.scrollTo(0, 0), 0)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Blue Gradient - Static orbs only */}
      <div className="relative w-full overflow-hidden" style={{ background: 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 50%, #60A5FA 100%)' }}>
        
        {/* Static gradient orbs - no animations */}
        <div 
          className="absolute -top-20 -right-20 h-96 w-96 rounded-full blur-3xl opacity-60"
          style={{ background: 'radial-gradient(circle, rgba(96, 165, 250, 0.6) 0%, transparent 70%)' }} 
        />
        <div 
          className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full blur-3xl opacity-50"
          style={{ background: 'radial-gradient(circle, rgba(25, 190, 218, 0.5) 0%, transparent 70%)' }}
        />
        <div 
          className="absolute top-1/3 right-10 h-64 w-64 rounded-full blur-3xl opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(147, 197, 253, 0.5) 0%, transparent 70%)' }}
        />

        {/* Navbar */}
        <nav className="fixed left-0 right-0 top-0 z-[110] w-full">
          <div
            className={`w-full px-6 py-4 transition-all duration-300 sm:px-8 lg:px-12 ${
              isScrolled ? 'glass-navbar shadow-sm' : 'bg-transparent'
            }`}
          >
            <div className="mx-auto flex max-w-7xl items-center justify-between">
              <a
                href="/"
                onClick={handleBackToHome}
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
                  style={{ backgroundColor: 'rgba(25, 190, 218, 0.3)', backdropFilter: 'blur(4px)' }}
                >
                  BETA
                </span>
              </a>

              <a
                href="/"
                onClick={handleBackToHome}
                className="font-semibold gentle-animation hover:opacity-90 px-5 py-2.5 transition-all duration-300"
                style={{
                  backgroundColor: isScrolled ? '#3B82F6' : '#FFFFFF',
                  color: isScrolled ? '#FFFFFF' : '#3B82F6',
                  borderRadius: '999px',
                }}
              >
                ← Back to Home
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center pt-28 pb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-4xl"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(10px)' }}>
              <Shield className="w-8 h-8 text-white" />
            </div>
            
            <h1 className="mb-4 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
              Privacy Policy
              <span className="block bg-gradient-to-r from-white via-white to-cyan-200 bg-clip-text text-transparent">Your Data, Protected</span>
            </h1>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              Last Updated: January 12, 2026
            </p>
          </motion.div>
        </div>
      </div>

      {/* Privacy Policy Content Section */}
      <section className="relative py-8 md:py-12" style={{ backgroundColor: 'transparent' }}>
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto">
            
            {/* Content Card */}
            <div
              className="rounded-3xl p-6 md:p-10 subtle-shadow border border-border backdrop-blur-sm"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)' }}
            >
              <div className="prose prose-lg max-w-none" style={{ color: '#1B1E27' }}>
                
                {/* Introduction */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#1B1E27' }}>Introduction</h2>
                  <p className="text-base leading-relaxed" style={{ color: '#4B5563' }}>
                    Welcome to Real: Turing Game ("we," "our," or "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website (collectively, the "Service").
                  </p>
                  <p className="text-base leading-relaxed mt-4" style={{ color: '#4B5563' }}>
                    We are committed to protecting your privacy and being transparent about our data practices. Please read this Privacy Policy carefully. By using the Service, you agree to the collection and use of information in accordance with this policy.
                  </p>
                </section>

                {/* Information We Collect */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#1B1E27' }}>Information We Collect</h2>
                  
                  <h3 className="text-xl font-semibold mb-3 mt-6" style={{ color: '#1B1E27' }}>Information You Provide Directly</h3>
                  
                  <h4 className="text-lg font-semibold mb-2" style={{ color: '#3B82F6' }}>Account Information</h4>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#4B5563' }}>
                    When you create an account, we collect: email address (used for authentication) and display name (optional).
                  </p>
                  
                  <h4 className="text-lg font-semibold mb-2" style={{ color: '#3B82F6' }}>Payment Information</h4>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#4B5563' }}>
                    If you purchase premium features, we collect a record of premium purchase and timestamp. We do not directly store payment card details; these are processed by our third-party payment processors.
                  </p>

                  <h3 className="text-xl font-semibold mb-3 mt-6" style={{ color: '#1B1E27' }}>Information Collected Automatically</h3>
                  
                  <h4 className="text-lg font-semibold mb-2" style={{ color: '#3B82F6' }}>Device Information</h4>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#4B5563' }}>
                    For users who play without creating an account, we generate and store a unique device identifier to track your game progress and scores.
                  </p>

                  <h4 className="text-lg font-semibold mb-2" style={{ color: '#3B82F6' }}>Game Activity Data</h4>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#4B5563' }}>
                    We automatically collect information about your gameplay, including: game sessions (when you start and end playing), your guesses on each content item (whether you guessed AI or Human), whether your guesses were correct, your scores and streaks, content categories you played (for premium users), and timestamps of all game activity.
                  </p>

                  <h4 className="text-lg font-semibold mb-2" style={{ color: '#3B82F6' }}>Aggregated Statistics</h4>
                  <p className="text-base leading-relaxed" style={{ color: '#4B5563' }}>
                    We collect and display aggregate voting patterns showing what percentage of all users guessed "AI" versus "Human" for each piece of content. This data is anonymized and aggregated.
                  </p>
                </section>

                {/* How We Use Your Information */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#1B1E27' }}>How We Use Your Information</h2>
                  <p className="text-base leading-relaxed" style={{ color: '#4B5563' }}>
                    We use the information we collect to:
                  </p>
                  <ul className="mt-4 space-y-2" style={{ color: '#4B5563' }}>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#3B82F6' }}></span>
                      <span><strong>Provide the Service:</strong> Enable gameplay, track your scores, and save your progress</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#3B82F6' }}></span>
                      <span><strong>Maintain Your Account:</strong> Authenticate your identity and manage your profile</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#3B82F6' }}></span>
                      <span><strong>Enable Premium Features:</strong> Provide access to category selection and enhanced statistics for premium subscribers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#3B82F6' }}></span>
                      <span><strong>Improve the Service:</strong> Analyze gameplay patterns to enhance content and user experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#3B82F6' }}></span>
                      <span><strong>Display Crowd Statistics:</strong> Show aggregated voting percentages to enhance gameplay</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#3B82F6' }}></span>
                      <span><strong>Link Anonymous Play:</strong> Transfer your anonymous game history to your account when you sign up</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#3B82F6' }}></span>
                      <span><strong>Communicate With You:</strong> Send service-related notifications when necessary</span>
                    </li>
                  </ul>
                </section>

                {/* How We Share Your Information */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#1B1E27' }}>How We Share Your Information</h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#4B5563' }}>
                    We do not sell your personal information. We may share information in the following circumstances:
                  </p>
                  
                  <h4 className="text-lg font-semibold mb-2" style={{ color: '#3B82F6' }}>Aggregated Data</h4>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#4B5563' }}>
                    We display anonymized, aggregated statistics (such as the percentage of users who guessed AI vs. Human for each content item) to all users as part of the gameplay experience. This data cannot be used to identify you.
                  </p>

                  <h4 className="text-lg font-semibold mb-2" style={{ color: '#3B82F6' }}>Service Providers</h4>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#4B5563' }}>
                    We use third-party services to operate our Service: <strong>Supabase</strong> for database hosting, user authentication, and backend infrastructure; and <strong>Payment Processors</strong> to process premium subscription purchases. These providers only have access to information necessary to perform their services and are obligated to protect your information.
                  </p>

                  <h4 className="text-lg font-semibold mb-2" style={{ color: '#3B82F6' }}>Legal Requirements</h4>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#4B5563' }}>
                    We may disclose your information if required by law, court order, or governmental authority, or when we believe disclosure is necessary to protect our rights, your safety, or the safety of others.
                  </p>

                  <h4 className="text-lg font-semibold mb-2" style={{ color: '#3B82F6' }}>Business Transfers</h4>
                  <p className="text-base leading-relaxed" style={{ color: '#4B5563' }}>
                    If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
                  </p>
                </section>

                {/* Data Retention */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#1B1E27' }}>Data Retention</h2>
                  
                  <h4 className="text-lg font-semibold mb-2" style={{ color: '#3B82F6' }}>Active Accounts</h4>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#4B5563' }}>
                    We retain your account information and game history for as long as your account is active.
                  </p>

                  <h4 className="text-lg font-semibold mb-2" style={{ color: '#3B82F6' }}>Anonymous Users</h4>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#4B5563' }}>
                    Game data associated with device identifiers is retained to preserve your scores and progress. This data may be linked to an account if you later sign up using the same device.
                  </p>

                  <h4 className="text-lg font-semibold mb-2" style={{ color: '#3B82F6' }}>Deleted Accounts</h4>
                  <p className="text-base leading-relaxed" style={{ color: '#4B5563' }}>
                    When you delete your account, we permanently delete: your profile information, all your game sessions and history, all your guesses, and your authentication credentials. This deletion is irreversible.
                  </p>
                </section>

                {/* Your Rights and Choices */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#1B1E27' }}>Your Rights and Choices</h2>
                  
                  <h4 className="text-lg font-semibold mb-2" style={{ color: '#3B82F6' }}>Access and Update Your Information</h4>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#4B5563' }}>
                    You can access and update your display name through the app settings.
                  </p>

                  <h4 className="text-lg font-semibold mb-2" style={{ color: '#3B82F6' }}>Delete Your Account</h4>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#4B5563' }}>
                    You have the right to delete your account at any time. This will permanently remove all your personal data and game history from our systems. To delete your account, use the account deletion option in the app settings.
                  </p>

                  <h4 className="text-lg font-semibold mb-2" style={{ color: '#3B82F6' }}>Anonymous Play</h4>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#4B5563' }}>
                    You can use the Service without creating an account. Anonymous play uses only a device identifier and does not require you to provide any personal information.
                  </p>

                  <h4 className="text-lg font-semibold mb-2" style={{ color: '#3B82F6' }}>Opt Out of Account Creation</h4>
                  <p className="text-base leading-relaxed" style={{ color: '#4B5563' }}>
                    You are never required to create an account. Anonymous users can enjoy the core gameplay experience without registration.
                  </p>
                </section>

                {/* Data Security */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#1B1E27' }}>Data Security</h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#4B5563' }}>
                    We implement appropriate technical and organizational security measures to protect your information, including: row-level security policies ensuring users can only access their own data, secure authentication through Supabase, encrypted data transmission, and access controls limiting data access to authorized personnel and services.
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: '#4B5563' }}>
                    However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                  </p>
                </section>

                {/* Children's Privacy */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#1B1E27' }}>Children's Privacy</h2>
                  <p className="text-base leading-relaxed" style={{ color: '#4B5563' }}>
                    The Service is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us using the form below, and we will delete such information.
                  </p>
                </section>

                {/* International Data Transfers */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#1B1E27' }}>International Data Transfers</h2>
                  <p className="text-base leading-relaxed" style={{ color: '#4B5563' }}>
                    Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws different from your country. By using the Service, you consent to the transfer of your information to these countries.
                  </p>
                </section>

                {/* Changes to This Privacy Policy */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#1B1E27' }}>Changes to This Privacy Policy</h2>
                  <p className="text-base leading-relaxed" style={{ color: '#4B5563' }}>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes. Continued use of the Service after changes to the Privacy Policy constitutes acceptance of the updated policy.
                  </p>
                </section>

                {/* Third-Party Services */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#1B1E27' }}>Third-Party Services</h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#4B5563' }}>
                    Our Service uses the following third-party services that have their own privacy policies:
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: '#4B5563' }}>
                    <strong>Supabase</strong> (Database and Authentication): <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: '#3B82F6' }}>https://supabase.com/privacy</a>
                  </p>
                  <p className="text-base leading-relaxed mt-4" style={{ color: '#4B5563' }}>
                    We encourage you to review the privacy policies of these third parties.
                  </p>
                </section>

                {/* Summary Table */}
                {/* Summary Table */}
<section className="mb-8">
  <h2 className="text-2xl font-bold mb-6" style={{ color: '#1B1E27' }}>Summary of Data We Collect</h2>
  <div className="overflow-x-auto rounded-2xl" style={{ boxShadow: '0 4px 20px rgba(59, 130, 246, 0.15)' }}>
    <table className="w-full text-sm" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
      <thead>
        <tr style={{ background: 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)' }}>
          <th className="px-6 py-4 text-left text-white font-semibold first:rounded-tl-2xl">Data Type</th>
          <th className="px-6 py-4 text-center text-white font-semibold">Anonymous Users</th>
          <th className="px-6 py-4 text-center text-white font-semibold">Registered Users</th>
          <th className="px-6 py-4 text-left text-white font-semibold last:rounded-tr-2xl">Purpose</th>
        </tr>
      </thead>
      <tbody>
        {[
          { type: 'Device ID', anon: true, reg: false, purpose: 'Track anonymous game progress' },
          { type: 'Email', anon: false, reg: true, purpose: 'Account authentication' },
          { type: 'Display Name', anon: false, reg: 'optional', purpose: 'Profile personalization' },
          { type: 'Game Sessions', anon: true, reg: true, purpose: 'Gameplay functionality' },
          { type: 'Guesses', anon: true, reg: true, purpose: 'Gameplay functionality' },
          { type: 'Scores', anon: true, reg: true, purpose: 'Track performance' },
          { type: 'Premium Status', anon: false, reg: true, purpose: 'Enable premium features' },
        ].map((row, index, arr) => (
          <tr 
            key={row.type}
            className="transition-colors duration-200 hover:bg-blue-50"
            style={{ backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#F8FAFC' }}
          >
            <td 
              className={`px-6 py-4 font-medium ${index === arr.length - 1 ? 'rounded-bl-2xl' : ''}`}
              style={{ color: '#1E40AF' }}
            >
              {row.type}
            </td>
            <td className="px-6 py-4 text-center">
              {row.anon ? (
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full" style={{ backgroundColor: '#DCFCE7' }}>
                  <svg className="w-4 h-4" style={{ color: '#16A34A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
              ) : (
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full" style={{ backgroundColor: '#F1F5F9' }}>
                  <svg className="w-4 h-4" style={{ color: '#94A3B8' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </span>
              )}
            </td>
            <td className="px-6 py-4 text-center">
              {row.reg === true ? (
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full" style={{ backgroundColor: '#DCFCE7' }}>
                  <svg className="w-4 h-4" style={{ color: '#16A34A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
              ) : row.reg === 'optional' ? (
                <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: '#EEF2FF', color: '#4F46E5' }}>
                  Optional
                </span>
              ) : (
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full" style={{ backgroundColor: '#F1F5F9' }}>
                  <svg className="w-4 h-4" style={{ color: '#94A3B8' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </span>
              )}
            </td>
            <td 
              className={`px-6 py-4 ${index === arr.length - 1 ? 'rounded-br-2xl' : ''}`}
              style={{ color: '#64748B' }}
            >
              {row.purpose}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</section>

                {/* Contact Us */}
                <section className="mb-4">
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#1B1E27' }}>Contact Us</h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#4B5563' }}>
                    If you have questions about this Privacy Policy, our data practices, or wish to exercise your privacy rights, please reach out to us through our{' '}
                    <a href="/support" onClick={handleSupportClick} className="underline" style={{ color: '#3B82F6' }}>Support page</a>.
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: '#4B5563' }}>
                    We aim to respond to all inquiries within 48 hours.
                  </p>
                </section>

              </div>
            </div>

            {/* Footer Info */}
            <div className="mt-6 text-center">
              <p className="text-sm" style={{ color: '#6B7280' }}>
                This Privacy Policy is effective as of January 12, 2026.
              </p>
              <p className="text-sm mt-2 font-semibold" style={{ color: '#1B1E27' }}>
                <strong>Real: Turing Game</strong> — Can you tell what's real?
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}