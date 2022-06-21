import { createSlice } from '@reduxjs/toolkit'

const axios = require("axios").default;


async function getEventsFromApi() {
    try {
        const { events } = await (await axios.get("https://api.seatgeek.com/2/events?client_id=Mjc1MjkwOTh8MTY1NTcyMzg4OC4zODczMzM")).data
        return events;
    } catch (error) {
        console.error(error);
        return [];
    }
}


const initialState = {
    events: getEventsFromApi()
}

const eventsSlice = createSlice({
    name: "events",
    initialState,
    reducers: {
        getEvents(state) {
            return state;
        },
    },
})

export const { getEvents } = eventsSlice.actions;
export default eventsSlice.reducer;
