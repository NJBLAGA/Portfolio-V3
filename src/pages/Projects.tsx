/**
 * Projects page — path /projects
 * Prompt: $ ls ./projects
 *
 * Single-column project cards.
 * Desktop: image thumbnail on the left, content on the right.
 * Mobile: image banner on top, content below (stack vertically).
 *
 * Project 2 (Recipe Book) is "in progress" — rendered at 60% opacity
 * with no links until shipped.
 */

import { IconBrandGithub, IconExternalLink, IconPhoto } from '@tabler/icons-react'

/* ── Tag pill component ─────────────────────────────────────────────────── */
function Tag({ label, color }: { label: string; color: string }) {
  return (
    <span
      className="text-[10px] px-2 py-0.5 rounded-[5px]"
      style={{ background: 'var(--mocha-surface0)', color }}
    >
      {label}
    </span>
  )
}

/* ── Image placeholder (used until real screenshots are added) ──────────── */
function ThumbPlaceholder({ className = '' }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{ background: 'var(--mocha-surface0)' }}
      aria-hidden="true"
    >
      <IconPhoto size={22} style={{ color: 'var(--mocha-overlay0)' }} />
    </div>
  )
}

export default function Projects() {
  return (
    <section aria-label="Projects">

      {/* $ ls ./projects — green command line */}
      <p className="text-xs mb-4" style={{ color: 'var(--mocha-green)' }}>
        $ ls ./projects
      </p>

      <div className="flex flex-col gap-3">

        {/* ── Project 1: RSVP Wedding App ───────────────────────────────── */}
        <article
          className="rounded-[8px] overflow-hidden border flex flex-col md:flex-row"
          style={{
            background:  'var(--mocha-mantle)',
            borderColor: 'var(--mocha-surface0)',
            borderWidth: '0.5px',
          }}
        >
          {/* Thumbnail — full-width top on mobile, fixed 130px left on desktop */}
          <ThumbPlaceholder className="h-[72px] md:h-auto md:w-[130px] shrink-0" />

          {/* Card content */}
          <div className="p-3 flex-1 flex flex-col">
            <h2 className="text-sm font-semibold mb-1" style={{ color: 'var(--mocha-text)' }}>
              RSVP Wedding App
            </h2>
            <p className="text-[11px] leading-[1.6] mb-2" style={{ color: 'var(--mocha-subtext0)' }}>
              Full-stack RSVP platform built for my wedding. Passwordless guest login,
              row-level security, dietary &amp; song requests.
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              <Tag label="React"       color="var(--mocha-blue)"  />
              <Tag label="Node/Express" color="var(--mocha-mauve)" />
              <Tag label="Supabase"    color="var(--mocha-green)" />
              <Tag label="Tailwind"    color="var(--mocha-peach)" />
            </div>

            {/* Links row — separated from tags by a hairline */}
            <div
              className="flex items-center gap-3 pt-2 mt-auto border-t"
              style={{ borderColor: 'var(--mocha-surface0)', borderTopWidth: '0.5px' }}
            >
              {/* GitHub web repo */}
              <a
                href="https://github.com/NJBLAGA/rsvp-wedding-frontend"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[11px] hover:opacity-80 transition-opacity focus:outline-none focus-visible:underline"
                style={{ color: 'var(--mocha-overlay1)' }}
                aria-label="GitHub — frontend repo"
              >
                <IconBrandGithub size={13} />
                <span className="text-[9px]">web</span>
              </a>

              {/* GitHub api repo */}
              <a
                href="https://github.com/NJBLAGA/rsvp-wedding-backend"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[11px] hover:opacity-80 transition-opacity focus:outline-none focus-visible:underline"
                style={{ color: 'var(--mocha-overlay1)' }}
                aria-label="GitHub — backend repo"
              >
                <IconBrandGithub size={13} />
                <span className="text-[9px]">api</span>
              </a>

              {/* Live site link — mauve, pushed to the right */}
              <a
                href="https://blagasaga2026.rsvp/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto hover:opacity-80 transition-opacity focus:outline-none focus-visible:underline"
                style={{ color: 'var(--mocha-mauve)' }}
                aria-label="Live site"
              >
                <IconExternalLink size={13} />
              </a>
            </div>
          </div>
        </article>

        {/* ── Project 2: Recipe Book (in progress) ─────────────────────── */}
        <article
          className="rounded-[8px] overflow-hidden border flex flex-col md:flex-row"
          style={{
            background:  'var(--mocha-mantle)',
            borderColor: 'var(--mocha-surface0)',
            borderWidth: '0.5px',
            opacity: 0.6, /* visually de-emphasised until shipped */
          }}
          aria-label="Recipe Book — in progress"
        >
          {/* Thumbnail */}
          <ThumbPlaceholder className="h-[72px] md:h-auto md:w-[130px] shrink-0" />

          {/* Card content */}
          <div className="p-3 flex-1">
            {/* Title row with "in progress" badge */}
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-sm font-semibold" style={{ color: 'var(--mocha-text)' }}>
                Recipe Book
              </h2>
              {/* Yellow bordered badge */}
              <span
                className="text-[9px] px-1.5 py-0.5 rounded border"
                style={{
                  color:       'var(--mocha-yellow)',
                  borderColor: 'var(--mocha-surface1)',
                }}
              >
                in progress
              </span>
            </div>

            <p className="text-[11px] leading-[1.6]" style={{ color: 'var(--mocha-subtext0)' }}>
              Full CRUD recipe manager with JWT + Google auth, image uploads,
              and a Prisma/Postgres backend.
            </p>
            {/* No links until shipped */}
          </div>
        </article>

      </div>
    </section>
  )
}
