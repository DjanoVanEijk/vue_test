<script setup>
import { computed, ref } from 'vue'

const books = ref([
  { title: 'De Hobbit', author: 'J.R.R. Tolkien', read: true },
  { title: '1984', author: 'George Orwell', read: false },
  { title: 'De Da Vinci Code', author: 'Dan Brown', read: true },
])

const readBooks = computed(() => books.value.filter((book) => book.read))
const unreadBooks = computed(() => books.value.filter((book) => !book.read))

function toggleRead(book) {
  book.read = !book.read
}
</script>

<template>
  <section>
    <p>Gelezen boeken: {{ readBooks.length }}</p>
    <p>Niet gelezen boeken: {{ unreadBooks.length }}</p>

    <ul>
      <li v-for="book in books" :key="book.title">
        <h2 :class="{ read: book.read }">{{ book.title }}</h2>
        <p>Auteur: {{ book.author }}</p>
        <button type="button" @click="toggleRead(book)">
          {{ book.read ? 'Markeer als ongelezen' : 'Markeer als gelezen' }}
        </button>
      </li>
    </ul>
  </section>
</template>

<style scoped>
ul {
  padding: 0;
  list-style: none;
}

li {
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
}

h2.read {
  color: green;
}

button {
  padding: 0.4rem 0.7rem;
  cursor: pointer;
}
</style>
