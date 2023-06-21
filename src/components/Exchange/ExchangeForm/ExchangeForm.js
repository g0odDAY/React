import classes from './ExchangeForm.module.css';
import downarrow from '../free-arrow-down-icon-3101-thumb.png';
import {useState} from "react";
import ExchangeFormFooter from "./ExchangeFormFooter/ExchangeFormFooter";
import useExchangeForm from "../hooks/useExchangeForm";
import {FaMinus, FaPlus} from "react-icons/fa";


const ExchangeForm = ()=>{
    const serverArr = ['루페온','아브렐슈드','카제로스','카마인','니나브','실리안','카단','아만'];
    const categoryArr=['장신구-목걸이','장신구-귀걸이','장신구-반지'];
    const itemArr = [{type:'necklace',name:'거룩한 수호자의 목걸이'},{type:'necklace',name:'거룩한 선지자의 목걸이'},{type:'necklace',name:'공허한 운명의 목걸이'},{type:'necklace',name:'공허한 미래의 목걸이'},{type:'necklace',name:'참혹한 파멸의 목걸이'},{type:'necklace',name:'참혹한 쇠락의 목걸이'}]
    const engraveArr = ['각성','강령술','결투의 대가','구슬동자','굳은 의지','급소 타격','기습의 대가','긴급 구조','달인의 저력'];
    const penaltyArr = ['공격력 감소','공격속도 감소','방어력 감소','이동속도 감소'];
    const [previewImage,setPreviewImage] = useState('');

    const [activeIdx,setActiveIdx]=useState(null);
    const {selectedOptions,characteristicOptions,formData,error,selectHandler,selectOptionHandler,inputHandler,updownHandler,submitHandler}=useExchangeForm();
    const openHandler = (idx)=>{
        if(idx === activeIdx){
            setActiveIdx(null);
        }else{
            setActiveIdx(idx);
        }
    }
    const closeHandler = ()=>{
        setActiveIdx(null);
    }


    return <form onSubmit={submitHandler}>
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
                                    <div className={`${classes.selectBox} ${error.server ? classes.error:null}`} tabIndex={0} onBlur={closeHandler} onClick={()=>openHandler(0)}>
                                        <input
                                            className={classes.selectBtn}
                                            placeholder="서버"
                                            name='server'
                                            disabled
                                            value={formData.server}
                                        />
                                        <img src={downarrow}  alt="downarrow" width={16}/>
                                    </div>
                                    <ul className={classes.selectList} aria-expanded={!(activeIdx === 0)}>
                                        <div className={classes.hidden}>
                                            {serverArr.map((data,idx)=><li key={idx} onClick={(e)=>selectHandler(e,'server')}>{data}</li>)}
                                        </div>
                                    </ul>
                                    {error.server && <span className={classes.error_message}>{error.server}</span>}
                                </div>
                            </div>
                            <div className={classes.inner}>
                                <div>카테고리*</div>
                                <div className={classes.container}>
                                    <div className={`${classes.selectBox} ${error.category ? classes.error:null}`} tabIndex={0} onBlur={closeHandler} onClick={()=>openHandler(1)}>
                                        <input
                                            className={classes.selectBtn}
                                            placeholder="카테고리"
                                            name='category'
                                            disabled
                                            value={formData.category}
                                        />
                                        <img src={downarrow}  alt="downarrow" width={16}/>
                                    </div>
                                    <ul className={classes.selectList} aria-expanded={!(activeIdx === 1)}>
                                        <div className={classes.hidden}>
                                            {categoryArr.map((data,idx) => <li key={idx} onClick={(e)=>selectHandler(e,'category')}>{data}</li>)}
                                        </div>
                                    </ul>
                                    {error.category && <span className={classes.error_message}>{error.category}</span>}
                                </div>
                            </div>
                        </div>
                    <hr/>
                    <div className={classes.body}>
                        <div className={classes.box}>
                            <div className={classes.inner}>
                                <div>아이템 이름*</div>
                                <div className={classes.container}>
                                    <div className={`${classes.selectBox} ${error.itemName ? classes.error:null}`} tabIndex={0} onBlur={closeHandler} onClick={()=>openHandler(3)}>
                                        <input
                                            className={classes.selectBtn}
                                            placeholder="아이템 이름"
                                            name='itemName'
                                            disabled
                                            value={formData.itemName}
                                        />
                                        <img src={downarrow}  alt="downarrow" width={16}/>
                                    </div>
                                    <ul className={classes.selectList} aria-expanded={!(activeIdx === 3)}>
                                        <div className={classes.hidden}>
                                            {itemArr.map((data,idx)=> <li key={idx} onClick={(e)=>selectHandler(e,'itemName')}>{data.name}</li>)}
                                        </div>
                                    </ul>
                                    {error.itemName && <span className={classes.error_message}>{error.itemName}</span>}
                                </div>
                            </div>
                            <div className={classes.inner}>
                                <div>품질*</div>
                                <div className={classes.container}>
                                    <div className={`${classes.selectBox} ${error.quality ? classes.error:null}`}>
                                        <input
                                            className={classes.selectBtn}
                                            placeholder="품질"
                                            name='quality'
                                            maxLength={3}
                                            inputMode='numeric'
                                            pattern='[0-9,\.]*'
                                            onChange={(e)=>inputHandler(e,'quality')}
                                        />
                                    </div>
                                    {error.quality && <span className={classes.error_message}>{error.quality}</span>}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>전투 특성*{selectedOptions.map((data,idx)=><span key={idx}>{data}</span>)}</div>
                            <div className={classes.box}>
                                <div className={classes.inner}>

                                    <div className={`${classes.container}`}>
                                        <div className={`${classes.selectBox} ${error.characteristic ? classes.error:null}`} tabIndex={0} onBlur={closeHandler} onClick={()=>openHandler(4)}>
                                            <input
                                                className={classes.selectBtn}
                                                placeholder="선택"
                                                name='characteristic'
                                                disabled
                                                value={formData.characteristic}
                                            />
                                            <img src={downarrow}  alt="downarrow" width={16}/>
                                        </div>
                                        <ul className={classes.selectList} aria-expanded={!(activeIdx === 4)}>
                                            <div className={classes.hidden}>
                                                {characteristicOptions.map((data,idx)=><li key={idx} onClick={(e)=>selectOptionHandler(e,'characteristic')}>{data}</li>)}
                                            </div>
                                        </ul>
                                        {error.characteristic && <span className={classes.error_message}>{error.characteristic}</span>}
                                    </div>
                                </div>
                                <div className={classes.container}>
                                    <div className={`${classes.selectBox} ${error.characteristic_amount ? classes.error:null}`}>
                                        <input
                                            className={classes.selectBtn}
                                            placeholder="수치"
                                            onChange={(e)=>inputHandler(e,'characteristic_amount')}
                                            name='characteristic_amount'/>
                                    </div>
                                    {error.characteristic_amount && <span className={classes.error_message}>{error.characteristic_amount}</span>}
                                </div>
                            </div>
                            {formData.category==='장신구-목걸이'?<div className={classes.box}>
                                <div className={classes.inner}>
                                    <div className={classes.container}>
                                        <div
                                            className={`${classes.selectBox} ${error.sub_characteristic ? classes.error : null}`}
                                            tabIndex={0} onBlur={closeHandler} onClick={() => openHandler(5)}>
                                            <input
                                                className={classes.selectBtn}
                                                placeholder="선택"
                                                name='sub_characteristic'
                                                disabled
                                                value={formData.sub_characteristic}
                                            />
                                            <img src={downarrow} alt="downarrow" width={16}/>
                                        </div>
                                        <ul className={classes.selectList} aria-expanded={!(activeIdx === 5)}>
                                            <div className={classes.hidden}>
                                                {characteristicOptions.map((data, idx) => <li key={idx}
                                                                                              onClick={(e) => selectOptionHandler(e, 'sub_characteristic')}>{data}</li>)}
                                            </div>
                                        </ul>
                                        {error.sub_characteristic &&
                                            <span className={classes.error_message}>{error.sub_characteristic}</span>}
                                    </div>
                                </div>
                                <div className={classes.container}>
                                    <div
                                        className={`${classes.selectBox} ${error.sub_characteristic_amount ? classes.error : null}`}>
                                        <input
                                            className={classes.selectBtn}
                                            placeholder="수치"
                                            onChange={(e) => inputHandler(e, 'sub_characteristic_amount')}
                                            name='sub_characteristic_amount'
                                        />
                                    </div>
                                    {error.sub_characteristic_amount &&
                                        <span className={classes.error_message}>{error.sub_characteristic_amount}</span>}
                                </div>
                            </div>:null}
                        </div>

                        <div>
                            <div>각인 효과*</div>
                            <div className={classes.box}>
                                <div className={classes.inner}>
                                    <div className={classes.container}>
                                        <div className={`${classes.selectBox} ${error.engrave ? classes.error:null}`} tabIndex={0} onBlur={closeHandler} onClick={()=>openHandler(6)} >
                                            <input
                                                className={classes.selectBtn}
                                                placeholder="선택"
                                                disabled
                                                name="engrave"
                                                value={formData.engrave}
                                            />
                                            <img src={downarrow} alt="downarrow" width={16}/>
                                        </div>
                                        <ul className={classes.selectList} aria-expanded={!(activeIdx === 6)}>
                                            <div className={classes.hidden} >
                                                {engraveArr.map((data,idx)=><li key={idx} onClick={(e)=>selectHandler(e,'engrave')}>{data}</li>)}
                                            </div>
                                        </ul>
                                        {error.engrave && <span className={classes.error_message}>{error.engrave}</span>}
                                    </div>
                                </div>
                                <div className={`${classes.updownBtn} ${error.engrave_amount ? classes.error:null}`}>
                                    <button type="button" onClick={()=>updownHandler('DOWN','engrave_amount')}>
                                        <FaMinus size={15} color='#d0d0d0'/>
                                    </button>
                                    <input
                                        className={classes.selectBtn}
                                        disabled
                                        placeholder={'0'}
                                        onChange={(e)=>inputHandler(e,'engrave_amount')}
                                        value={formData.engrave_amount}
                                    />
                                    <button type="button" onClick={()=>updownHandler('UP','engrave_amount')}>
                                        <FaPlus size={15} color='#d0d0d0'/>
                                    </button >
                                </div>
                                <div>
                                    <div>패널티*</div>
                                    <div className={classes.inner}>

                                        <div className={classes.container}>
                                            <div className={`${classes.selectBox} ${error.penalty ? classes.error:null}`} tabIndex={0} onBlur={closeHandler} onClick={()=>openHandler(7)}>
                                                <input
                                                    className={classes.selectBtn}
                                                    placeholder='선택'
                                                    name="penalty"
                                                    disabled
                                                    value={formData.penalty}
                                                />
                                                <img src={downarrow} alt="downarrow" width={16}/>
                                            </div>
                                            <ul className={classes.selectList} aria-expanded={!(activeIdx === 7)}>
                                                <div className={classes.hidden}>
                                                    {penaltyArr.map((data,idx)=><li key={idx} onClick={(e)=>selectHandler(e,'penalty')}>{data}</li>)}
                                                </div>
                                            </ul>
                                            {error.penalty && <span className={classes.error_message}>{error.penalty}</span>}
                                        </div>
                                    </div>
                                    <div className={`${classes.updownBtn} ${error.penalty_amount ? classes.error:null}`}>
                                        <button type="button" onClick={()=>updownHandler('DOWN','penalty_amount')}>
                                            <FaMinus size={15} color='#d0d0d0'/>
                                        </button>
                                        <input
                                            className={classes.selectBtn}
                                            disabled
                                            placeholder={'0'}
                                            value={formData.penalty_amount}
                                        />
                                        <button type="button" onClick={()=>updownHandler('UP','penalty_amount')}>
                                            <FaPlus size={15} color='#d0d0d0'/>
                                        </button >
                                    </div>
                                </div>
                                </div>

                        </div>

                        <div className={classes.box}>
                            <div className={classes.inner}>
                                <div className={classes.container}>
                                    <div className={`${classes.selectBox} ${error.sub_engrave ? classes.error:null}`} tabIndex={0} onBlur={closeHandler}  onClick={()=>openHandler(8)}>
                                        <input
                                            className={classes.selectBtn}
                                            placeholder="선택"
                                            disabled
                                            name="sub_engrave"
                                            value={formData.sub_engrave}
                                        />
                                        <img src={downarrow} alt="downarrow" width={16}/>
                                    </div>
                                    <ul className={classes.selectList} aria-expanded={!(activeIdx === 8)}>
                                        <div className={classes.hidden}>
                                            {engraveArr.map((data,idx)=><li key={idx} onClick={(e)=>selectHandler(e,'sub_engrave')}>{data}</li>)}
                                        </div>
                                    </ul>
                                    {error.sub_engrave && <span className={classes.error_message}>{error.sub_engrave}</span>}
                                </div>
                            </div>
                            <div className={`${classes.updownBtn} ${error.sub_engrave_amount ? classes.error:null}`}>
                                <button type="button" onClick={()=>updownHandler('DOWN','sub_engrave_amount')} >
                                    <FaMinus size={15} color='#d0d0d0'/>
                                </button>
                                <input
                                    className={classes.selectBtn}
                                    readOnly
                                    value={formData.sub_engrave_amount}
                                />
                                <button type="button" onClick={()=>updownHandler('UP','sub_engrave_amount')}>
                                    <FaPlus size={15} color='#d0d0d0'/>
                                </button>
                            </div>
                        </div>
                        <div className={classes.box}>
                            <div className={classes.inner}>
                                <div>판매가격*</div>
                                <div className={classes.container}>
                                    <div className={`${classes.selectBox} ${error.price ? classes.error:null}`}>
                                        <input
                                            className={classes.selectBtn}
                                            placeholder="가격"
                                            value={formData.price}
                                            onChange={(e)=>inputHandler(e,'price')}
                                        />
                                    </div>
                                    {error.price && <span className={classes.error_message}>{error.price}</span>}
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