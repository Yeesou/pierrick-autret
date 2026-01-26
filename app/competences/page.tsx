import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components';
import { skills, skillCategoryLabels, skillLevelLabels } from '@/data/skills';
import { projects } from '@/data/projects';
import type { SkillCategory } from '@/types';

export const metadata: Metadata = {
  title: 'Compétences',
  description:
    'Découvrez les compétences techniques et professionnelles acquises au fil des projets et expériences.',
};

/**
 * Page Compétences
 * - Présentation personnalisée des compétences (pas de copie du PN)
 * - Organisation par catégorie
 * - Transitivité vers les projets
 */
export default function CompetencesPage() {
  // Grouper les compétences par catégorie
  const skillCategories: SkillCategory[] = ['frontend', 'backend', 'tools', 'design'];

  // Fonction pour obtenir les projets utilisant une compétence
  const getProjectsForSkill = (skillName: string) => {
    return projects.filter((project) =>
      project.technologies.some(
        (tech) => tech.toLowerCase() === skillName.toLowerCase()
      )
    );
  };

  return (
    <>
      {/* Header */}
      <Section className="bg-gradient-to-br from-primary-900/20 via-gaming-darker to-accent-900/20 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-gaming-darker/50 to-transparent"></div>
        <div className="relative text-center">
          <span className="tag mb-4">Compétences</span>
          <h1 className="text-white">
            Mon expertise technique
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-300">
            Découvrez les technologies et compétences que j&apos;ai développées
            au travers de mes projets académiques, personnels et professionnels.
          </p>
        </div>
      </Section>

      {/* Compétences par catégorie */}
      {skillCategories.map((category, index) => {
        const categorySkills = skills.filter((skill) => skill.category === category);

        if (categorySkills.length === 0) return null;

        return (
          <Section
            key={category}
            id={category}
            className={index % 2 === 1 ? 'bg-gaming-dark/30' : ''}
            title={skillCategoryLabels[category]}
            subtitle={getCategoryDescription(category)}
          >
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {categorySkills.map((skill) => {
                const relatedProjects = getProjectsForSkill(skill.name);

                return (
                  <div
                    key={skill.name}
                    className="card group hover:border-primary-500/40 transition-all"
                  >
                    {/* En-tête de la compétence */}
                    <div className="mb-4 flex items-start justify-between">
                      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                        {skill.name}
                      </h3>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${getLevelBadgeClass(
                          skill.level
                        )}`}
                      >
                        {skillLevelLabels[skill.level]}
                      </span>
                    </div>

                    {/* Barre de progression */}
                    <div className="mb-4 h-2 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-700">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${getLevelGradient(
                          skill.level
                        )}`}
                        style={{ width: getLevelWidth(skill.level) }}
                      ></div>
                    </div>

                    {/* Projets associés */}
                    {relatedProjects.length > 0 && (
                      <div className="mt-4 border-t border-neutral-200 pt-4 dark:border-neutral-700">
                        <p className="mb-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                          Utilisé dans {relatedProjects.length} projet
                          {relatedProjects.length > 1 ? 's' : ''} :
                        </p>
                        <ul className="space-y-1">
                          {relatedProjects.slice(0, 3).map((project) => (
                            <li key={project.id}>
                              <Link
                                href={`/projects#${project.id}`}
                                className="text-sm text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
                              >
                                → {project.title}
                              </Link>
                            </li>
                          ))}
                          {relatedProjects.length > 3 && (
                            <li>
                              <Link
                                href="/projects"
                                className="text-sm text-neutral-500 hover:text-primary-500 dark:text-neutral-400 dark:hover:text-primary-400"
                              >
                                + {relatedProjects.length - 3} autres
                              </Link>
                            </li>
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </Section>
        );
      })}

      {/* Section Évolution */}
      <Section
        className="bg-gaming-dark/50"
        title="Évolution et apprentissage continu"
        subtitle="Mon parcours de développement de compétences"
        centered
      >
        <div className="mx-auto max-w-3xl space-y-6 text-left">
          <div className="card">
            <h3 className="mb-3 text-xl font-semibold text-neutral-900 dark:text-white">
              🎓 Formation académique
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300">
              Ma formation en BUT Informatique m&apos;a permis d&apos;acquérir des bases solides en
              programmation orientée objet, architecture logicielle et méthodologies Agile.
              Les projets académiques m&apos;ont appris à travailler en équipe et à respecter
              des cahiers des charges précis.
            </p>
          </div>

          <div className="card">
            <h3 className="mb-3 text-xl font-semibold text-neutral-900 dark:text-white">
              💼 Expérience professionnelle
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300">
              Mon stage à l&apos;IUCT Oncopole m&apos;a confronté aux contraintes du monde réel :
              développement pour un environnement hospitalier sensible, intégration avec des
              systèmes existants (DPI, LDAP), validation utilisateur et préparation à la mise
              en production. J&apos;ai développé ma capacité d&apos;adaptation et ma rigueur.
            </p>
          </div>

          <div className="card">
            <h3 className="mb-3 text-xl font-semibold text-neutral-900 dark:text-white">
              🚀 Projets personnels
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300">
              Mes projets personnels comme PicReady m&apos;ont poussé à explorer des technologies
              modernes (GraphQL, NestJS, MongoDB) et à adopter des pratiques professionnelles
              (architecture monorepo, tests unitaires, CI/CD). Ils reflètent ma curiosité et
              mon désir d&apos;apprendre en continu.
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link href="/projects" className="btn-primary">
              Découvrir mes projets
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

/**
 * Helper: Description de catégorie
 */
function getCategoryDescription(category: SkillCategory): string {
  const descriptions: Record<SkillCategory, string> = {
    frontend:
      'Technologies pour créer des interfaces utilisateur modernes, réactives et accessibles.',
    backend:
      'Langages et frameworks pour construire des API robustes et gérer la logique métier.',
    tools:
      'Outils et méthodologies pour optimiser le développement et la collaboration en équipe.',
    design:
      'Principes d\'architecture et patterns pour concevoir des applications maintenables.',
    other: 'Autres compétences techniques et transversales.',
  };

  return descriptions[category];
}

/**
 * Helper: Classe CSS pour le badge de niveau
 */
function getLevelBadgeClass(level: string): string {
  const classes: Record<string, string> = {
    beginner: 'bg-neutral-200 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-300',
    intermediate: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
    advanced: 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300',
    expert: 'bg-accent-100 text-accent-700 dark:bg-accent-900/30 dark:text-accent-300',
  };

  return classes[level] || classes.beginner;
}

/**
 * Helper: Gradient pour la barre de progression
 */
function getLevelGradient(level: string): string {
  const gradients: Record<string, string> = {
    beginner: 'from-neutral-400 to-neutral-500',
    intermediate: 'from-blue-400 to-blue-600',
    advanced: 'from-primary-500 to-primary-600',
    expert: 'from-accent-500 to-accent-600',
  };

  return gradients[level] || gradients.beginner;
}

/**
 * Helper: Largeur de la barre de progression
 */
function getLevelWidth(level: string): string {
  const widths: Record<string, string> = {
    beginner: '40%',
    intermediate: '60%',
    advanced: '85%',
    expert: '100%',
  };

  return widths[level] || widths.beginner;
}
