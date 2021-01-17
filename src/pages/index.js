import { useState } from "react";
import { getPokemonList, useGetPokemonByNameQuery } from "../services/pokemon";
import { wrapper } from "../store.ts";

export default function Home({ pokemonList, initialPokemon }) {
  const [pokemon, setPokemon] = useState(initialPokemon);
  const { data: currentPokemon } = useGetPokemonByNameQuery(pokemon);

  return (
    <>
      <h1>Hi</h1>
      <h2>
        You caught {pokemon}! They can have one of these abilities:{" "}
        {currentPokemon?.abilities.map((ab) => ab.ability.name).join(", ")}
      </h2>
      <p>
        Catch another!
        <select
          value={pokemon}
          onChange={(e) => setPokemon(e.currentTarget.value)}
        >
          {pokemonList.results.map((pok) => (
            <option key={pok.name}>{pok.name}</option>
          ))}
        </select>
      </p>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const { data: pokemonList } = await store.dispatch(
      getPokemonList.initiate(null)
    );
    const {
      results: [{ name: initialPokemon }],
    } = pokemonList;

    console.log("State on server", store.getState());

    return { props: { pokemonList, initialPokemon } };
  }
);
