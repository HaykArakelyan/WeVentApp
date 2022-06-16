import { createSlice } from "@reduxjs/toolkit";


const axios = require("axios").default;

const getUsers = async () => {
    try {
        const data = await (await axios.get("http://10.0.2.2:3000/users/")).data
        return data
    } catch (err) {
        console.log(err);
        return [];
    }
}

const initialState = {
    users: getUsers(),
}

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        getUser(state, action) {
            state = state
        },
        addUser(state, action) {
            //send axios query
        },
        updateUser(state, action) {
            //send axios query
        },
    }
})

export const { getUser, addUser, updateUser } = usersSlice.actions;
export default usersSlice.reducer;
