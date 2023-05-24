import classes from "../Characters.module.css";
import {useState} from "react";

const Stat = ({stat})=>{
    const combatStat = stat.filter((data,idx) => idx<=5);
    const normalStat = stat.filter((data,idx)=> idx>5);
    const combatStatComponent = combatStat.map((data,idx)=>{
            return <div key={idx} className={classes.stat_item}>
                <span className={classes.stat_name}>{data.Type}</span><span className={classes.stat_value}>{data.Value}</span>
            </div>
        })
    const normalStatComponent = normalStat.map((data,idx)=>{
        return <div key={idx} className={classes.normalStat_item}>
            <div className={classes.stat_name}>{data.Type}</div><div className={classes.stat_value}>{data.Value}</div>
        </div>
    })
    return <div className={classes.stat}>
        <span className={classes.title}>전투특성</span>
        <div className={classes.stat_lists}>
            {combatStatComponent}
        </div>
        <span className={classes.title}>기본특성</span>
        <div className={classes.normalStat_lists}>
            {normalStatComponent}
        </div>
    </div>;
}
export default Stat;