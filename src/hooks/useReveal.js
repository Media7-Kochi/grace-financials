import { useState, useRef, useLayoutEffect } from 'react'

export function useReveal() {
  const ref = useRef(null)
  const [revealed, setRevealed] = useState(true)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight) return

    setRevealed(false)
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setRevealed(true); observer.unobserve(el) }
    }, { threshold: 0.15 })
    requestAnimationFrame(() => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return [ref, revealed]
}

export function revealStyle(vis) {
  return {
    opacity: vis ? 1 : 0,
    transform: vis ? 'translateY(0)' : 'translateY(30px)',
    transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
  }
}
