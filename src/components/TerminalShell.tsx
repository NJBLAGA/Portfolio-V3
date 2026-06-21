/**
 * TerminalShell — the outer chrome wrapping every page.
 *
 * Structure:
 *   ┌─────────────────────────────────────────┐
 *   │ TitleBar (traffic lights + path/hamburger) │
 *   ├──────────┬──────────────────────────────┤
 *   │ Sidebar  │  <Outlet /> (page content)   │
 *   │ (desktop)│                              │
 *   └──────────┴──────────────────────────────┘
 *
 * On mobile (<md) the sidebar is hidden and replaced by a hamburger
 * toggle in the title bar. Opening the menu renders a full-panel overlay.
 *
 * Sizing notes:
 *   - max-w-5xl gives comfortable breathing room on desktop/tablet
 *   - Sidebar is 160px wide (up from the original 124px mock)
 *   - Main content has generous padding (p-6 mobile, p-8 desktop)
 */

import { useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconPhone,
  IconMenu2,
  IconX,
} from '@tabler/icons-react'

/* ── Nav routes ─────────────────────────────────────────────────────────── */
const NAV_ITEMS = [
  { label: 'about',    to: '/about' },
  { label: 'projects', to: '/projects' },
  { label: 'stack',    to: '/stack' },
  { label: 'contact',  to: '/contact' },
]

/* ── Social links (sidebar + mobile menu) ───────────────────────────────── */
const SOCIALS = [
  { icon: IconBrandGithub,   href: 'https://github.com/NJBLAGA',          label: 'GitHub'   },
  { icon: IconBrandLinkedin, href: 'https://linkedin.com/in/nathanblaga',  label: 'LinkedIn' },
  { icon: IconMail,          href: 'mailto:nathanblaga90@gmail.com',       label: 'Email'    },
  { icon: IconPhone,         href: 'tel:+61436190824',                     label: 'Phone'    },
]

/* ── Helper: derive the path label shown in the title bar ───────────────── */
function useTitleBarPath(): string {
  const { pathname } = useLocation()
  return pathname === '/' ? '/about' : pathname
}

export default function TerminalShell() {
  const [menuOpen, setMenuOpen] = useState(false)
  const titlePath = useTitleBarPath()

  return (
    /* Full-viewport container, centred — max-w-5xl for a comfortable desktop width */
    <div className="min-h-screen flex items-start justify-center px-2 sm:px-4" style={{ background: 'var(--mocha-base)' }}>
      <div
        className="w-full max-w-5xl rounded-xl overflow-hidden border my-6 sm:my-8"
        style={{ borderColor: 'var(--mocha-surface0)' }}
      >

        {/* ── Title bar ──────────────────────────────────────────────────── */}
        <div
          className="flex items-center gap-2 px-4 py-2.5"
          style={{ background: 'var(--mocha-mantle)' }}
        >
          {/* Traffic-light dots */}
          <span className="w-3 h-3 rounded-full" style={{ background: 'var(--mocha-red)' }}    aria-hidden="true" />
          <span className="w-3 h-3 rounded-full" style={{ background: 'var(--mocha-yellow)' }} aria-hidden="true" />
          <span className="w-3 h-3 rounded-full" style={{ background: 'var(--mocha-green)' }}  aria-hidden="true" />

          {/* Path / brand label */}
          {menuOpen ? (
            <span className="ml-3 text-xs" style={{ color: 'var(--mocha-overlay1)' }}>
              ~/nathan
            </span>
          ) : (
            <span className="ml-3 text-xs" style={{ color: 'var(--mocha-overlay1)' }}>
              {titlePath}
            </span>
          )}

          {/* Hamburger / close — mobile only */}
          <button
            className="ml-auto md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mocha-mauve)] rounded p-1"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen(v => !v)}
          >
            {menuOpen
              ? <IconX    size={18} style={{ color: 'var(--mocha-mauve)' }} />
              : <IconMenu2 size={18} style={{ color: 'var(--mocha-overlay1)' }} />
            }
          </button>
        </div>

        {/* ── Mobile nav panel ───────────────────────────────────────────── */}
        {menuOpen && (
          <div
            className="md:hidden px-5 py-5"
            style={{ background: 'var(--mocha-mantle)' }}
          >
            {/* Nav items — large and tappable */}
            <nav aria-label="Mobile navigation">
              <ul className="flex flex-col gap-5">
                {NAV_ITEMS.map(({ label, to }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      onClick={() => setMenuOpen(false)}
                      className="text-base focus:outline-none focus-visible:underline"
                      style={({ isActive }) => ({
                        color: isActive ? 'var(--mocha-mauve)' : 'var(--mocha-text)',
                      })}
                    >
                      › {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Hairline divider */}
            <div className="my-5 border-t" style={{ borderColor: 'var(--mocha-surface0)' }} />

            {/* Social icons */}
            <div className="flex gap-6">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mocha-mauve)] rounded"
                  style={{ color: 'var(--mocha-overlay1)' }}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        )}

        {/* ── Body: sidebar + page content ───────────────────────────────── */}
        <div className="flex" style={{ background: 'var(--mocha-base)' }}>

          {/* Sidebar — desktop only, 160px wide */}
          <aside
            className="hidden md:flex flex-col w-[160px] shrink-0 px-5 py-6 border-r"
            style={{
              background:  'var(--mocha-mantle)',
              borderColor: 'var(--mocha-surface0)',
            }}
          >
            {/* ~/nathan wordmark */}
            <span
              className="text-sm font-semibold mb-6"
              style={{ color: 'var(--mocha-mauve)' }}
            >
              ~/nathan
            </span>

            {/* Vertical nav list */}
            <nav aria-label="Main navigation">
              <ul className="flex flex-col gap-4">
                {NAV_ITEMS.map(({ label, to }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      className="text-sm focus:outline-none focus-visible:underline transition-colors duration-150"
                      style={({ isActive }) => ({
                        color: isActive ? 'var(--mocha-mauve)' : 'var(--mocha-overlay1)',
                      })}
                    >
                      › {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Social icon row — pushed to bottom */}
            <div className="mt-auto pt-6 flex gap-3 flex-wrap">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mocha-mauve)] rounded"
                  style={{ color: 'var(--mocha-overlay1)' }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </aside>

          {/* Page content */}
          <main className="flex-1 min-w-0 p-6 md:p-8">
            <Outlet />
          </main>
        </div>

      </div>
    </div>
  )
}
