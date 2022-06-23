import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const topEventApi = createApi({
    reducerPath: "topEvent",
    baseQuery: fetchBaseQuery({
        baseUrl: `https://api.seatgeek.com/2/`
    }),
    endpoints: (builder) => ({
        getTopEvent: builder.query({
            transformResponse: (response) => response.events,
            query: () => ({
                url: `events?per_page=19&page=5&client_id=Mjc1MjkwOTh8MTY1NTcyMzg4OC4zODczMzM`
            })
        })
    })
})

export const { useGetTopEventQuery } = topEventApi;