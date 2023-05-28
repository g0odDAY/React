import classes from "./Market.module.css";
import {useState} from "react";
import {Form, useLoaderData} from "react-router-dom";

const MarketHeader = ()=>{
    const market = useLoaderData();
    const [currentInput,setCurrentInput] = useState('');
    const toggleHandler =(idx)=>{
        console.log('toggle!',idx,currentInput);
        setCurrentInput(idx);

    }
    const mouseOverHandler = (e)=>{
        console.log(e.target.innerText);
    }
    return (
        <div className={classes.main_header}>
            <Form className={classes.form} method='post'>
                <div className={classes.form_box}>
                    <div className={classes.form_input}>
                        <label htmlFor="">아이템 명</label>
                        <input name='ItemName' placeholder='아이템 명을 입력해주세요.' type="text" className={classes.input_value}/>
                    </div>
                    <div className={classes.form_input}>
                        <label htmlFor="">직업</label>
                        <div className={`${classes.form_dropdown} ${currentInput==='직업'? classes.active : null}`} tabIndex={0} onBlur={()=>setCurrentInput('')} onClick={()=>toggleHandler('직업')}>
                            <input name='CharacterClass' type="text" readOnly />
                            <div className={classes.option}>
                                {market.Classes.map((data,idx)=><div key={idx}>{data}</div>)}
                            </div>
                        </div>
                    </div>
                    <div className={classes.form_input}>
                        <label htmlFor="">아이템 티어</label>
                        <div className={`${classes.form_dropdown} ${currentInput==='티어'? classes.active : null}`} tabIndex={0} onBlur={()=>setCurrentInput('')} onClick={()=>toggleHandler('티어')} >
                            <input name='ItemTier' type="text" readOnly />
                            <div className={classes.option}>
                                {market.ItemTiers.map((data,idx)=><div key={idx}>{data}</div>)}
                            </div>
                        </div>
                    </div>
                    <div className={classes.form_input}>
                        <label htmlFor="">아이템 등급</label>
                        <div className={`${classes.form_dropdown} ${currentInput==='등급'? classes.active : null}`} tabIndex={0} onBlur={()=>setCurrentInput('')} onClick={()=>toggleHandler('등급')}>
                            <input name='ItemGrade' type="text" readOnly />
                            <div className={classes.option}>
                                {market.ItemGrades.map((data,idx)=><div key={idx} onMouseOver={e=>mouseOverHandler(e)}>{data}</div>)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.button_sector}>
                    <button type='submit'>검색</button>
                </div>
            </Form>
        </div>
    )
}
export default MarketHeader;

