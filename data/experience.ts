import type { Experience } from '@/types';

/**
 * Expériences professionnelles et formations de Pierrick Autret
 */
export const experiences: Experience[] = [
  {
    id: 'but-informatique',
    title: 'BUT Informatique',
    company: 'IUT Informatique, Paul Sabatier Toulouse III, Université de Toulouse',
    location: 'Toulouse (31)',
    startDate: '2023-09',
    current: true,
    description: [
      'Spécialisation en réalisation d\'applications : conception, développement et validation',
      'Méthode Agile / Scrum, modélisation UML, architecture logicielle',
      'Développement multi-paradigme : orienté objet, fonctionnel, procédural',
      'Projets en équipe avec gestion de version Git et DevOps',
    ],
    type: 'education',
  },
  {
    id: 'stage-iuct',
    title: 'Développeur Full-Stack - Stage',
    company: 'DSIN, IUCT Oncopole',
    location: 'Toulouse (31)',
    startDate: '2025-04',
    endDate: '2025-06',
    description: [
      'Développement d\'une application web interne de gestion des salles d\'attente',
      'Backend métier en PL/SQL intégré au DPI (Dossier Patient Informatisé)',
      'Frontend PHP/JavaScript avec authentification LDAP/Active Directory',
      'Automatisation de processus via VisualCron',
      'Application validée par les utilisateurs et préparée pour mise en production',
    ],
    type: 'work',
  },
  {
    id: 'ash-iuct',
    title: 'Agent de Services Hospitaliers (ASH)',
    company: 'IUCT Oncopole',
    location: 'Toulouse (31)',
    startDate: '2024-01',
    endDate: '2024-12',
    description: [
      'Rigueur et organisation dans un environnement hospitalier exigeant',
      'Collaboration avec des équipes pluridisciplinaires',
      'Autonomie et résolution de problèmes',
      'Suivi de processus précis, gestion des flux et adaptabilité',
    ],
    type: 'work',
  },
  {
    id: 'bac-sti2d',
    title: 'Bac STI2D option SIN',
    company: 'Lycée Général et Technologique International Victor Hugo',
    location: 'Colomiers (31)',
    startDate: '2021-09',
    endDate: '2023-06',
    description: [
      'Science et Technologie de l\'Industrie et du Développement Durable',
      'Option Systèmes d\'Information et Numérique',
      'Découverte de la programmation et des systèmes embarqués',
    ],
    type: 'education',
  },
];

/**
 * Langues parlées
 */
export const languages = [
  { name: 'Français', level: 'Natif' },
  { name: 'Anglais', level: 'Courant' },
  { name: 'Espagnol', level: 'Scolaire' },
];

/**
 * Soft skills
 */
export const softSkills = [
  'Autonome',
  'Curieux',
  'Communication',
  'Capacité d\'adaptation',
  'Capacité d\'apprentissage',
  'Travail en équipe',
  'Rigueur',
  'Organisation',
];
