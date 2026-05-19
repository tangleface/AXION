export type Service = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: string; // lucide-react icon name
  flagship?: boolean;
};

/**
 * Les 4 piliers d'Axion Studio — un même système de pensée, adaptable à
 * chaque industrie. Aucun pilier n'est "flagship" : ils sont structurellement
 * égaux pour signaler une posture d'innovation adaptative, et non un produit fixe.
 */
export const services: Service[] = [
  {
    id: 'insight',
    number: '01',
    title: 'Insight',
    subtitle: 'Strategy · Diagnostic · Problem Discovery',
    description:
      "Lecture stratégique et opérationnelle des enjeux avant d'engager les solutions. Nous formulons le bon problème — diagnostic, modélisation des écosystèmes, cartographie des contraintes — avant de bâtir la bonne réponse.",
    features: [
      'Diagnostic 360° & maturité digitale',
      'Modélisation des enjeux métier',
      "Cartographie d'écosystèmes opérationnels",
      'Vision & roadmap stratégique'
    ],
    icon: 'Compass'
  },
  {
    id: 'systems',
    number: '02',
    title: 'Systems',
    subtitle: 'Platforms · Automation · Smart Ecosystems',
    description:
      "Plateformes, automatisation, infrastructures digitales et écosystèmes intelligents adaptés à chaque métier. Le socle qui fait tenir l'ensemble et scaler à votre rythme.",
    features: [
      'Plateformes & portails métier',
      'Intégrations data & systèmes (ERP, MES, SCADA)',
      'Automatisation opérationnelle',
      'Architecture cloud & sécurité'
    ],
    icon: 'Network'
  },
  {
    id: 'experience',
    number: '03',
    title: 'Experience',
    subtitle: 'Branding · UX · Digital Presence',
    description:
      "Identité, communication, UX, présence digitale et expériences immersives. L'expérience devient un actif stratégique au service de la décision, de l'adoption et de l'engagement.",
    features: [
      'Identité & territoire de marque',
      'Sites & plateformes premium',
      'Expériences immersives B2B',
      'Communication & présence stratégique'
    ],
    icon: 'Sparkles'
  },
  {
    id: 'intelligence',
    number: '04',
    title: 'Intelligence',
    subtitle: 'AI · Analytics · Predictive Systems',
    description:
      "IA, analytics, systèmes prédictifs et automatisation intelligente. Transformer la donnée en capacités de décision augmentée et de pilotage anticipatif — quelle que soit l'industrie.",
    features: [
      'Modèles IA & analytics avancée',
      'Systèmes prédictifs & signaux faibles',
      'Automatisation intelligente',
      'Tableaux de bord décisionnels temps réel'
    ],
    icon: 'Brain'
  }
];
