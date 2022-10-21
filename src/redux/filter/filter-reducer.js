// import { SET_FILTER } from "./filter-type";
import { createReducer } from "@reduxjs/toolkit";
import { setFilter } from "./filter-actions";


const filterReducer = createReducer('', {
    [setFilter.type]:  (_, { payload }) => payload
});

// const initialState = '';

// const filterReducer = (store = initialState, {type, payload}) => {
//     switch (type) {
//         case SET_FILTER:
//             return  payload
//         default:
//             return store
//     }
// }

export default filterReducer