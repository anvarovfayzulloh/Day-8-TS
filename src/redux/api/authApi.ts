import { apiv1 } from "./authRtk";

const authApi = apiv1.injectEndpoints({
  endpoints: (build) => ({
    signUp: build.mutation({
      query: (body) => ({
        url: "/users",
        method: "POST",
        body: body
      }),
    }),
    logIn: build.mutation({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body: body
      })
    }),
    getProfile: build.query({
      query: (body) => ({
        url: "/auth/profile",
        body
      }),
    }),
  }),
});

export const { useSignUpMutation, useLogInMutation, useGetProfileQuery} = authApi;