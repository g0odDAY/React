import {exchangeActions} from "./exchange";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchItems = ()=>{
    return async dispatch=>{
        const fetchData = async ()=>{
            const response = await fetch('https://curious-furnace-340706-default-rtdb.firebaseio.com/items.json')
            if(!response.ok){
                throw new Error('could not fetch cart data!');
            }
            const data = await response.json();
            return data;
        }
        try{
            const itemsData = await fetchData();
            dispatch(exchangeActions.fetchItem(itemsData));
        }catch (error){
            alert(error);
        }

    }
}
export const fetchFilterItems = createAsyncThunk(
    'exchange/fetchFilterItems',
    async (_,{getState})=>{
        const {server,category,quality} = getState().exchange.filterOptions;
        const url = `https://curious-furnace-340706-default-rtdb.firebaseio.com/items.json?orderBy="server"&equalTo="${server}"&orderBy="category"&equalTo="${category}"&orderBy="quality"&equalTo="${quality}"`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
)