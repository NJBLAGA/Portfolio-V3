/**
 * Contact page — path /contact
 * Prompt: $ ./contact.sh
 *
 * Four contact cards (email, phone, LinkedIn, GitHub) each with an icon
 * and a clickable link (mailto: / tel: / https).
 *
 * Icon colour mapping (from design brief):
 *   mail     → mauve (#cba6f7)
 *   phone    → peach (#fab387)
 *   LinkedIn → blue  (#89b4fa)
 *   GitHub   → green (#a6e3a1)
 */

import {
  IconMail,
  IconPhone,
  IconBrandLinkedin,
  IconBrandGithub,
} from '@tabler/icons-react'

/* ── Contact card data ──────────────────────────────────────────────────── */
const CONTACTS = [
  {
    icon:  IconMail,
    color: 'var(--mocha-mauve)',
    label: 'nathanblaga90@gmail.com',
    href:  'mailto:nathanblaga90@gmail.com',
    ariaLabel: 'Send email',
  },
  {
    icon:  IconPhone,
    color: 'var(--mocha-peach)',
    label: '+61 436 190 824',
    href:  'tel:+61436190824',
    ariaLabel: 'Call phone number',
  },
  {
    icon:  IconBrandLinkedin,
    color: 'var(--mocha-blue)',
    label: 'linkedin.com/in/nathanblaga',
    href:  'https://linkedin.com/in/nathanblaga',
    ariaLabel: 'LinkedIn profile',
  },
  {
    icon:  IconBrandGithub,
    color: 'var(--mocha-green)',
    label: 'github.com/NJBLAGA',
    href:  'https://github.com/NJBLAGA',
    ariaLabel: 'GitHub profile',
  },
]

export default function Contact() {
  return (
    <section aria-label="Contact">

      {/* $ ./contact.sh — green command line */}
      <p className="text-xs mb-3" style={{ color: 'var(--mocha-green)' }}>
        $ ./contact.sh
      </p>

      {/* Heading */}
      <h1 className="text-lg font-semibold mb-1.5" style={{ color: 'var(--mocha-text)' }}>
        Let&apos;s talk.
      </h1>

      {/* Intro */}
      <p className="text-xs leading-[1.7] mb-4" style={{ color: 'var(--mocha-subtext1)' }}>
        Open to full-stack and backend roles. Fastest way to reach me is email or phone.
      </p>

      {/* Contact cards */}
      <div className="flex flex-col gap-2 max-w-xs">
        {CONTACTS.map(({ icon: Icon, color, label, href, ariaLabel }) => (
          <a
            key={href}
            href={href}
            aria-label={ariaLabel}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="flex items-center gap-3 rounded-[7px] border px-3 py-2.5 hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mocha-mauve)]"
            style={{
              background:  'var(--mocha-mantle)',
              borderColor: 'var(--mocha-surface0)',
              borderWidth: '0.5px',
            }}
          >
            <Icon size={15} style={{ color }} aria-hidden="true" />
            <span className="text-[11px]" style={{ color: 'var(--mocha-text)' }}>
              {label}
            </span>
          </a>
        ))}
      </div>

    </section>
  )
}
