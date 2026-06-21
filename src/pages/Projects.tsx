/**
 * Projects page — path /projects
 * Prompt: $ ls ./projects
 *
 * Card layout:
 *   Mobile  — image banner on top (full-width, h-40), then content below. Unchanged.
 *   Desktop — single column: title → description → tags → carousel → links.
 *             Image is removed from the side and placed between tags and links.
 *             All carousel images are a consistent height (h-[300px]) on desktop.
 *
 * Clicking any carousel image opens an ImageModal with manual rotate controls.
 * No auto-advance on the carousel.
 */

import { useState } from 'react'
import ImageCarousel from '../components/ImageCarousel'
import ImageModal    from '../components/ImageModal'
import { IconBrandGithub, IconExternalLink, IconPhoto } from '@tabler/icons-react'

/* ── RSVP carousel images ───────────────────────────────────────────────── */
const RSVP_IMAGES = [
  { src: '/rsvp-1-home.png',        alt: 'RSVP app — home page'           },
  { src: '/rsvp-5-home-scroll.png', alt: 'RSVP app — home scrolled'       },
  { src: '/rsvp-3-schedule.png',    alt: 'RSVP app — wedding day schedule' },
  { src: '/rsvp-4-faqs.png',        alt: 'RSVP app — FAQs'                },
  { src: '/rsvp-screenshot.png',    alt: 'RSVP app — login page'          },
]

/* ── Tag pill ───────────────────────────────────────────────────────────── */
function Tag({ label, color }: { label: string; color: string }) {
  return (
    <span
      className="text-xs md:text-sm px-2.5 py-0.5 rounded-[5px]"
      style={{ background: 'var(--mocha-surface0)', color }}
    >
      {label}
    </span>
  )
}

/* ── Placeholder for projects without screenshots ───────────────────────── */
function ThumbPlaceholder({ className = '' }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{ background: 'var(--mocha-surface0)' }}
      aria-hidden="true"
    >
      <IconPhoto size={26} style={{ color: 'var(--mocha-overlay0)' }} />
    </div>
  )
}

export default function Projects() {
  /* Modal state — null means closed */
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null)

  return (
    <section aria-label="Projects">

      {/* $ ls ./projects — 3x bigger on desktop */}
      <p
        className="text-sm md:text-[40px] mb-5 md:mb-8 font-normal"
        style={{ color: 'var(--mocha-green)' }}
      >
        $ ls ./projects
      </p>

      <div className="flex flex-col gap-4 md:gap-6">

        {/* ── Project 1: RSVP Wedding App ───────────────────────────────── */}
        <article
          className="rounded-[8px] overflow-hidden border"
          style={{
            background:  'var(--mocha-mantle)',
            borderColor: 'var(--mocha-surface0)',
            borderWidth: '0.5px',
          }}
        >
          {/* ── MOBILE: image banner on top (unchanged) ── */}
          <ImageCarousel
            images={RSVP_IMAGES}
            className="h-40 w-full md:hidden"
            onImageClick={setModalImage}
          />

          {/* Card content */}
          <div className="p-4 md:p-6 flex flex-col">
            <h2
              className="font-semibold mb-2"
              style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.25rem)', color: 'var(--mocha-text)' }}
            >
              RSVP Wedding App
            </h2>
            <p className="text-sm md:text-base leading-[1.65] mb-3" style={{ color: 'var(--mocha-subtext0)' }}>
              Full-stack RSVP platform built for my wedding. Passwordless guest login,
              row-level security, dietary &amp; song requests.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              <Tag label="React"        color="var(--mocha-blue)"  />
              <Tag label="Node/Express" color="var(--mocha-mauve)" />
              <Tag label="Supabase"     color="var(--mocha-green)" />
              <Tag label="Tailwind"     color="var(--mocha-peach)" />
            </div>

            {/* ── DESKTOP: carousel between tags and links, full-width, consistent height ── */}
            <div className="hidden md:block mb-4 rounded-lg overflow-hidden">
              <ImageCarousel
                images={RSVP_IMAGES}
                className="h-[300px] w-full"
                onImageClick={setModalImage}
              />
            </div>

            {/* Links row */}
            <div
              className="flex items-center gap-4 pt-3 border-t"
              style={{ borderColor: 'var(--mocha-surface0)', borderTopWidth: '0.5px' }}
            >
              <a
                href="https://github.com/NJBLAGA/rsvp-wedding-frontend"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:opacity-80 transition-opacity focus:outline-none focus-visible:underline"
                style={{ color: 'var(--mocha-overlay1)' }}
                aria-label="GitHub — frontend repo"
              >
                <IconBrandGithub size={15} />
                <span className="text-xs md:text-sm">web</span>
              </a>

              <a
                href="https://github.com/NJBLAGA/rsvp-wedding-backend"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:opacity-80 transition-opacity focus:outline-none focus-visible:underline"
                style={{ color: 'var(--mocha-overlay1)' }}
                aria-label="GitHub — backend repo"
              >
                <IconBrandGithub size={15} />
                <span className="text-xs md:text-sm">api</span>
              </a>

              <a
                href="https://blagasaga2026.rsvp/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto hover:opacity-80 transition-opacity focus:outline-none focus-visible:underline"
                style={{ color: 'var(--mocha-mauve)' }}
                aria-label="Live site"
              >
                <IconExternalLink size={15} />
              </a>
            </div>
          </div>
        </article>

        {/* ── Project 2: Recipe Book (in progress) ─────────────────────── */}
        <article
          className="rounded-[8px] overflow-hidden border flex flex-col md:flex-col"
          style={{
            background:  'var(--mocha-mantle)',
            borderColor: 'var(--mocha-surface0)',
            borderWidth: '0.5px',
            opacity:     0.6,
          }}
          aria-label="Recipe Book — in progress"
        >
          {/* Placeholder thumbnail — mobile top banner */}
          <ThumbPlaceholder className="h-24 w-full md:hidden" />

          <div className="p-4 md:p-6 flex-1">
            <div className="flex items-center justify-between mb-1.5">
              <h2
                className="font-semibold"
                style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.25rem)', color: 'var(--mocha-text)' }}
              >
                Recipe Book
              </h2>
              <span
                className="text-[10px] md:text-xs px-2 py-0.5 rounded border"
                style={{ color: 'var(--mocha-yellow)', borderColor: 'var(--mocha-surface1)' }}
              >
                in progress
              </span>
            </div>
            <p className="text-sm md:text-base leading-[1.65]" style={{ color: 'var(--mocha-subtext0)' }}>
              Full CRUD recipe manager with JWT + Google auth, image uploads,
              and a Prisma/Postgres backend.
            </p>
          </div>
        </article>

      </div>

      {/* Image modal — rendered at root so it overlays everything */}
      {modalImage && (
        <ImageModal
          src={modalImage.src}
          alt={modalImage.alt}
          onClose={() => setModalImage(null)}
        />
      )}

    </section>
  )
}
