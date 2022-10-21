// import { ADD_CONTACT, REMOVE_CONTACT } from "./contacts-type";
import { createReducer } from "@reduxjs/toolkit";
import { addContact, removeContact } from "./contacts-actions";

const contactsReducer = createReducer([], {
    [addContact.type]: (store, {payload}) => {
        // console.log("gggg", store)
        store.push(payload);
    },
    [removeContact.type]: (store, { payload }) => {
        // console.log("fff", store)
            const result = store.filter(({ id }) =>
            id !== payload);
            return result
        // store.filter(({ id }) => id !== payload)
    }
})
// const initialState = [] ;

// const contactsReducer = (store = initialState, {type, payload}) => {
//     switch (type) {
//         case ADD_CONTACT:
//             // const newContacts = [...store, payload]
//             console.log(store)
//             return [...store, payload]
//             // return {...store, contacts: newContacts}
//         case REMOVE_CONTACT:
//             const result = store.filter(({ id }) =>
//             id !== payload);
//             return {...store, result}
//         default:
//             return store
//     }
// }

export default contactsReducer