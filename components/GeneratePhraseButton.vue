<template>
  <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" @click="generatePhrase">
    Générer une excuse de Dev
  </button>
</template>

<script setup>
import { useStore } from '~/store';
import { defineEmits } from 'vue';

const store = useStore();
const emit = defineEmits(['new-phrase']);

function generatePhrase() {
  const newPhrase = store.getRandomPhrase();
  if (newPhrase) {
    emit('new-phrase', newPhrase);
  }
}
</script>
