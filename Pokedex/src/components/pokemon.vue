
<script>
export default {
  props: {
    pokemones: {
      type: Array,
    },
  },
  data() {
    return {
      isLoading: true,
    };
  },
  created() {
    this.isLoading = false;
  },
}

</script>

<!-- TODO: acomodar tamaño de imagen  -->
<template>
<div v-if="isLoading">
    <h1>LOS POKEMONES ESTAN CARGANDO...</h1>
</div>
<div v-else class="d-flex flex-wrap ml-5">
  <section v-for="pokemon in pokemones.results" :key="pokemon.id" class="card m-2" style="width: 18rem;">
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