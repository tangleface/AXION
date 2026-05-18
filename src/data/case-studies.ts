export type UseCase = {
  id: string;
  number: string;
  sector: string;
  title: string;
  description: string;
  capabilities: string[];
};

/**
 * High-value use cases — environnements opérationnels où les systèmes
 * intelligents Axion créent le plus de valeur. Pas de pourcentages ni de
 * projets prétendus réalisés : uniquement les territoires d'intervention.
 */
export const useCases: UseCase[] = [
  {
    id: 'industry-manufacturing',
    number: '01',
    sector: 'Industry & Manufacturing',
    title: 'Lignes process continu, cimenterie, céramique, métallurgie',
    description:
      'Production à process continu, énergie lourde, équipements critiques où la disponibilité et l\'optimisation énergétique sont déterminantes.',
    capabilities: ['Digital Twin', 'Maintenance prédictive', 'MRO']
  },
  {
    id: 'pharmaceutical-operations',
    number: '02',
    sector: 'Pharmaceutical Operations',
    title: 'Field force intelligence, supply chain pharma, qualité réglementaire',
    description:
      'Opérations pharmaceutiques terrain où la détection de signaux faibles et la traçabilité réglementaire deviennent un avantage compétitif.',
    capabilities: ['Field Intelligence', 'Signal Detection', 'GMP']
  },
  {
    id: 'healthcare-systems',
    number: '03',
    sector: 'Healthcare Systems',
    title: 'Flux hospitaliers, équipements médicaux, dossiers patient intelligents',
    description:
      'Établissements de santé qui veulent unifier la gestion des flux, du parc médical et des données patient pour gagner en lisibilité.',
    capabilities: ['Flow Intelligence', 'Equipment IoT', 'Patient Data']
  },
  {
    id: 'energy-infrastructure',
    number: '04',
    sector: 'Energy & Infrastructure',
    title: 'Stations de traitement, réseaux critiques, équipements stratégiques',
    description:
      'Infrastructures critiques où la disponibilité, la conformité et l\'efficacité énergétique sont non négociables.',
    capabilities: ['Asset Intelligence', 'Supervision multi-sites', 'Resilience']
  },
  {
    id: 'logistics-supply-chain',
    number: '05',
    sector: 'Logistics & Supply Chain',
    title: 'Visibilité multi-sites, traçabilité, optimisation flux et stocks',
    description:
      'Réseaux logistiques complexes qui cherchent une visibilité unifiée, une traçabilité granulaire et une optimisation continue des flux.',
    capabilities: ['Multi-site Visibility', 'Traçabilité', 'Flow Optimization']
  },
  {
    id: 'real-estate-smart-buildings',
    number: '06',
    sector: 'Real Estate & Smart Buildings',
    title: 'Promotions résidentielles, digital twin complexes, app résidents',
    description:
      'Promoteurs et exploitants tertiaires qui veulent différencier leurs actifs par l\'intelligence intégrée dès la conception.',
    capabilities: ['Smart Building', 'IoT', 'Facility Management']
  },
  {
    id: 'smart-territories',
    number: '07',
    sector: 'Smart Territories',
    title: 'Patrimoine, tourisme culturel, géolocalisation, plateformes territoriales',
    description:
      'Acteurs publics ou semi-publics qui souhaitent rendre leur patrimoine et leur territoire lisibles, navigables, mesurables.',
    capabilities: ['Territorial Platforms', 'Geolocation', 'Cultural Heritage']
  },
  {
    id: 'technical-operations',
    number: '08',
    sector: 'Technical Operations',
    title: 'Opérations complexes, BTP, conduite de projet, coordination multi-acteurs',
    description:
      'Maîtres d\'ouvrage et opérateurs techniques qui coordonnent des projets complexes multi-intervenants sur le terrain.',
    capabilities: ['Project Intelligence', 'Multi-stakeholder', 'Field Coordination']
  }
];

// Backwards compatibility export (some components may still import sectorApproaches name)
export const sectorApproaches = useCases;
