import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        addContact: {
            reducer: (store, { payload }) => {
                store.push(payload)
            },
            prepare: (data) => {
                return {
                    payload: {
                        id: nanoid(),
                        ...data
                    }
                }
            }
        },
        removeContact: (store, { payload }) => {
            const result = store.filter(({ id }) =>
            id !== payload);
            return result
        }

    }
})

export const { addContact, removeContact } = contactsSlice.actions;

export default contactsSlice.reducer
