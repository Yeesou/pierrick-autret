import type { Metadata } from 'next';
import { Navbar, Footer } from '@/components';
import '@/styles/globals.css';

/**
 * Métadonnées SEO globales
 * Appliquées à toutes les pages par défaut
 */
export const metadata: Metadata = {
  title: {
    default: 'Pierrick Autret | Développeur Full-Stack',
    template: '%s | Pierrick Autret',
  },
  description:
    'Développeur Full-Stack étudiant en BUT Informatique à Toulouse. Spécialisé en React, React Native, NestJS et TypeScript. Recherche Alternance pour poursuite d\'études.',
  keywords: [
    'développeur full-stack',
    'React',
    'React Native',
    'NestJS',
    'TypeScript',
    'MongoDB',
    'GraphQL',
    'Toulouse',
    'alternance',
    'BUT Informatique',
  ],
  authors: [{ name: 'Pierrick Autret' }],
  creator: 'Pierrick Autret',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://pierrick-autret.vercel.app',
    siteName: 'Portfolio Pierrick Autret',
    title: 'Pierrick Autret | Développeur Full-Stack',
    description:
      'Développeur Full-Stack étudiant en BUT Informatique à Toulouse. Spécialisé en React, React Native, NestJS et TypeScript. Recherche Alternance pour poursuite d\'études.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pierrick Autret | Développeur Full-Stack',
    description:
      'Développeur Full-Stack étudiant en BUT Informatique à Toulouse. Spécialisé en React, React Native, NestJS et TypeScript.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

/**
 * Layout racine de l'application
 * - Définit la structure HTML globale
 * - Inclut Navbar et Footer persistants
 * - Configure la langue et les fonts
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
