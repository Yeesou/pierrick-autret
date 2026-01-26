import type { Metadata } from 'next';
import { Section, ProjectCard } from '@/components';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Projets',
  description:
    'Découvrez tous mes projets de développement web : applications React, sites Next.js, et plus encore.',
};

/**
 * Page listant tous les projets
 * - Grille responsive de ProjectCards
 * - Filtrage par catégorie (à implémenter si besoin)
 */
export default function ProjectsPage() {
  return (
    <>
      {/* Header */}
      <Section className="bg-gradient-to-br from-primary-900 via-gaming-dark to-accent-900 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-gaming-darker/50 to-transparent"></div>
        <div className="relative text-center">
          <h1 className="text-white">Mes Projets</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-300">
            Une sélection de projets personnels et académiques qui illustrent
            mes compétences en développement web frontend.
          </p>
        </div>
      </Section>

      {/* Projects Grid */}
      <Section>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <div key={project.id} id={project.id}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {projects.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-neutral-600 dark:text-neutral-400">
              Aucun projet à afficher pour le moment.
            </p>
          </div>
        )}
      </Section>

      {/* Stats */}
      <Section className="bg-gaming-dark border-t border-primary-500/20">
        <div className="grid gap-8 text-center md:grid-cols-4">
          <div>
            <p className="text-4xl font-bold text-gradient">{projects.length}</p>
            <p className="mt-2 text-sm text-neutral-300">
              Projets réalisés
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold text-gradient">
              {new Set(projects.flatMap((p) => p.technologies)).size}
            </p>
            <p className="mt-2 text-sm text-neutral-300">
              Technologies utilisées
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold text-gradient">
              {projects.filter((p) => p.liveUrl).length}
            </p>
            <p className="mt-2 text-sm text-neutral-300">
              Démos en ligne
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold text-gradient">
              {projects.filter((p) => p.githubUrl).length}
            </p>
            <p className="mt-2 text-sm text-neutral-300">
              Repos GitHub
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
