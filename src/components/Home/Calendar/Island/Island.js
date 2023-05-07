import snowpang from "../../../../img/main/snowpang.png";
import sealing from "../../../../img/main/sealing.png";
import classes from './Island.module.css'
const Island = ({items,hasTodayDate}) =>{
    const data = items.map(reward=> reward.RewardItems);


    return  <div className={classes.island}>
        {items.map((item,idx)=><div key={idx} className={classes.island_box}>
            <img src={item.ContentsIcon} alt={item.ContentsName}/>
            <div  className={classes.island_reward}>
                <div>
                    <label htmlFor="">보상</label>
                    <span>{item.ContentsName}</span>
                </div>
                <div className={classes.inner} >
                    <ul className={classes.island_reward_lists}>
                        {item.RewardItems.map((reward,idx)=>{
                            if(reward.StartTimes === null || hasTodayDate(reward.StartTimes)){
                              return  <li key={idx}><img width={31} src={reward.Icon} alt={reward.name}/></li>
                            }
                            return null;
                        })}
                    </ul>
                </div>
            </div>
        </div>)}
    </div>
}
export default Island;