import classes from "./Characters.module.css";
import {useCallback, useState} from "react";
const gradeColor = {
    에스더:'#2faba8',
    고대:'#dcc999',
    유물:'#fa5d00',
    전설:'#f9ae00',
    영웅:'#8045dd',
    희귀:'#2ab1f6',
    고급:'#93bc46',
    일반:'#d0d0d0',
}
const Gem = ({gems})=>{


    const [activeIdx,setActiveIdx] = useState(null);
    const onMouseEnterHandler = useCallback((idx)=>{
        setActiveIdx(idx);
    },[activeIdx])
    const onMouseLeaveHandler = useCallback(()=>{
        setActiveIdx(null);
    },[activeIdx]);

    const filterEffects = gems ? gems.Effects.sort((a,b)=>a.GemSlot - b.GemSlot) : null;

    const gemDiv = gems ? gems.Gems.map((data,idx)=> {
        return <div className={classes.gem_item} key={idx}>
            <div  className={classes.gemIcon} onMouseEnter={()=>onMouseEnterHandler(idx)} onMouseLeave={onMouseLeaveHandler} style={{backgroundColor:gradeColor[data.Grade]}}>
                <img src={data.Icon} alt=""/><span>{data.Level}</span>
            </div>
            <div className={classes.gemDescription} style={{display:activeIdx===idx?'block':'none'}}>
                <div>{filterEffects[`${idx}`].Name}</div>
                <div>{filterEffects[`${idx}`].Description}</div>
            </div>
        </div>
    }) : [];
    while(gemDiv.length < 11){
        gemDiv.push(<div key={gemDiv.length} className={classes.gemIcon}/>)
    }
    return <div key={Math.random()} className={classes.gem}>
        {gemDiv}
    </div>
}
export default Gem;