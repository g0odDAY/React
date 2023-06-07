import classes from "../Exchange.module.css";
import {BsStar, BsStarFill} from "react-icons/bs";
import ac from "../../../img/img_acc_21.png";

import {AiOutlineArrowDown} from "react-icons/ai";
import Accordion from "../../../ui/Accordion";
import React, {useEffect} from "react";
import ProgressBar from "../../../ui/ProgressBar";
import {GiGoldBar} from "react-icons/gi";
import {getAuth} from "firebase/auth";
import {fetchFavorite} from "../../../store/exchange/exchange-action";
import {useDispatch} from "react-redux";


const ExchangeList = ({idx,items,activeIdx,setActiveIdx})=>{
    const auth = getAuth();
    const dispatch = useDispatch();
    //console.log(items);
    const {quality} = items;

    let color;
    switch (true) {
        case quality === '':
            color = '';
            break;
        case quality > 0 && quality < 30:
            color = '#FFE81D';
            break;
        case quality >= 30 && quality < 70:
            color = '#a0e71c';
            break;
        case quality >= 70 && quality < 90:
            color = '#2ab1f6';
            break;
        case quality >= 90 && quality < 100:
            color = '#8045dd';
            break;
        case quality == 100:
            color = '#F9AE00';
            break;
        default:
            color = '';
            break;
    }

    const openHandler =(idx)=>{
        if(idx === activeIdx){
            console.log(`${idx}와 ${activeIdx}은 같다.`)
            setActiveIdx(null);
        }else{
            console.log(`${idx}와 ${activeIdx}은 다르다.`)
            setActiveIdx(idx);
        }
    };
    const addFavItem = (itemId)=>{
        const user = JSON.parse(localStorage.getItem('userData')) ;
        const userKey = user.key;
        console.log(userKey,itemId);
       dispatch(fetchFavorite(userKey,itemId));
    }

    return <div className={classes.main_body_container}>
        <div className={classes.row_box} >
            <div className={classes.inner_row_box}>
                <div className={classes.favorite} cursor="pointer" onClick={()=>addFavItem(items.itemId)}>
                    {items.fav_items && items.fav_items.includes(items.id) ?<BsStarFill color='yellow' size={25} /> :<BsStar size={25}/>}
                </div>
                <img src={ac} alt="ac"/>
                <span>{items.itemName}</span>
            </div>
            <div className={classes.column_box}>
                <div>티어3</div>
                <div>고대</div>
            </div>
            <div className={classes.inner_row_box}>
                <div className={classes.column_box}>
                    <span>{quality}</span>
                    <ProgressBar completed={quality} bgColor={color}/>
                </div>

                <div className={classes.column_box}>
                    <span>{`${items.characteristic}+${items.characteristic_amount}`}</span>
                    <span>{`${items.sub_characteristic}+${items.sub_characteristic_amount}`}</span>
                </div>
            </div>
            <div className={classes.column_box}>
                <span>{`${items.engrave}+${items.engrave_amount}`}</span>
                <span>{`${items.sub_engrave}+${items.sub_engrave_amount}`}</span>
                <span className={classes.penalty}>{`${items.penalty}+${items.penalty_amount}`}</span>
            </div>
            <div>
                <span>{items.price}</span>
                <GiGoldBar size={22}/>
            </div>
        </div>
        <div className={classes.openBtn} onClick={()=>openHandler(idx)}>
            <AiOutlineArrowDown className={classes.arrow} aria-expanded={idx === activeIdx}/>
        </div>
        <Accordion isOpen={idx===activeIdx}>
            <div className={classes.accordion_container}>
                <div className={classes.accordion_header}>
                    <h4>기타내용</h4>
                    <h4>이미지</h4>
                </div>
                <div className={classes.accordion_content}>
                    <div className={classes.content}>
                        <div className={classes.innerContent}>
                            {items.description? <span>{items.description}</span>:<span>작성된 내용이 없어요</span>}
                        </div>

                    </div>
                    <div className={classes.preview}>

                    </div>
                </div>
            </div>
        </Accordion>
    </div>;
}

export default ExchangeList;