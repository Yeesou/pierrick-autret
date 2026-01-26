import type { Skill } from '@/types';

/**
 * Compétences techniques de Pierrick Autret
 * Organisées par catégorie
 */
export const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 'advanced', category: 'frontend' },
  { name: 'React Native', level: 'advanced', category: 'frontend' },
  { name: 'Next.js', level: 'advanced', category: 'frontend' },
  { name: 'TypeScript', level: 'advanced', category: 'frontend' },
  { name: 'JavaScript', level: 'advanced', category: 'frontend' },
  { name: 'Angular', level: 'intermediate', category: 'frontend' },
  { name: 'HTML/CSS', level: 'advanced', category: 'frontend' },
  { name: 'Tailwind CSS', level: 'advanced', category: 'frontend' },
  { name: 'PHP', level: 'advanced', category: 'frontend' },

  // Backend
  { name: 'Node.js', level: 'advanced', category: 'backend' },
  { name: 'NestJS', level: 'advanced', category: 'backend' },
  { name: 'Java', level: 'advanced', category: 'backend' },
  { name: 'Java Spring', level: 'beginner', category: 'backend' },
  { name: 'Python', level: 'advanced', category: 'backend' },
  { name: 'C/C++', level: 'advanced', category: 'backend' },
  { name: 'C#/.Net', level: 'intermediate', category: 'backend' },
  { name: 'PL/SQL', level: 'advanced', category: 'backend' },
  { name: 'MongoDB', level: 'advanced', category: 'backend' },
  { name: 'GraphQL', level: 'advanced', category: 'backend' },
  { name: 'REST APIs', level: 'advanced', category: 'backend' },
  { name: 'WebSocket', level: 'intermediate', category: 'backend' },

  // Outils
  { name: 'Git', level: 'advanced', category: 'tools' },
  { name: 'Agile/Scrum', level: 'advanced', category: 'tools' },
  { name: 'DevOps', level: 'intermediate', category: 'tools' },
  { name: 'TDD', level: 'intermediate', category: 'tools' },
  { name: 'UML', level: 'intermediate', category: 'tools' },
  { name: 'Turborepo', level: 'intermediate', category: 'tools' },
  { name: 'Expo', level: 'advanced', category: 'tools' },
  { name: 'ESLint/Prettier', level: 'advanced', category: 'tools' },

  // Design
  { name: 'MVC', level: 'advanced', category: 'design' },
  { name: 'Design Patterns', level: 'intermediate', category: 'design' },
  { name: 'Architecture Logicielle', level: 'intermediate', category: 'design' },
];

/**
 * Récupère les compétences par catégorie
 */
export const getSkillsByCategory = (category: Skill['category']): Skill[] => {
  return skills.filter((skill) => skill.category === category);
};

/**
 * Labels des niveaux de compétence
 */
export const skillLevelLabels: Record<Skill['level'], string> = {
  beginner: 'Débutant',
  intermediate: 'Intermédiaire',
  advanced: 'Avancé',
  expert: 'Expert',
};

/**
 * Labels des catégories
 */
export const skillCategoryLabels: Record<Skill['category'], string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  tools: 'Outils',
  design: 'Design',
  other: 'Autres',
};
