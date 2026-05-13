ICÔNES — GUIDE DE GÉNÉRATION
==============================

ÉTAT ACTUEL (SVG modernes — fonctionnent immédiatement)
-------------------------------------------------------
✅ favicon.svg          → onglet navigateur (Chrome, Firefox, Edge, Safari 15+)
✅ apple-icon.svg       → écran d'accueil iOS Safari (15+)
✅ icon.svg             → PWA / partage
✅ site.webmanifest     → références SVG configurées

ANCIENS FICHIERS PNG VIDES — À SUPPRIMER OU REMPLACER
------------------------------------------------------
Si vous avez ces fichiers de 0 octets, ils causent des 404 silencieux.
Soit vous les supprimez (les SVG ci-dessus suffisent pour 95 % des navigateurs),
soit vous les remplacez par des vrais PNG :

  - icon-192.png         → 192 × 192 px
  - icon-512.png         → 512 × 512 px
  - apple-touch-icon.png → 180 × 180 px
  - favicon.ico          → 32 × 32 px (legacy IE / vieux navigateurs)
  - og-image.jpg         → 1200 × 630 px (partages LinkedIn/WhatsApp)

POUR GÉNÉRER LES PNG (5 min — recommandé pour production)
---------------------------------------------------------
1. Aller sur https://realfavicongenerator.net
2. Uploader votre logo source (PNG ou SVG)
3. Configurer (couleur fond #f4f1ec, etc.)
4. Télécharger le pack complet
5. Décompresser dans ce dossier public/
6. Remplacer dans src/app/layout.tsx :

   icons: {
     icon: [
       { url: '/favicon.svg', type: 'image/svg+xml' },
       { url: '/favicon.ico', sizes: 'any' }
     ],
     shortcut: '/favicon.ico',
     apple: [
       { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
     ]
   }

POUR OG-IMAGE (partage social) — 1200 × 630 px
-----------------------------------------------
Option 1 (rapide) :
  - Capturer le hero du site en 1200×630 via Chrome devtools
  - Sauver en .jpg
  - Placer dans public/og-image.jpg

Option 2 (auto Next.js — recommandé) :
  - Créer src/app/opengraph-image.tsx
  - Next.js génère automatiquement à la build
  - Documentation : https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image
