import React, { useState, useEffect } from 'react';
import useInterval from "../../../../hooks/use-interval";
import classes from './Timer.module.css';
const Timer = ({schedules,content}) => {
    const [remainingTime, setRemainingTime] = useState('');
    const arr = ['11:00:00','13:00:00','19:00:00','21:00:00','23:00:00'];
    useInterval(() => {
        const data = schedules ? schedules : arr;
        const now = new Date();
        const times = data.map((t) => new Date(`${now.toDateString()} ${t}`));
        const validTimes = times.filter((t) => t > now);
        const remaining = validTimes.length > 0 ? validTimes[0] - now : null;
        setRemainingTime(remaining);
    }, 1000);

    const renderRemainingTime = () => {
        if (!remainingTime) {
            return <span className={classes.none}>자리 비움</span>;
        }

        const seconds = Math.floor(remainingTime / 1000) % 60;
        const minutes = Math.floor(remainingTime / 1000 / 60) % 60;
        const hours = Math.floor(remainingTime / 1000 / 60 / 60);

        return (
            <span className={`${classes.timer} ${content ? classes[content] : ''}`}>
                {hours > 0 && `${hours}시간 `}
                {minutes > 0 && `${minutes}분 `}
                {seconds > 0 && `${seconds}초 `}
                남음
            </span>
        );
    };

    return <>{renderRemainingTime()}</>;
};

export default Timer;
