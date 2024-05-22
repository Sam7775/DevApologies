<template>
    <div>
      <h1>Code HTTP: {{ http_code }}</h1>
      <p v-if="apology">{{ apology.message_apology }}</p>
      <p v-else>Message non trouvé !!!!!!!!!!</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const http_code = route.params.http_code;
  console.log(http_code);
  const apology = ref(null);
  
  onMounted(async () => {
    try {
      const response = await fetch(`/api/apologies/` + http_code);
      const data = await response.json();
      apology.value = data;
    } catch (error) {
      console.error(error);
    }
  });
  </script>
  