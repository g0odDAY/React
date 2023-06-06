import {createSlice} from "@reduxjs/toolkit";
import {fetchFilterItems} from "./exchange-action";

const initialState = {
    items : [],
    filterOptions:{
        server:'',
        category:'',
        quality:'',
    }
}
const exchangeSlice = createSlice({
    name:'exchange',
    initialState,
    reducers:{
        fetchItem:(state,action)=>{
            const itemsArray = Object.entries(action.payload).map(([key, value]) => ({
                itemId: key,
                ...value,
            }));
            state.items = itemsArray;
        },
        filterItem:(state,action)=>{
            const {name,value} = action.payload;
            state.filterOptions[name] = value;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchFilterItems.fulfilled,(state,action)=>{
            const itemsArray = Object.entries(action.payload).map(([key, value]) => ({
                itemId: key,
                ...value,
            }));
            state.items = itemsArray;
        })
    }
})

export const exchangeActions = exchangeSlice.actions;


export default exchangeSlice.reducer;