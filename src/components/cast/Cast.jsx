import React from "react";
import "./cast.css";
import Castcard from "./Castcard";
import { castData } from "../../castData";

export default function Cast({ castRef, castVisible }) {
  return (
    <div className='castWrapper scrollSnap' id='castWrapper' ref={castRef}>
      <div
        className={`castContainer  ${
          castVisible ? "castContainerFadeIn" : null
        }`}
      >
        <div className='castTitle'>
          <h1>Meet The Players</h1>
        </div>
        <div className='characterWrapper'>
          {castData.map((e) => {
            return <Castcard cast={e} castVisible={castVisible} />;
          })}
        </div>
      </div>
    </div>
  );
}
