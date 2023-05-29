import {CircularProgress} from "@mui/material";
import {useIsFetching, useIsMutating} from "react-query";
import classes from './Loading.module.css';
const Loading = ()=>{
    const isFetching = useIsFetching();
    const isMutating = useIsMutating();
    const display = isFetching || isMutating ? 'inherit' : 'none';
    return (
        <div style={{display: display}} className={classes.container}>
            <CircularProgress color='secondary' />
            <p>Loading...</p>
        </div>
    )
}
export default Loading;