import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { data } from "../../data";
import "./sect2.css";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

export default function Sect2() {
  const cast = data.cast;
  // current character
  const [char, setChar] = useState(null);
  const gridRef = useRef(null);

  // ! open a card
  const openCard = (e) => {
    setChar(e);
    gsap
      .timeline({ defaults: { duration: 0.7, ease: "power2.out" } })
      .to(window, {
        scrollTo: { y: ".sect2Wrap" },
      })
      .to(".charDisplay", { height: "auto" }, "<.3")
      .to(".charGrid", { opacity: 1 });
  };

  useEffect(() => {
    const keypress = (e) => {
      if (e.key === "Escape") {
        gsap
          .timeline({ defaults: { duration: 0.7, ease: "power2.out" } })
          .to(".charGrid", { opacity: 0 })
          .to(".charDisplay", { height: "0px" });
      }
    };

    document.addEventListener("keydown", (e) => keypress(e));

    return () => {
      document.removeEventListener("keydown", (e) => keypress(e));
    };
  }, []);

  return (
    <div className='sect2Wrap'>
      <span className='green uppercase displayLarge largeSubhead'>Cast</span>
      <div className='charDisplay'>
        <div className='charGrid' ref={gridRef}>
          <div className='charCopyWrap'>
            {char && (
              <div className='charCopy'>
                <span className='charSpecs'>
                  <p className='pink displayFont displayMedium uppercase charName'>
                    {char.name}
                  </p>
                  <span>
                    <p className='green uppercase displayFont displaySmall charRace'>
                      {char.race}
                    </p>
                    <p className='green uppercase displayFont displaySmall charClass'>
                      {char.class}
                    </p>
                    <p className='green uppercase displayFont displaySmall charAlign'>
                      {char.alignment}
                    </p>
                  </span>
                </span>
                <div className='charDesc copyDefault green'>{char.about}</div>
                <div className='playerNotes copyFont green'>
                  <p className='fontBold'>Player’s Notes</p>
                  <p>{char.playersNotes}</p>
                </div>
              </div>
            )}
          </div>
          {char && (
            <div
              className='charPhoto'
              style={{ backgroundImage: `url(${char.art})` }}
            ></div>
          )}
        </div>
      </div>
      {/* end char display  */}
      <div className='charCardsWrap'>
        {cast.map((e, index) => (
          <img
            src={cast[index].card}
            alt={`the ${e.class}`}
            key={e.name}
            onClick={() => openCard(e)}
          />
        ))}
      </div>
    </div>
  );
}
