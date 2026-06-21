/**
 * ImageCarousel — manual image slider for project cards.
 *
 * Features:
 *   - Prev / Next arrow buttons (visible on hover)
 *   - Dot indicator row
 *   - No auto-advance — user navigates manually
 *   - object-contain so images are never cropped or zoomed
 *   - onImageClick passes the full images array + current index so the modal
 *     can navigate the whole collection
 */

import { useState, useCallback } from 'react'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

export interface ImageItem {
  src: string
  alt: string
}

interface Props {
  images: ImageItem[]
  /* className applied to the outer container — callers control sizing */
  className?: string
  /* Called when user clicks the image — receives full array and current index */
  onImageClick?: (images: ImageItem[], index: number) => void
}

export default function ImageCarousel({ images, className = '', onImageClick }: Props) {
  const [current, setCurrent] = useState(0)

  const next = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      setCurrent(i => (i + 1) % images.length)
    },
    [images.length],
  )

  const prev = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      setCurrent(i => (i - 1 + images.length) % images.length)
    },
    [images.length],
  )

  const handleDot = (e: React.MouseEvent, i: number) => {
    e.stopPropagation()
    setCurrent(i)
  }

  return (
    <div
      className={`relative overflow-hidden group cursor-pointer ${className}`}
      onClick={() => onImageClick?.(images, current)}
      title="Click to enlarge"
      style={{ background: 'var(--mocha-base)' }}
    >
      {/* Current slide — object-contain so nothing is cropped */}
      <img
        src={images[current].src}
        alt={images[current].alt}
        className="w-full h-full object-contain"
        draggable={false}
      />

      {/* Previous arrow */}
      <button
        onClick={prev}
        aria-label="Previous image"
        className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mocha-mauve)]"
        style={{ background: 'rgba(24,24,37,0.8)' }}
      >
        <IconChevronLeft size={16} style={{ color: 'var(--mocha-subtext1)' }} />
      </button>

      {/* Next arrow */}
      <button
        onClick={next}
        aria-label="Next image"
        className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mocha-mauve)]"
        style={{ background: 'rgba(24,24,37,0.8)' }}
      >
        <IconChevronRight size={16} style={{ color: 'var(--mocha-subtext1)' }} />
      </button>

      {/* Dot indicators */}
      <div
        className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5"
        onClick={e => e.stopPropagation()}
      >
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to image ${i + 1}`}
            onClick={e => handleDot(e, i)}
            className="w-2 h-2 rounded-full transition-colors duration-200 focus:outline-none"
            style={{
              background: i === current ? 'var(--mocha-mauve)' : 'var(--mocha-overlay1)',
            }}
          />
        ))}
      </div>
    </div>
  )
}
