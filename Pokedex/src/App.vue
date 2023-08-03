<script setup>
import { ref, onMounted } from 'vue';
import { fetchPokemonData } from './components/api';

const pokemones = ref(null);

onMounted(async () => {
  pokemones.value = await fetchPokemonData();
  console.log(pokemones.value.results, "mounted")
});

</script>


<template>


<section class="py-10 bg-gray-100">
  <div class="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
      
        <div class="relative flex items-end overflow-hidden rounded-xl">
          <img src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Hotel Photo" />
        </div>

        <div class="mt-1 p-2">
          <h2 class="text-slate-700">Adobe Photoshop CC 2022</h2>
        </div>
          </div>
        </div>
    </article>
   
</section>

    <!-- <ul>
      <li v-for="pokemon in pokemones" :key="pokemon.id">

        {{pokemon.name}}
        {{pokemon.id}}
        {{pokemon.type}}
        <img :src="pokemon.img" alt="pokemon image">  
       </li>
 </ul>  -->
</template>
