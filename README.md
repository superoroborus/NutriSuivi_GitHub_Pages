# NutriSuivi V8 — archive complète GitHub Pages

## Installation sans édition de code

1. Dans la version actuellement utilisée, ouvrir Accueil → sauvegarde complète → **Exporter JSON**. Conserver ce fichier hors de GitHub (ne jamais publier les données personnelles dans le dépôt public).
2. Sur GitHub, ouvrir le dépôt `superoroborus/NutriSuivi_GitHub_Pages` → **Code** → **Add file** → **Upload files**.
3. Décompresser ce ZIP et glisser **tous les fichiers qu’il contient** à la racine du dépôt (pas le dossier lui-même). GitHub indiquera les fichiers remplacés et ajoutés.
4. Vérifier les noms, puis **Commit changes**. Aucune édition manuelle des balises `<script>` nécessaire.
5. Attendre la publication GitHub Pages puis actualiser la page sur le téléphone. Si la version reste ancienne, fermer/réouvrir le navigateur et recharger.
6. Vérifier le journal, les objectifs, le CSV et XLSX avec des données fictives avant de compter sur le nouveau dispositif.

## Nouvelles fonctions

- Onglet Calculatrice : bloc **Protéines en g/kg** indépendant, coefficient et poids de référence choisis, possibilité de reprendre la dernière pesée, mise à jour automatique **sur action explicite** selon la dernière pesée, bouton pour appliquer l'objectif au tableau de bord.
- Accueil : **Export Excel XLSX** local avec cinq feuilles : Suivi journalier, Détail aliments, Repas et plats, Suivi poids, Paramètres. Filtre 30/90 jours, période personnalisée, historique complet. Dates ISO, numériques en cellules numériques, aucun recalcul fictif des journées absentes. Les objectifs actuels ne sont pas présentés comme des objectifs historiques.
- Onglet d'ajout : **Partager la photo et la consigne vers Gemini** via la feuille de partage Android si prise en charge ; repli vers copie de la consigne et partage image uniquement. Aucun appel d'API Gemini.
- La sauvegarde JSON inclut désormais les réglages complémentaires V7/V8 et l'import est rétrocompatible avec les anciens JSON. Les journaux existants ne sont jamais réécrits lors de la mise à jour.

## Limites et précautions

- Une photo ne fournit qu'une **estimation** : les ingrédients invisibles, sauces et portions sont incertains. Gemini peut ne pas recevoir simultanément l'image et le texte malgré une Web Share API compatible. Vérifier dans Gemini avant de valider. L'analyse externe transmet la photographie à Google uniquement par action volontaire.
- L'équivalence entre une portion/pièce et des grammes, ou entre ml et g, doit être **documentée pour l'aliment**. La V8 ne prétend pas convertir une densité inconnue. Les limites du moteur de saisie historique persistent.
- Le JSON des versions anciennes ne contenait pas les objectifs V7 et réglages de la calculatrice. Une restauration depuis un ancien fichier ne peut pas restituer des réglages qui n'y figuraient pas.
- Le fichier XLSX est généré directement en JavaScript sans bibliothèque ni réseau. Le format est XLSX/OpenXML minimal sans style ni formule.
- Tests automatisés présents dans `tests-v8.js`, exécutables par `node tests-v8.js` (non nécessaire à l'installation). Test Android/Gemini réel et restauration complète navigateur **non réalisés** ici.
