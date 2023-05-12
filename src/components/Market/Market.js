import classes from './Market.module.css';
import {Link} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import useHttp from "../../hooks/use-http";
import {BsStar, BsStarFill} from "react-icons/bs";
import ac from '../../img/img_acc_21.png';
import Progress from "../../ui/Progress";
import Accordion from "../../ui/Accordion";
import {AiOutlineArrowDown} from "react-icons/ai";
import downArrow from '../../img/arrow-down-sign-to-navigate.png';


const Market =()=>{

    const [items,setItems] = useState([]);
    const [item,setItem] = useState();
    const [activeIdx,setActiveIdx]=useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const {
        isLoading,
        error,
        sendRequest:fetchRequest
    } = useHttp();
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
    console.log('render');
    const openHandler =(idx)=>{
        console.log(idx,activeIdx);
        setIsOpen(!isOpen);
        if(idx === activeIdx){
            console.log(`${idx}와 ${activeIdx}은 같다.`)
            setActiveIdx(null);
        }else{
            console.log(`${idx}와 ${activeIdx}은 다르다.`)
            setActiveIdx(idx);
            console.log(activeIdx)
        }

    };
    return <div className={classes.container}>
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
                    <div className={classes.main_body_container}>
                        <div className={classes.row_box} >
                            <div className={classes.inner_row_box}>
                                <BsStar className={classes.favorite} size={25}  cursor="pointer"/>
                                <img src={ac} alt="ac"/>
                                <span>참혹한 파멸의 목걸이</span>
                            </div>
                            <div className={classes.column_box}>
                                <div>티어3</div>
                                <div>고대</div>
                            </div>
                            <div className={classes.inner_row_box}>
                                <div className={classes.column_box}>
                                    <span>49</span>
                                    <Progress value={49}/>
                                </div>

                                <div className={classes.column_box}>
                                    <span>치명+499</span>
                                    <span>신속+490</span>
                                </div>
                            </div>
                            <div className={classes.column_box}>
                                <span>돌격대장+6</span>
                                <span>저주받은 인형+3</span>
                                <span className={classes.penalty}>공격력 감소+3</span>
                            </div>
                            <div>
                                7,0000G
                            </div>
                        </div>
                        <div className={classes.openBtn} onClick={()=>openHandler(0)}>
                            <AiOutlineArrowDown className={classes.arrow} aria-expanded={0 === activeIdx}/>
                        </div>
                            <Accordion idx={0} activeIdx={activeIdx} isOpen={0===activeIdx}/>
                    </div>
                    <div className={classes.main_body_container}>
                        <div className={classes.row_box} >
                            <div className={classes.inner_row_box}>
                                <BsStar className={classes.favorite} size={25}  cursor="pointer"/>
                                <img src={ac} alt="ac"/>
                                <span>참혹한 파멸의 목걸이</span>
                            </div>
                            <div className={classes.column_box}>
                                <div>티어3</div>
                                <div>고대</div>
                            </div>
                            <div className={classes.inner_row_box}>
                                <div className={classes.column_box}>
                                    <span>49</span>
                                    <Progress value={49}/>
                                </div>

                                <div className={classes.column_box}>
                                    <span>치명+499</span>
                                    <span>신속+490</span>
                                </div>
                            </div>
                            <div className={classes.column_box}>
                                <span>돌격대장+6</span>
                                <span>저주받은 인형+3</span>
                                <span className={classes.penalty}>공격력 감소+3</span>
                            </div>
                            <div>
                                7,0000G
                            </div>
                        </div>
                        <div className={classes.openBtn} onClick={()=>openHandler(1)} >
                            <AiOutlineArrowDown className={classes.arrow} aria-expanded={1===activeIdx}/>
                        </div>
                        <Accordion idx={1} activeIdx={activeIdx} isOpen={1===activeIdx}/>
                    </div>
                    <div className={classes.main_body_container}>
                        <div className={classes.row_box} >
                            <div className={classes.inner_row_box}>
                                <BsStar className={classes.favorite} size={25}  cursor="pointer"/>
                                <img src={ac} alt="ac"/>
                                <span>참혹한 파멸의 목걸이</span>
                            </div>
                            <div className={classes.column_box}>
                                <div>티어3</div>
                                <div>고대</div>
                            </div>
                            <div className={classes.inner_row_box}>
                                <div className={classes.column_box}>
                                    <span>49</span>
                                    <Progress value={49}/>
                                </div>

                                <div className={classes.column_box}>
                                    <span>치명+499</span>
                                    <span>신속+490</span>
                                </div>
                            </div>
                            <div className={classes.column_box}>
                                <span>돌격대장+6</span>
                                <span>저주받은 인형+3</span>
                                <span className={classes.penalty}>공격력 감소+3</span>
                            </div>
                            <div>
                                7,0000G
                            </div>
                        </div>
                        <div className={classes.openBtn} onClick={()=>openHandler(2)}>
                            <AiOutlineArrowDown className={classes.arrow} aria-expanded={2===activeIdx}/>
                        </div>
                        <Accordion idx={2} activeIdx={activeIdx} isOpen={2===activeIdx}/>
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