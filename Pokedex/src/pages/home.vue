

<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
</nav>
  <div>
    <formSearch />
    <pokemonList />
  </div>
</template>

<script>
import formSearch from '../components/fromSearch.vue';
import pokemonList from '../components/pokemon.vue';

export default {
  components: {
    formSearch,
    pokemonList,
  },
 
};
</script>
