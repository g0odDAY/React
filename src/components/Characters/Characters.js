import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useQuery} from "react-query";
import classes from './Characters.module.css';
import {GrStatusWarning} from "react-icons/gr";
import Equipment from "./Equipment/Equipment";
const Characters = ()=>{
    const {id} = useParams();
    const getUrl = async (id)=>{
        try{
            const response = await fetch(`https://developer-lostark.game.onstove.com/armories/characters/${id}`,{
                headers:{
                    accept:'application/json',
                    authorization :`bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAxNzUwMzYifQ.QLDqQWrSXV2PN_oJnZ799LlVcsJ1jAjGwRLOSxIeWGyqUH2hCYCjONlsygYgDUCz7UsnVffNHFmA6gT9JX1EO-o_sdjLC6xsn3UZrLn-wmGYKpsfFzplRPZoo2HHYmblZDfrOIUKYZDCg7OMS8pJ1uRAA-5j3n9FQSM1n3vl2pFBxkXFKQbQERtiljwYFEFpaZeBsMgi2LjzTG1aKXW-5qDheiiaADrOKni95PTIy0vs4pP8QKeI-LMq1nqGb0OgnTTDg8mJIXePv4YJiDXGgDMefRFgB7Dei-1Hgn7I-mLmspsX5OZjiIs84yjZMLhXKiJK78fQux9bcOZL-hQwMQ`
                }
            });
            console.log(response);
            if(response === null){
                throw new Error('FAIL TO FETCH DATA');
            }
            return response.json();
        }catch(error){
            console.log(error);
        }
    }

    const {data,isLoading,isError,error} = useQuery(['characters',id],()=>getUrl(id),{
        onError:(error)=> alert('Error occured : '+ error.message),
        refetchOnMount: false, // 마운트 시 요청하지 않음
        refetchInterval: 200000000, // 2초마다 요청
    });
    if(data === null) return <div className={classes.warning}><GrStatusWarning size={22}/>검색 결과가 없습니다.</div>
    if(isLoading) return <p></p>;

    if(isError) return <p>Error occurred! {error.toString()}</p>
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
                    <img src={data.ArmoryProfile.CharacterImage} alt="d"/>
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
                    <Equipment equipment={data.ArmoryEquipment[1]}/>
                    <Equipment equipment={data.ArmoryEquipment[5]}/>
                    <Equipment equipment={data.ArmoryEquipment[2]}/>
                    <Equipment equipment={data.ArmoryEquipment[3]}/>
                    <Equipment equipment={data.ArmoryEquipment[4]}/>
                    <Equipment equipment={data.ArmoryEquipment[0]}/>
                    <div className={classes.engrave}>
                        <div className={classes.engrave_sector}>
                            <div className={classes.engrave_Icon}>
                                <img src={data.ArmoryEngraving.Engravings[0].Icon} alt=""/>
                            </div>
                            <div className={classes.engrave_Info}>
                                <div>{data.ArmoryEngraving.Engravings[0].Name}</div>
                                <div>활성 포인트 x12</div>
                            </div>
                        </div>
                        <div className={classes.engrave_sector}>
                            <div className={classes.engrave_Icon}>
                                <img src={data.ArmoryEngraving.Engravings[1].Icon} alt=""/>
                            </div>
                            <div className={classes.engrave_Info}>
                                <div>{data.ArmoryEngraving.Engravings[1].Name}</div>
                                <div>활성 포인트 x12</div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={classes.accessories}>
                   <div>
                       <Equipment equipment={data.ArmoryEquipment[6]}/>
                       <Equipment equipment={data.ArmoryEquipment[7]}/>
                       <Equipment equipment={data.ArmoryEquipment[8]}/>
                       <Equipment equipment={data.ArmoryEquipment[9]}/>
                       <Equipment equipment={data.ArmoryEquipment[10]}/>
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
                랭킹
            </div>
            <div className={classes.gem}>
                {data.ArmoryGem.Gems.map((data,idx)=> {
                    return <div className={classes.gemIcon}>
                        <img src={data.Icon} alt=""/>
                    </div>
                })}
            </div>
        </div>
    </div>
}
export default Characters;