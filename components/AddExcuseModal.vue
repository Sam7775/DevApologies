<template>
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 class="text-xl mb-4">Ajouter une nouvelle excuse</h2>
        <textarea v-model="excuse" class="w-full p-2 border rounded mb-4" rows="4" placeholder="Saisir l'excuse"></textarea>
        <div class="flex justify-end">
          <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2" @click="$emit('close')">Annuler</button>
          <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" @click="submitExcuse">Valider</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const excuse = ref('');
  
  const emit = defineEmits(['close', 'new-excuse']);
  
  function submitExcuse() {
    if (excuse.value.trim()) {
      emit('new-excuse', excuse.value);
      emit('close');
    } else {
      alert('Veuillez saisir une excuse');
    }
  }
  </script>
  