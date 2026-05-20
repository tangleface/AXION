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
              tag="Innovation & Intelligence Studio"
              title={
                <>
                  Un studio d'innovation à l'intersection de la <span className="text-chrome-shimmer">stratégie</span>, des <span className="text-chrome-shimmer">systèmes intelligents</span> et de l'adaptation cross-industries.
                </>
              }
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUp}
              className="mt-10 space-y-6 text-lg text-ink-900/72 leading-relaxed max-w-2xl"
            >
              <p>
                Axion Studio conçoit des écosystèmes intelligents — qui s'ajustent à votre métier,
                votre maturité digitale et votre contexte opérationnel. Quatre piliers structurent
                toutes nos interventions :{' '}
                <em className="text-ink-900 not-italic font-medium">Insight</em>,{' '}
                <em className="text-ink-900 not-italic font-medium">Systems</em>,{' '}
                <em className="text-ink-900 not-italic font-medium">Experience</em>,{' '}
                <em className="text-ink-900 not-italic font-medium">Intelligence</em>.
              </p>
              <p>
                <strong className="text-ink-900 font-medium">Notre rôle :</strong> transformer la complexité,
                quelle que soit l'industrie, en capacités de décision intelligentes. Nous ne livrons pas
                un produit fixe — nous co-concevons des systèmes qui aident les organisations à{' '}
                <em className="text-ink-900 not-italic font-medium">comprendre</em>,{' '}
                <em className="text-ink-900 not-italic font-medium">opérer</em>,{' '}
                <em className="text-ink-900 not-italic font-medium">prédire</em> et{' '}
                <em className="text-ink-900 not-italic font-medium">évoluer</em>{' '}
                dans leur propre langage métier.
              </p>
            </motion.div>

            {/* Big stat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeLuxe, delay: 0.2 }}
              className="mt-16 pt-10 border-t border-ink-900/12"
            >
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl md:text-5xl font-display font-bold text-chrome-shimmer">
                    04
                  </div>
                  <div className="text-[11px] tracking-[0.25em] uppercase text-ink-900/58 mt-3">
                    Piliers stratégiques
                  </div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-display font-bold text-chrome-shimmer">
                    08
                  </div>
                  <div className="text-[11px] tracking-[0.25em] uppercase text-ink-900/58 mt-3">
                    Industries adaptées
                  </div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-display font-bold text-chrome-shimmer">
                    MENA
                  </div>
                  <div className="text-[11px] tracking-[0.25em] uppercase text-ink-900/58 mt-3">
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
                  className="group flex items-start gap-5 py-6 border-b border-ink-900/12 last:border-0 transition-colors duration-500"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-chrome-200 to-cream-200 border border-chrome-300/40 flex items-center justify-center group-hover:border-chrome-500/50 transition-colors duration-500">
                    <Icon className="w-5 h-5 text-ink-900" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-lg text-ink-900">
                      {p.title}
                    </h3>
                    <p className="text-sm text-ink-900/68 mt-1.5 leading-relaxed">
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
