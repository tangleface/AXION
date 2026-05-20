'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Compass,
  Network,
  Sparkles,
  Brain,
  Layers3,
  ArrowUpRight,
  type LucideIcon
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { services } from '@/data/services';
import { fadeUp, staggerContainer, easeLuxe } from '@/lib/motion-variants';

const iconMap: Record<string, LucideIcon> = {
  Compass,
  Network,
  Sparkles,
  Brain,
  Layers3
};

export function Services() {
  return (
    <section id="services" className="relative py-32 md:py-40 overflow-hidden bg-cream">
      <div className="absolute inset-0 grid-bg opacity-25 mask-fade-edges pointer-events-none" aria-hidden="true" />

      <div className="container-luxe relative">
        <SectionHeading
          tag="Adaptive Expertise"
          title={
            <>
              Quatre piliers <span className="text-chrome-shimmer">complémentaires, adaptés à votre contexte.</span>
            </>
          }
          subtitle="Insight, Systems, Experience, Intelligence — un même système de pensée, adapté à chaque industrie. De la lecture stratégique au déploiement, nous concevons des écosystèmes intelligents qui s'ajustent à votre métier — pas un produit reproductible."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-px bg-ink-900/[0.06] border border-ink-900/[0.10] rounded-2xl overflow-hidden"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Layers3;
            return (
              <Link
                key={service.id}
                href={`/${service.id}`}
                className="block"
              >
              <motion.article
                variants={fadeUp}
                whileHover="hover"
                initial="rest"
                animate="rest"
                className="group relative bg-cream p-8 md:p-12 transition-colors duration-700 hover:bg-cream-200 cursor-pointer h-full"
              >
                {/* Chrome hover line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-ink-900/0 group-hover:bg-ink-900/40 transition-colors duration-700" />

                {/* Top row */}
                <div className="flex items-start justify-between mb-10">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-chrome-700 tracking-wider">
                      {service.number}
                    </span>
                    {service.flagship && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-ink-900 text-cream text-[9px] tracking-[0.2em] uppercase font-bold">
                        <span className="w-1 h-1 rounded-full bg-cream" />
                        Flagship
                      </span>
                    )}
                  </div>
                  <motion.div
                    variants={{
                      rest: { rotate: 0, scale: 1 },
                      hover: { rotate: 8, scale: 1.05, transition: { duration: 0.5, ease: easeLuxe } }
                    }}
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-chrome-200 to-cream-200 border border-chrome-300/40 flex items-center justify-center shadow-sm"
                  >
                    <Icon className="w-5 h-5 text-ink-900" strokeWidth={1.5} />
                  </motion.div>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-display font-bold tracking-tight text-ink-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-chrome-700 tracking-wide italic">
                  {service.subtitle}
                </p>

                {/* Description */}
                <p className="mt-6 text-ink-900/72 text-[15px] leading-relaxed">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="mt-8 space-y-2.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-[13px] text-ink-900/68">
                      <span className="text-chrome-600 mt-0.5">›</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover arrow */}
                <div className="mt-10 inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-ink-900/45 group-hover:text-ink-900 transition-colors duration-500">
                  <span>En savoir plus</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500 ease-luxe" />
                </div>
              </motion.article>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
