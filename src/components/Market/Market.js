import classes from './Market.module.css';
import {Link} from "react-router-dom";
const Market = ()=>{
    return <div className={classes.container}>
        <div className={classes.main}>
            main
        </div>
        <div className={classes.aside}>
            <Link to='write' className={classes.writeBtn}>판매 아이템 등록</Link>
        </div>
    </div>
}
export default Market;