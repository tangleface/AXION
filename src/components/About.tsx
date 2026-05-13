'use client';

import { motion } from 'framer-motion';
import { Eye, Compass, Zap, Target, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { fadeUp, staggerContainer, easeLuxe } from '@/lib/motion-variants';

const principles = [
  {
    icon: Eye,
    title: 'Vision',
    description: 'Lecture stratégique avant tout outil. Le bon problème vaut mieux que la bonne solution.'
  },
  {
    icon: Compass,
    title: 'Clarity',
    description: 'Du complexe rendu lisible et actionnable. Pas de jargon. Pas de slide pour le tiroir.'
  },
  {
    icon: Zap,
    title: 'Technology',
    description: 'Stack moderne, intégrations industrielles éprouvées, sécurité enterprise.'
  },
  {
    icon: Target,
    title: 'Execution',
    description: 'Livraison sur le terrain, avec vos équipes. Du POC à la production. Sans drame.'
  },
  {
    icon: ShieldCheck,
    title: 'Impact',
    description: 'KPIs partagés, ROI mesurable, résultats durables. Vous nous mesurez sur la valeur.'
  }
];

export function About() {
  return (
    <section id="about" className="relative py-32 md:py-40 overflow-hidden bg-cream">
      <div className="absolute inset-0 grid-bg opacity-20 mask-fade-edges pointer-events-none" aria-hidden="true" />

      <div className="container-luxe relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left content */}
          <div className="lg:col-span-7">
            <SectionHeading
              tag="Studio"
              title={
                <>
                  Un studio à l'intersection de la <span className="text-chrome-shimmer">stratégie</span>,
                  de la <span className="text-chrome-shimmer">technologie</span> et des <span className="text-chrome-shimmer">systèmes intelligents</span>.
                </>
              }
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUp}
              className="mt-10 space-y-6 text-lg text-ink-900/65 leading-relaxed max-w-2xl"
            >
              <p>
                Axion Studio est une structure hybride qui réunit des expertises souvent séparées :
                la stratégie, la communication, la conception digitale, le développement de solutions
                et l'innovation appliquée.
              </p>
              <p>
                Nous concevons des systèmes qui aident les organisations à <em className="text-ink-900 not-italic font-medium">mieux comprendre</em> leurs environnements,
                à <em className="text-ink-900 not-italic font-medium">mieux piloter</em> leurs opérations et à <em className="text-ink-900 not-italic font-medium">mieux préparer</em> leurs décisions.
              </p>
            </motion.div>

            {/* Big stat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeLuxe, delay: 0.2 }}
              className="mt-16 pt-10 border-t border-ink-900/8"
            >
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl md:text-5xl font-display font-bold text-chrome-shimmer">
                    04
                  </div>
                  <div className="text-[11px] tracking-[0.25em] uppercase text-ink-900/45 mt-3">
                    Piliers stratégiques
                  </div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-display font-bold text-chrome-shimmer">
                    06
                  </div>
                  <div className="text-[11px] tracking-[0.25em] uppercase text-ink-900/45 mt-3">
                    Secteurs d'intervention
                  </div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-display font-bold text-chrome-shimmer">
                    MENA
                  </div>
                  <div className="text-[11px] tracking-[0.25em] uppercase text-ink-900/45 mt-3">
                    Zone d'intervention
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right principles */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
            className="lg:col-span-5 space-y-1"
          >
            <div className="text-[11px] tracking-[0.25em] uppercase text-chrome-700 mb-8">
              Nos principes
            </div>
            {principles.map((p) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  variants={fadeUp}
                  className="group flex items-start gap-5 py-6 border-b border-ink-900/8 last:border-0 transition-colors duration-500"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-chrome-200 to-cream-200 border border-chrome-300/40 flex items-center justify-center group-hover:border-chrome-500/50 transition-colors duration-500">
                    <Icon className="w-5 h-5 text-ink-900" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-lg text-ink-900">
                      {p.title}
                    </h3>
                    <p className="text-sm text-ink-900/55 mt-1.5 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
