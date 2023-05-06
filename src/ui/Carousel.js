import CarouselItem from "./CarouselItem";
import {useState} from "react";
import classes from './Carousel.module.css';
import { BiRadioCircleMarked,BiChevronLeft,BiChevronRight } from "react-icons/bi";

const Carousel = ({items})=>{
        console.log(items);
    const [activeIdx,setActiveIdx] = useState(0);
    const updateIdx = (newIdx)=>{
        if(newIdx<=0){
            newIdx=0;
        }else if(newIdx >= items.length){
            newIdx = 0;
        }
        setActiveIdx(newIdx);
    }
    return <div className={classes.carouselContainer}>
        <div className={classes.carousel}>
            <div className={classes.inner} style={{transform:`translate(-${activeIdx * 100}%)`}}>
               <ul>{items.map((item,idx)=>{
                   return <CarouselItem key={idx} items={item}/>
               })}
               </ul>
            </div>
            <div className={classes.carouselArrowButtons}>
                <button className={classes.buttonArrow} onClick={()=>updateIdx(activeIdx-1)}>
                    <BiChevronLeft size="48" color="#FFF"/>
                </button>
                <button className={classes.buttonArrow} onClick={()=>updateIdx(activeIdx+1)}>
                    <BiChevronRight size="48" color="#FFF"/>
                </button>
            </div>
            <div className={classes.indicators}>
            {items.map((_,idx)=>{
                return <button key={idx} className={classes.indicatorButton} onClick={()=>updateIdx(idx)}> <span className={`${idx === activeIdx ? classes.indicatorSymbolActive : classes.indicatorSymbol}`}><BiRadioCircleMarked size="36"/></span></button>;
            })}
        </div>
        </div>
    </div>

}
export default Carousel;