import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useEffect, useState} from "react";
import classes from "./EventList.module.css";
import {BiChevronLeft, BiChevronRight, BiRadioCircleMarked} from "react-icons/bi";

import useHttp from "../../../hooks/use-http";
import Guild from "./Guild/Guild";

const EventList = ()=>{
    const {sendRequest} = useHttp();
    const [events,setEvents] = useState([]);
    const [activeIdx,setActiveIdx] = useState(0);
    useEffect(()=>{
         sendRequest({
            url:'https://developer-lostark.game.onstove.com/news/events',
            headers:{
                accept:'application/json',
                authorization : process.env.REACT_APP_LOSTARK_API_KEY
            }
        }).then(response=>setEvents(response));

    },[sendRequest])




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
                            <ul className={classes.lists}>
                                {events.map((event,idx)=> {
                                return <li key={idx} className={classes.list}>
                                    <a href={event.Link} target="_blank" rel="noopener noreferrer">
                                        <img key={idx} src={event.Thumbnail} alt={event.Title}/>
                                    </a>
                                </li>
                                })}
                            </ul>
                        </div>
                            <button className={classes.prev_button} onClick={()=>updateIdx(activeIdx-1)}>
                                <BiChevronLeft size="48" color="#FFF"/>
                            </button>
                            <button className={classes.next_button} onClick={()=>updateIdx(activeIdx+1)}>
                                <BiChevronRight size="48" color="#FFF"/>
                            </button>
                        <div className={classes.indicators}>
                            <Indicator events={events} activeIdx={activeIdx} updateIdx={updateIdx}/>
                        </div>
                    </div>
                </div>
                <div className={classes.trade}>
                    <Guild/>
                </div>
            </div>
        </section>
        </>
}
export default  EventList;

const Indicator = ({events,activeIdx,updateIdx})=>{

    const indicatorBtn = events.map((_,idx)=>{
            return <button key={idx} className={classes.indicator} onClick={()=>updateIdx(idx)}> <span className={`${idx === activeIdx ? classes.indicatorSymbolActive : classes.indicatorSymbol}`}><BiRadioCircleMarked size="36"/></span></button>;
        })
    return indicatorBtn;
}