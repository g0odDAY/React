import classes from "../Characters.module.css";

const EngraveEffect = ({engraveEffect})=>{
    const engraveEffectComponent =engraveEffect ? engraveEffect.Effects.map((data,idx)=><div className={classes.engrave_effects_item} key={idx}>{data.Name}</div>) : null;
    return <div className={classes.engrave_effects}>
        <span className={classes.title}>각인효과</span>
        <div className={classes.engrave_effects_lists}>
            {engraveEffectComponent}
        </div>

    </div>
}
export default EngraveEffect;