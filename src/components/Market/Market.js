import classes from './Market.module.css';
import {Link, useNavigate} from "react-router-dom";
import {useCallback, useContext, useEffect, useState} from "react";
import useHttp from "../../hooks/use-http";
import {BsStar, BsStarFill} from "react-icons/bs";
import ac from '../../img/img_acc_21.png';
import Progress from "../../ui/Progress";
import Accordion from "../../ui/Accordion";
import {AiOutlineArrowDown} from "react-icons/ai";
import downArrow from '../../img/arrow-down-sign-to-navigate.png';
import MarketList from "./MarketList/MarketList";
import AuthContext from "../../Context/auth-context";
import Warning from "../Warning/Warning";

const Market =()=>{

    const ctx = useContext(AuthContext);
    const [items,setItems] = useState([]);
    const [item,setItem] = useState();
    const [activeIdx,setActiveIdx]=useState(null);
    const navigation = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [isLogin,setIsLogin] = useState(false);
    const {
        isLoading,
        error,
        sendRequest:fetchRequest
    } = useHttp();
    useEffect(()=>{
        if(localStorage.getItem('userData') === null){
            navigation('/warning');
        }
    },[])
    const loadedHandler = useCallback((data)=>{
        console.log('loadedHandler.')
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
    },[]);
    useEffect(()=>{
        fetchRequest({url: 'https://curious-furnace-340706-default-rtdb.firebaseio.com/items.json?print=pretty'}, loadedHandler).then();
        console.log('처음에 랜더릴 될 떄 실행됨.')
    },[])

    const itemHandler =useCallback((e)=>{
        console.log('itemHandler.')
        fetchRequest({url: `https://curious-furnace-340706-default-rtdb.firebaseio.com/items/${e.target.id}.json`}, (data)=>setItem(data)).then();
    },[])
    const filterHandler =useCallback( (type,content) =>{
        console.log('filterHandler.')
        fetchRequest({url: `https://curious-furnace-340706-default-rtdb.firebaseio.com/items.json?orderBy="${type}"&equalTo="${content}"`}, loadedHandler).then();
    },[])



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
                        {items.map(data=><MarketList key={data.id} activeIdx={activeIdx} setActiveIdx = {setActiveIdx} items={data} />)}
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
    </div>;
}
export default Market;