import { createApi, retry, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logOut } from "../slice/authslice";


const baseQuery = async (args: any, api: any, extraOptions: any) => {
    const { dispatch } = api;
    const rawBaseQuery = fetchBaseQuery({
        baseUrl: import.meta.env.VITE_AUTH_URL,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token");
            if (token) {
                headers.set("Authorization", `Bearer ${token}`)
            }
            return headers
        }
    })

    const response = await rawBaseQuery(args, api, extraOptions);

    if (response.error) {
        const { status } = response.error;
        if (status === 401 || status === 403) {
            dispatch(logOut())
        }
    }


    return response

}



const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 });

export const apiv1 = createApi({
    reducerPath: "apiv1",
    baseQuery: baseQueryWithRetry,
    tagTypes: ["USERS"],
    endpoints: () => ({}),
})