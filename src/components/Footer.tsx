import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t mt-24" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm" style={{ background: 'var(--accent)', color: '#000' }}>
                C
              </div>
              <span className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>Clover</span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: 'var(--text-secondary)' }}>
              Marketing digital y desarrollo web para negocios que quieren crecer online.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Navegacion</h4>
            <div className="flex flex-col gap-3">
              <Link href="/sobre-mi" className="text-sm transition-colors hover:text-white" style={{ color: 'var(--text-secondary)' }}>Nosotros</Link>
              <Link href="/proyectos" className="text-sm transition-colors hover:text-white" style={{ color: 'var(--text-secondary)' }}>Proyectos</Link>
              <Link href="/servicios" className="text-sm transition-colors hover:text-white" style={{ color: 'var(--text-secondary)' }}>Servicios</Link>
              <Link href="/contacto" className="text-sm transition-colors hover:text-white" style={{ color: 'var(--text-secondary)' }}>Contacto</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Contacto</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:clovermarketingdesign@gmail.com" className="text-sm transition-colors hover:text-white" style={{ color: 'var(--text-secondary)' }}>Email</a>
              <a href="https://wa.me/549XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="text-sm transition-colors hover:text-white" style={{ color: 'var(--text-secondary)' }}>WhatsApp</a>
              <a href="https://www.upwork.com/freelancers/~0136b685f6d2bb3da2" target="_blank" rel="noopener noreferrer" className="text-sm transition-colors hover:text-white" style={{ color: 'var(--text-secondary)' }}>Upwork</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid var(--border)' }}>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            &copy; {new Date().getFullYear()} Clover. Todos los derechos reservados.
          </p>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            Trabajo remoto, alcance global.
          </p>
        </div>
      </div>
    </footer>
  )
}
