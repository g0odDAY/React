import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {useState} from "react";
import classes from './MarketForm1.module.css';
const MarketForm1 = ({arry})=>{
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const style = {
        m:'1',
        border:'2px solid #d0d0d0',
        minWidth:'200px',
    }
    return (
        <FormControl size="medium" className={classes.form} sx={style}>
            <InputLabel id="demo-select-small-label">서버</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={age}
                label="Age"
                onChange={handleChange}
            >
                {arry.map((data,idx)=><MenuItem value={data} key={idx}>{data}</MenuItem>)}
            </Select>
        </FormControl>
    );
}
export default MarketForm1;