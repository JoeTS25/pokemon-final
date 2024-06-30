import React, { useState, useEffect } from "react";
import PokeList from "./PokeList";
import Page from "./Page";
import axios from "axios";
import "./pokeList.css"

function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();

  const pokEffect = async () => {
    setIsLoading(true)
    const res = await axios.get(currentPage)
    setNextPage(res.data.next)
    setPrevPage(res.data.previous)
    getData(res.data.results)
    setIsLoading(false)
    }
  

  async function getData(res) {
    res.map(async(poke) => {
      const result = await axios.get(poke.url);
      setPokemon(poke => {
        poke = [...poke, result.data]
        poke.sort((a,b) => a.id > b.id ? 1 : -1)
        return poke
      })
    })
  }
  

  function goNextPage() {
    setPokemon([])
    setCurrentPage(nextPage)
  }

  function goPrevPage() {
    setPokemon([])
    setCurrentPage(prevPage)
  }

  useEffect(() => {
    pokEffect();
  }, [currentPage]);

  if (isLoading) return ("Page Loading...")

  return (
    <>
      <PokeList pokemon={pokemon} />
      <Page 
        goNextPage={nextPage ? goNextPage : null}
        goPrevPage={prevPage ? goPrevPage : null} />
    </>
  );
}

export default Home;