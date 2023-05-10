import classes from './Market.module.css';
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {app} from "../../firebaseConfig";
import { getDatabase, ref, onValue,get } from "firebase/database";
import 'firebase/database';


const Market = ()=>{
    const [items,setItems] = useState([]);
    useEffect(()=>{
        const fetchItems = async()=>{
            const response = await fetch('https://curious-furnace-340706-default-rtdb.firebaseio.com/items.json');
            const data = await response.json();

            const loadedItems = [];

            for(const key in data){
                loadedItems.push({
                    id:key,
                    name:data[key].item,
                    quality:data[key].quality,
                    characteristic:data[key].characteristic,
                    amount:data[key].amount,
                    img:data[key].img
                })
            }
            setItems(loadedItems);
        }
        return () =>fetchItems();
    },[])

    const itemHandler = (e)=>{
        console.log(e.target.id);
        fetch(`https://curious-furnace-340706-default-rtdb.firebaseio.com/items/${e.target.id}.json`)
            .then(res=>{
                return res.json();
            }).then(res=>{
                console.log(res);
        })
    }

    return <div className={classes.container}>
        <div className={classes.main}>
            <ul>
                {items.map(data=><li onClick={itemHandler} key={data.id} id={data.id}>{data.name}<img src={data.img} alt=""/></li>)}
            </ul>
        </div>
        <div className={classes.aside}>
            <Link to='write' className={classes.writeBtn}>판매 아이템 등록</Link>
        </div>

    </div>
}
export default Market;