    'use client';

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid"; 
import { IoHeartOutline } from "react-icons/io5";


export const PokemonFavorites = () => {
 
  const pokemons = useAppSelector((state) => state.pokemons.favorites);    
  const favoritePokemons = Object.values(pokemons);
  
  return (
    <> 
        {
          favoritePokemons.length === 0
            ? (<NoFavorites />)
            : (<PokemonGrid pokemones={ favoritePokemons } />)
        }    
    </>
  )
}



export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center ">
      <IoHeartOutline size={100} className="text-red-500" />
      <span>No hay favoritos</span>
    </div>
  )
}