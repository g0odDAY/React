import {Link} from "react-router-dom";
import classes from "./MainNavigation.module.css";
import {FaSearch} from "react-icons/fa";

const MainNavigation = () =>{
    //console.log('rendered main nav')
    return <>
        <header className={classes.main_header}>
            <nav className={classes.main_nav}>
                <div className={classes.main_logo}>
                </div>
                <div className={classes.main_menu}>
                    <ul className={classes.main_menu_lists}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/market">아이템거래</Link></li>
                        <li><Link to="#">시세표</Link></li>
                    </ul>
                    <div className={classes.main_search}>
                        <form action="">
                            <input type="text" placeholder="캐릭터명을 입력하세요" maxLength={12}/>
                        </form>
                        <div className={classes.main_search_btn}>
                            <Link to="#"><FaSearch/></Link>
                        </div>
                    </div>
                </div>
                <div className={classes.main_login}>
                    <Link to="#">로그인</Link>
                </div>
            </nav>
        </header>
    </>
}
export default MainNavigation;