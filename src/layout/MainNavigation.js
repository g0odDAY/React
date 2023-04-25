import classes from './MainNavigation.module.css';
import {BiSearch} from 'react-icons/bi';
const MainNavigation = () =>{
    return <>
        <header className={classes.header}>
            <div className={classes.logo}>
                <a href='fds'>K<span>LOA</span> </a>
            </div>

                <ul className={classes.lists}>
                    <li>
                        <a href="dsf">Lorem </a>
                    </li>
                    <li>
                        <a  href="dsf">Lorem </a>
                    </li>
                    <li>
                        <a  href="dsf">Lorem </a>
                    </li>
                </ul>
                <div className={classes.search}>
                    <input type="text" placeholder="캐릭터명을 입력하세요."/>
                </div>
                <ul className={classes.lists2}>
                    <li>
                        <a href="gds">message</a>
                    </li>
                    <li>
                        <a href="fds">login</a>
                    </li>
                </ul>
        </header>
    </>
}
export default MainNavigation;