/**
 * About page — path /about
 * Prompt: $ whoami
 */

import {
  IconBarbell,
  IconTerminal2,
  IconMountain,
  IconDeviceGamepad2,
  IconDownload,
} from '@tabler/icons-react'

const HOBBIES = [
  { icon: IconBarbell,        label: 'powerlifting', color: 'var(--mocha-peach)'  },
  { icon: IconTerminal2,      label: 'linux ricing', color: 'var(--mocha-green)'  },
  { icon: IconMountain,       label: 'hiking',       color: 'var(--mocha-yellow)' },
  { icon: IconDeviceGamepad2, label: 'video games',  color: 'var(--mocha-mauve)'  },
]

const INFO = [
  { key: 'experience', value: 'over 5 years' },
  { key: 'focus',      value: 'TypeScript · React · Node.js · AI' },
  { key: 'status',     value: 'open to work' },
]

export default function About() {
  return (
    <section aria-label="About Nathan Blaga">

      {/* $ whoami — large on both mobile and desktop */}
      <div
        className="text-2xl md:text-[34px] mb-5 md:mb-7 font-normal"
        style={{ color: 'var(--mocha-green)' }}
      >
        $ whoami
      </div>

      {/* Photo + name/role — top-aligned on desktop */}
      <div className="flex flex-col md:flex-row md:items-start gap-5 md:gap-7 mb-5 md:mb-6">

        {/* Headshot — bigger on mobile too */}
        <div
          className="shrink-0 rounded-xl border overflow-hidden self-start"
          style={{
            width:       'clamp(140px, 16vw, 220px)',
            height:      'clamp(140px, 16vw, 220px)',
            borderColor: 'var(--mocha-surface1)',
          }}
        >
          <img
            src="/headshot.jpg"
            alt="Nathan Blaga"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Name + role */}
        <div className="flex flex-col justify-start">
          <h1
            className="font-semibold leading-tight mb-1.5"
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.4rem)',
              color:    'var(--mocha-text)',
            }}
          >
            Nathan Blaga
          </h1>
          <p
            className="font-normal mb-2"
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.35rem)',
              color:    'var(--mocha-mauve)',
            }}
          >
            Full-Stack Developer
          </p>
          <p className="text-xs md:text-sm mb-3" style={{ color: 'var(--mocha-overlay1)' }}>
            // open to work
          </p>
          <a
            href="/nathan-blaga-cv-2026.pdf"
            download
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] text-xs hover:opacity-80 transition-opacity self-start"
            style={{
              background: 'var(--mocha-surface0)',
              color:      'var(--mocha-teal)',
            }}
          >
            <IconDownload size={13} aria-hidden="true" />
            download cv
          </a>
        </div>
      </div>

      {/* Bio */}
      <p
        className="text-sm leading-[1.75] mb-5"
        style={{ color: 'var(--mocha-subtext1)' }}
      >
Hey, I'm Nathan. I've spent the last 5+ years building software in the marketing technology and data space, working across integrations, automation, and production systems. I'm focused on building full-stack applications using modern JavaScript and TypeScript, while exploring how AI is shaping software development. Outside of work you'll find me under a barbell, out on a trail, or deep in a Linux config rabbit hole.
      </p>

      {/* Info section */}
      <div className="flex flex-col gap-1.5 mb-5">
        {INFO.map(({ key, value }) => (
          <div key={key} className="flex items-baseline gap-2">
            <span className="text-xs shrink-0 w-20" style={{ color: 'var(--mocha-overlay1)' }}>
              {key}
            </span>
            <span className="text-xs md:text-sm" style={{ color: 'var(--mocha-subtext0)' }}>
              {value}
            </span>
          </div>
        ))}
      </div>

      {/* Hobbies */}
      <div className="flex flex-wrap gap-3 mb-8">
        {HOBBIES.map(({ icon: Icon, label, color }) => (
          <div
            key={label}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] text-xs"
            style={{
              background: 'var(--mocha-surface0)',
              color,
            }}
          >
            <Icon size={13} aria-hidden="true" />
            {label}
          </div>
        ))}
      </div>


    </section>
  )
}
