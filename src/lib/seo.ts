export const siteConfig = {
  name: 'Axion Studio',
  description:
    'Axion Studio — Strategy. Innovation. Industry. Studio premium à l\'intersection de la stratégie, de la technologie et des systèmes intelligents. Quatre piliers : Strategy & Transformation · Communication & Experience · Platforms & Digital Solutions · Industry 4.0.',
  url: 'https://axion.dz',
  ogImage: 'https://axion.dz/og-image.jpg',
  tagline: 'Designing what\'s next.',
  keywords: [
    'Strategy consulting',
    'Innovation studio',
    'Digital transformation',
    'Industry 4.0',
    'Industrie 4.0',
    'Digital Twin',
    'Jumeau numérique',
    'Smart Building',
    'AI industrielle',
    'IA opérationnelle',
    'Predictive Maintenance',
    'Maintenance prédictive',
    'Visualization platforms',
    'MRO Automation',
    'Algérie',
    'Algeria',
    'Industrial Intelligence',
    'Smart Infrastructure',
    'Communication & Experience',
    'Platforms & Digital Solutions'
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
  slogan: siteConfig.tagline
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
    'Strategy & Transformation',
    'Communication & Experience',
    'Platforms & Digital Solutions',
    'Industry 4.0',
    'Digital Twin Implementation',
    'Predictive Maintenance',
    'Smart Building Systems'
  ],
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Strategy & Transformation',
        description: 'Diagnostic, vision, roadmap de transformation, conduite du changement pour organisations industrielles ambitieuses.'
      }
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Industry 4.0 & Digital Twin',
        description: 'Conception et déploiement de jumeaux numériques opérationnels, maintenance prédictive, automatisation MRO.'
      }
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Audit Industrie 4.0',
        description: 'Cartographie maturité 4.0, identification des cas d\'usage à plus fort ROI, roadmap 12-24 mois.'
      }
    }
  ]
};
