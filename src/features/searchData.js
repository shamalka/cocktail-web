import { createSlice } from "@reduxjs/toolkit";

export const searchDataSlice = createSlice({
    name: "searchData",
    initialState: { 
        searchText: '',
    },
    reducers: {
        setSearchData: (state, action) => {
            state.searchText = action.payload;
        },
    }
})

export const { setSearchData } = searchDataSlice.actions;

export default searchDataSlice.reducer;