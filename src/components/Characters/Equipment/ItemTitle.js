import ProgressBar from "../../../ui/ProgressBar";
import {useEffect, useState} from "react";

const ItemTitle = ({value})=>{
    const {leftStr1, qualityValue} = value;

    let color;

    switch (true) {
        case qualityValue === '':
            color = ''; // 원하는 초기 상태 값으로 설정
            break;
        case qualityValue > 0 && qualityValue < 30:
            color = '#FFE81D';
            break;
        case qualityValue >= 30 && qualityValue < 70:
            color = '#a0e71c';
            break;
        case qualityValue >= 70 && qualityValue < 90:
            color = '#2ab1f6';
            break;
        case qualityValue >= 90 && qualityValue < 100:
            color = '#8045dd';
            break;
        case qualityValue === 100:
            color = '#F9AE00';
            break;
        default:
            color = ''; // 처리하지 못한 상태에 대한 초기 값 설정
            break;
    }
    const labelStyle={
        fontSize: '12px',
        padding:'.25rem',
        backgroundColor:'#e6e8ec',
        borderRadius:'4px',

    }
    const spanStyle = {
        fontSize:'12px',
        fontWeight:'bold',
        color
    }
    return <span style={spanStyle}>{qualityValue}<ProgressBar bgColor={color} completed={qualityValue}/></span>





}
export default ItemTitle;