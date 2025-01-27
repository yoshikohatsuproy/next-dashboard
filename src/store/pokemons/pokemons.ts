import { SimplePokemon } from '@/pokemons/interfaces/simple-pokemon';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PokemonState {
  favorites : { [key: string] : SimplePokemon }
}
 

const initialState : PokemonState =  { 
    favorites : {}
 }

const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {   
    setFavoritePokemons (state, action : PayloadAction<{[key : string ] : SimplePokemon}>) {
      state.favorites = action.payload;
    },
    
    toggleFavorite (state, action : PayloadAction<SimplePokemon>) {
        const pokemon = action.payload;
        const { id }  = pokemon;

        if (!!state.favorites[id]) {
            delete state.favorites[id];
            return;
        } else {
          state.favorites[id] = pokemon;
        }

        

        localStorage.setItem('favorite pokemons', JSON.stringify(state.favorites) );
        return;
    }
  }
});

export const { toggleFavorite, setFavoritePokemons } = pokemonSlice.actions

export default pokemonSlice.reducer