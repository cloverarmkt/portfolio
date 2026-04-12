import Link from 'next/link'

const services = [
  {
    icon: '🌐',
    title: 'Sitio Web Profesional',
    description: 'Diseño y desarrollo de sitios web completos, modernos y optimizados para móviles. Incluye panel de administración para que puedas actualizar el contenido vos mismo.',
    includes: ['Diseño personalizado', 'Mobile-first', 'Panel CMS', 'SEO básico', 'Dominio y hosting incluidos (1er año)'],
  },
  {
    icon: '📅',
    title: 'Sistema de Reservas / Booking',
    description: 'Integración de sistema de reservas online para cabañas, hoteles, tours y actividades turísticas. Tus clientes reservan desde el sitio, vos gestionás desde el panel.',
    includes: ['Reservas online 24/7', 'Confirmación automática por email', 'Panel de gestión', 'Integración con calendario'],
  },
  {
    icon: '🚀',
    title: 'Landing Page',
    description: 'Página de alta conversión para temporadas, promociones o eventos. Diseñada para que el visitante tome acción rápido.',
    includes: ['Diseño orientado a conversión', 'Integración con WhatsApp', 'Formulario de contacto', 'Entrega en 5-7 días'],
  },
  {
    icon: '📱',
    title: 'Gestión de Redes Sociales',
    description: 'Creación y gestión de contenido para Instagram, Facebook y TikTok. Estrategia, diseño de piezas y publicación constante.',
    includes: ['Estrategia de contenido', '12-20 publicaciones mensuales', 'Diseño de artes', 'Reporte mensual'],
  },
  {
    icon: '🎨',
    title: 'Identidad de Marca',
    description: 'Creación de marca desde cero: nombre, logo, paleta de colores, tipografía y manual de uso. Para negocios que quieren verse profesionales desde el primer día.',
    includes: ['Logo en múltiples formatos', 'Paleta de colores y tipografías', 'Manual de marca', 'Aplicaciones (tarjeta, redes)'],
  },
  {
    icon: '📦',
    title: 'Pack Turístico Completo',
    description: 'Todo en uno. Sitio web + sistema de reservas + redes sociales + marca. El paquete completo para un negocio turístico que quiere digitalizarse de una vez.',
    includes: ['Todo lo de arriba', 'Precio especial por paquete', 'Soporte 3 meses', 'Capacitación incluida'],
    featured: true,
  },
]

export default function Servicios() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="max-w-2xl mb-16">
        <p className="text-sm font-medium mb-3" style={{ color: 'var(--accent)' }}>Lo que ofrezco</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
          Servicios
        </h1>
        <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          Trabajo principalmente con negocios turísticos: hoteles, cabañas, restaurantes, tours y comercios. Si tu negocio necesita presencia digital que realmente funcione, podemos trabajar juntos.
        </p>
      </div>

      {/* Grid de servicios */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
        {services.map((service) => (
          <div
            key={service.title}
            className="p-8 rounded-xl border relative"
            style={{
              background: service.featured ? 'rgba(249,115,22,0.05)' : 'var(--surface)',
              borderColor: service.featured ? 'rgba(249,115,22,0.4)' : 'var(--border)',
            }}
          >
            {service.featured && (
              <span
                className="absolute top-4 right-4 text-xs px-2 py-1 rounded-full font-medium"
                style={{ background: 'var(--accent)', color: '#000' }}
              >
                Más popular
              </span>
            )}
            <span className="text-4xl mb-4 block">{service.icon}</span>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{service.title}</h2>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>{service.description}</p>
            <ul className="space-y-2">
              {service.includes.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--accent)' }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div
        className="rounded-2xl p-12 text-center border"
        style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
      >
        <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
          ¿No encontrás lo que buscás?
        </h2>
        <p className="text-lg mb-8 max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
          Cuéntame tu proyecto y armo una propuesta a medida. Sin moldes.
        </p>
        <Link
          href="/contacto"
          className="inline-flex items-center px-8 py-4 rounded-lg font-medium text-lg"
          style={{ background: 'var(--accent)', color: '#000' }}
        >
          Consultá sin compromiso →
        </Link>
      </div>
    </div>
  )
}
