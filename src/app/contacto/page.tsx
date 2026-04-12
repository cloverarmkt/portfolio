'use client'

import { useState } from 'react'

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    // Por ahora simula envío — luego conectamos con un servicio real
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('sent')
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="max-w-2xl mb-16">
        <p className="text-sm font-medium mb-3" style={{ color: 'var(--accent)' }}>Escribime</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
          Contacto
        </h1>
        <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          ¿Tenés un proyecto, una pregunta, o simplemente querés charlar? Te respondo rápido.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Formulario */}
        <div
          className="p-8 rounded-xl border"
          style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
        >
          {status === 'sent' ? (
            <div className="flex flex-col items-center justify-center h-full py-12 text-center gap-4">
              <span className="text-5xl">✅</span>
              <h2 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>Mensaje enviado</h2>
              <p style={{ color: 'var(--text-secondary)' }}>Te respondo a la brevedad.</p>
              <button
                className="text-sm mt-4"
                style={{ color: 'var(--accent)' }}
                onClick={() => { setStatus('idle'); setForm({ nombre: '', email: '', mensaje: '' }) }}
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-colors"
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
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-colors"
                  style={{
                    background: 'var(--bg)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-primary)',
                  }}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                  Mensaje
                </label>
                <textarea
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Contame de tu proyecto..."
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-colors resize-none"
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
                className="w-full py-3 rounded-lg font-medium transition-opacity"
                style={{ background: 'var(--accent)', color: '#000', opacity: status === 'sending' ? 0.7 : 1 }}
              >
                {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
              </button>
            </form>
          )}
        </div>

        {/* Info lateral */}
        <div className="space-y-6">
          <div
            className="p-6 rounded-xl border"
            style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
          >
            <h3 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>También podés escribirme por:</h3>
            <div className="space-y-4">
              <a
                href="https://wa.me/549XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm transition-opacity hover:opacity-80"
                style={{ color: 'var(--text-secondary)' }}
              >
                <span className="text-xl">💬</span>
                WhatsApp
              </a>
              <a
                href="https://www.upwork.com/freelancers/~0136b685f6d2bb3da2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm transition-opacity hover:opacity-80"
                style={{ color: 'var(--text-secondary)' }}
              >
                <span className="text-xl">💼</span>
                Upwork
              </a>
            </div>
          </div>

          <div
            className="p-6 rounded-xl border"
            style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
          >
            <h3 className="font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>Respuesta garantizada</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Trabajo en zona horaria flexible. Suelo responder dentro de las 24 horas.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
