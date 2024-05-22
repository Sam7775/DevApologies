import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    preset: 'node-server',
    serverHandlers: [
      {
        route: '/api/apologies/703',
        handler: '~/server/api/apologies.js'
      },
      {
        route: '/api/apologies',
        handler: '~/server/api/apologies.js'
      }
    ]
  },
  server: {
    port: 3000
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false
  }
});
