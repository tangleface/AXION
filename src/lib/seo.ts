export const siteConfig = {
  name: 'Axion Studio',
  description:
    "Axion Studio — Innovation & Intelligence Studio. Studio premium qui conçoit des systèmes intelligents adaptés à chaque industrie. Quatre piliers : Insight · Systems · Experience · Intelligence. Une posture cross-industries, pas un produit fixe.",
  url: 'https://axion.dz',
  ogImage: 'https://axion.dz/og-image.jpg',
  tagline: "Designing what's next.",
  taglineSub: 'Adaptive intelligence for strategic transformation.',
  keywords: [
    'Innovation studio',
    'Intelligent Systems Studio',
    'Adaptive intelligence',
    'Strategic transformation',
    'Cross-industry systems',
    'Insight',
    'Systems',
    'Experience',
    'Intelligence',
    'AI strategy',
    'Predictive systems',
    'Smart automation',
    'Digital ecosystems',
    'Platforms & automation',
    'Industry 4.0',
    'Digital Twin',
    'Jumeau numérique',
    'Operational Intelligence',
    'Branding & UX premium',
    'Algérie',
    'Algeria',
    'Strategy consulting'
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
    'Insight — Strategy & Diagnostic',
    'Systems — Platforms & Automation',
    'Experience — Branding & UX',
    'Intelligence — AI & Predictive Systems',
    'Digital Twin Implementation',
    'Cross-industry Intelligent Ecosystems'
  ],
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Insight',
        description:
          "Diagnostic stratégique, modélisation des enjeux métier, cartographie d'écosystèmes opérationnels et roadmap de transformation."
      }
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Systems',
        description:
          'Plateformes métier, automatisation, intégrations data, infrastructures digitales et écosystèmes intelligents adaptés.'
      }
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Experience',
        description:
          'Identité de marque, communication, UX premium, présence digitale et expériences immersives B2B.'
      }
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Intelligence',
        description:
          'IA appliquée, analytics avancée, systèmes prédictifs et automatisation intelligente pour la décision augmentée.'
      }
    }
  ]
};
