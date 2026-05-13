# Axion Studio — Site web premium

**Stack** : Next.js 15 (App Router) · TypeScript · TailwindCSS · Framer Motion
**Esthétique** : Dark luxury · Black / charcoal / warm gold · industrial minimalist
**Inspirations** : Apple · Tesla · Palantir · enterprise innovation

---

## 📁 Structure du projet

```
axion-studio-nextjs/
├── public/
│   └── site.webmanifest           # PWA manifest
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout + SEO + schema.org
│   │   ├── page.tsx               # Page d'accueil
│   │   ├── globals.css            # Styles globaux + tokens
│   │   ├── sitemap.ts             # Sitemap dynamique
│   │   └── robots.ts              # robots.txt dynamique
│   ├── components/
│   │   ├── Navbar.tsx             # Sticky glassmorphism nav
│   │   ├── Hero.tsx               # Hero animé avec parallax
│   │   ├── Services.tsx           # Grille 6 piliers
│   │   ├── DigitalTwinViz.tsx     # Visualisation interactive
│   │   ├── CaseStudies.tsx        # Cas réels
│   │   ├── About.tsx              # Section about + principes
│   │   ├── Contact.tsx            # Formulaire de contact
│   │   ├── Footer.tsx             # Footer premium
│   │   └── ui/
│   │       ├── Logo.tsx           # Logo SVG inline
│   │       ├── SectionHeading.tsx # Header de section
│   │       └── AnimatedText.tsx   # Texte animé mot par mot
│   ├── data/
│   │   ├── services.ts            # Data services
│   │   └── case-studies.ts        # Data cas clients
│   └── lib/
│       ├── seo.ts                 # Config SEO + Schema.org
│       ├── motion-variants.ts     # Variants Framer Motion
│       └── utils.ts               # cn() helper
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.js
├── package.json
└── README.md
```

---

## 🚀 Démarrage rapide

### Prérequis
- Node.js 18.17+ ([nodejs.org](https://nodejs.org))
- npm ou pnpm

### Installation locale (5 min)

```bash
# 1. Cloner / placer le projet
cd axion-studio-nextjs

# 2. Installer les dépendances
npm install

# 3. Lancer en dev
npm run dev

# Le site tourne sur http://localhost:3000
```

### Build de production

```bash
npm run build
npm run start
```

### Lint & type check

```bash
npm run lint
npm run type-check
```

---

## 🌐 Déploiement Vercel (5 min)

### Méthode A — Via GitHub (recommandée)

1. **Pousser sur GitHub** :
   ```bash
   git init
   git add .
   git commit -m "Axion Studio website v1"
   git branch -M main
   git remote add origin https://github.com/[votre-user]/axion-studio.git
   git push -u origin main
   ```

2. **Sur Vercel** ([vercel.com](https://vercel.com)) :
   - **Add New → Project**
   - Importer le repo `axion-studio`
   - Framework Preset : **Next.js** (auto-détecté)
   - Cliquer **Deploy**
   - 60 secondes plus tard, votre site est live sur `axion-studio-xxx.vercel.app`

3. **Domaine custom** :
   - Settings → Domains
   - Ajouter `axionstudio.com` et `axionstudio.dz`
   - Configurer les DNS chez votre registrar (A record + CNAME)

### Méthode B — Via Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
# Suivre les prompts
```

---

## 🎨 Personnalisation

### Coordonnées et contenu
Éditer **`src/lib/seo.ts`** :
- `siteConfig.url` — votre domaine
- `siteConfig.contact.email`, `.phone`, `.location`
- `siteConfig.social.linkedin`

### Couleurs (palette gold)
Éditer **`tailwind.config.ts`** dans `theme.extend.colors.gold`.

### Polices
Le projet utilise Inter (sans), Fraunces (display serif), JetBrains Mono.
Modifiable dans **`src/app/layout.tsx`**.

### Services et cas
Éditer **`src/data/services.ts`** et **`src/data/case-studies.ts`**.

### Logo
SVG inline dans **`src/components/ui/Logo.tsx`**. Modifier les paths pour votre identité.

---

## 📦 Assets à fournir avant production

Placer dans `public/` :
- `favicon.ico` (32×32)
- `apple-touch-icon.png` (180×180)
- `icon-192.png` (192×192)
- `icon-512.png` (512×512)
- `og-image.jpg` (1200×630) — image Open Graph pour le partage social
- `logo.png` (transparent, 512×512) — utilisé par Schema.org

---

## ⚡ Optimisations incluses

### Performance
- ✅ Next.js 15 App Router avec React Server Components par défaut
- ✅ Components `'use client'` uniquement où nécessaire (animations)
- ✅ Polices chargées avec `next/font` + `display: swap`
- ✅ `next/image` avec formats AVIF/WebP automatiques
- ✅ Lazy loading natif sur images en dessous du fold
- ✅ Compression activée (next.config.js)
- ✅ `optimizePackageImports` pour framer-motion et lucide-react

### SEO
- ✅ Metadata API complète (Next.js 15)
- ✅ Open Graph + Twitter Card
- ✅ Schema.org Organization + ProfessionalService (JSON-LD)
- ✅ `sitemap.xml` dynamique
- ✅ `robots.txt` dynamique
- ✅ Canonical URL
- ✅ Multilingue (fr-DZ / en-US ready)
- ✅ Balises sémantiques HTML5

### Accessibilité (a11y)
- ✅ Skip-link "Aller au contenu principal"
- ✅ Attributs `aria-*` sur tabs / nav / boutons
- ✅ Focus visible sur tous les éléments interactifs
- ✅ Support `prefers-reduced-motion`
- ✅ Contraste WCAG AA respecté sur palette dark
- ✅ Navigation clavier complète

### Sécurité
- ✅ Headers de sécurité (X-Frame-Options, X-XSS-Protection, etc.)
- ✅ `Permissions-Policy` restrictif
- ✅ Pas de `dangerouslySetInnerHTML` sauf pour Schema.org JSON-LD contrôlé

---

## 🧪 Lighthouse cible

Score visé avec assets correctement préparés :
- Performance : **95-100**
- Accessibility : **100**
- Best Practices : **100**
- SEO : **100**

Pour vérifier :
```bash
npm run build && npm run start
# Puis ouvrir Chrome DevTools → Lighthouse → Generate report
```

---

## 🛠️ Évolutions possibles

| Évolution | Effort | Impact |
|---|:-:|---|
| Brancher le formulaire contact à un service email (Resend, SendGrid) | 30 min | Critique |
| Ajouter `/blog` (Next.js + MDX) | 4-6h | SEO long terme |
| Ajouter page `/cases/[slug]` individuelle | 2-3h | Profondeur |
| Internationalisation EN complète (next-intl) | 6-8h | Export Europe |
| Ajouter Google Tag Manager / Plausible Analytics | 30 min | Mesure |
| Mode démo Digital Twin interactif (Three.js) | 12-20h | Wow factor |

---

## 📞 Contact (mis à jour dans le code)

- **Email** : contact@axionstudio.com
- **Phone / WhatsApp** : +213 550 29 10 05
- **Location** : Alger, Algérie
- **LinkedIn** : linkedin.com/company/axionstudio

---

## 📄 Licence

© 2026 Axion Studio. Code et design propriétaires.

---

**Designing what's next.**
