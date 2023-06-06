import {Link, useNavigate} from "react-router-dom";
import classes from "./MainNavigation.module.css";
import {FaSearch} from "react-icons/fa";
import {useContext, useEffect, useRef, useState} from "react";
import AuthContext from "../Context/auth-context";
import Profile from "../components/Profile";

const MainNavigation = () =>{
    const searchName = useRef();
    const navigation = useNavigate();
    const isLogin = localStorage.getItem('userData');
    const ctx = useContext(AuthContext);
    const loginComponent = isLogin ? <Profile users={JSON.parse(isLogin)}/>:<Link to="login">로그인</Link>;


    const searchHandler =(e)=>{
        e.preventDefault();
        if(searchName.current.value===''){
            alert('검색어를 입력해주세요!');
            return null;
        }
        navigation(`search/${searchName.current.value}`);
    }
    return <>
        <header className={classes.main_header}>
            <nav className={classes.main_nav}>
                <div className={classes.main_logo}>
                </div>
                <div className={classes.main_menu}>
                    <ul className={classes.main_menu_lists}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/exchange">아이템거래</Link></li>
                        <li><Link to="market">거래소</Link></li>
                    </ul>
                    <div className={classes.main_search}>
                        <form onSubmit={searchHandler}>
                            <input type="search" placeholder="황이서" maxLength={12} ref={searchName}/>
                            <button type='submit'><FaSearch size={18}/></button>
                        </form>
                    </div>
                </div>
                <div className={classes.main_login}>
                    {loginComponent}
                </div>
            </nav>
        </header>
    </>
}
export default MainNavigation;