 import fieldboss from '../../../img/main/fieldbossicon.png'
 import ghost from '../../../img/main/ghost.png'
 import chaosgateIcon from '../../../img/main/chaosgate.png'
 import classes from "./Calendar.module.css";
 import {useEffect, useState} from "react";
 import Island from "./Island/Island";
 import Abyss from "./Abyss/Abyss";
 import Timer from "./Timer/Timer";
 import useHttp from "../../../hooks/use-http";

const Calendar =()=>{
    const {sendRequest} = useHttp();
    const [calendar,setCalendar] = useState([]);

    const [chaosgate,setChaosgate] = useState([]);
    const [ghostship,setGhostship] = useState([]);
    const [fieldbossSchedule,setFieldboss] = useState([]);
    useEffect(()=>{
        sendRequest({
            url:'https://developer-lostark.game.onstove.com/gamecontents/calendar',
            headers:{
                accept:'application/json',
                authorization : process.env.REACT_APP_LOSTARK_API_KEY
            }
        }).then(res=>setCalendar(res));
        fetch('https://developer-lostark.game.onstove.com/gamecontents/calendar',{
            headers:{
                accept:'application/json',
                authorization : process.env.REACT_APP_LOSTARK_API_KEY
            }
        }).then(res=>{
            return res.json();
        }).then(res =>{
            console.log('calendar',res);



            const data = res.filter(data=>data.CategoryName === '카오스게이트').filter(data=>hasTodayDate(data.StartTimes));
            const today = new Date().toISOString().split('T')[0]; // 현재 날짜를 ISO 8601 형식으로 가져옴 (YYYY-MM-DD)
            const todayData = data[data.length-1].StartTimes.filter((item) => item.startsWith(today)).map(arr=>arr.split('T')[1]);
            console.log('chaosGate',todayData);
            setChaosgate(todayData);

            const data1 = res.filter(data=>data.CategoryName === '유령선').filter(data=>hasTodayDate(data.StartTimes));
            if(data1.length !== 0){
               const filter = data1[data1.length-1].StartTimes.filter((item) => item.startsWith(today)).map(arr=>arr.split('T')[1]);
               setGhostship(filter);
                console.log('ghostship',filter);
            }



            const data2 = res.filter(data=>data.CategoryName === '필드보스').filter(data=>hasTodayDate(data.StartTimes));
            if(data2.length !== 0){
                const filter = data2[data2.length-1].StartTimes.filter((item) => item.startsWith(today)).map(arr=>arr.split('T')[1]);
                console.log('fieldboss',filter);
                setFieldboss(filter);
            }


        });
    },[sendRequest]);


    const hasTodayDate = (arrDate)=>{
        const today = new Date().toISOString().split("T")[0];


        const todayDates = arrDate.filter(date => date.startsWith(today));

        return todayDates;
    }
    return <section id="calendar">
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <div>
                    <span>모험섬</span>
                    <Timer/>
                </div>
                <p>2023년 6월</p>
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
                {<Island items={calendar}/>}
            </div>
        </div>
    </section>
}
export default Calendar;