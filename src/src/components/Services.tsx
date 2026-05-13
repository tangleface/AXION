'use client';

import { motion } from 'framer-motion';
import {
  Layers3,
  Compass,
  Sparkles,
  Network,
  ArrowUpRight,
  type LucideIcon
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { services } from '@/data/services';
import { fadeUp, staggerContainer, easeLuxe } from '@/lib/motion-variants';

const iconMap: Record<string, LucideIcon> = {
  Layers3,
  Compass,
  Sparkles,
  Network
};

export function Services() {
  return (
    <section id="services" className="relative py-32 md:py-40 overflow-hidden bg-cream">
      <div className="absolute inset-0 grid-bg opacity-25 mask-fade-edges pointer-events-none" aria-hidden="true" />

      <div className="container-luxe relative">
        <SectionHeading
          tag="Notre approche"
          title={
            <>
              Quatre piliers complémentaires <span className="text-chrome-shimmer">pour traiter la vision, l'expérience, la technologie et la performance opérationnelle.</span>
            </>
          }
          subtitle="Axion Studio est une structure hybride qui réunit des expertises souvent séparées. Notre rôle : transformer des besoins complexes en systèmes clairs, utiles et performants."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-px bg-ink-900/[0.06] border border-ink-900/[0.06] rounded-2xl overflow-hidden"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Layers3;
            return (
              <motion.article
                key={service.id}
                variants={fadeUp}
                whileHover="hover"
                initial="rest"
                animate="rest"
                className="group relative bg-cream p-8 md:p-12 transition-colors duration-700 hover:bg-cream-200"
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
                <p className="mt-6 text-ink-900/65 text-[15px] leading-relaxed">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="mt-8 space-y-2.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-[13px] text-ink-900/55">
                      <span className="text-chrome-600 mt-0.5">›</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover arrow */}
                <div className="mt-10 inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-ink-900/30 group-hover:text-ink-900 transition-colors duration-500">
                  <span>En savoir plus</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500 ease-luxe" />
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
