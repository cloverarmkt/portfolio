export function CloverLogo({ size = 32, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
      {/* Four leaf clover */}
      <circle cx="32" cy="20" r="12" fill="currentColor" opacity="0.9" />
      <circle cx="20" cy="32" r="12" fill="currentColor" opacity="0.8" />
      <circle cx="44" cy="32" r="12" fill="currentColor" opacity="0.85" />
      <circle cx="32" cy="44" r="12" fill="currentColor" opacity="0.75" />
      {/* Center dot */}
      <circle cx="32" cy="32" r="6" fill="currentColor" />
      {/* Stem */}
      <path d="M32 52 C32 52, 34 58, 38 62" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
    </svg>
  )
}

export function HeroIllustration() {
  return (
    <svg viewBox="0 0 500 400" fill="none" className="w-full h-auto">
      {/* Background glow */}
      <circle cx="250" cy="200" r="160" fill="url(#heroGlow)" opacity="0.15" />

      {/* Browser window */}
      <rect x="100" y="60" width="300" height="200" rx="12" fill="#131316" stroke="#27272A" strokeWidth="1.5" />
      <rect x="100" y="60" width="300" height="32" rx="12" fill="#1A1A1F" />
      <rect x="100" y="80" width="300" height="12" fill="#1A1A1F" />
      {/* Browser dots */}
      <circle cx="118" cy="76" r="5" fill="#EF4444" opacity="0.8" />
      <circle cx="134" cy="76" r="5" fill="#EAB308" opacity="0.8" />
      <circle cx="150" cy="76" r="5" fill="#22C55E" opacity="0.8" />
      {/* URL bar */}
      <rect x="170" y="69" width="140" height="14" rx="4" fill="#27272A" />
      <text x="200" y="80" fill="#71717A" fontSize="8" fontFamily="monospace">tunegocio.com</text>

      {/* Content lines */}
      <rect x="120" y="108" width="160" height="12" rx="3" fill="#22C55E" opacity="0.3" />
      <rect x="120" y="128" width="260" height="8" rx="2" fill="#27272A" />
      <rect x="120" y="144" width="220" height="8" rx="2" fill="#27272A" />
      <rect x="120" y="160" width="240" height="8" rx="2" fill="#27272A" />

      {/* CTA button */}
      <rect x="120" y="184" width="100" height="28" rx="6" fill="#22C55E" />
      <text x="142" y="202" fill="#000" fontSize="10" fontWeight="bold" fontFamily="system-ui">Reservar</text>

      {/* Image placeholder */}
      <rect x="280" y="108" width="100" height="104" rx="6" fill="#1A1A1F" stroke="#27272A" />
      <circle cx="330" cy="145" r="15" fill="#27272A" />
      <path d="M305 195 L320 170 L335 180 L350 155 L370 195 Z" fill="#27272A" />

      {/* Floating elements */}
      {/* Analytics card */}
      <g transform="translate(20, 150)">
        <rect width="90" height="70" rx="10" fill="#131316" stroke="#27272A" strokeWidth="1" />
        <text x="12" y="22" fill="#A1A1AA" fontSize="8" fontFamily="system-ui">Visitas</text>
        <text x="12" y="42" fill="#22C55E" fontSize="16" fontWeight="bold" fontFamily="system-ui">+247%</text>
        <path d="M12 55 L25 50 L38 52 L50 45 L62 42 L75 35" stroke="#22C55E" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>

      {/* Notification */}
      <g transform="translate(380, 120)">
        <rect width="110" height="50" rx="10" fill="#131316" stroke="#27272A" strokeWidth="1" />
        <circle cx="20" cy="25" r="10" fill="#22C55E" opacity="0.2" />
        <text x="16" y="28" fill="#22C55E" fontSize="10">$</text>
        <text x="36" y="22" fill="#FAFAFA" fontSize="8" fontWeight="bold" fontFamily="system-ui">Nueva reserva</text>
        <text x="36" y="35" fill="#A1A1AA" fontSize="7" fontFamily="system-ui">hace 2 min</text>
      </g>

      {/* Star rating */}
      <g transform="translate(60, 270)">
        <rect width="120" height="45" rx="10" fill="#131316" stroke="#27272A" strokeWidth="1" />
        <text x="12" y="20" fill="#EAB308" fontSize="12">&#9733;&#9733;&#9733;&#9733;&#9733;</text>
        <text x="12" y="34" fill="#A1A1AA" fontSize="7" fontFamily="system-ui">12 resenas nuevas</text>
      </g>

      {/* Mobile phone */}
      <g transform="translate(370, 220)">
        <rect width="60" height="100" rx="10" fill="#131316" stroke="#27272A" strokeWidth="1.5" />
        <rect x="18" y="6" width="24" height="4" rx="2" fill="#27272A" />
        <rect x="8" y="18" width="44" height="30" rx="3" fill="#1A1A1F" />
        <rect x="8" y="54" width="44" height="6" rx="2" fill="#27272A" />
        <rect x="8" y="64" width="30" height="6" rx="2" fill="#27272A" />
        <rect x="8" y="78" width="44" height="12" rx="4" fill="#22C55E" />
        <text x="16" y="87" fill="#000" fontSize="6" fontWeight="bold">Reservar</text>
      </g>

      <defs>
        <radialGradient id="heroGlow">
          <stop offset="0%" stopColor="#22C55E" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
    </svg>
  )
}

