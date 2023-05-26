import {useCallback, useState} from "react";

const useHttp = (config)=>{
    const sendRequest = useCallback(async ()=>{
        console.log('fetchRequest config',config);
        try{
            const response = await fetch(config.url,{
                method:config.method ? config.method : 'GET',
                headers:config.headers ? config.headers : {},
                body:config.body ? JSON.stringify(config.body) : null
            })
            if(!response.ok){
                throw new Error('요청에 실패 했어요.');
            }
            return response.json();
        }catch (error){
          alert('error 발생'+error);
        }
    },[]);
    return {
        sendRequest
    }
}
export default useHttp;