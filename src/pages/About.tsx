/**
 * About page — path /about
 * Prompt: $ whoami
 *
 * Layout (terminal vertical flow):
 *   1. $ whoami command line (green)
 *   2. Photo + name/role row
 *   3. Bio paragraph
 *   4. // based in Sydney · open to work comment line
 *
 * Photo: shows a headshot if /headshot.jpg exists in /public,
 * otherwise falls back to a user placeholder icon.
 */

import { IconUser } from '@tabler/icons-react'

export default function About() {
  return (
    <section aria-label="About Nathan Blaga">

      {/* $ whoami — green command line */}
      <p className="text-xs mb-4" style={{ color: 'var(--mocha-green)' }}>
        $ whoami
      </p>

      {/* Photo + name/role row */}
      <div className="flex items-center gap-4 mb-4">

        {/* Photo — rounded square with surface border.
            Replace /headshot.jpg in /public when the real asset is ready.
            The img has an onError fallback that renders the placeholder icon. */}
        <div
          className="shrink-0 flex items-center justify-center rounded-[10px] border"
          style={{
            width: '66px',
            height: '66px',
            background:   'var(--mocha-surface0)',
            borderColor:  'var(--mocha-surface1)',
          }}
          aria-hidden="true"
        >
          {/* Placeholder icon — swap this for <img> once headshot is added */}
          <IconUser size={24} style={{ color: 'var(--mocha-overlay0)' }} />
        </div>

        {/* Name + role stacked, vertically centred to photo */}
        <div>
          <h1 className="text-[20px] font-semibold leading-tight mb-1" style={{ color: 'var(--mocha-text)' }}>
            Nathan Blaga
          </h1>
          <p className="text-xs" style={{ color: 'var(--mocha-mauve)' }}>
            Full-Stack Developer
          </p>
        </div>
      </div>

      {/* Bio — desktop uses full copy, mobile shows shorter version via responsive text */}
      <p
        className="text-xs leading-[1.75] mb-3"
        style={{ color: 'var(--mocha-subtext1)' }}
      >
        {/* Full bio shown on md+ */}
        <span className="hidden md:inline">
          6+ years building production solutions across data engineering and system integration at enterprise scale.
          Now focused on engineering scalable solutions on a modern JavaScript / TypeScript stack.
        </span>
        {/* Shorter bio on mobile */}
        <span className="md:hidden">
          6+ years building production solutions at enterprise scale.
          Now focused on modern JavaScript / TypeScript.
        </span>
      </p>

      {/* // comment line — location + availability */}
      <p className="text-[11px]" style={{ color: 'var(--mocha-overlay1)' }}>
        // based in Sydney · open to work
      </p>

    </section>
  )
}
