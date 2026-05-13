export type SectorApproach = {
  id: string;
  sector: string;
  title: string;
  context: string;
  approach: string;
  benchmarks: { label: string; value: string }[];
  tags: string[];
};

/**
 * Approche par secteur — benchmarks sectoriels reconnus.
 * Ce ne sont PAS des projets réalisés mais des fourchettes de gains
 * typiques observées dans la littérature sectorielle et chez les déploiements
 * Digital Twin / Industrie 4.0 en production internationale.
 */
export const sectorApproaches: SectorApproach[] = [
  {
    id: 'cement-materials',
    sector: 'Cimenterie & Matériaux',
    title: 'Process continu, énergie lourde, maintenance critique',
    context:
      'Lignes à process continu (four, broyeurs, convoyeurs) avec consommation énergétique massive et coût élevé des arrêts non planifiés. Les achats de pièces de rechange en urgence pèsent lourd.',
    approach:
      'Digital Twin sur four et équipements critiques, maintenance prédictive multicapteurs, automatisation des achats MRO. Cadrage en amont par audit forfaitaire 4 semaines.',
    benchmarks: [
      { label: 'Énergie four', value: '−8 à −12 %' },
      { label: 'Arrêts non planifiés', value: '−30 à −50 %' },
      { label: 'Coût pièces de rechange', value: '−15 à −25 %' }
    ],
    tags: ['Digital Twin', 'Maintenance prédictive', 'MRO']
  },
  {
    id: 'ceramic-tiles',
    sector: 'Céramique & Faïence',
    title: 'Four, qualité, traçabilité — la triade de l\'excellence',
    context:
      'Production grands formats, exigence qualité visuelle (planéité, tonalité), pression énergétique sur le four de cuisson et exigences de traçabilité croissantes pour l\'export.',
    approach:
      'Digital Twin sur four céramique (5 zones thermiques), vision IA en sortie cuisson, traçabilité granulaire par lot avec portail client export. Architecture pensée pour scaling multi-lignes.',
    benchmarks: [
      { label: 'Énergie cuisson', value: '−10 à −15 %' },
      { label: 'Taux de rebut', value: '−25 à −40 %' },
      { label: 'Premium pricing export', value: '+5 à +10 %' }
    ],
    tags: ['Digital Twin', 'Vision IA', 'Traçabilité export']
  },
  {
    id: 'sandwich-construction',
    sector: 'Panneau sandwich & matériaux construction',
    title: 'Chimie de précision + énergie presse + outils commerciaux',
    context:
      'Production continue avec foaming polyuréthane critique, presse chauffée énergivore, et cycle commercial B2B long avec architectes, BET et promoteurs.',
    approach:
      'Digital Twin sur zones foaming + presse, vision IA qualité sortie cuisson, et plateforme commerciale digitale (configurateur, bibliothèque BIM) pour accélérer le cycle de vente.',
    benchmarks: [
      { label: 'Consommation chimiques', value: '−5 à −15 %' },
      { label: 'Énergie presse', value: '−8 à −15 %' },
      { label: 'Conversion lead → client', value: '+30 à +50 %' }
    ],
    tags: ['Industry 4.0', 'Configurateur B2B', 'BIM']
  },
  {
    id: 'agrifood-pharma',
    sector: 'Agroalimentaire & Pharma',
    title: 'Process exigeant, conformité, traçabilité réglementaire',
    context:
      'Industries où la traçabilité par lot, la conformité réglementaire (HACCP, GMP) et la maîtrise qualité sont non négociables. Énergie utilities (vapeur, froid) souvent sous-optimisée.',
    approach:
      'Digital Twin process critique, supervision énergie utilities, qualité IA en ligne et traçabilité granulaire avec dossiers de lot numériques. Approche compliance-friendly.',
    benchmarks: [
      { label: 'Énergie utilities', value: '−8 à −15 %' },
      { label: 'Pertes matière', value: '−2 à −5 %' },
      { label: 'Non-qualité', value: '−25 à −40 %' }
    ],
    tags: ['Traçabilité', 'Conformité', 'Quality IA']
  },
  {
    id: 'smart-building-realestate',
    sector: 'Immobilier & Smart Building',
    title: 'Différenciation premium et valeur post-livraison',
    context:
      'Promotions immobilières et infrastructures tertiaires cherchant à se différencier sur des marchés concurrentiels. Opportunité d\'intégrer l\'intelligence dès la conception construction.',
    approach:
      'Digital Twin résidentiel ou tertiaire, smart parties communes (ascenseurs prédictifs, énergie, surveillance), application résidents/usagers et plateforme syndic/facility management.',
    benchmarks: [
      { label: 'Premium pricing au m²', value: '+5 à +15 %' },
      { label: 'Énergie parties communes', value: '−30 à −50 %' },
      { label: 'Coût exploitation', value: '−15 à −25 %' }
    ],
    tags: ['Smart Building', 'IoT', 'Facility Management']
  },
  {
    id: 'energy-utilities',
    sector: 'Énergie & Systèmes Techniques',
    title: 'Actifs critiques, fiabilité, optimisation',
    context:
      'Infrastructures critiques (stations de traitement, centrales, réseaux) où la disponibilité est essentielle et l\'optimisation énergétique non négociable.',
    approach:
      'Digital Twin d\'actifs critiques, supervision multi-sites consolidée, maintenance prédictive sur équipements stratégiques et tableaux de bord décisionnels temps réel.',
    benchmarks: [
      { label: 'Disponibilité actifs', value: '+3 à +8 pts' },
      { label: 'Coûts maintenance', value: '−15 à −25 %' },
      { label: 'Efficacité énergétique', value: '−5 à −12 %' }
    ],
    tags: ['Digital Twin', 'Infrastructure critique', 'Multi-sites']
  }
];
