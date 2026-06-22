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

/* ── Types ──────────────────────────────────────────────────────────────── */

interface TagDef {
  label: string
  color: string
  Icon?: IconType | React.ComponentType<{ size?: number; color?: string }>
}

interface GithubLink {
  href:  string
  label: string
}

interface ProjectData {
  title:         string
  description:   string
  tags:          TagDef[]
  images:        ImageItem[]
  githubLinks?:  GithubLink[]
  liveUrl?:      string
  status?:       string
  demoPassword?: string
}

/* ── Project data ───────────────────────────────────────────────────────── */

const PROJECTS: ProjectData[] = [
  {
    title: 'RSVP Wedding App',
    description:
      'Built for my own wedding — a full-stack RSVP platform designed to replace the usual ' +
      'third-party tools with something personal and purpose-built. Guests can log in, manage ' +
      'their RSVP, set dietary preferences, submit song requests, and view the event schedule ' +
      'and FAQs, all in one place. Currently live.',
    demoPassword: 'Test-1',
    tags: [
      { label: 'React',        color: 'var(--mocha-blue)',   Icon: SiReact       },
      { label: 'Node.js',      color: 'var(--mocha-green)',  Icon: SiNodedotjs   },
      { label: 'Express.js',   color: 'var(--mocha-yellow)', Icon: SiExpress     },
      { label: 'Supabase',     color: 'var(--mocha-teal)',   Icon: SiSupabase    },
      { label: 'Tailwind CSS', color: 'var(--mocha-mauve)',  Icon: SiTailwindcss },
      { label: 'Render',       color: 'var(--mocha-peach)'                       },
      { label: 'Netlify',      color: 'var(--mocha-green)',  Icon: SiNetlify     },
    ],
    images: [
      { src: '/rsvp-s1-login.png',     alt: 'RSVP app — login page'        },
      { src: '/rsvp-s2-home.png',      alt: 'RSVP app — home page'         },
      { src: '/rsvp-s3-rsvp.png',      alt: 'RSVP app — RSVP list'        },
      { src: '/rsvp-s4-rsvp-form.png', alt: 'RSVP app — edit RSVP form'   },
      { src: '/rsvp-s5-schedule.png',  alt: 'RSVP app — wedding schedule' },
      { src: '/rsvp-s6-faqs.png',      alt: 'RSVP app — FAQs'             },
    ],
    githubLinks: [
      { href: 'https://github.com/NJBLAGA/rsvp-wedding-frontend', label: 'web' },
      { href: 'https://github.com/NJBLAGA/rsvp-wedding-backend',  label: 'api' },
    ],
    liveUrl: 'https://blagasaga2026.rsvp/',
  },
  {
    title: 'Recipe Book',
    description:
      'A personal recipe manager for storing, organising, and browsing your own collection of ' +
      'recipes. Create and edit recipes with photos, filter by category, and access everything ' +
      'from any device. Comes with a built-in pantry management system that tracks your stock ' +
      'levels and automatically builds a shopping list based on what\'s running low.',
    status: 'in progress',
    tags:   [],
    images: [],
  },
]

/* ── Tag pill ───────────────────────────────────────────────────────────── */

function Tag({ label, color, Icon }: TagDef) {
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

/* ── Placeholder thumbnail ──────────────────────────────────────────────── */

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

/* ── Project card ───────────────────────────────────────────────────────── */

interface ProjectCardProps {
  project:      ProjectData
  onImageClick: (images: ImageItem[], index: number) => void
}

function ProjectCard({ project, onImageClick }: ProjectCardProps) {
  const { title, description, tags, images, githubLinks, liveUrl, status, demoPassword } = project

  return (
    <article
      className="rounded-[8px] overflow-hidden border"
      style={{
        background:  'var(--mocha-mantle)',
        borderColor: 'var(--mocha-surface0)',
        borderWidth: '0.5px',
        opacity:     status ? 0.6 : 1,
      }}
      aria-label={status ? `${title} — ${status}` : title}
    >
      <div className="p-4 md:p-6 flex flex-col">

        {/* Title row */}
        <div className="flex items-center justify-between mb-2">
          <h2
            className="font-semibold"
            style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.25rem)', color: 'var(--mocha-text)' }}
          >
            {title}
          </h2>
          {status && (
            <span
              className="text-[10px] md:text-xs px-2 py-0.5 rounded border"
              style={{ color: 'var(--mocha-yellow)', borderColor: 'var(--mocha-surface1)' }}
            >
              {status}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-sm leading-[1.65] mb-1.5" style={{ color: 'var(--mocha-subtext0)' }}>
          {description}
        </p>

        {/* Demo password */}
        {demoPassword && (
          <p className="text-xs mb-3" style={{ color: 'var(--mocha-subtext1)' }}>
            Demo Login Password:&nbsp;{demoPassword}
          </p>
        )}

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map(tag => <Tag key={tag.label} {...tag} />)}
          </div>
        )}

        {/* Carousel or placeholder */}
        <div className="flex justify-center mb-4">
          <div className="relative rounded-lg overflow-hidden w-full md:w-[60%]">
            {images.length > 0 ? (
              <ImageCarousel
                images={images}
                className="h-40 md:h-[280px] w-full"
                onImageClick={(imgs, idx) => onImageClick(imgs, idx)}
              />
            ) : (
              <ThumbPlaceholder className="h-40 md:h-[280px] w-full" />
            )}
          </div>
        </div>

        {/* Links row */}
        <div
          className="flex items-center gap-4 pt-3 border-t"
          style={{ borderColor: 'var(--mocha-surface0)', borderTopWidth: '0.5px' }}
        >
          {githubLinks && githubLinks.length > 0 ? (
            githubLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:opacity-80 transition-opacity focus:outline-none focus-visible:underline"
                style={{ color: 'var(--mocha-overlay1)' }}
                aria-label={`GitHub — ${link.label}`}
              >
                <IconBrandGithub size={15} />
                <span className="text-xs md:text-sm">{link.label}</span>
              </a>
            ))
          ) : (
            <span className="flex items-center gap-1.5" style={{ color: 'var(--mocha-overlay0)' }}>
              <IconBrandGithub size={15} />
              <span className="text-xs md:text-sm">coming soon</span>
            </span>
          )}

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto hover:opacity-80 transition-opacity focus:outline-none focus-visible:underline"
              style={{ color: 'var(--mocha-mauve)' }}
              aria-label="Live site"
            >
              <IconExternalLink size={15} />
            </a>
          )}
        </div>

      </div>
    </article>
  )
}

/* ── Page ───────────────────────────────────────────────────────────────── */

interface ModalState {
  images: ImageItem[]
  index:  number
}

export default function Projects() {
  const [modal, setModal] = useState<ModalState | null>(null)

  return (
    <section aria-label="Projects">

      <div
        className="text-sm md:text-[30px] mb-5 md:mb-8 font-normal"
        style={{ color: 'var(--mocha-green)' }}
      >
        $ ls ./projects
      </div>

      <div className="flex flex-col gap-4 md:gap-6">
        {PROJECTS.map(project => (
          <ProjectCard
            key={project.title}
            project={project}
            onImageClick={(imgs, idx) => setModal({ images: imgs, index: idx })}
          />
        ))}
      </div>

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
