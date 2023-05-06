import {useEffect, useState} from "react";
import classes from './Raid.module.css'

const Raid = ()=>{

    const [raid,setRaid] = useState([]);
    useEffect(()=>{
        fetch('https://developer-lostark.game.onstove.com/gamecontents/challenge-guardian-raids',{
            headers:{
                accept:'application/json',
                authorization : 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAxNzUwMzYifQ.QLDqQWrSXV2PN_oJnZ799LlVcsJ1jAjGwRLOSxIeWGyqUH2hCYCjONlsygYgDUCz7UsnVffNHFmA6gT9JX1EO-o_sdjLC6xsn3UZrLn-wmGYKpsfFzplRPZoo2HHYmblZDfrOIUKYZDCg7OMS8pJ1uRAA-5j3n9FQSM1n3vl2pFBxkXFKQbQERtiljwYFEFpaZeBsMgi2LjzTG1aKXW-5qDheiiaADrOKni95PTIy0vs4pP8QKeI-LMq1nqGb0OgnTTDg8mJIXePv4YJiDXGgDMefRFgB7Dei-1Hgn7I-mLmspsX5OZjiIs84yjZMLhXKiJK78fQux9bcOZL-hQwMQ'
            }
        })
            .then(res=>{
                return res.json();
            }).then(res=>{
            console.log('raid',res);
            setRaid(res.Raids);
        })
    },[])
    return <div>
        <h4>도전 어비스 레이드</h4>
        <div className={classes.content} >

            {raid.map((data,idx)=><div key={idx} className={classes.box}>
                <img src={data.Image} alt={data.Name}/>
            </div>)}
        </div>
    </div>
}
export default Raid;