import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t mt-24" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
            Fed<span style={{ color: 'var(--accent)' }}>.</span>
          </span>
          <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
            Marketing + Desarrollo web
          </p>
        </div>

        <div className="flex items-center gap-6">
          <Link href="/proyectos" className="text-sm transition-colors hover:text-white" style={{ color: 'var(--text-secondary)' }}>Proyectos</Link>
          <Link href="/servicios" className="text-sm transition-colors hover:text-white" style={{ color: 'var(--text-secondary)' }}>Servicios</Link>
          <Link href="/contacto" className="text-sm transition-colors hover:text-white" style={{ color: 'var(--text-secondary)' }}>Contacto</Link>
        </div>

        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          © {new Date().getFullYear()} Fed. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
