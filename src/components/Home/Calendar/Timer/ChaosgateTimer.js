import {useEffect, useState} from "react";

const ChaosgateTimer = ({schedules})=>{
    console.log(schedules);
    const [remainingTime, setRemainingTime] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date(); // 현재 시간
            const futureTimes = schedules
                .map(timeString => new Date(timeString))
                .filter(time => time > now); // 현재 시간 이후의 시간들만 필터링

            if (futureTimes.length === 0) {
                clearInterval(interval);
                setRemainingTime(null);
                return;
            }

            const closestTime = futureTimes.reduce((a, b) => (a - now) < (b - now) ? a : b);
            const timeDifference = closestTime - now;

            const secondsRemaining = Math.floor(timeDifference / 1000); // 남은 시간을 초로 변환

            setRemainingTime(secondsRemaining);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [schedules]);

    return (
        <div>
            {remainingTime !== null ? (
                <span>남은 시간: {remainingTime}초</span>
            ) : (
                <span>더 이상 남은 시간이 없습니다.</span>
            )}
        </div>
    );
}
export default ChaosgateTimer;