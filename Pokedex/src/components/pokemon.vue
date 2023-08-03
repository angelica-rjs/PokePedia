
<script>
import { ref } from 'vue';
import { fetchPokemonData } from './api';

const pokemones = ref(null);

export default {
  data() {
    return {
      pokemones: [],
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
<div v-if="isLoading">
    <h1>LOS POKEMONES ESTAN CARGANDO...</h1>
</div>
<ul v-else>
    <li v-for="pokemon in pokemones.results" :key="pokemon.id" class="list">
         <div class="card" style="width: 18rem;" >
          <div class="d-flex justify-content-md-center">
    <h5 class="card-title fs-2">{{ pokemon.name }}</h5>
    <h5 class="card-title fs-2">#{{pokemon.id }}</h5>
</div>

            <img :src="pokemon.img" class="card-img-top" :alt="pokemon.name">
            <div class="card-body">
                
               
                <p class="card-text">{{ pokemon.type }}</p>
                </div>
                <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
            
        </div>
    </li>
</ul>



</template>

<style>
.list {
  list-style: none;
  padding: 0;
}
.card{
    border-color: #080688;
    border-width: 5px;
}
.card-img-top{
    margin: auto;
    width: 200px;
    margin-top: 20px;
}
.card-title{
    margin-top: 5px;
    margin-right:14px;
    margin-left: 15px;
}

</style>