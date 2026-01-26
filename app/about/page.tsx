import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components';
import { skills, skillCategoryLabels, skillLevelLabels } from '@/data/skills';
import { experiences, languages, softSkills } from '@/data/experience';
import { cvLinks } from '@/data/navigation';
import type { SkillCategory } from '@/types';

export const metadata: Metadata = {
  title: 'À propos',
  description:
    'Pierrick Autret - Développeur Full-Stack étudiant en BUT Informatique à Toulouse. Découvrez mon parcours, mes compétences et mes expériences.',
};

/**
 * Page À propos
 * - Présentation personnelle
 * - Parcours et formation
 * - Liste complète des compétences
 */
export default function AboutPage() {
  const allCategories: SkillCategory[] = ['frontend', 'backend', 'tools', 'design'];
  
  // Séparer les expériences et formations
  const education = experiences.filter(exp => exp.type === 'education');
  const work = experiences.filter(exp => exp.type === 'work');

  return (
    <>
      {/* Header */}
      <Section className="bg-gradient-to-br from-accent-900 via-gaming-dark to-primary-900 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-gaming-darker/50 to-transparent"></div>
        <div className="relative grid items-center gap-12 md:grid-cols-2">
          {/* Photo placeholder */}
          <div className="order-2 md:order-1">
            <div className="aspect-square overflow-hidden rounded-2xl bg-gaming-dark border border-primary-500/20">
              <div className="flex h-full items-center justify-center text-primary-400">
                <img src="/images/photo/profile.png" alt="Pierrick Autret" />
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className="order-1 md:order-2">
            <span className="tag mb-4">À propos de moi</span>
            <h1 className="text-white">
              Pierrick Autret
            </h1>
            <p className="mt-4 text-xl text-gradient-alt">
              Développeur Web & Logiciel
            </p>
            <p className="mt-6 text-neutral-300">
              Étudiant en 3e année de BUT Informatique à l'IUT Paul Sabatier de Toulouse.
              Mes projets mettent en avant mon expertise en backend et logique
              métier : architecture monorepo, API GraphQL, modélisation de bases de données,
              intégration avec systèmes existants. C&apos;est sur ces aspects architecturaux
              et la conception de logiques métier robustes que je concentre mon travail,
              le frontend n&apos;étant qu&apos;une interface pour valoriser cette complexité.
            </p>
            <p className="mt-4 text-neutral-300">
              Parallèlement, je consacre beaucoup de temps au reverse engineering et au
              développement bas niveau : analyse de structures mémoire, exploitation système,
              et projets personnels comme un logiciel utilisant le SMM (<a href="https://en.wikipedia.org/wiki/System_Management_Mode" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>System Management Mode</a>).
              Ces expériences me permettent de comprendre en profondeur le fonctionnement des
              systèmes. Je recherche une alternance pour septembre 2026, idéalement orienté
              backend/architecture ou développement système. N&apos;hésitez pas à me contacter pour
            </p>
            
            {/* Boutons CV */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={cvLinks.standard.url}
                download
                className="btn-primary inline-flex items-center justify-center gap-2"
                title={cvLinks.standard.description}
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                {cvLinks.standard.label}
              </a>
              <a
                href={cvLinks.ats.url}
                download
                className="btn-secondary inline-flex items-center justify-center gap-2"
                title={cvLinks.ats.description}
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                {cvLinks.ats.label}
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Parcours */}
      <Section
        title="Mon Parcours"
        subtitle="Formation et expériences qui ont forgé mes compétences."
      >
        <div className="grid gap-8 md:grid-cols-2">
          {/* Formation */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-neutral-900 dark:text-white">
              Formation
            </h3>
            <div className="space-y-6">
              {education.map((exp) => (
                <div key={exp.id} className="card">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                      {new Date(exp.startDate).getFullYear()} -{' '}
                      {exp.current ? 'Présent' : new Date(exp.endDate!).getFullYear()}
                    </span>
                    {exp.current && <span className="tag text-xs">En cours</span>}
                  </div>
                  <h4 className="text-lg font-semibold text-neutral-900 dark:text-white">
                    {exp.title}
                  </h4>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    {exp.company} - {exp.location}
                  </p>
                  <ul className="mt-3 space-y-1 text-sm text-neutral-500 dark:text-neutral-500">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-primary-600">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Expérience professionnelle */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-neutral-900 dark:text-white">
              Expérience Professionnelle
            </h3>
            <div className="space-y-6">
              {work.map((exp) => (
                <div key={exp.id} className="card">
                  <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                    {new Date(exp.startDate).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })} -{' '}
                    {exp.current ? 'Présent' : new Date(exp.endDate!).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
                  </span>
                  <h4 className="mt-2 text-lg font-semibold text-neutral-900 dark:text-white">
                    {exp.title}
                  </h4>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    {exp.company} - {exp.location}
                  </p>
                  <ul className="mt-3 space-y-1 text-sm text-neutral-500 dark:text-neutral-500">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-primary-600">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Compétences détaillées */}
      <Section
        className="bg-neutral-50 dark:bg-neutral-800/50"
        title="Compétences Techniques"
        subtitle="Technologies et outils que je maîtrise."
      >
        <div className="grid gap-8 md:grid-cols-2">
          {allCategories.map((category) => {
            const categorySkills = skills.filter((s) => s.category === category);
            if (categorySkills.length === 0) return null;

            return (
              <Link
                key={category}
                href={`/competences#${category}`}
                className="card hover:border-primary-500/60 transition-all cursor-pointer group"
              >
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {skillCategoryLabels[category]}
                  </h3>
                  <svg className="h-5 w-5 text-neutral-400 group-hover:text-primary-500 transition-colors" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
                <div className="space-y-4">
                  {categorySkills.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-1 flex items-center justify-between">
                        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                          {skill.name}
                        </span>
                        <span className="text-xs text-neutral-500">
                          {skillLevelLabels[skill.level]}
                        </span>
                      </div>
                      {/* Barre de progression */}
                      <div className="h-2 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-700">
                        <div
                          className="h-full rounded-full bg-primary-500"
                          style={{
                            width:
                              skill.level === 'expert'
                                ? '100%'
                                : skill.level === 'advanced'
                                  ? '80%'
                                  : skill.level === 'intermediate'
                                    ? '60%'
                                    : '40%',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* Valeurs / Soft Skills */}
      <Section title="Ce qui me définit">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Soft Skills */}
          <div className="card">
            <h3 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-white">
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span key={skill} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Langues */}
          <div className="card">
            <h3 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-white">
              Langues
            </h3>
            <div className="space-y-3">
              {languages.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between">
                  <span className="text-neutral-700 dark:text-neutral-300">
                    {lang.name}
                  </span>
                  <span className="text-sm text-neutral-500">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Valeurs */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="card text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/30">
              <svg
                className="h-6 w-6 text-primary-600 dark:text-primary-400"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
              Code Propre
            </h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Je privilégie un code lisible, maintenable et bien documenté plutôt
              que des solutions rapides.
            </p>
          </div>

          <div className="card text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/30">
              <svg
                className="h-6 w-6 text-primary-600 dark:text-primary-400"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
              Apprentissage Continu
            </h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Je reste curieux et me forme constamment aux nouvelles technologies
              et bonnes pratiques.
            </p>
          </div>

          <div className="card text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/30">
              <svg
                className="h-6 w-6 text-primary-600 dark:text-primary-400"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
              Esprit d&apos;équipe
            </h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Je communique clairement et collabore efficacement avec les autres
              membres de l&apos;équipe.
            </p>
          </div>
        </div>
      </Section>

      {/* Centres d'intérêt */}
      <Section
        className="bg-neutral-50 dark:bg-neutral-800/50"
        title="Centres d'intérêt"
        subtitle="Mes passions en développement logiciel."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-100 dark:bg-accent-900/30">
              <svg
                className="h-6 w-6 text-accent-600 dark:text-accent-400"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
              Backend & Architecture
            </h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Conception d&apos;architectures robustes, APIs (REST/GraphQL), logique métier
              complexe et tests. C&apos;est là que je m&apos;épanouis vraiment.
            </p>
          </div>

          <div className="card text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-100 dark:bg-accent-900/30">
              <svg
                className="h-6 w-6 text-accent-600 dark:text-accent-400"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
              Logique Métier
            </h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Construction d&apos;architectures logicielles robustes et de systèmes
              métier complexes avec des design patterns avancés.
            </p>
          </div>

          <div className="card text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-100 dark:bg-accent-900/30">
              <svg
                className="h-6 w-6 text-accent-600 dark:text-accent-400"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
              Reverse Engineering & Bas Niveau
            </h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Analyse de binaires, compréhension des structures mémoire, exploitation système.
              Projets personnels incluant du code SMM et kernel-level.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
