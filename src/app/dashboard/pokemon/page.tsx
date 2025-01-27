import { PokemonGrid } from "@/pokemons/components/PokemonGrid";
import { PokemonResponse } from "@/pokemons/interfaces/pokemon-response";
import { SimplePokemon } from "@/pokemons/interfaces/simple-pokemon";
import { Metadata } from "next"



export const metadata: Metadata = {
  title: 'Pokemon title', description: 'Pokemon description'
}


const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(res => res.json());

  const pokemons = data.results.map(p => ({ id: p.url.split('/').at(-2)!, name: p.name }));

  //throw new Error('Esto es un error que no debería de suceder');
  return pokemons;
}


export default async function PokemonPage() {

  const pokemones = await getPokemons(151);

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Listado de Pokémons <small>estático</small></span>

      <PokemonGrid pokemones={pokemones} />
    </div>
  );
}