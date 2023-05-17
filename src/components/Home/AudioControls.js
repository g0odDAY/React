import classes from './AudioControls.module.css';
import {TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled} from "react-icons/tb";
import {ImNext} from "react-icons/im";
import {BsStopCircleFill} from "react-icons/bs";
const AudioControls = ({isPlaying,onPlayPauseClick,onPrevClick,onNextClick})=>{
    return (
        <div className={classes.audioControls}>
            <button
                type="button"
                className={classes.prev}
                aria-label="Previous"
                onClick={onPrevClick}
            >
                <TbPlayerTrackPrevFilled />
            </button>
            {isPlaying ? (
                <button
                    type="button"
                    className={classes.pause}
                    onClick={() => onPlayPauseClick(false)}
                    aria-label="Pause"
                >
                    <BsStopCircleFill />
                </button>
            ) : (
                <button
                    type="button"
                    className={classes.pause}
                    onClick={() => onPlayPauseClick(true)}
                    aria-label="Play"
                >
                    <ImNext />
                </button>
            )}
            <button
                type="button"
                className={classes.next}
                aria-label="Next"
                onClick={onNextClick}
            >
                <TbPlayerTrackNextFilled color='black' />
            </button>
        </div>
    )
}
export default AudioControls;