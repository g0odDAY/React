import {useRef} from "react";
import classes from "./BoardForm.module.css";
const BoardForm = ()=>{
    const titleRef = useRef();
    const contentRef = useRef();
    const submitHandler =async event =>{
        event.preventDefault();
        const obj = {
            title:titleRef.current.value,
            content:contentRef.current.value,
            writer:'admin',
            date:new Date(),
            views:0,
            reply:0
        }
        console.log(obj);
        const response = await fetch('https://kloa-7f034-default-rtdb.firebaseio.com/board.json',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(obj)
        })
        const data =await response.json();
        console.log(data);
    }
    return <div className={classes.form}>
        <h1>글쓰기</h1>
        <form onSubmit={submitHandler} >
            <div className={classes.control}>
                <label htmlFor="">제목</label>
                <input type="text" ref={titleRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="">내용</label>
                <textarea  ref={contentRef}/>
            </div>
            <div className={classes.ss}>
                <button>저장</button>
            </div>

        </form>
    </div>
}
export default BoardForm;
