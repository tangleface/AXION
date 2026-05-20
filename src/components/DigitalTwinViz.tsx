'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Eye,
  Database,
  Activity,
  GitBranch,
  Sparkles,
  TrendingUp,
  ChevronRight
} from 'lucide-react';
import { fadeUp, easeLuxe } from '@/lib/motion-variants';

// =====================================================================
// 6 stages — each stage has its own semantic overlay on a shared base
// operational asset. Layout is fixed so bottom title + description are
// always visible regardless of which stage is active.
// =====================================================================
const layers = [
  {
    id: 'visualize',
    icon: Eye,
    title: 'Visualize',
    subtitle: "Voir l'invisible",
    description: "Modélisation temps réel de vos actifs, lignes et infrastructures. Chaque capteur, chaque flux, chaque dérive devient lisible."
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
    description: 'Tableaux de bord opérationnels. Alertes intelligentes. Cockpit C-Level disponible 24/7.'
  },
  {
    id: 'analyze',
    icon: GitBranch,
    title: 'Analyze',
    subtitle: 'Comprendre & arbitrer',
    description: "Corrélations automatiques et anomalies détectées. Les vrais leviers d'optimisation — pas du dashboarding."
  },
  {
    id: 'simulate',
    icon: Sparkles,
    title: 'Simulate',
    subtitle: "Tester l'avenir",
    description: "Scénarios « what if » sur paramètres process, charges, configurations. Avant d'investir dans le réel."
  },
  {
    id: 'optimize',
    icon: TrendingUp,
    title: 'Optimize',
    subtitle: 'Recommander & améliorer',
    description: "Recommandations priorisées par impact : points de levier, gains chiffrés, amélioration continue."
  }
];

const SENSORS = [
  { id: 'S-01', x: 110, y: 90,  zone: 'A' },
  { id: 'S-02', x: 180, y: 90,  zone: 'B' },
  { id: 'S-03', x: 250, y: 90,  zone: 'C' },
  { id: 'S-04', x: 110, y: 168, zone: 'A' },
  { id: 'S-05', x: 180, y: 168, zone: 'B' },
  { id: 'S-06', x: 250, y: 168, zone: 'C' }
];

// =====================================================================
// Base asset — always visible operational schematic
// =====================================================================
function BaseAsset({ dim = false }: { dim?: boolean }) {
  const op = dim ? 0.22 : 0.45;
  return (
    <g id="base-asset">
      <rect x="75" y="58" width="210" height="140"
        fill="none" stroke={`rgba(212,204,185,${op})`} strokeWidth="1.2" rx="3" />
      <line x1="145" y1="58" x2="145" y2="198" stroke={`rgba(212,204,185,${op * 0.55})`} strokeWidth="0.7" />
      <line x1="215" y1="58" x2="215" y2="198" stroke={`rgba(212,204,185,${op * 0.55})`} strokeWidth="0.7" />
      <line x1="75"  y1="128" x2="285" y2="128" stroke={`rgba(212,204,185,${op * 0.55})`} strokeWidth="0.7" />
      {/* zone labels */}
      <text x="82" y="69" fill="rgba(212,204,185,0.65)" fontFamily="ui-monospace,monospace" fontSize="5.5" letterSpacing="0.6" fontWeight="600">ZONE-A</text>
      <text x="152" y="69" fill="rgba(212,204,185,0.65)" fontFamily="ui-monospace,monospace" fontSize="5.5" letterSpacing="0.6" fontWeight="600">ZONE-B</text>
      <text x="222" y="69" fill="rgba(212,204,185,0.65)" fontFamily="ui-monospace,monospace" fontSize="5.5" letterSpacing="0.6" fontWeight="600">ZONE-C</text>
      {/* default sensor dots */}
      {SENSORS.map((s) => (
        <circle key={s.id} cx={s.x} cy={s.y} r="1.8" fill="rgba(212,204,185,0.55)" />
      ))}
    </g>
  );
}

