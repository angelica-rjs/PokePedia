import { ref } from 'vue';

export async function fetchPokemonData(search) {
  let url;
  let pokemones;
  console.log("este es el valor de busqueda:", search);
  if(search){
    url= `https://pokeapi.co/api/v2/pokemon/${search}`
    pokemones= await getPokemon(url)
  }else{
    url= 'https://pokeapi.co/api/v2/pokemon/'
    pokemones= await listPokemons(url)
  }
  return pokemones
}

async function listPokemons(url){
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


async function getPokemon(url){
  let pokemones ={
    results:[
  
    ]
  }
  let pokemon ={}
  try {
    const subResponse = await fetch(url);
    const subData = await subResponse.json();
    pokemon.name = subData.forms[0].name;
    pokemon.id = subData.id;
    pokemon.img = subData.sprites.other.dream_world.front_default;
    pokemon.type = subData.types[0].type.name;
    pokemones.results.push(pokemon)
    return pokemones; 
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}