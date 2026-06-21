/**
 * ImageCarousel — a simple 5-image slider for project cards.
 *
 * Features:
 *   - Prev / Next arrow buttons
 *   - Dot indicator row
 *   - Auto-advances every 4 seconds, pauses on hover
 *   - Respects prefers-reduced-motion (no auto-advance)
 */

import { useState, useEffect, useCallback, useRef } from 'react'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

interface Props {
  images: { src: string; alt: string }[]
  /* className applied to the wrapping container so callers control sizing */
  className?: string
}

export default function ImageCarousel({ images, className = '' }: Props) {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  /* Check reduced-motion preference once on mount */
  const reducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const next = useCallback(
    () => setCurrent(i => (i + 1) % images.length),
    [images.length],
  )

  const prev = useCallback(
    () => setCurrent(i => (i - 1 + images.length) % images.length),
    [images.length],
  )

  /* Auto-advance every 4s unless user prefers reduced motion */
  const startTimer = useCallback(() => {
    if (reducedMotion) return
    timerRef.current = setInterval(next, 4000)
  }, [next, reducedMotion])

  const stopTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
  }

  useEffect(() => {
    startTimer()
    return stopTimer
  }, [startTimer])

  return (
    <div
      className={`relative overflow-hidden group ${className}`}
      onMouseEnter={stopTimer}
      onMouseLeave={startTimer}
    >
      {/* Slide image */}
      <img
        key={current}
        src={images[current].src}
        alt={images[current].alt}
        className="w-full h-full object-cover object-top transition-opacity duration-300"
      />

      {/* Previous arrow — visible on hover */}
      <button
        onClick={prev}
        aria-label="Previous image"
        className="absolute left-1.5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded p-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mocha-mauve)]"
        style={{ background: 'rgba(24,24,37,0.75)' }}
      >
        <IconChevronLeft size={14} style={{ color: 'var(--mocha-subtext1)' }} />
      </button>

      {/* Next arrow — visible on hover */}
      <button
        onClick={next}
        aria-label="Next image"
        className="absolute right-1.5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded p-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mocha-mauve)]"
        style={{ background: 'rgba(24,24,37,0.75)' }}
      >
        <IconChevronRight size={14} style={{ color: 'var(--mocha-subtext1)' }} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 flex gap-1">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to image ${i + 1}`}
            onClick={() => setCurrent(i)}
            className="w-1.5 h-1.5 rounded-full transition-colors duration-200 focus:outline-none"
            style={{
              background: i === current
                ? 'var(--mocha-mauve)'
                : 'var(--mocha-overlay1)',
            }}
          />
        ))}
      </div>
    </div>
  )
}