// =====================================================================
// (1) VISUALIZE — asset reveal + topology labels + scan line
// =====================================================================
function VisualizeLayer() {
  return (
    <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.45 }}>
      {/* outline emphasis around the full asset */}
      <motion.rect
        x="75" y="58" width="210" height="140"
        fill="none" stroke="#18B6C5" strokeWidth="1.4" rx="3"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: easeLuxe }}
      />
      {/* scan line sweeping up + down */}
      <motion.line
        x1="75" x2="285" stroke="#6DEAF2" strokeWidth="0.9" strokeOpacity="0.7"
        animate={{ y1: [58, 198, 58], y2: [58, 198, 58] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* glowing sensors with IDs */}
      {SENSORS.map((s, i) => (
        <motion.g
          key={s.id}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, delay: 0.4 + i * 0.08, ease: easeLuxe }}
        >
          <circle cx={s.x} cy={s.y} r="9" fill="#18B6C5" opacity="0.12" />
          <circle cx={s.x} cy={s.y} r="3.2" fill="#18B6C5" />
          <circle cx={s.x} cy={s.y} r="3.2" fill="none" stroke="#6DEAF2" strokeWidth="0.9" />
          <text x={s.x + 6} y={s.y - 4} fill="#6DEAF2" fontFamily="ui-monospace,monospace" fontSize="4.5" letterSpacing="0.3" fontWeight="600">{s.id}</text>
        </motion.g>
      ))}
      {/* top-right topology badge */}
      <motion.g
        initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <rect x="195" y="38" width="92" height="14" rx="2"
          fill="rgba(24,182,197,0.10)" stroke="rgba(24,182,197,0.50)" strokeWidth="0.7" />
        <circle cx="202" cy="45" r="2" fill="#18B6C5" />
        <text x="207" y="47" fill="#6DEAF2" fontFamily="ui-monospace,monospace" fontSize="5.5" letterSpacing="0.6" fontWeight="600">LIVE TOPOLOGY · 6 NODES</text>
      </motion.g>
      <text x="285" y="220" textAnchor="end" fill="rgba(109,234,242,0.7)" fontFamily="ui-monospace,monospace" fontSize="5.5" letterSpacing="1.2" fontWeight="600">ASSET MAP · WIREFRAME REVEAL</text>
    </motion.g>
  );
}

