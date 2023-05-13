import classes from "../Market.module.css";
import {BsStar} from "react-icons/bs";
import ac from "../../../img/img_acc_21.png";
import Progress from "../../../ui/Progress";
import {AiOutlineArrowDown} from "react-icons/ai";
import Accordion from "../../../ui/Accordion";


const MarketList = ({items,activeIdx,setActiveIdx})=>{
    console.log(items);


    const openHandler =(idx)=>{
        if(idx === activeIdx){
            console.log(`${idx}와 ${activeIdx}은 같다.`)
            setActiveIdx(null);
        }else{
            console.log(`${idx}와 ${activeIdx}은 다르다.`)
            setActiveIdx(idx);
        }
    };


    return <div className={classes.main_body_container}>
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
        <div className={classes.openBtn} onClick={()=>openHandler(items.id)}>
            <AiOutlineArrowDown className={classes.arrow} aria-expanded={items.id === activeIdx}/>
        </div>
        <Accordion idx={items.id} activeIdx={activeIdx} isOpen={items.id===activeIdx}/>
    </div>;
}

export default MarketList;