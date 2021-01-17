import { createApi } from '@rtk-incubator/rtk-query';

import baseQuery from '../lib/query';

// Define a service using a base URL and expected endpoints
const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery,
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => ({ url: `pokemon/${name}` }),
    }),
    getPokemonList: builder.query({
      query: () => ({ url: `pokemon` })
    })
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = pokemonApi;

// Possible exports
export const { endpoints: { getPokemonList } } = pokemonApi;

export default pokemonApi;