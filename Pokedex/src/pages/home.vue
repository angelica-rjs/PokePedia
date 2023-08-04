

<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
</nav>
  <div>
    <formSearch />
    <pokemonList  :pokemones="pokemones"/>
  </div>
</template>

<script>

import { ref } from 'vue';
import { fetchPokemonData } from '../api/api';
import formSearch from '../components/fromSearch.vue';
import pokemonList from '../components/pokemon.vue';

const pokemones = ref(null);

export default {
  components: {
    formSearch,
    pokemonList,
  },
  data() {
    return {
      pokemones: [],
    };
  },
   async created() {
    pokemones.value = await fetchPokemonData();
    console.log(pokemones.value.results, "setup")
    this.pokemones = pokemones.value
    return pokemones
  }
}
</script>
