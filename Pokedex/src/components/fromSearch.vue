<script>
export default {
  data() {
    return {
      valueInput: "",
    };
  },
  methods: {
      showAlert() {
        console.log("el valor del input: ",this.valueInput)
      },
     
    },
};


</script>


<template>
  <form class="d-flex flex-wrap">
    <input  class="input-group-text rounded-pill w-75 p-3 " v-model="valueInput" placeholder="BUSCA UN POKEMON"/>
    <button class="btn btn-primary"  type="button" v-on:click="showAlert">buscar</button>
  </form>
</template>

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
</style>