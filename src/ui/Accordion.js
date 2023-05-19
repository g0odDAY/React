
import classes from './Accordion.module.css';
const Accordion = (props) => {
    return (
        <div className={classes.accordion} aria-expanded={!props.isOpen}>
            {props.children}
        </div>
    );
};

export default Accordion;
