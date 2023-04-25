const Event = ({event})=>{
    return <>
        <li style={{listStyle:'none'}}>
            <h1>{event.Title}</h1>
            <a href={event.Link}  target="_blank" rel="noopener noreferrer"><img style={{width:"400px"}} src={event.Thumbnail} alt={event.Title} /></a>
        </li>
    </>
}
export default Event;