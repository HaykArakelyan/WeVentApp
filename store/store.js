import { configureStore, combineReducers } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { persistStore, persistReducer } from "redux-persist";

import isSkipped from "./isSkippedSlice";

import { setupListeners } from "@reduxjs/toolkit/query"
import { usersApi } from "./users";
import { eventsApi } from "./events.js";
import { topEventApi } from "./topEvent";

const rootReducer = combineReducers({
    isSkipped,
    [eventsApi.reducerPath]: eventsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [topEventApi.reducerPath]: topEventApi.reducer,
})

const persistConfig = {
    key: "persist-key",
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const Store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
        }).concat([
            eventsApi.middleware,
            usersApi.middleware,
            topEventApi.middleware,
        ])
})

setupListeners(Store.dispatch)

export const Persistor = persistStore(Store)
export default Store;
