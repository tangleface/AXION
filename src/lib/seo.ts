export const siteConfig = {
  name: 'Axion Studio',
  description:
    'Axion Studio — Intelligent Systems Studio. Studio premium à l\'intersection de la stratégie, des technologies intelligentes et des systèmes opérationnels. Quatre piliers : Smart Industry · Smart Pharma · Smart Operations · Digital Experience.',
  url: 'https://axion.dz',
  ogImage: 'https://axion.dz/og-image.jpg',
  tagline: 'Designing what\'s next.',
  taglineSub: 'Intelligent Systems for Operational Transformation.',
  keywords: [
    'Intelligent Systems Studio',
    'Smart Industry',
    'Smart Pharma',
    'Smart Operations',
    'Digital Experience',
    'Digital Twin',
    'Jumeau numérique',
    'Operational Intelligence',
    'Industrie 4.0',
    'Industry 4.0',
    'AI industrielle',
    'IA opérationnelle',
    'Predictive Maintenance',
    'Maintenance prédictive',
    'Field Intelligence',
    'MRO Automation',
    'Asset Intelligence',
    'Algérie',
    'Algeria',
    'Strategy consulting',
    'Operational transformation'
  ],
  contact: {
    email: 'amine@axion.dz',
    phone: '+213 770 79 56 95',
    location: 'Dely Brahim — Coopérative Dar El Dounia, Alger, Algérie'
  },
  social: {
    linkedin: 'https://linkedin.com/company/axionstudio',
    twitter: 'https://twitter.com/axionstudio'
  }
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  alternateName: 'Axion',
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  description: siteConfig.description,
  foundingDate: '2024',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Coopérative Dar El Dounia, Dely Brahim',
    addressLocality: 'Alger',
    addressCountry: 'DZ'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: siteConfig.contact.phone,
    contactType: 'sales',
    email: siteConfig.contact.email,
    areaServed: ['DZ', 'MA', 'TN', 'FR', 'BE', 'CH'],
    availableLanguage: ['French', 'English', 'Arabic']
  },
  sameAs: [siteConfig.social.linkedin, siteConfig.social.twitter],
  slogan: `${siteConfig.tagline} ${siteConfig.taglineSub}`
};

export const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  priceRange: '$$$$',
  areaServed: { '@type': 'Country', name: 'Algeria' },
  serviceType: [
    'Smart Industry',
    'Smart Pharma',
    'Smart Operations',
    'Digital Experience',
    'Digital Twin Implementation',
    'Predictive Maintenance',
    'Field Intelligence',
    'Operational Transformation'
  ],
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Smart Industry',
        description: 'Digital Twin opérationnel, supervision temps réel, maintenance prédictive et systèmes intelligents pour sites industriels.'
      }
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Smart Pharma',
        description: 'Field force intelligence IA, détection des signaux médicaux, supply chain pharmaceutique et qualité réglementaire.'
      }
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Smart Operations',
        description: 'Automatisation MRO, maintenance prédictive multi-sites, asset intelligence et optimisation opérationnelle.'
      }
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Digital Experience',
        description: 'Plateformes premium, interfaces décisionnelles, écosystèmes digitaux et présence stratégique B2B.'
      }
    }
  ]
};
