import {useCallback, useState} from "react";

const useHttp = ()=>{
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(false);

    const sendRequest = useCallback(async (config,applyData)=>{
        setIsLoading(prevState => !prevState.isLoading);
        setError(false);
        try{
            const response = await fetch(config.url,{
                method:config.method ? config.method : 'GET',
                headers:config.headers ? config.headers : {},
                body:config.body ? JSON.stringify(config.body) : null
            })
            if(!response.ok){
                throw new Error('요청에 실패 했어요.');
            }
            const data = await response.json();
            applyData(data);
        }catch (error){
            setError(error);
        }
        setIsLoading(prevState => !prevState.isLoading);
    },[]);


    return {
        isLoading,
        error,
        sendRequest
    }
}
export default useHttp;