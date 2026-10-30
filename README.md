# NutriSuivi — version GitHub Pages

Application statique mobile, sans serveur ni Python. Journal alimentaire, poids, graphiques, dîners, saisie texte, dictée si navigateur compatible, photo avec aperçu sans analyse automatique, export/import JSON.

## Installer sur GitHub Pages

1. Créer un dépôt **public** `nutrisuivi` sur GitHub.
2. Déposer à la **racine** `index.html`, `manifest.webmanifest`, `sw.js`, `icon.svg` (ne pas télécharger uniquement le ZIP dans le dépôt).
3. **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: main / (root) → Save**.
4. Ouvrir `https://superoroborus.github.io/nutrisuivi/` lorsque la publication est active.
5. Sur Android Chrome : menu → **Installer l'application** ou **Ajouter à l'écran d'accueil**.

## Confidentialité et limites

- Les pesées, objectifs, menus et aliments restent uniquement dans le stockage du navigateur (`localStorage`) de l'appareil. **Ils ne sont pas synchronisés entre appareils**.
- **Exporter régulièrement la sauvegarde JSON** ; vider les données du navigateur ou changer de téléphone peut effacer l'historique. L'import écrase les données existantes.
- La photo s'affiche en aperçu mais **l'IA photo est désactivée** : GitHub Pages ne peut pas garder secrète une clé API. Nécessite plus tard un backend séparé et sécurisé. Ne pas placer de clé dans le dépôt.
- Saisie texte : petite base illustrative de valeurs approximatives par 100 g, non exhaustive, non validée pour usage clinique. La recherche ne traite qu'un aliment à la fois ; modifier manuellement les apports.
- Dictée vocale : API SpeechRecognition selon navigateur, éventuellement traitement par le fournisseur du navigateur ; rien n'est téléversé par le code de l'application.
- Le service worker permet d'utiliser les fichiers en cache hors ligne après une première visite, sous réserve du comportement du navigateur.
- L'application ne remplace pas un professionnel de santé.

## Test local

Ouvrir `index.html` pour les fonctions principales, ou lancer un serveur statique `python -m http.server 8000` pour tester dans des conditions proches de l'hébergement.
