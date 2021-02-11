import { fetchBaseQuery } from "@rtk-incubator/rtk-query";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://jsonplaceholder.typicode.com/"
});

export default baseQuery;
