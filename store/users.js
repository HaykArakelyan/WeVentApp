import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const usersApi = createApi({
    reducerPath: "users",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://10.0.2.2:3000",
    }),
    // transformResponse: (response, meta, arg) => response.data,
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => ({
                url: `users`
            })
        })
    })
})


export const { useGetUsersQuery } = usersApi;