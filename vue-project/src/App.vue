<script setup>
import Greet from './components/greet.vue'
import BooksManager from './components/BooksManager.vue'
</script>

<template>
  <main>
    <Greet name="Djano" greeting="Hallo" />
    <Greet name="Clark" greeting="Hey" />
    <Greet name="Mary" greeting="Hoi" />
    <BooksManager />
  </main>
</template>

<style>
main {
  max-width: 700px;
  margin: 2rem auto;
  padding: 0 1rem;
  font-family: Arial, sans-serif;
}
</style>
