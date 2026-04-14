import Link from 'next/link'
import Image from 'next/image'
import { HeroIllustration } from '@/components/Icons'

const stats = [
  { number: '5+', label: 'Años de experiencia' },
  { number: '30+', label: 'Proyectos entregados' },
  { number: '4', label: 'Países' },
]

const pains = [
  'Publicás en redes pero no genera ventas reales',
  'Tu web está desactualizada — o simplemente no existe',
  'No aparecés en Google cuando un cliente te busca',
  'Pagás publicidad sin saber qué está funcionando',
  'Tu competencia te está ganando con menos producto',
  'Sentís que tu marca podría dar mucho más',
]

const losses = [
  {
    stat: '93%',
    text: 'de los consumidores busca online antes de tomar una decisión de compra.',
  },
  {
    stat: '0.05s',
    text: 'es lo que tarda un usuario en formarse una opinión de tu sitio web.',
  },
  {
    stat: '75%',
    text: 'juzga la credibilidad de un negocio por su presencia digital.',
  },
]

const pillars = [
  {
    title: 'Marca',
    desc: 'Identidad visual que transmite lo que tu negocio realmente es.',
  },
  {
    title: 'Web',
    desc: 'Un sitio rápido que convierte visitas en clientes reales.',
  },
  {
    title: 'Marketing',
    desc: 'Contenido y estrategia que construyen autoridad y ventas.',
  },
  {
    title: 'IA',
    desc: 'Automatización inteligente que trabaja mientras dormís.',
  },
]

const outcomes = [
  {
    title: 'Un sitio que convierte visitas en clientes',
    description: 'Rápido, optimizado para Google, con sistema de reservas y formularios que capturan leads reales — no visitantes sin rumbo.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
  },
  {
    title: 'Redes que construyen autoridad',
    description: 'Contenido estratégico, diseño profesional y gestión activa. Cada post aporta a tu marca y a tu facturación — no a métricas de vanidad.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: 'Presencia local que te encuentra',
    description: 'Google Maps optimizado, SEO local y gestión de reseñas. Aparecés cuando tu cliente busca — y en los primeros lugares.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: 'Automatización con IA',
    description: 'Chatbots, flujos de WhatsApp y respuestas inteligentes 24/7. Atendés a tus clientes sin estar pegado al celular.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
  },
]

const cornershotServices = [
  'Identidad visual',
  'Redes sociales',
  'Contenido audiovisual',
  'Google Maps',
  'Gestión de eventos',
  'Linktree + landing',
]

const clients = [
  'Hoteles', 'Cabañas', 'Restaurantes', 'Tours', 'Comercios locales', 'Emprendimientos',
]

