import { apiv2 } from "./quotesRtk";

const authApi = apiv2.injectEndpoints({
  endpoints: (build) => ({
    getQuotes: build.mutation({
      query: (body) => ({
        url: "/quotes",
        method: "GET",
        body
      }),
    }),
  }),
});

export const { useGetQuotesMutation } = authApi;