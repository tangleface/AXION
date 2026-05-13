'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { easeLuxe } from '@/lib/motion-variants';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
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
        {/* Grid */}
        <div className="absolute inset-0 grid-bg opacity-50 mask-fade-edges" />
        {/* Noise */}
        <div className="absolute inset-0 bg-noise opacity-[0.2]" />
        {/* Chrome ribbon glow top right (echoes PDF metallic ribbons) */}
        <motion.div
          className="absolute top-0 right-0 w-[60vw] h-[60vw] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(184, 179, 166, 0.35), transparent 60%)',
            filter: 'blur(60px)'
          }}
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Soft glow bottom left */}
        <motion.div
          className="absolute bottom-0 left-0 w-[50vw] h-[50vw] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(212, 204, 185, 0.4), transparent 70%)',
            filter: 'blur(80px)'
          }}
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        {/* Horizon line */}
        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-ink-900/10 to-transparent" />
      </div>

      <motion.div
        style={{ y, opacity, scale }}
        className="container-luxe relative z-10"
      >
        {/* Top eyebrow */}
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
            Strategy · Innovation · Industry
          </span>
        </motion.div>

        {/* Main title with word-by-word animation */}
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
            className="text-display-2xl font-display text-chrome-shimmer text-balance leading-[0.95]"
            delay={0.85}
          />
        </div>

        {/* Lead paragraph — approche globale (pas que DT) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeLuxe, delay: 1.3 }}
          className="mt-10 max-w-2xl text-lg md:text-xl text-ink-900/65 leading-relaxed text-balance"
        >
          Studio à l'intersection de la stratégie, de la technologie et des systèmes intelligents.
          Quatre piliers — <em className="not-italic font-medium text-ink-900">Strategy & Transformation,
          Communication & Experience, Platforms & Digital Solutions, Industry 4.0</em> — pour transformer la complexité
          en clarté actionnable.
        </motion.p>

        {/* CTAs */}
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

        {/* 4 piliers strip */}
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

      {/* Scroll indicator */}
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
