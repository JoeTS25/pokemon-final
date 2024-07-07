import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function PokeDetail() {
    const {name} = useParams();
    const [pokemonData, setPokemonData] = useState([]);
    const currentPoke =`https://pokeapi.co/api/v2/pokemon/${name}`;
    const [isLoading, setIsLoading] = useState(true);

    async function getPoke() {
        setIsLoading(true);
        const res = await axios.get(currentPoke);
        setPokemonData(poke => {
            poke = [...poke, res.data]
            return poke
        });
        setIsLoading(false);
    }

    useEffect(() => {
        getPoke();
    }, [currentPoke])
    
    if (isLoading) return ("Page Loading...")
    
    const pokeData = pokemonData[0];
    

    return (
        <div className="pokemon-container">
            <h1>{pokeData.name}</h1>
            
            

            <Link to="/">Go Back</Link>
        </div>
    )
}

export default PokeDetail;