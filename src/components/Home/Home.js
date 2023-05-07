import EventList from "./Event/EventList";
import Calendar from "./Calendar/Calendar";
import Notice from "./Notice/Notice";

const Home = ()=>{
    return <>
                <EventList />
                <Calendar/>
                <Notice/>
            </>
}
export default Home;
