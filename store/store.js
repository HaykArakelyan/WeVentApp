import { configureStore, combineReducers } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { persistStore, persistReducer } from "redux-persist";

import users from "./usersSlice";
import isSkipped from "./isSkippedSlice";

const rootReducer = combineReducers({
    isSkipped,
    users,
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
        })
})

export const Persistor = persistStore(Store)
export default Store;
