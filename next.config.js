/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  
  // Export statique pour h�bergement mutualis�
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  
  // Images non optimis�es (obligatoire pour l'export statique)
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: '**' }
    ]
  },
  
  // Origines dev
  allowedDevOrigins: ['192.168.100.32', '192.168.1.34', '192.168.1.64', '192.168.43.136'],
  
  // Optimisation packages
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react']
  }
};

module.exports = nextConfig;