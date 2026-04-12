import Link from 'next/link'

const services = [
  {
    icon: '🌐',
    title: 'Desarrollo Web',
    description: 'Sitios web modernos, rápidos y con sistema de reservas para negocios turísticos.',
  },
  {
    icon: '📱',
    title: 'Marketing Digital',
    description: 'Estrategia de redes sociales, creación de contenido y gestión de comunidades.',
  },
  {
    icon: '🎨',
    title: 'Identidad de Marca',
    description: 'Diseño de logo, manual de marca y presencia visual consistente.',
  },
  {
    icon: '⚡',
    title: 'Landing Pages',
    description: 'Páginas de conversión para temporadas, promociones y campañas específicas.',
  },
]

const projects = [
  {
    title: 'Próximamente',
    category: 'Portfolio en construcción',
    description: 'Estoy construyendo mi portfolio con proyectos reales. Volvé pronto.',
    tag: 'WIP',
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-20">
        <div className="max-w-3xl">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm mb-8"
            style={{ background: 'rgba(249,115,22,0.1)', color: 'var(--accent)', border: '1px solid rgba(249,115,22,0.2)' }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--accent)' }} />
            Disponible para proyectos
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6" style={{ color: 'var(--text-primary)' }}>
            Marketing<span style={{ color: 'var(--accent)' }}>.</span>
            <br />
            Desarrollo<span style={{ color: 'var(--accent)' }}>.</span>
            <br />
            Resultados<span style={{ color: 'var(--accent)' }}>.</span>
          </h1>

          <p className="text-xl leading-relaxed mb-10 max-w-xl" style={{ color: 'var(--text-secondary)' }}>
            Combino marketing digital y desarrollo web para ayudar a negocios turísticos a crecer online. Desde Costa Rica hasta donde el próximo proyecto me lleve.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/proyectos"
              className="px-6 py-3 rounded-lg font-medium transition-colors"
              style={{ background: 'var(--accent)', color: '#000' }}
            >
              Ver proyectos
            </Link>
            <Link
              href="/contacto"
              className="px-6 py-3 rounded-lg font-medium transition-colors border"
              style={{ color: 'var(--text-primary)', borderColor: 'var(--border)' }}
            >
              Hablemos
            </Link>
          </div>
        </div>
      </section>

      {/* Divisor */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px" style={{ background: 'var(--border)' }} />
      </div>

      {/* Servicios */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-sm font-medium mb-2" style={{ color: 'var(--accent)' }}>Qué hago</p>
            <h2 className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>Servicios</h2>
          </div>
          <Link href="/servicios" className="text-sm transition-colors" style={{ color: 'var(--text-secondary)' }}>
            Ver todos →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 rounded-xl border transition-colors"
              style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
            >
              <span className="text-3xl mb-4 block">{service.icon}</span>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{service.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Proyectos preview */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-sm font-medium mb-2" style={{ color: 'var(--accent)' }}>Trabajos</p>
            <h2 className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>Proyectos recientes</h2>
          </div>
          <Link href="/proyectos" className="text-sm transition-colors" style={{ color: 'var(--text-secondary)' }}>
            Ver todos →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="p-8 rounded-xl border flex flex-col md:flex-row md:items-center justify-between gap-6"
              style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-xs px-2 py-1 rounded-full"
                    style={{ background: 'rgba(249,115,22,0.1)', color: 'var(--accent)' }}
                  >
                    {project.tag}
                  </span>
                  <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>{project.category}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{project.title}</h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div
          className="rounded-2xl p-12 text-center border"
          style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            ¿Tenés un proyecto en mente?
          </h2>
          <p className="text-lg mb-8 max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Hablemos. Sin compromiso, cuéntame qué necesitás y vemos cómo puedo ayudarte.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center px-8 py-4 rounded-lg font-medium text-lg transition-colors"
            style={{ background: 'var(--accent)', color: '#000' }}
          >
            Escribime →
          </Link>
        </div>
      </section>
    </div>
  )
}
