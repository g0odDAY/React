import EventList from "./Event/EventList";
import Calendar from "./Calendar/Calendar";
import Notice from "./Notice/Notice";
import classes from './Home.module.css';
const Home = ()=>{
    return <div className={classes.body}>
                <EventList />
                <Calendar/>
                <Notice/>
            </div>
}
export default Home;
