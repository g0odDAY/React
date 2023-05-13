import downArrow from '../img/arrow-down-sign-to-navigate.png';
import userImage from '../img/userthumnail.png';
import AuthContext from "../Context/auth-context";
import {useContext, useEffect, useState} from "react";
import classes from './Profile.module.css';

import {IoIosArrowDown} from "react-icons/io";
import {RiLogoutBoxLine} from "react-icons/ri";
const Profile = ()=>{
    const ctx = useContext(AuthContext);
    const [userInfo,setUserInfo] = useState({});
    useEffect(()=>{
        setUserInfo(JSON.parse(localStorage.getItem('userData')));
    },[])
    const openHandler = ()=>{

    }
    return <div className={classes.container}>
            <div className={classes.box}>
                <div className={classes.sector} onClick={openHandler}>
                    <img src={userImage} alt="userImage" width={30}/>
                </div>
                <div className={classes.sector}>
                    <span>{userInfo.email}</span>
                </div>
                <div className={classes.sector}>
                    <IoIosArrowDown size={24}/>
                </div>
            </div>
            <div className={classes.menu}>
                <ul className={classes.menuLists}>
                    <li onClick={ctx.onLogout}><RiLogoutBoxLine/> 로그 아웃</li>
                </ul>

            </div>
        </div>

}
export default Profile;