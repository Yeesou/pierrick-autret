# Portfolio - Développeur Web Frontend

Portfolio personnel statique développé avec Next.js 14, TypeScript et Tailwind CSS.

## 🚀 Stack Technique

- **Framework** : Next.js 14 (App Router)
- **Langage** : TypeScript
- **Styles** : Tailwind CSS
- **Déploiement** : Vercel (SSG)

## 📁 Structure du Projet

```
├── app/                    # Pages (App Router)
│   ├── layout.tsx          # Layout global
│   ├── page.tsx            # Page d'accueil
│   ├── projects/           # Page projets
│   ├── about/              # Page à propos
│   └── contact/            # Page contact
├── components/             # Composants React
│   ├── layout/             # Navbar, Footer
│   ├── ui/                 # Section, ProjectCard
│   └── index.ts            # Barrel exports
├── data/                   # Données mockées
│   ├── projects.ts         # Liste des projets
│   ├── skills.ts           # Compétences
│   └── navigation.ts       # Liens navigation
├── types/                  # Types TypeScript
├── styles/                 # Styles globaux
└── public/                 # Assets statiques
```

## 🛠️ Installation

```bash
# Cloner le repo
git clone https://github.com/yeesou/pierrick-autret.git
cd pierrick-autret

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

## 📦 Scripts Disponibles

| Script | Description |
|--------|-------------|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Build de production (SSG) |
| `npm run start` | Lance le serveur de production |
| `npm run lint` | Analyse du code avec ESLint |

## 🌐 Déploiement sur Vercel

1. Push le code sur GitHub
2. Connecter le repo sur [vercel.com](https://vercel.com)
3. Vercel détecte automatiquement Next.js
4. Le site est déployé avec chaque push sur `main`

## ✏️ Personnalisation

### Modifier les projets
Éditer `data/projects.ts` pour ajouter/modifier les projets.

### Modifier les compétences
Éditer `data/skills.ts` pour mettre à jour les compétences.

### Modifier les liens sociaux
Éditer `data/navigation.ts` pour personnaliser les liens.

### Activer le formulaire de contact
Remplacer `YOUR_FORM_ID` dans `app/contact/page.tsx` par votre ID Formspree.

## 📝 Licence

MIT

---

Développé avec ❤️ et beaucoup de ☕
