import { Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { siteConfig } from '@/lib/seo';

const navigation = {
  approche: [
    { name: 'Smart Industry', href: '#services' },
    { name: 'Smart Pharma', href: '#services' },
    { name: 'Smart Operations', href: '#services' },
    { name: 'Digital Experience', href: '#services' },
    { name: 'Digital Twin', href: '#digital-twin' }
  ],
  studio: [
    { name: 'Studio', href: '#about' },
    { name: 'Environnements', href: '#case-studies' },
    { name: 'Contact', href: '#contact' }
  ],
  resources: [
    { name: 'LinkedIn', href: siteConfig.social.linkedin, external: true },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' }
  ]
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-ink-900 text-cream border-t border-ink-900/8 overflow-hidden">
      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-chrome-300/40 to-transparent" />

      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[120vw] h-[80vw] max-w-[1600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(184, 179, 166, 0.08), transparent 50%)',
            filter: 'blur(40px)'
          }}
        />
      </div>

      <div className="container-luxe relative py-20 md:py-24">
        {/* Big tagline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          <div>
            <div className="flex items-center gap-3">
              {/* Inverted logo for dark footer */}
              <svg
                width="32"
                height="32"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="cream-mark-footer" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f4f1ec" />
                    <stop offset="100%" stopColor="#b8b3a6" />
                  </linearGradient>
                </defs>
                <g transform="translate(10, 10)">
                  <polygon points="40,0 80,80 0,80" fill="url(#cream-mark-footer)" />
                  <polygon points="40,16 68,72 12,72" fill="none" stroke="#3a382e" strokeWidth="1.5" opacity="0.4" />
                  <rect x="20" y="56" width="40" height="3" fill="#3a382e" opacity="0.5" />
                </g>
              </svg>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-base tracking-tight text-cream">Axion</span>
                <span className="text-[9px] tracking-[0.25em] uppercase text-chrome-300/80 -mt-0.5">Studio</span>
              </div>
            </div>

            <h2 className="mt-8 text-display-lg font-display font-bold text-balance leading-[1] tracking-tight text-cream">
              Strategy.<br />
              Industry.<br />
              <span className="text-chrome-shimmer">Intelligence.</span>
            </h2>
            <p className="mt-6 text-cream/45 italic text-base">Designing what's next.</p>
            <p className="mt-1 text-cream/35 italic text-sm">Intelligent Systems for Operational Transformation.</p>
          </div>

          <div className="flex flex-col justify-end space-y-6">
            <a
              href="#contact"
              className="group inline-flex items-center justify-between px-6 py-5 rounded-2xl glass-dark border border-cream/10 hover:border-chrome-300/40 transition-all duration-700 ease-luxe"
            >
              <div className="flex flex-col">
                <span className="text-[10px] tracking-[0.25em] uppercase text-chrome-300 mb-1">
                  Démarrer un projet
                </span>
                <span className="text-lg font-display font-medium text-cream">
                  Premier échange offert · 45 min
                </span>
              </div>
              <ArrowUpRight className="w-6 h-6 text-chrome-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-700 ease-luxe" />
            </a>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="group flex items-center gap-2 text-cream/65 hover:text-chrome-300 transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                <span className="truncate">{siteConfig.contact.email}</span>
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-cream/65 hover:text-chrome-300 transition-colors duration-300"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Nav columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pb-12 border-b border-cream/8">
          <div>
            <h3 className="text-[10px] tracking-[0.25em] uppercase text-chrome-300/80 mb-5">Approche</h3>
            <ul className="space-y-3">
              {navigation.approche.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm text-cream/65 hover:text-chrome-300 transition-colors duration-300">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[10px] tracking-[0.25em] uppercase text-chrome-300/80 mb-5">Studio</h3>
            <ul className="space-y-3">
              {navigation.studio.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm text-cream/65 hover:text-chrome-300 transition-colors duration-300">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[10px] tracking-[0.25em] uppercase text-chrome-300/80 mb-5">Resources</h3>
            <ul className="space-y-3">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="text-sm text-cream/65 hover:text-chrome-300 transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[10px] tracking-[0.25em] uppercase text-chrome-300/80 mb-5">Contact</h3>
            <ul className="space-y-3 text-sm text-cream/65">
              <li>{siteConfig.contact.phone}</li>
              <li className="leading-relaxed">{siteConfig.contact.location}</li>
              <li className="pt-2">
                <span className="text-[10px] tracking-[0.2em] uppercase text-cream/30">Réponse sous 24h</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-cream/35">
          <div>© {year} {siteConfig.name}. Tous droits réservés.</div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline">Built with care in Algeria.</span>
            <span className="font-mono tracking-wider">v1.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
