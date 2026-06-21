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
 * Headshot served from /public/headshot.jpg.
 * Mobile photo: 72px. Desktop photo: 88px.
 */

export default function About() {
  return (
    <section aria-label="About Nathan Blaga">

      {/* $ whoami — green command line */}
      <p className="text-sm mb-5" style={{ color: 'var(--mocha-green)' }}>
        $ whoami
      </p>

      {/* Photo + name/role row */}
      <div className="flex items-center gap-5 mb-5">

        {/* Headshot — slightly larger on desktop, crops to face */}
        <div
          className="shrink-0 rounded-xl border overflow-hidden"
          style={{
            width:       'clamp(72px, 10vw, 88px)',
            height:      'clamp(72px, 10vw, 88px)',
            borderColor: 'var(--mocha-surface1)',
          }}
        >
          <img
            src="/headshot.jpg"
            alt="Nathan Blaga"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Name + role stacked, vertically centred to photo */}
        <div>
          <h1
            className="font-semibold leading-tight mb-1"
            style={{ fontSize: 'clamp(1.15rem, 2.5vw, 1.5rem)', color: 'var(--mocha-text)' }}
          >
            Nathan Blaga
          </h1>
          <p className="text-sm" style={{ color: 'var(--mocha-mauve)' }}>
            Full-Stack Developer
          </p>
        </div>
      </div>

      {/* Bio — full copy on desktop, shorter on mobile */}
      <p
        className="text-sm leading-[1.75] mb-4"
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

      {/* // comment line — location + availability */}
      <p className="text-xs" style={{ color: 'var(--mocha-overlay1)' }}>
        // based in Sydney · open to work
      </p>

    </section>
  )
}
