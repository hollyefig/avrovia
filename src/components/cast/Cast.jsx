import React, { useState } from "react";
import "./cast.css";
import Castcard from "./Castcard";
import { castData } from "../../castData";
import Castdisplay from "./Castdisplay";

export default function Cast({ castRef, castVisible }) {
  const [castSelected, setCastSelected] = useState(false),
    [currentChar, setCurrentChar] = useState();

  const castContainerOut = (e) => {
    setCastSelected(true);
    setCurrentChar(e);
  };

  const backButton = () => {
    setCastSelected(false);
    setCurrentChar(null);
  };

  return (
    <div className='castWrapper scrollSnap' id='castWrapper' ref={castRef}>
      <div
        className={`castContainer ${castVisible && "castContainerFadeIn"} ${
          castSelected && "slideUp"
        }`}
      >
        <div className='castTitle'>
          <h1>Meet The Players</h1>
        </div>
        <div className='characterWrapper'>
          {castData.map((e) => {
            return (
              <Castcard
                cast={e}
                castVisible={castVisible}
                castContainerOut={castContainerOut}
              />
            );
          })}
        </div>
      </div>
      <Castdisplay
        castSelected={castSelected}
        currentChar={currentChar}
        backButton={backButton}
      />
    </div>
  );
}
