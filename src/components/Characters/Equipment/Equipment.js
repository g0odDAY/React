import classes from "../Equipment/Equipment.module.css";
import NameTagBox from "./NameTagBox";
import ItemTitle from "./ItemTitle";
import ItemPartBox from "./ItemPartBox";
import ProgressBar from "../../../ui/ProgressBar";
import {useCallback, useEffect, useMemo, useState} from "react";
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
const Equipment =({equipment,type})=>{
    console.log('render!',type);

    const filterEquipment = equipment.filter(data=> data.Type === type);
    //console.log(type+'에 맞는 equipment',filterEquipment);
    const description = filterEquipment.map(data=>{
        return JSON.parse(data.Tooltip);
    });
    //console.log('description',description);
    const equipmentComponent = filterEquipment ? filterEquipment.map((data,idx)=>{
        return <div key={idx} className={classes.equipment}>
            <div className={classes.icon} style={{backgroundColor: gradeColor[data.Grade]}}>
                <img src={data.Icon} alt=""/>
            </div>
            <div className={classes.equipment_info}>
                {<NameTagBox value={JSON.parse(data.Tooltip).Element_000.value}/>}
                {<ItemTitle value={JSON.parse(data.Tooltip).Element_001.value}/>}
            </div>

        </div>
    }) : [];
    //console.log(equipmentComponent.length);
    while(equipmentComponent.length<1){
        equipmentComponent.push(<div key={equipmentComponent.length} className={classes.equipment}>
            <div className={classes.icon} style={{backgroundColor: '#d0d0d0'}}>

            </div>
            <div className={classes.equipment_info}>

            </div>
        </div>)
    }
    while(equipmentComponent.length<2 && (type === '반지' || type === '귀걸이')){
        equipmentComponent.push(<div key={equipmentComponent.length} className={classes.equipment}>
            <div className={classes.icon} style={{backgroundColor: '#d0d0d0'}}>

            </div>
            <div className={classes.equipment_info}>

            </div>
        </div>)
    }


    return <>
        {equipmentComponent}
    </>
}
export default Equipment;