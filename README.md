# NutriSuivi v4 — GitHub Pages

Cette version est issue de NutriSuivi v3 et conserve les clefs `localStorage` (`nutrisuivi-v1`, `nutrisuivi-extras-v2`), les favoris, les repas et les pesées. Exporter une sauvegarde JSON avant la mise à jour. **Ne pas vider les données du site.**

## Déployer

Remplacer à la racine du dépôt `index.html`, `sw.js`, `README.md` et **ajouter** `food-sources.js`. Conserver `manifest.webmanifest`, `icon.svg`. L'ancien `ai.js` peut être conservé mais n'est plus chargé ; aucune clé API n'est nécessaire. GitHub Pages : Settings > Pages > Deploy from branch > main > / (root). Le cache change de version automatiquement.

## Fonctions

- Recherche de noms de produits et de codes-barres via Open Food Facts. Code-barres manuel compatible partout. Détection caméra avec `BarcodeDetector` seulement dans les navigateurs compatibles ; sinon saisie manuelle.
- Contrôle des valeurs par 100 g, refus des fiches incomplètes et ajout à la vérification existante avant enregistrement.
- Import **facultatif** de données Ciqual normalisées dans un CSV UTF-8 local, colonnes `name;kcal;protein;carbs;fat`, chiffres par 100 g. Il n'y a **pas** de table Ciqual embarquée dans cette archive car l'export officiel n'a pas pu être récupéré ni validé. Les XML Ciqual officiels ne sont **pas** pris en charge directement. Ne pas désigner un CSV quelconque comme Ciqual sans provenance vérifiée.
- L'analyse automatique des photographies n'est pas disponible sans IA ; le bouton/photo existant reste dans l'interface mais signale son indisponibilité.

## Provenance, droits et limites

Open Food Facts : https://openfoodfacts.github.io/documentation/docs/Product-Opener/api/ — données collaboratives sous ODbL, attribution et conditions de partage à l'identique lorsque applicables. Limites : 15 lectures produit et 10 recherches/minute/IP. Les appels sont déclenchés par l'utilisateur, jamais lors de la saisie au fil des caractères.

Anses, **Ciqual 2025**, Du Chaffaut et al., DOI https://doi.org/10.57745/RDMHWY, Licence Ouverte Etalab 2.0. Les valeurs importées proviennent de fichiers fournis par l'utilisateur et doivent être contrôlées. Il ne faut pas prétendre que les vingt valeurs de base de l'application viennent de Ciqual.

## Confidentialité

Seule la requête de recherche ou le code-barres sont transmis à Open Food Facts ; aucune pesée ni journal n'est transmis. Les données de journal et les aliments importés restent en `localStorage` sur le navigateur courant ; exporter des sauvegardes JSON régulièrement. Pas de synchronisation multi-appareils.

## Essais à effectuer sur Android

1. Effectuer un export JSON, ajouter un aliment, actualiser et vérifier qu'il reste présent.
2. Rechercher un code-barres connu, choisir le produit, modifier la quantité et enregistrer.
3. Rechercher un produit absent ou non renseigné : pas de valeurs inventées.
4. Importer un petit CSV de test avec des valeurs vérifiées, utiliser un aliment et rafraîchir.
5. Vérifier les favoris, la copie de repas/journée, les pesées, le planning et le mode hors ligne.
6. Vérifier le bouton scanner sur le modèle de téléphone utilisé : la compatibilité varie selon le navigateur.

Les tests de l'API Open Food Facts depuis le navigateur publié et les essais réels Android restent à effectuer. 