export default function Home() {
  return (
    <div>
      {/* ============ HERO ============ */}
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

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6" style={{ color: 'var(--text-primary)' }}>
              Tu negocio<br />
              <span style={{ color: 'var(--accent)' }}>vende más online</span><br />
              con el sistema correcto.
            </h1>

            <p className="text-xl leading-relaxed mb-10 max-w-xl" style={{ color: 'var(--text-secondary)' }}>
              Clover combina marca, desarrollo web, marketing digital e IA en un sistema que convierte visitantes en clientes reales — de forma medible y predecible.
            </p>

            <div className="flex flex-wrap gap-4 mb-14">
              <Link
                href="/contacto"
                className="px-7 py-3.5 rounded-lg font-medium transition-all duration-200 glow-accent"
                style={{ background: 'var(--accent)', color: '#000' }}
              >
                Quiero crecer online
              </Link>
              <Link
                href="#caso"
                className="px-7 py-3.5 rounded-lg font-medium transition-colors duration-200 border"
                style={{ color: 'var(--text-primary)', borderColor: 'var(--border)' }}
              >
                Ver caso real
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

      {/* ============ CLIENTS STRIP ============ */}
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

      {/* ============ PROBLEMA ============ */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-3xl mb-14">
          <p className="text-sm font-medium tracking-wider uppercase mb-3" style={{ color: 'var(--accent)' }}>El problema</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-5 leading-tight" style={{ color: 'var(--text-primary)' }}>
            ¿Te suena familiar?
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            Estos son los síntomas de un negocio con potencial pero sin sistema digital. Si uno solo te resuena, probablemente estés perdiendo clientes sin saberlo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pains.map((pain) => (
            <div
              key={pain}
              className="p-6 rounded-xl border flex items-start gap-4"
              style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: 'rgba(239, 68, 68, 0.1)' }}
              >
                <svg width="16" height="16" fill="none" stroke="#EF4444" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <span className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{pain}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ============ AGITACIÓN ============ */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div
          className="rounded-2xl p-10 md:p-14 border"
          style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
        >
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-medium tracking-wider uppercase mb-3" style={{ color: '#EF4444' }}>Cada día que pasa</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Sin un sistema digital,<br />estás perdiendo oportunidades sin darte cuenta.
            </h2>
            <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
              Mientras decidís, tu competencia captura a los clientes que deberían ser tuyos. Y no hace falta que sean mejores — solo que estén mejor preparados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {losses.map((loss) => (
              <div
                key={loss.stat}
                className="p-6 rounded-xl border"
                style={{ background: 'var(--bg, #0A0A0B)', borderColor: 'var(--border)' }}
              >
                <p className="text-4xl md:text-5xl font-bold mb-3" style={{ color: 'var(--accent)' }}>{loss.stat}</p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{loss.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SOLUCIÓN ============ */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm font-medium tracking-wider uppercase mb-3" style={{ color: 'var(--accent)' }}>La solución</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-5 leading-tight" style={{ color: 'var(--text-primary)' }}>
            Acá entra Clover.
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            No una agencia más. Un sistema de crecimiento con 4 piezas conectadas que trabajan juntas para hacer crecer tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="p-6 rounded-xl border text-center card-hover"
              style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-4 font-bold text-lg"
                style={{ background: 'var(--accent-glow)', color: 'var(--accent)' }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{pillar.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{pillar.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/sobre-mi"
            className="text-sm transition-colors inline-flex items-center gap-2 hover:gap-3"
            style={{ color: 'var(--accent)' }}
          >
            Conocer el sistema completo →
          </Link>
        </div>
      </section>

      {/* ============ RESULTADOS / SERVICIOS ============ */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
          <div className="max-w-2xl">
            <p className="text-sm font-medium tracking-wider uppercase mb-3" style={{ color: 'var(--accent)' }}>Qué obtenés</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              No servicios sueltos.<br />Resultados concretos y conectados.
            </h2>
          </div>
          <Link href="/servicios" className="text-sm transition-colors" style={{ color: 'var(--text-secondary)' }}>
            Ver todos los servicios →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {outcomes.map((item) => (
            <div
              key={item.title}
              className="p-8 rounded-xl border card-hover"
              style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                style={{ background: 'var(--accent-glow)', color: 'var(--accent)' }}
              >
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ CASO CORNERSHOT ============ */}
      <section id="caso" className="max-w-6xl mx-auto px-6 py-24">
        {/* Header del caso */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-3 mb-5 flex-wrap">
            <span className="text-xs font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full" style={{ background: 'var(--accent-glow)', color: 'var(--accent)' }}>
              Caso real
            </span>
            <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Costa Rica · Feb–Abr 2025</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-5 leading-[1.1]" style={{ color: 'var(--text-primary)' }}>
            <span style={{ color: 'var(--accent)' }}>80.800 visualizaciones</span> en 3 meses.<br />
            Y lo que pasó cuando dejaron el sistema.
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            Cornershot — bar-restaurante en Playa Sámara, Costa Rica.
          </p>
        </div>

        {/* Bloque principal */}
        <div
          className="rounded-2xl overflow-hidden border gradient-border mb-10"
          style={{ background: 'var(--surface)' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Imágenes reales */}
            <div className="p-6 md:p-8 flex items-center" style={{ background: 'var(--bg, #0A0A0B)' }}>
              <div className="grid grid-cols-2 gap-3 w-full">
                <div className="col-span-2 relative rounded-lg overflow-hidden border" style={{ borderColor: 'var(--border)', aspectRatio: '16/10' }}>
                  <Image
                    src="/cornershot/stats-1.png"
                    alt="Estadísticas de Cornershot gestionado por Clover: contenido destacado con miles de visualizaciones"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative rounded-lg overflow-hidden border" style={{ borderColor: 'var(--border)', aspectRatio: '1/1' }}>
                  <Image
                    src="/cornershot/post-inauguracion.png"
                    alt="Post de inauguración de Cornershot: 11.707 visualizaciones"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative rounded-lg overflow-hidden border" style={{ borderColor: 'var(--border)', aspectRatio: '1/1' }}>
                  <Image
                    src="/cornershot/post-primera.png"
                    alt="Post de apertura de Cornershot: 5.301 visualizaciones"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Contenido */}
            <div className="p-10 md:p-12">
              <p className="text-base leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
                Cornershot abrió sus puertas en <strong style={{ color: 'var(--text-primary)' }}>mitad de temporada alta</strong>. No había tiempo para prueba y error — necesitaban presencia digital funcionando desde el día uno.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
                Construimos todo desde cero: marca, redes, contenido, Google Maps, eventos, estrategia. El resultado: el local se convirtió en referente de la zona en semanas.
              </p>

              {/* Servicios aplicados */}
              <div className="mb-8">
                <p className="text-xs font-semibold tracking-wider uppercase mb-3" style={{ color: 'var(--text-muted)' }}>Lo que hicimos</p>
                <div className="flex flex-wrap gap-2">
                  {cornershotServices.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-3 py-1.5 rounded-full border"
                      style={{ color: 'var(--text-secondary)', borderColor: 'var(--border)', background: 'var(--bg, #0A0A0B)' }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Resultados con Clover */}
              <div className="grid grid-cols-3 gap-4 pt-6" style={{ borderTop: '1px solid var(--border)' }}>
                <div>
                  <p className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--accent)' }}>80,8K</p>
                  <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>Visualizaciones en 3 meses</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--accent)' }}>1.334</p>
                  <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>Interacciones generadas</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--accent)' }}>+3.800%</p>
                  <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>Contenido publicado</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparativa ANTES/DESPUÉS — prueba contundente */}
        <div
          className="rounded-2xl p-8 md:p-12 border relative overflow-hidden"
          style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
        >
          <div className="max-w-3xl mb-10">
            <p className="text-sm font-medium tracking-wider uppercase mb-3" style={{ color: '#EF4444' }}>La prueba</p>
            <h3 className="text-2xl md:text-4xl font-bold mb-4 leading-tight" style={{ color: 'var(--text-primary)' }}>
              Y cuando el sistema dejó de funcionar...
            </h3>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Las mismas estadísticas de Cornershot muestran qué pasó cuando dejaron de trabajar con nosotros. Con la base de seguidores ya creada, sin estrategia ni sistema, los resultados cayeron en picada.
            </p>
          </div>

          {/* Tabla comparativa visual */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {/* Con Clover */}
            <div
              className="p-6 rounded-xl border"
              style={{ background: 'var(--bg, #0A0A0B)', borderColor: 'rgba(34,197,94,0.3)' }}
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="w-2 h-2 rounded-full" style={{ background: 'var(--accent)' }} />
                <p className="text-sm font-semibold" style={{ color: 'var(--accent)' }}>Con Clover (Feb–Abr 2025)</p>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Visualizaciones', value: '80.800' },
                  { label: 'Interacciones', value: '1.334' },
                  { label: 'Reproducciones de 3s', value: '16.400' },
                  { label: 'Reproducciones de 1min', value: '213' },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between items-baseline">
                    <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{row.label}</span>
                    <span className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sin Clover */}
            <div
              className="p-6 rounded-xl border"
              style={{ background: 'var(--bg, #0A0A0B)', borderColor: 'rgba(239,68,68,0.3)' }}
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="w-2 h-2 rounded-full" style={{ background: '#EF4444' }} />
                <p className="text-sm font-semibold" style={{ color: '#EF4444' }}>Sin Clover (Ene–Abr 2026)</p>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Visualizaciones', value: '4.956', drop: '-97%' },
                  { label: 'Interacciones', value: '51', drop: '-97,2%' },
                  { label: 'Reproducciones de 3s', value: '1.365', drop: '-94,2%' },
                  { label: 'Reproducciones de 1min', value: '4', drop: '-98,2%' },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between items-baseline">
                    <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{row.label}</span>
                    <div className="text-right">
                      <span className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>{row.value}</span>
                      <span className="text-xs ml-2 font-semibold" style={{ color: '#EF4444' }}>{row.drop}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Capturas de respaldo - prueba visual */}
          <div>
            <p className="text-xs font-semibold tracking-wider uppercase mb-4" style={{ color: 'var(--text-muted)' }}>Capturas directas de las estadísticas de Cornershot</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { src: '/cornershot/con-clover-1.png', alt: 'Estadísticas con Clover — resumen general', label: 'Con Clover' },
                { src: '/cornershot/con-clover-2.png', alt: 'Estadísticas con Clover — formatos y contenido', label: 'Con Clover' },
                { src: '/cornershot/sin-clover-1.png', alt: 'Estadísticas sin Clover — caída del 97%', label: 'Sin Clover' },
                { src: '/cornershot/sin-clover-2.png', alt: 'Estadísticas sin Clover — formatos caídos', label: 'Sin Clover' },
              ].map((img, i) => (
                <div
                  key={i}
                  className="relative rounded-lg overflow-hidden border"
                  style={{
                    borderColor: img.label === 'Con Clover' ? 'rgba(34,197,94,0.25)' : 'rgba(239,68,68,0.25)',
                    aspectRatio: '16/10',
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <p className="text-sm mt-8 text-center italic" style={{ color: 'var(--text-muted)' }}>
            Los números no mienten. Un sistema que deja de funcionar deja de dar resultados.
          </p>
        </div>
      </section>

      {/* ============ CTA INTERMEDIA ============ */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div
          className="rounded-xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border"
          style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
        >
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
              ¿Listo para dejar de adivinar?
            </h3>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              Empezamos con una primera consulta sin costo, sin compromiso.
            </p>
          </div>
          <Link
            href="/contacto"
            className="px-6 py-3 rounded-lg font-medium transition-all duration-200 whitespace-nowrap"
            style={{ background: 'var(--accent)', color: '#000' }}
          >
            Empezar proyecto →
          </Link>
        </div>
      </section>

      {/* ============ PROCESO ============ */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-wider uppercase mb-3" style={{ color: 'var(--accent)' }}>Proceso</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Simple, directo, sin vueltas.
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Sabés exactamente qué va a pasar, cuándo, y cómo se mide. Sin letra chica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: '01', title: 'Diagnóstico', desc: 'Analizamos tu negocio, tus clientes y tu competencia. Detectamos dónde se pierde el valor y dónde están las oportunidades reales.' },
            { step: '02', title: 'Estrategia + ejecución', desc: 'Proponemos un plan a medida con objetivos claros y presupuesto transparente. Aprobás, ejecutamos, medimos.' },
            { step: '03', title: 'Sistema que escala', desc: 'Entregamos todo funcionando y te enseñamos a usarlo. Soporte incluido. El sistema trabaja aunque vos no estés.' },
          ].map((item) => (
            <div key={item.step} className="relative">
              <span className="text-6xl font-bold" style={{ color: 'var(--accent-glow)' }}>{item.step}</span>
              <h3 className="text-xl font-semibold mt-4 mb-3" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ CIERRE EMOCIONAL ============ */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div
          className="rounded-2xl p-12 md:p-20 text-center gradient-border relative overflow-hidden"
          style={{ background: 'var(--surface)' }}
        >
          <p className="text-sm font-medium tracking-wider uppercase mb-6" style={{ color: 'var(--accent)' }}>El momento es ahora</p>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-[1.1]" style={{ color: 'var(--text-primary)' }}>
            Tu próximo cliente<br />está buscando <span style={{ color: 'var(--accent)' }}>ahora mismo.</span>
          </h2>

          <p className="text-xl mb-10 max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            ¿Te va a encontrar a vos, o a tu competencia?
          </p>

          <Link
            href="/contacto"
            className="inline-flex items-center px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200 glow-accent"
            style={{ background: 'var(--accent)', color: '#000' }}
          >
            Hablemos →
          </Link>

          <p className="text-sm mt-6" style={{ color: 'var(--text-muted)' }}>
            Primera consulta sin costo · Sin compromiso
          </p>
        </div>
      </section>
    </div>
  )
}
