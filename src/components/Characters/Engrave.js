import classes from "./Characters.module.css";

const Engrave = ({engrave})=>{
    console.log(engrave);
    const engraveComponent = engrave ? engrave.Engravings.map((data,idx)=>{
           return <div key={idx} className={classes.engrave_sector}>
                    <div className={classes.engrave_Icon}>
                        <img src={data.Icon} alt=""/>
                    </div>
                    <div className={classes.engrave_Info}>
                        <div>{data.Name}</div>
                        <div>활성포인트 x12</div>
                    </div>
                </div>
    }) :[];
    while(engraveComponent.length < 2){
        engraveComponent.push(<div key={engraveComponent.length} className={classes.engrave_sector}>
            <div className={classes.engrave_Icon}>

            </div>
            <div className={classes.engrave_Info}>


            </div>
        </div>);
    }
    return  <div className={classes.engrave}>
        {engraveComponent}
    </div>
}
export default Engrave;