import { useState, useEffect } from "react";
import PokeCard from "@components/PokeCard.jsx";

const Poke = () => {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur")
            .then((response) => response.json())
            .then((data) => setPokemon(data));
    }, []);

    return (
        <div>
            <h2>Pokemon</h2>
            {pokemon ? <PokeCard pokemon={pokemon} /> : <p>Cargando...</p>}
        </div>
    )
}

export default Poke;