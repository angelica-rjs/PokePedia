import { ref } from 'vue';

export async function fetchPokemonData() {
  const pokemones = ref([]);
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
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
   //console.log(pokemones.value.results, "js");
    return pokemones.value; 
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
