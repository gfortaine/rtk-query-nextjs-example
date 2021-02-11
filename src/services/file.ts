import { createApi } from '@rtk-incubator/rtk-query/react';

import baseQuery from '../lib/query';

// Define a service using a base URL and expected endpoints
const fileApi = createApi({
  reducerPath: 'fileApi',
  baseQuery,
  endpoints: (builder) => ({
    getFile: builder.mutation({
      query: (id) => ({
        url: `todos/${id}`,
        responseHandler: (response) => response.blob().then(blob => URL.createObjectURL(blob))
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetFileMutation } = fileApi;

// Possible exports
export const { endpoints: { getFile } } = fileApi;

export default fileApi;