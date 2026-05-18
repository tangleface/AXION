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
    id: 'smart-industry',
    number: '01',
    title: 'Smart Industry',
    subtitle: 'Digital Twin · Operational Monitoring · Predictive Systems',
    description:
      'Jumeaux numériques opérationnels, supervision temps réel, intelligence industrielle et systèmes prédictifs. L\'usine devient un écosystème lisible, pilotable et anticipable.',
    features: [
      'Digital Twin (jumeau numérique opérationnel)',
      'Supervision temps réel multi-équipements',
      'Maintenance prédictive & MRO intelligent',
      'Vision IA qualité & traçabilité granulaire'
    ],
    icon: 'Factory',
    flagship: true
  },
  {
    id: 'smart-pharma',
    number: '02',
    title: 'Smart Pharma',
    subtitle: 'Field Intelligence · AI-powered Signal Detection',
    description:
      'Intelligence opérationnelle IA pour les opérations pharmaceutiques terrain. Détection des objections médicales, ruptures pharmacies, signaux concurrentiels, tendances de prescription.',
    features: [
      'Field force intelligence augmentée',
      'Détection objections & signaux médicaux',
      'Veille ruptures officines & supply',
      'Analyse concurrentielle & prescription'
    ],
    icon: 'Activity'
  },
  {
    id: 'smart-operations',
    number: '03',
    title: 'Smart Operations',
    subtitle: 'MRO · Maintenance · Asset Intelligence',
    description:
      'Automatisation des achats pièces de rechange, maintenance prédictive, visibilité actifs, optimisation opérationnelle. Anticiper plutôt que subir.',
    features: [
      'Automatisation MRO & achats pièces',
      'Asset intelligence multi-sites',
      'Optimisation flux & coûts opérationnels',
      'Tableaux de bord décisionnels temps réel'
    ],
    icon: 'Wrench'
  },
  {
    id: 'digital-experience',
    number: '04',
    title: 'Digital Experience',
    subtitle: 'Platforms · Interfaces · Digital Ecosystems',
    description:
      'Plateformes premium, interfaces décisionnelles, écosystèmes digitaux, communication et présence digitale stratégique. L\'expérience devient un outil opérationnel.',
    features: [
      'Plateformes & portails métiers premium',
      'Interfaces décisionnelles haute densité',
      'Sites & expériences digitales B2B',
      'Communication & présence stratégique'
    ],
    icon: 'Sparkles'
  }
];
