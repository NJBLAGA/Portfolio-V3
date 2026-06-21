/**
 * ImageModal — full-screen lightbox for project screenshots.
 *
 * Features:
 *   - Navigate through the full image collection with < > arrows
 *   - Dot indicators centred at the bottom of the image
 *   - Keyboard: Escape to close, ArrowLeft / ArrowRight to navigate
 *   - Click outside the image to close
 *   - No degree rotation (removed)
 */

import { useEffect, useState, useCallback } from 'react'
import { IconX, IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

interface ImageItem {
  src: string
  alt: string
}

interface Props {
  images: ImageItem[]
  initialIndex: number
  onClose: () => void
}

export default function ImageModal({ images, initialIndex, onClose }: Props) {
  const [current, setCurrent] = useState(initialIndex)

  const next = useCallback(() => setCurrent(i => (i + 1) % images.length), [images.length])
  const prev = useCallback(() => setCurrent(i => (i - 1 + images.length) % images.length), [images.length])

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape')     onClose()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft')  prev()
    },
    [onClose, next, prev],
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  return (
    /* Backdrop — click outside to close */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'rgba(17,17,27,0.94)' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Image ${current + 1} of ${images.length}`}
    >
      {/* Inner panel — stops click propagating to backdrop */}
      <div
        className="relative flex flex-col items-center"
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute -top-10 right-0 z-10 rounded-full p-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mocha-mauve)] hover:opacity-80 transition-opacity"
          style={{ background: 'var(--mocha-surface0)' }}
        >
          <IconX size={18} style={{ color: 'var(--mocha-text)' }} />
        </button>

        {/* Image + side nav arrows row */}
        <div className="flex items-center gap-3">
          {/* Left arrow */}
          <button
            onClick={prev}
            aria-label="Previous image"
            className="rounded-full p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mocha-mauve)] hover:opacity-80 transition-opacity"
            style={{ background: 'var(--mocha-surface0)' }}
          >
            <IconChevronLeft size={22} style={{ color: 'var(--mocha-subtext1)' }} />
          </button>

          {/* Image */}
          <div
            className="flex items-center justify-center"
            style={{ maxHeight: '80vh', maxWidth: '75vw' }}
          >
            <img
              src={images[current].src}
              alt={images[current].alt}
              style={{
                maxHeight: '80vh',
                maxWidth:  '75vw',
                objectFit: 'contain',
              }}
            />
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            aria-label="Next image"
            className="rounded-full p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mocha-mauve)] hover:opacity-80 transition-opacity"
            style={{ background: 'var(--mocha-surface0)' }}
          >
            <IconChevronRight size={22} style={{ color: 'var(--mocha-subtext1)' }} />
          </button>
        </div>

        {/* Dot indicators — centred below the image */}
        {images.length > 1 && (
          <div className="flex gap-2 mt-4">
            {images.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to image ${i + 1}`}
                onClick={() => setCurrent(i)}
                className="w-2 h-2 rounded-full transition-colors duration-200 focus:outline-none"
                style={{
                  background: i === current ? 'var(--mocha-mauve)' : 'var(--mocha-overlay1)',
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
