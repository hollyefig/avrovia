import React, { useState, useEffect } from "react";
import "./sect1.css";
import Countdown from "./Countdown";
import { data } from "../../data.js";
import Svgs from "../Svgs.jsx";
import gsap from "gsap";
import followAdventure from "../../assets/images/followAdventure.png";

export default function Sect1() {
  // ? determine session is live
  const [inSession, setInSession] = useState(false);

  // * useEffect
  useEffect(() => {
    gsap
      .timeline({ defaults: { duration: 0.7, ease: "power2.inOut" } })
      .add(() => console.log("gsap"))
      .to(".sect1Wrap > div", { y: -20, opacity: 1, stagger: 0.2, delay: 2.5 });
  }, []);

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

      <div className='sect1Content'>
        {/* copy  */}
        <div className='sect1Left'>
          <img src={followAdventure} alt='Follow The Adventure!' />
        </div>

        <div className='sect1Right'>
          <span className='pink fontBold copyMedium'>
            <em>Mondays @ 3pm EST</em>
          </span>
          <span className='copyDefault green'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae debitis excepturi architecto ipsum, aliquid quia autem
              nam, cum aspernatur facere accusantium illo pariatur ex in dolor
              animi quae?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae debitis excepturi architecto ipsum
            </p>
          </span>

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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
