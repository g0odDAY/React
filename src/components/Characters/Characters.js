
import {useParams} from "react-router-dom";
import alter_image from '../../img/alternative_character.png';
import classes from './Characters.module.css';
import {GrStatusWarning} from "react-icons/gr";
import Equipment from "./Equipment/Equipment";
import Toast from "../../ui/Toast";
import Engrave from "./Engrave";

import Gem from "./Gem";
import useCharacters from "./hooks/useCharacters";
import Card from "./Card/Card";
import Stat from "./Stat/Stat";
import EngraveEffect from "./EngraveEffect/EngraveEffect";
const Characters = ()=>{
    const {id} = useParams();
    const {characters:data,isLoading} = useCharacters(id);
    console.log(data);
    if(data === null) return <div className={classes.warning}><GrStatusWarning size={22}/>검색 결과가 없습니다.</div>;
    if(isLoading) return;
    return <div className={classes.container}>
        <div className={classes.header}>
            <button>능력치</button>
            <button>스 킬</button>
            <button>수집형 포인트</button>
            <button>보유 캐릭터</button>
            <button>증명의전장</button>
        </div>
        <div className={classes.body}>
            <div className={classes.body_aside}>
                <div>
                    <img src={data.ArmoryProfile.CharacterImage ? data.ArmoryProfile.CharacterImage : alter_image} alt=""/>
                    <div className={classes.info}>
                        <p>Lv.{data.ArmoryProfile.CharacterLevel}{data.ArmoryProfile.CharacterClassName}@{data.ArmoryProfile.ServerName}</p>
                        <h2>{data.ArmoryProfile.CharacterName}</h2>
                        <h3>{data.ArmoryProfile.ItemAvgLevel}</h3>
                    </div>
                </div>
                <div className={classes.subInfo}>
                    <ul>
                        <li><span>원정대</span><p>Lv.{data.ArmoryProfile.ExpeditionLevel}</p></li>
                        <li><span>칭호</span><p>{data.ArmoryProfile.Title}</p></li>
                        <li><span>길드</span><p>{data.ArmoryProfile.GuildName}</p></li>
                        <li><span>PVP</span><p>{data.ArmoryProfile.PvpGradeName}</p></li>
                        <li><span>영지</span><p>Lv.{data.ArmoryProfile.TownLevel}{data.ArmoryProfile.TownName}</p></li>
                    </ul>
                </div>
            </div>
            <div className={classes.body_main}>
                <div>
                    <Equipment equipment={data.ArmoryEquipment} type={'투구'}/>
                    <Equipment equipment={data.ArmoryEquipment} type={'어깨'}/>
                    <Equipment equipment={data.ArmoryEquipment} type={'상의'}/>
                    <Equipment equipment={data.ArmoryEquipment} type={'하의'}/>
                    <Equipment equipment={data.ArmoryEquipment} type={'장갑'}/>
                    <Equipment equipment={data.ArmoryEquipment} type={'무기'}/>
                    <Engrave engrave={data.ArmoryEngraving}/>

                </div>


                <div className={classes.accessories}>
                    <div>
                        <Equipment equipment={data.ArmoryEquipment} type={'목걸이'}/>
                        <Equipment equipment={data.ArmoryEquipment} type={'귀걸이'}/>
                        <Equipment equipment={data.ArmoryEquipment} type={'반지'}/>
                        <Equipment equipment={data.ArmoryEquipment} type={'팔찌'}/>
                        <Equipment equipment={data.ArmoryEquipment} type={'어빌리티 스톤'}/>
                        {/*<div>*/}
                        {/*    <img src={data.ArmoryEquipment[12].Icon} alt=""/>*/}
                        {/*    <span>{data.ArmoryEquipment[12].Name}</span>*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <img src={data.ArmoryEquipment[11].Icon} alt=""/>*/}
                        {/*    <span>{data.ArmoryEquipment[11].Name}</span>*/}
                        {/*    <div>*/}
                        {/*      <div dangerouslySetInnerHTML={{__html:JSON.parse(data.ArmoryEquipment[11].Tooltip).Element_006.value.Element_000.contentStr.Element_000.contentStr}}/>*/}
                        {/*      <div dangerouslySetInnerHTML={{__html:JSON.parse(data.ArmoryEquipment[11].Tooltip).Element_006.value.Element_000.contentStr.Element_001.contentStr}}/>*/}
                        {/*      <div dangerouslySetInnerHTML={{__html:JSON.parse(data.ArmoryEquipment[11].Tooltip).Element_006.value.Element_000.contentStr.Element_002.contentStr}}/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </div>
        <div className={classes.body}>
            <div className={classes.ranking}>

            </div>
            <Gem gems={data.ArmoryGem}/>
        </div>
        <div className={classes.body}>
            <div className={classes.ability}>
                <Stat stat={data.ArmoryProfile.Stats}/>
                <EngraveEffect engraveEffect={data.ArmoryEngraving}/>
            </div>
            <Card card={data.ArmoryCard}/>
        </div>
    </div>
}
export default Characters;