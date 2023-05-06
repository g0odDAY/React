import {useEffect, useState} from "react";
import classes from "./Abyss.module.css";
import {BiChevronLeft, BiChevronRight} from "react-icons/bi";
const Abyss = ()=>{

    const [abyss,setAbyss]=useState([]);
    useEffect(()=>{
        fetch('https://developer-lostark.game.onstove.com/gamecontents/challenge-abyss-dungeons',{
            headers:{
                accept:'application/json',
                authorization : 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAxNzUwMzYifQ.QLDqQWrSXV2PN_oJnZ799LlVcsJ1jAjGwRLOSxIeWGyqUH2hCYCjONlsygYgDUCz7UsnVffNHFmA6gT9JX1EO-o_sdjLC6xsn3UZrLn-wmGYKpsfFzplRPZoo2HHYmblZDfrOIUKYZDCg7OMS8pJ1uRAA-5j3n9FQSM1n3vl2pFBxkXFKQbQERtiljwYFEFpaZeBsMgi2LjzTG1aKXW-5qDheiiaADrOKni95PTIy0vs4pP8QKeI-LMq1nqGb0OgnTTDg8mJIXePv4YJiDXGgDMefRFgB7Dei-1Hgn7I-mLmspsX5OZjiIs84yjZMLhXKiJK78fQux9bcOZL-hQwMQ'
            }
        })
            .then(res=>{
                return res.json();
            }).then(res=>{
                setAbyss(res);
            console.log('abyss',res);
        })
    },[]);
    const [activeIdx,setActiveIdx] = useState(0);
    const updateIdx = (newIdx)=>{
        if(newIdx < 0){
            newIdx = abyss.length-1;
        }else if(newIdx >= abyss.length){
            newIdx = 0;
        }
        setActiveIdx(newIdx);
    }
    return <div>
        <h4>도전 어비스 던전</h4>
        <div className={classes.slider}>
            <div className={classes.content}>
                <div className={classes.inner} style={{transform:`translate(-${activeIdx * 100}%)`}} >
                    <ul className={classes.lists}>{abyss.map((data,idx)=><li key={idx} className={classes.box}>
                        <img src={data.Image} alt={data.Name}/>
                    </li>)}</ul>
                </div>
                <button className={classes.leftArrow} onClick={()=>updateIdx(activeIdx-1)}>
                    <BiChevronLeft size="24" color="#FFF"/>
                </button>
                <button className={classes.rightArrow} onClick={()=>updateIdx(activeIdx+1)}>
                    <BiChevronRight size="24" color="#FFF"/>
                </button>
            </div>
        </div>
    </div>
}
export default Abyss;