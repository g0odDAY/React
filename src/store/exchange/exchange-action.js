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
export const fetchFavorite = (userId)=>{
    return async (dispatch)=>{
        const fetchData = async ()=>{
            const response =await fetch(`https://curious-furnace-340706-default-rtdb.firebaseio.com/favorite/${userId}.json`);
            const data = await response.json();
            return data;
        }
        try{
            const favoriteData = await fetchData();
            dispatch(exchangeActions.fetchFavorite(favoriteData));
        }catch(error){

        }


    }

}
export const dfasfs = createAsyncThunk(
    'exchange/favoriteList',
    async (_,__)=>{

    }
)
export const favoriteHandler = (userId,itemId) =>{
    return async (dispatch)=>{
        const fetchData =async ()=>{
            const response =await fetch(`https://curious-furnace-340706-default-rtdb.firebaseio.com/items/${itemId}.json`);
            const data =await response.json();
            return data;
        }
        const existingFavorite =async (userId)=>{
            const response =await fetch(`https://curious-furnace-340706-default-rtdb.firebaseio.com/favorite/${userId}.json`);
            const data =await response.json();
            for(const key in data){
                if(data[key].itemId === itemId){
                    return key;
                }
            }
            return false;
        }
        const fetchFavorite = async ()=>{
            const response =await fetch(`https://curious-furnace-340706-default-rtdb.firebaseio.com/favorite/${userId}.json`);
            const data =await response.json();
            return data;
        }
        try{
            const data = await fetchData();
            const favorite = await existingFavorite(userId);
            if(favorite){
                await fetch(`https://curious-furnace-340706-default-rtdb.firebaseio.com/favorite/${userId}/${favorite}.json`, {method: "DELETE"})
                    .then(response => {
                        console.log(response,'삭제 성공!')
                    })
                    .catch(error => {
                        // ...
                    });
            }else{
                await fetch(`https://curious-furnace-340706-default-rtdb.firebaseio.com/favorite/${userId}.json`,{
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify({...data,itemId})
                })

            }

            const favoriteData = await fetchFavorite();
            console.log('favoriteData',favoriteData);
            dispatch(exchangeActions.fetchFavorite(favoriteData));
        }catch(error){
            alert(error);
        }
    }

}