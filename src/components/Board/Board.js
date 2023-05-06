import classes from "./Board.module.css";
import {faker} from "@faker-js/faker";
import BoardTable from "./BoardTable";
import {NavLink} from "react-router-dom";
import {useRef, useState} from "react";
import BoardNavigation from "./BoardNavigation";



const Board = ()=>{
    const searchRef = useRef();

    // const sortHandler = (event)=>{
    //     const orderBy = event.target.value;
    //     setRow(prevState => {
    //         const sorted =  prevState.sort((a,b)=> {
    //             if (a[orderBy] > b[orderBy]) return -1;
    //             if (a[orderBy] < b[orderBy]) return 1;
    //             return 0;
    //         })
    //         return [...sorted];
    //     })
    // };
    // const searchHandler = event =>{
    //     event.preventDefault();
    //     setRow(prevState => {
    //         const searched = prevState.filter(board=>board.title.includes(searchRef.current.value));
    //         return [...searched];
    //     })
    // }
    return  <>
        <div className={classes.board}>
            <h1>board page</h1>
            <BoardNavigation />



        </div>
    </>
}
export default Board;