// =====================================================================
// (2) CENTRALIZE — animated streams + source tags + central hub
// =====================================================================
function CentralizeLayer() {
  // 6 fragmented sources converging into one unified core
  const sources = [
    { x: 30,  y: 64,  label: 'IoT' },
    { x: 30,  y: 128, label: 'MES' },
    { x: 30,  y: 192, label: 'SCADA' },
    { x: 330, y: 64,  label: 'ERP' },
    { x: 330, y: 128, label: 'API' },
    { x: 330, y: 192, label: 'Quality' }
  ];
  const cx = 180, cy = 122;
  return (
    <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      {/* convergence flow lines */}
      {sources.map((src, i) => (
        <motion.line
          key={src.label}
          x1={src.x} y1={src.y} x2={cx} y2={cy}
          stroke="#18B6C5" strokeOpacity="0.55" strokeWidth="0.9"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.85, delay: i * 0.1, ease: easeLuxe }}
        />
      ))}
      {/* animated data packets flowing inward (collect -> merge) */}
      {sources.map((src, i) => (
        <motion.circle
          key={'pkt-' + src.label}
          r="2.4" fill="#6DEAF2"
          initial={{ cx: src.x, cy: src.y, opacity: 0 }}
          animate={{ cx: [src.x, cx], cy: [src.y, cy], opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, delay: 0.7 + i * 0.16, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
      {/* source tags */}
      {sources.map((src, i) => (
        <motion.g
          key={'tag-' + src.label}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
        >
          <rect x={src.x - 22} y={src.y - 8} width="44" height="16" rx="3"
            fill="rgba(13,13,13,0.92)" stroke="#18B6C5" strokeOpacity="0.55" strokeWidth="0.8" />
          <circle cx={src.x - 13} cy={src.y} r="1.6" fill="#6DEAF2" />
          <text x={src.x + 3} y={src.y + 2.6} textAnchor="middle"
            fill="#6DEAF2" fontFamily="ui-monospace,monospace" fontSize="6" letterSpacing="0.4" fontWeight="600">{src.label}</text>
        </motion.g>
      ))}
      {/* luminous unified core */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.9, ease: easeLuxe }}
      >
        {/* outer glow */}
        <circle cx={cx} cy={cy} r="26" fill="rgba(24,182,197,0.10)" />
        <circle cx={cx} cy={cy} r="18" fill="rgba(24,182,197,0.16)" />
        {/* ring */}
        <circle cx={cx} cy={cy} r="13" fill="none" stroke="#6DEAF2" strokeOpacity="0.5" strokeWidth="0.9" />
        {/* bright core */}
        <circle cx={cx} cy={cy} r="9" fill="#18B6C5" />
        <circle cx={cx} cy={cy} r="4" fill="#6DEAF2" />
        {/* expanding pulse */}
        <motion.circle
          cx={cx} cy={cy} fill="none" stroke="#6DEAF2" strokeWidth="1.1"
          initial={{ r: 9, opacity: 0.85 }}
          animate={{ r: [9, 26], opacity: [0.85, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
        />
      </motion.g>
      {/* UNIFIED CORE label */}
      <motion.text
        x={cx} y={cy + 40} textAnchor="middle"
        fill="#6DEAF2" fontFamily="ui-monospace,monospace" fontSize="6"
        letterSpacing="1.4" fontWeight="700"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.3 }}
      >
        UNIFIED CORE
      </motion.text>
      {/* SINGLE SOURCE OF TRUTH badge */}
      <motion.g
        initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <rect x="108" y="210" width="144" height="16" rx="3"
          fill="rgba(24,182,197,0.12)" stroke="#18B6C5" strokeOpacity="0.55" strokeWidth="0.7" />
        <text x="180" y="220.5" textAnchor="middle" fill="#6DEAF2" fontFamily="ui-monospace,monospace" fontSize="5.5" letterSpacing="1.3" fontWeight="700">SINGLE SOURCE OF TRUTH</text>
      </motion.g>
    </motion.g>
  );
}

// =====================================================================
// (3) MONITOR — pulse sensors + live KPI cards + heartbeat
// =====================================================================
function MonitorLayer() {
  const kpis = [
    { x: 12,  label: 'UPTIME', value: '99.8%', color: '#4ade80' },
    { x: 12,  label: 'TEMP',   value: '42°C',  color: '#6DEAF2', y: 110 },
    { x: 12,  label: 'PRESS',  value: '1.2b',  color: '#fbbf24', y: 162 },
    { x: 308, label: 'VIBR',   value: '0.4g',  color: '#4ade80' },
    { x: 308, label: 'ENERGY', value: '8.4kW', color: '#6DEAF2', y: 110 },
    { x: 308, label: 'FLOW',   value: '2.1m³', color: '#4ade80', y: 162 }
  ];
  return (
    <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.45 }}>
      {/* pulse sensors */}
      {SENSORS.map((s, i) => (
        <g key={s.id}>
          <circle cx={s.x} cy={s.y} r="3.2" fill="#4ade80" />
          <motion.circle
            cx={s.x} cy={s.y} fill="none" stroke="#4ade80" strokeWidth="1"
            initial={{ r: 4, opacity: 0.8 }}
            animate={{ r: [4, 14], opacity: [0.8, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.25, ease: 'easeOut' }}
          />
        </g>
      ))}
      {/* live KPI mini-cards on both edges */}
      {kpis.map((k, i) => {
        const y = k.y ?? (58 + i * 26);
        return (
          <motion.g
            key={k.label + i}
            initial={{ opacity: 0, x: i < 3 ? -6 : 6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
          >
            <rect x={k.x} y={y - 9} width="44" height="20" rx="2"
              fill="rgba(13,13,13,0.92)" stroke="rgba(74,222,128,0.30)" strokeWidth="0.55" />
            <text x={k.x + 22} y={y - 2} textAnchor="middle"
              fill="rgba(212,204,185,0.65)" fontFamily="ui-monospace,monospace"
              fontSize="4.5" letterSpacing="0.6" fontWeight="600">{k.label}</text>
            <text x={k.x + 22} y={y + 7} textAnchor="middle"
              fill={k.color} fontFamily="ui-monospace,monospace"
              fontSize="6.5" letterSpacing="0.3" fontWeight="700">{k.value}</text>
          </motion.g>
        );
      })}
      {/* heartbeat / mini chart bottom-center */}
      <motion.g
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }}
      >
        <rect x="105" y="210" width="150" height="18" rx="2"
          fill="rgba(13,13,13,0.85)" stroke="rgba(74,222,128,0.3)" strokeWidth="0.55" />
        <text x="111" y="218" fill="rgba(212,204,185,0.65)" fontFamily="ui-monospace,monospace" fontSize="4.5" letterSpacing="0.5" fontWeight="600">RT · 12ms</text>
        <motion.polyline
          fill="none" stroke="#4ade80" strokeWidth="1" strokeLinecap="round"
          points="135,223 145,219 152,221 158,215 165,223 172,217 180,221 190,213 200,219 210,215 220,221 230,217 240,219 250,215"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.6, ease: easeLuxe, delay: 0.6 }}
        />
        <text x="248" y="218" textAnchor="end" fill="#4ade80" fontFamily="ui-monospace,monospace" fontSize="4.5" letterSpacing="0.5" fontWeight="600">SYSTEM STABLE</text>
      </motion.g>
    </motion.g>
  );
}

