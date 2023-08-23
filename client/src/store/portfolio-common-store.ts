import { createSlice } from "@reduxjs/toolkit";

interface PortfolioCommonStoreState{
    scrollEnabled:boolean;
}

const initialState:PortfolioCommonStoreState={
    scrollEnabled:true
}
const portfloioCommonStoreSlice=createSlice({
    name:"portfolioCommonStore",
    initialState,
    reducers:{
        unSetScrollEnabled(state:PortfolioCommonStoreState){
            state.scrollEnabled=false;
        },
        setScrollEnabled(state:PortfolioCommonStoreState){
            state.scrollEnabled=true;
        }
    }
});

export const portfolioActions=portfloioCommonStoreSlice.actions;
export const portfloioCommonStoreSliceRducer=portfloioCommonStoreSlice.reducer;