<script setup>
import { computed } from 'vue'

const props = defineProps({
  books: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['delete'])

const readBooks = computed(() => props.books.filter((book) => book.read))
const unreadBooks = computed(() => props.books.filter((book) => !book.read))

function toggleRead(book) {
  book.read = !book.read
}
</script>

<template>
  <section>
    <p>Gelezen boeken: {{ readBooks.length }}</p>
    <p>Niet gelezen boeken: {{ unreadBooks.length }}</p>

    <ul>
      <li v-for="book in props.books" :key="book.id">
        <h2 :class="{ read: book.read }">{{ book.title }}</h2>
        <p>Auteur: {{ book.author }}</p>
        <button type="button" @click="toggleRead(book)">
          {{ book.read ? 'Markeer als ongelezen' : 'Markeer als gelezen' }}
        </button>
        <button type="button" @click="emit('delete', book.id)">
          Verwijder
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
