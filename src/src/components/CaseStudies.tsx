'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { sectorApproaches } from '@/data/case-studies';
import { fadeUp, staggerContainer, easeLuxe } from '@/lib/motion-variants';

export function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-32 md:py-40 overflow-hidden bg-cream-100">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute right-0 top-1/3 w-[40vw] h-[40vw] rounded-full"
             style={{ background: 'radial-gradient(circle, rgba(184, 179, 166, 0.25), transparent 70%)', filter: 'blur(80px)' }} />
      </div>

      <div className="container-luxe relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <SectionHeading
            tag="Notre Approche par Secteur"
            title={
              <>
                Six terrains <span className="text-chrome-shimmer">où nos systèmes</span><br />
                créent de la valeur.
              </>
            }
          />
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeLuxe }}
            href="#contact"
            className="group hidden md:inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-ink-900/60 hover:text-ink-900 transition-colors duration-500 self-start md:self-end"
          >
            <span>Discuter de votre secteur</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500 ease-luxe" />
          </motion.a>
        </div>

        {/* Note transparence */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeLuxe, delay: 0.1 }}
          className="text-sm text-ink-900/45 italic max-w-3xl mb-12"
        >
          Les fourchettes ci-dessous sont des benchmarks sectoriels reconnus, observés sur des déploiements
          Industrie 4.0 et Digital Twin en production internationale. Ce sont les ordres de grandeur que nous
          chiffrons avec précision pour votre site lors d'un audit forfaitaire.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink-900/[0.06] border border-ink-900/[0.06] rounded-2xl overflow-hidden"
        >
          {sectorApproaches.map((sa, index) => (
            <motion.article
              key={sa.id}
              variants={fadeUp}
              className="group relative bg-cream p-8 md:p-12 hover:bg-cream-200 transition-colors duration-700"
            >
              {/* Top */}
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] tracking-wider text-chrome-700">
                    SECTEUR {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-ink-900/[0.06] border border-ink-900/10 text-[10px] tracking-[0.2em] uppercase text-ink-900/70">
                    {sa.sector}
                  </span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-ink-900/20 group-hover:text-ink-900 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500 ease-luxe" />
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-[28px] font-display font-bold tracking-tight leading-tight text-balance text-ink-900">
                {sa.title}
              </h3>

              {/* Context */}
              <div className="mt-8">
                <div className="text-[10px] tracking-[0.25em] uppercase text-ink-900/35 mb-2">Contexte</div>
                <p className="text-ink-900/65 text-[15px] leading-relaxed">
                  {sa.context}
                </p>
              </div>

              {/* Approach */}
              <div className="mt-6">
                <div className="text-[10px] tracking-[0.25em] uppercase text-ink-900/35 mb-2">Notre approche</div>
                <p className="text-ink-900/65 text-[15px] leading-relaxed">
                  {sa.approach}
                </p>
              </div>

              {/* Benchmarks */}
              <div className="mt-10 pt-8 border-t border-ink-900/8">
                <div className="text-[10px] tracking-[0.25em] uppercase text-ink-900/35 mb-4">
                  Benchmarks sectoriels typiques
                </div>
                <div className="grid grid-cols-3 gap-6">
                  {sa.benchmarks.map((m) => (
                    <div key={m.label}>
                      <div className="text-2xl md:text-3xl font-display font-bold text-chrome-shimmer">
                        {m.value}
                      </div>
                      <div className="text-[10px] tracking-[0.2em] uppercase text-ink-900/45 mt-1.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {sa.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-ink-900/[0.04] border border-ink-900/8 text-[10px] tracking-wider uppercase text-ink-900/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
