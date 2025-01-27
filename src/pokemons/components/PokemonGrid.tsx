 
import { SimplePokemon } from "../interfaces/simple-pokemon";
import { PokemonCard } from "./PokemonCard";

interface Props {
    pokemones: SimplePokemon[]
}

export const PokemonGrid = ({ pokemones }: Props) => {
    return (
        <div className="flex flex-wrap gap-10 items-center justify-center">
            {
                pokemones.map(p => (
                    <PokemonCard key={ p.id } pokemon={p} />
                ))
            }
        </div>
    )
}
