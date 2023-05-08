import classes from './MarketForm.module.css';
import downarrow from './free-arrow-down-icon-3101-thumb.png';
import {useRef, useState} from "react";
const MarketForm = ()=>{
    const [serverArr,setServerArr] = useState(['루페온','아브렐슈드','카제로스','카마인','니나브','실리안','카단','아만']);
    const [open,setOpen] = useState(false);
    const [open1,setOpen1] = useState(false);
    const serverName = useRef();
    const category = useRef();
    const serverNameHandler = e =>{
        serverName.current.value=e.target.innerHTML;
        setOpen(!open);
    }
    const categoryHandler = e =>{
        category.current.value=e.target.innerHTML;
        setOpen1(!open1);
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
                            <input className={classes.selectBtn} placeholder="서버명" ref={serverName} disabled={true}/>
                            <img src={downarrow}  alt="downarrow" width={16}/>
                        </div>
                        <ul className={classes.selectList} style={{display:open ? 'block' : 'none'}}>
                            <div>
                                {serverArr.map((data,idx) => <li key={idx} onClick={serverNameHandler}>{data}</li>)}
                            </div>
                        </ul>
                    </div>
                </div>
                <div>
                    <div>카테고리*</div>
                    <div className="inner">
                    <div className={classes.container}>
                        <div className={classes.selectBox} onClick={()=> setOpen1(!open1)}>
                            <input type="text" className={classes.selectBtn} placeholder="카테고리" ref={category} disabled={true}/>
                            <img src={downarrow}  alt="downarrow" width={16}/>
                        </div>
                        <ul className={classes.selectList} style={{display:open1 ? 'block' : 'none'}}>
                            <div>
                                {serverArr.map((data,idx) => <li key={idx} onClick={categoryHandler}>{data}</li>)}
                            </div>
                        </ul>
                    </div>
                </div>
                </div>
            </div>

        </div>
        <div className={classes.body}>
            <div>
                <ul>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>




                </ul>
            </div>
        </div>

    </div>
}
export default MarketForm;