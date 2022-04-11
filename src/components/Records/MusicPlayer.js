import React, { useState, useEffect, useRef } from "react";
import {
  FaPlay,
  FaStepForward,
  FaStepBackward,
  FaPause,
  FaTimes,
} from "react-icons/fa";
import { AiFillSound } from "react-icons/ai";
import { GoMute } from "react-icons/go";
import albumLogo from "../../Dekolt2021.jpg";

function MusicPlayer({ songID }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [songIndex, setSongIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const notInitialRender = useRef(false);
  const notInitialRenderList = useRef(false);
  const playerRef = useRef(null);
  const songs = ["Prezydent", "Pojebany Świat", "Ulica", "Antynazi"];
  const songRef = useRef(null);
  const titleRef = useRef(null);
  const progressRef = useRef(null);
  const volumeBarRef = useRef(null);

  useEffect(() => {
    if (notInitialRenderList.current) {
      loadSong(songs[songID]);
      setSongIndex(songID);
      resumeSong();
    } else {
      notInitialRenderList.current = true;
    }
  }, [songID]);

  useEffect(() => {
    songRef.current.volume = 0.5;
    updateVolume();
  }, []);

  useEffect(() => {
    loadSong(songs[songIndex]);
    if (notInitialRender.current) {
      resumeSong();
    } else {
      notInitialRender.current = true;
    }
  }, [songIndex]);

  const loadSong = (song) => {
    titleRef.current.textContent = song;
    songRef.current.src = `../music/${song}.mp3`;
  };

  const pauseSong = () => {
    setIsPlaying(false);
    songRef.current.pause();
  };

  const resumeSong = () => {
    setIsPlaying(true);
    songRef.current.play();
    playerRef.current.style.height = "auto";
    playerRef.current.style.overflow = "initial";
  };
  const nextSong = () => {
    setSongIndex(songIndex + 1);
    if (songIndex === songs.length - 1) {
      setSongIndex(0);
    }
  };
  const prevSong = () => {
    setSongIndex(songIndex - 1);
    if (songIndex <= 0) {
      setSongIndex(songs.length - 1);
    }
  };
  const updateProgress = (e) => {
    const { duration, currentTime } = e.target;
    const progressPercent = (currentTime / duration) * 100;
    progressRef.current.style.width = `${progressPercent}%`;
  };
  const setProgress = (e) => {
    const width = e.target.clientWidth;
    const clickX = e.clientX - e.target.offsetLeft;
    const duration = songRef.current.duration;
    songRef.current.currentTime = (clickX / width) * duration;
  };
  const updateVolume = () => {
    const volumePercentage = songRef.current.volume * 100;
    volumeBarRef.current.style.width = `${volumePercentage}%`;
  };
  const setVolume = (e) => {
    const width = e.target.clientWidth;
    const clickX = e.clientX - e.target.offsetLeft;
    songRef.current.volume = clickX / width;
    if (songRef.current.volume === 0) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
    updateVolume();
  };
  const mute = () => {
    songRef.current.volume = 0;
    setIsMuted(true);
    updateVolume();
  };
  const unMute = () => {
    songRef.current.volume = 0.5;
    setIsMuted(false);
    updateVolume();
  };
  const playerDisable = () => {
    playerRef.current.style.height = "0px";
    playerRef.current.style.overflow = "hidden";
    pauseSong();
  };

  return (
    <div className="music-player" ref={playerRef}>
      <audio
        src="./music/Byc Zawsze Soba.mp3"
        ref={songRef}
        onEnded={() => {
          nextSong();
        }}
        onTimeUpdate={(e) => {
          updateProgress(e);
        }}
      />
      <img src={albumLogo} alt="PunkForAllLogo" />
      <div className="media-controls">
        <div className="song-info">
          <h3 ref={titleRef}>Piosenka</h3>
        </div>
        <div
          className="progress"
          onClick={(e) => {
            setProgress(e);
          }}
        >
          <div className="progress-bar" ref={progressRef}></div>
        </div>
        <div className="controls">
          <FaStepBackward onClick={() => prevSong()} />
          {isPlaying ? (
            <FaPause onClick={() => pauseSong()} />
          ) : (
            <FaPlay onClick={() => resumeSong()} />
          )}
          <FaStepForward onClick={() => nextSong()} />
          {isMuted ? (
            <GoMute onClick={() => unMute()} />
          ) : (
            <AiFillSound onClick={() => mute()} />
          )}
          <div className="sound-bar" onClick={(e) => setVolume(e)}>
            <div className="sound-volume" ref={volumeBarRef}></div>
          </div>
        </div>
      </div>
      <FaTimes
        className="player-disable"
        onClick={() => {
          playerDisable();
        }}
      />
    </div>
  );
}
export default MusicPlayer;
