import useMarket from "./hooks/use-market";
import classes from './Market.module.css';
import {SlArrowDown} from "react-icons/sl";
import {useState} from "react";
import MarketHeader from "./MarketHeader";
import MarketBody from "./MarketBody";
import {useLoaderData} from "react-router-dom";
import {getUrl} from './hooks/use-market';


const Market = ()=>{
    const [activeIdx,setActiveIdx] = useState('');
    const [currentCode,setCurrentCode] = useState('');
    const market = useLoaderData();
    return <div className={classes.container}>
        <div className={classes.aside}>
            <ul className={classes.accordionMenu}>
                {market.Categories.map((category,idx)=>{
                    return <li key={idx} className={`${classes.link} ${idx === activeIdx ? classes.active : null}`} >
                        <div className={classes.dropdown}onClick={()=>setActiveIdx(idx)} data-code={category.Code}><span>{category.CodeName}</span><SlArrowDown className={classes.arrowIcon} /></div>
                        <ul className={classes.submenuItems}>
                            <li><a href="#" data-code={category.Code} onClick={e=>setCurrentCode(e.target.dataset.code)}>전체</a></li>
                            {category.Subs.map((subCategory,idx)=>{
                                return <li key={idx}><a data-code={subCategory.Code} onClick={e=>setCurrentCode(e.target.dataset.code)} href="#">{subCategory.CodeName}</a></li>
                            })}
                        </ul>
                    </li>
                })}
            </ul>
        </div>

        <div className={classes.main}>
            <MarketHeader/>
            <MarketBody currentCode={currentCode}/>
        </div>
    </div>
}
export default Market;

export const loader = async () => {
    const response = await fetch(`https://developer-lostark.game.onstove.com/markets/options`, {
        headers: {
            accept: 'application/json',
            authorization: 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAxNzUwMzYifQ.QLDqQWrSXV2PN_oJnZ799LlVcsJ1jAjGwRLOSxIeWGyqUH2hCYCjONlsygYgDUCz7UsnVffNHFmA6gT9JX1EO-o_sdjLC6xsn3UZrLn-wmGYKpsfFzplRPZoo2HHYmblZDfrOIUKYZDCg7OMS8pJ1uRAA-5j3n9FQSM1n3vl2pFBxkXFKQbQERtiljwYFEFpaZeBsMgi2LjzTG1aKXW-5qDheiiaADrOKni95PTIy0vs4pP8QKeI-LMq1nqGb0OgnTTDg8mJIXePv4YJiDXGgDMefRFgB7Dei-1Hgn7I-mLmspsX5OZjiIs84yjZMLhXKiJK78fQux9bcOZL-hQwMQ'
        }
    });
    const data = await response.json();
    return data;
};

export const action = async({params,request})=>{
    const formData = await request.formData();
    const options = Object.fromEntries(formData);
    return {...options,CategoryCode:50000};
}