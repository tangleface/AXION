'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useMemo, useRef } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { easeLuxe } from '@/lib/motion-variants';

// ====================================================================
// LOGO CONSTELLATION PIXEL-PERFECT
// La silhouette pleine du logo SVG officiel (18 pièces, gradient teal)
// est rendue en arrière-plan. Par-dessus, lignes outline animées et
// points lumineux sur chacun des angles exacts du logo.
// Coordonnées extraites de public/logo.svg — aucun pixel modifié.
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

// Indexes of "key" pieces whose centroid gets a halo / pulse ring
// 13 = top apex, 7 = right foot vertex, 12 = left foot vertex
const KEY_PIECES = new Set([13, 7, 12]);

function parsePathVertices(d: string, ox: number, oy: number): [number, number][] {
  const cleaned = d
    .replace(/([a-zA-Z])/g, ' $1 ')
    .replace(/,/g, ' ')
    .replace(/-/g, ' -')
    .replace(/\s+/g, ' ')
    .trim();
  const tokens = cleaned.split(' ').filter((t) => t.length);

  let x = 0;
  let y = 0;
  let lastCmd = '';
  const vertices: [number, number][] = [];
  let i = 0;

  while (i < tokens.length) {
    const t = tokens[i];
    if (/^[a-zA-Z]$/.test(t)) {
      lastCmd = t;
      i++;
      if (lastCmd === 'z' || lastCmd === 'Z') continue;
    }
    switch (lastCmd) {
      case 'M':
        x = parseFloat(tokens[i++]); y = parseFloat(tokens[i++]);
        vertices.push([x, y]); lastCmd = 'L'; break;
      case 'm':
        x += parseFloat(tokens[i++]); y += parseFloat(tokens[i++]);
        vertices.push([x, y]); lastCmd = 'l'; break;
      case 'L':
        x = parseFloat(tokens[i++]); y = parseFloat(tokens[i++]);
        vertices.push([x, y]); break;
      case 'l':
        x += parseFloat(tokens[i++]); y += parseFloat(tokens[i++]);
        vertices.push([x, y]); break;
      case 'H': x = parseFloat(tokens[i++]); vertices.push([x, y]); break;
      case 'h': x += parseFloat(tokens[i++]); vertices.push([x, y]); break;
      case 'V': y = parseFloat(tokens[i++]); vertices.push([x, y]); break;
      case 'v': y += parseFloat(tokens[i++]); vertices.push([x, y]); break;
      default: i++;
    }
  }
  return vertices.map(([px, py]) => [px + ox, py + oy]);
}

// matrix(1.3333,0,0,-1.3333,0,1440) — flip + scale to match logo.svg
function applyMatrix([x, y]: [number, number]): [number, number] {
  return [x * 1.3333333, 1440 - y * 1.3333333];
}

