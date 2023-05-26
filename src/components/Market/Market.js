import useMarket from "./hooks/use-market";
import classes from './Market.module.css';
import {SlArrowDown} from "react-icons/sl";
import {useEffect, useState} from "react";
import useHttp from "../../hooks/use-http";

const Market = ()=>{
    const [data,setData] = useState();
    const [activeIdx,setActiveIdx] = useState('');
    const [currentCode,setCurrentCode] = useState('');
    const [currentInput,setCurrentInput] = useState('');
    useEffect(()=>{
        const sendRequest = async()=>{
           try{
               const response = await fetch(`https://developer-lostark.game.onstove.com/markets/options`, {
                   headers: {
                       accept: 'application/json',
                       authorization: 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAxNzUwMzYifQ.QLDqQWrSXV2PN_oJnZ799LlVcsJ1jAjGwRLOSxIeWGyqUH2hCYCjONlsygYgDUCz7UsnVffNHFmA6gT9JX1EO-o_sdjLC6xsn3UZrLn-wmGYKpsfFzplRPZoo2HHYmblZDfrOIUKYZDCg7OMS8pJ1uRAA-5j3n9FQSM1n3vl2pFBxkXFKQbQERtiljwYFEFpaZeBsMgi2LjzTG1aKXW-5qDheiiaADrOKni95PTIy0vs4pP8QKeI-LMq1nqGb0OgnTTDg8mJIXePv4YJiDXGgDMefRFgB7Dei-1Hgn7I-mLmspsX5OZjiIs84yjZMLhXKiJK78fQux9bcOZL-hQwMQ'
                   }
               });
               const data = await response.json();
               setData(data);
           }catch(error){
               alert('error발생'+error);
           }
        }
            sendRequest().then();
        },[])
    const {data:marketItems,isLoading} = useMarket(currentCode);
    const toggleHandler =(idx)=>{
        console.log('toggle!',idx,currentInput);
        setCurrentInput(idx);

    }
    const mouseOverHandler = (e)=>{
        console.log(e.target.innerText);
    }
    return <div className={classes.container}>
        <div className={classes.aside}>
            <ul className={classes.accordionMenu}>
                {data? data.Categories.map((category,idx)=>{
                    return <li key={idx} className={`${classes.link} ${idx === activeIdx ? classes.active : null}`} >
                        <div className={classes.dropdown}onClick={()=>setActiveIdx(idx)} data-code={category.Code}>{category.CodeName}<SlArrowDown className={classes.arrowIcon} /></div>
                        <ul className={classes.submenuItems}>
                            <li><a href="#" data-code={category.Code} onClick={e=>setCurrentCode(e.target.dataset.code)}>전체</a></li>
                            {category.Subs ? category.Subs.map((subCategory,idx)=>{
                                return <li key={idx}><a data-code={subCategory.Code} onClick={e=>setCurrentCode(e.target.dataset.code)} href="#">{subCategory.CodeName}</a></li>
                            }) : null}
                        </ul>
                    </li>
                }):null}
            </ul>
        </div>

        <div className={classes.main}>
            <div className={classes.main_header}>
                <form className={classes.form}>
                    <div>
                        <div>
                            <label htmlFor="">아이템 명</label>
                            <input name='ItemName' placeholder='아이템 명을 입력해주세요.' type="text"/>
                        </div>
                        <div>
                            <label htmlFor="">직업</label>
                            <div className={`${classes.form_dropdown} ${currentInput==='직업'? classes.active : null}`} tabIndex={0} onBlur={()=>setCurrentInput('')} onClick={()=>toggleHandler('직업')}>
                                <input name='CharacterClass' type="text" readOnly className={classes.inputValue}/>
                                <div className={classes.option}>
                                    {data? data.Classes.map((data,idx)=><div key={idx}>{data}</div>):null}
                                </div>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="">아이템 티어</label>
                            <div className={`${classes.form_dropdown} ${currentInput==='티어'? classes.active : null}`} tabIndex={0} onBlur={()=>setCurrentInput('')} onClick={()=>toggleHandler('티어')} >
                                <input name='ItemTier' type="text" readOnly className={classes.inputValue}/>
                                <div className={classes.option}>
                                    {data? data.ItemTiers.map((data,idx)=><div key={idx}>{data}</div>):null}
                                </div>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="">아이템 등급</label>
                            <div className={`${classes.form_dropdown} ${currentInput==='등급'? classes.active : null}`} tabIndex={0} onBlur={()=>setCurrentInput('')} onClick={()=>toggleHandler('등급')}>
                                <input name='ItemGrade' type="text" readOnly className={classes.inputValue}/>
                                <div className={classes.option}>
                                    {data? data.ItemGrades.map((data,idx)=><div key={idx} onMouseOver={e=>mouseOverHandler(e)}>{data}</div>):null}
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <button>검색</button>
                    </div>
                </form>
            </div>
            <div className={classes.main_body}>
                <ul>
                    {marketItems? marketItems.Items.map((data,idx)=><li key={idx}>{data.Name}</li>): null}
                </ul>
            </div>

        </div>
    </div>
}
export default Market;