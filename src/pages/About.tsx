/**
 * About page — path /about
 * Prompt: $ whoami
 *
 * Desktop scaling:
 *   - Command prompt: ~3x larger (text-sm → md:text-[40px])
 *   - Photo: 4x larger on desktop (72px mobile → 320px desktop)
 *   - Name: larger on desktop (md:text-5xl)
 *   - Role: larger on desktop (md:text-xl)
 *
 * Headshot served from /public/headshot.jpg.
 */

export default function About() {
  return (
    <section aria-label="About Nathan Blaga">

      {/* $ whoami — 3x bigger on desktop */}
      <p
        className="text-sm md:text-[40px] mb-5 md:mb-8 font-normal"
        style={{ color: 'var(--mocha-green)' }}
      >
        $ whoami
      </p>

      {/* Photo + name/role row — stacks better on desktop with large photo */}
      <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-8 mb-5 md:mb-7">

        {/* Headshot — 72px on mobile, 320px on desktop */}
        <div
          className="shrink-0 rounded-xl border overflow-hidden self-start"
          style={{
            width:       'clamp(72px, 25vw, 320px)',
            height:      'clamp(72px, 25vw, 320px)',
            borderColor: 'var(--mocha-surface1)',
          }}
        >
          <img
            src="/headshot.jpg"
            alt="Nathan Blaga"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Name + role stacked, centred vertically to the photo on desktop */}
        <div>
          <h1
            className="font-semibold leading-tight mb-2"
            style={{
              fontSize:   'clamp(1.25rem, 4vw, 3.5rem)',
              color:      'var(--mocha-text)',
            }}
          >
            Nathan Blaga
          </h1>
          <p
            className="font-normal"
            style={{
              fontSize: 'clamp(0.85rem, 1.8vw, 1.35rem)',
              color:    'var(--mocha-mauve)',
            }}
          >
            Full-Stack Developer
          </p>
        </div>
      </div>

      {/* Bio — full copy on desktop, shorter on mobile */}
      <p
        className="text-sm md:text-base leading-[1.75] mb-4"
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

      {/* // comment line */}
      <p className="text-xs md:text-sm" style={{ color: 'var(--mocha-overlay1)' }}>
        // based in Sydney · open to work
      </p>

    </section>
  )
}
