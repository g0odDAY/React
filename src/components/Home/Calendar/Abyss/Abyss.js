import {useEffect, useState} from "react";
import classes from "./Abyss.module.css";
import {BiChevronLeft, BiChevronRight} from "react-icons/bi";
import useHttp from "../../../../hooks/use-http";
const Abyss = ()=>{
    const {sendRequest} = useHttp();
    const [abyss,setAbyss]=useState([]);
    useEffect(()=>{
        sendRequest({
            url:'https://developer-lostark.game.onstove.com/gamecontents/challenge-abyss-dungeons',
            headers:{
                accept:'application/json',
                authorization : process.env.REACT_APP_LOSTARK_API_KEY
            }
        }).then(res=>setAbyss(res));
    },[]);
    const [activeIdx,setActiveIdx] = useState(0);
    const updateIdx = (newIdx)=>{
        if(newIdx < 0){
            newIdx = abyss.length-1;
        }else if(newIdx >= abyss.length){
            newIdx = 0;
        }
        setActiveIdx(newIdx);
    }
    return <div>
        <h4>도전 어비스 던전</h4>
        <div className={classes.slider}>
            <div className={classes.content}>
                <div className={classes.inner} style={{transform:`translate(-${activeIdx * 100}%)`}} >
                    <ul className={classes.lists}>{abyss.map((data,idx)=><li key={idx} className={classes.box}>
                        <img src={data.Image} alt={data.Name}/>
                    </li>)}</ul>
                </div>
                <button className={classes.leftArrow} onClick={()=>updateIdx(activeIdx-1)}>
                    <BiChevronLeft size="24" color="#FFF"/>
                </button>
                <button className={classes.rightArrow} onClick={()=>updateIdx(activeIdx+1)}>
                    <BiChevronRight size="24" color="#FFF"/>
                </button>
            </div>
        </div>
    </div>
}
export default Abyss;