# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```


# DevApologies ForEach Academy




## Techs Utilisées 

 Nuxt, TailwindCSS

  Dbeaver (MAMP) 

## Installation


    Utiliser npm install dans le terminal pour installer les dépendences 


    
## Documentation et installation des Frameworks

[Documentation Nuxt] https://nuxt.com/docs/getting-started/installation

[Documentation Tailwind] https://tailwindcss.com/docs/installation




## BDD

Utiliser le code (copier/coller) qui se trouve dans le fichier db.sql dans Dbeaver Par exemple pour creer votre base de données Apologies 


CREATE DATABASE DevApologies;

USE DevApologies;

CREATE TABLE `Apologies` (
    http_code SMALLINT AUTO_INCREMENT UNIQUE, 
    tag VARCHAR(55), 
    message_apology VARCHAR(255), 
    PRIMARY KEY (http_code) 
);

ALTER TABLE `Apologies` AUTO_INCREMENT = 700;


INSERT INTO `Apologies` (`tag`, `message_apology`) VALUES
( 'default apology','Probléme de bus USB'),


INSERT INTO `Apologies` ( http_code, tag, message_apology)
VALUES
(701,"Inexcusable","Meh"),
................

Je n'ai pas réussi a GET les données a partir du code http.
a cause de cette erreur ma page Global de Erreur404 ne fonctionne pas 
Mais pour la faire il suffit de la placer a la racine du projet avec app.vue 




<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div>
    <h2>{{ error.statusCode }}</h2>
    <button @click="handleError">Clear errors</button>
  </div>
</template>