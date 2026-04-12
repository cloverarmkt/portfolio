import Link from 'next/link'

const skills = [
  { category: 'Desarrollo', items: ['Next.js', 'TypeScript', 'NestJS', 'Angular', 'HTML/CSS'] },
  { category: 'Marketing', items: ['Meta Ads', 'Google Analytics', 'Email Marketing', 'SEO', 'Copywriting'] },
  { category: 'Diseño', items: ['Canva', 'Illustrator', 'Photoshop', 'Edición de video'] },
]

export default function SobreMi() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="max-w-2xl mb-16">
        <p className="text-sm font-medium mb-3" style={{ color: 'var(--accent)' }}>Quién soy</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
          Hola, soy Fed
        </h1>
        <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          Argentino. Nómada digital. Vivo entre aeropuertos, costas y cafeterías con buena WiFi junto a mi novia rumana.
        </p>
      </div>

      {/* Historia */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <div className="space-y-6">
          <div
            className="p-8 rounded-xl border"
            style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
          >
            <h2 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Mi historia</h2>
            <div className="space-y-4 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <p>
                Viví en Costa Rica, en un pueblo costero turístico donde me di cuenta de algo: los mejores negocios locales — restaurantes, complejos de cabañas, tours — tenían poca o nula presencia digital.
              </p>
              <p>
                Empecé ayudándolos: redes sociales, marcas, publicidad. Funcionó. Y ahí entendí que el marketing digital sin desarrollo web tiene un techo.
              </p>
              <p>
                Ahora estoy aprendiendo a programar para romper ese techo. Combinar lo que ya sé vender con la capacidad de construir lo que los clientes necesitan.
              </p>
            </div>
          </div>

          <div
            className="p-8 rounded-xl border"
            style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
          >
            <h2 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Lo que me diferencia</h2>
            <ul className="space-y-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
              <li className="flex items-start gap-3">
                <span style={{ color: 'var(--accent)' }}>→</span>
                <span>No soy solo un dev. Entiendo de marketing, diseño y ventas.</span>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: 'var(--accent)' }}>→</span>
                <span>Viví en el nicho que atiendo. Conozco los negocios turísticos desde adentro.</span>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: 'var(--accent)' }}>→</span>
                <span>Pienso en resultados, no en tecnología por tecnología.</span>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: 'var(--accent)' }}>→</span>
                <span>Trabajo remoto, disponible para clientes en cualquier parte del mundo.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Skills */}
        <div className="space-y-4">
          {skills.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-xl border"
              style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
            >
              <h3 className="text-sm font-semibold mb-4" style={{ color: 'var(--accent)' }}>
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1 rounded-full border"
                    style={{ color: 'var(--text-secondary)', borderColor: 'var(--border)' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* CTA */}
          <Link
            href="/contacto"
            className="flex items-center justify-center gap-2 p-6 rounded-xl border font-medium transition-all"
            style={{ background: 'rgba(249,115,22,0.05)', borderColor: 'rgba(249,115,22,0.3)', color: 'var(--accent)' }}
          >
            ¿Trabajamos juntos? →
          </Link>
        </div>
      </div>
    </div>
  )
}
