import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const eventsApi = createApi({
    reducerPath: "events",
    baseQuery: fetchBaseQuery({
        baseUrl: `https://api.seatgeek.com/2/`,
    }),
    endpoints: (builder) => ({
        getEvents: builder.query({
            transformResponse: (response) => response.events,
            query: () => ({
                url: `events?per_page=20&client_id=Mjc1MjkwOTh8MTY1NTcyMzg4OC4zODczMzM`
            })
        })
    })
})

export const { useGetEventsQuery } = eventsApi;