// =====================================================================
// (4) ANALYZE — anomaly + correlation + insight card
// =====================================================================
function AnalyzeLayer() {
  return (
    <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.45 }}>
      <defs>
        <marker id="arrowAmberV6" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="#fbbf24" />
        </marker>
      </defs>
      {/* anomaly zone B top — strong highlight */}
      <motion.rect
        x="145" y="58" width="70" height="70" rx="2"
        fill="rgba(251,191,36,0.16)" stroke="#fbbf24" strokeWidth="1.1"
        strokeDasharray="3,2"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
      />
      {/* zone B sensor pulsing strong */}
      <motion.circle cx="180" cy="90" r="7" fill="#fbbf24"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}
      />
      <motion.circle cx="180" cy="90" fill="none" stroke="#fbbf24" strokeWidth="1.1"
        animate={{ r: [7, 18], opacity: [0.85, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
      />
      {/* ANOMALY DETECTED label */}
      <motion.g
        initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <rect x="148" y="38" width="64" height="14" rx="2"
          fill="rgba(251,191,36,0.14)" stroke="#fbbf24" strokeOpacity="0.55" strokeWidth="0.7" />
        <circle cx="155" cy="45" r="2" fill="#fbbf24" />
        <text x="160" y="47" fill="#fbbf24" fontFamily="ui-monospace,monospace" fontSize="5.5" letterSpacing="0.6" fontWeight="700">ANOMALY · σ +2.4</text>
      </motion.g>
      {/* correlation arrow */}
      <motion.path
        d="M 180 96 Q 215 130 250 168"
        fill="none" stroke="#fbbf24" strokeWidth="1.3" strokeDasharray="3,2"
        markerEnd="url(#arrowAmberV6)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.5 }}
      />
      <motion.text
        x="218" y="130" fill="#fbbf24" fontFamily="ui-monospace,monospace"
        fontSize="4.5" letterSpacing="0.5" fontWeight="600"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}
      >
        CORRELATION
      </motion.text>
      {/* insight card */}
      <motion.g
        initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <rect x="90" y="206" width="180" height="26" rx="3"
          fill="rgba(13,13,13,0.92)" stroke="#fbbf24" strokeOpacity="0.55" strokeWidth="0.8" />
        <text x="98" y="215" fill="#fbbf24" fontFamily="ui-monospace,monospace" fontSize="5" letterSpacing="0.7" fontWeight="700">INSIGHT · ZONE-B</text>
        <text x="98" y="222" fill="rgba(244,241,236,0.92)" fontFamily="ui-monospace,monospace" fontSize="5">Cause: pressure drop @ S-02</text>
        <text x="98" y="229" fill="rgba(244,241,236,0.72)" fontFamily="ui-monospace,monospace" fontSize="5">Effect: yield −8.2% downstream</text>
      </motion.g>
    </motion.g>
  );
}

