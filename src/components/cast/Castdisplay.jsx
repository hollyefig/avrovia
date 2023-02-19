import React from "react";
import "./cast.css";

export default function Castdisplay({ castSelected, currentChar, backButton }) {
  return (
    // <div
    //   className='castDisplayWrapper'
    //   style={castSelected ? { height: "100%" } : { height: "0%" }}
    // >
    <div
      className={`castDisplayWrapper ${
        castSelected && "castDisplayWrapperHeight"
      }`}
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
