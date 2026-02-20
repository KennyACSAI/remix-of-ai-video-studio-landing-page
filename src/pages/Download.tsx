'use client'

import { useEffect } from 'react'

const APP_STORE_URL = 'https://apps.apple.com/us/app/real-turing-game/id6757562943'
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.keremalhan.realapp'

// Optional deep links (faster open on mobile if supported)
const APP_STORE_ITMS = 'itms-apps://apps.apple.com/us/app/real-turing-game/id6757562943'
const PLAY_STORE_MARKET = 'market://details?id=com.keremalhan.realapp'

function getStoreTarget(): { primaryUrl: string; fallbackUrl: string } {
  const ua = (navigator.userAgent || '').toLowerCase()

  const navAny = navigator as Navigator & { userAgentData?: { platform?: string } }
  const platformRaw = navAny.userAgentData?.platform ?? navigator.platform ?? ''
  const platform = (platformRaw || '').toLowerCase()

  const isAndroid = ua.includes('android')
  const isIPhoneOrIPod = ua.includes('iphone') || ua.includes('ipod')
  const isIPad = ua.includes('ipad')

  const maxTouchPoints = typeof navigator.maxTouchPoints === 'number' ? navigator.maxTouchPoints : 0
  const isIPadOS13Plus = platformRaw === 'MacIntel' && maxTouchPoints > 1

  const isIOS = isIPhoneOrIPod || isIPad || isIPadOS13Plus

  if (isAndroid) return { primaryUrl: PLAY_STORE_MARKET, fallbackUrl: PLAY_STORE_URL }
  if (isIOS) return { primaryUrl: APP_STORE_ITMS, fallbackUrl: APP_STORE_URL }

  const isWindows = platform.includes('win') || ua.includes('windows')
  const isMac = platform.includes('mac') || ua.includes('mac os x')

  if (isMac) return { primaryUrl: APP_STORE_URL, fallbackUrl: APP_STORE_URL }
  if (isWindows) return { primaryUrl: PLAY_STORE_URL, fallbackUrl: PLAY_STORE_URL }

  return { primaryUrl: PLAY_STORE_URL, fallbackUrl: PLAY_STORE_URL }
}

export default function DownloadPage() {
  useEffect(() => {
    const prefersDark =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches

    const bg = prefersDark ? '#000000' : '#ffffff'

    const prevHtmlBg = document.documentElement.style.backgroundColor
    const prevBodyBg = document.body.style.backgroundColor
    const prevOverflow = document.body.style.overflow

    document.documentElement.style.backgroundColor = bg
    document.body.style.backgroundColor = bg
    document.body.style.overflow = 'hidden'

    const { primaryUrl, fallbackUrl } = getStoreTarget()

    // If it's already a normal https URL (desktop), just go there.
    if (primaryUrl.startsWith('http')) {
      window.location.replace(primaryUrl)
      return () => {
        document.documentElement.style.backgroundColor = prevHtmlBg
        document.body.style.backgroundColor = prevBodyBg
        document.body.style.overflow = prevOverflow
      }
    }

    // Mobile deep link attempt + fallback to https store URL.
    const fallbackTimer = window.setTimeout(() => {
      window.location.replace(fallbackUrl)
    }, 900)

    const clearFallback = () => window.clearTimeout(fallbackTimer)

    const onVisibilityChange = () => {
      if (document.visibilityState === 'hidden') clearFallback()
    }

    window.addEventListener('pagehide', clearFallback)
    document.addEventListener('visibilitychange', onVisibilityChange)

    // Try opening the store app
    window.location.href = primaryUrl

    return () => {
      window.removeEventListener('pagehide', clearFallback)
      document.removeEventListener('visibilitychange', onVisibilityChange)
      clearFallback()

      document.documentElement.style.backgroundColor = prevHtmlBg
      document.body.style.backgroundColor = prevBodyBg
      document.body.style.overflow = prevOverflow
    }
  }, [])

  return null
}