import classes from "./Market.module.css";
import { useState} from "react";
import {Form, useLoaderData} from "react-router-dom";


const MarketHeader = ({submitHandler})=>{
    const market = useLoaderData();
    const [currentInput,setCurrentInput] = useState('');
    const [formData,setFormData] = useState({
        ItemName:'',
        CharacterClass:'',
        ItemTier:'',
        ItemGrade:''
    });
    const selectHandler = (input) =>{
        if(input === currentInput){
            setCurrentInput('');
        }else{
            setCurrentInput(input);
        }
    }
    const inputHandler = (e)=>{
        const {name,value}=e.target;
        setFormData(prevState =>({
            ...prevState,
            [name]:value
        }));
    }

    const mouseOverHandler =(e)=>{
        const value = e.target.dataset.value;
        const name = e.target.dataset.name;

        setFormData(prevState =>({
            ...prevState,
            [name]:value
        }));
    }

    return (
        <div className={classes.main_header}>
            <Form className={classes.form} onSubmit={(e)=>submitHandler(e,formData)}>
                <div className={classes.form_box}>
                    <div className={classes.row}>
                        <div className={classes.form_input}>
                            <label htmlFor="">아이템 명</label>
                            <div>
                                <input name='ItemName' placeholder='아이템 명을 입력해주세요.' value={formData.ItemName} onChange={inputHandler} type="text" className={classes.input_value}/>
                            </div>
                        </div>
                        <div className={classes.form_input}>
                            <label htmlFor="">직업</label>
                            <div className={`${classes.form_dropdown} ${'직업'===currentInput? classes.active:null}`}>
                                <input
                                    value={formData.CharacterClass===''?'전체':formData.CharacterClass}
                                    readOnly
                                    onClick={()=>selectHandler('직업')}
                                    onBlur={()=>setCurrentInput('')}
                                />
                                <div className={classes.option}>
                                    <div data-name='CharacterClass' data-value={''} onMouseOver={mouseOverHandler}>전체</div>
                                    {market.Classes.map((data,idx)=><div key={idx} data-name='CharacterClass' data-value={data} onMouseOver={mouseOverHandler}>{data}</div>)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.form_input}>
                            <label htmlFor="">아이템 티어</label>
                            <div className={`${classes.form_dropdown} ${'티어'===currentInput? classes.active:null}`}>
                                <input
                                    name='ItemTier'
                                    readOnly
                                    value={formData.ItemTier===''?'전체':formData.ItemTier}
                                    onClick={()=>selectHandler('티어')}
                                    onBlur={()=>setCurrentInput('')}
                                />
                                <div className={classes.option}>
                                    <div data-name='ItemTier' data-value={''} onMouseOver={mouseOverHandler}>전체</div>
                                    {market.ItemTiers.map((data,idx)=><div key={idx} data-name='ItemTier' data-value={data} onMouseOver={mouseOverHandler}>{data}</div>)}
                                </div>
                            </div>
                        </div>
                        <div className={classes.form_input}>
                            <label htmlFor="">아이템 등급</label>
                            <div className={`${classes.form_dropdown} ${'등급'===currentInput? classes.active:null}`}>
                                <input
                                    name='ItemGrade'
                                    type="text"
                                    readOnly
                                    value={formData.ItemGrade===''?'전체':formData.ItemGrade}
                                    onClick={()=>selectHandler('등급')}
                                    onBlur={()=>setCurrentInput('')}
                                />
                                <div className={classes.option}>
                                    <div data-name='ItemGrade' data-value={''} onMouseOver={mouseOverHandler}>전체</div>
                                    {market.ItemGrades.map((data,idx)=><div key={idx} data-name='ItemGrade' data-value={data} onMouseOver={mouseOverHandler}>{data}</div>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.button_sector}>
                    <button>검색</button>
                </div>
            </Form>
        </div>
    )
}
export default MarketHeader;

