import classes from "./Market.module.css";
import {getItemLists, preFetchingItems} from "./hooks/use-market";
import { useState} from "react";
import {useQuery} from "react-query";
import {AiOutlineBarChart, AiOutlineGold} from "react-icons/ai";
import {Link, Outlet} from "react-router-dom";
import {TbArrowBigDownFilled, TbMoneybag} from "react-icons/tb";
import {GiGoldBar} from "react-icons/gi";
import useMarket from "./hooks/marketReducer";
import {MdArrowBackIos, MdArrowForwardIos} from "react-icons/md";
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


const MarketBody = ({sortHandler,pageHandler, marketState})=>{

    if(marketState.currentPage){
        preFetchingItems(marketState);
    }
    const {data,refetch} = useQuery(['market', marketState],()=>getItemLists(marketState),{
        enabled:marketState.categoryCode !== '',
        keepPreviousData:true,
        staleTime:10*60*20000,
        refetchOnWindowFocus:false
    })
    const totalPage = data? Math.ceil(data.TotalCount/10):null;

    return (
        <div className={classes.main_body}>
            <div className={classes.table_container}>
                <div className={classes.table_row}>
                    <table>
                        <thead>
                            <tr>
                                <th onClick={()=>sortHandler('GRADE')} className={`${marketState.sort==='GRADE'?classes.active:null}`}>
                                    <div className={classes.th_content}>
                                        <span>등급</span>
                                        <TbArrowBigDownFilled className={classes.icon}/>
                                    </div>
                                </th>
                                <th onClick={()=>sortHandler('YDAY_AVG_PRICE')} className={`${marketState.sort==='YDAY_AVG_PRICE'?classes.active:null}`}>
                                    <div className={classes.th_content}>
                                        <span>전일 평균 거래가</span>
                                        <TbArrowBigDownFilled className={classes.icon}/>
                                    </div>
                                </th>
                                <th onClick={()=>sortHandler('RECENT_PRICE')} className={`${marketState.sort==='RECENT_PRICE'?classes.active:null}`}>
                                    <div className={classes.th_content}>
                                        <span>최근 거래가</span>
                                        <TbArrowBigDownFilled className={classes.icon}/>
                                    </div>
                                </th>
                                <th onClick={()=>sortHandler('CURRENT_MIN_PRICE')} className={`${marketState.sort==='CURRENT_MIN_PRICE'?classes.active:null}`}>
                                    <div className={classes.th_content}>
                                        <span>최저가</span>
                                        <TbArrowBigDownFilled className={classes.icon}/>
                                    </div>
                                </th>
                                <th>시세</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data? data.Items.map((data,idx)=> {
                                return <tr key={idx}>
                                    <td>
                                        <div style={{backgroundColor:gradeColor[`${data.Grade}`]}}>
                                            <img src={data.Icon}  alt=""/>
                                        </div>
                                        <div>
                                            <span style={{color:gradeColor[`${data.Grade}`]}}>{data.Name}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className={classes.td_content}>
                                            <span>{data.YDayAvgPrice === 0 ? '-':data.YDayAvgPrice}</span>
                                            <GiGoldBar size={25} className={classes.gold}/>
                                        </div>
                                    </td>
                                    <td>
                                        <div className={classes.td_content}>
                                            <span>{data.RecentPrice}</span>
                                            <GiGoldBar size={25} className={classes.gold}/>
                                        </div>

                                    </td>
                                    <td>
                                        <div className={classes.td_content}>
                                            <span>{data.CurrentMinPrice}</span>
                                            <GiGoldBar size={25} className={classes.gold}/>
                                        </div>
                                    </td>
                                    <td><Link to={`${data.Id}`}><AiOutlineBarChart size={40}/></Link></td>
                                </tr>
                            }):null}
                        </tbody>
                    </table>
                </div>
                {data?<div className={classes.indicator}>
                    <button type='button' onClick={() => pageHandler(-1)} disabled={marketState.currentPage === 1}>
                        <MdArrowBackIos size={25}/></button>
                    <div>
                        {data ? `${marketState.currentPage}/${totalPage}` : null}
                    </div>
                    <button type='button' onClick={() => pageHandler(1)}
                            disabled={marketState.currentPage === totalPage}><MdArrowForwardIos size={25}/></button>
                </div>:null}
            </div>

            <Outlet/>
        </div>
    )
}

export default MarketBody;

