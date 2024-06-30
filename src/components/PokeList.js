import React from "react";

function PokeList({ pokemon }) {
    
    return (
        <div className="container">
            {pokemon.map(p => (
                    <div className="poke-div" key={p.name} onClick={`localhost3000/pokemon/${p.name}`}>
                        {p.name} <img src={p.sprites.front_default} alt=""/>
                    </div>
                    
            ))}
        </div>
    )
    
}

export default PokeList;