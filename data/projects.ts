import type { Project } from '@/types';

/**
 * Projets réalisés par Pierrick Autret
 */
export const projects: Project[] = [
  {
    id: 'picready',
    title: 'PicReady - Application Mobile',
    description:
      'Application mobile type réseau social proposant des défis photo quotidiens à partager entre proches.',
    longDescription:
      'Application mobile complète développée en tant que Project Owner avec focus principal sur le backend. Architecture monorepo avec Turborepo, conception et implémentation de l\'API GraphQL en NestJS, modélisation de la logique métier, gestion du temps réel avec MongoDB. Mise en place de tests unitaires et d\'intégration pour garantir la robustesse du système.',
    technologies: ['NestJS', 'GraphQL', 'MongoDB', 'TypeScript', 'Turborepo', 'Bun', 'React Native', 'Expo'],
    imageUrl: '/images/projects/picready/picready.png',
    images: [
      '/images/projects/picready/picready.png',
      // Ajoutez d'autres images du projet ici
    ],
    featured: true,
    category: 'mobile',
    date: '2025-11',
  },
  {
    id: 'gestion-salles-attente',
    title: 'COSAC - Centre d\'Optimisation des Salles d\'Attente de Consultation',
    description:
      'Application web interne développée lors d\'un stage de 2 mois à l\'IUCT Oncopole pour la gestion optimisée des salles d\'attente hospitalières.',
    longDescription:
      'Application full-stack intégrée au DPI (Dossier Patient Informatisé) hospitalier. Backend métier en PL/SQL avec frontend PHP/JavaScript. Authentification LDAP/Active Directory et automatisation via VisualCron. Application validée par les utilisateurs et prête pour mise en production.',
    technologies: ['PL/SQL', 'PHP', 'JavaScript', 'LDAP', 'Active Directory', 'VisualCron'],
    imageUrl: '/images/projects/cosac/cosac.png',
    images: [
      '/images/projects/cosac/cosac.png',
      // Ajoutez d'autres images du projet ici
    ],
    featured: true,
    category: 'web',
    date: '2025-06',
  },
  {
    id: 'gestion-immobilier',
    title: 'Application de Gestion Immobilière',
    description:
      'Application de gestion de biens immobiliers développée en Java avec architecture MVC et méthode Agile Scrum.',
    longDescription:
      'Projet universitaire mettant en œuvre les principes de conception orientée objet avec pattern MVC et DAO. Modélisation UML complète (diagrammes de classe et cas d\'utilisation). Application modulaire et évolutive développée en équipe avec méthodologie Agile.',
    technologies: ['Java', 'MVC', 'DAO', 'UML', 'Scrum'],
    imageUrl: '/images/projects/immobilier/immobilier.png',
    images: [
      '/images/projects/immobilier/immobilier.png',
      // Ajoutez d'autres images du projet ici
    ],
    featured: false,
    category: 'logiciel',
    date: '2024-11',
  },
  {
    id: 'portfolio-nextjs',
    title: 'Portfolio Personnel',
    description:
      'Site portfolio moderne développé avec Next.js, TypeScript et Tailwind CSS. Architecture SSG optimisée pour les performances.',
    longDescription:
      'Portfolio statique conçu pour mettre en valeur mes compétences et projets. Utilisation des dernières technologies web avec une attention particulière portée à l\'accessibilité, au SEO et à la qualité du code.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    imageUrl: '/images/projects/portfolio/portfolio.png',
    images: [
      '/images/projects/portfolio/portfolio.png',
      // Ajoutez d'autres images du projet ici
    ],
    featured: false,
    category: 'web',
    date: '2026-01',
  },{
    id: 'n2i-2025',
    title: 'Nuit de l\'info 2025 - Le Village Numérique Résistant',
    description:
      'Projet réalisé lors de la Nuit de l\'info 2025, axé sur la création d\'une application web pour un village numérique résistant.',
    longDescription:
      'J\'ai participé à la Nuit de l\'info 2025 au sein de l\'équipe "Hammer jam". Ou nous avons développé une plateforme éducative interactive combinant gamification, graphismes 3D et contenu éducatif autour de la responsabilité numérique et du numérique durable. Celle-ci répondant au thème NIRD (Numérique Inclusif, Responsable & Durable)',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    imageUrl: '/images/projects/n2i/n2i-2025.png',
    images: [
      '/images/projects/n2i/n2i-2025.png',
      // Ajoutez d'autres images du projet ici
    ],
    featured: false,
    category: 'web',
    date: '2025-11',
  },
];

/**
 * Récupère uniquement les projets mis en avant
 */
export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured);
};

/**
 * Récupère un projet par son ID
 */
export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};

/**
 * Récupère les projets par catégorie
 */
export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return projects.filter((project) => project.category === category);
};
