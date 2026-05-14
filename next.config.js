/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  
  // Export statique pour hébergement mutualisé
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  
  // Images non optimisées (obligatoire pour l'export statique)
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: '**' }
    ]
  },
  
  // Origines dev
  allowedDevOrigins: ['192.168.100.32', '192.168.1.34'],
  
  // Optimisation packages
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react']
  }
};

module.exports = nextConfig;