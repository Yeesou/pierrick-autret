import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Section } from '@/components';
import { getProjectById, projects } from '@/data/projects';

/**
 * Génère les métadonnées dynamiques pour chaque projet
 */
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const project = getProjectById(params.id);

  if (!project) {
    return {
      title: 'Projet non trouvé',
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

/**
 * Génère les chemins statiques pour tous les projets
 */
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

/**
 * Page détaillée d'un projet individuel
 * Affiche plusieurs images, description longue, technologies, liens
 */
export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = getProjectById(params.id);

  if (!project) {
    notFound();
  }

  const displayImages = project.images && project.images.length > 0 
    ? project.images 
    : project.imageUrl 
    ? [project.imageUrl] 
    : [];

  return (
    <>
      {/* Header avec titre et description */}
      <Section className="bg-gradient-to-br from-primary-900 via-gaming-dark to-accent-900 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-gaming-darker/50 to-transparent"></div>
        <div className="relative">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-neutral-300 hover:text-white transition-colors mb-6"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Retour aux projets
          </Link>

          <h1 className="text-white mb-4">{project.title}</h1>
          <p className="text-xl text-neutral-300 max-w-3xl">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mt-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white border border-white/20"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Liens */}
          {(project.githubUrl || project.liveUrl) && (
            <div className="flex flex-wrap gap-4 mt-6">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-lg text-white transition-colors border border-white/20"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Voir sur GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent-600 hover:bg-accent-700 rounded-lg text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Voir le site
                </a>
              )}
            </div>
          )}
        </div>
      </Section>

      {/* Description longue */}
      {project.longDescription && (
        <Section>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gradient">À propos du projet</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {project.longDescription}
              </p>
            </div>
          </div>
        </Section>
      )}

      {/* Galerie d'images */}
      {displayImages.length > 0 && (
        <Section className="bg-neutral-50 dark:bg-gaming-darker">
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient">
            Galerie du projet
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
            {displayImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video rounded-xl overflow-hidden shadow-xl border border-neutral-200 dark:border-primary-500/20 hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Informations supplémentaires */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="p-6 bg-gradient-to-br from-primary-900/10 to-accent-900/10 rounded-xl border border-primary-500/20">
              <h3 className="text-xl font-bold mb-4 text-gradient">Catégorie</h3>
              <p className="text-neutral-700 dark:text-neutral-300 capitalize">
                {project.category}
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-primary-900/10 to-accent-900/10 rounded-xl border border-primary-500/20">
              <h3 className="text-xl font-bold mb-4 text-gradient">Date</h3>
              <p className="text-neutral-700 dark:text-neutral-300">
                {new Date(project.date).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                })}
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
