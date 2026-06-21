/**
 * About page — path /about
 * Prompt: $ whoami
 *
 * Layout (desktop):
 *   - Headshot + name/role row, photo left, text top-aligned
 *   - Bio paragraph
 *   - Info grid (experience, focus, status)
 *   - Hobbies row
 *   - // comment line
 *
 * Sizing:
 *   - $ whoami: text-sm → md:text-[28px]
 *   - Photo: clamp(72px, 12vw, 160px)
 *   - Name: clamp(1.1rem, 2.2vw, 1.6rem)
 */

import {
  IconBarbell,
  IconTerminal2,
  IconMountain,
  IconDeviceGamepad2,
} from '@tabler/icons-react'

const HOBBIES = [
  { icon: IconBarbell,       label: 'powerlifting'  },
  { icon: IconTerminal2,     label: 'linux ricing'  },
  { icon: IconMountain,      label: 'hiking'        },
  { icon: IconDeviceGamepad2, label: 'video games'  },
]

const INFO = [
  { key: 'experience', value: '6+ years enterprise' },
  { key: 'focus',      value: 'TypeScript · React · Node.js' },
  { key: 'status',     value: 'open to work' },
]

export default function About() {
  return (
    <section aria-label="About Nathan Blaga">

      {/* $ whoami */}
      <p
        className="text-sm md:text-[28px] mb-5 md:mb-7 font-normal"
        style={{ color: 'var(--mocha-green)' }}
      >
        $ whoami
      </p>

      {/* Photo + name/role — top-aligned on desktop */}
      <div className="flex flex-col md:flex-row md:items-start gap-5 md:gap-7 mb-5 md:mb-6">

        {/* Headshot */}
        <div
          className="shrink-0 rounded-xl border overflow-hidden self-start"
          style={{
            width:       'clamp(72px, 12vw, 160px)',
            height:      'clamp(72px, 12vw, 160px)',
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
              fontSize: 'clamp(1.1rem, 2.2vw, 1.6rem)',
              color:    'var(--mocha-text)',
            }}
          >
            Nathan Blaga
          </h1>
          <p
            className="font-normal"
            style={{
              fontSize: 'clamp(0.8rem, 1.4vw, 1rem)',
              color:    'var(--mocha-mauve)',
            }}
          >
            Full-Stack Developer
          </p>
        </div>
      </div>

      {/* Bio */}
      <p
        className="text-sm leading-[1.75] mb-5"
        style={{ color: 'var(--mocha-subtext1)' }}
      >
        <span className="hidden md:inline">
          6+ years building production solutions across data engineering and system integration at enterprise scale.
          Now focused on engineering scalable solutions on a modern JavaScript / TypeScript stack.
        </span>
        <span className="md:hidden">
          6+ years building production solutions at enterprise scale.
          Now focused on modern JavaScript / TypeScript.
        </span>
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
      <div className="flex flex-wrap gap-3 mb-5">
        {HOBBIES.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] text-xs"
            style={{
              background: 'var(--mocha-surface0)',
              color:      'var(--mocha-subtext1)',
            }}
          >
            <Icon size={13} aria-hidden="true" />
            {label}
          </div>
        ))}
      </div>

      {/* // comment */}
      <p className="text-xs md:text-sm" style={{ color: 'var(--mocha-overlay1)' }}>
        // based in Sydney · open to work
      </p>

    </section>
  )
}
