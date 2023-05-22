
import {useParams} from "react-router-dom";
import alter_image from '../../img/alternative_character.png';
import {useQuery} from "react-query";
import classes from './Characters.module.css';
import {GrStatusWarning} from "react-icons/gr";
import Equipment from "./Equipment/Equipment";
import Toast from "../../ui/Toast";
import Engrave from "./Engrave";
import {IoIosArrowForward} from "react-icons/io";
import {useState} from "react";
import image_card_grade_legend from '../../img/card_grade_img/img_card_grade_legend.png';
const Characters = ()=>{
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
    const {id} = useParams();
    const [cardOpen,setCardOpen] = useState(false);
    const getUrl = async (id)=>{
             const response = await fetch(`https://developer-lostark.game.onstove.com/armories/characters/${id}`,{
                headers:{
                    accept:'application/json',
                    authorization :`bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAxNzUwMzYifQ.QLDqQWrSXV2PN_oJnZ799LlVcsJ1jAjGwRLOSxIeWGyqUH2hCYCjONlsygYgDUCz7UsnVffNHFmA6gT9JX1EO-o_sdjLC6xsn3UZrLn-wmGYKpsfFzplRPZoo2HHYmblZDfrOIUKYZDCg7OMS8pJ1uRAA-5j3n9FQSM1n3vl2pFBxkXFKQbQERtiljwYFEFpaZeBsMgi2LjzTG1aKXW-5qDheiiaADrOKni95PTIy0vs4pP8QKeI-LMq1nqGb0OgnTTDg8mJIXePv4YJiDXGgDMefRFgB7Dei-1Hgn7I-mLmspsX5OZjiIs84yjZMLhXKiJK78fQux9bcOZL-hQwMQ`
                }
             }).then(res=>{
                if(!res.ok){
                    throw new Error ('Network response was not OK');
                }
                return res.json();
             }).then(res=>{
                 return res;
             }).catch(error=>{
                 throw new Error ('Network response was not OK'+error.message);
             })
             return response;
    }

    const {data,isLoading} = useQuery(['characters',id],()=>getUrl(id),{
        onError:(error)=>alert(error.message),
        refetchOnWindowFocus:false,
    });
    console.log(data);
    if(data === null) return <div className={classes.warning}><GrStatusWarning size={22}/>검색 결과가 없습니다.</div>
    if(isLoading) return;

    const gemDiv = data.ArmoryGem ? data.ArmoryGem.Gems.map((data,idx)=> {
            return <div key={idx} className={classes.gemIcon} style={{backgroundColor:gradeColor[data.Grade]}}>
                <img src={data.Icon} alt=""/><span>{data.Level}</span>
            </div>
        }) : [];
    while(gemDiv.length < 11){
        gemDiv.push(<div key={gemDiv.length} className={classes.gemIcon}/>)
    }

    const cardOpenHandler =()=>{
        setCardOpen(!cardOpen);
    }
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
            <div className={classes.gem}>
                {gemDiv}
            </div>
        </div>
        <div className={classes.body}>
            <div className={classes.ability}>

                <div className={classes.stat}>
                    <span className={classes.title}>전투특성</span>
                    <div className={classes.stat_lists}>
                        {data.ArmoryProfile.Stats.map((data,idx)=>{
                            return <div key={idx} className={classes.stat_item}>
                                <span className={classes.stat_name}>{data.Type}</span><span className={classes.stat_value}>{data.Value}</span>
                            </div>
                        })}
                    </div>
                    <span className={classes.title}>기본특성</span>

                </div>
                <div className={classes.engrave_effects}>
                    <span className={classes.title}>각인효과</span>
                    {data.ArmoryEngraving.Effects.map((data,idx)=><div key={idx}>{data.Name}</div>)}
                </div>
            </div>
            <div className={classes.card}>
                <div className={classes.card_header} onClick={cardOpenHandler}>
                    <span className={classes.title}>카드</span>
                    <span><IoIosArrowForward /> </span>
                </div>
                <hr/>
                <div className={classes.card_lists}>

                    {data.ArmoryCard.Cards.map((data,idx)=>{
                        return <div key={idx} className={classes.card_item} style={{display:cardOpen ? 'none' : 'block'}}>
                            <img src={data.Icon} alt=""/>
                            <img src={image_card_grade_legend} alt="" className={classes.card_border}/>
                            <div>{data.Name}</div>
                        </div>
                    })}

                        {data.ArmoryCard.Effects[0].Items.map((data,idx)=>{
                            return <div key={idx} style={{display:!cardOpen ? 'none' : 'block'}}>
                                <div>{data.Name}</div>
                                <div>{data.Description}</div>
                            </div>
                        })}

                </div>

            </div>
        </div>
    </div>
}
export default Characters;