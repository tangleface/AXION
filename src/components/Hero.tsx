'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { easeLuxe } from '@/lib/motion-variants';

function HeroLogoWithConstellation() {
  // Points orbitaux autour du logo
  const orbitPoints = [...Array(16)].map((_, i) => {
    const angle = (i / 16) * Math.PI * 2;
    const r = 260 + (i % 2) * 40; // Deux cercles concentriques
    return {
      x: 400 + Math.cos(angle) * r,
      y: 400 + Math.sin(angle) * r,
      delay: i * 0.08
    };
  });

  // Lignes de connexion entre points proches
  const connections: [number, number][] = [];
  for (let i = 0; i < orbitPoints.length; i++) {
    for (let j = i + 1; j < orbitPoints.length; j++) {
      const dx = orbitPoints[i].x - orbitPoints[j].x;
      const dy = orbitPoints[i].y - orbitPoints[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 180) {
        connections.push([i, j]);
      }
    }
  }

  return (
    <div className="hidden lg:block absolute right-[3%] top-1/2 -translate-y-1/2 w-[42vw] max-w-[520px] pointer-events-none">
      {/* Logo SVG original */}
      <svg viewBox="350 240 740 760" className="w-full h-auto opacity-90 relative z-10">
        <defs>
          <linearGradient id="axTealHero" gradientUnits="userSpaceOnUse" x1="540" y1="876" x2="540" y2="358">
            <stop offset="0" stopColor="#00B5C5"/>
            <stop offset="0.55" stopColor="#0F6F7C"/>
            <stop offset="1" stopColor="#063C46"/>
          </linearGradient>
        </defs>
        <g transform="matrix(1.3333333,0,0,-1.3333333,0,1440)" fill="url(#axTealHero)">
          <g transform="translate(485.6346,761.4468)"><path d="M 0,0 H 98.043 L 11.234,-193.021 h 63.83 l 17.872,-37.277 -100.085,-1.021 -17.362,-41.362 -70.978,-1.021 -10.213,-28.085 -30.638,1.021 z"/></g>
          <g transform="translate(600.2729,751.2341)"><path d="m 0,0 133.021,-292.34 -32.425,0.766 -12.256,27.063 -68.425,-0.255 -69.83,154.851 z"/></g>
          <g transform="translate(526.741,782.8936)"><path d="M 0,0 -12,-27.149 H 6.128 L 18.553,0.085 Z"/></g>
          <g transform="translate(627.8474,472.1702)"><path d="M 0,0 23.234,-50.809 71.745,-50.043 50.298,0.255 Z"/></g>
          <g transform="translate(707.89,445.7447)"><path d="M 0,0 H 27.574 L 40.213,-27.064 11.872,-27.319 Z"/></g>
          <g transform="translate(671.507,408)"><path d="M 0,0 18.298,-41.872 59.745,-41.957 42.128,0.34 Z"/></g>
          <g transform="translate(726.4857,407.9149)"><path d="m 0,0 8,-19.617 18.043,-0.128 -8.458,19.522 z"/></g>
          <g transform="translate(756.0528,400.766)"><path d="M 0,0 11.586,-28.411 37.717,-28.596 25.468,-0.324 Z"/></g>
          <g transform="translate(452.1526,472.1702)"><path d="m 0,0 -23.234,-50.809 -48.511,0.766 21.447,50.298 z"/></g>
          <g transform="translate(372.11,445.7447)"><path d="m 0,0 h -27.574 l -12.639,-27.064 28.341,-0.255 z"/></g>
          <g transform="translate(408.493,408)"><path d="M 0,0 -18.298,-41.872 -59.745,-41.957 -42.128,0.34 Z"/></g>
          <g transform="translate(353.5143,407.9149)"><path d="m 0,0 -8,-19.617 -18.043,-0.128 8.458,19.522 z"/></g>
          <g transform="translate(323.9472,400.766)"><path d="m 0,0 -11.586,-28.411 -26.131,-0.185 12.249,28.272 z"/></g>
          <g transform="translate(600.7836,876.3405)"><path d="m 0,0 -22.213,-48.255 h 45.958 l 21.191,48 z"/></g>
          <g transform="translate(569.726,813.4468)"><path d="M 0,0 -18.373,-39.915 H 19.641 L 37.169,-0.211 Z"/></g>
          <g transform="translate(499.1402,802.4725)"><path d="m 0,0 -12.697,-27.583 h 26.27 l 12.113,27.437 z"/></g>
          <g transform="translate(540.5104,814.7186)"><path d="M 0,0 -8.812,-18.501 H 9.42 l 8.406,18.403 z"/></g>
          <g transform="translate(551.925,855.6744)"><path d="M 0,0 -12.078,-29.051 H 12.911 L 24.433,-0.154 Z"/></g>
        </g>
      </svg>

      {/* Constellation orbitale derrière */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 800" style={{ top: '-10%' }}>
        {/* Lignes de connexion */}
        {connections.map(([a, b], i) => (
          <motion.line
            key={`c${i}`}
            x1={orbitPoints[a].x} y1={orbitPoints[a].y}
            x2={orbitPoints[b].x} y2={orbitPoints[b].y}
            stroke="#0F6F7C"
            strokeWidth="0.8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ duration: 1, delay: 1.5 + i * 0.02, ease: easeLuxe }}
          />
        ))}
        
        {/* Points orbitaux */}
        {orbitPoints.map((p, i) => (
          <motion.circle
            key={`p${i}`}
            cx={p.x} cy={p.y}
            r={i % 3 === 0 ? 4 : 2.5}
            fill={i % 3 === 0 ? "#00B5C5" : "#0F6F7C"}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: i % 3 === 0 ? 0.9 : 0.5 }}
            transition={{ duration: 0.6, delay: 1.2 + p.delay, ease: easeLuxe }}
          />
        ))}
        
        {/* Pulse sur les gros points */}
        {orbitPoints.filter((_, i) => i % 4 === 0).map((p, i) => (
          <motion.circle
            key={`pulse${i}`}
            cx={p.x} cy={p.y}
            fill="none"
            stroke="#00B5C5"
            strokeWidth="1.5"
            initial={{ r: 5, opacity: 0 }}
            animate={{ r: [5, 22], opacity: [0.5, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 2.5 + i * 0.6, ease: 'easeOut' }}
          />
        ))}
      </svg>
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
      className="relative min-h-[100svh] flex flex-col justify-center pt-32 pb-20 overflow-hidden"
    >
      {/* Cinematic light background layers */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 grid-bg opacity-50 mask-fade-edges" />
        <div className="absolute inset-0 bg-noise opacity-[0.2]" />
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

      {/* Logo + Constellation */}
      <HeroLogoWithConstellation />

      <motion.div
        style={{ y, opacity, scale }}
        className="container-luxe relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeLuxe, delay: 0.4 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ink-900 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-ink-900" />
          </span>
          <span className="text-[11px] tracking-[0.3em] uppercase text-ink-900/60">
            Strategy - Innovation - Industry
          </span>
        </motion.div>

        <div className="max-w-5xl">
          <AnimatedText
            as="h1"
            text="Designing"
            className="text-display-2xl font-display text-balance leading-[0.95] text-ink-900"
            delay={0.6}
          />
          <AnimatedText
            as="h1"
            text="what's next."
            className="text-display-2xl font-display text-teal-600 text-balance leading-[0.95]"
            delay={0.85}
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeLuxe, delay: 1.3 }}
          className="mt-10 max-w-2xl text-lg md:text-xl text-ink-900/65 leading-relaxed text-balance"
        >
          Studio a l'intersection de la strategie, de la technologie et des systemes intelligents.
          Quatre piliers - <em className="not-italic font-medium text-ink-900">Strategy & Transformation,
          Communication & Experience, Platforms & Digital Solutions, Industry 4.0</em> - pour transformer la complexite
          en clarte actionable.
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
            Demarrer un projet
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500 ease-luxe" />
          </a>
          <a
            href="#services"
            className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-transparent border border-ink-900/15 text-ink-900 font-medium text-sm tracking-wide hover:border-ink-900/40 hover:bg-ink-900/[0.03] transition-all duration-500 ease-luxe"
          >
            Decouvrir notre approche
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: easeLuxe, delay: 1.8 }}
          className="mt-24 pt-10 border-t border-ink-900/8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {[
              { n: '01', l: 'Strategy & Transformation' },
              { n: '02', l: 'Communication & Experience' },
              { n: '03', l: 'Platforms & Digital Solutions' },
              { n: '04', l: 'Industry 4.0', flagship: true }
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: easeLuxe, delay: 2 + i * 0.1 }}
              >
                <div className="font-mono text-xs text-chrome-700 tracking-wider mb-2">
                  {p.n}{p.flagship && <span className="ml-2 text-[8px] tracking-[0.2em] uppercase">Flagship</span>}
                </div>
                <div className="text-base md:text-lg font-display font-medium text-ink-900 leading-tight">
                  {p.l}
                </div>
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
        aria-label="Faire defiler vers le bas"
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
