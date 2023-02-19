import React, { useEffect } from "react";
import "./cast.css";

export default function Castdisplay({ castSelected, currentChar, backButton }) {
  useEffect(() => {
    const keydown = (e) => {
      if (e.key === "Escape") {
        backButton();
      }
    };
    window.addEventListener("keydown", keydown);
    return () => {
      window.removeEventListener("keydown", keydown);
    };
  }, [backButton]);

  return (
    <div
      className={`castDisplayWrapper ${
        castSelected && "castDisplayWrapperHeight"
      }`}
      style={
        castSelected ? { transitionDelay: "1s" } : { transitionDelay: "0s" }
      }
    >
      <div className='castDisplayGrid'>
        {currentChar && (
          <>
            {" "}
            <div className='castImg'>
              <img src={currentChar.art} alt={currentChar.name} />
            </div>
            <div className='castInfo'>
              <div className='castInfoDiv'>
                <div className='goldFrame'></div>
                <div className='displayName'>{currentChar.name}</div>
                <div className='displayRace'>{currentChar.race}</div>
                <div className='displayClass'>{currentChar.class}</div>
                <div className='displayAbout'>{currentChar.about}</div>
                <div className='backButton'>
                  <button type='button' onClick={backButton}>
                    Back
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
