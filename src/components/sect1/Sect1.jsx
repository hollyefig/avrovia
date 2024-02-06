import React, { useState } from "react";
import "./sect1.css";
import Countdown from "./Countdown";
import { data } from "../../data.js";
import Svgs from "../Svgs.jsx";

export default function Sect1() {
  //   const resetTrigger = {
  //     day: 1,
  //     hour: 19,
  //   };

  // ? determine session is live
  const [inSession, setInSession] = useState(false);

  return (
    <div className='sect1Wrap'>
      <Svgs />
      {/* countdown */}
      <div className={`countdownWrap ${inSession && "seshLiveAnimate"}`}>
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
          <Countdown setInSession={setInSession} inSession={inSession} />
        </span>
      </div>

      {/* copy  */}
      <div className='sect1Copy'>
        <span className='uppercase green displayFont displayMedium'>
          Follow the adventure!
        </span>
        <span className='pink fontBold copyMedium'>
          <em>Mondays @ 3pm EST</em>
        </span>
        <span className='copyDefault green'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          debitis excepturi architecto ipsum, aliquid quia autem nam, cum
          aspernatur facere accusantium illo pariatur ex in dolor animi quae?
        </span>
      </div>

      {/* socials  */}
      <div className='iconSocialsWrap'>
        {data.socials.map((e, index) => (
          <div className='iconSocial' key={index}>
            <div className='iconCircle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                className='iconSocials'
              >
                <use href={`#${e}`}></use>
              </svg>
            </div>
            <span>{e}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
