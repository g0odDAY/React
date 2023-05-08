import classes from './MarketForm.module.css';
import downarrow from '../free-arrow-down-icon-3101-thumb.png';
import {useEffect, useRef, useState} from "react";
import {GrTrash} from "react-icons/gr";
import {BsPlusSquareDotted} from "react-icons/bs";
import MarketFormFooter from "./MarketFormFooter/MarketFormFooter";
const MarketForm = ()=>{
    const serverArr = ['루페온','아브렐슈드','카제로스','카마인','니나브','실리안','카단','아만'];
    const categoryArr=['장신구-목걸이','장신구-귀걸이','장신구-반지','장신구-팔찌','보석'];
    const itemArr = [{type:'necklace',name:'거룩한 수호자의 목걸이'},{type:'necklace',name:'거룩한 선지자의 목걸이'},{type:'necklace',name:'공허한 운명의 목걸이'},{type:'necklace',name:'공허한 미래의 목걸이'},{type:'necklace',name:'참혹한 파멸의 목걸이'},{type:'necklace',name:'참혹한 쇠락의 목걸이'}]
    const [isOpen,setIsOpen] = useState({
        server:false,
        category:false,
        grade:false,
        item:false,
        characteristic1:false,
        characteristic2:false,
        engrave1:false,
        engrave2:false,
        penalty:false,
        bargainYN:false
    })

    const inputRef= useRef([]);

    const handleClick = (e) =>{

        // const targetElement = e.target;
        // console.log(targetElement.classList)
        // // 특정 클래스를 가진 요소인지 확인
        // if (targetElement.classList.contains('selectBox')) {
        //     // 특정 클래스를 가진 요소를 제외한 다른 요소를 클릭한 경우에만 이벤트 처리
        //     console.log('다른 요소를 클릭했습니다.');
        //     // 여기서 원하는 이벤트 처리를 수행합니다.
        //     setIsOpen({
        //         sever:false,
        //         category: false
        //     })
        // }
    }

    useEffect(()=>{
        document.addEventListener('click',handleClick);
        return ()=>{
            document.removeEventListener('click',handleClick);
        }
    },[])
    const openHandler = (e,type,refNumber)=>{
        console.log(e.target.innerText,type,refNumber,inputRef.current[refNumber]);
        if(refNumber !== undefined){
            inputRef.current[refNumber].value=e.target.innerText;
        }

        setIsOpen((prevState)=>{
            return{
                ...prevState,
                [type]:!prevState[type]
            }
        })
    }
    function handleChange(e,refNumber) {
        if(!isNaN(e.target.value)){
            console.log(true);
            inputRef.current[refNumber] = e.target.value;
        }

    }
    return <div className={classes.wrapper}>
        <div>
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
                        <div className={classes.selectBox} onClick={(event)=>openHandler(event,'server',0)}>
                            <input className={classes.selectBtn} placeholder="서버명" ref={el =>(inputRef.current[0]=el)} disabled={true}/>
                            <img src={downarrow}  alt="downarrow" width={16}/>
                        </div>
                        <ul className={classes.selectList} style={{display:isOpen.server ? 'block' : 'none'}}>
                            <div className={classes.hidden}>
                                {serverArr.map((data,idx) => <li key={idx} onClick={(event)=>openHandler(event,'server',0)}>{data}</li>)}
                            </div>
                        </ul>
                    </div>
                </div>
                <div className={classes.inner}>
                    <div>카테고리*</div>
                    <div className={classes.container}>
                        <div className={classes.selectBox} onClick={(event)=>openHandler(event,'category',1)}>
                            <input type="text" className={classes.selectBtn} placeholder="카테고리" ref={el =>(inputRef.current[1]=el)} disabled={true}/>
                            <img src={downarrow}  alt="downarrow" width={16}/>
                        </div>
                        <ul className={classes.selectList} style={{display:isOpen.category ? 'block' : 'none'}}>
                            <div className={classes.hidden}>
                                {categoryArr.map((data,idx) => <li key={idx} onClick={(event)=>openHandler(event,'category',1)}>{data}</li>)}
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <hr/>
        <div className={classes.body}>

            <div className={classes.box}>
                <div className={classes.inner}>
                    <div>등급*</div>
                    <div className={classes.container}>
                        <div className={classes.selectBox} onClick={(event)=>openHandler(event,'grade',2)}>
                            <input className={classes.selectBtn} placeholder="등급" disabled={true} ref={el =>(inputRef.current[2]=el)}/>
                            <img src={downarrow}  alt="downarrow" width={16}/>
                        </div>
                        <ul className={classes.selectList} style={{display:isOpen.grade ? 'block' : 'none'}}>
                            <div className={classes.hidden}>
                                <li onClick={(event)=>openHandler(event,'grade',2)}>유물</li>
                                <li onClick={(event)=>openHandler(event,'grade',2)}>고대</li>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className={classes.inner}>
                    <div>아이템 이름*</div>
                    <div className={classes.container}>
                        <div className={classes.selectBox} onClick={(event)=>openHandler(event,'item',3)}>
                            <input className={classes.selectBtn} placeholder="아이템 이름" disabled={true} ref={el =>(inputRef.current[3]=el)}/>
                            <img src={downarrow}  alt="downarrow" width={16}/>
                        </div>
                        <ul className={classes.selectList} style={{display:isOpen.item ? 'block' : 'none'}}>
                            <div className={classes.hidden}>
                                {itemArr.map((data,idx)=> <li key={idx} onClick={(event)=>openHandler(event,'item',3)}>{data.name}</li>)}
                            </div>
                        </ul>
                    </div>
                </div>
                <div className={classes.inner}>
                    <div>품질*</div>
                    <div className={classes.container}>
                        <div className={classes.selectBox}>
                            <input className={classes.selectBtn} type="text" placeholder="품질" required={true} ref={el => (inputRef.current[4]=el)} onKeyDown={ (e) => ['e', 'E', '-', '+'].includes(e.key) && e.preventDefault() }/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.box}>
                <div className={classes.inner}>
                    <div>전투 특성*</div>
                    <div className={`${classes.container}`}>
                        <div className={classes.selectBox}>
                            <input className={classes.selectBtn} placeholder="선택" disabled={true} required/>
                            <img src={downarrow}  alt="downarrow" width={16}/>

                        </div>
                        <ul className={classes.selectList}>

                        </ul>
                    </div>
                    <input type="text" placeholder="수치"/>
                </div>
            </div>
            <ul>
                <li>323434rfdsfdsfsdff</li>
                <li>323434rfdsfdsfsdff</li>
                <li>323434rfdsfdsfsdff</li>
                <li>323434rfdsfdsfsdff</li>
                <li>323434rfdsfdsfsdff</li>
                <li>323434rfdsfdsfsdff</li>
                <li>323434rfdsfdsfsdff</li>
                <li>323434rfdsfdsfsdff</li>
                <li>323434rfdsfdsfsdff</li>
                <li>323434rfdsfdsfsdff</li>
                <li>323434rfdsfdsfsdff</li>
                <li>323434rfdsfdsfsdff</li>
                <li>323434rfdsfdsfsdff</li>
                <li>323434rfdsfdsfsdff</li>
                <li>323434rfdsfdsfsdff</li>
                <li>323434rfdsfdsfsdff</li>
                <li>323434rfdsfdsfsdff</li>
                <li>323434rfdsfdsfsdff</li>
                <li>323434rfdsfdsfsdff</li>
                <li>323434rfdsfdsfsdff</li>
            </ul>
            <hr/>
            <MarketFormFooter/>
        </div>

    </div>
}
export default MarketForm;