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
        castSelected ? { transitionDelay: ".5s" } : { transitionDelay: "0s" }
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
                <div className='castInfoGrid'>
                  <div className='goldFrame'></div>
                  <div className='displayName'>{currentChar.name}</div>
                  <div className='castImgMobile'>
                    <img src={currentChar.art} alt={currentChar.name} />
                  </div>
                  <div className='charDetailsGrid'>
                    <div className='displayRace'>
                      Race:
                      <h3>{currentChar.race}</h3>
                    </div>
                    <div className='displayClass'>
                      Class:
                      <h3>{currentChar.class}</h3>
                    </div>
                    <div className='displayAlignment'>
                      Alignment:
                      <h3>{currentChar.alignment}</h3>
                    </div>
                  </div>
                  <div className='displayAbout'>{currentChar.about}</div>
                  <div className='displayPlayerNotes'>
                    Player's Notes:
                    <p>{currentChar.playersNotes}</p>
                  </div>
                  <div className='displaySocial'>
                    {currentChar.artist && currentChar.artistName && (
                      <>
                        Artist:
                        <p>
                          <a
                            href={currentChar.artist}
                            target='_blank'
                            rel='noreferrer'
                          >
                            {currentChar.artistName}
                          </a>
                        </p>
                      </>
                    )}
                  </div>
                </div>
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
