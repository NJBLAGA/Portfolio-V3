/**
 * Projects page — path /projects
 * Prompt: $ ls ./projects
 *
 * Single-column project cards.
 * Desktop: image carousel on the left (~180px wide), content on the right.
 * Mobile: carousel banner on top (full-width, fixed height), content below.
 *
 * Project 2 (Recipe Book) is "in progress" — 60% opacity, no links.
 */

import ImageCarousel from '../components/ImageCarousel'
import { IconBrandGithub, IconExternalLink, IconPhoto } from '@tabler/icons-react'

/* ── RSVP carousel images (5 real screenshots from the live app) ────────── */
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
      className="text-xs px-2.5 py-0.5 rounded-[5px]"
      style={{ background: 'var(--mocha-surface0)', color }}
    >
      {label}
    </span>
  )
}

/* ── Placeholder thumbnail for projects without screenshots ─────────────── */
function ThumbPlaceholder({ className = '' }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center shrink-0 ${className}`}
      style={{ background: 'var(--mocha-surface0)' }}
      aria-hidden="true"
    >
      <IconPhoto size={26} style={{ color: 'var(--mocha-overlay0)' }} />
    </div>
  )
}

export default function Projects() {
  return (
    <section aria-label="Projects">

      {/* $ ls ./projects — green command line */}
      <p className="text-sm mb-5" style={{ color: 'var(--mocha-green)' }}>
        $ ls ./projects
      </p>

      <div className="flex flex-col gap-4">

        {/* ── Project 1: RSVP Wedding App ───────────────────────────────── */}
        <article
          className="rounded-[8px] overflow-hidden border flex flex-col md:flex-row"
          style={{
            background:   'var(--mocha-mantle)',
            borderColor:  'var(--mocha-surface0)',
            borderWidth:  '0.5px',
          }}
        >
          {/* Image carousel —
              Mobile: full-width, 160px tall banner across the top
              Desktop: 180px wide column on the left, full card height */}
          <ImageCarousel
            images={RSVP_IMAGES}
            className="h-40 w-full md:h-auto md:w-[180px] md:shrink-0"
          />

          {/* Card content */}
          <div className="p-4 flex-1 flex flex-col">
            <h2 className="text-base font-semibold mb-1.5" style={{ color: 'var(--mocha-text)' }}>
              RSVP Wedding App
            </h2>
            <p className="text-sm leading-[1.65] mb-3" style={{ color: 'var(--mocha-subtext0)' }}>
              Full-stack RSVP platform built for my wedding. Passwordless guest login,
              row-level security, dietary &amp; song requests.
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              <Tag label="React"        color="var(--mocha-blue)"  />
              <Tag label="Node/Express" color="var(--mocha-mauve)" />
              <Tag label="Supabase"     color="var(--mocha-green)" />
              <Tag label="Tailwind"     color="var(--mocha-peach)" />
            </div>

            {/* Links row */}
            <div
              className="flex items-center gap-4 pt-3 mt-auto border-t"
              style={{ borderColor: 'var(--mocha-surface0)', borderTopWidth: '0.5px' }}
            >
              <a
                href="https://github.com/NJBLAGA/rsvp-wedding-frontend"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm hover:opacity-80 transition-opacity focus:outline-none focus-visible:underline"
                style={{ color: 'var(--mocha-overlay1)' }}
                aria-label="GitHub — frontend repo"
              >
                <IconBrandGithub size={15} />
                <span className="text-xs">web</span>
              </a>

              <a
                href="https://github.com/NJBLAGA/rsvp-wedding-backend"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm hover:opacity-80 transition-opacity focus:outline-none focus-visible:underline"
                style={{ color: 'var(--mocha-overlay1)' }}
                aria-label="GitHub — backend repo"
              >
                <IconBrandGithub size={15} />
                <span className="text-xs">api</span>
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
          className="rounded-[8px] overflow-hidden border flex flex-col md:flex-row"
          style={{
            background:   'var(--mocha-mantle)',
            borderColor:  'var(--mocha-surface0)',
            borderWidth:  '0.5px',
            opacity:      0.6,
          }}
          aria-label="Recipe Book — in progress"
        >
          <ThumbPlaceholder className="h-24 w-full md:h-auto md:w-[180px]" />

          <div className="p-4 flex-1">
            <div className="flex items-center justify-between mb-1.5">
              <h2 className="text-base font-semibold" style={{ color: 'var(--mocha-text)' }}>
                Recipe Book
              </h2>
              <span
                className="text-[10px] px-2 py-0.5 rounded border"
                style={{
                  color:       'var(--mocha-yellow)',
                  borderColor: 'var(--mocha-surface1)',
                }}
              >
                in progress
              </span>
            </div>
            <p className="text-sm leading-[1.65]" style={{ color: 'var(--mocha-subtext0)' }}>
              Full CRUD recipe manager with JWT + Google auth, image uploads,
              and a Prisma/Postgres backend.
            </p>
          </div>
        </article>

      </div>
    </section>
  )
}
