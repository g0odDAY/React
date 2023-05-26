import {useQuery} from "react-query";

const getUrl = async (code)=>{
    console.log('code',code);
    if(code === ''){
        throw new Error('code is empty')
    }
    try{
        const response = await fetch(`https://developer-lostark.game.onstove.com/markets/items`,{
            method:'POST',
            headers:{
                accept:'application/json',
                'Content-Type':'application/json',
                authorization :'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAxNzUwMzYifQ.QLDqQWrSXV2PN_oJnZ799LlVcsJ1jAjGwRLOSxIeWGyqUH2hCYCjONlsygYgDUCz7UsnVffNHFmA6gT9JX1EO-o_sdjLC6xsn3UZrLn-wmGYKpsfFzplRPZoo2HHYmblZDfrOIUKYZDCg7OMS8pJ1uRAA-5j3n9FQSM1n3vl2pFBxkXFKQbQERtiljwYFEFpaZeBsMgi2LjzTG1aKXW-5qDheiiaADrOKni95PTIy0vs4pP8QKeI-LMq1nqGb0OgnTTDg8mJIXePv4YJiDXGgDMefRFgB7Dei-1Hgn7I-mLmspsX5OZjiIs84yjZMLhXKiJK78fQux9bcOZL-hQwMQ'
            },
            body:JSON.stringify({
                Sort:"GRADE",
                CategoryCode:code,
                PageNo: 0,
                SortCondition:"ASC"
            })
        });
        return response.json();
    }catch(error){

    }
}
const useMarket = (code)=>{
    const {data,isLoading} = useQuery(['market',code],()=>getUrl(code),{
        onError:(error)=>alert('에러발생!'+error.message),
        enabled:code !== '',
        refetchOnWindowFocus:false,
    })
    return {
        data,
        isLoading,
    }
}
export default useMarket;