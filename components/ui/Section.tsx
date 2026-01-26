import type { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  /** Titre de la section (optionnel) */
  title?: string;
  /** Sous-titre de la section (optionnel) */
  subtitle?: string;
  /** Centrer le contenu texte */
  centered?: boolean;
}

/**
 * Composant Section réutilisable
 * - Gère le padding vertical et le container
 * - Supporte titre et sous-titre optionnels
 * - Option de centrage du texte
 */
export function Section({
  children,
  className = '',
  id,
  title,
  subtitle,
  centered = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${className}`}
    >
      <div className="container-custom">
        {/* Header de section */}
        {(title || subtitle) && (
          <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
            {title && (
              <h2 className="text-neutral-900 dark:text-white">{title}</h2>
            )}
            {subtitle && (
              <p className="mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Contenu */}
        {children}
      </div>
    </section>
  );
}
