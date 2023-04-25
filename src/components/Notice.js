const Notice = ({notices})=>{
    return <>
        <ul>
            {notices.map(notice=><li key={Math.random()}><a href={notice.Link} target="_blank" rel="noopener noreferrer">{notice.Title}</a></li>)}
        </ul>
    </>
}
export default Notice;