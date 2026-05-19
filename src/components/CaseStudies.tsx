'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useCases } from '@/data/case-studies';
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
            tag="Cross-industry applications"
            title={
              <>
                Des écosystèmes intelligents <span className="text-chrome-shimmer">déployés à travers les industries.</span>
              </>
            }
            subtitle="Là où nos quatre piliers se conjuguent pour créer de la valeur. Chaque environnement reçoit un système adapté — pas un produit reproductible. La preuve par l'éventail."
          />
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeLuxe }}
            href="#contact"
            className="group hidden md:inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-ink-900/60 hover:text-ink-900 transition-colors duration-500 self-start md:self-end"
          >
            <span>Discuter de votre contexte</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500 ease-luxe" />
          </motion.a>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-900/[0.06] border border-ink-900/[0.06] rounded-2xl overflow-hidden"
        >
          {useCases.map((uc) => (
            <motion.article
              key={uc.id}
              variants={fadeUp}
              className="group relative bg-cream p-7 md:p-8 hover:bg-cream-200 transition-colors duration-700 flex flex-col"
            >
              {/* Top: number + arrow */}
              <div className="flex items-start justify-between mb-6">
                <span className="font-mono text-[10px] tracking-wider text-chrome-700">
                  {uc.number}
                </span>
                <ArrowUpRight className="w-4 h-4 text-ink-900/20 group-hover:text-ink-900 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500 ease-luxe" />
              </div>

              {/* Sector tag */}
              <div className="text-[10px] tracking-[0.2em] uppercase text-ink-900/55 mb-3">
                {uc.sector}
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-display font-bold tracking-tight leading-snug text-balance text-ink-900">
                {uc.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-[13.5px] leading-relaxed text-ink-900/60 flex-grow">
                {uc.description}
              </p>

              {/* Capabilities tags */}
              <div className="mt-6 pt-5 border-t border-ink-900/8 flex flex-wrap gap-1.5">
                {uc.capabilities.map((cap) => (
                  <span
                    key={cap}
                    className="px-2 py-0.5 rounded-full bg-ink-900/[0.04] border border-ink-900/8 text-[9.5px] tracking-wider uppercase text-ink-900/55"
                  >
                    {cap}
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
