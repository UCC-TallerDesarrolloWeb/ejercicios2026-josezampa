import { useState, useEffect } from "react";
import PokeCard from "@components/PokeCard.jsx";

const Poke = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const ids = Array.from({ length: 20 }, (_, i) => i + 1);

        Promise.all(
            ids.map((id) =>
                fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => response.json())
            )
        ).then((data) => setPokemons(data));
    }, []);

    return (
        <div>
            <h2>Pokemon</h2>
            {pokemons.length === 0 && <p>Cargando...</p>}
            {pokemons.map((pokemon) => (
                <PokeCard key={pokemon.id} pokemon={pokemon} />
            ))}
        </div>
    )
}

export default Poke;