export function ServiceIllustration({ type }: { type: 'web' | 'marketing' | 'brand' | 'landing' }) {
  const illustrations: Record<string, JSX.Element> = {
    web: (
      <svg viewBox="0 0 200 150" fill="none" className="w-full h-auto">
        <rect x="20" y="10" width="160" height="110" rx="8" fill="#131316" stroke="#27272A" />
        <rect x="20" y="10" width="160" height="24" rx="8" fill="#1A1A1F" />
        <rect x="20" y="26" width="160" height="8" fill="#1A1A1F" />
        <circle cx="34" cy="22" r="4" fill="#EF4444" opacity="0.7" />
        <circle cx="46" cy="22" r="4" fill="#EAB308" opacity="0.7" />
        <circle cx="58" cy="22" r="4" fill="#22C55E" opacity="0.7" />
        <rect x="32" y="42" width="80" height="8" rx="2" fill="#22C55E" opacity="0.4" />
        <rect x="32" y="56" width="136" height="5" rx="2" fill="#27272A" />
        <rect x="32" y="66" width="120" height="5" rx="2" fill="#27272A" />
        <rect x="32" y="80" width="60" height="18" rx="4" fill="#22C55E" />
        <rect x="100" y="80" width="60" height="18" rx="4" fill="#27272A" />
        <circle cx="170" cy="130" r="20" fill="#22C55E" opacity="0.1" />
      </svg>
    ),
    marketing: (
      <svg viewBox="0 0 200 150" fill="none" className="w-full h-auto">
        <rect x="20" y="20" width="160" height="110" rx="8" fill="#131316" stroke="#27272A" />
        <rect x="36" y="100" width="16" height="20" rx="2" fill="#27272A" />
        <rect x="60" y="85" width="16" height="35" rx="2" fill="#27272A" />
        <rect x="84" y="70" width="16" height="50" rx="2" fill="#22C55E" opacity="0.5" />
        <rect x="108" y="60" width="16" height="60" rx="2" fill="#22C55E" opacity="0.7" />
        <rect x="132" y="45" width="16" height="75" rx="2" fill="#22C55E" />
        <path d="M44 95 L68 80 L92 65 L116 55 L140 40" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
        <circle cx="140" cy="40" r="4" fill="#22C55E" />
        <text x="36" y="38" fill="#A1A1AA" fontSize="8" fontFamily="system-ui">Crecimiento mensual</text>
      </svg>
    ),
    brand: (
      <svg viewBox="0 0 200 150" fill="none" className="w-full h-auto">
        <circle cx="100" cy="75" r="50" fill="#131316" stroke="#27272A" />
        <circle cx="100" cy="75" r="35" fill="#1A1A1F" />
        <text x="85" y="82" fill="#22C55E" fontSize="24" fontWeight="bold" fontFamily="system-ui">C</text>
        <rect x="30" y="10" width="40" height="20" rx="4" fill="#22C55E" opacity="0.2" />
        <rect x="35" y="16" width="30" height="3" rx="1" fill="#22C55E" opacity="0.5" />
        <rect x="35" y="22" width="20" height="3" rx="1" fill="#22C55E" opacity="0.3" />
        <rect x="140" y="110" width="50" height="8" rx="2" fill="#27272A" />
        <rect x="140" y="122" width="40" height="8" rx="2" fill="#27272A" />
        <circle cx="160" cy="30" r="12" fill="#22C55E" opacity="0.15" />
        <circle cx="40" cy="120" r="8" fill="#22C55E" opacity="0.1" />
      </svg>
    ),
    landing: (
      <svg viewBox="0 0 200 150" fill="none" className="w-full h-auto">
        <rect x="40" y="5" width="120" height="140" rx="8" fill="#131316" stroke="#27272A" />
        <rect x="52" y="18" width="96" height="10" rx="3" fill="#22C55E" opacity="0.3" />
        <rect x="60" y="34" width="80" height="5" rx="2" fill="#27272A" />
        <rect x="52" y="48" width="96" height="40" rx="4" fill="#1A1A1F" />
        <rect x="60" y="96" width="80" height="16" rx="4" fill="#22C55E" />
        <text x="78" y="107" fill="#000" fontSize="7" fontWeight="bold">RESERVAR</text>
        <rect x="60" y="120" width="30" height="4" rx="1" fill="#27272A" />
        <rect x="94" y="120" width="30" height="4" rx="1" fill="#27272A" />
        <path d="M100 70 L90 58 L80 68 Z" fill="#27272A" />
        <circle cx="110" cy="62" r="6" fill="#27272A" />
        {/* Cursor */}
        <path d="M150 100 L155 115 L158 110 L165 115 L162 110 L168 108 Z" fill="#22C55E" />
      </svg>
    ),
  }

  return illustrations[type] || null
}

export function AbstractShape({ variant = 1 }: { variant?: number }) {
  if (variant === 1) {
    return (
      <svg viewBox="0 0 200 200" fill="none" className="w-full h-auto opacity-20">
        <circle cx="100" cy="100" r="80" stroke="#22C55E" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="60" stroke="#22C55E" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="40" stroke="#22C55E" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="20" stroke="#22C55E" strokeWidth="1" />
        <line x1="20" y1="100" x2="180" y2="100" stroke="#22C55E" strokeWidth="0.5" />
        <line x1="100" y1="20" x2="100" y2="180" stroke="#22C55E" strokeWidth="0.5" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 200 200" fill="none" className="w-full h-auto opacity-10">
      <path d="M100 20 L180 100 L100 180 L20 100 Z" stroke="#22C55E" strokeWidth="1" />
      <path d="M100 50 L150 100 L100 150 L50 100 Z" stroke="#22C55E" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="10" fill="#22C55E" opacity="0.3" />
    </svg>
  )
}
