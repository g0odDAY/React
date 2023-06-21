import {Link, useNavigate} from "react-router-dom";
import classes from "./MainNavigation.module.css";
import {FaSearch} from "react-icons/fa";
import {useContext, useRef} from "react";
import AuthContext from "../Context/auth-context";
import Profile from "../components/Profile";
import {AiFillLock} from "react-icons/ai";

const MainNavigation = () =>{
    const searchName = useRef();
    const navigation = useNavigate();
    const isLogin = localStorage.getItem('userData');
    const ctx = useContext(AuthContext);
    const loginComponent = isLogin ? <Profile users={JSON.parse(isLogin)}/>:<Link to="login" className={classes.login_btn}><AiFillLock/>로그인</Link>;


    const searchHandler =(e)=>{
        e.preventDefault();
        if(searchName.current.value===''){
            alert('검색어를 입력해주세요!');
            return;
        }
        navigation(`search/${searchName.current.value}`);
    }
    return <>
        <header className={classes.main_header}>

            <div className={classes.main_logo}>
                <Link to="/">
                    <img src="https://i.namu.wiki/i/TImn98R955-qSPkKXd4dSVNajllqKUYsB8JmHWrYdVgS8QaoSoWhYtsPRnObaMynVM5_KLUIEWYdTD-RExJDNbG30kTZOTpxigFT2gMwG4yh_DkLlsjzsh2zO2i1auDuBa9i4gzk-u6s1eytFY4SnQ.webp" alt=""/>
                </Link>
            </div>
            <nav className={classes.main_nav}>
                <div className={classes.main_menu}>
                    <ul className={classes.main_menu_lists}>
                        <li><Link to="exchange">아이템거래</Link></li>
                        <li><Link to="market">거래소</Link></li>
                    </ul>
                    <div className={classes.main_search}>
                        <form onSubmit={searchHandler}>
                            <input type="search" maxLength={12} ref={searchName}/>
                            <button type='submit'><FaSearch size={18}/></button>
                        </form>
                    </div>
                </div>
            </nav>
            <div className={classes.main_login}>
                {loginComponent}
            </div>

        </header>
    </>
}
export default MainNavigation;