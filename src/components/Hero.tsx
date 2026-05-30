'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { easeLuxe } from '@/lib/motion-variants';

// ====================================================================
// AXION LOGO — symbolic identity activation (3 points -> path -> contour).
// LOGO_PATHS = the 18 official SVG pieces (from public/logo.svg, unmodified),
// used for the subtle silhouette watermark and the outer A contour reveal.
// ====================================================================

const LOGO_PATHS: { d: string; o: [number, number] }[] = [
  { d: 'M 0,0 H 98.043 L 11.234,-193.021 h 63.83 l 17.872,-37.277 -100.085,-1.021 -17.362,-41.362 -70.978,-1.021 -10.213,-28.085 -30.638,1.021 z', o: [485.6346, 761.4468] },
  { d: 'm 0,0 133.021,-292.34 -32.425,0.766 -12.256,27.063 -68.425,-0.255 -69.83,154.851 z', o: [600.2729, 751.2341] },
  { d: 'M 0,0 -12,-27.149 H 6.128 L 18.553,0.085 Z', o: [526.741, 782.8936] },
  { d: 'M 0,0 23.234,-50.809 71.745,-50.043 50.298,0.255 Z', o: [627.8474, 472.1702] },
  { d: 'M 0,0 H 27.574 L 40.213,-27.064 11.872,-27.319 Z', o: [707.89, 445.7447] },
  { d: 'M 0,0 18.298,-41.872 59.745,-41.957 42.128,0.34 Z', o: [671.507, 408] },
  { d: 'm 0,0 8,-19.617 18.043,-0.128 -8.458,19.522 z', o: [726.4857, 407.9149] },
  { d: 'M 0,0 11.586,-28.411 37.717,-28.596 25.468,-0.324 Z', o: [756.0528, 400.766] },
  { d: 'm 0,0 -23.234,-50.809 -48.511,0.766 21.447,50.298 z', o: [452.1526, 472.1702] },
  { d: 'm 0,0 h -27.574 l -12.639,-27.064 28.341,-0.255 z', o: [372.11, 445.7447] },
  { d: 'M 0,0 -18.298,-41.872 -59.745,-41.957 -42.128,0.34 Z', o: [408.493, 408] },
  { d: 'm 0,0 -8,-19.617 -18.043,-0.128 8.458,19.522 z', o: [353.5143, 407.9149] },
  { d: 'm 0,0 -11.586,-28.411 -26.131,-0.185 12.249,28.272 z', o: [323.9472, 400.766] },
  { d: 'm 0,0 -22.213,-48.255 h 45.958 l 21.191,48 z', o: [600.7836, 876.3405] },
  { d: 'M 0,0 -18.373,-39.915 H 19.641 L 37.169,-0.211 Z', o: [569.726, 813.4468] },
  { d: 'm 0,0 -12.697,-27.583 h 26.27 l 12.113,27.437 z', o: [499.1402, 802.4725] },
  { d: 'M 0,0 -8.812,-18.501 H 9.42 l 8.406,18.403 z', o: [540.5104, 814.7186] },
  { d: 'M 0,0 -12.078,-29.051 H 12.911 L 24.433,-0.154 Z', o: [551.925, 855.6744] }
];

