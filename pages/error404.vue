<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
    <h1 class="text-9xl font-bold text-red-500 mb-4">404</h1>
    <p class="text-2xl text-gray-700 mb-8">"Alerte ! Cette page a été aspirée par un trou noir numérique."
.</p>
    <button @click="goHome" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Retourner à la page d'accueil
    </button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goHome() {
  router.push('/');
}
</script>
