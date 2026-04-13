import Link from 'next/link'

const timeline = [
  {
    year: '2019',
    title: 'Clover nace en Argentina',
    desc: 'Arrancamos como agencia de marketing digital trabajando con comercios locales y emprendimientos.',
  },
  {
    year: '2021',
    title: 'Costa Rica — el nicho turistico',
    desc: 'Nos mudamos a un pueblo costero y descubrimos el potencial: negocios turisticos increibles con cero presencia digital.',
  },
  {
    year: '2023',
    title: 'Marketing + Desarrollo',
    desc: 'Sumamos desarrollo web al servicio. Ya no solo gestionamos redes: construimos las plataformas donde los clientes reservan y compran.',
  },
  {
    year: 'Hoy',
    title: 'Trabajo remoto, alcance global',
    desc: 'Operamos 100% remoto. Atendemos clientes en Latinoamerica y Europa, especializados en turismo y hospitalidad.',
  },
]

const values = [
  {
    title: 'Entendemos el negocio',
    desc: 'No somos devs que hacen sitios bonitos. Venimos del marketing y las ventas. Cada decision tecnica tiene un objetivo de negocio detras.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Conocemos el nicho',
    desc: 'Vivimos en destinos turisticos. Conocemos los desafios de un hotel boutique, un restaurante de playa o un operador de tours desde adentro.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438a2.25 2.25 0 01-1.228 2.351l-.8.4" />
      </svg>
    ),
  },
  {
    title: 'Resultados, no adornos',
    desc: 'No vendemos tecnologia por moda. Si algo no va a generar mas reservas, mas consultas o mas ventas, no lo proponemos.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'Comunicacion directa',
    desc: 'Nada de tickets de soporte o chatbots. Hablas directo con quien hace tu proyecto. Respuesta rapida, sin burocracia.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
]

const skills = [
  { category: 'Desarrollo', items: ['Next.js', 'TypeScript', 'WordPress', 'HTML/CSS', 'Sistemas de reservas'] },
  { category: 'Marketing', items: ['Meta Ads', 'Google Ads', 'SEO', 'Email Marketing', 'Copywriting'] },
  { category: 'Diseno', items: ['Illustrator', 'Photoshop', 'Canva', 'Edicion de video', 'Branding'] },
]

export default function SobreMi() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-16">
        <div className="max-w-3xl animate-fade-in">
          <p className="text-sm font-medium tracking-wider uppercase mb-4" style={{ color: 'var(--accent)' }}>Sobre Clover</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ color: 'var(--text-primary)' }}>
            Marketing y desarrollo web<br />
            <span style={{ color: 'var(--accent)' }}>para negocios turisticos</span>
          </h1>
          <p className="text-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Nacimos de una necesidad real: negocios increibles que nadie encuentra online. Combinamos anos de experiencia en marketing digital con desarrollo web para resolver eso.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          {timeline.map((item, i) => (
            <div key={item.year} className="flex gap-8 pb-12 last:pb-0">
              <div className="flex flex-col items-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                  style={{ background: 'var(--accent-glow)', color: 'var(--accent)', border: '1px solid rgba(34, 197, 94, 0.3)' }}
                >
                  {item.year === 'Hoy' ? (
                    <span className="w-3 h-3 rounded-full animate-pulse" style={{ background: 'var(--accent)' }} />
                  ) : (
                    <span className="text-xs">{item.year}</span>
                  )}
                </div>
                {i < timeline.length - 1 && (
                  <div className="w-px flex-1 mt-3" style={{ background: 'var(--border)' }} />
                )}
              </div>
              <div className="pt-2">
                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-16">
          <p className="text-sm font-medium tracking-wider uppercase mb-3" style={{ color: 'var(--accent)' }}>Por que Clover</p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Lo que nos diferencia
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {values.map((value) => (
            <div
              key={value.title}
              className="p-8 rounded-xl border card-hover"
              style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                style={{ background: 'var(--accent-glow)', color: 'var(--accent)' }}
              >
                {value.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{value.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-16">
          <p className="text-sm font-medium tracking-wider uppercase mb-3" style={{ color: 'var(--accent)' }}>Herramientas</p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Con que trabajamos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {skills.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-xl border"
              style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
            >
              <h3 className="text-sm font-semibold tracking-wider uppercase mb-5" style={{ color: 'var(--accent)' }}>
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1.5 rounded-lg border"
                    style={{ color: 'var(--text-secondary)', borderColor: 'var(--border)', background: 'var(--bg)' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
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
            Tenemos la experiencia.<br />Falta tu proyecto.
          </h2>
          <p className="text-lg mb-8 max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Contanos que necesitas y te armamos una propuesta a medida.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200 glow-accent"
            style={{ background: 'var(--accent)', color: '#000' }}
          >
            Hablemos →
          </Link>
        </div>
      </section>
    </div>
  )
}
