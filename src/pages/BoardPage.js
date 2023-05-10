import BoardTable from "../components/Board/BoardTable";
import {useState} from "react";

import {defer, useLoaderData} from "react-router-dom";
import board from "../components/Board/Board";
import BoardForm from "../components/Board/BoardForm";

const BoardPage = ()=>{
    const boards = useLoaderData();

    const column = ['글번호','제목','작성자','댓글','조회','추천','작성일'];
    return <>
        <BoardForm/>
    </>
}
export default BoardPage;
const loadBoard = async () =>{
    // const rows = Array(53).fill().map((_,idx)=>({
    //     bId:idx+1,
    //     title: faker.lorem.lines(),
    //     writer:faker.name.lastName(),
    //     reply:faker.datatype.number({min:10,max:100}),
    //     views:faker.datatype.number({min:10,max:100}),
    //     recommend:faker.datatype.number({min:10,max:100}),
    //     date:faker.date.between('2020-01-01','2023-04-26')
    // }));
    // const column = ['글번호','제목','작성자','댓글','조회','추천','작성일'];
    // return rows;
}
export const loader = ()=>{
    return defer({
        boards:loadBoard(),
    })
}