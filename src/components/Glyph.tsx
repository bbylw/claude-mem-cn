import type { ReactElement } from 'react'

export type GlyphName =
  | 'memory'
  | 'disclosure'
  | 'search'
  | 'work'
  | 'team'
  | 'desktop'
  | 'lock'
  | 'image'
  | 'settings'
  | 'automation'
  | 'reference'
  | 'key'
  | 'skip'
  | 'provider'
  | 'windows'
  | 'alert'
  | 'globe'
  | 'check'
  | 'refresh'
  | 'broadcast'
  | 'mute'
  | 'health'
  | 'bug'
  | 'file'
  | 'music'
  | 'coin'
  | 'book'
  | 'external'

const glyphs: Record<GlyphName, ReactElement> = {
  memory: (
    <>
      <path d="M12 3.5 20 8l-8 4.5L4 8l8-4.5Z" />
      <path d="M4 12.5 12 17l8-4.5" />
      <path d="M4 16.5 12 21l8-4.5" />
    </>
  ),
  disclosure: (
    <>
      <path d="M4 5h16" />
      <path d="M6.5 10h11" />
      <path d="M9 15h6" />
      <path d="M11 19h2" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="m16 16 4 4" />
      <path d="M8 11h6" />
    </>
  ),
  work: (
    <>
      <rect x="3.5" y="4.5" width="17" height="15" rx="1.5" />
      <path d="M3.5 9h17" />
      <path d="M7 12.5h4v4H7z" />
    </>
  ),
  team: (
    <>
      <circle cx="8" cy="8" r="2.2" />
      <circle cx="16" cy="8" r="2.2" />
      <circle cx="12" cy="16" r="2.2" />
      <path d="M9.8 9.7 11 14M14.2 9.7 13 14M10.2 8h3.6" />
    </>
  ),
  desktop: (
    <>
      <rect x="3.5" y="4.5" width="17" height="11" />
      <path d="M8 19h8M12 15.5V19" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="10" width="14" height="10" rx="1.5" />
      <path d="M8.5 10V7.5a3.5 3.5 0 0 1 7 0V10" />
      <circle cx="12" cy="15" r="1.2" />
    </>
  ),
  image: (
    <>
      <rect x="3.5" y="5" width="17" height="14" rx="1.5" />
      <circle cx="8.5" cy="9.5" r="1.5" />
      <path d="m4.5 16 4.8-4.5 4 3.5 2.5-2.2 3.7 3.2" />
    </>
  ),
  settings: (
    <>
      <path d="M4 8h16" />
      <circle cx="9" cy="8" r="2" />
      <path d="M4 16h16" />
      <circle cx="15" cy="16" r="2" />
    </>
  ),
  automation: (
    <>
      <rect x="4.5" y="7.5" width="15" height="11" rx="2" />
      <path d="M12 7.5v-3" />
      <circle cx="12" cy="3.5" r="1" />
      <circle cx="9" cy="12.5" r="1" />
      <circle cx="15" cy="12.5" r="1" />
      <path d="M9 15.5h6" />
    </>
  ),
  reference: (
    <>
      <path d="M10 14a4 4 0 0 0 5.7 0l2.5-2.5a4 4 0 0 0-5.7-5.7L11 7" />
      <path d="M14 10a4 4 0 0 0-5.7 0L5.8 12.5a4 4 0 0 0 5.7 5.7L13 17" />
    </>
  ),
  key: (
    <>
      <circle cx="8.5" cy="12" r="3.5" />
      <path d="M12 12H20" />
      <path d="M17 12v3" />
      <path d="M20 12v2.5" />
    </>
  ),
  skip: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M9 12h6" />
      <path d="m13 9 3 3-3 3" />
    </>
  ),
  provider: (
    <>
      <path d="M9 3.5v4M15 3.5v4" />
      <path d="M6 7.5h12v3a6 6 0 0 1-12 0v-3Z" />
      <path d="M12 16.5v4" />
    </>
  ),
  windows: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="1" />
      <path d="M12 4v16M4 12h16" />
    </>
  ),
  alert: (
    <>
      <path d="M12 4 3.5 19h17L12 4Z" />
      <path d="M12 9.5v4" />
      <path d="M12 16.5v.1" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M4 12h16" />
      <ellipse cx="12" cy="12" rx="4" ry="8" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="m8.5 12 2.5 2.5 4.8-5" />
    </>
  ),
  refresh: (
    <>
      <path d="M20 12a8 8 0 1 1-2.6-5.9" />
      <path d="M20 4v5h-5" />
    </>
  ),
  broadcast: (
    <>
      <circle cx="12" cy="12" r="1.5" />
      <path d="M8.5 8.5a5 5 0 0 1 7 0" />
      <path d="M6 6a8.5 8.5 0 0 1 12 0" />
      <path d="M12 13.5V21" />
    </>
  ),
  mute: (
    <>
      <path d="M7 9a5 5 0 0 1 10 0c0 3.5 1 5.5 2 6.5H5c1-1 2-3 2-6.5Z" />
      <path d="M10 20a2 2 0 0 0 4 0" />
      <path d="M4 4l16 16" />
    </>
  ),
  health: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v8M8 12h8" />
    </>
  ),
  bug: (
    <>
      <path d="M8 8a4 4 0 0 1 8 0v5a4 4 0 0 1-8 0V8Z" />
      <path d="M9 8 7 5M15 8l2-3" />
      <path d="M4 12h4M16 12h4" />
      <path d="M5 18l3-2M19 18l-3-2" />
      <path d="M9 18v3M15 18v3" />
    </>
  ),
  file: (
    <>
      <path d="M6 3.5h7l5 5V20.5H6V3.5Z" />
      <path d="M13 3.5v5h5" />
      <path d="M9 12h6M9 16h6" />
    </>
  ),
  music: (
    <>
      <path d="M9 18V6.5l9-2v11" />
      <circle cx="6.5" cy="18" r="2.5" />
      <circle cx="15.5" cy="15.5" r="2.5" />
    </>
  ),
  coin: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 4v2M12 18v2M4 12h2M18 12h2" />
    </>
  ),
  book: (
    <>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H12v16H6.5A2.5 2.5 0 0 0 4 21.5V5.5Z" />
      <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H12v16h5.5A2.5 2.5 0 0 1 20 21.5V5.5Z" />
    </>
  ),
  external: (
    <>
      <path d="M14 4h6v6" />
      <path d="M20 4 11 13" />
      <path d="M19 14v6H4V5h6" />
    </>
  ),
}

type GlyphProps = {
  name: GlyphName
  size?: number
  className?: string
}

export function Glyph({ name, size = 20, className }: GlyphProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {glyphs[name]}
    </svg>
  )
}
