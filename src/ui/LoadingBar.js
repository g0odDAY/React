import Box from "@mui/material/Box";
import {LinearProgress} from "@mui/material";
import {useIsFetching, useIsMutating} from "react-query";
import classes from './LoadingBar.module.css';

const LoadingBar = ()=>{
    const isFetching = useIsFetching();
    const isMutating = useIsMutating();
    const display = isFetching || isMutating ? 'block' : 'none';

    return (
        <LinearProgress style={{display:display}} className={classes.loadingBar}/>
    )
}


export default LoadingBar;