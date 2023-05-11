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
    const loadedHandler = (data)=>{
        const loadedItems = [];

        for(const key in data){
            loadedItems.push({
                id:key,
                item:data[key].item,
                category:data[key].category,
                quality:data[key].quality,
                characteristic:data[key].characteristic,
                price:data[key].price,
                img:data[key].img
            })
        }
        setItems(loadedItems);
    }
    useEffect(()=>{


        fetchRequest({url: 'https://curious-furnace-340706-default-rtdb.firebaseio.com/items.json?print=pretty'}, loadedHandler).then();

    },[fetchRequest])

    const itemHandler = (e)=>{
        fetchRequest({url: `https://curious-furnace-340706-default-rtdb.firebaseio.com/items/${e.target.id}.json`}, (data)=>setItem(data)).then();
    }
    const filterHandler = (type,content) =>{
        fetchRequest({url: `https://curious-furnace-340706-default-rtdb.firebaseio.com/items.json?orderBy="${type}"&equalTo="${content}"`}, loadedHandler).then();
    }
    return <div className={classes.container}>
        <div className={classes.main}>
            <ul>
                {items.map((data,idx)=><li key={idx} id={data.id} onClick={itemHandler}>{data.category}</li>)}
            </ul>
        </div>
        <div className={classes.aside}>
            <Link to='write' className={classes.writeBtn}>판매 아이템 등록</Link>
            <div className={classes.box}>
                <button>전체</button>
                <button>관심 아이템</button>
            </div>
            <div className={classes.box} onClick={()=>filterHandler('server','루페온')}>
                서버명
            </div>
            <div className={classes.box} onClick={()=>filterHandler('category','장신구-귀걸이')}>
                카테고리
            </div>
        </div>

    </div>
}
export default Market;