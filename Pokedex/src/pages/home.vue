<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  </nav>
  <form class="d-flex flex-wrap">
    <input  type="text" class="input-group-text rounded-pill w-75 p-3 " v-model="valueSearch" placeholder="BUSCA UN POKEMON POR NOMBRE COMPLETO O ID"/>
    <button class="btn btn-primary" @click="searchPokemon" type="button">buscar</button>
  </form>
  <div v-if="!pokemonesData.results.length" class="text-center">
    Se estan cargando los pokemones
  </div>
  <div v-else class="d-flex flex-wrap ml-5">
    <section v-for="pokemon in pokemonesData.results" :key="pokemon.id"  class="card m-2" style="width: 18rem;">
      <div class="d-flex justify-content-md-center">
        <h5 class="card-title fs-2">{{ pokemon.name }}</h5>
        <h5 class="card-title fs-2">#{{pokemon.id }}</h5>
      </div>
      <img :src="pokemon.img" class="card-img-top" :alt="pokemon.name">
      <div class="card-body">
        <p class="card-text">{{ pokemon.type }}</p>
      </div>
      <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
    </section>
  </div>
</template>


<script>
import { fetchPokemonData } from '../Api/api.js'

export default {
  name: 'home',
  data() {
    return {
      pokemonesData: { results: [] }, 
      valueSearch: ''
    }
  },
  methods: {
    async searchPokemon() {
        this.pokemonesData = await fetchPokemonData(this.valueSearch);
        console.log(this.pokemonesData.results, "searchPokemon");
    }
  },
  async created() {
    this.pokemonesData = await fetchPokemonData();
    console.log(this.pokemonesData.results, "create");
  }
}
</script>

<style>
.input-group-text{
  margin: 10px;
  margin-left: 90px;
  border-color: #080688;
  border-width: 3px;
}

.btn{
  height:40px;  
  margin-top: 17px;
}

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