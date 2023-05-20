const ProgressBar = (props)=>{
    const {bgColor,completed} = props;
    const containerStyles = {
        display:'inline-block',
        width: '140px',
        height:'8px',
        backgroundColor:'#d0d0d0',
        margin: `0 0.5rem`
    }
    const fillerStyles={
        height: 'inherit',
        backgroundColor: bgColor,
        width :`${completed}%`,
        borderRadius: 'inherit',
        transition:'width 1s',
    }
    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
            </div>
        </div>
    )
}
export default ProgressBar;