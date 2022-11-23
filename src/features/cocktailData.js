import { createSlice } from "@reduxjs/toolkit";

export const cocktailDataSlice = createSlice({
    name: "cocktailData",
    initialState: { 
        data: [],
        favoriteData: []
    },
    reducers: {
        setCocktailData: (state, action) => {
            state.data = action.payload;
        },
        setFavoriteCocktailData: (state, action) => {
            state.favoriteData = action.payload;
        },
    }
})

export const { setCocktailData, setFavoriteCocktailData } = cocktailDataSlice.actions;

export default cocktailDataSlice.reducer;