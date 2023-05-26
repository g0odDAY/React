import classes from './Exchange.module.css';
import {Link, useNavigate} from "react-router-dom";
import {useCallback, useContext, useEffect, useState} from "react";
import {BsStar, BsStarFill} from "react-icons/bs";
import ac from '../../img/img_acc_21.png';
import Progress from "../../ui/Progress";
import Accordion from "../../ui/Accordion";
import {AiOutlineArrowDown} from "react-icons/ai";
import downArrow from '../../img/arrow-down-sign-to-navigate.png';
import ExchangeList from "./ExchangeList/ExchangeList";
import AuthContext from "../../Context/auth-context";
import {useInfiniteQuery, useQuery} from "react-query";

const Exchange =()=>{

    const [activeIdx,setActiveIdx] = useState(null);

    const fetchUrl = async ()=>{
        const response = await fetch(`https://curious-furnace-340706-default-rtdb.firebaseio.com/items.json`);
        return response.json();
    }

    const {data,isLoading,isError,error} = useQuery('items',()=>fetchUrl());
    const dataList = data ? Object.keys(data).map((key) => data[key]) : [];




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
                        {dataList.map((data,idx)=><ExchangeList key={idx} idx={idx} activeIdx={activeIdx} setActiveIdx={setActiveIdx} items={data} />)}
                    </div>
                </div>
            </div>
            <div className={classes.aside}>
                <Link to='write' className={classes.writeBtn}>판매 아이템 등록</Link>
                <div className={classes.box}>
                    <button>전체</button>
                    <button>관심 아이템</button>
                </div>
                <div className={classes.box}>
                    서버명
                </div>
                <div className={classes.box} >
                    카테고리
                </div>
            </div>
        </div>
    </div>;
}
export default Exchange;