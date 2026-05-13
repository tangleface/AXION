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

export const services: Service[] = [
  {
    id: 'strategy-transformation',
    number: '01',
    title: 'Strategy & Transformation',
    subtitle: 'Lire avant d\'agir',
    description:
      'Diagnostic, vision, roadmap de transformation et conduite du changement. Nous cadrons la complexité avant d\'engager les budgets.',
    features: [
      'Diagnostic 360° & maturité digitale',
      'Vision & roadmap de transformation',
      'Cas d\'usage prioritaires & ROI',
      'Pilotage du changement'
    ],
    icon: 'Compass'
  },
  {
    id: 'communication-experience',
    number: '02',
    title: 'Communication & Experience',
    subtitle: 'Le narratif qui engage',
    description:
      'Identité, narratif, expériences digitales et institutionnelles. Donner forme à votre récit, pour vos clients comme pour vos équipes.',
    features: [
      'Identité & territoire de marque',
      'Sites & expériences digitales',
      'Outils commerciaux & vente B2B',
      'Communication interne & change'
    ],
    icon: 'Sparkles'
  },
  {
    id: 'platforms-digital-solutions',
    number: '03',
    title: 'Platforms & Digital Solutions',
    subtitle: 'Le socle qui scale',
    description:
      'Conception et déploiement de plateformes, intégrations data, applications métiers. Le système nerveux qui fait tenir l\'ensemble.',
    features: [
      'Plateformes & portails métiers',
      'Intégrations SCADA / MES / ERP',
      'Applications mobiles & web',
      'Architecture data & cloud'
    ],
    icon: 'Network'
  },
  {
    id: 'industry-40',
    number: '04',
    title: 'Industry 4.0',
    subtitle: 'Là où la transformation devient tangible',
    description:
      'Notre capacité phare. Digital Twin opérationnel, maintenance prédictive, automatisation MRO et systèmes intelligents pour sites industriels.',
    features: [
      'Digital Twin (jumeau numérique)',
      'Maintenance prédictive & MRO',
      'Vision IA qualité',
      'Smart Building & infrastructures'
    ],
    icon: 'Layers3',
    flagship: true
  }
];
