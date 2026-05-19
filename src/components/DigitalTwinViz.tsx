'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Eye, Database, Activity, GitBranch, Sparkles, ChevronRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { fadeUp, easeLuxe } from '@/lib/motion-variants';

const layers = [
  {
    id: 'visualize',
    icon: Eye,
    title: 'Visualize',
    subtitle: 'Voir l\'invisible',
    description: 'Modélisation 3D temps réel de vos actifs, lignes et infrastructures. Chaque capteur, chaque flux, chaque dérive devient lisible.'
  },
  {
    id: 'centralize',
    icon: Database,
    title: 'Centralize',
    subtitle: 'Unifier la donnée',
    description: 'Capteurs IoT, SCADA, MES, ERP, qualité. Toutes vos sources fusionnées en un seul système de vérité.'
  },
  {
    id: 'monitor',
    icon: Activity,
    title: 'Monitor',
    subtitle: 'Suivre en continu',
    description: 'Tableaux de bord opérationnels et décisionnels. Alertes intelligentes. Cockpit C-Level disponible 24/7.'
  },
  {
    id: 'analyze',
    icon: GitBranch,
    title: 'Analyze',
    subtitle: 'Comprendre & arbitrer',
    description: 'Corrélations process automatiques. Identification des leviers réels d\'optimisation. Pas du dashboarding — de l\'intelligence.'
  },
  {
    id: 'simulate',
    icon: Sparkles,
    title: 'Simulate',
    subtitle: 'Tester l\'avenir',
    description: 'Scénarios « what if » sur paramètres process, charges, configurations. Avant d\'investir dans le réel.'
  }
];

