import classes from "./BoardNavigation.module.css";
import {Link} from "react-router-dom";

const BoardNavigation = ()=>{

    return <>
        <div className={classes.writeBtn}>
            <Link to="/write">글쓰기</Link>
        </div>
        <div className={classes.searchbar}>
            <select name="" id="" >
                <option value="date">최신순</option>
                <option value="views">조회순</option>
                <option value="recommend">추천순</option>
                <option value="reply">댓글순</option>
            </select>
            <form action="" >
                <input type="text" placeholder="검색어를 입력해주세요." />
                <button>검색</button>
            </form>
        </div>
    </>
}
export default BoardNavigation;