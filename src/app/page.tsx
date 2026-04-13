import Link from 'next/link'
import { HeroIllustration } from '@/components/Icons'

const stats = [
  { number: '5+', label: 'Anos de experiencia' },
  { number: '30+', label: 'Proyectos entregados' },
  { number: '4', label: 'Paises' },
]

const services = [
  {
    title: 'Desarrollo Web',
    description: 'Sitios rapidos, modernos, con sistema de reservas. Pensados para convertir visitantes en clientes.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
  },
  {
    title: 'Marketing Digital',
    description: 'Estrategia, contenido y gestion de redes sociales. Todo lo que tu negocio necesita para crecer online.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: 'Identidad de Marca',
    description: 'Logo, paleta, tipografia y manual de marca. Presencia visual profesional desde el dia uno.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: 'Landing Pages',
    description: 'Paginas de conversion para temporadas, promos y campanas. Disenadas para que el visitante actue.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
]

const clients = [
  'Hoteles', 'Cabanas', 'Restaurantes', 'Tours', 'Comercios locales', 'Emprendimientos'
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm mb-8"
            style={{ background: 'var(--accent-glow)', color: 'var(--accent)', border: '1px solid rgba(34, 197, 94, 0.2)' }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--accent)' }} />
            Disponible para nuevos proyectos
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6" style={{ color: 'var(--text-primary)' }}>
            Tu negocio merece
            <br />
            <span style={{ color: 'var(--accent)' }}>presencia digital</span>
            <br />
            que funcione
          </h1>

          <p className="text-xl leading-relaxed mb-10 max-w-xl" style={{ color: 'var(--text-secondary)' }}>
            Somos Clover. Combinamos marketing digital y desarrollo web para que negocios turisticos crezcan online. Desde la marca hasta el sitio con reservas.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <Link
              href="/contacto"
              className="px-7 py-3.5 rounded-lg font-medium transition-all duration-200 glow-accent"
              style={{ background: 'var(--accent)', color: '#000' }}
            >
              Empezar proyecto
            </Link>
            <Link
              href="/proyectos"
              className="px-7 py-3.5 rounded-lg font-medium transition-colors duration-200 border"
              style={{ color: 'var(--text-primary)', borderColor: 'var(--border)' }}
            >
              Ver trabajos
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-12">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold" style={{ color: 'var(--accent)' }}>{stat.number}</p>
                <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Illustration */}
        <div className="hidden lg:block animate-fade-in-delay-2">
          <HeroIllustration />
        </div>
        </div>
      </section>

      {/* Clients strip */}
      <section className="border-y" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm mr-4" style={{ color: 'var(--text-muted)' }}>Trabajamos con:</span>
            {clients.map((client) => (
              <span
                key={client}
                className="text-sm px-3 py-1 rounded-full border"
                style={{ color: 'var(--text-secondary)', borderColor: 'var(--border)' }}
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-sm font-medium tracking-wider uppercase mb-3" style={{ color: 'var(--accent)' }}>Servicios</p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
              Todo lo que necesitas<br />en un solo lugar
            </h2>
          </div>
          <Link href="/servicios" className="hidden md:block text-sm transition-colors" style={{ color: 'var(--text-secondary)' }}>
            Ver todos →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-8 rounded-xl border card-hover"
              style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                style={{ background: 'var(--accent-glow)', color: 'var(--accent)' }}
              >
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{service.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{service.description}</p>
            </div>
          ))}
        </div>

        <Link href="/servicios" className="block md:hidden text-sm text-center mt-8" style={{ color: 'var(--text-secondary)' }}>
          Ver todos los servicios →
        </Link>
      </section>

      {/* Proceso */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-wider uppercase mb-3" style={{ color: 'var(--accent)' }}>Proceso</p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Simple, directo, sin vueltas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: '01', title: 'Charlamos', desc: 'Nos contas que necesitas. Entendemos tu negocio, tus clientes y tus objetivos.' },
            { step: '02', title: 'Proponemos', desc: 'Armamos una propuesta a medida con timeline y presupuesto claro. Sin letra chica.' },
            { step: '03', title: 'Construimos', desc: 'Ejecutamos, entregamos, y te ensenamos a usar todo. Soporte incluido.' },
          ].map((item) => (
            <div key={item.step} className="relative">
              <span className="text-6xl font-bold" style={{ color: 'var(--accent-glow)' }}>{item.step}</span>
              <h3 className="text-xl font-semibold mt-4 mb-3" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div
          className="rounded-2xl p-12 md:p-16 text-center gradient-border"
          style={{ background: 'var(--surface)' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Tu proximo cliente te esta<br />buscando online
          </h2>
          <p className="text-lg mb-8 max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Si tu negocio no esta ahi, lo encuentra otro. Hablemos y empezamos esta semana.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200 glow-accent"
            style={{ background: 'var(--accent)', color: '#000' }}
          >
            Empezar proyecto →
          </Link>
        </div>
      </section>
    </div>
  )
}
