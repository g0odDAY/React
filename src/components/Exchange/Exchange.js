import classes from './Exchange.module.css';
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import ExchangeList from "./ExchangeList/ExchangeList";
import {fetchItems,fetchFilterItems} from "../../store/exchange/exchange-action";
import {useDispatch, useSelector} from "react-redux";
import {exchangeActions} from "../../store/exchange/exchange";
import {MdKeyboardArrowDown} from "react-icons/md";

const Exchange =()=>{
    const {items:itemArray,filterOptions} = useSelector(state=> state.exchange);
    console.log('itemArray',Object.values(itemArray));
    const [isOpen,setIsOpen] = useState('');
    const [activeIdx,setActiveIdx] = useState(null);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchFilterItems());
    },[filterOptions,dispatch])
    useEffect(()=>{
        dispatch(fetchItems());
    },[dispatch])
    const openHandler = (name)=>{
        if(name===isOpen){
            setIsOpen('');
        }else{
            setIsOpen(name);
        }
    }
    const mouseOverHandler = (e,name)=>{
        dispatch(exchangeActions.filterItem({name,value:e.target.innerText}));
    }
    return <div className={classes.body}>
        <div className={classes.container}>
            <div className={classes.main}>
                <div className={classes.main_header}>
                    <div style={{width:"310px"}}>이름</div>
                    <div  style={{width:"60px",textAlign:'start'}}>등급</div>
                    <div  style={{width:"200px"}}>품질</div>
                    <div  style={{width:"200px"}}>옵션</div>
                    <div  style={{width:"100px"}}>금액</div>
                </div>
                <div className={classes.main_body}>
                    <div className={classes.main_body_box}>
                        {itemArray.map((data,idx)=><ExchangeList key={idx} idx={idx} activeIdx={activeIdx} setActiveIdx={setActiveIdx} items={data} />)}
                    </div>
                </div>
            </div>
            <div className={classes.aside}>
                <Link to='write' className={classes.writeBtn}>판매 아이템 등록</Link>
                <div className={classes.box}>
                    <button>전체</button>
                    <button>관심 아이템</button>
                </div>
                <div className={classes.input_container} tabIndex={0} onBlur={()=>setIsOpen('')} onClick={()=>openHandler('서버')}>
                    <div className={classes.input_box}>
                        <input
                            placeholder='서버명'
                            disabled
                            value={filterOptions.server}
                        />
                        <MdKeyboardArrowDown size={30} className={classes.arrow_icon}/>
                    </div>
                    <div className={`${classes.option} ${isOpen==='서버'? classes.active:null}`}>
                        <div onClick={(e)=>mouseOverHandler(e,'server')}>루페온</div>
                        <div onClick={(e)=>mouseOverHandler(e,'server')}>아브렐슈드</div>
                        <div onClick={(e)=>mouseOverHandler(e,'server')}>카제로스</div>
                        <div onClick={(e)=>mouseOverHandler(e,'server')}>카마인</div>
                        <div onClick={(e)=>mouseOverHandler(e,'server')}>아만</div>
                        <div onClick={(e)=>mouseOverHandler(e,'server')}>니나브</div>
                        <div onClick={(e)=>mouseOverHandler(e,'server')}>실리안</div>
                        <div onClick={(e)=>mouseOverHandler(e,'server')}>카단</div>
                    </div>
                </div>
                <div className={classes.box} >
                    카테고리
                </div>
            </div>
        </div>
    </div>;
}
export default Exchange;