import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useCallback, useEffect, useState} from "react";
import classes from "./EventList.module.css";
import {BiChevronLeft, BiChevronRight, BiRadioCircleMarked} from "react-icons/bi";
import AudioPlayer from "../AudioPlayer";

const EventList = ()=>{
    console.log('rendered eventList');
    const [events,setEvents] = useState([]);
    const [activeIdx,setActiveIdx] = useState(0);
    useEffect(()=>{
        fetch('https://developer-lostark.game.onstove.com/news/events',{
            headers:{
                accept:'application/json',
                authorization : 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAxNzUwMzYifQ.QLDqQWrSXV2PN_oJnZ799LlVcsJ1jAjGwRLOSxIeWGyqUH2hCYCjONlsygYgDUCz7UsnVffNHFmA6gT9JX1EO-o_sdjLC6xsn3UZrLn-wmGYKpsfFzplRPZoo2HHYmblZDfrOIUKYZDCg7OMS8pJ1uRAA-5j3n9FQSM1n3vl2pFBxkXFKQbQERtiljwYFEFpaZeBsMgi2LjzTG1aKXW-5qDheiiaADrOKni95PTIy0vs4pP8QKeI-LMq1nqGb0OgnTTDg8mJIXePv4YJiDXGgDMefRFgB7Dei-1Hgn7I-mLmspsX5OZjiIs84yjZMLhXKiJK78fQux9bcOZL-hQwMQ'
            }
        }).then(res=>{
            return res.json();
        }).then(res =>{
            console.log(res);
            setEvents(res);
        });
    },[])




    const updateIdx = (newIdx)=>{
        if(newIdx < 0){
            newIdx = events.length-1;
        }else if(newIdx >= events.length){
            newIdx = 0;
        }
        setActiveIdx(newIdx);
    };
    return <>
        <section id="slider">
            <div className={classes.container}>
                <div className={classes.slider}>
                    <div className={classes.content}>
                        <div className={classes.inner} style={{transform:`translate(-${activeIdx * 100}%)`}}>
                            <ul className={classes.lists}>{events.map((event,idx)=> {
                                return <li key={idx} className={classes.list}>
                                    <a href={event.Link} target="_blank" rel="noopener noreferrer">
                                        <img key={idx} src={event.Thumbnail} alt={event.Title}/>
                                    </a>
                                </li>
                            })}
                            </ul>
                        </div>
                        <div className={classes.arrows}>
                            <button className={classes.arrow} onClick={()=>updateIdx(activeIdx-1)}>
                                <BiChevronLeft size="48" color="#FFF"/>
                            </button>
                            <button className={classes.arrow} onClick={()=>updateIdx(activeIdx+1)}>
                                <BiChevronRight size="48" color="#FFF"/>
                            </button>
                        </div>
                        <div className={classes.indicators}>
                            {events.map((_,idx)=>{
                                return <button key={idx} className={classes.indicator} onClick={()=>updateIdx(idx)}> <span className={`${idx === activeIdx ? classes.indicatorSymbolActive : classes.indicatorSymbol}`}><BiRadioCircleMarked size="36"/></span></button>;
                            })}
                        </div>
                    </div>
                </div>
                <div className={classes.trade}>
                    <AudioPlayer />
                </div>
            </div>
        </section>
        </>
}
export default  EventList;