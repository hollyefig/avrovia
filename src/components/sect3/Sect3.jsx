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
                width={svgWidth + 20}
                height={svgWidth + 20}
                xmlns='http://www.w3.org/2000/svg'
                className='parentSoundProg'
              >
                <circle
                  cx={svgWidth / 2 + 10}
                  cy={svgWidth / 2 + 10}
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
                width={svgWidth}
                height={svgWidth}
              >
                <use href='#musicSym'></use>
              </svg>
            </span>
            <div className='player'>
              <span className='songTitle displayFont displaySmall'>
                {track ? track.name : <em>Choose a song</em>}
              </span>

              <span onClick={() => pauseSong()}>{play ? "pause" : "play"}</span>

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
