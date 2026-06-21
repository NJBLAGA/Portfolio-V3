/**
 * Stack page — path /stack
 * Prompt: $ cat stack.json
 *
 * Each tech item has its own colour pill and an official Simple Icons logo
 * from react-icons/si. Categories use a span label (not p) so the global
 * p-font-size rule on desktop doesn't inflate them.
 */

import type { IconType } from 'react-icons'
import {
  SiJavascript,
  SiTypescript,
  SiRuby,
  SiReact,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiRubyonrails,
  SiGit,
  SiGithub,
  SiLinux,
  SiSalesforce,
} from 'react-icons/si'
import { IconDatabase } from '@tabler/icons-react'

interface StackItem {
  name:  string
  color: string
  Icon?: IconType | React.ComponentType<{ size?: number; color?: string }>
}

interface Category {
  category: string
  color:    string
  items:    StackItem[]
}

const STACK: Category[] = [
  {
    category: 'languages',
    color:    'var(--mocha-blue)',
    items: [
      { name: 'JavaScript', color: 'var(--mocha-yellow)',  Icon: SiJavascript },
      { name: 'TypeScript', color: 'var(--mocha-blue)',    Icon: SiTypescript  },
      { name: 'Ruby',       color: 'var(--mocha-red)',     Icon: SiRuby        },
      { name: 'SQL',        color: 'var(--mocha-peach)',   Icon: IconDatabase  },
    ],
  },
  {
    category: 'frontend',
    color:    'var(--mocha-green)',
    items: [
      { name: 'React',       color: 'var(--mocha-blue)',  Icon: SiReact       },
      { name: 'HTML',        color: 'var(--mocha-peach)', Icon: SiHtml5       },
      { name: 'CSS',         color: 'var(--mocha-mauve)', Icon: SiCss         },
      { name: 'Tailwind CSS', color: 'var(--mocha-green)', Icon: SiTailwindcss },
    ],
  },
  {
    category: 'backend',
    color:    'var(--mocha-peach)',
    items: [
      { name: 'Node.js',        color: 'var(--mocha-green)', Icon: SiNodedotjs    },
      { name: 'Express.js',     color: 'var(--mocha-yellow)', Icon: SiExpress     },
      { name: 'PostgreSQL',     color: 'var(--mocha-blue)',  Icon: SiPostgresql   },
      { name: 'Ruby on Rails',  color: 'var(--mocha-red)',   Icon: SiRubyonrails  },
    ],
  },
  {
    category: 'tools',
    color:    'var(--mocha-yellow)',
    items: [
      { name: 'Git',    color: 'var(--mocha-peach)',   Icon: SiGit    },
      { name: 'GitHub', color: 'var(--mocha-text)',    Icon: SiGithub },
      { name: 'Linux',  color: 'var(--mocha-yellow)',  Icon: SiLinux  },
    ],
  },
  {
    category: 'salesforce',
    color:    'var(--mocha-red)',
    items: [
      { name: 'Marketing Cloud', color: 'var(--mocha-blue)',  Icon: SiSalesforce },
      { name: 'Data Cloud',      color: 'var(--mocha-peach)', Icon: SiSalesforce },
    ],
  },
]

export default function Stack() {
  return (
    <section aria-label="Tech stack">

      {/* $ cat stack.json */}
      <div
        className="text-sm md:text-[30px] mb-5 md:mb-8 font-normal"
        style={{ color: 'var(--mocha-green)' }}
      >
        $ cat stack.json
      </div>

      <div className="flex flex-col gap-5">
        {STACK.map(({ category, color, items }) => (
          <div key={category}>
            {/* Category label — span so global p rule doesn't inflate it */}
            <span
              className="block text-xs mb-2.5"
              style={{ color }}
            >
              {category}
            </span>

            {/* Pills */}
            <div className="flex flex-wrap gap-2">
              {items.map(({ name, color: itemColor, Icon }) => (
                <span
                  key={name}
                  className="flex items-center gap-1.5 text-xs md:text-sm px-3 py-1 rounded-[5px]"
                  style={{
                    background: 'var(--mocha-surface0)',
                    color:      itemColor,
                  }}
                >
                  {Icon && <Icon size={13} color={itemColor} aria-hidden={true as never} />}
                  {name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
