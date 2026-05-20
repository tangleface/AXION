'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeUp, easeLuxe } from '@/lib/motion-variants';

/**
 * Transition band — "Problem -> System" strategic logic.
 * Reinforces the positioning: fragmented complexity -> intelligent systems.
 * Kept concise and premium; placed between Hero and Services.
 */
export function ProblemSystem() {
  return (
    <section className="relative py-20 md:py-28 bg-cream-100 border-y border-ink-900/[0.10] overflow-hidden">
      {/* subtle ambient teal glow, very faint */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vw] max-w-[900px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(24,182,197,0.05), transparent 70%)',
            filter: 'blur(60px)'
          }}
        />
      </div>

      <div className="container-luxe relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center"
        >
          {/* Problem */}
          <div className="lg:col-span-5">
            <div className="section-tag text-chrome-700 mb-5">
              <span>Le constat</span>
            </div>
            <p className="text-2xl md:text-3xl font-display font-medium text-ink-900/45 leading-snug tracking-tight">
              Données fragmentées.<br />
              Décisions lentes.<br />
              Systèmes déconnectés.
            </p>
          </div>

          {/* Connector */}
          <div className="lg:col-span-2 flex lg:justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: easeLuxe, delay: 0.2 }}
              className="flex items-center gap-2"
            >
              <span className="hidden lg:block h-px w-8 bg-gradient-to-r from-transparent to-teal-electric/60" />
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-teal-electric/40 bg-teal-electric/[0.06]">
                <ArrowRight className="w-4 h-4 text-teal-primary" />
              </span>
              <span className="hidden lg:block h-px w-8 bg-gradient-to-r from-teal-electric/60 to-transparent" />
            </motion.div>
          </div>

          {/* System */}
          <div className="lg:col-span-5">
            <div className="section-tag text-teal-primary mb-5">
              <span>Notre réponse</span>
            </div>
            <p className="text-2xl md:text-3xl font-display font-semibold text-ink-900 leading-snug tracking-tight">
              Nous transformons la complexité en{' '}
              <span className="text-axion-gradient">systèmes opérationnels intelligents</span>.
            </p>
            <p className="mt-4 text-base text-ink-900/65 leading-relaxed max-w-md">
              De la complexité dispersée à la clarté opérationnelle — un système adapté à votre métier, pas un produit reproductible.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
