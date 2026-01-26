/**
 * Configuration Next.js optimisée pour SSG (Static Site Generation)
 * - output: 'export' génère un site 100% statique
 * - Compatible Vercel sans configuration supplémentaire
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Requis pour l'export statique
  },
  trailingSlash: true, // URLs propres avec slash final
};

export default nextConfig;
