# NutriSuivi v5 — export CSV Excel

Version construite sur la v4. Les fichiers de stockage (`nutrisuivi-v1`, `nutrisuivi-extras-v2`) et le bouton de sauvegarde JSON restent inchangés.

## Publication GitHub Pages

Exporter une sauvegarde JSON **avant** la mise à jour. Remplacer `index.html`, `sw.js`, `README.md` et ajouter `csv-export.js` à la racine du dépôt. Conserver `food-sources.js`, `manifest.webmanifest`, `icon.svg`. Ne pas supprimer les données du navigateur. Le nouveau service worker utilise un cache v5.

## Export CSV

Dans la section **Sauvegardes** en bas de l’application, choisir 30 jours, 90 jours ou tout l’historique, puis **Exporter mon suivi CSV**. Le fichier est généré localement sans réseau. Encodage UTF-8 BOM ; séparateur point-virgule ; décimales avec virgule ; dates ISO AAAA-MM-JJ. Colonnes : date, poids en kg, énergie en kcal, protéines, glucides, lipides en g, nombre de catégories de repas renseignées.

Une ligne par date ayant au moins une pesée ou un aliment enregistré. Si aucun aliment n’est déclaré pour une date, les apports sont laissés vides (pas à zéro). Les journées avec des repas renseignés peuvent être incomplètes : le nombre de catégories renseignées aide à le voir, mais ne garantit pas leur exhaustivité. Les pesées ne sont **pas** reportées sur les jours sans pesée. Le CSV est un tableau d’analyse, **pas une sauvegarde restaurable** : pour restaurer l’application, utiliser le JSON.

## Contrôle rapide

Après publication : enregistrer une pesée et un repas, exporter 30 jours, ouvrir le fichier dans Excel et vérifier les totaux. Contrôler aussi que les favoris, les recherches Open Food Facts et l’export/import JSON fonctionnent toujours.
