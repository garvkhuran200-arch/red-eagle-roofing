import { useEffect, useRef, useState } from 'react'

/**
 * Returns a [ref, isVisible] pair. Attach `ref` to the element you want to
 * animate in on scroll; `isVisible` flips to true once it enters the
 * viewport and stays true (the observer disconnects after the first hit).
 */
export function useScrollReveal(options) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(node)
        }
      },
      { threshold: 0.15, ...options }
    )

    observer.observe(node)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [ref, isVisible]
}