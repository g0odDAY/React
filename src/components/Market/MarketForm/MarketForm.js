import classes from './MarketForm.module.css';
import downarrow from '../free-arrow-down-icon-3101-thumb.png';
import {useEffect, useRef, useState} from "react";
import MarketFormFooter from "./MarketFormFooter/MarketFormFooter";
import useInput from "../../../hooks/use-input";
const MarketForm = ()=>{
    const serverArr = ['루페온','아브렐슈드','카제로스','카마인','니나브','실리안','카단','아만'];
    const categoryArr=['장신구-목걸이','장신구-귀걸이','장신구-반지','장신구-팔찌','보석'];
    const itemArr = [{type:'necklace',name:'거룩한 수호자의 목걸이'},{type:'necklace',name:'거룩한 선지자의 목걸이'},{type:'necklace',name:'공허한 운명의 목걸이'},{type:'necklace',name:'공허한 미래의 목걸이'},{type:'necklace',name:'참혹한 파멸의 목걸이'},{type:'necklace',name:'참혹한 쇠락의 목걸이'}]
    const characteristic = ['치명','특화','신속','인내','제압','숙련'];


    const {
        value:serverValue,
        isOpen:serverIsOpen,
        validation:serverValidation,
        inputHandler:serverInput,
        openHandler:serverOpen,
        selectHandler:serverSelect,
    }=useInput(data=>data !== '');
    const {
        value:categoryValue,
        isOpen:categoryIsOpen,
        validation:categoryValidation,
        inputHandler:categoryInput,
        openHandler:categoryOpen,
        selectHandler:categorySelect,
    }=useInput(data=>data !== '');
    const {
        value:gradeValue,
        isOpen:gradeIsOpen,
        validation:gradeValidation,
        inputHandler:gradeInput,
        openHandler:gradeOpen,
        selectHandler:gradeSelect,
    }=useInput(data=>data !== '');
    const {
        value:itemValue,
        isOpen:itemIsOpen,
        validation:itemValidation,
        inputHandler:itemInput,
        openHandler:itemOpen,
        selectHandler:itemSelect,
    }=useInput(data=>data !== '');
    const {
        value:qualityValue,
        isOpen:qualityIsOpen,
        validation:qualityValidation,
        inputHandler:qualityInput,
        openHandler:qualityOpen,
        selectHandler:qualitySelect,
    }=useInput(data=>data !== '');
    const {
        value:characteristicValue,
        isOpen:characteristicIsOpen,
        validation:characteristicValidation,
        inputHandler:characteristicInput,
        openHandler:characteristicOpen,
        selectHandler:characteristicSelect,
    }=useInput(data=>data !== '');
    const {
        value:amountValue,
        isOpen:amountIsOpen,
        validation:amountValidation,
        inputHandler:amountInput,
        openHandler:amountOpen,
        selectHandler:amountSelect,
    }=useInput(data=>data !== '');
    const {
        value:subAmountValue,
        isOpen:subAmountIsOpen,
        validation:subAmountValidation,
        inputHandler:subAmountInput,
        openHandler:subAmountOpen,
        selectHandler:subAmountSelect,
    }=useInput(data=>data !== '');

    const handleClick = (e) =>{
    }

    useEffect(()=>{
        document.addEventListener('click',handleClick);
        return ()=>{
            document.removeEventListener('click',handleClick);
        }
    },[])


    const submitHandle = (e)=>{
        e.preventDefault();
        console.log(serverValue);
        console.log(categoryValue);
        console.log(gradeValue);
        console.log(itemValue);
        console.log(qualityValue);
        console.log(characteristicValue);
        console.log(amountValue);
    }

    return <form onSubmit={submitHandle}>
                <div className={classes.wrapper}>
                        <div className={classes.header}>
                            <h2>아이템 등록</h2>
                            <div>
                                <button>등록</button>
                            </div>
                        </div>
                        <div className={classes.box}>
                            <div className={classes.inner}>
                                <div>서버 명*</div>
                                <div className={classes.container}>
                                    <div className={classes.selectBox} onClick={serverOpen}>
                                        <input className={classes.selectBtn} placeholder="서버명" value={serverValue} name='server' disabled={true}/>
                                        <img src={downarrow}  alt="downarrow" width={16}/>
                                    </div>
                                    <ul className={classes.selectList} style={{display:serverIsOpen ? 'block' : 'none'}}>
                                        <div className={classes.hidden}>
                                            {serverArr.map((data,idx) => <li key={idx} onClick={serverSelect}>{data}</li>)}
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            <div className={classes.inner}>
                                <div>카테고리*</div>
                                <div className={classes.container}>
                                    <div className={classes.selectBox} onClick={categoryOpen}>
                                        <input type="text" className={classes.selectBtn} placeholder="카테고리" name='category' value={categoryValue} disabled={true}/>
                                        <img src={downarrow}  alt="downarrow" width={16}/>
                                    </div>
                                    <ul className={classes.selectList} style={{display:categoryIsOpen ? 'block' : 'none'}}>
                                        <div className={classes.hidden}>
                                            {categoryArr.map((data,idx) => <li key={idx} onClick={categorySelect}>{data}</li>)}
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    <hr/>
                    <div className={classes.body}>
                        <div className={classes.box}>
                            <div className={classes.inner}>
                                <div className={`${gradeValidation ? classes.title : ''}`}>등급*</div>
                                <div className={classes.container}>
                                    <div className={classes.selectBox} onClick={gradeOpen}>
                                        <input className={classes.selectBtn} placeholder="등급" name='grade' value={gradeValue} disabled={true}/>
                                        <img src={downarrow}  alt="downarrow" width={16}/>
                                    </div>
                                    <ul className={classes.selectList} style={{display:gradeIsOpen ? 'block' : 'none'}}>
                                        <div className={classes.hidden}>
                                            <li onClick={gradeSelect}>유물</li>
                                            <li onClick={gradeSelect}>고대</li>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            <div className={classes.inner}>
                                <div>아이템 이름*</div>
                                <div className={classes.container}>
                                    <div className={`${classes.selectBox}`} onClick={itemOpen}>
                                        <input className={classes.selectBtn} placeholder="아이템 이름" name='item' disabled={true} value={itemValue}/>
                                        <img src={downarrow}  alt="downarrow" width={16}/>
                                    </div>
                                    <ul className={classes.selectList} style={{display:itemIsOpen ? 'block' : 'none'}}>
                                        <div className={classes.hidden}>
                                            {itemArr.map((data,idx)=> <li key={idx} onClick={itemSelect}>{data.name}</li>)}
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            <div className={classes.inner}>
                                <div>품질*</div>
                                <div className={classes.container}>
                                    <div className={classes.selectBox}>
                                        <input className={classes.selectBtn} type="text" placeholder="품질" name='quality' value={qualityValue} onChange={qualityInput}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.box}>
                            <div className={classes.inner}>
                                <div>전투 특성*</div>
                                <div className={`${classes.container}`}>
                                    <div className={classes.selectBox} onClick={characteristicOpen}>
                                        <input className={classes.selectBtn} placeholder="선택" disabled={true} name='characteristic' value={characteristicValue}/>
                                        <img src={downarrow}  alt="downarrow" width={16}/>
                                    </div>
                                    <ul className={classes.selectList} style={{display:characteristicIsOpen ? 'block' : 'none'}}>
                                        <div className={classes.hidden}>
                                            {characteristic.map((data,idx)=><li key={idx} onClick={characteristicSelect}>{data}</li>)}
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            <div className={classes.container}>
                                <div className={classes.selectBox}>
                                    <input className={classes.selectBtn} type="text" placeholder="수치" name='amount' value={amountValue} onChange={amountInput}/>
                                </div>
                            </div>

                        </div>
                        <hr/>
                        <MarketFormFooter/>
                    </div>
                </div>
            </form>
}
export default MarketForm;