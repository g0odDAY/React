import classes from "../Equipment/Equipment.module.css";
import NameTagBox from "./NameTagBox";
import ItemTitle from "./ItemTitle";
import ItemPartBox from "./ItemPartBox";
import ProgressBar from "../../../ui/ProgressBar";
import {useEffect, useState} from "react";
const gradeColor = {
    에스더:'#2faba8',
    고대:'#dcc999',
    유물:'#fa5d00',
    영웅:'#8045dd',
    희귀:'#2ab1f6',
    고급:'#93bc46'
}
const Equipment = ({equipment})=>{
    console.log('equipment Tooltip',JSON.parse(equipment.Tooltip))

    const component = Object.entries(JSON.parse(equipment.Tooltip)).map(([key,value],idx)=>{
        if (value.type === 'NameTagBox') {
            return <NameTagBox key={idx} value={value.value} />;
        } else if (value.type === 'ItemTitle') {
            return <ItemTitle key={idx} value={value.value} />;
        } else if (value.type === 'ItemPartBox' && value.value.Element_000.includes('세트 효과') ) {
            return <ItemPartBox key={idx} value={value.value.Element_001} />;
        } else {
            return null;
        }
    })

    return (
            <div>
                <div className={classes.equipment}>
                    <div className={classes.icon} style={{backgroundColor:gradeColor[equipment.Grade]}}>
                        <img src={equipment.Icon} alt=""/>
                    </div>
                    <div className={classes.equipment_info}>
                        {<NameTagBox value={JSON.parse(equipment.Tooltip).Element_000.value} />}
                        {<ItemTitle value={JSON.parse(equipment.Tooltip).Element_001.value} />}
                    </div>
                    <div>

                    </div>
                </div>
            </div>
    )
}
export default Equipment;