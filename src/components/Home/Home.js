import {useEffect, useState} from "react";
import classes from "./Home.module.css";

import EventList from "./Event/EventList";
import Calendar from "./Calendar/Calendar";
import Notice from "./Notice/Notice";



const Home = ()=>{

    const [calendars,setCalendars] = useState([]);


    return <>
            <EventList />
            <Calendar/>
            <Notice/>
        </>
}
export default Home;