// =====================================================================
// (5) SIMULATE — A/B branches with projected paths + outcome badge
// =====================================================================
function SimulateLayer() {
  return (
    <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.45 }}>
      <defs>
        <marker id="arrowCyanV6" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="#6DEAF2" />
        </marker>
        <marker id="arrowVioletV6" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="#a78bfa" />
        </marker>
      </defs>

      {/* Current asset emphasis */}
      <rect x="75" y="58" width="210" height="140"
        fill="none" stroke="#6DEAF2" strokeOpacity="0.7" strokeWidth="1.2" rx="3" />

      {/* Ghost B asset, offset and dashed */}
      <motion.g
        initial={{ x: 0, y: 0, opacity: 0 }}
        animate={{ x: 16, y: 12, opacity: 0.55 }}
        transition={{ duration: 0.9, ease: easeLuxe, delay: 0.2 }}
      >
        <rect x="75" y="58" width="210" height="140"
          fill="rgba(167,139,250,0.05)" stroke="#a78bfa" strokeOpacity="0.7" strokeWidth="1" strokeDasharray="3,3" rx="3" />
        {SENSORS.map((s) => (
          <circle key={s.id + '-ghost'} cx={s.x} cy={s.y} r="2" fill="#a78bfa" opacity="0.7" />
        ))}
      </motion.g>

      {/* Branching arrows from middle node — divergent paths */}
      <motion.path
        d="M 180 128 L 246 128"
        fill="none" stroke="#6DEAF2" strokeOpacity="0.85" strokeWidth="1.4"
        markerEnd="url(#arrowCyanV6)"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
      <motion.path
        d="M 180 128 Q 215 152 252 178"
        fill="none" stroke="#a78bfa" strokeOpacity="0.85" strokeWidth="1.4" strokeDasharray="3,2"
        markerEnd="url(#arrowVioletV6)"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 0.9, delay: 0.7 }}
      />

      {/* Scenario A label */}
      <motion.g
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }}
      >
        <rect x="75" y="35" width="105" height="16" rx="2"
          fill="rgba(24,182,197,0.10)" stroke="#6DEAF2" strokeOpacity="0.6" strokeWidth="0.7" />
        <circle cx="82" cy="43" r="2" fill="#6DEAF2" />
        <text x="88" y="45" fill="#6DEAF2" fontFamily="ui-monospace,monospace" fontSize="5.5" letterSpacing="0.5" fontWeight="700">SCENARIO A · current</text>
      </motion.g>

      {/* Scenario B label */}
      <motion.g
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.9 }}
      >
        <rect x="185" y="35" width="115" height="16" rx="2"
          fill="rgba(167,139,250,0.10)" stroke="#a78bfa" strokeOpacity="0.6" strokeWidth="0.7" strokeDasharray="2,1.5" />
        <circle cx="192" cy="43" r="2" fill="#a78bfa" />
        <text x="198" y="45" fill="#a78bfa" fontFamily="ui-monospace,monospace" fontSize="5.5" letterSpacing="0.5" fontWeight="700">SCENARIO B · optimized</text>
      </motion.g>

      {/* Projected outcome card */}
      <motion.g
        initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <rect x="90" y="206" width="180" height="26" rx="3"
          fill="rgba(13,13,13,0.92)" stroke="#a78bfa" strokeOpacity="0.55" strokeWidth="0.8" />
        <text x="98" y="215" fill="#a78bfa" fontFamily="ui-monospace,monospace" fontSize="5" letterSpacing="0.7" fontWeight="700">PROJECTED OUTCOME · 90d</text>
        <text x="98" y="222" fill="rgba(244,241,236,0.92)" fontFamily="ui-monospace,monospace" fontSize="5">Scenario B → +14.2% efficiency</text>
        <text x="98" y="229" fill="rgba(244,241,236,0.72)" fontFamily="ui-monospace,monospace" fontSize="5">Risk reduced · confidence 0.78</text>
      </motion.g>
    </motion.g>
  );
}

