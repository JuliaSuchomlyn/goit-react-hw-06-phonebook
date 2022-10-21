import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/contacts-slice";
import filterReducer from "./filter/filter-slice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

const contactsPersistConfig = {
    key: 'root',
    storage,
}

const reducer = combineReducers({ contacts: contactsReducer,
        filter: filterReducer,})

const contactsPersistReducer = persistReducer(contactsPersistConfig, reducer)

export const store = configureStore({
    reducer: contactsPersistReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
}
);


export const persistor = persistStore(store);
