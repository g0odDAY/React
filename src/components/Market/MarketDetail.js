import {useNavigate, useParams} from "react-router-dom";
import {detailItem} from "./hooks/use-market";
import {useQuery} from "react-query";
import ReactDOM from 'react-dom'
import classes from './MarketDetail.module.css';
import Card from "../../ui/Card";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import { Chart} from "react-chartjs-2";
import {MdCancelPresentation} from "react-icons/md";
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement
);
const options = {
    responsive: true,
    scales: {
        y: {
            afterDataLimits:(scale)=>scale.max = scale.max * 1.1,
            axis:'y',
            position:'left',
        },
        y_sub:{
            position:'right',
            afterDataLimits:(scale)=>scale.max = scale.max * 1.1,
        }
    },
};

const Backdrop = ()=>{
    const navigate = useNavigate();
    return <div className={classes.backdrop} onClick={()=>navigate(-1)}/>
}
const ModalOverlay = ({items}) => {
    const navigate = useNavigate();
    const labels = items.Stats.map(data=> data.Date).reverse();
    const tradeCntData = items.Stats.map(data=>data.TradeCount).reverse();
    const avgPriceData = items.Stats.map(data=>data.AvgPrice).reverse();
    const data = {
        labels,
        datasets: [
            {
                label: "판매 건수",
                type:'bar',
                data: tradeCntData,
                backgroundColor: "rgba(255, 99, 132, 0.5)",
                yAxisID: 'y'
            },
            {
                label:'평균 거래가',
                type:'line',
                data:avgPriceData,
                backgroundColor: '#8045dd',
                yAxisID:'y_sub'
            }
        ]
    };
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <div className={classes.header_box}>
                    <h2>{items.Name}</h2>
                    <MdCancelPresentation onClick={()=>navigate(-1)} color='#fff' size={30}/>
                </div>

            </header>
            <div className={classes.content}>
                <Chart data={data} options={options} />
            </div>
        </Card>
    );
};
const MarketDetail =(props)=>{
    const params = useParams();
    const {data:items,isLoading} = useQuery(detailItem(params.itemId));
    if(isLoading) return null;
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onConfirm={props.onConfirm} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay items={items[0]}/>,
                document.getElementById('overlay-root')
            )}
        </>
    );
}
export default MarketDetail;
