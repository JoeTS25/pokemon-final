import React from "react";
import { Link } from "react-router-dom";
import "./pokeList.css";

function PokeList({ pokemon }) {
    
    return (
        <div className="container">
            {pokemon.map(p => (
                    <div className="poke-div" key={p.name}>
                        <Link to={`/pokemon/${p.name.toLowerCase()}`}>{p.name}</Link>
                        <img src={p.sprites.front_default} alt=""/>
                    </div>
                    
            ))}
            
        </div>
    )
    
}

export default PokeList;