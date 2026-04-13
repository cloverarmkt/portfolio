'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { CloverLogo } from './Icons'

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/sobre-mi', label: 'Nosotros' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b" style={{ background: 'rgba(9,9,11,0.85)', backdropFilter: 'blur(16px)', borderColor: 'var(--border)' }}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <CloverLogo size={28} className="text-[var(--accent)]" />
          <span className="text-lg font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Clover
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm transition-colors duration-200"
              style={{ color: pathname === link.href ? 'var(--accent)' : 'var(--text-secondary)' }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contacto"
          className="hidden md:inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 glow-accent"
          style={{ background: 'var(--accent)', color: '#000' }}
        >
          Empezar proyecto
        </Link>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          style={{ color: 'var(--text-secondary)' }}
          aria-label="Menu"
        >
          {open ? (
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4" style={{ borderTop: '1px solid var(--border)' }}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm py-2 transition-colors"
              style={{ color: pathname === link.href ? 'var(--accent)' : 'var(--text-secondary)' }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="inline-flex justify-center items-center px-4 py-2 rounded-lg text-sm font-medium"
            style={{ background: 'var(--accent)', color: '#000' }}
            onClick={() => setOpen(false)}
          >
            Empezar proyecto
          </Link>
        </div>
      )}
    </nav>
  )
}
