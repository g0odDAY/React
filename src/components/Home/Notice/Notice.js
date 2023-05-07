import {useEffect, useState} from "react";
import classes from "./Notice.module.css";

const Notice = ({news})=>{
    const [notice,setNotice] = useState([]);
    useEffect(()=>{
        fetch('https://developer-lostark.game.onstove.com/news/notices',{
            headers:{
                accept:'application/json',
                authorization : 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAxNzUwMzYifQ.QLDqQWrSXV2PN_oJnZ799LlVcsJ1jAjGwRLOSxIeWGyqUH2hCYCjONlsygYgDUCz7UsnVffNHFmA6gT9JX1EO-o_sdjLC6xsn3UZrLn-wmGYKpsfFzplRPZoo2HHYmblZDfrOIUKYZDCg7OMS8pJ1uRAA-5j3n9FQSM1n3vl2pFBxkXFKQbQERtiljwYFEFpaZeBsMgi2LjzTG1aKXW-5qDheiiaADrOKni95PTIy0vs4pP8QKeI-LMq1nqGb0OgnTTDg8mJIXePv4YJiDXGgDMefRFgB7Dei-1Hgn7I-mLmspsX5OZjiIs84yjZMLhXKiJK78fQux9bcOZL-hQwMQ'
            }
        }).then(res=>{
            return res.json();
        }).then(res=>{
            const filter = res.filter((data,idx)=> idx<5);
            setNotice(filter);
            console.log(filter);
        })
    },[]);


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