<script setup>
    import { ref } from 'vue';
    const pokemones = ref(null);
    
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10')
      .then(response => response.json()) 
      .then((data)=>{
         pokemones.value = data;
          pokemones.value.results.forEach(pokemon => {
            fetch(pokemon.url)
            .then(subResponse => subResponse.json())
            .then((subData) =>{ 
              pokemon.id = subData.id;
              pokemon.img = subData.sprites.other.dream_world.front_default;
              pokemon.type = subData.types[0].type.name
             
            })

          });
      } );

</script>

<template>

  <!-- <h1>
  {{pokemones}}
 </h1>   -->
 <ul>
  <li v-for="pokemon in pokemones.results" >
    {{pokemon.name}}
    {{pokemon.id}}
    {{pokemon.type}}
    <img v-bind:src="pokemon.img"> 
  </li>
 </ul>
</template>

<style scoped>

</style>
