<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
  setTimeout(() => {
    router.push('/');
  }, 5000); 
});
</script>

<style>
.lost-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}
</style>

<template>
    <Header />
    <div class="lost-page">
      <p class="text-3xl pb-10">I'm lost... again</p>
      <img src="../assets/images/pulpfiction.gif" alt="Lost GIF" />
    </div>
    <Footer />
  </template>
  