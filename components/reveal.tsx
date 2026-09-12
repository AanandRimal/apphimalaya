'use client'

import { useEffect } from 'react'

/** Fades sections in as they enter the viewport. One observer for the page. */
export function RevealOnScroll() {
  useEffect(() => {
    document.documentElement.classList.add('reveal-ready')
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return null
}
