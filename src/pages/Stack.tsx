/**
 * Stack page — path /stack
 * Prompt: $ cat stack.json
 *
 * Tech tags grouped by category. Each category has a small accent-coloured
 * label followed by a wrapping row of pills.
 *
 * Colour mapping (from design brief):
 *   languages  → blue  (#89b4fa)
 *   frontend   → green (#a6e3a1)
 *   backend    → peach (#fab387)
 *   salesforce → red   (#f38ba8)
 */

/* ── Category + its tags ────────────────────────────────────────────────── */
const STACK: { category: string; color: string; tags: string[] }[] = [
  {
    category: 'languages',
    color: 'var(--mocha-blue)',
    tags: ['JavaScript', 'TypeScript', 'SQL', 'Ruby'],
  },
  {
    category: 'frontend',
    color: 'var(--mocha-green)',
    tags: ['React', 'Tailwind CSS', 'HTML / CSS'],
  },
  {
    category: 'backend',
    color: 'var(--mocha-peach)',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'REST APIs'],
  },
  {
    category: 'salesforce',
    color: 'var(--mocha-red)',
    tags: ['Marketing Cloud', 'Data Cloud'],
  },
]

export default function Stack() {
  return (
    <section aria-label="Tech stack">

      {/* $ cat stack.json — green command line */}
      <p className="text-xs mb-4" style={{ color: 'var(--mocha-green)' }}>
        $ cat stack.json
      </p>

      <div className="flex flex-col gap-4">
        {STACK.map(({ category, color, tags }) => (
          <div key={category}>
            {/* Category label in its accent colour */}
            <p className="text-[10px] mb-2" style={{ color }}>
              {category}
            </p>

            {/* Wrapping row of pills */}
            <div className="flex flex-wrap gap-1.5">
              {tags.map(tag => (
                <span
                  key={tag}
                  className="text-[11px] px-2.5 py-0.5 rounded-[5px]"
                  style={{
                    background: 'var(--mocha-surface0)',
                    color,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