function HeroLogoWithConstellation() {
  // ===================================================================
  // AXION IDENTITY ACTIVATION
  //   1. The 3 corner points illuminate (bottom-left, top, bottom-right).
  //   2. A line traces the EXACT logo shape (real SVG body outline, drawn
  //      via pathLength) to connect those corners — it follows the true
  //      Axion form, not straight segments.
  //   3. Once connected, EVERY piece of the logo illuminates in cascade.
  // Narrative: corners -> connection along the real shape -> full identity.
  // ===================================================================
  const POINTS = [
    { id: 'foot-l', x: 432,  y: 906, delay: 0.5 },  // bottom-left
    { id: 'apex',   x: 801,  y: 272, delay: 0.8 },  // top / head
    { id: 'foot-r', x: 1008, y: 906, delay: 1.1 }   // bottom-right
  ];
  // The connecting line = the real logo body outline (left + right halves).
  // Stroked via pathLength so it draws along the EXACT Axion shape.
  const BODY = new Set([0, 1]);

  // Timings
  const TRACE_START = 1.4;   // line begins after the 3 corners are lit
  const FILL_START = 3.7;    // every piece illuminates after the trace

  return (
    <div
      className="hidden lg:block absolute right-[1%] top-1/2 -translate-y-1/2 w-[38vw] max-w-[520px] pointer-events-none z-0"
      style={{ perspective: '1200px' }}
    >
      {/* Soft dark space behind the logo */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse at 50% 55%, rgba(13,13,13,0.045) 0%, rgba(13,13,13,0.015) 35%, transparent 72%)'
        }}
      />
      {/* Projected teal shadow under the logo */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 bottom-[7%] w-[58%] h-6 rounded-[50%] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(6,62,70,0.55), transparent 70%)',
          filter: 'blur(14px)'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.55, 0.85, 0.55], scale: [0.92, 1, 0.92] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
      />
      {/* 3D oscillation wrapper — subtle premium float */}
      <motion.div
        className="w-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: [-3, 3, -3], rotateX: [1, -1, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      >
      <svg viewBox="350 240 740 760" className="w-full h-auto block">
        <defs>
          <linearGradient id="axFill" gradientUnits="userSpaceOnUse" x1="540" y1="876" x2="540" y2="358">
            <stop offset="0" stopColor="#18B6C5" />
            <stop offset="0.55" stopColor="#0F6F78" />
            <stop offset="1" stopColor="#063E46" />
          </linearGradient>
          <linearGradient id="axContour" gradientUnits="userSpaceOnUse" x1="540" y1="906" x2="540" y2="272">
            <stop offset="0" stopColor="#0F6F78" stopOpacity="0.8" />
            <stop offset="0.5" stopColor="#18B6C5" stopOpacity="1" />
            <stop offset="1" stopColor="#6DEAF2" stopOpacity="1" />
          </linearGradient>
          <radialGradient id="axGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6DEAF2" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#18B6C5" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* (0) Faint base so the trace reads against it */}
        <motion.g
          transform="matrix(1.3333333,0,0,-1.3333333,0,1440)"
          fill="url(#axFill)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.07 }}
          transition={{ duration: 1.2, ease: easeLuxe, delay: 0.2 }}
        >
          {LOGO_PATHS.map((p, idx) => (
            <g key={`base${idx}`} transform={`translate(${p.o[0]},${p.o[1]})`}>
              <path d={p.d} />
            </g>
          ))}
        </motion.g>

        {/* (3) FULL ILLUMINATION — every piece lights up in cascade, after the trace */}
        <motion.g transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" fill="url(#axFill)">
          {LOGO_PATHS.map((p, idx) => (
            <motion.g
              key={`fill${idx}`}
              transform={`translate(${p.o[0]},${p.o[1]})`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 0.5, delay: FILL_START + idx * 0.06, ease: easeLuxe }}
            >
              <path d={p.d} />
            </motion.g>
          ))}
        </motion.g>

        {/* (2) Connecting line = real logo outline traced (follows exact shape) */}
        <motion.g
          transform="matrix(1.3333333,0,0,-1.3333333,0,1440)"
          fill="none"
          stroke="url(#axContour)"
          strokeWidth={2.4}
          strokeLinejoin="round"
          strokeLinecap="round"
        >
          {LOGO_PATHS.map((p, idx) =>
            BODY.has(idx) ? (
              <g key={`trace${idx}`} transform={`translate(${p.o[0]},${p.o[1]})`}>
                <motion.path
                  d={p.d}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    pathLength: { duration: 2.2, ease: easeLuxe, delay: TRACE_START + idx * 0.35 },
                    opacity: { duration: 0.3, delay: TRACE_START + idx * 0.35 }
                  }}
                />
              </g>
            ) : null
          )}
        </motion.g>

        {/* (1) Glow halos on the 3 corner points */}
        {POINTS.map((pt) => (
          <motion.circle
            key={`glow-${pt.id}`}
            cx={pt.x} cy={pt.y} r={34}
            fill="url(#axGlow)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 1.0, delay: pt.delay + 0.1, ease: easeLuxe }}
          />
        ))}

        {/* (1) The 3 illuminated corner points */}
        {POINTS.map((pt) => (
          <motion.circle
            key={`pt-${pt.id}`}
            cx={pt.x} cy={pt.y} r={12}
            fill="#18B6C5"
            stroke="#6DEAF2"
            strokeWidth={2}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: pt.delay, ease: easeLuxe }}
          />
        ))}

        {/* (1) Slow pulse rings on the 3 corner points */}
        {POINTS.map((pt, i) => (
          <motion.circle
            key={`pulse-${pt.id}`}
            cx={pt.x} cy={pt.y}
            fill="none" stroke="#6DEAF2" strokeWidth={1.4}
            initial={{ r: 12, opacity: 0 }}
            animate={{ r: [12, 46], opacity: [0.5, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, delay: 4.8 + i * 0.7, ease: 'easeOut' }}
          />
        ))}
      </svg>
      </motion.div>
    </div>
  );
}

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] flex flex-col justify-center pt-28 pb-12 overflow-hidden"
    >
      {/* Cinematic light background layers */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 grid-bg opacity-30 mask-fade-edges" />
        <div className="absolute inset-0 bg-noise opacity-[0.12]" />
        <motion.div
          className="absolute top-0 right-0 w-[60vw] h-[60vw] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(184, 179, 166, 0.35), transparent 60%)',
            filter: 'blur(60px)'
          }}
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[50vw] h-[50vw] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(212, 204, 185, 0.4), transparent 70%)',
            filter: 'blur(80px)'
          }}
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-ink-900/10 to-transparent" />
      </div>

      {/* Logo pixel-perfect + Constellation */}
      <HeroLogoWithConstellation />

      <motion.div
        style={{ y, opacity, scale }}
        className="container-luxe relative z-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeLuxe, delay: 0.4 }}
          className="flex flex-col gap-2 mb-8"
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ink-900 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-ink-900" />
            </span>
            <span className="text-[11px] tracking-[0.3em] uppercase text-ink-900/80 font-semibold">
              Insight · Systems · Experience · Intelligence
            </span>
          </div>
          <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink-900/55 pl-5">
            Algiers · Est. 2024 · Cross-industry
          </div>
        </motion.div>

        <div className="max-w-5xl relative">
          <span className="hidden lg:block absolute -left-6 top-1 bottom-1 w-[3px] rounded-full bg-gradient-to-b from-teal-electric via-teal-primary to-transparent" aria-hidden="true" />
          <AnimatedText
            as="h1"
            text="Designing"
            className="text-display-2xl font-display text-balance leading-[0.95] text-ink-900"
            delay={0.6}
          />
          <h1 className="text-display-2xl font-display leading-[0.95]">
            <span
              className="inline-block overflow-hidden align-top"
              style={{ clipPath: 'inset(-14% -22% -14% -22%)' }}
            >
              <motion.span
                className="inline-block text-axion-gradient pb-[0.12em]"
                initial={{ y: '115%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 0.95, ease: easeLuxe, delay: 0.85 }}
              >
                what&apos;s next.
              </motion.span>
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeLuxe, delay: 1.05 }}
            className="mt-6 font-display italic font-light text-xl md:text-2xl text-ink-900/78 leading-snug"
          >
            Adaptive intelligence for strategic transformation.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeLuxe, delay: 1.15 }}
          className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 pl-0 max-w-2xl"
        >
          <div className="flex items-center gap-2.5">
            <span className="font-mono font-semibold text-2xl text-ink-900 tracking-tight">04</span>
            <span className="text-[11px] tracking-[0.15em] uppercase text-ink-900/65 leading-tight">Piliers<br/>stratégiques</span>
          </div>
          <span className="w-px h-8 bg-ink-900/15" aria-hidden="true" />
          <div className="flex items-center gap-2.5">
            <span className="font-mono font-semibold text-2xl text-ink-900 tracking-tight">08</span>
            <span className="text-[11px] tracking-[0.15em] uppercase text-ink-900/65 leading-tight">Industries<br/>adaptées</span>
          </div>
          <span className="w-px h-8 bg-ink-900/15" aria-hidden="true" />
          <div className="flex items-center gap-2.5">
            <span className="font-mono font-semibold text-2xl text-ink-900 tracking-tight">50+</span>
            <span className="text-[11px] tracking-[0.15em] uppercase text-ink-900/65 leading-tight">Capabilities<br/>déployables</span>
          </div>
          <span className="w-px h-8 bg-ink-900/15" aria-hidden="true" />
          <div className="flex items-center gap-2.5">
            <span className="font-mono font-semibold text-2xl text-ink-900 tracking-tight">MENA</span>
            <span className="text-[11px] tracking-[0.15em] uppercase text-ink-900/65 leading-tight">Zone<br/>d'intervention</span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeLuxe, delay: 1.3 }}
          className="mt-10 max-w-2xl text-lg md:text-xl text-ink-900/80 leading-relaxed text-balance"
        >
          Axion Studio est un studio d'innovation et de stratégie qui conçoit des systèmes
          intelligents <em className="not-italic font-medium text-ink-900">adaptés à chaque industrie</em>.
          Nous lisons la complexité de votre métier, structurons les données qui comptent et bâtissons
          des écosystèmes capables de{' '}
          <em className="not-italic font-medium text-ink-900">comprendre</em>,{' '}
          <em className="not-italic font-medium text-ink-900">opérer</em>,{' '}
          <em className="not-italic font-medium text-ink-900">prédire</em>{' '}
          et évoluer — quel que soit votre secteur.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeLuxe, delay: 1.5 }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-ink-900 text-cream font-medium text-sm tracking-wide hover:bg-ink-800 hover:shadow-luxe-light transition-all duration-500 ease-luxe"
          >
            Démarrer un projet
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500 ease-luxe" />
          </a>
          <a
            href="#services"
            className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-transparent border border-ink-900/15 text-ink-900 font-medium text-sm tracking-wide hover:border-ink-900/40 hover:bg-ink-900/[0.03] transition-all duration-500 ease-luxe"
          >
            Découvrir notre approche
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: easeLuxe, delay: 1.8 }}
          className="mt-16 pt-10 border-t border-ink-900/12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {[
              { n: '01', l: 'Insight', href: '/insight' },
              { n: '02', l: 'Systems', href: '/systems' },
              { n: '03', l: 'Experience', href: '/experience' },
              { n: '04', l: 'Intelligence', href: '/intelligence' }
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: easeLuxe, delay: 2 + i * 0.1 }}
              >
                <Link
                  href={p.href}
                  className="group block py-2 -my-2 transition-colors duration-300"
                >
                  <div className="font-mono text-xs text-chrome-700 tracking-wider mb-2 flex items-center gap-2">
                    {p.n}
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-ink-900">→</span>
                  </div>
                  <div className="text-base md:text-lg font-display font-medium text-ink-900 leading-tight group-hover:text-teal-700 transition-colors duration-300">
                    {p.l}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 text-ink-900/40 hover:text-ink-900 transition-colors duration-300"
        aria-label="Faire défiler vers le bas"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.a>
    </section>
  );
}
