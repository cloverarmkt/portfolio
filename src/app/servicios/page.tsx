import Link from 'next/link'

const aiServices = [
  {
    title: 'Chatbot con IA para tu negocio',
    description: 'Un asistente virtual que responde consultas de tus clientes las 24hs. Precio, disponibilidad, actividades — todo automatizado. Menos tiempo respondiendo WhatsApp, más reservas concretadas.',
    tag: 'IA',
  },
  {
    title: 'Contenido generado con IA',
    description: 'Combinamos inteligencia artificial con tu voz y tu marca para generar descripciones, posts y textos SEO de forma consistente. Más contenido, menos tiempo.',
    tag: 'IA',
  },
  {
    title: 'Automatizaciones de WhatsApp',
    description: 'Respuestas automáticas, confirmaciones de reserva, recordatorios y seguimientos post-visita. Tu negocio en piloto automático para las tareas repetitivas.',
    tag: 'IA',
  },
]

const services = [
  {
    title: 'Sitio Web Profesional',
    description: 'Diseno y desarrollo de sitios web completos, modernos y optimizados para moviles. Con panel de administracion para que actualices el contenido vos mismo.',
    includes: ['Diseno personalizado', 'Mobile-first', 'Panel CMS', 'SEO basico', 'Dominio y hosting (1er ano)'],
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
  },
  {
    title: 'Sistema de Reservas',
    description: 'Reservas online para cabanas, hoteles, tours y actividades. Tus clientes reservan desde el sitio, vos gestionas desde el panel.',
    includes: ['Reservas online 24/7', 'Confirmacion por email', 'Panel de gestion', 'Integracion calendario'],
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    title: 'Landing Page',
    description: 'Pagina de alta conversion para temporadas, promociones o eventos. Disenada para que el visitante tome accion rapido.',
    includes: ['Diseno orientado a conversion', 'Integracion WhatsApp', 'Formulario de contacto', 'Entrega en 5-7 dias'],
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
  {
    title: 'Gestion de Redes Sociales',
    description: 'Contenido para Instagram, Facebook y TikTok. Estrategia, diseno de piezas y publicacion constante.',
    includes: ['Estrategia de contenido', '12-20 publicaciones/mes', 'Diseno de artes', 'Reporte mensual'],
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
  {
    title: 'Identidad de Marca',
    description: 'Creacion de marca desde cero: logo, paleta de colores, tipografia y manual de uso. Para verse profesional desde el primer dia.',
    includes: ['Logo en multiples formatos', 'Paleta y tipografias', 'Manual de marca', 'Aplicaciones (tarjeta, redes)'],
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: 'Pack Turistico Completo',
    description: 'Todo en uno: sitio web + reservas + redes + marca. El paquete completo para digitalizarse de una vez.',
    includes: ['Todo lo anterior', 'Precio especial por paquete', 'Soporte 3 meses', 'Capacitacion incluida'],
    featured: true,
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
]

export default function Servicios() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-16">
        <div className="max-w-3xl animate-fade-in">
          <p className="text-sm font-medium tracking-wider uppercase mb-4" style={{ color: 'var(--accent)' }}>Servicios</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ color: 'var(--text-primary)' }}>
            Soluciones digitales que<br />
            <span style={{ color: 'var(--accent)' }}>generan resultados</span>
          </h1>
          <p className="text-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Trabajamos principalmente con negocios turisticos: hoteles, cabanas, restaurantes, tours y comercios. Si necesitas presencia digital que funcione, podemos ayudarte.
          </p>
        </div>
      </section>

      {/* Grid de servicios */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className={`p-8 rounded-xl border card-hover relative ${service.featured ? 'md:col-span-2' : ''}`}
              style={{
                background: service.featured ? 'var(--accent-glow)' : 'var(--surface)',
                borderColor: service.featured ? 'rgba(34, 197, 94, 0.3)' : 'var(--border)',
              }}
            >
              {service.featured && (
                <span
                  className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full font-medium"
                  style={{ background: 'var(--accent)', color: '#000' }}
                >
                  Mejor valor
                </span>
              )}
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                style={{ background: service.featured ? 'rgba(34, 197, 94, 0.2)' : 'var(--accent-glow)', color: 'var(--accent)' }}
              >
                {service.icon}
              </div>
              <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{service.title}</h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>{service.description}</p>
              <ul className={`space-y-2 ${service.featured ? 'grid grid-cols-1 md:grid-cols-2 gap-2 space-y-0' : ''}`}>
                {service.includes.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ color: 'var(--accent)', flexShrink: 0 }}>
                      <path d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* IA Section */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="rounded-2xl border overflow-hidden" style={{ borderColor: 'rgba(34, 197, 94, 0.2)' }}>
          <div className="p-8 md:p-12" style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.05) 0%, var(--surface) 60%)' }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs px-3 py-1 rounded-full font-semibold tracking-wider" style={{ background: 'var(--accent)', color: '#000' }}>
                NUEVO
              </span>
              <p className="text-sm font-medium" style={{ color: 'var(--accent)' }}>Servicios con Inteligencia Artificial</p>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
              Tu negocio que trabaja solo, mientras vos atendés a los clientes
            </h2>
            <p className="text-base mb-10 max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
              Integramos herramientas de IA en tu negocio para automatizar consultas, generar contenido y convertir más visitantes en reservas — sin que tengas que aprender nada técnico.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {aiServices.map((s) => (
                <div
                  key={s.title}
                  className="p-6 rounded-xl border card-hover"
                  style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
                >
                  <span className="text-xs px-2 py-0.5 rounded font-medium mb-4 inline-block" style={{ background: 'rgba(34,197,94,0.1)', color: 'var(--accent)' }}>
                    {s.tag}
                  </span>
                  <h3 className="font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="mb-16">
          <p className="text-sm font-medium tracking-wider uppercase mb-3" style={{ color: 'var(--accent)' }}>FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>Preguntas frecuentes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            { q: 'Cuanto cuesta un sitio web?', a: 'Depende del alcance. Una landing simple arranca desde USD 300. Un sitio con reservas desde USD 800. Siempre damos presupuesto antes de empezar.' },
            { q: 'Cuanto tiempo tarda?', a: 'Una landing page: 5-7 dias. Un sitio completo: 2-4 semanas. Un pack completo: 4-6 semanas. Depende de la complejidad y la rapidez del feedback.' },
            { q: 'Trabajan solo con turismo?', a: 'Es nuestro fuerte, pero trabajamos con cualquier negocio que necesite presencia digital. Si tenes un emprendimiento, hablemos.' },
            { q: 'Que pasa despues de la entrega?', a: 'Incluimos capacitacion para que manejes todo. Y si necesitas soporte continuo, ofrecemos planes mensuales accesibles.' },
          ].map((faq) => (
            <div
              key={faq.q}
              className="p-6 rounded-xl border"
              style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
            >
              <h3 className="font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{faq.q}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div
          className="rounded-2xl p-12 md:p-16 text-center gradient-border"
          style={{ background: 'var(--surface)' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            No encontras lo que buscas?
          </h2>
          <p className="text-lg mb-8 max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Contanos tu proyecto y armamos una propuesta a medida. Sin moldes, sin compromiso.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200 glow-accent"
            style={{ background: 'var(--accent)', color: '#000' }}
          >
            Consulta gratis →
          </Link>
        </div>
      </section>
    </div>
  )
}
