import React, { useRef, useState } from 'react';
import styled from 'styled-components';


const ScribeMusicPlayer = ({ src, trackTitle, artistName }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    const handleLoadedMetadata = () => {
        setDuration(audioRef.current.duration);
    };

    const handleVolumeChange = (e) => {
        const volume = e.target.value;
        setVolume(volume);
        audioRef.current.volume = volume;
    };

    const skipForward = () => {
        audioRef.current.currentTime = Math.min(currentTime + 10, duration);
    };

    const skipBackward = () => {
        audioRef.current.currentTime = Math.max(currentTime - 10, 0);
    };

    return (

        <Wrapper className="scribe-player">
            <div className="scribe-track-info">
                <h4 className='scribe-music-title'>{trackTitle}</h4>
                <p className='scribe-music-artist'>{artistName}</p>
            </div>
            <div className="scribe-controls">
                <button className="scribe-skip-button" onClick={skipBackward}>⏮</button>
                <button className="scribe-play-pause-button" onClick={togglePlayPause}>
                    {isPlaying ? '⏸' : '▶️'}
                </button>
                <button className="scribe-skip-button" onClick={skipForward}>⏭</button>
            </div>
            <div className="scribe-progress-container">
                <progress value={currentTime} max={duration}></progress>
                <span className="scribe-time">
                    {Math.floor(currentTime)} / {Math.floor(duration)} sec
                </span>
            </div>
            <div className="scribe-volume-control">
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                />
            </div>
            <audio
                ref={audioRef}
                src={src}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
            />
        </Wrapper>
    );
};

export default ScribeMusicPlayer;

const Wrapper = styled.div`
  /* ScribeMusicPlayer.css */

.scribe-player {
  display: flex;
  align-items: center;
  background-color: #282828;
  padding: 10px 20px;
  border-radius: 10px;
  color: white;
  width: 500px;
  font-family: Arial, sans-serif;
}

.scribe-track-info {
  flex: 2;
}

.scribe-track-info h4 {
  margin: 0;
  font-size: 16px;
  color: #1db954;
}

.scribe-track-info p {
  margin: 5px 0 0;
  font-size: 14px;
  color: #b3b3b3;
}

.scribe-controls {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.scribe-skip-button, .scribe-play-pause-button {
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
}

.scribe-skip-button:hover, .scribe-play-pause-button:hover {
  color: #1db954;
}

.scribe-progress-container {
  flex: 2;
  display: flex;
  align-items: center;
  margin: 0 20px;
}

.scribe-progress-container progress {
  width: 100%;
  height: 5px;
  background-color: #404040;
  border-radius: 5px;
  margin-right: 10px;
}

.scribe-progress-container .scribe-time {
  font-size: 12px;
  color: #b3b3b3;
}

.scribe-volume-control {
  flex: 1;
}

.scribe-volume-control input[type="range"] {
  width: 100%;
  -webkit-appearance: none;
  appearance: none;
  background-color: #404040;
  height: 5px;
  border-radius: 5px;
  cursor: pointer;
}

.scribe-volume-control input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 12px;
  height: 12px;
  background-color: #1db954;
  border-radius: 50%;
  cursor: pointer;
}

.scribe-volume-control input[type="range"]::-moz-range-thumb {
  width: 12px;
  height: 12px;
  background-color: #1db954;
  border-radius: 50%;
  cursor: pointer;
}

`;