/**
 * Projects page — path /projects
 * Prompt: $ ls ./projects
 *
 * Card layout:
 *   Mobile  — image banner on top (h-40, full-width), then content below.
 *   Desktop — single column: title → description → tags → carousel (60% card width) → links.
 *
 * Clicking an image opens ImageModal which lets users navigate the full collection.
 * No auto-advance on the carousel. Images use object-contain (no zoom/crop).
 */

import { useState } from 'react'
import type { ImageItem } from '../components/ImageCarousel'
import ImageCarousel from '../components/ImageCarousel'
import ImageModal    from '../components/ImageModal'
import {
  IconBrandGithub,
  IconExternalLink,
  IconPhoto,
} from '@tabler/icons-react'
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiSupabase,
  SiTailwindcss,
  SiNetlify,
} from 'react-icons/si'
import type { IconType } from 'react-icons'

/* ── RSVP carousel images ───────────────────────────────────────────────── */
const RSVP_IMAGES: ImageItem[] = [
  { src: '/rsvp-s1-login.png',     alt: 'RSVP app — login page'          },
  { src: '/rsvp-s2-home.png',      alt: 'RSVP app — home page'           },
  { src: '/rsvp-s3-rsvp.png',      alt: 'RSVP app — RSVP list'          },
  { src: '/rsvp-s4-rsvp-form.png', alt: 'RSVP app — edit RSVP form'     },
  { src: '/rsvp-s5-schedule.png',  alt: 'RSVP app — wedding schedule'   },
  { src: '/rsvp-s6-faqs.png',      alt: 'RSVP app — FAQs'               },
]

/* ── Tag pill with optional icon ────────────────────────────────────────── */
function Tag({
  label,
  color,
  Icon,
}: {
  label: string
  color: string
  Icon?: IconType | React.ComponentType<{ size?: number; color?: string }>
}) {
  return (
    <span
      className="flex items-center gap-1.5 text-xs md:text-sm px-2.5 py-0.5 rounded-[5px]"
      style={{ background: 'var(--mocha-surface0)', color }}
    >
      {Icon && <Icon size={12} color={color} aria-hidden={true as never} />}
      {label}
    </span>
  )
}

/* ── Placeholder thumbnail for projects without screenshots ─────────────── */
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

/* ── Modal state type ───────────────────────────────────────────────────── */
interface ModalState {
  images: ImageItem[]
  index:  number
}

export default function Projects() {
  const [modal, setModal] = useState<ModalState | null>(null)

  return (
    <section aria-label="Projects">

      {/* $ ls ./projects */}
      <p
        className="text-sm md:text-[30px] mb-5 md:mb-8 font-normal"
        style={{ color: 'var(--mocha-green)' }}
      >
        $ ls ./projects
      </p>

      <div className="flex flex-col gap-4 md:gap-6">

        {/* ── Project 1: RSVP Wedding App ──────────────────────────────── */}
        <article
          className="rounded-[8px] overflow-hidden border"
          style={{
            background:  'var(--mocha-mantle)',
            borderColor: 'var(--mocha-surface0)',
            borderWidth: '0.5px',
          }}
        >
          {/* Mobile: full-width banner on top */}
          <ImageCarousel
            images={RSVP_IMAGES}
            className="h-40 w-full md:hidden"
            onImageClick={(imgs, idx) => setModal({ images: imgs, index: idx })}
          />

          <div className="p-4 md:p-6 flex flex-col">
            <h2
              className="font-semibold mb-2"
              style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.25rem)', color: 'var(--mocha-text)' }}
            >
              RSVP Wedding App
            </h2>
            <p className="text-sm leading-[1.65] mb-3" style={{ color: 'var(--mocha-subtext0)' }}>
              Full-stack RSVP platform built for my wedding. Passwordless guest login,
              row-level security, dietary &amp; song requests.
            </p>

            {/* Tags with icons */}
            <div className="flex flex-wrap gap-2 mb-4">
              <Tag label="React"        color="var(--mocha-blue)"   Icon={SiReact}       />
              <Tag label="Node.js"      color="var(--mocha-green)"  Icon={SiNodedotjs}   />
              <Tag label="Express.js"   color="var(--mocha-yellow)" Icon={SiExpress}     />
              <Tag label="Supabase"     color="var(--mocha-teal)"   Icon={SiSupabase}    />
              <Tag label="Tailwind CSS" color="var(--mocha-mauve)"  Icon={SiTailwindcss} />
              <Tag label="Render"       color="var(--mocha-peach)"                       />
              <Tag label="Netlify"      color="var(--mocha-green)"  Icon={SiNetlify}     />
            </div>

            {/* Desktop: carousel at 60% card width, centred, between tags and links */}
            <div className="hidden md:flex justify-start mb-4">
              <div className="rounded-lg overflow-hidden" style={{ width: '60%' }}>
                <ImageCarousel
                  images={RSVP_IMAGES}
                  className="h-[280px] w-full"
                  onImageClick={(imgs, idx) => setModal({ images: imgs, index: idx })}
                />
              </div>
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
            <p className="text-sm leading-[1.65]" style={{ color: 'var(--mocha-subtext0)' }}>
              Full CRUD recipe manager with JWT + Google auth, image uploads,
              and a Prisma/Postgres backend.
            </p>
          </div>
        </article>

      </div>

      {/* Image modal — overlays everything */}
      {modal && (
        <ImageModal
          images={modal.images}
          initialIndex={modal.index}
          onClose={() => setModal(null)}
        />
      )}

    </section>
  )
}
