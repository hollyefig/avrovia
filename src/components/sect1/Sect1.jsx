import React from "react";
import "./sect1.css";
import Countdown from "./Countdown";

export default function Sect1() {
  const timezone = Intl.DateTimeFormat()
    .resolvedOptions()
    .timeZone.replace("_", " ");

  console.log(new Date());

  return (
    <div className='sect1Wrap'>
      <div className='countdownWrap'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='14'
          height='14'
          viewBox='0 0 14 14'
          fill='none'
        >
          <circle cx='7' cy='7' r='7' fill='#D9D9D9' />
        </svg>
        <span className='countdownCopy'>
          <span className='fontBold'>
            <Countdown />
          </span>{" "}
          <em>until next session | {timezone}</em>
        </span>
      </div>
    </div>
  );
}