// =====================================================================
// (6) OPTIMIZE — gain badges + leverage point + recommended action card
// =====================================================================
function OptimizeLayer() {
  const gains = [
    { x: 110, val: '+12%' },
    { x: 180, val: '−18%' },
    { x: 250, val: '+8%'  }
  ];
  return (
    <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.45 }}>
      {/* gain badges above zones */}
      {gains.map((g, i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: easeLuxe }}
        >
          <rect x={g.x - 18} y={42} width="36" height="14" rx="2"
            fill="rgba(74,222,128,0.12)" stroke="#4ade80" strokeOpacity="0.55" strokeWidth="0.7" />
          <text x={g.x} y={52} textAnchor="middle"
            fill="#4ade80" fontFamily="ui-monospace,monospace" fontSize="6.5"
            letterSpacing="0.4" fontWeight="700">{g.val}</text>
          <line x1={g.x} y1={56} x2={g.x} y2={58}
            stroke="rgba(74,222,128,0.55)" strokeWidth="0.7" />
        </motion.g>
      ))}

      {/* highlight optimized zone (B, bottom) */}
      <motion.rect
        x="145" y="128" width="70" height="70" rx="2"
        fill="rgba(74,222,128,0.08)" stroke="#4ade80" strokeOpacity="0.55" strokeWidth="1"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}
      />

      {/* leverage point — S-05 sensor with ACTION label */}
      <motion.g
        initial={{ scale: 0 }} animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <circle cx="180" cy="168" r="11" fill="rgba(74,222,128,0.18)" />
        <circle cx="180" cy="168" r="5" fill="#4ade80" />
        <motion.circle
          cx="180" cy="168" r="5" fill="none" stroke="#4ade80" strokeWidth="1"
          animate={{ r: [5, 16], opacity: [0.85, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
        />
        <text x="180" y="190" textAnchor="middle"
          fill="#4ade80" fontFamily="ui-monospace,monospace" fontSize="5.5"
          letterSpacing="0.6" fontWeight="700">LEVERAGE POINT</text>
      </motion.g>

      {/* Recommended action card — detailed */}
      <motion.g
        initial={{ opacity: 0, x: 6 }} animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <rect x="75" y="206" width="210" height="26" rx="3"
          fill="rgba(13,13,13,0.94)" stroke="#4ade80" strokeOpacity="0.55" strokeWidth="0.8" />
        <text x="82" y="215" fill="#4ade80" fontFamily="ui-monospace,monospace" fontSize="5" letterSpacing="0.7" fontWeight="700">RECOMMENDED ACTION</text>
        <text x="82" y="222" fill="rgba(244,241,236,0.92)" fontFamily="ui-monospace,monospace" fontSize="5">Reduce pressure variance · Zone-B</text>
        <text x="82" y="229" fill="rgba(244,241,236,0.72)" fontFamily="ui-monospace,monospace" fontSize="5">Gain: −8% energy · Priority HIGH</text>
        {/* priority badge */}
        <rect x="240" y="210" width="38" height="14" rx="2" fill="rgba(74,222,128,0.18)" stroke="#4ade80" strokeOpacity="0.6" strokeWidth="0.6" />
        <text x="259" y="220" textAnchor="middle" fill="#4ade80" fontFamily="ui-monospace,monospace" fontSize="5.5" letterSpacing="0.6" fontWeight="700">READY</text>
      </motion.g>
    </motion.g>
  );
}

// =====================================================================
// SVG composition
// =====================================================================
function DTVisualization({ active }: { active: number }) {
  // Slightly dim the base when overlays are visually dense (Analyze, Simulate, Optimize)
  const dim = active >= 3;
  return (
    <svg viewBox="0 0 360 240" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <BaseAsset dim={dim} />
      <AnimatePresence mode="sync">
        {active === 0 && <VisualizeLayer  key="visualize"  />}
        {active === 1 && <CentralizeLayer key="centralize" />}
        {active === 2 && <MonitorLayer    key="monitor"    />}
        {active === 3 && <AnalyzeLayer    key="analyze"    />}
        {active === 4 && <SimulateLayer   key="simulate"   />}
        {active === 5 && <OptimizeLayer   key="optimize"   />}
      </AnimatePresence>
    </svg>
  );
}

// =====================================================================
// MAIN COMPONENT
// =====================================================================
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
            background: 'radial-gradient(circle, rgba(24, 182, 197, 0.12), transparent 50%)',
            y: orbY
          }}
        />
      </div>

      <div className="container-luxe relative z-10">
        {/* Heading */}
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
          <p className="mt-6 text-lg md:text-xl text-cream/75 leading-relaxed text-balance">
            Pas un modèle 3D. Une interface intelligente qui transforme un site, un actif ou une infrastructure en système lisible, pilotable et capable de simulation. L&apos;application la plus tangible de nos piliers <em className="not-italic text-cream font-medium">Systems</em> et <em className="not-italic text-cream font-medium">Intelligence</em> — adaptable à toute industrie où les actifs critiques produisent de la donnée.
          </p>
        </motion.div>

        {/* Narrative progress dots */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeLuxe, delay: 0.2 }}
          className="mt-10 flex items-center gap-2"
          aria-hidden="true"
        >
          {layers.map((_, i) => (
            <div
              key={i}
              className={`h-0.5 rounded-full transition-all duration-500 ease-luxe ${
                i === active
                  ? 'w-10 bg-teal-electric'
                  : i < active
                  ? 'w-5 bg-cream/40'
                  : 'w-5 bg-cream/12'
              }`}
              style={{ backgroundColor: i === active ? '#18B6C5' : undefined }}
            />
          ))}
          <span className="ml-3 font-mono text-[10px] tracking-[0.25em] uppercase text-cream/55">
            Stage {String(active + 1).padStart(2, '0')} / {String(layers.length).padStart(2, '0')} · {layers[active].title}
          </span>
        </motion.div>

        {/* Interactive grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
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
                          ? 'bg-gradient-to-r from-cream/10 to-transparent border-l-2'
                          : 'border-l-2 border-transparent hover:bg-cream/[0.04]'
                      }`}
                      style={isActive ? { borderLeftColor: '#18B6C5' } : undefined}
                    >
                      <div
                        className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ease-luxe ${
                          isActive
                            ? 'text-ink-900 shadow-chrome-glow'
                            : 'bg-cream/[0.05] text-cream/45 group-hover:text-chrome-200 group-hover:bg-cream/[0.08]'
                        }`}
                        style={isActive ? { background: 'linear-gradient(135deg, #6DEAF2, #18B6C5)' } : undefined}
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
                              isActive ? 'text-cream' : 'text-cream/65 group-hover:text-cream'
                            }`}
                          >
                            {layer.title}
                          </h3>
                        </div>
                        <p
                          className={`text-sm mt-1 transition-colors duration-500 ${
                            isActive ? 'text-cream/75' : 'text-cream/40 group-hover:text-cream/60'
                          }`}
                          style={isActive ? { color: '#6DEAF2' } : undefined}
                        >
                          {layer.subtitle}
                        </p>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 transition-all duration-500 ${
                          isActive
                            ? 'translate-x-1'
                            : 'text-cream/25 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
                        }`}
                        style={isActive ? { color: '#6DEAF2' } : undefined}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right: visual panel — locked layout to prevent clipping */}
          <div className="lg:col-span-7 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1, ease: easeLuxe }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 border border-cream/10 shadow-luxe-dark"
            >
              {/* Background grid + ambient gradient */}
              <div className="absolute inset-0">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(212, 204, 185, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 204, 185, 0.05) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'radial-gradient(ellipse at top right, rgba(24, 182, 197, 0.10), transparent 55%), radial-gradient(ellipse at bottom left, rgba(154, 148, 133, 0.10), transparent 55%)'
                  }}
                />
              </div>

              {/* HUD + Visualization + Bottom — locked grid */}
              <div className="absolute inset-0 grid grid-rows-[auto_minmax(0,1fr)_auto] p-6">
                {/* HUD top — fixed */}
                <div className="flex items-center justify-between text-[10px] tracking-[0.25em] uppercase">
                  <span className="flex items-center gap-2" style={{ color: '#6DEAF2' }}>
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#18B6C5' }} />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: '#18B6C5' }} />
                    </span>
                    Live · DT-001
                  </span>
                  <span className="text-cream/55 font-mono">
                    STAGE {String(active + 1).padStart(2, '0')} / {String(layers.length).padStart(2, '0')}
                  </span>
                </div>

                {/* Center — visualization (min-h-0 so it can shrink, never the bottom) */}
                <div className="min-h-0 flex items-center justify-center py-2">
                  <DTVisualization active={active} />
                </div>

                {/* Bottom — always visible, fixed footer area */}
                <motion.div
                  key={layers[active].id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: easeLuxe }}
                  className="pt-3 mt-2 border-t border-cream/10"
                >
                  <div className="flex items-baseline justify-between mb-1.5">
                    <h4 className="font-display font-bold text-2xl text-cream leading-none">
                      {layers[active].title}
                    </h4>
                    <span className="font-mono text-[10px] text-cream/55 tracking-[0.15em] uppercase">
                      Layer {String(active + 1).padStart(2, '0')} / {String(layers.length).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="text-[13px] md:text-sm text-cream/80 leading-relaxed line-clamp-2">
                    {layers[active].description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom strip — 6 interactive value buttons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUp}
          className="mt-20 pt-12 border-t border-cream/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-6">
            {layers.map((layer, i) => {
              const isActive = active === i;
              return (
                <button
                  key={layer.id}
                  type="button"
                  onClick={() => setActive(i)}
                  className="flex flex-col items-start gap-3 text-left transition-opacity duration-500 hover:opacity-100"
                  style={{ opacity: isActive ? 1 : 0.55 }}
                >
                  <div
                    className="h-px transition-all duration-500"
                    style={{
                      width: isActive ? 48 : 32,
                      background: isActive ? '#18B6C5' : 'rgba(212,204,185,0.45)'
                    }}
                  />
                  <span className="font-display font-bold text-lg text-cream">
                    {layer.title}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
