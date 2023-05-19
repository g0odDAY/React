const ItemPartBox = ({value})=> {
    console.log(value.value.Element_001);
    const spanStyle={
        fontSize:'12px',
        color:'black',
        backgroundColor:'#e6e8ec',
        padding:'.125rem',
        borderRadius:'4px',
    }
    return <span style={spanStyle} dangerouslySetInnerHTML={{ __html: value.value.Element_001.toLowerCase() }}></span>
}
export default ItemPartBox;