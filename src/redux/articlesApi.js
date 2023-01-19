// Creating auto-generated hooks for using fetched data in components
// RTK Query was used
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const articlesApi = createApi({
  reducerPath: "articlesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spaceflightnewsapi.net/v3/articles",
  }),
  endpoints: (builder) => ({
    getArticlesByQuantity: builder.query({
      query: (limit) => `/?_limit=${limit}`,
    }),
  }),
});

export const { useGetArticlesByQuantityQuery } = articlesApi;
