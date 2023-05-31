import classes from './ExchangeForm.module.css';
import downarrow from '../free-arrow-down-icon-3101-thumb.png';
import {useEffect, useRef, useState} from "react";
import ExchangeFormFooter from "./ExchangeFormFooter/ExchangeFormFooter";
import useInput from "../../../hooks/use-input";
import useMarket from "../../Market/hooks/marketReducer";

const ExchangeForm = ()=>{
    const serverArr = ['루페온','아브렐슈드','카제로스','카마인','니나브','실리안','카단','아만'];
    const categoryArr=['장신구-목걸이','장신구-귀걸이','장신구-반지','장신구-팔찌','보석'];
    const itemArr = [{type:'necklace',name:'거룩한 수호자의 목걸이'},{type:'necklace',name:'거룩한 선지자의 목걸이'},{type:'necklace',name:'공허한 운명의 목걸이'},{type:'necklace',name:'공허한 미래의 목걸이'},{type:'necklace',name:'참혹한 파멸의 목걸이'},{type:'necklace',name:'참혹한 쇠락의 목걸이'}]
    const characteristic = ['치명','특화','신속','인내','제압','숙련'];
    const engraveArr = ['각성','강령술','결투의 대가','구슬동자','굳은 의지','급소 타격','기습의 대가','긴급 구조','달인의 저력'];
    const penaltyArr = ['공격력 감소','공격속도 감소','방어력 감소','이동속도 감소'];
    const [previewImage,setPreviewImage] = useState('');
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
        value:subCharacteristicValue,
        isOpen:subCharacteristicIsOpen,
        validation:subCharacteristicValidation,
        inputHandler:subCharacteristicInput,
        openHandler:subCharacteristicOpen,
        selectHandler:subCharacteristicSelect,
    }=useInput(data=>data !== '');
    const {
        value:subAmountValue,
        isOpen:subAmountIsOpen,
        validation:subAmountValidation,
        inputHandler:subAmountInput,
        openHandler:subAmountOpen,
        selectHandler:subAmountSelect,
    }=useInput(data=>data !== '');
    const {
        value:engraveValue,
        isOpen:engraveIsOpen,
        validation:engraveValidation,
        inputHandler:engraveInput,
        openHandler:engraveOpen,
        selectHandler:engraveSelect,
    }=useInput(data=>data !== '');
    const {
        amount:enAmount,
        isOpen:enAmountIsOpen,
        validation:enAmountValidation,
        inputHandler:enAmountInput,
        openHandler:enAmountOpen,
        selectHandler:enAmountSelect,
        updownHandler:enAmountUpdown,
    }=useInput(data=>data !== '');
    const {
        value:subEngraveValue,
        isOpen:subEngraveIsOpen,
        validation:subEngraveValidation,
        inputHandler:subEngraveInput,
        openHandler:subEngraveOpen,
        selectHandler:subEngraveSelect,
    }=useInput(data=>data !== '');
    const {
        amount:subEnAmount,
        isOpen:subEnAmountIsOpen,
        validation:subEnAmountValidation,
        inputHandler:subEnAmountInput,
        openHandler:subEnAmountOpen,
        selectHandler:subEnAmountSelect,
        updownHandler:subEnAmountUpdown,
    }=useInput(data=>data !== '');
    const {
        value:penaltyValue,
        isOpen:penaltyIsOpen,
        validation:penaltyValidation,
        inputHandler:penaltyInput,
        openHandler:penaltyOpen,
        selectHandler:penaltySelect,
        updownHandler:penaltyUpdown,
    }=useInput(data=>data !== '');
    const {
        value:penaltyAmountValue,
        isOpen:penaltyAmountIsOpen,
        validation:penaltyAmountValidation,
        inputHandler:penaltyAmountInput,
        openHandler:penaltyAmountOpen,
        selectHandler:penaltyAmountSelect,
        updownHandler:penaltyAmountUpdown,
    }=useInput(data=>data !== '');
    const {
        value:priceValue,
        validation:priceValidation,
        inputHandler:priceInput,
    }=useInput(data=>data !== '');
    const handleClick = (e) =>{
    }

    useEffect(()=>{
        document.addEventListener('click',handleClick);
        return ()=>{
            document.removeEventListener('click',handleClick);
        }
    },[])
    console.log('render');

    const submitHandle = (e)=>{
        e.preventDefault();
        console.log(serverValue);
        console.log(categoryValue);
        console.log(gradeValue);
        console.log(itemValue);
        console.log(qualityValue);
        console.log(characteristicValue);
        console.log(amountValue);
        console.log(engraveValue);
        // fetch('https://curious-furnace-340706-default-rtdb.firebaseio.com/items.json',{
        //     method:'POST',
        //     headers:{
        //         'Content-type':'application/json',
        //     },
        //     body:JSON.stringify({
        //         server:serverValue,
        //         category:categoryValue,
        //         grade:gradeValue,
        //         item:itemValue,
        //         quality:qualityValue,
        //         characteristic:{
        //             chrch:characteristicValue,
        //             amount:amountValue,
        //             subChrch:subCharacteristicValue,
        //             subAmount:subAmountValue
        //         },
        //         option:{
        //             engrave:engraveValue,
        //             amount:enAmount,
        //             subEgrave:subEngraveValue,
        //             subAmount:subEnAmount,
        //             penalty:penaltyValue
        //         },
        //         price:priceValue,
        //         img:previewImage
        //     })
        // }).then(res=>{
        //     return res.json();
        // }).then(res=>{
        //     console.log(res);
        // })


    }
    const [activeIdx,setActiveIdx]=useState(null);
    const openHandler = (idx)=>{
        if(idx === activeIdx){
            console.log(`${idx}와 ${activeIdx}은 같다.`)
            setActiveIdx(null);
        }else{
            console.log(`${idx}와 ${activeIdx}은 다르다.`)
            setActiveIdx(idx);
        }
    }
    const closeHandler = ()=>{
        setActiveIdx(null);
    }
    const penaltyUpdownHandler = (type)=>{


    }
    const show=(e)=>{

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
                                <div>서버*</div>
                                <div className={classes.container}>
                                    <div className={classes.selectBox} tabIndex={0} onBlur={closeHandler} onClick={()=>openHandler(0)}>
                                        <input type="text" className={classes.selectBtn} placeholder="서버" name='server' value={serverValue} disabled={true}/>
                                        <img src={downarrow}  alt="downarrow" width={16}/>
                                    </div>
                                    <ul className={classes.selectList} aria-expanded={!(activeIdx === 0)}>
                                        <div className={classes.hidden}>
                                            {serverArr.map((data,idx)=><li key={idx} onClick={serverSelect}>{data}</li>)}
                                        </div>
                                    </ul>
                                </div>
                            </div>

                            <div className={classes.inner}>
                                <div>카테고리*</div>
                                <div className={classes.container}>
                                    <div className={classes.selectBox} tabIndex={0} onBlur={closeHandler} onClick={()=>openHandler(1)}>
                                        <input type="text" className={classes.selectBtn} placeholder="카테고리" name='category' value={categoryValue} disabled={true}/>
                                        <img src={downarrow}  alt="downarrow" width={16}/>
                                    </div>
                                    <ul className={classes.selectList} aria-expanded={!(activeIdx === 1)}>
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
                                    <div className={classes.selectBox} tabIndex={0} onBlur={closeHandler} onClick={()=>openHandler(2)}>
                                        <input className={classes.selectBtn} placeholder="등급" name='grade' value={gradeValue} disabled={true}/>
                                        <img src={downarrow}  alt="downarrow" width={16}/>
                                    </div>
                                    <ul className={classes.selectList} aria-expanded={!(activeIdx === 2)}>
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
                                    <div className={`${classes.selectBox}`} tabIndex={0} onBlur={closeHandler} onClick={()=>openHandler(3)}>
                                        <input className={classes.selectBtn} placeholder="아이템 이름" name='item' disabled={true} value={itemValue}/>
                                        <img src={downarrow}  alt="downarrow" width={16}/>
                                    </div>
                                    <ul className={classes.selectList} aria-expanded={!(activeIdx === 3)}>
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
                                    <div className={classes.selectBox} tabIndex={0} onBlur={closeHandler} onClick={()=>openHandler(4)}>
                                        <input className={classes.selectBtn} placeholder="선택" disabled={true} name='characteristic' value={characteristicValue}/>
                                        <img src={downarrow}  alt="downarrow" width={16}/>
                                    </div>
                                    <ul className={classes.selectList} aria-expanded={!(activeIdx === 4)}>
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
                        <div className={classes.box}>
                            <div className={classes.inner}>
                                <div className={`${classes.container}`}>
                                    <div className={classes.selectBox} tabIndex={0} onBlur={closeHandler} onClick={()=>openHandler(5)}>
                                        <input className={classes.selectBtn} placeholder="선택" disabled={true} name='subCharacteristic' value={subCharacteristicValue}/>
                                        <img src={downarrow}  alt="downarrow" width={16}/>
                                    </div>
                                    <ul className={classes.selectList} aria-expanded={!(activeIdx === 5)}>
                                        <div className={classes.hidden}>
                                            {characteristic.map((data,idx)=><li key={idx} onClick={subCharacteristicSelect}>{data}</li>)}
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            <div className={classes.container}>
                                <div className={classes.selectBox}>
                                    <input className={classes.selectBtn} type="text" placeholder="수치" name='subAmount' value={subAmountValue} onChange={subAmountInput}/>
                                </div>
                            </div>
                        </div>
                        <div className={classes.box}>
                            <div className={classes.inner}>
                                <div>각인 효과*</div>
                                <div className={classes.container}>
                                    <div className={classes.selectBox} tabIndex={0} onBlur={closeHandler} onClick={engraveOpen}>
                                        <input className={classes.selectBtn} placeholder="선택" disabled={true} name="engrave" value={engraveValue}/>
                                        <img src={downarrow} alt="downarrow" width={16}/>
                                    </div>
                                    <ul className={classes.selectList} style={{display:engraveIsOpen ? 'block' : 'none',zIndex:4}}>
                                        <div className={classes.hidden}>
                                            {engraveArr.map((data,idx)=><li key={idx} onClick={engraveSelect}>{data}</li>)}
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            <div className={classes.updownBtn}>
                                <button type="button" onClick={()=>enAmountUpdown('DOWN')}>
                                    -
                                </button>
                                <input className={classes.selectBtn}  value={enAmount} onChange={enAmountInput} />
                                <button type="button" onClick={()=>enAmountUpdown('UP')}>
                                   +
                                </button >
                            </div>
                            <div className={classes.inner}>
                                <div>패널티*</div>
                                <div className={classes.container}>
                                    <div className={classes.selectBox} tabIndex={0} onBlur={closeHandler} onClick={penaltyOpen}>
                                        <input type="text" className={classes.selectBtn} placeholder='선택' disabled={true} value={penaltyValue} name="penalty" />
                                        <img src={downarrow} alt="downarrow" width={16}/>
                                    </div>
                                    <ul className={classes.selectList} style={{display:penaltyIsOpen ? 'block' :'none',zIndex:4}}>
                                        <div className={classes.hidden}>
                                            {penaltyArr.map((data,idx)=><li key={idx} onClick={penaltySelect}>{data}</li>)}
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            <div className={classes.updownBtn}>
                                <button type="button" onClick={()=>penaltyUpdownHandler('DOWN')}>
                                    -
                                </button>
                                <input className={classes.selectBtn} placeholder="3" disabled={true} />
                                <button type="button" onClick={()=>penaltyUpdownHandler('UP')}>
                                    +
                                </button >
                            </div>
                        </div>
                        <div className={classes.box}>
                            <div className={classes.inner}>
                                <div className={classes.container}>
                                    <div className={classes.selectBox} tabIndex={0} onBlur={closeHandler} onClick={subEngraveOpen}>
                                        <input className={classes.selectBtn} placeholder="선택" disabled={true} name="subEngrave" value={subEngraveValue}/>
                                        <img src={downarrow} alt="downarrow" width={16}/>
                                    </div>
                                    <ul className={classes.selectList} style={{display:subEngraveIsOpen ? 'block' : 'none'}}>
                                        <div className={classes.hidden}>
                                            {engraveArr.map((data,idx)=><li key={idx} onClick={subEngraveSelect}>{data}</li>)}
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            <div className={classes.updownBtn}>
                                <button type="button" onClick={()=>subEnAmountUpdown('DOWN')} >
                                    -
                                </button>
                                <input className={classes.selectBtn} placeholder="3" disabled={true} value={subEnAmount}/>
                                <button type="button" onClick={()=>subEnAmountUpdown('UP')}>
                                    +
                                </button>
                            </div>
                        </div>
                        <div className={classes.box}>
                            <div className={classes.inner}>
                                <div>판매가격*</div>
                                <div className={classes.container}>
                                    <div className={classes.selectBox}>
                                        <input className={classes.selectBtn} type="text" placeholder="가격" onChange={priceInput}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <ExchangeFormFooter previewImage={previewImage} setPreviewImage={setPreviewImage}/>
                    </div>
                </div>
            </form>
}
export default ExchangeForm;