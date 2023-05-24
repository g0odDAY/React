import {useQuery} from "react-query";

const getCharacters = async (id)=>{
    const response = await fetch(`https://developer-lostark.game.onstove.com/armories/characters/${id}`,{
        headers:{
            accept:'application/json',
            authorization :`bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAxNzUwMzYifQ.QLDqQWrSXV2PN_oJnZ799LlVcsJ1jAjGwRLOSxIeWGyqUH2hCYCjONlsygYgDUCz7UsnVffNHFmA6gT9JX1EO-o_sdjLC6xsn3UZrLn-wmGYKpsfFzplRPZoo2HHYmblZDfrOIUKYZDCg7OMS8pJ1uRAA-5j3n9FQSM1n3vl2pFBxkXFKQbQERtiljwYFEFpaZeBsMgi2LjzTG1aKXW-5qDheiiaADrOKni95PTIy0vs4pP8QKeI-LMq1nqGb0OgnTTDg8mJIXePv4YJiDXGgDMefRFgB7Dei-1Hgn7I-mLmspsX5OZjiIs84yjZMLhXKiJK78fQux9bcOZL-hQwMQ`
        }
    }).then(res=>{
        if(!res.ok){
            throw new Error ('Network response was not OK');
        }
        return res.json();
    }).then(res=>{
        return res;
    }).catch(error=>{
        throw new Error ('Network response was not OK'+error.message);
    })
    return response;
}
const useCharacters = (id)=>{


    const {data:characters,isLoading} = useQuery(['characters',id],()=>getCharacters(id),{
        onError:(error)=>alert(error.message),
        refetchOnWindowFocus:false,
    });

    return {
        characters,
        isLoading
    }

}
export default useCharacters;