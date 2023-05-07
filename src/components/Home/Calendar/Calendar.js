 import fieldboss from '../../../img/main/fieldbossicon.png'
 import ghost from '../../../img/main/ghost.png'
 import chaosgateIcon from '../../../img/main/chaosgate.png'
 import classes from "./Calendar.module.css";
 import {useEffect, useState} from "react";
 import Island from "./Island/Island";

 import "react-datepicker/dist/react-datepicker.css";
 import Raid from "./Raid/Raid";
 import Abyss from "./Abyss/Abyss";
 import ChaosgateTimer from "./Timer/ChaosgateTimer";
 import useInterval from "../../../hooks/use-interval";
 import Timer from "./Timer/Timer";
 import {useLoaderData} from "react-router-dom";
const Calendar =()=>{
    const [island,setIsland] = useState([]);
    const [type,setType] = useState(false);
    const [chaosgate,setChaosgate] = useState([]);
    const [ghostship,setGhostship] = useState([]);
    const [fieldbossSchedule,setFieldboss] = useState([]);
    useEffect(()=>{
        fetch('https://developer-lostark.game.onstove.com/gamecontents/calendar',{
            headers:{
                accept:'application/json',
                authorization : 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAxNzUwMzYifQ.QLDqQWrSXV2PN_oJnZ799LlVcsJ1jAjGwRLOSxIeWGyqUH2hCYCjONlsygYgDUCz7UsnVffNHFmA6gT9JX1EO-o_sdjLC6xsn3UZrLn-wmGYKpsfFzplRPZoo2HHYmblZDfrOIUKYZDCg7OMS8pJ1uRAA-5j3n9FQSM1n3vl2pFBxkXFKQbQERtiljwYFEFpaZeBsMgi2LjzTG1aKXW-5qDheiiaADrOKni95PTIy0vs4pP8QKeI-LMq1nqGb0OgnTTDg8mJIXePv4YJiDXGgDMefRFgB7Dei-1Hgn7I-mLmspsX5OZjiIs84yjZMLhXKiJK78fQux9bcOZL-hQwMQ'
            }
        }).then(res=>{
            return res.json();
        }).then(res =>{
            console.log('calendar',res);
            setIsland(res.filter(data=>data.CategoryName === '모험 섬').filter(data=>hasTodayDate(data.StartTimes)));
            const data = res.filter(data=>data.CategoryName === '카오스게이트').filter(data=>hasTodayDate(data.StartTimes));
            const today = new Date().toISOString().split('T')[0]; // 현재 날짜를 ISO 8601 형식으로 가져옴 (YYYY-MM-DD)
            const todayData = data[data.length-1].StartTimes.filter((item) => item.startsWith(today)).map(arr=>arr.split('T')[1]);

            setChaosgate(todayData);

            const data1 = res.filter(data=>data.CategoryName === '유령선').filter(data=>hasTodayDate(data.StartTimes));
            const todayData1 = data1[data1.length-1].StartTimes.filter((item) => item.startsWith(today)).map(arr=>arr.split('T')[1]);
            setGhostship(todayData1);

            const data2 = res.filter(data=>data.CategoryName === '필드보스').filter(data=>hasTodayDate(data.StartTimes));
            const todayData2 = data2[data2.length-1].StartTimes.filter((item) => item.startsWith(today)).map(arr=>arr.split('T')[1]);
            setFieldboss(todayData2);
        });
    },[]);


    const hasTodayDate = (arrDate)=>{
        const today = new Date().toISOString().slice(0, 10);
        return arrDate.some(date => date.startsWith(today));
    }
    return <section id="calendar">
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <div>
                    <span>모험섬</span>
                    <Timer/>
                </div>
                <p>2023년 5월</p>
            </div>
            <div className={classes.main}>
                <div className={classes.selector}>
                    <Abyss/>
                </div>
                <hr/>
                    <div className={classes.content}>
                        <div className={classes.content_box}>
                            <div className={classes.content_box_info}>
                                <img src={fieldboss} alt="fieldboss"/>
                                    <span>필드 보스</span>
                            </div>
                            <Timer schedules={fieldbossSchedule} content={'fieldboss'}/>
                        </div>
                        <div className={classes.content_box}>
                            <div className={classes.content_box_info}>
                                <img src={ghost} alt='ghost'/>
                                    <span>유령선</span>
                            </div>
                            <Timer schedules={ghostship} content={'ghostship'}/>
                        </div>
                        <div className={classes.content_box}>
                            <div className={classes.content_box_info}>
                                <img src={chaosgateIcon} alt="chaosgate"/>
                                    <span>카오스게이트</span>
                            </div>
                            <Timer schedules={chaosgate} content={'chaosgate'}/>
                        </div>
                    </div>
                {<Island items={island} hasTodayDate={hasTodayDate}/>}
            </div>
        </div>
    </section>
}
export default Calendar;