# Time Tracker 7pace Automation

Script Node.js/TypeScript permettant d'inspecter l'historique Git local d'un dépôt et de créer automatiquement des worklogs dans 7pace (Azure DevOps) pour les jours ouvrés manquants.

## Sommaire

- [Fonctionnalités](#fonctionnalités)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Configuration](#configuration)
- [Exécution](#exécution)
- [Mise à jour du client API](#mise-à-jour-du-client-api)
- [Sécurité & bonnes pratiques](#sécurité--bonnes-pratiques)
- [Structure du projet](#structure-du-projet)
- [Limitations / TODO](#limitations--todo)

## Fonctionnalités

- Détection des jours ouvrés sans worklog dans une fenêtre (par défaut 300 derniers jours)
- Vérification de commits Git sur le dépôt configuré (`repoPath`)
- Si commits : création d'un worklog standard (8h)
- Si pas de commit : demande interactive (congé ou journée travaillée)
- Création d'un worklog "time off" si congé
- Listing des `activityTypes` disponibles au démarrage

## Prérequis

- Node.js >= 18
- Yarn (v4 recommandé, déjà configuré via `packageManager`)
- Accès à l'API 7pace + un token personnel (PAT) valide
- Git installé et configuré (email utilisateur défini dans le repo ciblé)

## Installation

Cloner le dépôt puis installer les dépendances :

```bash
yarn install
```

Compiler le projet :

```bash
yarn build
```

## Configuration

Créer un fichier `config.json` à la racine en partant de l'exemple :

```bash
cp config.example.json config.json
```

Éditer `config.json` :

```json
{
  "baseUrl": "https://cegid.timehub.7pace.com/",
  "accessToken": "VOTRE_TOKEN_7PACE",
  "repoPath": "c:/dev/career"
}
```

Champs :

- `baseUrl` : URL de base de votre instance 7pace
- `accessToken` : token d'accès (PAT) 7pace / Azure DevOps (ne pas committer)
- `repoPath` : chemin local du dépôt Git à inspecter

Vérifiez que `config.json` est ignoré (présent dans `.gitignore`).

## Exécution

Après compilation :

```bash
yarn start
```

Ou en mode développement (recompilation automatique) :

```bash
yarn watch
```

Le script :

1. Charge la config
2. Affiche les activity types disponibles
3. Recherche les jours ouvrés sans worklog
4. Pour chaque jour manquant :
   - Vérifie les commits Git de l'utilisateur (email Git configuré)
   - Crée un worklog automatique ou interagit avec vous pour confirmer congé

## Interaction

Si aucun commit n'est trouvé un jour ouvré, une question est posée :

```
Étiez-vous en congé le YYYY-MM-DD ? (o/N) :
```

Répondre `o` (ou `O`) crée un worklog "time off", sinon un worklog standard.

## Mise à jour du client API

Le dossier `src/generated-api` est issu d'une génération OpenAPI.
Pour régénérer (si vous mettez à jour le fichier `api-reference-v3.2.json`) :

```bash
# Exemple avec openapi-typescript-codegen
npx openapi-typescript-codegen --input api-reference-v3.2.json --output src/generated-api --useUnionTypes true
```

Vérifiez ensuite que l'appel `configureOpenApi` utilise toujours les bons paramètres.

## Scripts disponibles

- `yarn build` : compilation TypeScript -> `dist/`
- `yarn watch` : compilation incrémentale en mode veille
- `yarn start` : exécution de `dist/timetracker.js`

## Structure du projet

```
src/
  timetracker.ts          # Script principal
  generated-api/          # Client API généré à partir d'OpenAPI
config.example.json       # Exemple de configuration (sans secrets)
config.json               # Configuration réelle (ignorée par Git)
```

## Sécurité & bonnes pratiques

- Ne jamais committer `config.json`
- Régénérer le token périodiquement
- Limiter les permissions du token aux scopes nécessaires
- Vérifier les logs de sortie avant d'automatiser totalement
- Ajouter éventuellement une variable pour la durée travaillée / horaires

## Limitations / TODO

- Paramétrer dynamiquement la durée (actuellement 8h fixe)
- Gérer les jours fériés automatiquement
- Support multi-repositories
- Ajout de tests unitaires
- Journalisation plus structurée (JSON / niveaux)

---

Contribution bienvenue. Ouvrez une issue ou une PR pour proposer des améliorations.
