import { createSlice } from "@reduxjs/toolkit";

//initial state
const initialState = {
    tags: [],
    searchedTerm: ""
};

//create slice 
const filersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        tagSelected: (state, action) => {
            state.tags.push(action.payload);
        },
        tagRemoved: (state, action) => {
            const indexToRemove = state.tags.indexOf(action.payload)
            if (indexToRemove !== -1) {
                state.tags.splice(indexToRemove, 1)
            }
        },
        getSearchTerm: (state, action) => {
            state.searchedTerm = action.payload
        }
    }
})

export default filersSlice.reducer;
export const { tagSelected, tagRemoved, getSearchTerm } = filersSlice.actions;