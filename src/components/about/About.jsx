import React from "react";
import "./about.css";
import d20 from "../../assets/d20.svg";

export default function About({ aboutRef, aboutVisible }) {
  return (
    <div className='aboutWrapper scrollSnap' id='aboutWrapper' ref={aboutRef}>
      <div className='aboutCopy'>
        <div className='d20'>
          <img
            src={d20}
            alt='d20'
            class={`d20svg ${aboutVisible ? "animateDice" : null}`}
          />
        </div>
        <div
          className={`aboutBlurb ${aboutVisible ? `fadeInAboutBlurb` : null}`}
        >
          <h1>Follow the Adventure!</h1>
          <div className='aboutSubheader'>Tune in Every Monday @ 3pm EST</div>
          <div className='aboutBodyCopy'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            debitis excepturi architecto ipsum, aliquid quia autem nam, cum
            aspernatur facere accusantium illo pariatur ex in dolor animi quae?
          </div>
          <div className='aboutDiscordLink'>
            <button type='button'>Join Our Discord</button>
          </div>
        </div>
      </div>
    </div>
  );
}
