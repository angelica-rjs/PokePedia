
<template>
  <div>
    <h2>{{ name }}</h2>
    <img :src="imageUrl" :alt="name" />
    <p>Type: {{ type }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    imageUrl: String,
    type: String,
  },
}
</script>

<style>
/* Styles for the Pokemon component */
</style>
