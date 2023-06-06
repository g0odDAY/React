import downArrow from '../img/arrow-down-sign-to-navigate.png';
import userImage from '../img/userthumnail.png';
import AuthContext from "../Context/auth-context";
import {useContext, useEffect, useState} from "react";
import classes from './Profile.module.css';

import {IoIosArrowDown} from "react-icons/io";
import {RiLogoutBoxLine} from "react-icons/ri";

import {FaExchangeAlt} from "react-icons/fa";
import {AiOutlineNotification} from "react-icons/ai";
const Profile = ({users})=>{
    console.log(users);


    const ctx = useContext(AuthContext);

    const [isOpen,setIsOpen] = useState(false);
    const openMenuHandler = ()=>{
        setIsOpen(!isOpen);
    }
    const closeMenuHandler = ()=>{
        setIsOpen(false);
    }

    return <div className={classes.container} onBlur={closeMenuHandler} tabIndex={0} onClick={openMenuHandler}>
            <div className={classes.box}>
                <div className={classes.sector}>
                    <img src={userImage} alt="userImage" width={30}/>
                </div>
                <div className={classes.sector}>
                    <span>{users.email}</span>
                </div>
                <div className={classes.sector}>
                    <IoIosArrowDown size={24}/>
                </div>
            </div>
        {isOpen && <div className={classes.menu} >
                <ul className={classes.menuLists} >
                    <li><FaExchangeAlt/><span>정보 수정</span></li>
                    <li><AiOutlineNotification/><span>1:1문의</span></li>
                    <li className={classes.logout} onClick={ctx.onLogout}><RiLogoutBoxLine/><span>로그 아웃</span></li>
                </ul>
            </div>}
        </div>

}
export default Profile;