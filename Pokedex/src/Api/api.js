import { ref } from 'vue';

export async function fetchPokemonData(search) {
  let url;
  console.log("este es el valor de busqueda:", search);
  if(search){
    url= `https://pokeapi.co/api/v2/pokemon/${search}`
  }else{
    url= 'https://pokeapi.co/api/v2/pokemon/'
  }
  // const url = search ==! null ? `https://pokeapi.co/api/v2/pokemon/${search}` : 'https://pokeapi.co/api/v2/pokemon/';
  console.log(url, "url");
  const pokemones = ref([]);
  try {
    const response = await fetch(url);
    const data = await response.json();
    pokemones.value = data;
    await Promise.all(
      pokemones.value.results.map(async (pokemon) => {
        const subResponse = await fetch(pokemon.url);
        const subData = await subResponse.json();
        pokemon.id = subData.id;
        pokemon.img = subData.sprites.other.dream_world.front_default;
        pokemon.type = subData.types[0].type.name;
      })
    );
    console.log(pokemones.value.results, "js");
    return pokemones.value; 
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

