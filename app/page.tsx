import Link from 'next/link';
import { Section, ProjectCard } from '@/components';
import { getFeaturedProjects } from '@/data/projects';
import { skills, skillCategoryLabels, skillLevelLabels } from '@/data/skills';
import type { SkillCategory } from '@/types';

/**
 * Page d'accueil
 * - Hero section avec présentation
 * - Projets mis en avant
 * - Compétences principales
 */
export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  // Grouper les compétences par catégorie
  const skillCategories: SkillCategory[] = ['frontend', 'backend', 'tools'];

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-gaming-dark via-gaming-darker to-gaming-darker relative overflow-hidden">
        
        <div className="relative flex flex-col items-center text-center lg:flex-row lg:text-left lg:gap-12">
          {/* Photo de profil */}
          <div className="mb-8 lg:mb-0 lg:flex-shrink-0">
            <div className="relative">
              {/* Placeholder image - Remplacer par votre photo */}
              <div className="h-48 w-48 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 p-1">
                <div className="h-full w-full rounded-full bg-gaming-darker flex items-center justify-center overflow-hidden">
                  {/* Remplacer cette div par <img src="/images/profile.png" alt="Pierrick Autret" /> */}
                  {/* <svg 
                    className="h-32 w-32 text-neutral-600" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg> */}
                  <img src="/images/photo/profile.png" alt="Pierrick Autret" />
                </div>
              </div>
              {/* Badge de disponibilité */}
              <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2 border-4 border-gaming-darker">
                <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          {/* Contenu textuel */}
          <div className="flex-1">
            {/* Badge */}
            <span className="tag mb-6 inline-block">Disponible pour une alternance à partir de septembre 2026</span>

            {/* Titre principal */}
            <h1 className="max-w-4xl text-white">
              Pierrick Autret - Développeur{' '}
              <span className="text-gradient">Web & Logiciel</span>
            </h1>

            {/* Sous-titre */}
            <p className="mt-6 max-w-2xl text-lg text-neutral-300">
              Je suis Pierrick Autret, étudiant en BUT Informatique à Toulouse. Passionné par la conception
              d&apos;architectures logicielles robustes, la logique métier complexe et le
              développement bas niveau. Expérience en backend avec PHP ou NestJS, GraphQL et
              projets personnels en C++, reverse engineering et exploitation mémoire.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:justify-start">
              <Link href="/projects" className="btn-primary">
                Voir mes projets
              </Link>
              <Link href="/contact" className="btn-secondary">
                Me contacter
              </Link>
            </div>
          </div>
        </div>

        {/* Stats rapides */}
        <div className="mt-16 grid grid-cols-3 gap-8 border-t border-primary-500/20 pt-8">
          <div className="text-center">
            <p className="text-3xl font-bold text-gradient-alt">3+</p>
            <p className="mt-1 text-sm text-neutral-400">
              Projets réalisés
            </p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-gradient-alt">3</p>
            <p className="mt-1 text-sm text-neutral-400">
              Ans d&apos;expérience
            </p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-gradient-alt">15+</p>
            <p className="mt-1 text-sm text-neutral-400">
              Technologies maîtrisées
            </p>
          </div>
        </div>
      </Section>

      {/* Featured Projects */}
      <Section
        title="Projets récents"
        subtitle="Découvrez une sélection de mes derniers projets personnels et académiques."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/projects" className="btn-secondary">
            Voir tous les projets
          </Link>
        </div>
      </Section>

      {/* Skills Section */}
      <Section
        className="bg-gaming-dark/50"
        title="Compétences"
        subtitle="Les technologies et outils que j'utilise au quotidien."
        centered
      >
        <div className="grid gap-8 md:grid-cols-3">
          {skillCategories.map((category) => (
            <Link
              key={category}
              href={`/competences#${category}`}
              className="card hover:border-primary-500/60 transition-all cursor-pointer group"
            >
              <h3 className="mb-4 text-lg font-semibold text-white group-hover:text-primary-400 transition-colors">
                {skillCategoryLabels[category]}
              </h3>
              <ul className="space-y-2">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-neutral-300">
                        {skill.name}
                      </span>
                      <span className="text-xs text-primary-400">
                        {skillLevelLabels[skill.level]}
                      </span>
                    </li>
                  ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-neutral-700 flex items-center justify-center text-sm text-primary-400 group-hover:text-primary-300 transition-colors">
                <span>Voir les détails</span>
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section centered>
        <div className="rounded-2xl bg-gradient-cyber px-8 py-12 text-center text-white md:px-16">
          <h2 className="text-white">Intéressé par mon profil ?</h2>
          <p className="mx-auto mt-4 max-w-xl text-neutral-100">
            Je recherche actuellement une alternance pour septembre 2026
            en développement Full-Stack. N&apos;hésitez pas à me contacter !
          </p>
          <Link
            href="/contact"
            className="btn mt-8 bg-white text-primary-700 hover:bg-neutral-100 font-semibold"
          >
            Prendre contact
          </Link>
        </div>
      </Section>
    </>
  );
}
