import { fetchBaseQuery } from "@rtk-incubator/rtk-query";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://pokeapi.co/api/v2/"
});

export default baseQuery;
