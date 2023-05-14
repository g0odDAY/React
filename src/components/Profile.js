import downArrow from '../img/arrow-down-sign-to-navigate.png';
import userImage from '../img/userthumnail.png';
import AuthContext from "../Context/auth-context";
import {useContext, useEffect, useState} from "react";
import classes from './Profile.module.css';

import {IoIosArrowDown} from "react-icons/io";
import {RiLogoutBoxLine} from "react-icons/ri";
import {getAuth} from "firebase/auth";
const Profile = ({users})=>{



    const ctx = useContext(AuthContext);

    const [isOpen,setIsOpen] = useState(false);
    const openHandler = ()=>{
        console.log('clicked')
        setIsOpen(!isOpen);
    }
    return <div className={classes.container} onClick={openHandler}>
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
            <div className={classes.menu} style={{display: isOpen ? 'block':'none'}}>
                <ul className={classes.menuLists}>
                    <li onClick={ctx.onLogout}><RiLogoutBoxLine/>로그 아웃</li>
                </ul>

            </div>
        </div>

}
export default Profile;