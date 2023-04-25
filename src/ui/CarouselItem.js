import classes from './CarouselItem.module.css';
const CarouselItem = ({items})=>{
    return <>
    <li className={classes.carouselItem}>
            <a href={items.Link} target="_blank" rel="noopener noreferrer">
                <img className={classes.carouselImg} src={items.Thumbnail} alt="img"/>
            </a>
    </li>
    </>
}
export default CarouselItem;