function HeroLogoWithConstellation() {
  // Compute polygons (transformed) and edges/nodes once
  const { polygons, keyNodes } = useMemo(() => {
    const polys = LOGO_PATHS.map((p) => parsePathVertices(p.d, p.o[0], p.o[1]).map(applyMatrix));
    const keys: [number, number][] = [];
    polys.forEach((poly, pIdx) => {
      if (KEY_PIECES.has(pIdx)) {
        // pick the first vertex of the key piece as anchor for pulse
        keys.push(poly[0]);
      }
    });
    return { polygons: polys, keyNodes: keys };
  }, []);

  let lineCounter = 0;
  let nodeCounter = 0;

  return (
    <div className="hidden lg:block absolute right-[3%] top-1/2 -translate-y-1/2 w-[44vw] max-w-[540px] pointer-events-none">
      <svg viewBox="350 240 740 760" className="w-full h-auto">
        <defs>
          <linearGradient id="axTealHero" gradientUnits="userSpaceOnUse" x1="540" y1="876" x2="540" y2="358">
            <stop offset="0" stopColor="#00B5C5" />
            <stop offset="0.55" stopColor="#0F6F7C" />
            <stop offset="1" stopColor="#063C46" />
          </linearGradient>
          <radialGradient id="nodeGlowHero" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00B5C5" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#00B5C5" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* (A) Silhouette pleine du logo officiel — gradient teal, opacité 50% */}
        <motion.g
          transform="matrix(1.3333333,0,0,-1.3333333,0,1440)"
          fill="url(#axTealHero)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.2, ease: easeLuxe, delay: 0.2 }}
        >
          {LOGO_PATHS.map((p, idx) => (
            <g key={`bg${idx}`} transform={`translate(${p.o[0]},${p.o[1]})`}>
              <path d={p.d} />
            </g>
          ))}
        </motion.g>

        {/* (B) Lignes d'outline animées (overlay) */}
        {polygons.flatMap((poly, pIdx) =>
          poly.map((a, vIdx) => {
            const b = poly[(vIdx + 1) % poly.length];
            const delay = 0.6 + lineCounter * 0.025;
            lineCounter++;
            return (
              <motion.line
                key={`l-${pIdx}-${vIdx}`}
                x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]}
                stroke="#0F6F7C" strokeWidth={2.5} strokeLinecap="round"
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 0.6, pathLength: 1 }}
                transition={{ duration: 0.7, ease: easeLuxe, delay }}
              />
            );
          })
        )}

        {/* (C) Halos doux sur les vertex clés (apex + pieds) */}
        {keyNodes.map((n, i) => (
          <motion.circle
            key={`halo${i}`}
            cx={n[0]} cy={n[1]} r={32}
            fill="url(#nodeGlowHero)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 1.2, delay: 2.4 + i * 0.15, ease: easeLuxe }}
          />
        ))}

        {/* (D) Points lumineux sur chaque angle */}
        {polygons.flatMap((poly, pIdx) =>
          poly.map((v, vIdx) => {
            const isKey = KEY_PIECES.has(pIdx) && vIdx === 0;
            const delay = 1.8 + nodeCounter * 0.025;
            nodeCounter++;
            return (
              <motion.circle
                key={`n-${pIdx}-${vIdx}`}
                cx={v[0]} cy={v[1]}
                r={isKey ? 10 : 5}
                fill={isKey ? '#00B5C5' : '#0F6F7C'}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: isKey ? 1 : 0.9 }}
                transition={{ duration: 0.4, delay, ease: easeLuxe }}
              />
            );
          })
        )}

        {/* (E) Anneaux pulsants sur les vertex clés */}
        {keyNodes.map((n, i) => (
          <motion.circle
            key={`pulse${i}`}
            cx={n[0]} cy={n[1]}
            fill="none" stroke="#00B5C5" strokeWidth={2}
            initial={{ r: 12, opacity: 0 }}
            animate={{ r: [12, 44], opacity: [0.55, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, delay: 3.5 + i * 0.5, ease: 'easeOut' }}
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

      {/* Logo pixel-perfect + Constellation */}
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
            Insight · Systems · Experience · Intelligence
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
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeLuxe, delay: 1.05 }}
            className="mt-6 font-display italic font-light text-xl md:text-2xl text-ink-900/55 leading-snug"
          >
            Adaptive intelligence for strategic transformation.
          </motion.p>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeLuxe, delay: 1.3 }}
          className="mt-10 max-w-2xl text-lg md:text-xl text-ink-900/65 leading-relaxed text-balance"
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
          className="mt-24 pt-10 border-t border-ink-900/8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {[
              { n: '01', l: 'Insight' },
              { n: '02', l: 'Systems' },
              { n: '03', l: 'Experience' },
              { n: '04', l: 'Intelligence' }
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: easeLuxe, delay: 2 + i * 0.1 }}
              >
                <div className="font-mono text-xs text-chrome-700 tracking-wider mb-2">
                  {p.n}
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
