/**
 * ImageModal — full-screen lightbox for project screenshots.
 *
 * Features:
 *   - Click outside or press Escape to close
 *   - Rotate left / right buttons (manual, no auto-rotate)
 *   - Smooth CSS rotation transition
 */

import { useEffect, useState, useCallback } from 'react'
import { IconX, IconRotate, IconRotateClockwise } from '@tabler/icons-react'

interface Props {
  src: string
  alt: string
  onClose: () => void
}

export default function ImageModal({ src, alt, onClose }: Props) {
  const [rotation, setRotation] = useState(0)

  /* Close on Escape key */
  const handleKey = useCallback(
    (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() },
    [onClose],
  )
  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    /* Prevent body scroll while modal is open */
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  const rotateLeft  = () => setRotation(r => (r - 90 + 360) % 360)
  const rotateRight = () => setRotation(r => (r + 90) % 360)

  return (
    /* Backdrop — click outside the image panel to close */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'rgba(17,17,27,0.92)' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Image: ${alt}`}
    >
      {/* Inner panel — stops click from propagating to backdrop */}
      <div
        className="relative flex flex-col items-center gap-4 p-4"
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close image"
          className="absolute -top-2 -right-2 z-10 rounded-full p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mocha-mauve)]"
          style={{ background: 'var(--mocha-surface0)' }}
        >
          <IconX size={18} style={{ color: 'var(--mocha-text)' }} />
        </button>

        {/* Image — rotates on demand */}
        <div className="overflow-hidden flex items-center justify-center" style={{ maxHeight: '80vh', maxWidth: '90vw' }}>
          <img
            src={src}
            alt={alt}
            style={{
              maxHeight: '75vh',
              maxWidth: '85vw',
              objectFit: 'contain',
              transform: `rotate(${rotation}deg)`,
              transition: 'transform 0.35s ease',
            }}
          />
        </div>

        {/* Rotate controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={rotateLeft}
            aria-label="Rotate left"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mocha-mauve)] hover:opacity-80 transition-opacity"
            style={{ background: 'var(--mocha-surface0)', color: 'var(--mocha-subtext1)' }}
          >
            <IconRotate size={16} />
            <span>Rotate left</span>
          </button>
          <button
            onClick={rotateRight}
            aria-label="Rotate right"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mocha-mauve)] hover:opacity-80 transition-opacity"
            style={{ background: 'var(--mocha-surface0)', color: 'var(--mocha-subtext1)' }}
          >
            <IconRotateClockwise size={16} />
            <span>Rotate right</span>
          </button>
        </div>
      </div>
    </div>
  )
}
