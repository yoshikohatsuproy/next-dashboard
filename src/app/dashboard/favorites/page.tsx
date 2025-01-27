import { PokemonFavorites } from "@/pokemons/components/PokemonFavorites"; 
import { Metadata } from "next"



export const metadata: Metadata = {
  title: 'Pokemon Favoritos', description: 'Pokemon description'
}

 

export default async function PokemonPage() {
 

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Listado de Pokémons Favoritos <small className="text-blue-500">Global State</small></span>

      <PokemonFavorites />
    </div>
  );
}