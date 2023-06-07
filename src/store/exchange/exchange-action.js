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

        let queryString = '';

        if (server !== '') {
            queryString += `orderBy="server"&equalTo="${server}"&`;
        }

        if (category !== '') {
            queryString += `orderBy="category"&equalTo="${category}"&`;
        }

        if (quality !== '') {
            queryString += `orderBy="quality"&equalTo="${quality}"&`;
        }

        queryString = queryString.slice(0, -1);
        console.log(queryString);
        const url = `https://curious-furnace-340706-default-rtdb.firebaseio.com/items.json?${queryString}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
)
export const fetchFavorite = (userId,itemId) =>{
    return async (dispatch)=>{
        const fetchData =async ()=>{
            const response =await fetch(`https://curious-furnace-340706-default-rtdb.firebaseio.com/items/${itemId}.json`);
            const data =await response.json();
            return data;
        }
        try{
            const data = await fetchData();
            console.log(data);
            const response = await fetch(`https://curious-furnace-340706-default-rtdb.firebaseio.com/favorite.json`,{
                method:'POST',
                headers:{
                    'Content-Type':'application.json'
                },
                body:JSON.stringify({[userId]: {[itemId]:data}})
            })
            console.log('patch success!!',response.data);
        }catch(error){
            alert(error);
        }
    }

}