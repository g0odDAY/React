import {useEffect, useState} from "react";
import classes from "./Notice.module.css";
import useHttp from "../../../hooks/use-http";

const Notice = ({news})=>{
    const [notice,setNotice] = useState([]);
    const {sendRequest} = useHttp();

    useEffect(()=>{
        sendRequest({
            url:'https://developer-lostark.game.onstove.com/news/notices',
            headers:{
                accept:'application/json',
                authorization : process.env.REACT_APP_LOSTARK_API_KEY
            }
        }).then(res=>{
            const filter = res.filter((data,idx)=> idx<5);
            setNotice(filter);
        })
    },[sendRequest]);


    return <section id="notice">
        <div className={classes.wrapper}>
            <div className={classes.content}>
                <div className={classes.box}>
                    <h3>로스트 아크 공지사항</h3>
                    <ul className={notice ? classes.lists : classes.none_lists}>
                        {notice && notice.map((data,idx)=>{
                            return <li key={idx}>
                                <span className={`${data.Type === '이벤트' ? classes.event : ''}${data.Type === '상점' ? classes.store : ''}`}>{data.Type}</span>
                                <a href={data.Link} target="_blank" rel="noopener noreferrer">{data.Title}</a>
                            </li>
                        })}
                    </ul>
                </div>

                <div className={classes.box}>
                    <h3>공지 사항</h3>
                    <div>
                        <ul className={news ? classes.lists : classes.none_lists}>
                            {news && news.map((data,idx)=>{
                                return <li key={idx}>
                                    <span className={`${data.Type === '이벤트' ? classes.event : ''}${data.Type === '상점' ? classes.store : ''}`}>{data.Type}</span>
                                    <a href={data.Link} target="_blank" rel="noopener noreferrer">{data.Title}</a>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
export  default Notice;