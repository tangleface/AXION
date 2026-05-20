'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowUpRight,
  Compass,
  Network,
  Sparkles,
  Brain,
  Check,
  type LucideIcon
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { fadeUp, staggerContainer, easeLuxe } from '@/lib/motion-variants';
import type { Pillar } from '@/data/pillars';

const iconMap: Record<string, LucideIcon> = {
  Compass,
  Network,
  Sparkles,
  Brain
};

export function PillarPage({ pillar }: { pillar: Pillar }) {
  const Icon = iconMap[pillar.icon] ?? Compass;

  return (
    <>
      <Navbar />
      <main className="bg-cream text-ink-900">

        {/* ============ HERO ============ */}
        <section className="relative pt-36 pb-20 overflow-hidden">
          {/* Background ambience */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute inset-0 grid-bg opacity-30 mask-fade-edges" />
            <div className="absolute inset-0 bg-noise opacity-[0.15]" />
            <div
              className="absolute -top-40 -right-40 w-[40vw] h-[40vw] rounded-full"
              style={{
                background:
                  'radial-gradient(circle, rgba(0,181,197,0.10), transparent 70%)',
                filter: 'blur(80px)'
              }}
            />
          </div>

          <div className="container-luxe relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeLuxe }}
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[12px] tracking-[0.15em] uppercase text-ink-900/68 hover:text-ink-900 transition-colors duration-300 mb-10"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Retour à l'accueil
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left: title block */}
              <div className="lg:col-span-8">
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: easeLuxe, delay: 0.1 }}
                  className="flex items-center gap-3 mb-6"
                >
                  <span className="font-mono text-xs text-chrome-700 tracking-[0.25em] uppercase">
                    Pilier {pillar.number}
                  </span>
                  <span className="w-8 h-px bg-ink-900/15" />
                  <span className="text-[11px] tracking-[0.25em] uppercase text-ink-900/68">
                    {pillar.subtitle}
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: easeLuxe, delay: 0.2 }}
                  className="text-display-2xl font-display font-bold tracking-tight leading-[0.95] text-balance"
                >
                  {pillar.title}.
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: easeLuxe, delay: 0.3 }}
                  className="mt-6 text-xl md:text-2xl font-display italic font-light text-ink-900/74 leading-snug max-w-2xl"
                >
                  {pillar.tagline}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, ease: easeLuxe, delay: 0.4 }}
                  className="mt-6 font-mono text-xs tracking-[0.25em] uppercase text-chrome-700"
                >
                  {pillar.taglineEn}
                </motion.p>
              </div>

              {/* Right: floating icon card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: easeLuxe, delay: 0.3 }}
                className="lg:col-span-4 flex justify-end"
              >
                <div className="relative w-44 h-44 rounded-3xl bg-gradient-to-br from-chrome-200 to-cream-200 border border-chrome-300/40 flex items-center justify-center shadow-luxe-light">
                  <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          'radial-gradient(circle at 30% 25%, rgba(0,181,197,0.12), transparent 70%)'
                      }}
                    />
                  </div>
                  <Icon className="w-16 h-16 text-ink-900" strokeWidth={1.2} />
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-ink-900 text-cream font-mono text-[10px] tracking-[0.2em]">
                    {pillar.number}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ============ INTRO ============ */}
        <section className="relative py-20 md:py-28 bg-cream-100 border-y border-ink-900/[0.10]">
          <div className="container-luxe relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <div className="text-[11px] tracking-[0.25em] uppercase text-chrome-700 font-semibold">
                  Pourquoi ce pilier ?
                </div>
              </div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="lg:col-span-8 space-y-6 text-lg md:text-xl text-ink-900/78 leading-relaxed"
              >
                {pillar.intro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ============ POSITIONING (optional, Experience) ============ */}
        {pillar.positioning && (
          <section className="relative py-20 md:py-24 bg-cream">
            <div className="container-luxe relative">
              <div className="max-w-4xl mx-auto bg-ink-900 text-cream rounded-2xl p-10 md:p-14 relative overflow-hidden">
                <div
                  className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(94,234,212,0.10), transparent 65%)',
                    filter: 'blur(40px)'
                  }}
                />
                <div className="relative">
                  <div className="text-[11px] tracking-[0.25em] uppercase text-chrome-300/80 mb-5">
                    Positionnement
                  </div>
                  <h3 className="text-2xl md:text-[32px] font-display font-bold leading-tight tracking-tight text-balance">
                    {pillar.positioning.headline}
                  </h3>
                  <p className="mt-6 text-base md:text-lg text-cream/75 leading-relaxed max-w-3xl">
                    {pillar.positioning.body}
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ============ DEMARCHE (4 steps) ============ */}
        <section className="relative py-24 md:py-32 bg-cream">
          <div className="container-luxe relative">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
              <div>
                <div className="text-[11px] tracking-[0.25em] uppercase text-chrome-700 font-semibold mb-4">
                  Notre démarche
                </div>
                <h2 className="text-display-lg font-display font-bold tracking-tight text-balance">
                  Quatre temps. <span className="text-chrome-shimmer">Une méthode.</span>
                </h2>
              </div>
              <p className="text-base text-ink-900/68 max-w-md">
                Chaque mission {pillar.title.toLowerCase()} suit le même cadre de travail — adapté à votre contexte, votre maturité et vos contraintes.
              </p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-900/[0.06] border border-ink-900/[0.10] rounded-2xl overflow-hidden"
            >
              {pillar.steps.map((step) => (
                <motion.div
                  key={step.num}
                  variants={fadeUp}
                  className="bg-cream p-7 md:p-8 hover:bg-cream-200 transition-colors duration-700 relative"
                >
                  <div className="font-mono text-xs tracking-[0.2em] text-chrome-700 mb-5">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-display font-bold tracking-tight text-ink-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-ink-900/72 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ============ CAPABILITIES ============ */}
        <section className="relative py-24 md:py-32 bg-cream-100 border-y border-ink-900/[0.10]">
          <div className="container-luxe relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4">
                <div className="text-[11px] tracking-[0.25em] uppercase text-chrome-700 font-semibold mb-4">
                  Capabilities
                </div>
                <h2 className="text-display-md font-display font-bold tracking-tight text-balance leading-tight">
                  Ce que nous savons faire <span className="text-chrome-shimmer">en {pillar.title}.</span>
                </h2>
                <p className="mt-5 text-base text-ink-900/68 max-w-md leading-relaxed">
                  Notre socle d'expertises sur ce pilier — chacune peut être activée seule ou combinée dans un programme plus large.
                </p>
              </div>
              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={staggerContainer}
                className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-3"
              >
                {pillar.capabilities.map((c, i) => (
                  <motion.li
                    key={i}
                    variants={fadeUp}
                    className="flex items-start gap-3 bg-cream border border-ink-900/[0.10] rounded-xl px-5 py-4 hover:border-chrome-500/40 transition-colors duration-500"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-md bg-gradient-to-br from-chrome-200 to-cream-200 border border-chrome-300/40 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-ink-900" strokeWidth={2.5} />
                    </div>
                    <span className="text-[14.5px] text-ink-900/85 leading-snug">{c}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </section>

        {/* ============ TRIGGERS — Quand l'activer ============ */}
        <section className="relative py-24 md:py-32 bg-cream">
          <div className="container-luxe relative">
            <div className="mb-14">
              <div className="text-[11px] tracking-[0.25em] uppercase text-chrome-700 font-semibold mb-4">
                Quand l'activer
              </div>
              <h2 className="text-display-lg font-display font-bold tracking-tight text-balance">
                Les déclencheurs typiques <span className="text-chrome-shimmer">d'une mission {pillar.title}.</span>
              </h2>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {pillar.triggers.map((t, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="bg-cream-100 border border-ink-900/[0.10] rounded-xl p-7 hover:border-chrome-500/40 transition-colors duration-500 relative"
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-chrome-500/0 via-chrome-500/40 to-chrome-500/0" />
                  <div className="font-mono text-[10.5px] tracking-[0.25em] uppercase text-chrome-700 mb-3">
                    Trigger 0{i + 1}
                  </div>
                  <h3 className="text-lg font-display font-bold tracking-tight text-ink-900 mb-2.5">
                    {t.title}
                  </h3>
                  <p className="text-sm text-ink-900/72 leading-relaxed">
                    {t.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ============ DELIVERABLES ============ */}
        <section className="relative py-24 md:py-32 bg-cream-100 border-y border-ink-900/[0.10]">
          <div className="container-luxe relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4">
                <div className="text-[11px] tracking-[0.25em] uppercase text-chrome-700 font-semibold mb-4">
                  Livrables
                </div>
                <h2 className="text-display-md font-display font-bold tracking-tight text-balance leading-tight">
                  Ce avec quoi <span className="text-chrome-shimmer">vous repartez.</span>
                </h2>
                <p className="mt-5 text-base text-ink-900/68 max-w-md leading-relaxed">
                  À chaque fin d'étape, des livrables tangibles, partageables avec vos équipes, votre comité et vos partenaires.
                </p>
              </div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={staggerContainer}
                className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {pillar.deliverables.map((d, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="bg-cream border border-ink-900/[0.10] rounded-xl p-6 hover:border-chrome-500/40 transition-colors duration-500"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-6 h-6 rounded-md bg-ink-900 text-cream flex items-center justify-center font-mono text-[10px] font-semibold">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-base font-display font-bold text-ink-900">
                        {d.title}
                      </h3>
                    </div>
                    <p className="text-[13.5px] text-ink-900/72 leading-relaxed">
                      {d.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ============ CROSS-INDUSTRY ============ */}
        <section className="relative py-24 md:py-28 bg-cream">
          <div className="container-luxe relative">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="text-[11px] tracking-[0.25em] uppercase text-chrome-700 font-semibold mb-4">
                Cross-industry
              </div>
              <h2 className="text-display-md font-display font-bold tracking-tight text-balance leading-tight">
                Un pilier <span className="text-chrome-shimmer">adapté à votre industrie.</span>
              </h2>
              <p className="mt-5 text-base text-ink-900/72 leading-relaxed">
                {pillar.title} s'applique à l'ensemble de nos environnements d'intervention. Un même cadre méthodologique, ajusté à chaque secteur.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
              {pillar.industries.map((ind) => (
                <span
                  key={ind}
                  className="px-4 py-2 rounded-full bg-cream-100 border border-ink-900/[0.12] text-[12px] tracking-[0.02em] text-ink-900/78 hover:border-chrome-500/40 hover:text-ink-900 transition-colors duration-300"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ============ CTA ============ */}
        <section className="relative py-24 md:py-32 bg-ink-900 text-cream overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(circle at 50% 50%, rgba(94,234,212,0.10), transparent 60%)'
              }}
            />
          </div>
          <div className="container-luxe relative z-10 text-center">
            <div className="text-[11px] tracking-[0.25em] uppercase text-chrome-300/80 mb-5">
              Démarrer
            </div>
            <h2 className="text-display-xl font-display font-bold tracking-tight leading-[1.05] text-balance max-w-4xl mx-auto">
              Discutons d'une mission <span className="text-chrome-shimmer">{pillar.title}.</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-cream/70 max-w-2xl mx-auto leading-relaxed">
              Premier échange offert · 45 minutes · sans engagement. Nous lisons votre contexte et identifions si {pillar.title} est le bon point d'entrée pour vous.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-cream text-ink-900 font-medium text-sm tracking-wide hover:bg-white transition-all duration-500 ease-luxe"
              >
                Démarrer un projet
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500 ease-luxe" />
              </Link>
              <Link
                href="/#services"
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-transparent border border-cream/15 text-cream font-medium text-sm tracking-wide hover:border-cream/40 hover:bg-cream/[0.05] transition-all duration-500 ease-luxe"
              >
                Voir les autres piliers
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
