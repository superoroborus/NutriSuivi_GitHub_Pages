# NutriSuivi v5 — export CSV Excel

Version construite sur la v4. Les fichiers de stockage (`nutrisuivi-v1`, `nutrisuivi-extras-v2`) et le bouton de sauvegarde JSON restent inchangés.

## Publication GitHub Pages

Exporter une sauvegarde JSON **avant** la mise à jour. Remplacer `index.html`, `sw.js`, `README.md` et ajouter `csv-export.js` à la racine du dépôt. Conserver `food-sources.js`, `manifest.webmanifest`, `icon.svg`. Ne pas supprimer les données du navigateur. Le nouveau service worker utilise un cache v5.

## Export CSV

Dans la section **Sauvegardes** en bas de l’application, choisir 30 jours, 90 jours ou tout l’historique, puis **Exporter mon suivi CSV**. Le fichier est généré localement sans réseau. Encodage UTF-8 BOM ; séparateur point-virgule ; décimales avec virgule ; dates ISO AAAA-MM-JJ. Colonnes : date, poids en kg, énergie en kcal, protéines, glucides, lipides en g, nombre de catégories de repas renseignées.

Une ligne par date ayant au moins une pesée ou un aliment enregistré. Si aucun aliment n’est déclaré pour une date, les apports sont laissés vides (pas à zéro). Les journées avec des repas renseignés peuvent être incomplètes : le nombre de catégories renseignées aide à le voir, mais ne garantit pas leur exhaustivité. Les pesées ne sont **pas** reportées sur les jours sans pesée. Le CSV est un tableau d’analyse, **pas une sauvegarde restaurable** : pour restaurer l’application, utiliser le JSON.

## Contrôle rapide

Après publication : enregistrer une pesée et un repas, exporter 30 jours, ouvrir le fichier dans Excel et vérifier les totaux. Contrôler aussi que les favoris, les recherches Open Food Facts et l’export/import JSON fonctionnent toujours.

## V6 — Calculatrice facultative

Nouvel onglet « Calculatrice » : âge adulte, poids, taille, choix de l'équation femme/homme, activité, objectif et répartition protéine/glucides/lipides. Résultats indicatifs selon Mifflin–St Jeor (1990) et coefficients d'activité usuels. Aucun questionnaire obligatoire au démarrage. Le bouton « Appliquer » est le seul mécanisme modifiant `settings.target_kcal`, via l'API locale déjà existante. Les entrées de la calculatrice restent dans `localStorage` (`nutrisuivi-calculator-v1`) sur le même navigateur ; la sauvegarde JSON historique peut ne pas inclure ces préférences facultatives. Les journaux/poids/export JSON/CSV et Open Food Facts ne sont pas modifiés.

Sources : Mifflin MD et al., *Am J Clin Nutr* 1990;51:241–247, https://pubmed.ncbi.nlm.nih.gov/2305711/ ; Texas HHS, *Common Comparative Standards* (rév. 2022), facteurs d'activité https://www.hhs.texas.gov/sites/default/files/documents/common-comparative-standards-for-rds-ltc-settings.pdf .

Installation : remplacer les fichiers du dépôt GitHub Pages par ceux de cette archive et ajouter `macro-calculator.js`. Sauvegarder vos données au préalable. Vérifier sur smartphone après publication.


## v6.1 — Exports simplifiés

Sur l'**Accueil**, au-dessous des indicateurs et du journal du jour, le bilan CSV est visible une seule fois. La sauvegarde/restauration JSON est conservée sous une section repliée « Sauvegarde complète et restauration (JSON) ». Les identifiants des boutons et les clés de stockage existants sont conservés. Aucune migration nécessaire.
