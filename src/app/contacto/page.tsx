'use client'

import { useState } from 'react'

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', servicio: '', mensaje: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('sent')
  }

  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-16">
        <div className="max-w-3xl animate-fade-in">
          <p className="text-sm font-medium tracking-wider uppercase mb-4" style={{ color: 'var(--accent)' }}>Contacto</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ color: 'var(--text-primary)' }}>
            Empecemos a trabajar<br />
            <span style={{ color: 'var(--accent)' }}>en tu proyecto</span>
          </h1>
          <p className="text-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Contanos que necesitas. Te respondemos en menos de 24 horas con una propuesta clara.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Formulario */}
          <div
            className="lg:col-span-3 p-8 rounded-xl border"
            style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
          >
            {status === 'sent' ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center gap-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-2"
                  style={{ background: 'var(--accent-glow)' }}
                >
                  <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ color: 'var(--accent)' }}>
                    <path d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold" style={{ color: 'var(--text-primary)' }}>Mensaje enviado</h2>
                <p style={{ color: 'var(--text-secondary)' }}>Te respondemos a la brevedad.</p>
                <button
                  className="text-sm mt-4 px-4 py-2 rounded-lg border transition-colors"
                  style={{ color: 'var(--accent)', borderColor: 'var(--border)' }}
                  onClick={() => { setStatus('idle'); setForm({ nombre: '', email: '', servicio: '', mensaje: '' }) }}
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-colors focus:border-[var(--accent)]"
                      style={{
                        background: 'var(--bg)',
                        border: '1px solid var(--border)',
                        color: 'var(--text-primary)',
                      }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="tu@email.com"
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-colors focus:border-[var(--accent)]"
                      style={{
                        background: 'var(--bg)',
                        border: '1px solid var(--border)',
                        color: 'var(--text-primary)',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                    Que servicio te interesa?
                  </label>
                  <select
                    name="servicio"
                    value={form.servicio}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-colors"
                    style={{
                      background: 'var(--bg)',
                      border: '1px solid var(--border)',
                      color: form.servicio ? 'var(--text-primary)' : 'var(--text-muted)',
                    }}
                  >
                    <option value="">Selecciona una opcion</option>
                    <option value="web">Sitio Web Profesional</option>
                    <option value="reservas">Sistema de Reservas</option>
                    <option value="landing">Landing Page</option>
                    <option value="redes">Gestion de Redes Sociales</option>
                    <option value="marca">Identidad de Marca</option>
                    <option value="pack">Pack Turistico Completo</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                    Contanos sobre tu proyecto
                  </label>
                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Que necesitas? Cual es tu negocio? Que objetivos tenes?"
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-colors resize-none focus:border-[var(--accent)]"
                    style={{
                      background: 'var(--bg)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-primary)',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3.5 rounded-lg font-medium transition-all duration-200 glow-accent"
                  style={{ background: 'var(--accent)', color: '#000', opacity: status === 'sending' ? 0.7 : 1 }}
                >
                  {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
                </button>
              </form>
            )}
          </div>

          {/* Info lateral */}
          <div className="lg:col-span-2 space-y-5">
            <div
              className="p-6 rounded-xl border"
              style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
            >
              <h3 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Contacto directo</h3>
              <div className="space-y-4">
                <a
                  href="https://wa.me/549XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm transition-colors card-hover p-3 rounded-lg"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--accent-glow)', color: 'var(--accent)' }}>
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium" style={{ color: 'var(--text-primary)' }}>WhatsApp</p>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Respuesta rapida</p>
                  </div>
                </a>

                <a
                  href="mailto:clovermarketingdesign@gmail.com"
                  className="flex items-center gap-3 text-sm transition-colors card-hover p-3 rounded-lg"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--accent-glow)', color: 'var(--accent)' }}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium" style={{ color: 'var(--text-primary)' }}>Email</p>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>clovermarketingdesign@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://www.upwork.com/freelancers/~0136b685f6d2bb3da2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm transition-colors card-hover p-3 rounded-lg"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--accent-glow)', color: 'var(--accent)' }}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium" style={{ color: 'var(--text-primary)' }}>Upwork</p>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Perfil verificado</p>
                  </div>
                </a>
              </div>
            </div>

            <div
              className="p-6 rounded-xl border"
              style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
            >
              <h3 className="font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>Zona horaria flexible</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Trabajamos remoto y nos adaptamos a tu horario. Respondemos dentro de las 24 horas.
              </p>
            </div>

            <div
              className="p-6 rounded-xl gradient-border"
              style={{ background: 'var(--surface)' }}
            >
              <h3 className="font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>Consulta gratis</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                La primera consulta no tiene costo. Contanos tu idea y te damos una estimacion honesta de tiempos y presupuesto.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
