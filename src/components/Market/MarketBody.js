import classes from "./Market.module.css";
import useMarket, {getItemLists, getUrl, preFetchingItems} from "./hooks/use-market";
import {DataGrid} from "@mui/x-data-grid";
import {useCallback, useEffect, useState} from "react";
import {useQuery, useQueryClient} from "react-query";
import {AiOutlineBarChart} from "react-icons/ai";
import {Link, Outlet, useNavigate} from "react-router-dom";
import MarketDetail from "./MarketDetail";
const columns = [
    {field:'Name',headerName:'등급'},
    {field:'YDayAvgPrice',headerName:'전일평균 거래가'},
    {field:'RecentPrice',headerName:'최근 거래가'},
    {field:'CurrentMinPrice',headerName:'최저가'},
    {field:'id',headerName:'시세'},



];

const MarketBody = ({currentCode})=>{
    const [currentPage,setCurrentPage] = useState(1);
    const [open,setOpen] = useState(false);
    const navigate = useNavigate();
    preFetchingItems(currentPage,currentCode);
    const {data,isLoading} = useQuery(['market',currentCode,currentPage],()=>getItemLists(currentCode,currentPage),{
        enabled:currentCode !== '',
        keepPreviousData:true,
        staleTime:2000,
    })
    if(isLoading) return <p></p>;
    console.log(data);
    const openModal = (id)=>{
        navigate(`${id}`);
    }
    //const updateRows = marketItems? marketItems.Items.map(row=>({id:row.Id, ...row})) :null;
    //console.log(updateRows);
    return (
        <div className={classes.main_body}>
            {/*<div style={{ height: '100%', width: "100%" }}>*/}
            {/*    {marketItems?<DataGrid*/}
            {/*        rows={updateRows}*/}
            {/*        columns={columns}*/}

            {/*        initialState={{*/}
            {/*            pagination: {*/}
            {/*                paginationModel: {page: 0, pageSize: 10}*/}
            {/*            }*/}
            {/*        }}*/}
            {/*        pageSizeOptions={[5, 10]}*/}
            {/*    />:null}*/}
            {/*</div>*/}
            {data? data.Items.map((data,idx)=><li key={idx}>{data.Name}<Link to={`/market/${data.Id}`} ><AiOutlineBarChart/></Link></li>):null}
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

