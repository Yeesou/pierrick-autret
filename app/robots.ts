import { MetadataRoute } from 'next';

/**
 * Fichier robots.txt pour guider les moteurs de recherche
 * Indique à Google quelles pages indexer et où trouver le sitemap
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://pierrick-autret.vercel.app/sitemap.xml',
  };
}
