export type PillarStep = { num: string; title: string; description: string };
export type PillarTrigger = { title: string; description: string };
export type PillarDeliverable = { title: string; description: string };

export type Pillar = {
  slug: 'insight' | 'systems' | 'experience' | 'intelligence';
  number: string;
  title: string;
  subtitle: string;
  tagline: string;          // short hero tagline (FR)
  taglineEn: string;        // English keywords under hero
  icon: string;             // lucide-react icon name
  intro: string[];          // 1-2 short paragraphs explaining the pillar
  steps: PillarStep[];      // démarche / methodology
  capabilities: string[];   // concrete expertise items
  triggers: PillarTrigger[]; // when to activate
  deliverables: PillarDeliverable[]; // what client gets
  industries: string[];     // applicable industries (sector ids or labels)
  /** Optional positioning block (only used by Experience for now). */
  positioning?: { headline: string; body: string };
};

export const pillars: Pillar[] = [
  {
    slug: 'insight',
    number: '01',
    title: 'Insight',
    subtitle: 'Strategy · Diagnostic · Problem Discovery',
    tagline: 'Lire la complexité avant d\'agir.',
    taglineEn: 'Understand deeply. Decide clearly.',
    icon: 'Compass',
    intro: [
      "Insight est la phase amont de toute intervention Axion. C'est le moment où nous lisons la complexité de votre métier — enjeux opérationnels, contraintes, écosystème, maturité digitale — avant d'engager la moindre solution.",
      "Notre conviction : 70 % de la valeur d'un système intelligent se joue dans la formulation du problème. Un bon diagnostic vaut mieux qu'une bonne plateforme mal cadrée."
    ],
    steps: [
      { num: '01', title: 'Diagnostic 360°', description: 'Audit de maturité digitale, cartographie des systèmes existants, analyse des flux et des points de friction.' },
      { num: '02', title: 'Modélisation', description: 'Représentation des enjeux métier, des dépendances et des contraintes opérationnelles dans un langage partageable.' },
      { num: '03', title: 'Cartographie d\'écosystème', description: 'Identification des parties prenantes, des sources de données, des points de levier et des risques.' },
      { num: '04', title: 'Roadmap stratégique', description: 'Priorisation des chantiers, business cases ROI, calendrier 12-24 mois et architecture cible.' }
    ],
    capabilities: [
      'Audit de maturité digitale & technologique',
      'Modélisation des enjeux et contraintes métier',
      'Cartographie d\'écosystèmes opérationnels',
      'Business cases & analyses ROI',
      'Vision et roadmap stratégique 12-24 mois',
      'Cadrage de programmes de transformation',
      'Due diligence technique',
      'Design de KPIs et de tableaux de bord cibles'
    ],
    triggers: [
      { title: 'Avant un investissement majeur', description: 'Vous envisagez un projet >€500k et souhaitez sécuriser la décision avec un diagnostic indépendant.' },
      { title: 'Avant une transformation', description: 'Vous lancez un programme de transformation et avez besoin d\'une lecture stratégique partageable avec votre comité.' },
      { title: 'Doute sur la maturité', description: 'Vous ne savez pas où votre organisation se situe vraiment sur la digitalisation, l\'IA ou l\'industrie 4.0.' },
      { title: 'Refonte de modèle', description: 'Votre business model évolue (nouvelle offre, internationalisation, B2B2C) et il faut repenser les fondations.' }
    ],
    deliverables: [
      { title: 'Rapport de diagnostic', description: 'Document de synthèse avec cartographie, constats prioritaires et arbre des opportunités.' },
      { title: 'Modèle d\'écosystème', description: 'Représentation visuelle des flux, parties prenantes et points de levier — utilisable en interne.' },
      { title: 'Roadmap stratégique', description: 'Plan d\'action 12-24 mois priorisé, avec ordres de grandeur budgétaires et jalons.' },
      { title: 'Restitution comité', description: 'Présentation exécutive et atelier de décision avec votre comité de direction.' }
    ],
    industries: ['Industry & Manufacturing', 'Pharmaceutical Operations', 'Healthcare Systems', 'Energy & Infrastructure', 'Logistics', 'Real Estate', 'Smart Territories', 'Technical Operations']
  },
  {
    slug: 'systems',
    number: '02',
    title: 'Systems',
    subtitle: 'Platforms · Automation · Smart Ecosystems',
    tagline: 'Le socle qui fait tenir l\'ensemble.',
    taglineEn: 'Platforms built to scale.',
    icon: 'Network',
    intro: [
      "Systems regroupe tout ce qui constitue le socle digital d'une opération moderne : plateformes métier, automatisation, intégrations data, infrastructures cloud et écosystèmes intelligents.",
      "Nous concevons des architectures qui ne sont pas livrées clé-en-main, mais ajustées à votre métier — capables de s'intégrer à votre existant, de scaler avec vos volumes et d'évoluer avec vos cas d'usage."
    ],
    steps: [
      { num: '01', title: 'Architecture cible', description: 'Définition de l\'architecture data, applicative et d\'intégration alignée sur vos contraintes.' },
      { num: '02', title: 'Intégration', description: 'Connexion aux systèmes existants : ERP, MES, SCADA, CRM, sources data. Aucune île isolée.' },
      { num: '03', title: 'Déploiement', description: 'Mise en production progressive, accompagnement des équipes, gouvernance opérationnelle.' },
      { num: '04', title: 'Scale & évolution', description: 'Montée en charge maîtrisée, optimisation continue, ajout de modules selon la maturité.' }
    ],
    capabilities: [
      'Plateformes métier & portails clients',
      'Intégrations ERP / MES / SCADA / CRM',
      'Automatisation de processus (RPA, workflows)',
      'Architectures cloud & hybrides',
      'APIs, microservices et middleware',
      'Digital Twin opérationnels',
      'Sécurité enterprise & conformité',
      'Applications mobiles & web métier',
      'Data pipelines & data quality'
    ],
    triggers: [
      { title: 'Silos data', description: 'Vos données sont éclatées entre plusieurs systèmes qui ne se parlent pas, freinant la décision.' },
      { title: 'Processus manuels chronophages', description: 'Vos équipes passent un temps disproportionné sur des tâches qui pourraient être automatisées.' },
      { title: 'Refonte SI', description: 'Vous modernisez votre système d\'information et cherchez une approche pragmatique, non-disruptive.' },
      { title: 'Nouvelle plateforme métier', description: 'Vous voulez doter votre organisation d\'un portail unique pour vos opérations, clients ou partenaires.' }
    ],
    deliverables: [
      { title: 'Architecture cible', description: 'Schéma d\'architecture et documentation technique, partageable avec vos équipes IT.' },
      { title: 'Plateforme opérationnelle', description: 'Plateforme déployée, intégrée à votre SI existant, sécurisée et documentée.' },
      { title: 'Documentation & formation', description: 'Guides utilisateurs, runbooks, sessions de formation des équipes internes.' },
      { title: 'Gouvernance opérationnelle', description: 'Comité de pilotage, KPIs de suivi, contrats de service et roadmap d\'évolution.' }
    ],
    industries: ['Industry & Manufacturing', 'Pharmaceutical Operations', 'Healthcare Systems', 'Energy & Infrastructure', 'Logistics', 'Real Estate', 'Smart Territories', 'Technical Operations']
  },
  {
    slug: 'experience',
    number: '03',
    title: 'Experience',
    subtitle: 'Branding · UX · Digital Presence',
    tagline: 'L\'identité et l\'expérience comme actifs stratégiques.',
    taglineEn: 'Brand. Interface. Narrative.',
    icon: 'Sparkles',
    intro: [
      "Experience couvre l'identité de marque, la communication, le design des interfaces, la présence digitale et les expériences immersives. L'objectif n'est pas de \"faire joli\" — c'est de transformer l'expérience en actif stratégique au service de la décision, de l'adoption et de la confiance.",
      "Une marque claire, une interface lisible et une présence digitale cohérente raccourcissent les cycles de vente, fluidifient l'adoption interne et renforcent la valeur perçue."
    ],
    positioning: {
      headline: 'Un savoir-faire reconnu, au niveau des meilleurs acteurs du marché',
      body: "L'Algérie et le Maghreb comptent aujourd'hui plusieurs structures délivrant un travail de très haut niveau en branding, design et communication digitale. Axion Studio fait partie des premières à associer cette discipline à une posture d'innovation et de systèmes intelligents. Nous opérons à un niveau de finition, de stratégie et d'exigence comparable aux meilleurs studios du marché — notre différence se fait dans notre capacité à connecter l'expérience à la donnée, aux opérations et à la décision."
    },
    steps: [
      { num: '01', title: 'Diagnostic d\'identité', description: 'Lecture de votre territoire de marque actuel, des perceptions, des codes du marché et des opportunités de différenciation.' },
      { num: '02', title: 'Territoire & design system', description: 'Définition de l\'identité visuelle, du ton de voix, des principes UX et d\'un design system cohérent et scalable.' },
      { num: '03', title: 'Plateformes & expériences', description: 'Conception et développement de sites, plateformes, interfaces et expériences immersives premium.' },
      { num: '04', title: 'Activation & présence', description: 'Communication de lancement, contenus stratégiques, présence digitale (LinkedIn, presse) et accompagnement éditorial.' }
    ],
    capabilities: [
      'Identité de marque & territoire visuel',
      'Design system & guidelines',
      'Sites & plateformes premium',
      'UX/UI design haute densité',
      'Communication B2B & présence digitale',
      'Expériences immersives & événementiel',
      'Stratégie LinkedIn & content éditorial',
      'Direction artistique & narration de marque',
      'Refonte d\'interfaces métier'
    ],
    triggers: [
      { title: 'Image décalée des ambitions', description: 'Votre marque ne reflète plus votre maturité, vos ambitions internationales ou la qualité de vos opérations.' },
      { title: 'Site qui ne convertit pas', description: 'Votre présence digitale ne génère ni leads, ni autorité, ni adoption interne.' },
      { title: 'Lancement de nouvelle offre', description: 'Vous lancez un produit, un service ou une division et avez besoin d\'un récit et d\'une présence forte.' },
      { title: 'Adoption interne difficile', description: 'Vos outils internes (portails, plateformes) sont sous-utilisés faute d\'UX claire.' }
    ],
    deliverables: [
      { title: 'Charte & design system', description: 'Identité visuelle complète, design system documenté, kit de templates réutilisables.' },
      { title: 'Site / plateforme premium', description: 'Site institutionnel ou plateforme déployée, performante, accessible et SEO-ready.' },
      { title: 'Kit de communication', description: 'Plaquettes, slide decks, contenus LinkedIn, kit presse, signalétique éventuelle.' },
      { title: 'Accompagnement éditorial', description: 'Stratégie de contenu et accompagnement sur les premiers mois de présence active.' }
    ],
    industries: ['Industry & Manufacturing', 'Pharmaceutical Operations', 'Healthcare Systems', 'Energy & Infrastructure', 'Logistics', 'Real Estate', 'Smart Territories', 'Technical Operations']
  },
  {
    slug: 'intelligence',
    number: '04',
    title: 'Intelligence',
    subtitle: 'AI · Analytics · Predictive Systems',
    tagline: 'Transformer la donnée en décision augmentée.',
    taglineEn: 'AI for operational decision.',
    icon: 'Brain',
    intro: [
      "Intelligence regroupe nos capacités IA et analytics : NLP, vision par ordinateur, modèles prédictifs, détection de signaux faibles, automatisation intelligente et systèmes d'aide à la décision.",
      "L'objectif n'est pas l'IA pour l'IA. C'est de transformer la donnée déjà disponible — souvent sous-exploitée — en capacités opérationnelles : anticiper, recommander, automatiser, alerter."
    ],
    steps: [
      { num: '01', title: 'Data assessment', description: 'Évaluation des données disponibles, qualité, gouvernance et faisabilité des cas d\'usage IA.' },
      { num: '02', title: 'Modélisation', description: 'Conception et entraînement des modèles (NLP, vision, prédiction) adaptés à votre contexte métier.' },
      { num: '03', title: 'Déploiement', description: 'Intégration des modèles en production, dans vos workflows métier, avec interfaces de décision.' },
      { num: '04', title: 'MLOps & amélioration continue', description: 'Monitoring des modèles, ré-entraînement, gouvernance et évolution selon les nouveaux signaux.' }
    ],
    capabilities: [
      'NLP & détection de signaux opérationnels',
      'Computer vision & contrôle qualité IA',
      'Modèles prédictifs & forecasting',
      'Détection d\'anomalies & maintenance prédictive',
      'Systèmes de recommandation',
      'Automatisation intelligente (RPA + IA)',
      'Tableaux de bord décisionnels temps réel',
      'MLOps & gouvernance modèles',
      'Génération augmentée (LLM applicatifs)'
    ],
    triggers: [
      { title: 'Données sous-exploitées', description: 'Vous collectez beaucoup de données qui ne servent ni à anticiper, ni à automatiser, ni à décider.' },
      { title: 'Décisions au feeling', description: 'Vos décisions opérationnelles dépendent de l\'expérience individuelle plus que de signaux structurés.' },
      { title: 'Sous-performance opérationnelle', description: 'Vous identifiez des écarts répétés (qualité, maintenance, stocks) sans en saisir les causes profondes.' },
      { title: 'Volume de signaux trop élevé', description: 'Vos équipes terrain remontent tellement d\'informations que rien n\'est priorisé efficacement.' }
    ],
    deliverables: [
      { title: 'Évaluation data & faisabilité', description: 'Rapport sur la maturité de vos données et la faisabilité des cas d\'usage IA prioritaires.' },
      { title: 'Modèles en production', description: 'Modèles entraînés, validés et déployés dans vos workflows opérationnels.' },
      { title: 'Cockpit décisionnel', description: 'Interface dédiée pour visualiser les signaux, prédictions et recommandations IA.' },
      { title: 'Gouvernance MLOps', description: 'Documentation, monitoring, plan de ré-entraînement et règles de gouvernance.' }
    ],
    industries: ['Industry & Manufacturing', 'Pharmaceutical Operations', 'Healthcare Systems', 'Energy & Infrastructure', 'Logistics', 'Real Estate', 'Smart Territories', 'Technical Operations']
  }
];

export function getPillarBySlug(slug: string): Pillar | undefined {
  return pillars.find(p => p.slug === slug);
}
