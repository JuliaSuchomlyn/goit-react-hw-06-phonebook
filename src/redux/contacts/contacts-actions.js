import { nanoid } from "nanoid";
import { createAction } from "@reduxjs/toolkit";
// import { ADD_CONTACT, REMOVE_CONTACT } from "./contacts-type";

export const addContact = createAction('contact/add', (data) => {
    console.log(data)
    return {
        payload: {
            id: nanoid(),
            ...data
        }
    }
})

export const removeContact = createAction('contact/remove')

// export const addContact = payload => {
//     console.log(payload)
//     // const {name, number} = payload
//     return {
//         type: ADD_CONTACT,
//         payload: {            
                        
//                 id: nanoid(),
//                 ...payload,
            
//         }
//     }
// }

// export const removeContact = payload => {
//     return {
//         type: REMOVE_CONTACT,
//         payload,
//     }
// }
