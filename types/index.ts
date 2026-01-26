/**
 * Types TypeScript centralisés
 * Définitions des entités principales du portfolio
 */

/** Projet portfolio */
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  imageUrl?: string;
  images?: string[]; // Galerie d'images pour la page détail
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: ProjectCategory;
  date: string;
}

export type ProjectCategory = 'web' | 'mobile' | 'design' | 'logiciel' | 'other';

/** Compétence technique */
export interface Skill {
  name: string;
  level: SkillLevel;
  category: SkillCategory;
  icon?: string;
}

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';
export type SkillCategory = 'frontend' | 'backend' | 'tools' | 'design' | 'other';

/** Lien de navigation */
export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

/** Lien social */
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

/** Expérience / Formation */
export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description: string[];
  type: 'work' | 'education';
}

/** Métadonnées SEO */
export interface SeoMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}
