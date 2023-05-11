const Progress = ({value})=>{
    let color = '';
    if(value >= 0 && 40 < value){
        color = '#FFE81D';
    }else if(value >= 40 && 70 > value){
        color = '#A0E71C';
    }else if(value >= 70 && 90 > value) {
        color = '#2AB1F6';
    }else if(value >= 90 && value < 100){
        color = '#8045DD'
    }else if(value === 100){
        color = '#F9AE00';
    }
    const progressStyle = {
        width:value,
        backgroundColor:color,
    }
    return <div style={{width:100,backgroundColor:'#CBCDD4'}}>
       <progress style={progressStyle}> </progress>
    </div>

}
export default Progress;