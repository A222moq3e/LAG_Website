'use client'

import { useEffect } from 'react'
import posthog from 'posthog-js'

export default function PostHogProvider() {
  useEffect(() => {
    // Only initialize on client side
    if (typeof window !== 'undefined' && !window.posthog) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: '/ingest',
        ui_host: 'https://us.posthog.com',
        defaults: '2025-05-24',
        capture_exceptions: true,
        debug: process.env.NODE_ENV === 'development',
        loaded: (posthog) => {
          // Add PostHog to window object for toolbar and other features
          window.posthog = posthog
          console.log('PostHog loaded and added to window object')
        },
      })
    }
  }, [])

  return null
} 