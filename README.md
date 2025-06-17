# Keur Yaay Soda

Keur Yaay Soda est une application de gestion de restaurant développée avec des technologies modernes. Elle permet de gérer efficacement les opérations quotidiennes d'un restaurant, avec une interface utilisateur réactive et un panneau d'administration robuste.

<p align="center">
  <img src="public/images/log.png" width="200" alt="Keur Yaay Soda Logo"/>
</p>

## Tech Stack

**Client:**
[![My Skills](https://skillicons.dev/icons?i=react,laravel,tailwind&&theme=light)](https://skillicons.dev)
<a href="https://inertiajs.com/" target="_blank"><img src="https://avatars.githubusercontent.com/u/47703742?s=200&v=4" width="50" height="50" alt="Inertia.js Logo"/></a>

**Admin Panel:**
<a href="https://filamentphp.com/" target="_blank"><img src="https://laravel.sillo.org/wp-content/uploads/2021/03/Capture-35.png" width="400" alt="Filament Logo"/></a>

## Installation

1. Cloner le projet avec :
```bash
git clone https://github.com/h4r0n1/keur-yaay-soda.git
```

2. Après avoir ouvert le projet créer un fichier .env et y copier tout ce qui se trouve dans le fichier .env.exemple.
```bash
cp .env.exemple .env
```

3. Installer les dépendances avec composer en exécutant sur votre cmd ou terminal :
```bash
composer install
```

4. Installer les dépendances npm :
```bash
npm install
```

5. Compiler les assets :
```bash
npm run build
```

6. Générer les clés :
```bash
php artisan key:generate
```

7. Migration et seed de la base de données :
```bash
php artisan migrate:fresh --seed
```

8. Lancer le projet avec :
```bash
php artisan serve
```

## Configuration de Filament Shield

1. Générer les permissions :
```bash
php artisan shield:generate --all
```

2. Créer un super administrateur :
```bash
php artisan shield:super-admin
```

## Fonctionnalités principales

- Gestion des commandes
- Gestion du menu et des catégories
- Gestion des tables
- Système de réservation
- Gestion des utilisateurs et des rôles
- Tableau de bord analytique
- Interface administrative complète avec Filament

## Prérequis

- PHP >= 8.2
- Composer
- Node.js & NPM
- MySQL ou PostgreSQL
- Laravel 12
- React.js
- Inertia.js
