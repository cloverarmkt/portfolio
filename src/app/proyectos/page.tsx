import { getProyectos } from '@/sanity/client'
import Link from 'next/link'

const categoriaLabel: Record<string, string> = {
  web: 'Desarrollo Web',
  marketing: 'Marketing Digital',
  marca: 'Identidad de Marca',
  redes: 'Redes Sociales',
  video: 'Video',
  otro: 'Otro',
}

export const revalidate = 60

export default async function Proyectos() {
  const proyectos = await getProyectos()

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="max-w-2xl mb-16">
        <p className="text-sm font-medium mb-3" style={{ color: 'var(--accent)' }}>Trabajos</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
          Proyectos
        </h1>
        <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          Trabajos de marketing digital, diseño de marca y desarrollo web.
        </p>
      </div>

      {proyectos.length === 0 ? (
        <div
          className="rounded-2xl border p-20 flex flex-col items-center justify-center text-center gap-4"
          style={{ borderColor: 'var(--border)', borderStyle: 'dashed' }}
        >
          <span className="text-5xl">🚧</span>
          <h2 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>
            Proyectos en camino
          </h2>
          <p className="max-w-md text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Estoy cargando mis trabajos. Volvé pronto.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proyectos.map((p: any) => (
            <div
              key={p._id}
              className="rounded-xl border overflow-hidden flex flex-col"
              style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
            >
              {/* Imagen placeholder si no tiene */}
              <div
                className="h-48 flex items-center justify-center"
                style={{ background: 'var(--border)' }}
              >
                <span className="text-4xl">
                  {p.categoria === 'web' ? '🌐' : p.categoria === 'video' ? '🎬' : p.categoria === 'marca' ? '🎨' : '📱'}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="text-xs px-2 py-1 rounded-full"
                    style={{ background: 'rgba(249,115,22,0.1)', color: 'var(--accent)' }}
                  >
                    {categoriaLabel[p.categoria] || p.categoria}
                  </span>
                  {p.cliente && (
                    <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                      {p.cliente}
                    </span>
                  )}
                </div>

                <h2 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{p.titulo}</h2>
                <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--text-secondary)' }}>{p.descripcion}</p>

                {p.url && (
                  <Link
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-sm font-medium"
                    style={{ color: 'var(--accent)' }}
                  >
                    Ver proyecto →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
