# Portfolio — Fifaliana Valea

Portfolio professionnel Full-Stack (statique), bilingue FR/EN, thèmes clair/sombre, esthétique cyberpunk élégante.

Site publié : [fifalianavalea.vercel.app](https://fifalianavalea.vercel.app/)

## Structure

```
Portfolio/
├── index.html              # Structure sémantique du site
├── vercel.json             # Config déploiement Vercel
├── css/
│   ├── variables.css       # Couleurs, thèmes, tokens
│   ├── base.css            # Reset et typographie
│   ├── layout.css          # Header, hero, grilles, responsive
│   ├── components.css      # Cartes, formulaire, boutons
│   └── animations.css      # Reveal, hero, reduced-motion
├── js/
│   ├── main.js             # Point d’entrée
│   ├── i18n.js             # Langue FR/EN + persistence
│   ├── theme.js            # Thème clair/sombre
│   ├── render.js           # Rendu des sections dynamiques
│   ├── navigation.js       # Menu, scroll spy, progress
│   ├── animations.js       # IntersectionObserver
│   ├── contact.js          # Validation + Formspree / mailto
│   └── storage.js          # localStorage sécurisé
├── data/
│   └── content.js          # Contenu FR/EN (source de vérité)
└── assets/
    ├── cv-fifaliana-valea.pdf
    ├── icons/favicon.svg
    └── images/             # Visuels illustratifs des projets
```

## Lancer en local

Aucune dépendance npm. Servez les fichiers via un serveur HTTP (les modules ES ne fonctionnent pas correctement en `file://`).

```bash
# Option 1 — Python
python3 -m http.server 8080

# Option 2 — Node (si installé)
npx --yes serve -l 8080
```

Ouvrez [http://localhost:8080](http://localhost:8080).

## Build production

Site 100 % statique : aucun build. Déployez le dossier tel quel sur Vercel, Netlify ou GitHub Pages.

```bash
# Vercel CLI (optionnel)
npx vercel
```

## Modifier le contenu

Tout le contenu éditable est dans `data/content.js` :

| Élément | Emplacement |
|--------|-------------|
| Identité, e-mail, liens | `meta` |
| Textes UI FR/EN | `ui.fr` / `ui.en` |
| Compétences | `ui.*.skills.categories` |
| Expériences | `ui.*.experience.items` |
| Projets | `ui.*.projects.items` |
| Formation | `ui.*.education.items` |

Les noms de technologies, entreprises et URLs ne sont pas traduits.

## Portrait

Photo de profil : `assets/images/portrait-fifaliana-valea.png` (utilisée dans le hero).

Pour la remplacer, écrasez ce fichier ou mettez à jour le chemin `src` de `.hero__portrait` dans `index.html`.

## Images de projets

Les fichiers dans `assets/images/project-*.jpg` sont des **visuels illustratifs** (Unsplash), clairement libellés. Remplacez-les par de vraies captures :

- `project-erp.jpg`
- `project-crypto.jpg`
- `project-java.jpg`
- `project-pharmacy.jpg`

Puis mettez à jour `image` / `imageAlt` dans `data/content.js` (retirez le libellé « Visuel illustratif » si ce sont de vraies captures).

## CV PDF

Fichier servi pour le téléchargement : `files/CV_Fifaliana_Valea.pdf`.

```bash
cp "/chemin/vers/nouveau-cv.pdf" files/CV_Fifaliana_Valea.pdf
```

## Formulaire de contact

Par défaut, aucun backend n’est configuré : la validation reste active, puis un `mailto:` s’ouvre. Aucun faux succès n’est affiché.

Pour activer l’envoi réel avec [Formspree](https://formspree.io/) :

1. Créez un formulaire Formspree.
2. Dans `js/contact.js`, définissez :

```js
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/xxxxxxxx";
```

## Préférences utilisateur

- Langue : `localStorage` clé `portfolio-lang` (défaut : français)
- Thème : `portfolio-theme` (sinon préférence système)

## Stack technique

HTML sémantique, CSS moderne (variables, grid/flex), JavaScript ES modules — sans framework, pour un déploiement simple et de bonnes performances.
