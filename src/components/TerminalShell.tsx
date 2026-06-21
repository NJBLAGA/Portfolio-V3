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
  { icon: IconBrandGithub,  href: 'https://github.com/NJBLAGA',                   label: 'GitHub'   },
  { icon: IconBrandLinkedin,href: 'https://linkedin.com/in/nathanblaga',           label: 'LinkedIn' },
  { icon: IconMail,         href: 'mailto:nathanblaga90@gmail.com',                label: 'Email'    },
  { icon: IconPhone,        href: 'tel:+61436190824',                              label: 'Phone'    },
]

/* ── Helper: derive the path label shown in the title bar ───────────────── */
function useTitleBarPath(): string {
  const { pathname } = useLocation()
  /* map /about → /about, root → /about (default redirect) */
  return pathname === '/' ? '/about' : pathname
}

export default function TerminalShell() {
  const [menuOpen, setMenuOpen] = useState(false)
  const titlePath = useTitleBarPath()

  return (
    /* Full-viewport container, centred with a max-width for very wide screens */
    <div className="min-h-screen flex items-start justify-center" style={{ background: 'var(--mocha-base)' }}>
      <div
        className="w-full max-w-4xl rounded-xl overflow-hidden border"
        style={{ borderColor: 'var(--mocha-surface0)', marginTop: '2rem', marginBottom: '2rem' }}
      >

        {/* ── Title bar ──────────────────────────────────────────────────── */}
        <div
          className="flex items-center gap-2 px-3 py-2"
          style={{ background: 'var(--mocha-mantle)' }}
        >
          {/* Traffic-light dots */}
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--mocha-red)' }}   aria-hidden="true" />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--mocha-yellow)' }} aria-hidden="true" />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--mocha-green)' }}  aria-hidden="true" />

          {/* Path label — hidden on mobile when menu is open (replaced by ~/nathan) */}
          {menuOpen ? (
            /* Show ~/nathan in the title bar while mobile menu is open */
            <span className="ml-2 text-[9px]" style={{ color: 'var(--mocha-overlay1)' }}>
              ~/nathan
            </span>
          ) : (
            <span className="ml-2 text-[10px]" style={{ color: 'var(--mocha-overlay1)' }}>
              {titlePath}
            </span>
          )}

          {/* Hamburger / close — visible only on mobile */}
          <button
            className="ml-auto md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mocha-mauve)] rounded"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen(v => !v)}
          >
            {menuOpen
              ? <IconX size={16} style={{ color: 'var(--mocha-mauve)' }} />
              : <IconMenu2 size={14} style={{ color: 'var(--mocha-overlay1)' }} />
            }
          </button>
        </div>

        {/* ── Mobile nav panel (full-panel overlay, mantle bg) ───────────── */}
        {menuOpen && (
          <div
            className="md:hidden px-4 py-4"
            style={{ background: 'var(--mocha-mantle)' }}
          >
            {/* Nav items — large and tappable */}
            <nav aria-label="Mobile navigation">
              <ul className="flex flex-col gap-4">
                {NAV_ITEMS.map(({ label, to }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      onClick={() => setMenuOpen(false)}
                      className="text-sm focus:outline-none focus-visible:underline"
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

            {/* Divider */}
            <div className="my-5 border-t" style={{ borderColor: 'var(--mocha-surface0)' }} />

            {/* Social icons */}
            <div className="flex gap-5">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mocha-mauve)] rounded"
                  style={{ color: 'var(--mocha-overlay1)' }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        )}

        {/* ── Body: sidebar + page content ───────────────────────────────── */}
        <div className="flex" style={{ background: 'var(--mocha-base)' }}>

          {/* Sidebar — desktop only, fixed ~124px wide */}
          <aside
            className="hidden md:flex flex-col w-[124px] shrink-0 p-4 border-r"
            style={{
              background:   'var(--mocha-mantle)',
              borderColor:  'var(--mocha-surface0)',
            }}
          >
            {/* ~/nathan wordmark */}
            <span
              className="text-xs font-semibold mb-4"
              style={{ color: 'var(--mocha-mauve)' }}
            >
              ~/nathan
            </span>

            {/* Vertical nav list */}
            <nav aria-label="Main navigation">
              <ul className="flex flex-col gap-3">
                {NAV_ITEMS.map(({ label, to }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      className="text-[11px] focus:outline-none focus-visible:underline transition-colors duration-150"
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

            {/* Social icon row */}
            <div className="mt-auto pt-6 flex gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mocha-mauve)] rounded"
                  style={{ color: 'var(--mocha-overlay1)' }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </aside>

          {/* Page content rendered by the active route */}
          <main className="flex-1 min-w-0 p-5 md:p-5">
            <Outlet />
          </main>
        </div>

      </div>
    </div>
  )
}
