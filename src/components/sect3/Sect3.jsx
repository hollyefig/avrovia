import React, { useState } from "react";
import "./sect3.css";
import { musicData } from "./music";
import ReactAudioPlayer from "react-audio-player";

export default function Sect3() {
  const [track, setTrack] = useState();
  // ? set song
  const songSelect = (e) => {
    setTrack(e);
  };

  return (
    <div className='sect2Wrap'>
      <span className='green uppercase displayLarge largeSubhead'>Music</span>
      <div className='sect3Bg'>
        <div className='sect3Flex'>
          <div className='sect3Left'>
            <div className='player'>
              <span className='songTitle displayFont displaySmall'>
                {track ? track.name : <>-</>}
              </span>
              <ReactAudioPlayer src={track && track.mp3} autoPlay controls />
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
