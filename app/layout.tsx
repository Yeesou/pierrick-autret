import type { Metadata } from 'next';
import { Navbar, Footer } from '@/components';
import '@/styles/globals.css';

/**
 * Métadonnées SEO globales
 * Appliquées à toutes les pages par défaut
 */
export const metadata: Metadata = {
  title: {
    default: 'Pierrick Autret | Développeur Web & Logiciel',
    template: '%s | Pierrick Autret',
  },
  description:
    'Étudiant en BUT Informatique à Toulouse. Passionné par la conception d\'architectures logicielles robustes, la logique métier complexe et le développement bas niveau. Expérience en backend avec PHP ou NestJS, GraphQL et projets personnels en C++, reverse engineering et exploitation mémoire.',
  keywords: [
    'développeur backend',
    'architecture logicielle',
    'NestJS',
    'PHP',
    'GraphQL',
    'TypeScript',
    'C++',
    'reverse engineering',
    'développement bas niveau',
    'Toulouse',
    'alternance',
    'BUT Informatique',
    'logique métier',
  ],
  authors: [{ name: 'Pierrick Autret' }],
  creator: 'Pierrick Autret',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://pierrick-autret.vercel.app',
    siteName: 'Portfolio Pierrick Autret',
    title: 'Pierrick Autret | Développeur Web & Logiciel',
    description:
      'Étudiant en BUT Informatique à Toulouse. Passionné par la conception d\'architectures logicielles robustes, la logique métier complexe et le développement bas niveau. Expérience en backend avec PHP ou NestJS, GraphQL et projets en C++.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pierrick Autret | Développeur Web & Logiciel',
    description:
      'Passionné par l\'architecture logicielle, la logique métier complexe et le développement bas niveau. Backend NestJS, PHP, GraphQL, C++ et reverse engineering.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
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
