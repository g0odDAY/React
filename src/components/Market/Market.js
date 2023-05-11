import classes from './Market.module.css';
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import useHttp from "../../hooks/use-http";



const Market = ()=>{
    const [items,setItems] = useState([]);
    const [item,setItem] = useState();
    const {
        isLoading,
        error,
        sendRequest:fetchRequest
    } = useHttp();
    useEffect(()=>{

        const loadedHandler = (data)=>{
            const loadedItems = [];

            for(const key in data){
                loadedItems.push({
                    id:key,
                    name:data[key].item,
                    quality:data[key].quality,
                    characteristic:data[key].characteristic,
                    price:data[key].price,
                    img:data[key].img
                })
            }
            setItems(loadedItems);
        }
        fetchRequest({url: 'https://curious-furnace-340706-default-rtdb.firebaseio.com/items.json'}, loadedHandler).then();

    },[fetchRequest])

    const itemHandler = (e)=>{
        fetchRequest({url: `https://curious-furnace-340706-default-rtdb.firebaseio.com/items/${e.target.id}.json`}, (data)=>setItem(data)).then();
    }

    return <div className={classes.container}>
        <div className={classes.main}>
            <ul>
                {items.map(data=><li onClick={itemHandler} key={data.id} id={data.id}>{data.name}</li>)}
            </ul>
            {item ? <p>{item.category},{item.characteristic},{item.grade}</p> : <p>no item</p>}
        </div>
        <div className={classes.aside}>
            <Link to='write' className={classes.writeBtn}>판매 아이템 등록</Link>
        </div>

    </div>
}
export default Market;