import classes from './AudioPlayer.module.css';
import {useEffect, useRef, useState} from "react";
import {getStorage,ref,listAll} from "firebase/storage";
import { getApp } from "firebase/app";
import AudioControls from "./AudioControls";
import Backdrop from "./Backdrop";
const AudioPlayer = ()=>{
    const [tracks,setTracks] = useState([]);


    useEffect( ()=>{
        fetch('https://curious-furnace-340706-default-rtdb.firebaseio.com/music.json')
            .then(res=>{
                return res.json();
            }).then(data=>{
            console.log('tracks',data);
            const loadedItems = [];

            for(const key in data){
                loadedItems.push({
                    id:key,
                    title:data[key].title,
                    sourceUrl:data[key].sourceUrl,
                    thumbnail:data[key].thumbnail
                })
            }
            setTracks(loadedItems);
        })
    },[])
    const startTimer = () => {
        // Clear any timers already running
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            if (audioRef.current.ended) {
                toNextTrack();
            } else {
                setTrackProgress(audioRef.current.currentTime);
            }
        }, [1000]);
    }
    const onScrub = (value) => {
        // Clear any timers already running
        clearInterval(intervalRef.current);
        audioRef.current.currentTime = value;
        setTrackProgress(audioRef.current.currentTime);
    }

    const onScrubEnd = () => {
        // If not already playing, start
        if (!isPlaying) {
            setIsPlaying(true);
        }
        startTimer();
    }
    const [trackIndex, setTrackIndex] = useState(0);
    const currentTrack = tracks[trackIndex];
    const {title,sourceUrl,thumbnail} = currentTrack || {};

    const [trackProgress, setTrackProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio(sourceUrl));
    const intervalRef = useRef();
    const isReady = useRef(false);

    // Destructure for conciseness
    const { duration } = audioRef.current;

    const toPrevTrack = () => {
        console.log('TODO go to prev');
        if (trackIndex - 1 < 0) {
            setTrackIndex(tracks.length - 1);
        } else {
            setTrackIndex(trackIndex - 1);
        }
    }
    useEffect(() => {
        if (isPlaying) {

            audioRef.current.play();
            startTimer();
        } else {
            clearInterval(intervalRef.current);
            audioRef.current.pause();
        }
    }, [isPlaying]);
    useEffect(() => {
        audioRef.current.pause();

        audioRef.current = new Audio(sourceUrl);
        setTrackProgress(audioRef.current.currentTime);

        if (isReady.current) {
            audioRef.current.play().then(r => r);
            setIsPlaying(true);
            startTimer();
        } else {
            // Set the isReady ref as true for the next pass
            isReady.current = true;
        }
    }, [trackIndex]);
    useEffect(() => {
        // Pause and clean up on unmount
        return () => {
            audioRef.current.pause();
            clearInterval(intervalRef.current);
        }
    }, []);

    // Handle setup when changing tracks

    const toNextTrack = () => {
        console.log('TODO go to next');
        if (trackIndex < tracks.length - 1) {
            setTrackIndex(trackIndex + 1);
        } else {
            setTrackIndex(0);
        }
    }


    const currentPercentage = duration ? `${(trackProgress / duration) * 100}%` : '0%';
    const trackStyling = `
  -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
`;
    return (
        <div className={classes.audioPlayer}>
            <div className={classes.trackInfo}>
                <img className={classes.artwork} src={thumbnail} alt={title}/>
                <h3 className={classes.title}>{title}</h3>
                <AudioControls
                    isPlaying={isPlaying}
                    onPrevClick={toPrevTrack}
                    onNextClick={toNextTrack}
                    onPlayPauseClick={setIsPlaying}
                />
                <input
                    type="range"
                    value={trackProgress}
                    step="1"
                    min="0"
                    max={duration ? duration : `${duration}`}
                    className="progress"
                    onChange={(e) => onScrub(e.target.value)}
                    onMouseUp={onScrubEnd}
                    onKeyUp={onScrubEnd}
                    style={{background:trackStyling}}
                />
            </div>
            <Backdrop
                trackIndex={trackIndex}
                activeColor={'purple'}
                isPlaying={isPlaying}
            />
        </div>
    );
}
export default AudioPlayer;