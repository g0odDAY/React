const NameTagBox = ({value})=>{
    return <>
        <div dangerouslySetInnerHTML={{ __html: value.toLowerCase() }}></div>
    </>
}
export default NameTagBox;