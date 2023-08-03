<template>

<div> 
  <form>
    <input v-model="valueInput" placeholder="BUSCA UN POKEMON"/>
    <button v-on:click="showAlert">buscar</button>
  </form>
</div>
</template>