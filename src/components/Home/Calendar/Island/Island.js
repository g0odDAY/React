import classes from './Island.module.css'
const Island = ({items}) =>{

    const island = items.filter(data=>data.CategoryName==='모험 섬');

    const hasToday = (startTimeArray)=>{
        const today = new Date().toISOString().split("T")[0];
        for(let j = 0;j<startTimeArray.length;j++){
            if(startTimeArray[j].includes(today)){
                return true;
            }
        }
        return false;
    }
    const checkStartTimes = (arr)=>{

        const result = [];
        for (let i = 0; i < arr.length; i++) {
            const startTimeArray = arr[i].StartTimes;
            if(hasToday(startTimeArray)){
                result.push(arr[i]);
            }

        }
        return result;
    }
    const todayIsland = checkStartTimes(island);

    console.log('todayIsland',todayIsland);

    return  <div className={classes.island}>
        {todayIsland.map((item,idx)=><div key={idx} className={classes.island_box}>
            <img src={item.ContentsIcon} alt={item.ContentsName}/>
            <div  className={classes.island_reward}>
                <div>
                    <label htmlFor="">보상</label>
                    <span>{item.ContentsName}</span>
                </div>
                <div className={classes.inner} >
                    <ul className={classes.island_reward_lists}>
                        {item.RewardItems.map((reward,idx)=>{
                            if(reward.StartTimes === null || hasToday(reward.StartTimes)){
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