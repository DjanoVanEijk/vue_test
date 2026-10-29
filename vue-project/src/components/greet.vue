<template>
  <h2>{{ greeting }} {{name}} welkom bij de boeken manager</h2>
</template>

<script>
export default {
  name: 'Greet',
  props: ['name', 'greeting']
}

</script>
