import React from "react";
import { useParams } from "react-router-dom";
import PokeDetail from "./PokeDetail";

function PokeFilter({ pokemon }) {
    const { name } = useParams();

    if (name) {
        const currentPoke = pokemon.find(
            poke => poke.name.toLowerCase() === name.toLowerCase()
        );
        return <PokeDetail poke={currentPoke} />
    }

    return null;
}

export default PokeFilter;