import {IoWarning} from "react-icons/io5";
import classes from './Warning.module.css';
import {Link} from "react-router-dom";
const Warning = ()=>{
    return <div className={classes.container}>
        <IoWarning size={100}/>
        <div>로그인 후 이용 가능 해요.</div>
        <div className={classes.loginBtn}>
            <Link to="/login">로그인</Link>
        </div>
    </div>
}
export default Warning;