import React, { useState, useEffect, useRef } from "react";
import "./sect3.css";
import { musicData } from "./music";
import Svgs from "../Svgs.jsx";
// import ReactAudioPlayer from "react-audio-player";
import gsap from "gsap";

export default function Sect3() {
  // & music svg stuff
  const [svgWidth, setSvgWidth] = useState(80);

  // & song
  const [track, setTrack] = useState();
  const [audio, setAudio] = useState(new Audio());
  const [play, setPlay] = useState(false);

  // ^ gsap
  const tl = useRef();

  // ! set song
  const songSelect = (e) => {
    setTrack(e);
    audio.pause();
    tl.current.clear();
    setPlay(true);

    const newAudio = new Audio(e.mp3);
    setAudio(newAudio);

    tl.current
      .set(".soundProg", {
        duration: 0,
        strokeDashoffset: 100,
      })
      .to(".soundProg", {
        strokeDashoffset: 0,
        duration: e.dur,
      });

    tl.current.restart();

    newAudio.play();
  };

  const pauseSong = () => {
    if (audio.paused) {
      tl.current.resume();
      audio.play();
      setPlay(true);
    } else {
      tl.current.pause();
      audio.pause();
      setPlay(false);
    }
  };

  const seek = (e) => {
    if (e === "add") {
      if (audio.currentTime + 10 < audio.duration) {
        audio.currentTime += 10;
      }
      tl.current.seek(tl.current._time + 10);
    } else if (e === "sub") {
      if (audio.currentTime > 10) {
        audio.currentTime -= 10;
        tl.current.seek(tl.current._time - 10);
      } else if (audio.currentTime < 10) {
        audio.currentTime = 0;
        tl.current.restart();
      }
    }
  };

  useEffect(() => {
    tl.current = gsap.timeline({
      defaults: {
        ease: "none",
      },
    });
  }, []);

  return (
    <div className='sect3Wrap'>
      <Svgs />
      <div className='sect3Bg'>
        <div className='sect3Flex'>
          <div className='sect3Left'>
            <span className='white musicSubhead'>
              <svg
                width='100'
                height='100'
                xmlns='http://www.w3.org/2000/svg'
                className='parentSoundProg'
              >
                <circle
                  cx='50'
                  cy='50'
                  r='43'
                  className='soundProg'
                  pathLength='100'
                  strokeDashoffset='100'
                  strokeDasharray='100'
                />
              </svg>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                className='musicSym'
                width='80'
                height='80'
              >
                <use href='#musicSym'></use>
              </svg>
            </span>
            <div className='player'>
              <span className='songTitle displayFont displaySmall'>
                {track ? track.name : <em>Choose a song</em>}
              </span>
              {/* audio controls  */}
              <div className='audioControls'>
                <span className='minus10' onClick={() => seek("sub")}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                    width='56'
                    height='42'
                  >
                    <use href='#minus10'></use>
                  </svg>
                </span>
                <span
                  className='playPause material-symbols-outlined'
                  onClick={() => pauseSong()}
                >
                  {play ? (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      className='playBtn'
                      width='44'
                      height='60'
                    >
                      <use href='#pauseBtn'></use>
                    </svg>
                  ) : (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      className='playBtn'
                      width='47'
                      height='60'
                    >
                      <use href='#playBtn'></use>
                    </svg>
                  )}
                </span>
                <span className='plus10' onClick={() => seek("add")}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                    width='56'
                    height='42'
                  >
                    <use href='#plus10'></use>
                  </svg>
                </span>
              </div>

              {/* <audio controls autoPlay src={track && track.mp3}></audio> */}
            </div>
          </div>
          <div className='sect3Right'>
            {musicData.map((e, index) => {
              const num = index + 1;
              return (
                <div
                  className='song copyFont'
                  key={e.name}
                  onClick={() => songSelect(e)}
                >
                  <span className='songPlaying'>
                    <div
                      className='activeSong'
                      style={
                        track !== undefined && track.name === e.name
                          ? { opacity: "1" }
                          : {}
                      }
                    ></div>
                  </span>
                  <span className='songNum'>{num < 10 ? `0${num}` : num}</span>
                  <span
                    className='songName'
                    style={
                      track !== undefined && track.name === e.name
                        ? { textShadow: "0px 0px 8px #ffffff", opacity: "1" }
                        : {}
                    }
                  >
                    {e.name}
                  </span>
                  <span className='songLength'></span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
