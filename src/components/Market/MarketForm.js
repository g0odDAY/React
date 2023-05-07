import classes from './MarketForm.module.css';
import downarrow from './free-arrow-down-icon-3101-thumb.png';
import {useRef, useState} from "react";
const MarketForm = ()=>{
    const [serverArr,setServerArr] = useState(['루페온','아브렐슈드','카제로스','카마인','니나브','실리안','카단','아만']);
    const [open,setOpen] = useState(false);
    const serverName = useRef();
    const serverNameHandler = e =>{
        console.log(e.target.innerHTML);
        serverName.current.value=e.target.innerHTML;
    }
    return <div className={classes.wrapper}>
        <div >
            <div className={classes.header}>
                <h2>아이템 등록</h2>
                <div>
                    <button>등록</button>
                </div>
            </div>
            <div className={classes.box}>
                <div className={classes.inner}>
                    <div>서버 명*</div>
                    <div className={classes.container}>
                        <div className={classes.selectBox} onClick={()=> setOpen(!open)}>
                            <input className={classes.selectBtn} placeholder="서버명" ref={serverName}/>
                            <img src={downarrow}  alt="downarrow" width={16}/>
                        </div>
                        <ul className={classes.selectList}>
                            <div className={classes.ss}>
                                {serverArr.map((data,idx) => <li key={idx} onClick={serverNameHandler}>{data}</li>)}
                            </div>
                        </ul>
                    </div>
                </div>
                <div>
                    <div>카테고리*</div>
                    <div className="inner">
                    <div className={classes.container}>
                        <div className={classes.selectBox}>
                            <div className={classes.selectBtn}>
                                카테고리
                            </div>
                            <img src={downarrow}  alt="downarrow" width={16}/>
                        </div>
                        <ul className={classes.selectList}>
                            <div className={classes.listBox}>
                                <li>루페온</li>
                                <li>카제로스</li>
                                <li>카마인</li>
                                <li>실리안</li>
                                <li>카단</li>
                                <li>아브렐슈드</li>
                                <li>니나브</li>
                                <li>아만</li>
                            </div>
                        </ul>
                    </div>
                </div>
                </div>
            </div>

        </div>
        <div className={classes.body}>
            <div>

            </div>
        </div>

    </div>
}
export default MarketForm;