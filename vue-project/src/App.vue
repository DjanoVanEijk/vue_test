<script setup>
import { ref } from 'vue'
import Greet from './components/greet.vue'
import BooksManager from './components/BooksManager.vue'

const books = ref([
  { id: 1, title: 'De Hobbit', author: 'J.R.R. Tolkien', read: true },
  { id: 2, title: '1984', author: 'George Orwell', read: false },
  { id: 3, title: 'De Da Vinci Code', author: 'Dan Brown', read: true },
])

function deleteBook(id) {
  books.value = books.value.filter((book) => book.id !== id)
}
</script>

<template>
  <main>
    <Greet name="Djano" greeting="Hallo" />
    <Greet name="Clark" greeting="Hey" />
    <Greet name="Mary" greeting="Hoi" />
    <BooksManager :books="books" @delete="deleteBook" />
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
