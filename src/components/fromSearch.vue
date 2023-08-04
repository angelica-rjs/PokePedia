<script>
export default {
 
  
  data() {
    return {
      avisar: "",
    };
  },
   props: ['avisar'],
   methods: {
      async enviarPadre() {
        console.log(this.avisar, "form")
        this.$emit('escucharHijo',this.avisar)
      }
   }
};


</script>


<template>
  <form class="d-flex flex-wrap">
    <input  type="text" class="input-group-text rounded-pill w-75 p-3 " v-bind="avisar" placeholder="BUSCA UN POKEMON"/>
    <button class="btn btn-primary"  type="button" @click="enviarPadre()">buscar</button>
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