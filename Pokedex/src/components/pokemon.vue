
<script>
import { ref } from 'vue';
import { fetchPokemonData } from './api';

const pokemones = ref(null);

export default {
  data() {
    return {
      pokemones: {},
      isLoading: true, // Estado de carga
    };
  },
   async created() {
    pokemones.value = await fetchPokemonData();
    console.log(pokemones.value.results, "setup")
    this.pokemones = pokemones.value
    this.isLoading = false;
    // return pokemones
  }
}

</script>


<template>


<div> 
  <form>
    <input v-model="valueInput" placeholder="BUSCA UN POKEMON"/>
    <button v-on:click="showAlert">buscar</button>
  </form>
</div>
<div v-if="isLoading">
    <h1>CARGANDO..</h1>
</div>
<ul class="py-10 bg-gray-100" v-else>
  <li v-for="pokemon in pokemones.results" :key="pokemon.id" class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 
border-solid border-indigo-900 border-4" >
    <div class="mt-1 p-2">
      <h2 class="text-slate-700">{{pokemon.name}}  #{{pokemon.id}}</h2>
    </div>
       
    <div class="relative flex items-end overflow-hidden rounded-xl">
      <img :src="pokemon.img" alt="pokemon image">  
    </div>
    {{pokemon.type}}
 
  </li>
 </ul> 
</template>
