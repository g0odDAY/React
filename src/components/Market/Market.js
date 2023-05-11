import classes from './Market.module.css';
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import useHttp from "../../hooks/use-http";
import {BsStar, BsStarFill} from "react-icons/bs";
import ac from '../../img/img_acc_21.png';
import Progress from "../../ui/Progress";


const Market = ()=>{
    const [items,setItems] = useState([]);
    const [item,setItem] = useState();
    const {
        isLoading,
        error,
        sendRequest:fetchRequest
    } = useHttp();
    const loadedHandler = (data)=>{
        const loadedItems = [];

        for(const key in data){
            loadedItems.push({
                id:key,
                item:data[key].item,
                category:data[key].category,
                quality:data[key].quality,
                characteristic:data[key].characteristic,
                price:data[key].price,
                img:data[key].img
            })
        }
        setItems(loadedItems);
    }
    useEffect(()=>{
        fetchRequest({url: 'https://curious-furnace-340706-default-rtdb.firebaseio.com/items.json?print=pretty'}, loadedHandler).then();

    },[fetchRequest])

    const itemHandler = (e)=>{
        fetchRequest({url: `https://curious-furnace-340706-default-rtdb.firebaseio.com/items/${e.target.id}.json`}, (data)=>setItem(data)).then();
    }
    const filterHandler = (type,content) =>{
        fetchRequest({url: `https://curious-furnace-340706-default-rtdb.firebaseio.com/items.json?orderBy="${type}"&equalTo="${content}"`}, loadedHandler).then();
    }
    return <div className={classes.container}>
        <div className={classes.main}>
            <div className={classes.main_header}>
                <span>이름</span>
                <span>등급</span>
                <span>품질</span>
                <span>옵션</span>
                <span>금액</span>
            </div>
            <div className={classes.main_body}>
                <div className={classes.main_body_box}>
                    <BsStar size={22} cursor="pointer"/>
                    <div className={classes.row_box}>
                        <img src={ac} alt="ac"/>
                        <span>참혹한 파멸의 목걸이</span>
                    </div>
                    <div className={classes.column_box}>
                        <span>티어3</span>
                        <span>고대</span>
                    </div>
                    <div>
                        <Progress value={49}/>
                    </div>
                    <div className={classes.column_box}>
                        <span>치명+499</span>
                        <span>신속+490</span>
                    </div>
                    <div className={classes.column_box}>
                        <span>돌격대장+6</span>
                        <span>저주받은 인형+3</span>
                        <span>공격력 감소+3</span>
                    </div>
                    <div>
                        7,0000G
                    </div>
                </div>
            </div>

        </div>
        <div className={classes.aside}>
            <Link to='write' className={classes.writeBtn}>판매 아이템 등록</Link>
            <div className={classes.box}>
                <button>전체</button>
                <button>관심 아이템</button>
            </div>
            <div className={classes.box} onClick={()=>filterHandler('server','루페온')}>
                서버명
            </div>
            <div className={classes.box} onClick={()=>filterHandler('category','장신구-귀걸이')}>
                카테고리
            </div>
        </div>

    </div>
}
export default Market;