export function DigitalTwinViz() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
  const orbY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      id="digital-twin"
      ref={sectionRef}
      className="relative py-32 md:py-44 overflow-hidden bg-ink-900 text-cream"
    >
      {/* Dark premium background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(212, 204, 185, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 204, 185, 0.04) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 90%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 50%, transparent 90%)'
          }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] max-w-[1200px] max-h-[1200px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(184, 179, 166, 0.18), transparent 50%)',
            y: orbY
          }}
        />
      </div>

      <div className="container-luxe relative z-10">
        {/* Custom heading for dark variant */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="max-w-3xl"
        >
          <div className="section-tag mb-6 text-chrome-300">
            <span>Capability — Systems × Intelligence</span>
          </div>
          <h2 className="text-display-lg font-display tracking-tight text-balance text-cream">
            Digital Twin —<br />
            <span className="text-chrome-shimmer">une réplique vivante</span> de votre réalité opérationnelle.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-cream/70 leading-relaxed text-balance">
            Pas un modèle 3D. Une interface intelligente qui transforme un site, un actif ou une infrastructure en système lisible, pilotable et capable de simulation. L'application la plus tangible de nos piliers <em className="not-italic text-cream font-medium">Systems</em> et <em className="not-italic text-cream font-medium">Intelligence</em> — adaptable à toute industrie où les actifs critiques produisent de la donnée.
          </p>
        </motion.div>

        {/* Interactive layers */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: list */}
          <div className="lg:col-span-5">
            <ul className="space-y-1" role="tablist">
              {layers.map((layer, idx) => {
                const Icon = layer.icon;
                const isActive = active === idx;
                return (
                  <li key={layer.id} role="presentation">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActive(idx)}
                      onMouseEnter={() => setActive(idx)}
                      className={`group w-full flex items-center gap-5 px-5 py-5 rounded-xl text-left transition-all duration-500 ease-luxe ${
                        isActive
                          ? 'bg-gradient-to-r from-cream/8 to-transparent border-l-2 border-chrome-300'
                          : 'border-l-2 border-transparent hover:bg-cream/[0.03]'
                      }`}
                    >
                      <div
                        className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ease-luxe ${
                          isActive
                            ? 'bg-chrome-200 text-ink-900 shadow-chrome-glow'
                            : 'bg-cream/[0.05] text-cream/40 group-hover:text-chrome-200 group-hover:bg-cream/[0.08]'
                        }`}
                      >
                        <Icon className="w-5 h-5" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-[10px] text-chrome-300/70 tracking-wider">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <h3
                            className={`font-display font-bold text-xl md:text-2xl transition-colors duration-500 ${
                              isActive ? 'text-cream' : 'text-cream/60 group-hover:text-cream'
                            }`}
                          >
                            {layer.title}
                          </h3>
                        </div>
                        <p
                          className={`text-sm mt-1 transition-colors duration-500 ${
                            isActive ? 'text-chrome-300' : 'text-cream/30 group-hover:text-cream/50'
                          }`}
                        >
                          {layer.subtitle}
                        </p>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 transition-all duration-500 ${
                          isActive
                            ? 'text-chrome-300 translate-x-1'
                            : 'text-cream/20 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
                        }`}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right: visual panel */}
          <div className="lg:col-span-7 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1, ease: easeLuxe }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 border border-cream/8 shadow-luxe-dark"
            >
              {/* Visualization background */}
              <div className="absolute inset-0">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(212, 204, 185, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 204, 185, 0.06) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'radial-gradient(ellipse at top right, rgba(184, 179, 166, 0.25), transparent 50%), radial-gradient(ellipse at bottom left, rgba(154, 148, 133, 0.15), transparent 50%)'
                  }}
                />
              </div>

              {/* HUD overlay */}
              <div className="absolute inset-0 p-8 flex flex-col">
                <div className="flex items-center justify-between text-[10px] tracking-[0.25em] uppercase">
                  <span className="text-chrome-300 flex items-center gap-2">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-chrome-300 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-chrome-300" />
                    </span>
                    Live · DT-001
                  </span>
                  <span className="text-cream/40">RT · 12ms</span>
                </div>

                {/* Center stage — animated abstract */}
                <div className="flex-1 flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    {/* Outer ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full border border-chrome-300/25"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                    >
                      {[0, 60, 120, 180, 240, 300].map((deg) => (
                        <div
                          key={deg}
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-chrome-300/70"
                          style={{
                            transform: `translate(-50%, -50%) rotate(${deg}deg) translateY(-128px)`
                          }}
                        />
                      ))}
                    </motion.div>

                    {/* Middle ring */}
                    <motion.div
                      className="absolute inset-6 rounded-full border border-chrome-300/35"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    />

                    {/* Inner ring */}
                    <motion.div
                      className="absolute inset-12 rounded-full border-2 border-chrome-300/55"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                    />

                    {/* Core */}
                    <motion.div
                      className="absolute inset-20 rounded-full bg-gradient-to-br from-cream to-chrome-400 shadow-chrome-glow-strong"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    />

                    {/* Label */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[9px] tracking-[0.3em] uppercase text-ink-900 font-bold">
                        Axion
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom — layer details */}
                <motion.div
                  key={layers[active].id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: easeLuxe }}
                  className="pt-6 border-t border-cream/8"
                >
                  <div className="flex items-baseline justify-between mb-3">
                    <h4 className="font-display font-bold text-2xl text-cream">
                      {layers[active].title}
                    </h4>
                    <span className="font-mono text-[10px] text-chrome-300/70">
                      LAYER {String(active + 1).padStart(2, '0')} / {String(layers.length).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="text-sm text-cream/65 leading-relaxed">
                    {layers[active].description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom strip — values created */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUp}
          className="mt-20 pt-12 border-t border-cream/8"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-6">
            {[
              'Visualize',
              'Centralize',
              'Monitor',
              'Analyze',
              'Simulate',
              'Optimize'
            ].map((value) => (
              <div key={value} className="flex flex-col items-start gap-3">
                <div className="w-8 h-px bg-chrome-300/50" />
                <span className="font-display font-bold text-lg text-cream">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
