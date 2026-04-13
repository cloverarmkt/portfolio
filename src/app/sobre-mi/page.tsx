import Link from 'next/link'

const notThis = [
  'Posteos por postear',
  'Páginas web genéricas',
  'Reportes vacíos',
  'Promesas sin métricas',
]

const butThis = [
  'Estrategia con objetivo claro',
  'Ecosistemas digitales que convierten',
  'Resultados medibles desde el día uno',
  'IA aplicada como ventaja real',
]

export default function SobreMi() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-20">
        <div className="max-w-3xl animate-fade-in">
          <p className="text-sm font-medium tracking-wider uppercase mb-6" style={{ color: 'var(--accent)' }}>Quiénes somos</p>

          <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] mb-8" style={{ color: 'var(--text-primary)' }}>
            Clover no es<br />
            una agencia.<br />
            <span style={{ color: 'var(--accent)' }}>Es un sistema<br />de crecimiento.</span>
          </h1>

          <p className="text-xl leading-relaxed max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
            Trabajamos con negocios que ya tienen algo valioso — un buen producto, un buen servicio — pero necesitan estructura, claridad y estrategia para crecer de verdad.
          </p>
        </div>
      </section>

      {/* La diferencia */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* No vendemos */}
          <div
            className="p-8 rounded-xl border"
            style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
          >
            <p className="text-sm font-semibold tracking-wider uppercase mb-6" style={{ color: 'var(--text-muted)' }}>No vendemos</p>
            <div className="space-y-3">
              {notThis.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ color: '#EF4444', flexShrink: 0 }}>
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Diseñamos */}
          <div
            className="p-8 rounded-xl border gradient-border"
            style={{ background: 'var(--surface)' }}
          >
            <p className="text-sm font-semibold tracking-wider uppercase mb-6" style={{ color: 'var(--accent)' }}>Diseñamos</p>
            <div className="space-y-3">
              {butThis.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ color: 'var(--accent)', flexShrink: 0 }}>
                    <path d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-sm" style={{ color: 'var(--text-primary)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cómo trabajamos */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm font-medium tracking-wider uppercase mb-4" style={{ color: 'var(--accent)' }}>Cómo trabajamos</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>
              Analizamos el todo.<br />Construimos el sistema.
            </h2>

            <div className="space-y-8">
              {[
                {
                  step: '01',
                  title: 'Diagnóstico real',
                  desc: 'Analizamos tu oferta, comunicación, procesos y puntos de contacto. Detectamos dónde se pierde el valor y dónde están las oportunidades.',
                },
                {
                  step: '02',
                  title: 'Estrategia + ejecución',
                  desc: 'Contenido, embudos, automatizaciones, IA y desarrollo web. Todo alineado a un objetivo concreto — no a métricas de vanidad.',
                },
                {
                  step: '03',
                  title: 'Ecosistema que escala',
                  desc: 'Construimos para que tu negocio trabaje solo. Herramientas que convierten, automatizan y escalan sin aumentar la complejidad.',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <span className="text-3xl font-bold leading-none pt-1" style={{ color: 'rgba(34,197,94,0.2)', minWidth: 40 }}>
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <svg viewBox="0 0 360 400" fill="none" className="w-full h-auto">
            <rect width="360" height="400" rx="16" fill="#131316" />

            {/* Central system diagram */}
            <circle cx="180" cy="180" r="60" stroke="#22C55E" strokeWidth="0.5" strokeDasharray="5 4" opacity="0.3" />
            <circle cx="180" cy="180" r="90" stroke="#22C55E" strokeWidth="0.5" strokeDasharray="8 6" opacity="0.15" />
            <circle cx="180" cy="180" r="120" stroke="#22C55E" strokeWidth="0.5" strokeDasharray="10 8" opacity="0.08" />

            {/* Center */}
            <circle cx="180" cy="180" r="30" fill="#1A1A1F" stroke="#27272A" />
            <text x="167" y="177" fill="#22C55E" fontSize="9" fontWeight="bold" fontFamily="system-ui">CLOVER</text>
            <text x="169" y="190" fill="#A1A1AA" fontSize="7" fontFamily="system-ui">SYSTEM</text>

            {/* Orbiting nodes */}
            {/* Web */}
            <circle cx="180" cy="90" r="22" fill="#1A1A1F" stroke="#27272A" />
            <text x="168" y="87" fill="#FAFAFA" fontSize="7" fontFamily="system-ui">Desarrollo</text>
            <text x="172" y="98" fill="#A1A1AA" fontSize="7" fontFamily="system-ui">Web</text>

            {/* Marketing */}
            <circle cx="270" cy="180" r="22" fill="#1A1A1F" stroke="#27272A" />
            <text x="256" y="177" fill="#FAFAFA" fontSize="7" fontFamily="system-ui">Marketing</text>
            <text x="260" y="188" fill="#A1A1AA" fontSize="7" fontFamily="system-ui">Digital</text>

            {/* AI */}
            <circle cx="180" cy="270" r="22" fill="#1A1A1F" stroke="#22C55E" strokeOpacity="0.4" />
            <text x="173" y="267" fill="#22C55E" fontSize="7" fontFamily="system-ui">IA &amp;</text>
            <text x="165" y="278" fill="#22C55E" fontSize="7" fontFamily="system-ui">Automation</text>

            {/* Brand */}
            <circle cx="90" cy="180" r="22" fill="#1A1A1F" stroke="#27272A" />
            <text x="78" y="177" fill="#FAFAFA" fontSize="7" fontFamily="system-ui">Identidad</text>
            <text x="82" y="188" fill="#A1A1AA" fontSize="7" fontFamily="system-ui">de Marca</text>

            {/* Connector lines */}
            <line x1="180" y1="150" x2="180" y2="112" stroke="#27272A" strokeWidth="1" />
            <line x1="208" y1="172" x2="248" y2="172" stroke="#27272A" strokeWidth="1" />
            <line x1="180" y1="210" x2="180" y2="248" stroke="#22C55E" strokeWidth="1" opacity="0.4" />
            <line x1="152" y1="172" x2="112" y2="172" stroke="#27272A" strokeWidth="1" />

            {/* Bottom badge */}
            <rect x="40" y="330" width="280" height="40" rx="8" fill="#1A1A1F" stroke="#27272A" />
            <circle cx="65" cy="350" r="8" fill="#22C55E" opacity="0.2" />
            <circle cx="65" cy="350" r="4" fill="#22C55E" />
            <text x="82" y="347" fill="#FAFAFA" fontSize="10" fontWeight="600" fontFamily="system-ui">Pocos clientes.</text>
            <text x="82" y="361" fill="#A1A1AA" fontSize="9" fontFamily="system-ui">Involucración total en cada uno.</text>
          </svg>
        </div>
      </section>

      {/* Quote */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div
          className="p-10 md:p-16 rounded-2xl border text-center"
          style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
        >
          <p className="text-2xl md:text-3xl font-medium leading-snug max-w-3xl mx-auto mb-6" style={{ color: 'var(--text-primary)' }}>
            "Si sentís que tu negocio puede dar más,<br />
            <span style={{ color: 'var(--accent)' }}>probablemente tengas razón.</span>"
          </p>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Nuestro trabajo es hacerlo realidad.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div
          className="rounded-2xl p-12 md:p-16 text-center gradient-border"
          style={{ background: 'var(--surface)' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Cada decisión tiene un porqué.<br />Cada acción apunta a crecer.
          </h2>
          <p className="text-lg mb-8 max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Primera consulta sin costo. Sin compromiso.
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
