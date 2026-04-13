import Link from 'next/link'

const results = [
  { number: '5+', label: 'años trabajando con negocios turísticos' },
  { number: '30+', label: 'proyectos entregados' },
  { number: '3x', label: 'promedio de aumento en consultas online' },
]

const problems = [
  {
    problem: '"Tengo un negocio increíble pero nadie me encuentra"',
    solution: 'Sitio web optimizado + SEO local para aparecer cuando tu cliente ideal busca lo que vos ofrecés.',
  },
  {
    problem: '"Mis reservas dependen del boca a boca"',
    solution: 'Sistema de reservas online que trabaja 24/7, con confirmación automática y recordatorios.',
  },
  {
    problem: '"No tengo tiempo para manejar las redes sociales"',
    solution: 'Gestionamos tu contenido mensual: estrategia, diseño y publicación. Vos te enfocás en el negocio.',
  },
  {
    problem: '"Mi marca no transmite lo que somos"',
    solution: 'Identidad visual profesional que conecta con el viajero moderno y te diferencia de la competencia.',
  },
]

export default function SobreMi() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <p className="text-sm font-medium tracking-wider uppercase mb-4" style={{ color: 'var(--accent)' }}>Quiénes somos</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ color: 'var(--text-primary)' }}>
              Conocemos tu negocio<br />
              <span style={{ color: 'var(--accent)' }}>porque vivimos en él</span>
            </h1>
            <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
              En 2024 nos mudamos a un pueblo costero en Costa Rica. Cafés de playa, cabañas escondidas, tours increíbles — negocios con alma que nadie encontraba online.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Ahí nació Clover como hoy lo conocés: marketing digital y desarrollo web pensado específicamente para negocios turísticos. No hacemos "páginas web genéricas". Hacemos herramientas que llenan calendarios.
            </p>
          </div>

          {/* Visual */}
          <div className="animate-fade-in-delay-1">
            <svg viewBox="0 0 400 320" fill="none" className="w-full h-auto">
              {/* Map/location illustration */}
              <rect width="400" height="320" rx="16" fill="#131316" />

              {/* Map background */}
              <rect x="20" y="20" width="360" height="280" rx="12" fill="#0F0F12" />

              {/* Map paths - abstract roads */}
              <path d="M80 160 Q150 100 200 160 Q250 220 320 160" stroke="#27272A" strokeWidth="8" strokeLinecap="round" fill="none" />
              <path d="M60 220 L180 220" stroke="#27272A" strokeWidth="5" strokeLinecap="round" />
              <path d="M220 220 L340 220" stroke="#27272A" strokeWidth="5" strokeLinecap="round" />
              <path d="M200 60 L200 280" stroke="#27272A" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 6" />

              {/* Location pins */}
              {/* Argentina */}
              <g transform="translate(100, 200)">
                <circle cx="0" cy="0" r="14" fill="#22C55E" opacity="0.15" />
                <circle cx="0" cy="0" r="8" fill="#22C55E" opacity="0.3" />
                <circle cx="0" cy="0" r="4" fill="#22C55E" />
                <text x="16" y="5" fill="#A1A1AA" fontSize="9" fontFamily="system-ui">Argentina</text>
              </g>

              {/* Costa Rica */}
              <g transform="translate(270, 140)">
                <circle cx="0" cy="0" r="14" fill="#22C55E" opacity="0.15" />
                <circle cx="0" cy="0" r="8" fill="#22C55E" opacity="0.3" />
                <circle cx="0" cy="0" r="4" fill="#22C55E" />
                <text x="16" y="5" fill="#A1A1AA" fontSize="9" fontFamily="system-ui">Costa Rica</text>
              </g>

              {/* Connection line */}
              <path d="M100 200 Q180 120 270 140" stroke="#22C55E" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.4" />

              {/* Globe icon center */}
              <g transform="translate(195, 145)">
                <circle cx="0" cy="0" r="22" fill="#1A1A1F" stroke="#27272A" strokeWidth="1" />
                <circle cx="0" cy="0" r="14" stroke="#22C55E" strokeWidth="1" opacity="0.3" />
                <path d="M-14 0 Q0 -8 14 0 Q0 8 -14 0" stroke="#22C55E" strokeWidth="1" opacity="0.3" fill="none" />
                <line x1="-14" y1="0" x2="14" y2="0" stroke="#22C55E" strokeWidth="1" opacity="0.2" />
                <line x1="0" y1="-14" x2="0" y2="14" stroke="#22C55E" strokeWidth="1" opacity="0.2" />
              </g>

              {/* Client cards */}
              <g transform="translate(30, 60)">
                <rect width="110" height="55" rx="8" fill="#1A1A1F" stroke="#27272A" strokeWidth="1" />
                <text x="12" y="22" fill="#A1A1AA" fontSize="8" fontFamily="system-ui">Hotel Las Olas</text>
                <text x="12" y="38" fill="#22C55E" fontSize="11" fontWeight="bold" fontFamily="system-ui">+180% reservas</text>
              </g>

              <g transform="translate(258, 230)">
                <rect width="115" height="55" rx="8" fill="#1A1A1F" stroke="#27272A" strokeWidth="1" />
                <text x="12" y="22" fill="#A1A1AA" fontSize="8" fontFamily="system-ui">Tour Aventura CR</text>
                <text x="12" y="38" fill="#22C55E" fontSize="11" fontWeight="bold" fontFamily="system-ui">x3 consultas web</text>
              </g>

              {/* Remote work indicator */}
              <g transform="translate(30, 258)">
                <rect width="130" height="34" rx="6" fill="#22C55E" opacity="0.1" />
                <circle cx="17" cy="17" r="5" fill="#22C55E" />
                <text x="28" y="21" fill="#22C55E" fontSize="9" fontFamily="system-ui" fontWeight="500">Trabajo 100% remoto</text>
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="border-y" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-3 gap-8">
            {results.map((r) => (
              <div key={r.label} className="text-center">
                <p className="text-4xl font-bold mb-2" style={{ color: 'var(--accent)' }}>{r.number}</p>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problemas que resolvemos */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-16">
          <p className="text-sm font-medium tracking-wider uppercase mb-3" style={{ color: 'var(--accent)' }}>Lo que escuchamos seguido</p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
            ¿Te identificás con alguno de estos?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {problems.map((p) => (
            <div
              key={p.problem}
              className="p-8 rounded-xl border card-hover"
              style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
            >
              <p className="text-base font-medium mb-4 italic" style={{ color: 'var(--text-primary)' }}>
                {p.problem}
              </p>
              <div className="flex items-start gap-3">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 2 }}>
                  <path d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{p.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Por qué nosotros */}
      <section className="max-w-6xl mx-auto px-6 py-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-medium tracking-wider uppercase mb-3" style={{ color: 'var(--accent)' }}>La diferencia</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>
              No somos una agencia más
            </h2>
            <div className="space-y-6">
              {[
                { title: 'Entendemos el turismo desde adentro', desc: 'Vivimos en destinos turísticos. Sabemos que un hotel boutique tiene necesidades distintas a una cadena, y que un operador de tours necesita algo diferente a un restaurante de playa.' },
                { title: 'Marketing Y tecnología en un solo equipo', desc: 'No tenés que coordinar una agencia de marketing con un desarrollador separado. Nosotros pensamos la estrategia y construimos las herramientas en un flujo continuo.' },
                { title: 'Resultados medibles, no promesas vagas', desc: 'Cada proyecto tiene objetivos claros: más reservas, más consultas, más visibilidad. Definimos métricas antes de empezar y las seguimos juntos.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-2 h-2 rounded-full mt-2.5 shrink-0" style={{ background: 'var(--accent)' }} />
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process illustration */}
          <svg viewBox="0 0 360 300" fill="none" className="w-full h-auto">
            <rect width="360" height="300" rx="16" fill="#131316" />

            {/* Step 1 */}
            <g transform="translate(30, 40)">
              <circle cx="20" cy="20" r="20" fill="#22C55E" opacity="0.15" />
              <circle cx="20" cy="20" r="12" fill="#22C55E" opacity="0.2" />
              <text x="15" y="25" fill="#22C55E" fontSize="12" fontWeight="bold">1</text>
              <text x="48" y="15" fill="#FAFAFA" fontSize="11" fontWeight="600" fontFamily="system-ui">Entendemos tu negocio</text>
              <text x="48" y="29" fill="#A1A1AA" fontSize="9" fontFamily="system-ui">Reunión inicial, sin costo</text>
            </g>
            <line x1="50" y1="80" x2="50" y2="110" stroke="#27272A" strokeWidth="1.5" strokeDasharray="4 3" />

            {/* Step 2 */}
            <g transform="translate(30, 110)">
              <circle cx="20" cy="20" r="20" fill="#22C55E" opacity="0.15" />
              <circle cx="20" cy="20" r="12" fill="#22C55E" opacity="0.2" />
              <text x="15" y="25" fill="#22C55E" fontSize="12" fontWeight="bold">2</text>
              <text x="48" y="15" fill="#FAFAFA" fontSize="11" fontWeight="600" fontFamily="system-ui">Propuesta a medida</text>
              <text x="48" y="29" fill="#A1A1AA" fontSize="9" fontFamily="system-ui">Timeline y presupuesto claro</text>
            </g>
            <line x1="50" y1="150" x2="50" y2="180" stroke="#27272A" strokeWidth="1.5" strokeDasharray="4 3" />

            {/* Step 3 */}
            <g transform="translate(30, 180)">
              <circle cx="20" cy="20" r="20" fill="#22C55E" opacity="0.15" />
              <circle cx="20" cy="20" r="12" fill="#22C55E" opacity="0.2" />
              <text x="15" y="25" fill="#22C55E" fontSize="12" fontWeight="bold">3</text>
              <text x="48" y="15" fill="#FAFAFA" fontSize="11" fontWeight="600" fontFamily="system-ui">Construimos y entregamos</text>
              <text x="48" y="29" fill="#A1A1AA" fontSize="9" fontFamily="system-ui">Con capacitación incluida</text>
            </g>
            <line x1="50" y1="220" x2="50" y2="250" stroke="#27272A" strokeWidth="1.5" strokeDasharray="4 3" />

            {/* Step 4 */}
            <g transform="translate(30, 250)">
              <circle cx="20" cy="20" r="20" fill="#22C55E" opacity="0.25" />
              <circle cx="20" cy="20" r="12" fill="#22C55E" opacity="0.4" />
              <svg x="10" y="10" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2">
                <path d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <text x="48" y="15" fill="#FAFAFA" fontSize="11" fontWeight="600" fontFamily="system-ui">Tu negocio crece online</text>
              <text x="48" y="29" fill="#22C55E" fontSize="9" fontFamily="system-ui">Más reservas, más clientes</text>
            </g>

            {/* Decorative right side */}
            <g transform="translate(230, 60)">
              <rect width="100" height="180" rx="10" fill="#1A1A1F" stroke="#27272A" strokeWidth="1" />
              <rect x="10" y="15" width="80" height="40" rx="6" fill="#131316" />
              <rect x="18" y="24" width="45" height="6" rx="2" fill="#27272A" />
              <rect x="18" y="34" width="60" height="4" rx="1" fill="#27272A" />
              <rect x="18" y="42" width="35" height="4" rx="1" fill="#27272A" />
              <rect x="10" y="65" width="80" height="28" rx="6" fill="#22C55E" opacity="0.08" stroke="#22C55E" strokeWidth="0.5" strokeOpacity="0.3" />
              <text x="22" y="82" fill="#22C55E" fontSize="9" fontFamily="system-ui">+248 reservas este mes</text>
              <rect x="10" y="103" width="80" height="20" rx="4" fill="#131316" />
              <rect x="18" y="110" width="50" height="4" rx="1" fill="#27272A" />
              <rect x="10" y="133" width="80" height="20" rx="4" fill="#131316" />
              <rect x="18" y="140" width="40" height="4" rx="1" fill="#27272A" />
              <rect x="10" y="153" width="80" height="18" rx="4" fill="#22C55E" />
              <text x="28" y="165" fill="#000" fontSize="8" fontWeight="bold">Ver reporte</text>
            </g>
          </svg>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div
          className="rounded-2xl p-12 md:p-16 text-center gradient-border"
          style={{ background: 'var(--surface)' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Tu negocio merece estar<br />en el mapa digital
          </h2>
          <p className="text-lg mb-8 max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Primera consulta sin costo. Contanos tu situación y te decimos qué haríamos y cuánto costaría.
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
