const PokeCard = ({ pokemon }) => {
    return (
        <div>
            <h3>{pokemon.name}</h3>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>Tipo: {pokemon.types.map((t) => t.type.name).join(", ")}</p>
            <p>Altura: {pokemon.height}</p>
            <p>Peso: {pokemon.weight}</p>
        </div>
    )
}

export default PokeCard;