import classes from "./Market.module.css";
import {getItemLists, preFetchingItems} from "./hooks/use-market";
import {useQuery} from "react-query";
import {AiOutlineBarChart} from "react-icons/ai";
import {Link, Outlet} from "react-router-dom";
import {TbArrowBigDownFilled} from "react-icons/tb";
import {GiGoldBar} from "react-icons/gi";
import {MdArrowBackIos, MdArrowForwardIos} from "react-icons/md";
import {useState} from "react";
import {RxDoubleArrowLeft, RxDoubleArrowRight} from "react-icons/rx";
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
    const [toggle,setToggle] = useState(false);
    const [isQueryLoaded,setIsQueryLoaded]=useState(false);
    preFetchingItems(marketState);
    const {data} = useQuery(['market', marketState],()=>getItemLists(marketState),{
        enabled:marketState.CategoryCode!=='',
        keepPreviousData:true,
        staleTime:10*60*20000,
        refetchOnWindowFocus:false,
        onSuccess:()=>setIsQueryLoaded(true)
    })
    const totalPage = data? Math.ceil(data.TotalCount/10):null;

    const sortFnc =(Sort)=>{
        if(isQueryLoaded){
            sortHandler(Sort);
            setToggle(!toggle);
        }
    }
    return (
        <div className={classes.main_body}>
            <div className={classes.table_container}>
                <div className={classes.table_row}>
                    <table>
                        <thead>
                            <tr>
                                <th onClick={()=>sortFnc('GRADE')} className={`${marketState.Sort==='GRADE'?classes.active:null}`}>
                                    <div className={classes.th_content}>
                                        <span>등급</span>
                                        <TbArrowBigDownFilled className={`${marketState.Sort==='GRADE'&& toggle ?classes.icon:''}`}/>
                                    </div>
                                </th>
                                <th onClick={()=>sortFnc('YDAY_AVG_PRICE')} className={`${marketState.Sort==='YDAY_AVG_PRICE'?classes.active:null}`}>
                                    <div className={classes.th_content}>
                                        <span>전일 평균 거래가</span>
                                        <TbArrowBigDownFilled className={`${marketState.Sort==='YDAY_AVG_PRICE'&& toggle ?classes.icon:''}`}/>
                                    </div>
                                </th>
                                <th onClick={()=>sortFnc('RECENT_PRICE')} className={`${marketState.Sort==='RECENT_PRICE'?classes.active:null}`}>
                                    <div className={classes.th_content}>
                                        <span>최근 거래가</span>
                                        <TbArrowBigDownFilled className={`${marketState.Sort==='RECENT_PRICE'&& toggle ?classes.icon:''}`}/>
                                    </div>
                                </th>
                                <th onClick={()=>sortFnc('CURRENT_MIN_PRICE')} className={`${marketState.Sort==='CURRENT_MIN_PRICE'?classes.active:null}`}>
                                    <div className={classes.th_content}>
                                        <span>최저가</span>
                                        <TbArrowBigDownFilled className={`${marketState.Sort==='CURRENT_MIN_PRICE'&& toggle ?classes.icon:''}`} />
                                    </div>
                                </th>
                                <th>시세</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.Items? data.Items.map((data,idx)=> {
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
                                            <span>{data.YDayAvgPrice === 0 ? '-':data.YDayAvgPrice.toLocaleString()}</span>
                                            <GiGoldBar size={25} className={classes.gold}/>
                                        </div>
                                    </td>
                                    <td>
                                        <div className={classes.td_content}>
                                            <span>{data.RecentPrice === 0?'-':data.RecentPrice.toLocaleString()}</span>
                                            <GiGoldBar size={25} className={classes.gold}/>
                                        </div>

                                    </td>
                                    <td>
                                        <div className={classes.td_content}>
                                            <span>{data.CurrentMinPrice===0?'-':data.CurrentMinPrice.toLocaleString()}</span>
                                            <GiGoldBar size={25} className={classes.gold}/>
                                        </div>
                                    </td>
                                    <td><Link to={`${data.Id}`}><AiOutlineBarChart size={40}/></Link></td>
                                </tr>
                            }): <Empty/>}
                        </tbody>
                    </table>
                </div>
                {data?<div className={classes.indicator}>
                    <button type='button' disabled={Math.ceil(marketState.PageNo/10)===1} onClick={()=>pageHandler(1)}>
                        <RxDoubleArrowLeft size={35}/>
                    </button>
                        <button type='button' onClick={() => pageHandler(Math.floor(marketState.PageNo / 10) * 10 - 9)} disabled={Math.ceil(marketState.PageNo/10)===1}>
                            <MdArrowBackIos size={25}/>
                        </button>
                            <div>
                                <Indicator pageNo={marketState.PageNo} totalPage={totalPage} pageHandler={pageHandler}/>
                            </div>
                        <button type='button' onClick={() => pageHandler(Math.floor((marketState.PageNo - 1) / 10) * 10 + 11)} disabled={Math.ceil(marketState.PageNo/10)===Math.ceil(totalPage/10)}>
                            <MdArrowForwardIos size={25}/>
                        </button>
                    <button type='button' onClick={()=>pageHandler(totalPage)} disabled={Math.ceil(marketState.PageNo/10)===Math.ceil(totalPage/10)}>
                        <RxDoubleArrowRight size={35}/>
                    </button>

                </div>:null}
            </div>
            <Outlet/>
        </div>
    )
}

export default MarketBody;
const Indicator = ({pageNo, totalPage, pageHandler,maxButtons = 10})=>{

    let startIdx = Math.floor((pageNo - 1) / maxButtons) * maxButtons + 1;
    console.log('startIdx',startIdx);
    let endIdx = Math.min(startIdx + maxButtons - 1, totalPage);
    console.log('endIdx - startIdx + 1',endIdx - startIdx + 1);
    // if (endIdx - startIdx + 1 < maxButtons) {
    //     startIdx = Math.max(1, endIdx - maxButtons + 1);
    // }
    console.log('pageNo',pageNo,'startIdx',startIdx,'endIdx',endIdx,'totalpage',totalPage);
    const pages = [];
    for (let i = startIdx; i <= endIdx; i++) {
        pages.push(<span key={i} className={`${pageNo===i?classes.select:null}`} onClick={()=>pageHandler(i)}>{i}</span>);
    }

    return pages;
}
export const Empty = ()=>{
    return  <tr>

            <td colSpan="6" style={{ textAlign: 'center' }}>
                결과 없음
            </td>
    </tr>
}