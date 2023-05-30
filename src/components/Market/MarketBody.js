import classes from "./Market.module.css";
import  {getItemLists, preFetchingItems} from "./hooks/use-market";
import { useState} from "react";
import {useQuery} from "react-query";
import {AiOutlineBarChart, AiOutlineGold} from "react-icons/ai";
import {Link, Outlet} from "react-router-dom";
import {TbArrowBigDownFilled, TbMoneybag} from "react-icons/tb";
import {GiGoldBar} from "react-icons/gi";



const MarketBody = ({currentCode})=>{
    const [currentPage,setCurrentPage] = useState(1);
    preFetchingItems(currentPage,currentCode);
    const {data,isLoading} = useQuery(['market',currentCode,currentPage],()=>getItemLists(currentCode,currentPage),{
        enabled:currentCode !== '',
        keepPreviousData:true,
        staleTime:2000,
    })
    if(isLoading) return <p></p>;
    return (
        <div className={classes.main_body}>
            <div className={classes.table_container}>
                <div className={classes.table_row}>
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    <div className={classes.th_content}>
                                        <span>등급</span>
                                        <TbArrowBigDownFilled/>
                                    </div>
                                </th>
                                <th>
                                    <div className={classes.th_content}>
                                        <span>전일 평균 거래가</span>
                                        <TbArrowBigDownFilled/>
                                    </div>
                                </th>
                                <th>
                                    <div className={classes.th_content}>
                                        <span>최근 거래가</span>
                                        <TbArrowBigDownFilled/>
                                    </div>
                                </th>
                                <th>
                                    <div className={classes.th_content}>
                                        <span>최저가</span>
                                        <TbArrowBigDownFilled/>
                                    </div>
                                </th>
                                <th>시세</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data? data.Items.map((data,idx)=> {
                                return <tr key={idx}>
                                    <td>
                                            <img src={data.Icon}  alt=""/>
                                            <div>
                                                {data.Name}
                                            </div>
                                    </td>
                                    <td>
                                        <div className={classes.td_content}>
                                            <span>{data.YDayAvgPrice}</span>
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
            </div>

            <div>
                <button type='button' onClick={()=>setCurrentPage(prev=>prev-1)}>prev</button>
                { data?`${currentPage}/${data.TotalCount}` : null}
                <button type='button' onClick={()=>setCurrentPage(prev=>prev+1)}>next</button>
            </div>
            <Outlet />
        </div>
    )
}

export default MarketBody;

