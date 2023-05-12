import React, { useState } from 'react';
import classes from './Accordion.module.css';
const Accordion = ({ idx,activeIdx,isOpen }) => {
    //console.log(idx === activeIdx)
    return (
        <div className={`${classes.accordion}`} aria-expanded={ !isOpen}>
            <div className={classes.accordion_container}>
                <div className={classes.accordion_header}>
                    <h4>기타내용</h4>
                    <h4>이미지</h4>
                </div>
                <div className={classes.accordion_content}>
                    <div className={classes.content}>
                        <div className={classes.innerContent}>
                            <span>경매장에 올려놨어요!@</span>
                        </div>

                    </div>
                    <div className={classes.preview}>
                        <img src="https://i.pinimg.com/474x/61/73/bd/6173bdabb6bcde83fe0909a64883cef8.jpg" alt="img"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordion;
const DelayedContent = ({ delay, children }) => {
    const [showContent, setShowContent] = useState(false);

    setTimeout(() => {
        setShowContent(true);
    }, delay);

    return showContent ? children : null;
};
