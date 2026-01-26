import type { NavLink, SocialLink } from '@/types';

/**
 * Liens de navigation principale
 */
export const navLinks: NavLink[] = [
  { label: 'Accueil', href: '/' },
  { label: 'Projets', href: '/projects' },
  { label: 'Compétences', href: '/competences' },
  { label: 'À propos', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

/**
 * Liens vers les CV
 */
export const cvLinks = {
  standard: {
    url: '/cv/CV_Pierrick_Autret.pdf',
    label: 'CV Classique',
    description: 'Version design avec mise en page personnalisée',
  },
  ats: {
    url: '/cv/CV_Pierrick_Autret_ATS.pdf',
    label: 'CV ATS',
    description: 'Version optimisée pour les systèmes de recrutement',
  },
} as const;

/**
 * Liens sociaux
 */
export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/yeesou',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/pierrick-autret-b174a4241/',
    icon: 'linkedin',
  },
  {
    name: 'Email',
    url: 'mailto:pierrick.autret@gmail.com',
    icon: 'email',
  },
];
