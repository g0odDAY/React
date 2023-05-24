import classes from "../Characters.module.css";
import {IoIosArrowForward} from "react-icons/io";
import {useState} from "react";
import img_card_grade_legend from "../../../img/cardGrade/img_card_grade_legend.png";
import img_card_grade_rare from "../../../img/cardGrade/img_card_grade_rare.png";
import img_card_grade_고급 from "../../../img/cardGrade/img_card_grade_고급.png";
import img_card_grade_희귀 from "../../../img/cardGrade/img_card_grade_희귀.png";
import img_card_grade_normal from "../../../img/cardGrade/img_card_grade_normal.png";
const gradeCard={
    전설:img_card_grade_legend,
    영웅:img_card_grade_rare,
    고급:img_card_grade_고급,
    희귀:img_card_grade_희귀,
    일반:img_card_grade_normal
}
const Card = ({card})=>{

    const [cardOpen,setCardOpen] = useState(false);
    const cardOpenHandler = ()=>{
        setCardOpen(!cardOpen);
    }
    const cardComponent = card? card.Cards.map((data,idx)=>{
        return <div key={idx} className={classes.card_item} style={{display:cardOpen ? 'none' : 'block'}}>
            <div  className={classes.card_item_inner} >
                <img src={data.Icon} alt=""/>
                <img src={gradeCard[`${data.Grade}`]} alt="" className={classes.card_border}/>
            </div>
            <span className={classes.card_name}>{data.Name}</span>
        </div>

    }) : [];
    while(cardComponent.length < 6){
        cardComponent.push(<div className={classes.card_item} style={{display:cardOpen ? 'none' : 'block'}}>
                <div className={classes.card_item_inner}></div>
        </div>)
    }
    const cardEffectComponent = card ? card.Effects.map((data,idx)=>{
        return <div key={idx} style={{display:!cardOpen ? 'none' : 'block'}} >
            <div className={classes.card_effects}>
                {data.Items.map((data,idx)=>{
                    return <div key={idx}>
                        <div style={{fontSize:'14px'}}>{data.Name}</div>
                        <div style={{fontSize:'10px'}}>{data.Description}</div>
                    </div>
                })}
            </div>
        </div>
    }) : null;
    return  <div className={classes.card}>
        <div className={classes.card_header} onClick={cardOpenHandler}>
            <span className={classes.title}>카드</span>
            <span><IoIosArrowForward /> </span>
        </div>
        <hr/>
        <div className={classes.card_lists}>
            {cardComponent}
            {cardEffectComponent}
        </div>

    </div>
}
export default Card;
