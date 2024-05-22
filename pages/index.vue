<script setup>
import { ref } from 'vue';
import GeneratePhraseButton from '~/components/GeneratePhraseButton.vue';
import AddExcuseModal from '~/components/AddExcuseModal.vue';
import { useStore } from '~/store';

const phrase = ref('Cliquez sur le bouton pour générer une excuse.');
const showModal = ref(false);
const store = useStore();

function setPhrase(newPhrase) {
  phrase.value = newPhrase;
}

function addExcuse(newExcuse) {
  store.addPhrase(newExcuse);
  setPhrase(newExcuse);
}
</script>

<template>
  <Header />
  <div class="flex flex-col justify-center items-center h-screen">
    <h1 class="text-3xl pb-10">Les excuses de dev</h1>
    <p class="text-xl pb-10">{{ phrase }}</p>
    <GeneratePhraseButton  @new-phrase="setPhrase" />
    <button class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " @click="showModal = true">
      Ajouter une excuse
    </button>
    <AddExcuseModal v-if="showModal" @close="showModal = false" @new-excuse="addExcuse" />
  </div>
  <Footer />
</template>
