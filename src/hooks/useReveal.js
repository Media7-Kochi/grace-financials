import { useState, useCallback, useLayoutEffect } from 'react'

export function useReveal() {
  const [revealed, setRevealed] = useState(false)
  const [node, setNode] = useState(null)

  const ref = useCallback((el) => {
    if (el) setNode(el)
  }, [])

  useLayoutEffect(() => {
    if (!node) return
    const rect = node.getBoundingClientRect()
    if (rect.top < window.innerHeight) {
      requestAnimationFrame(() => setRevealed(true))
      return
    }


    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setRevealed(true); observer.unobserve(node) }
    }, { threshold: 0.15 })
    requestAnimationFrame(() => observer.observe(node))
    return () => observer.disconnect()
  }, [node])

  return [ref, revealed]
}

export function revealStyle(vis) {
  return {
    opacity: vis ? 1 : 0,
    transform: vis ? 'translateY(0)' : 'translateY(30px)',
    transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
  }
}
